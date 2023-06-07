var symbol = [0, 0, 0, 0];
var ans = ["", "", "", ""];
var rand = [];
var message = "";

function getNumber() {

    message = "";
    for (var i = 0; i < 16; i++) {
        rand[i] = Math.floor(Math.random() * 2);
        message += rand[i];
    }

    for (var i = 0; i < 4; i++) {
        symbol[i] = 8 * rand[4 * i] + 4 * rand[4 * i + 1] + 2 * rand[4 * i + 2] + 1 * rand[4 * i + 3];
    }

    if (symbol[3] == 0) {
        getNumber();
    }

    else {
        document.getElementById("message-bits").innerHTML = "<b>" + message + "</b>";
    }

    return false;
}

function verify() {

    for (var i = 0; i < 4; i++) {

        if (symbol[i] == 0) {
            ans[i] = "0";
        }
        else if (symbol[i] == 1) {
            ans[i] = "α^3";
        }

        else if (symbol[i] == 2) {
            ans[i] = "α^2";
        }

        else if (symbol[i] == 3) {
            ans[i] = "α^6";
        }

        else if (symbol[i] == 4) {
            ans[i] = "α";
        }

        else if (symbol[i] == 5) {
            ans[i] = "α^9";
        }

        else if (symbol[i] == 6) {
            ans[i] = "α^5";
        }

        else if (symbol[i] == 7) {
            ans[i] = "α^11";
        }

        else if (symbol[i] == 8) {
            ans[i] = "1";
        }

        else if (symbol[i] == 9) {
            ans[i] = "α^14";
        }

        else if (symbol[i] == 10) {
            ans[i] = "α^8";
        }

        else if (symbol[i] == 11) {
            ans[i] = "α^13";
        }

        else if (symbol[i] == 12) {
            ans[i] = "α^4";
        }

        else if (symbol[i] == 13) {
            ans[i] = "α^7";
        }

        else if (symbol[i] == 14) {
            ans[i] = "α^10";
        }

        else if (symbol[i] == 15) {
            ans[i] = "α^12";
        }

    }

    const inp1 = document.getElementById("math-field-1").value;
    const inp2 = document.getElementById("math-field-2").value;
    const inp3 = document.getElementById("math-field-3").value;
    const inp4 = document.getElementById("math-field-4").value;
    const dispAns = document.getElementById("dispAns");

    if (inp1 == "" || inp2 == "" || inp3 == "" || inp4 == "") {
        dispAns.innerHTML = "Enter all the values."
        dispAns.style.color = "black";
    }
    else if (inp1 == ans[0] && inp2 == ans[1] && inp3 == ans[2] && inp4 == ans[3]) {
        dispAns.innerHTML = "<b>Correct Answer!!!</b><br>";
        dispAns.style.color = "green";
        displayPolynomial();
    }

    else {
        dispAns.style.color = "red";
        if (dispAns.innerHTML == "<b>Wrong Answer :(</b>") {
            dispAns.innerHTML = "<b>Wrong Again :(</b>";
        }

        else {
            dispAns.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }
}

function displayPolynomial() {


    for (var i = 0; i < 4; i++) {
        ans[i] = ans[i].replace(/\^(.*)/, '<sup>$1</sup>');
    }

    const polynomial = ans[0] + "+" + ans[1] + "x" + "+" + ans[2] + "x<sup>2</sup>" + "+" + ans[3] + "x<sup>3</sup>";
    document.getElementById("dispPol").innerHTML = "The message polynomial is<br><b>f(x)=" + polynomial + "</b>";
}

function next() {
    document.getElementById("form1").reset();
    symbol = [0, 0, 0, 0];
    ans = ["", "", "", ""];
    rand = [];
    message = "";
    document.getElementById("dispPol").innerHTML="";
    document.getElementById("dispAns").innerHTML="";
    getNumber();
}

function replaceAlpha(input) {
    input.value = input.value.replace(/alpha/gi, "α");
}



