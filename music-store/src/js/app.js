import { registerAdmin } from "./operationConnection.js";

const btnLogin = document.querySelector('.btn-login');
const input_email = document.querySelector('#email');
const input_password = document.querySelector('#password');

console.log(input_password);
console.log(input_email);
console.log(btnLogin);

registerAdmin(input_email.textContent,input_password.textContent);

