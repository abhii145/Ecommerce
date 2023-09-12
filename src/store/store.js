import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import productReducer from "./productSlice";
import jeweleryReducer from "./jewelerySlice";
import womensReducer from "./womensSlice";
import mensReducer from "./mensSlice";
import electronicsReducer from "./electronicsSlice";

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    product: productReducer,
    jewelery: jeweleryReducer,
    womens: womensReducer,
    mens: mensReducer,
    electronics: electronicsReducer,
  },
});

export const persistor = persistStore(store);

export default store;
