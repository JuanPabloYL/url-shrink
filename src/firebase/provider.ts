import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  type UserCredential,
} from "firebase/auth";
import { FirebaseAuth } from "./firebase";

export const registerUserWithEmailPassword = async ({
  displayName,
  email,
  password,
}: {
  displayName: string;
  email: string;
  password: string;
}): Promise<UserCredential> => {
  try {
    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    if (!response.user) {
      throw new Error("User not found after registration");
    }

    await updateProfile(response.user, { displayName });
    return response;
  } catch (error) {
    console.log(error);
    throw Error;
  }
};

export const startLogInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  // siginWithEmailAndPassword
  try {
    const userCredential = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    if (!userCredential.user) {
      throw new Error("User not found after login");
    }

    return userCredential;
  } catch (error) {
    console.log(error);
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
