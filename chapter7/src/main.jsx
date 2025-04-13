import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import QueryProvider from "./query/QureryProvider.jsx";

createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryProvider>
);
