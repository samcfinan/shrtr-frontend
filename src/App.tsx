import { Component, createSignal, Show } from "solid-js";

import "tailwindcss/tailwind.css";
// import styles from "./App.module.css";
import Input from "./components/Input";
import Result from "./components/Result";

const App: Component = () => {
  const [result, setResult] = createSignal<string>();

  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Show when={result()}>
          <Result result={result()} />
        </Show>
        <Show when={!result()}>
          <Input />
        </Show>
      </div>
    </div>
  );
};

export default App;
