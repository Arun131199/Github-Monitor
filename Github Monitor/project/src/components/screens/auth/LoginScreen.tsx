import * as React from "react";
import { alert } from "@nativescript/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";
import { storeUserData } from "../../../services/authService";

type LoginScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Login">;
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Mock login - replace with actual authentication
    const mockUser = {
      id: "1",
      email,
      name: "Demo User"
    };
    
    storeUserData(mockUser);
    navigation.navigate("Home");
  };

  return (
    <flexboxLayout className="p-4 h-full justify-center">
      <stackLayout className="w-full space-y-4">
        <label className="text-2xl font-bold text-center mb-8">DroneServe Pro</label>
        
        <textField
          className="p-4 border rounded-lg"
          hint="Email"
          keyboardType="email"
          autocorrect={false}
          autocapitalizationType="none"
          text={email}
          onTextChange={(e) => setEmail(e.value)}
        />
        
        <textField
          className="p-4 border rounded-lg"
          hint="Password"
          secure={true}
          text={password}
          onTextChange={(e) => setPassword(e.value)}
        />
        
        <button
          className="bg-blue-500 text-white p-4 rounded-lg"
          onTap={handleLogin}
        >
          Login
        </button>
        
        <button
          className="text-blue-500"
          onTap={() => navigation.navigate("Register")}
        >
          Create Account
        </button>
      </stackLayout>
    </flexboxLayout>
  );
}