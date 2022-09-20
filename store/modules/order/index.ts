/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { Order, Product } from '../../../@types/typings';
import { sendOrder } from '../../../services/orders';

const initialState: Order = {
  orderItems: [],
  orderTotalQuantity: 0,
  orderTotalAmount: 0,
  clientName: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder(state, action) {
      const itemIndex = state.orderItems.findIndex(
        (item: Product) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.orderItems[itemIndex].orderQuantity += 1;
      } else {
        const tempItem: Product = { ...action.payload, orderQuantity: 1 };
        state.orderItems.push(tempItem);
      }
    },
    removeFromOrder(state, action) {
      const newOrderItems = state.orderItems.filter(
        (item: Product) => item.id !== action.payload.id,
      );
      state.orderItems = newOrderItems;
    },
    decreaseOrderQuantity(state, action) {
      const itemIndex = state.orderItems.findIndex(
        (item: Product) => item.id === action.payload.id,
      );
      if (state.orderItems[itemIndex].orderQuantity > 1) {
        state.orderItems[itemIndex].orderQuantity -= 1;
      } else if (state.orderItems[itemIndex].orderQuantity === 1) {
        const newOrderItems = state.orderItems.filter(
          (item: Product) => item.id !== action.payload.id,
        );
        state.orderItems = newOrderItems;
      }
    },
    cancelOrder(state) {
      const newOrderItems: Product[] = [];
      state.orderItems = newOrderItems;
    },
    dispatchOrder(state, action) {
      state.clientName = action.payload;
      sendOrder(state);
    },
    getTotals(state) {
      const { total, quantity } = state.orderItems.reduce(
        (
          orderTotal: { total: number; quantity: number },
          orderItems: Product,
        ) => {
          const { orderQuantity, price } = orderItems;
          const itemTotal = +price * (orderQuantity || 0);
          orderTotal.total += itemTotal;
          orderTotal.quantity += orderQuantity || 0;
          return orderTotal;
        },
        { total: 0, quantity: 0 },
      );
      state.orderTotalQuantity = quantity;
      state.orderTotalAmount = total;
    },
  },
});

export const {
  addToOrder,
  removeFromOrder,
  decreaseOrderQuantity,
  getTotals,
  cancelOrder,
  dispatchOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
