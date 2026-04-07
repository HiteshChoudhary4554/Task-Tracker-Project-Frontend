import App from "./app";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { appStore } from "./common/store/Store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={appStore}>
      <App />
    </Provider>
  </BrowserRouter>,
);
