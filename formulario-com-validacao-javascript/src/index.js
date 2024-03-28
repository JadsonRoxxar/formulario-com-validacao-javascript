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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    while ((window.span.forEach.outerText = true)) {
        alert("Preencha os campos obrigatórios!");
    }

    form.submit();
});

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
