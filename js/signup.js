function removeIcon(input) {
    var icon = input.previousSibling.previousElementSibling; //get icon element
    icon.style.display = 'none';
}

function resetIcon(input) {
    var icon = input.previousSibling.previousElementSibling;
    icon.style.display = 'inline';
}


function validate(input) {
    var pattern = new RegExp(input.pattern);

    if (input.type == 'email') {
        pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    } else if (input.id == 'password1') {
        pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    } else if (input.id == 'password2') {
        pattern = new RegExp(document.getElementById('password1').value);
    }

    var errorIcon = input.nextSibling.nextElementSibling;
    console.log(errorIcon)

    if (!pattern.test(input.value)) {
        input.style.borderColor = "#e43b3b";
        errorIcon.classList.remove('fa-check-circle');
        errorIcon.classList.add('fa-times-circle');
        errorIcon.style.display = 'inline-block';
        errorIcon.style.color = '#e43b3b';
        // input.select();

        return false;
    } else {
        input.style.borderColor = "#3bcc60";
        errorIcon.style.display = 'none';
        errorIcon.classList.remove('fa-times-circle');
        errorIcon.classList.add('fa-check-circle');
        errorIcon.style.display = 'inline-block';
        errorIcon.style.color = '#3bcc60';

        return true;
    }
}




function save() {

    var form = document.forms[0];
    console.log('hiiii here!')

    for (let i = 1; i < (form.length - 1); i++) {
        if (!validate(form[i])) {
            return false;
        }
    }

    localStorage.username = form.username.value;
    localStorage.firstName = form['first-name'].value;
    localStorage.lastName = form['last-name'].value;
    localStorage.email = form.email.value;
    localStorage.phone = form.phone.value;
    localStorage.password = form.password1.value;

    return true;
}



var name = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');

function post() {

    var para = document.createElement("p");
    var sp = document.createElement("span");
    var x = document.getElementById("txtArea").value;

    var node = document.createTextNode(x);
    var node2 = document.createTextNode(name);


    var a = sp.appendChild(node2);
    var b = para.appendChild(node);

    var element = document.getElementById("div1");
    var y = element.appendChild(sp);
    var z = element.appendChild(para);

    document.getElementById("txtArea").value = "";



}