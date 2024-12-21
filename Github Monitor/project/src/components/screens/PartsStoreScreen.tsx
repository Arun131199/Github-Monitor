import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type PartsStoreProps = {
  navigation: FrameNavigationProp<MainStackParamList, "PartsStore">;
};

const droneParts = [
  { id: 1, name: "Propeller Set", price: 29.99, image: "~/images/propeller.jpg" },
  { id: 2, name: "Battery Pack", price: 99.99, image: "~/images/battery.jpg" },
  { id: 3, name: "Camera Mount", price: 49.99, image: "~/images/mount.jpg" },
  { id: 4, name: "Controller", price: 199.99, image: "~/images/controller.jpg" },
];

export function PartsStoreScreen({ navigation }: PartsStoreProps) {
  return (
    <scrollView className="p-4">
      <label className="text-2xl font-bold mb-6">Drone Parts Store</label>

      <gridLayout rows="auto, auto" columns="*, *" className="gap-4">
        {droneParts.map((part, index) => (
          <stackLayout
            key={part.id}
            row={Math.floor(index / 2)}
            col={index % 2}
            className="bg-white p-4 rounded-lg shadow"
          >
            <image src={part.image} className="w-32 h-32 mb-2" />
            <label className="font-bold">{part.name}</label>
            <label className="text-green-600">${part.price}</label>
            <button
              className="bg-blue-500 text-white p-2 rounded mt-2"
              onTap={() => navigation.navigate("PartDetails", { partId: part.id })}
            >
              View Details
            </button>
          </stackLayout>
        ))}
      </gridLayout>
    </scrollView>
  );
}