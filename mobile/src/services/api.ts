import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000/api';

export class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor for token
    this.client.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Handle token refresh or redirect to login
          await AsyncStorage.removeItem('authToken');
        }
        return Promise.reject(error);
      }
    );
  }

  // Auth endpoints
  async login(phone: string, otp: string, sessionId: string) {
    return this.client.post('/auth/verify-otp', { phone, otp, sessionId });
  }

  async sendOTP(phone: string) {
    return this.client.post('/auth/send-otp', { phone });
  }

  async refreshToken(refreshToken: string) {
    return this.client.post('/auth/refresh', { refreshToken });
  }

  // Booking endpoints
  async createBooking(bookingData: any) {
    return this.client.post('/bookings', bookingData);
  }

  async getBookings(page = 1, limit = 10) {
    return this.client.get('/bookings', { params: { page, limit } });
  }

  async getBookingDetails(bookingId: string) {
    return this.client.get(`/bookings/${bookingId}`);
  }

  // Pricing endpoints
  async calculatePrice(origin: any, destination: any, itemCount: number, timeSlot: string) {
    return this.client.post('/distance/calculate', {
      origin,
      destination,
      itemCount,
      timeSlot,
    });
  }

  // Payment endpoints
  async createPaymentOrder(bookingId: string, amount: number) {
    return this.client.post('/payments/create-order', {
      bookingId,
      amount,
      currency: 'INR',
    });
  }

  async verifyPayment(paymentData: any) {
    return this.client.post('/payments/verify', paymentData);
  }

  // User endpoints
  async getProfile() {
    return this.client.get('/users/profile');
  }

  async updateProfile(profileData: any) {
    return this.client.patch('/users/profile', profileData);
  }

  async getSavedAddresses() {
    return this.client.get('/users/addresses');
  }

  async saveAddress(addressData: any) {
    return this.client.post('/users/addresses', addressData);
  }
}

export const apiClient = new ApiClient();
