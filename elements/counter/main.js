import { topTitle } from "./../../components/top-title.js";
import { counter } from "./../../components/counter.js";

const titleEl = document.getElementById("title");
const counterEl = document.getElementById("counter");

titleEl.innerHTML = `${topTitle("Counter")}`;
counterEl.innerHTML = `${counter()}`;
