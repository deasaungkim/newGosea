import ReactDOM from "react-dom/client";
import "../../CSS/index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "../Redux/Store/configStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
