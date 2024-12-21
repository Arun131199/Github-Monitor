export type MainStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Services: undefined;
  ServiceBooking: {
    serviceId: number;
  };
  PartsStore: undefined;
  PartDetails: { 
    partId: number;
  };
  Profile: undefined;
  BookingConfirmation: {
    serviceType: string;
    date: string;
  };
};