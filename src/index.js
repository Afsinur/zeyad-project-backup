import "./styles/globals.css";
import "./styles/swiper.styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./pages";
import DynamicPages from "./components/dynamic-routes/DynamicPages";
import StripeSuccess from "./pages/stripe/success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:page",
    element: <DynamicPages />,
  },
  {
    path: "/stripe-success",
    element: <StripeSuccess />,
  },
  {
    path: "/stripe-cancel",
    element: (
      <div>
        <p>your payment was canceled!</p>
        <Link to="/">
          <button>Shop Again</button>
        </Link>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
