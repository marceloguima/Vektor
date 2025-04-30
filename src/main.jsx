import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Promocoes from "./routes/Promocoes.jsx";
import MaisComprados from "./routes/MaisComprados.jsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/promocoes",
        element: <Promocoes />,
    },
    {
        path: "/mais-comprados",
        element: <MaisComprados />,
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
