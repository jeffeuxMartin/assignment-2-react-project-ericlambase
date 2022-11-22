import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom"; // <=====

import Layout from "./layout";

import Flashcard from "./apps/flashcard/containers/Flashcard";
import Translation from "./apps/translation/main";

const Home = () => <h1>Homepage!</h1>
const Notfound = () => "404";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flashcard" element={<Flashcard />} />
          <Route path="translation" element={<Translation />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
