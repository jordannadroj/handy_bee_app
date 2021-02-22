import consumer from "./consumer";

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');

  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;
    const sender = document.getElementById('sender');


    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        console.log(data); // called when data is broadcast in the cable
        messagesContainer.insertAdjacentHTML('beforeend', data);
        // console.log(sender.dataset.userId);
      },
    });
  }
}

// dz default a text area starts a new line when "enter" key is pressed
// this method allows for the message to be submitted when the enter key is pressed
// a new line is created only when "shift" + "enter" are presses
const enterkey = () => {
  const messages = document.getElementById("message_content");
  messages.addEventListener("keydown", (e) => {
    // console.log(e);
    // if enter is presses and shift is not pressed, then the message can be submitted
    if (e.key === "Enter" && !e.shiftKey) {
      // console.log("Enter key");
      e.preventDefault();
      document.querySelector(".button-main").click();
    }
  })
};

export { initChatroomCable, enterkey };
