import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}/>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
