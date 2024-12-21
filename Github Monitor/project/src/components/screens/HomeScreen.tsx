import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-3xl font-bold mb-8 text-center">
        DroneServe Pro
      </label>
      
      <gridLayout rows="auto, auto" columns="*, *" className="w-full p-4 gap-4">
        <button
          row="0"
          col="0"
          className="bg-blue-500 text-white p-4 rounded-lg"
          onTap={() => navigation.navigate("ServiceBooking")}
        >
          Book Service
        </button>
        
        <button
          row="0"
          col="1"
          className="bg-green-500 text-white p-4 rounded-lg"
          onTap={() => navigation.navigate("PartsStore")}
        >
          Parts Store
        </button>
        
        <button
          row="1"
          col="0"
          className="bg-purple-500 text-white p-4 rounded-lg"
          onTap={() => navigation.navigate("MyBookings")}
        >
          My Bookings
        </button>
        
        <button
          row="1"
          col="1"
          className="bg-orange-500 text-white p-4 rounded-lg"
          onTap={() => navigation.navigate("Profile")}
        >
          Profile
        </button>
      </gridLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
});