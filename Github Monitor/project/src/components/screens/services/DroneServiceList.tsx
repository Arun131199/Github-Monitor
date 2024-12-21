import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

type DroneServiceListProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Services">;
};

const services = [
  {
    id: 1,
    name: "Agricultural Spraying",
    description: "Precision crop spraying services",
    price: "From $200/acre"
  },
  {
    id: 2,
    name: "3D Mapping",
    description: "High-resolution terrain mapping",
    price: "From $500/project"
  },
  {
    id: 3,
    name: "Aerial Photography",
    description: "Professional aerial photography",
    price: "From $300/hour"
  }
];

export function DroneServiceList({ navigation }: DroneServiceListProps) {
  return (
    <scrollView className="p-4">
      <label className="text-2xl font-bold mb-6">Our Services</label>
      
      <stackLayout className="space-y-4">
        {services.map(service => (
          <gridLayout
            key={service.id}
            className="bg-white p-4 rounded-lg shadow"
            rows="auto, auto, auto"
            columns="*, auto"
          >
            <label row={0} col={0} className="font-bold text-lg">{service.name}</label>
            <label row={1} col={0} className="text-gray-600">{service.description}</label>
            <label row={2} col={0} className="text-green-600">{service.price}</label>
            <button
              row={0} col={1} rowSpan={3}
              className="bg-blue-500 text-white p-2 rounded"
              onTap={() => navigation.navigate("ServiceBooking", { serviceId: service.id })}
            >
              Book Now
            </button>
          </gridLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}