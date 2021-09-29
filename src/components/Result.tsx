import { Component, createSignal } from "solid-js";

enum Modes {
  RANDOM = "random",
  IDENTIFIABLE = "identifiable",
}

const Input: Component<{ result: string | undefined }> = () => {
  const [originalUrl, setOriginalUrl] = createSignal("");
  const [type, setType] = createSignal("identifiable");

  return (
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Shrtr: Generate a short URL
        </h2>
      </div>
      <div class="mt-8 space-y-6">
        <div class="mt-4"></div>
        <input type="hidden" name="remember" value="true" />
      </div>
    </div>
  );
};

export default Input;
