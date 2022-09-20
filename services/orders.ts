import { Order } from '../@types/typings';
import api from './api';

export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get<Order[]>('/orders');
  return response.data;
};

export const sendOrder = async (order: Omit<Order, 'id'>): Promise<Order> => {
  const response = await api.post<Order>('/orders', order);
  return response.data;
};

export const deleteOrder = async (id: number | undefined): Promise<void> => {
  await api.delete(`/orders/${id}`);
};

export const getQuee = async (): Promise<Order[]> => {
  const response = await api.get<Order[]>('/quee');
  return response.data;
};

export const deleteQuee = async (id: number | undefined): Promise<void> => {
  await api.delete(`/quee/${id}`);
};

export const sendQuee = async (order: Omit<Order, 'id'>): Promise<Order> => {
  const response = await api.post<Order>('/quee', order);
  return response.data;
};
