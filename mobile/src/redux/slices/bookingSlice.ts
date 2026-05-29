import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  pickupLocation: {
    address: string;
    latitude: number;
    longitude: number;
  } | null;
  dropLocation: {
    address: string;
    latitude: number;
    longitude: number;
  } | null;
  inventory: {
    bedroom: number;
    livingRoom: number;
    kitchen: number;
    misc: number;
    cartons: number;
  };
  bookingDate: string | null;
  timeSlot: 'morning' | 'afternoon' | 'evening' | null;
  serviceType: string | null;
  estimatedPrice: number | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  pickupLocation: null,
  dropLocation: null,
  inventory: {
    bedroom: 0,
    livingRoom: 0,
    kitchen: 0,
    misc: 0,
    cartons: 0,
  },
  bookingDate: null,
  timeSlot: null,
  serviceType: null,
  estimatedPrice: null,
  isLoading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setPickupLocation: (state, action: PayloadAction<any>) => {
      state.pickupLocation = action.payload;
    },
    setDropLocation: (state, action: PayloadAction<any>) => {
      state.dropLocation = action.payload;
    },
    setInventory: (state, action: PayloadAction<any>) => {
      state.inventory = action.payload;
    },
    setBookingDate: (state, action: PayloadAction<string>) => {
      state.bookingDate = action.payload;
    },
    setTimeSlot: (state, action: PayloadAction<'morning' | 'afternoon' | 'evening'>) => {
      state.timeSlot = action.payload;
    },
    setServiceType: (state, action: PayloadAction<string>) => {
      state.serviceType = action.payload;
    },
    setEstimatedPrice: (state, action: PayloadAction<number>) => {
      state.estimatedPrice = action.payload;
    },
    resetBooking: (state) => {
      return initialState;
    },
  },
});

export const {
  setPickupLocation,
  setDropLocation,
  setInventory,
  setBookingDate,
  setTimeSlot,
  setServiceType,
  setEstimatedPrice,
  resetBooking,
} = bookingSlice.actions;
export default bookingSlice.reducer;
