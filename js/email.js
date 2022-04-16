function sendEmail(){
const email = document.querySelector('email');
const name = document.querySelector('name');
const company = document.querySelector('company');
const phone = document.querySelector('phone');
const message = document.querySelector('message');
const form = document.querySelector('form');


console.log(name.value);

Email.send({
    Host : "smtp.elasticemail.com",
    SecureToken : "68b84a42-f904-442f-a91e-96127298d3e4",
    To : 'jonathan.dikteruk@gmail.com',
    From : name.value,
    Subject : "Message from Website",
    Body : message.value
}).then(
  message => alert(message)
);
}