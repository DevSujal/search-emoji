import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import { categorys } from "./store/Categorys.js";
import { Provider } from "react-redux";
import Emoji from "./components/Emoji.jsx";
import { store } from "./store/store.js";



const router = createHashRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      {categorys.map((category) => (
        <Route
          key={category}
          path={category}
          element={<Emoji category={category} />}
        />
      ))}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
