"use client";
import { Header } from "@/components/Header";
import store from "@/store";
import { StrictMode } from "react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <Header />
      <Provider store={store}>
        {children}
        </Provider>
    </StrictMode>
  );
}
