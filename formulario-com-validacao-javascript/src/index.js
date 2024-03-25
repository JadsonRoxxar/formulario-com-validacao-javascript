const form = document.getElementById("form");
const fieldsForm = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
};

function setError(index) {
    fieldsForm[index].style.border = "2px solid #f52e2e";
    spans[index].style.display = "block";
    spans[index].style.color = "#f52e2e";
}

function removeError(index) {
    fieldsForm[index].style.border = "2px solid #00c22b";
    spans[index].style.display = "none";
}

function nameValidate() {
    if (fieldsForm[0].value.length < 20) {
        setError(0);
    } else {
        removeError(0);
    }
}

function emailvalidate() {
    if (!emailRegex.test(fieldsForm[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

function phoneValidate() {
    if (fieldsForm[2].value.length < 15) {
        setError(2);
    } else {
        removeError(2);
    }
}

function messageValidate() {
    if (fieldsForm[0].value.length < 5) {
        setError(3);
    } else {
        removeError(3);
    }
}

class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelectorAll(settings.form);
        this.formButton = document.querySelectorAll(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }
}

function displaySuccess() {
    this.form.innerHtml = this.settings.success;
}

function displayError() {
    this.form.innerHtml = this.settings.error;
}

function getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
}

function onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
}

async function sendForm(event) {
    try {
        this.onSubmission(event);
        await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
    } catch (error) {
        this.displayError();
        throw new Error(error);
    }
}

function init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Formulário enviado!</h1>",
    error: "<h1 class='error'>Náo foi possível enviar o formulário</h1>",
});

formSubmit.init();
