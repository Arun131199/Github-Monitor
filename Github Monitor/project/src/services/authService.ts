import { ApplicationSettings } from "@nativescript/core";

export const storeUserData = (userData: UserData) => {
  ApplicationSettings.setString("userData", JSON.stringify(userData));
};

export const getUserData = (): UserData | null => {
  const data = ApplicationSettings.getString("userData");
  return data ? JSON.parse(data) : null;
};

export const clearUserData = () => {
  ApplicationSettings.remove("userData");
};

export interface UserData {
  id: string;
  email: string;
  name: string;
}