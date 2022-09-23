import { Order } from '../@types/typings';
import supabase from './supabaseClient';

export const sendOrder = async (order: Omit<Order, 'id'>) => {
  const { status } = await supabase.from('orders').insert(order);
  return status;
};

export const deleteOrder = async (id: number | undefined) => {
  const { data, error } = await supabase.from('orders').delete().match({ id });
  return { data, error };
};

export const deleteQuee = async (id: number | undefined) => {
  const { data, error } = await supabase.from('quee').delete().match({ id });
  return { data, error };
};

export const sendQuee = async (order: Order, id: number | undefined) => {
  const { data, error } = await supabase.from('orders').delete().match({ id });
  const { status } = await supabase.from('quee').insert(order);
  return { status, data, error };
};
