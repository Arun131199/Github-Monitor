import * as React from "react";
import { alert } from "@nativescript/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";
import { signUp } from "../../../services/auth";

type RegisterScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Register">;
};

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleRegister = async () => {
    if (!email || !password || !fullName) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      await signUp(email, password, fullName, phoneNumber);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <flexboxLayout className="p-4 h-full justify-center">
      <stackLayout className="w-full space-y-4">
        <label className="text-2xl font-bold text-center mb-8">Create Account</label>
        
        <textField
          className="p-4 border rounded-lg"
          hint="Full Name"
          text={fullName}
          onTextChange={(e) => setFullName(e.value)}
        />

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

        <textField
          className="p-4 border rounded-lg"
          hint="Phone Number (Optional)"
          keyboardType="phone"
          text={phoneNumber}
          onTextChange={(e) => setPhoneNumber(e.value)}
        />
        
        <button
          className="bg-blue-500 text-white p-4 rounded-lg"
          onTap={handleRegister}
          isEnabled={!loading}
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
        
        <button
          className="text-blue-500"
          onTap={() => navigation.navigate("Login")}
        >
          Already have an account? Login
        </button>
      </stackLayout>
    </flexboxLayout>
  );
}