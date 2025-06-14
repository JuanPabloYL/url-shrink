import { createContext, useContext, useState, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/firebase";
import { getTinyUrl } from "../../utils/tintyApi";

interface UrlEntry {
  id?: string;
  alias?: string;
  shortURL: string;
  longURL: string;
}

interface UrlContextType {
  urls: UrlEntry[];
  addUrl: ({
    longURL,
    alias,
  }: {
    longURL: string;
    alias: string;
  }) => Promise<void>;
  fetchUrls: () => Promise<void>;
  deleteURL: (id: string) => Promise<void>;
}

export const UrlContext = createContext<UrlContextType | null>(null);

export const UrlProvider = ({ children }: { children: ReactNode }) => {
  const [urls, setUrls] = useState<UrlEntry[]>([]);
  const { state } = useAuth();
  const user = state.user;

  const addUrl = async ({
    longURL,
    alias,
  }: {
    longURL: string;
    alias: string;
  }) => {
    if (!user) return;
    if (!alias) alias = "Default";

    console.log("Start new url");

    const shortUrl = await getTinyUrl(longURL);
    if (!shortUrl) throw new Error("TINY URL Failed");

    const newUrl: UrlEntry = {
      longURL,
      shortURL: shortUrl,
      alias,
    };

    const newDoc = doc(collection(FirebaseDB, `${user.uid}/app/urls`));
    await setDoc(newDoc, newUrl);

    setUrls((prev) => [
      ...prev,
      { id: newDoc.id, longURL, shortURL: shortUrl, alias },
    ]);
  };

  const deleteURL = async (id: string) => {
    try {
      const docRef = doc(FirebaseDB, `${user?.uid}/app/urls`, id);
      // await deleteDoc();
      await deleteDoc(docRef);
      setUrls((prev) => prev.filter((url) => url.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUrls = async () => {
    if (!user) return;

    const urlCollection = collection(FirebaseDB, `${user.uid}/app/urls`);
    const snapshot = await getDocs(urlCollection);
    const urlList: UrlEntry[] = [];

    snapshot.forEach((doc) => {
      urlList.push({ id: doc.id, ...(doc.data() as UrlEntry) });
    });

    setUrls(urlList);
  };

  const value: UrlContextType = {
    addUrl,
    fetchUrls,
    urls,
    deleteURL,
  };

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};

export const useUrlContext = () => {
  const context = useContext(UrlContext);
  if (!context) throw new Error("useURLContext must be within UrlProvider");
  return context;
};
