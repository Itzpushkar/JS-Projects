const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");

const userData = {
  message: null,
};

// Create message with dynamic classes and return it

const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
};

// Handle Outgoing User Message

const handleOutgoingMessage = (e) => {
  e.preventDefault();

  userData.message = messageInput.value.trim();
  messageInput.value = "";
  // Create and Display user message
  const messageContent = `<div class="message-text">
          </div>`;

  const outGoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );
  outGoingMessageDiv.querySelector(".message-text").textContent =
    userData.message;
  chatBody.appendChild(outGoingMessageDiv);
};

//Handle Enter key for sending message

messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && userMessage) {
    handleOutgoingMessage(e);
  }
});

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e));
