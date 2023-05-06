const form = document.getElementById('contact-form');
 
form.addEventListener('submit', function(event) {
	event.preventDefault();
	sendEmail();
});
 
function sendEmail() {
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let message = document.getElementById('message');
 
	Email.send({
		SecureToken : "Your_Secure_Token",
		To : "recipient@example.com",
		From : email.value,
		Subject : "New message from " + name.value,
		Body : message.value
	}).then(
		message => alert("Thank you for your message!")
	);
}