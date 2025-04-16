import { createRoot } from "react-dom/client";
import Home from "./home.jsx";
import Produtos from "./produtos.jsx";
import Index from "./index.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Index />
    {/* <Home />
    <Produtos /> */}
  </>
);
