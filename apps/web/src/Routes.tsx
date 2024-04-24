import { Route, Routes } from "react-router-dom";

import About from "./pages/About.tsx";
import { CreateForm } from "./pages/Create.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<CreateForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
