const form = document.querySelector('.chat-input');
const nameInput = form.querySelector('input[type="text"]:first-of-type');
const messageInput = form.querySelector('input[type="text"]:last-of-type');
const chatHistory = document.querySelector('.chat-history');

form.addEventListener('submit', event => {
	event.preventDefault();
	const name = nameInput.value;
	const message = messageInput.value;
	if (name && message) {
		const messageContainer = document.createElement('div');
		messageContainer.classList.add('message', 'sent');
		messageContainer.innerHTML = `
			<p><strong>${name}</strong>: ${message}</p>
		`;
		chatHistory.appendChild(messageContainer);
		messageInput.value = '';
	}
});
