import "@/index.css";
import router from "@/router/index.ts";
import store from "@/store/index.ts";
import { queryClient } from "@/store/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { i18n } from "./libs";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n} defaultNS={["translation"]}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
