import { createContext, useContext, useState, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { collection, doc, setDoc } from "firebase/firestore/lite";
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
  addUrl: (longURL: string, shortURL: string) => Promise<void>;
  fetchUrls: () => void;
}

export const UrlContext = createContext<any>(null);

export const UrlProvider = ({ children }: { children: ReactNode }) => {
  const [urls, setUrls] = useState<UrlEntry>();
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

    console.log("Start new url");

    const shortUrl = await getTinyUrl(longURL);
    if (!shortUrl) throw new Error("TINY URL Failed");

    const newUrl: UrlEntry = {
      id: user.uid,
      longURL,
      shortURL: shortUrl,
    };

    const newDoc = doc(collection(FirebaseDB, `${user.uid}/app/urls`));
    const setDocResp = await setDoc(newDoc, newUrl);
    console.log(setDocResp);

    setUrls((prev) => [...prev, { id: newDoc.id, longURL, shortURL }]);
  };

  return (
    <UrlContext.Provider value={{ addUrl }}>{children}</UrlContext.Provider>
  );
};

export const useUrlContext = () => {
  const context = useContext(UrlContext);
  if (!context) throw new Error("useURLContext must be within UrlProvider");
  return context;
};
