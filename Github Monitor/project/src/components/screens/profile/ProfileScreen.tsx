import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";
import { getUserData, clearUserData } from "../../../services/authService";

type ProfileScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Profile">;
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  const userData = getUserData();

  const handleLogout = () => {
    clearUserData();
    navigation.navigate("Login");
  };

  return (
    <stackLayout className="p-4 space-y-4">
      <label className="text-2xl font-bold">Profile</label>
      
      <stackLayout className="bg-white p-4 rounded-lg shadow">
        <label className="font-bold">Name</label>
        <label className="text-gray-600">{userData?.name}</label>
        
        <label className="font-bold mt-4">Email</label>
        <label className="text-gray-600">{userData?.email}</label>
      </stackLayout>
      
      <button
        className="bg-red-500 text-white p-4 rounded-lg"
        onTap={handleLogout}
      >
        Logout
      </button>
    </stackLayout>
  );
}