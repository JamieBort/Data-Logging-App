import "./app.css";
import App from "./App.svelte";

const app = new App({
  // NOTE: next after the entry point in the index.html file.
  target: document.getElementById("app"),
});

export default app;
