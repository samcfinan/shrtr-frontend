import { Component, createSignal } from "solid-js";

enum Modes {
  RANDOM = "random",
  IDENTIFIABLE = "identifiable",
}

const Input: Component = () => {
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
        <div class="mt-4">
          <span class="text-gray-700">URL Type</span>
          <div class="mt-2">
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio"
                name="urlType"
                value="identifiable"
                checked={type() === Modes.IDENTIFIABLE}
                onInput={(e) => setType(e.currentTarget.value)}
              />
              <span class="ml-2">Identifiable</span>
            </label>
            <label class="inline-flex items-center ml-6">
              <input
                type="radio"
                class="form-radio"
                name="urlType"
                value="random"
                checked={type() === Modes.RANDOM}
                onInput={(e) => setType(e.currentTarget.value)}
              />
              <span class="ml-2">Random</span>
            </label>
          </div>
        </div>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">
              URL
            </label>
            <input
              id="url"
              name="url"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="https://my-example-domain.tld"
              onInput={(e) => setOriginalUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => console.log(`${type()}   ${originalUrl()}`)}
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Generate
          </button>
          {type()} {originalUrl()}
        </div>
      </div>
    </div>
  );
};

export default Input;
