export function chatbotEl() {
  return `<div class="card">
  <div class="x rounded-circle bg-muted">x</div>
  <div class="card-body">
    <div class="row">
      <div class="col-2">
        <img
          class="rounded-circle img-fluid"
          src="./img/chat.png"
          alt="chat"
        />
      </div>
      <div class="col-9 mr-4">
        <p class="bg-light py-1 px-1 rounded-pill">
          Hey there! Do you have question about Milu?
        </p>
      </div>
    </div>
    <button
      class="btn btn-warning btn-block rounded-pill text-white my-3"
    >
      <i class="fab fa-facebook-messenger mr-2"></i> Continue as Mehedi
    </button>
    <p class="text-muted small text-center my-2">
      Not you? Log into Messenger
    </p>
  </div>
</div>`;
}

export function chatbot() {
  const chatbot = document.getElementById("chat-bot");
  const chat = document.getElementById("chat");
  chat.innerHTML = chatbotEl();
  chatbot.addEventListener("click", () => {
    chat.style.display = "block";
  });

  const x = document.querySelector(".x");
  x.addEventListener("click", () => {
    chat.style.display = "none";
  });
}
