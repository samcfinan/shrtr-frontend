import type { Component } from "solid-js";

import "tailwindcss/tailwind.css";
// import styles from "./App.module.css";
import Input from "./components/Input";

const App: Component = () => {
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Input />
      </div>
    </div>
  );
};

export default App;
