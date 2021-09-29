import type { Component } from "solid-js";

import "tailwindcss/tailwind.css";
// import styles from "./App.module.css";
import Input from "./components/Input";

const App: Component = () => {
  return (
    <div>
      <div class="flex flex-col justify-center"></div>
      <Input />
    </div>
  );
};

export default App;
