import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type ServiceBookingProps = {
  navigation: FrameNavigationProp<MainStackParamList, "ServiceBooking">;
};

export function ServiceBookingScreen({ navigation }: ServiceBookingProps) {
  const [date, setDate] = React.useState(new Date());
  const [serviceType, setServiceType] = React.useState("maintenance");

  return (
    <scrollView className="p-4">
      <label className="text-2xl font-bold mb-6">Book Drone Service</label>

      <stackLayout className="mb-4">
        <label className="text-lg mb-2">Service Type</label>
        <listPicker
          items={["Maintenance", "Repair", "Inspection", "Custom"]}
          selectedIndex={0}
          onSelectedIndexChange={(evt) => setServiceType(evt.value)}
        />
      </stackLayout>

      <stackLayout className="mb-4">
        <label className="text-lg mb-2">Select Date</label>
        <datePicker
          date={date}
          onDateChange={(evt) => setDate(evt.value)}
        />
      </stackLayout>

      <button
        className="bg-blue-500 text-white p-4 rounded-lg mt-4"
        onTap={() => {
          // Handle booking submission
          navigation.navigate("BookingConfirmation", {
            serviceType,
            date: date.toISOString(),
          });
        }}
      >
        Book Service
      </button>
    </scrollView>
  );
}