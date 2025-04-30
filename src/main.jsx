import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Promocoes from "./routes/Promocoes.jsx";
import Calcados from "./routes/Calcados.jsx";
import EmAlta from "./routes/EmAlta.jsx";
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
        path: "/em-alta",
        element: <EmAlta />,
    },
    {
        path:"/calcados",
        element: <Calcados />
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
