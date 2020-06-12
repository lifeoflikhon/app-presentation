import { loader } from "./components/loader.js";
import { chatbot } from "./components/chatbot.js";
import { footer } from "./components/footer.js";
import { download } from "./components/download.js";
import { posts } from "./components/posts.js";
import { action } from "./components/action.js";
import { connect } from "./components/connect.js";
import { features } from "./components/features.js";
import { counter } from "./components/counter.js";
import { dashboard } from "./components/dashboard.js";

const loaderEl = document.getElementById("loader");
// loaderEl.innerHTML = loader();

// const backgroundEl = document.getElementById("background");

// setInterval(() => {
//   loaderEl.style.display = "none";
//   backgroundEl.style.height = "0";
// }, 4000);

dashboard("dashboard");
counter("counter");
features("features");
connect("connect");
action();
posts();
download();
footer();
chatbot();
