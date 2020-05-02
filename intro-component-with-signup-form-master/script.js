const first= document.getElementById('firstname');
const last= document.getElementById('lastname');
const email= document.getElementById('email');
const password= document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstValue = form['firstname'].value;
    alert(firstValue);

});