function select(id) {
    if (document.getElementById(id).style.backgroundColor == 'yellow') {
        document.getElementById(id).style.backgroundColor = 'white';
    }
    else {
        document.getElementById(id).style.backgroundColor = 'yellow';
    }
}

function page1() {
    document.getElementById("example1").style.display = "block";
    document.getElementById("example2").style.display = "none";
    document.getElementById("example3").style.display = "none";
    document.getElementById("example4").style.display = "none";

    document.getElementById("observations1").innerHTML = "";
}

function page2() {
    document.getElementById("example1").style.display = "none";
    document.getElementById("example2").style.display = "block";
    document.getElementById("example3").style.display = "none";
    document.getElementById("example4").style.display = "none";

    document.getElementById("observations2").innerHTML = "";

    document.getElementById("choose2").removeAttribute('disabled');
    const col = document.querySelectorAll('[id^="ex2-col"]');
    for (let i = 0; i < col.length; i++) {
        col[i].style.pointerEvents = "none";
        col[i].style.backgroundColor = "white";
    }
}

function page3() {
    document.getElementById("example1").style.display = "none";
    document.getElementById("example2").style.display = "none";
    document.getElementById("example3").style.display = "block";
    document.getElementById("example4").style.display = "none";

    document.getElementById("observations3").innerHTML = "";

    document.getElementById("choose3").removeAttribute('disabled');
    const col = document.querySelectorAll('[id^="ex3-col"]');
    for (let i = 0; i < col.length; i++) {
        col[i].style.pointerEvents = "none";
        col[i].style.backgroundColor = "white";
    }
}

function page4() {
    document.getElementById("example1").style.display = "none";
    document.getElementById("example2").style.display = "none";
    document.getElementById("example3").style.display = "none";
    document.getElementById("example4").style.display = "block";

    document.getElementById("observations4").innerHTML = "";
}

function verify1() {
    const choose1 = document.getElementById("choose1");
    const obs1 = document.getElementById("observations1");

    const selectedText1 = choose1.options[choose1.selectedIndex].text;

    if (selectedText1 == "--- Select ---") {
        obs1.innerHTML = "Select one of the options"
        obs1.style.color = "black";
    }

    else if (selectedText1 == "Yes") {
        obs1.innerHTML = "<b>Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        obs1.innerHTML = "<b>Wrong Answer :(</b>";
    }
}

function verify2() {
    const choose2 = document.getElementById("choose2");
    const obs2 = document.getElementById("observations2");

    const col = document.querySelectorAll('[id^="ex2-col"]');


    if (col[0].style.pointerEvents != "auto") {
        const selectedText2 = choose2.options[choose2.selectedIndex].text;

        if (selectedText2 == "--- Select ---") {
            obs2.innerHTML = "Select one of the options"
            obs2.style.color = "black";
        }

        else if (selectedText2 == "No") {
            obs2.innerHTML = "<b>Correct Answer</b> <br>Now select the four linearly dependent columns.";
            obs2.style.color = "green";

            document.getElementById("choose2").setAttribute('disabled', true);

            for (let i = 0; i < col.length; i++) {
                col[i].style.pointerEvents = "auto";
            }
        }

        else {
            obs2.style.color = "red";
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }

    else {
        if (col[0].style.backgroundColor != "yellow" && col[1].style.backgroundColor != "yellow" &&
            col[2].style.backgroundColor != "yellow" && col[3].style.backgroundColor != "yellow" &&
            col[4].style.backgroundColor != "yellow") {

            obs2.style.color = "black";
            obs2.innerHTML = "Select the columns";
        }

        else if (col[0].style.backgroundColor != "yellow" && col[1].style.backgroundColor == "yellow" &&
            col[2].style.backgroundColor == "yellow" && col[3].style.backgroundColor == "yellow" &&
            col[4].style.backgroundColor == "yellow") {

            obs2.innerHTML = "<b>Correct Answer!!!</b>";
            obs2.style.color = "green";
        }

        else {
            obs2.style.color = "red";
            if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
                obs2.innerHTML = "<b>Wrong Again :(</b>";
            }

            else {
                obs2.innerHTML = "<b>Wrong Answer :(</b>";
            }
        }
    }
}

function verify3() {
    const choose3 = document.getElementById("choose3");
    const obs3 = document.getElementById("observations3");

    const col = document.querySelectorAll('[id^="ex3-col"]');


    if (col[0].style.pointerEvents != "auto") {
        const selectedText3 = choose3.options[choose3.selectedIndex].text;

        if (selectedText3 == "--- Select ---") {
            obs3.innerHTML = "Select one of the options"
            obs3.style.color = "black";
        }

        else if (selectedText3 == "No") {
            obs3.innerHTML = "<b>Correct Answer</b> <br>Now select the four linearly dependent columns.";
            obs3.style.color = "green";

            document.getElementById("choose3").setAttribute('disabled', true);

            for (let i = 0; i < col.length; i++) {
                col[i].style.pointerEvents = "auto";
            }
        }

        else {
            obs3.style.color = "red";
            obs3.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }

    else {
        if (col[0].style.backgroundColor != "yellow" && col[1].style.backgroundColor != "yellow" &&
            col[2].style.backgroundColor != "yellow" && col[3].style.backgroundColor != "yellow" &&
            col[4].style.backgroundColor != "yellow" && col[5].style.backgroundColor != "yellow") {

            obs3.style.color = "black";
            obs3.innerHTML = "Select the columns";
        }

        else if (col[0].style.backgroundColor == "yellow" && col[1].style.backgroundColor == "yellow" &&
            col[2].style.backgroundColor != "yellow" && col[3].style.backgroundColor != "yellow" &&
            col[4].style.backgroundColor == "yellow" && col[5].style.backgroundColor == "yellow") {

            obs3.innerHTML = "<b>Correct Answer!!!</b>";
            obs3.style.color = "green";
        }

        else {
            obs3.style.color = "red";
            if (obs3.innerHTML == "<b>Wrong Answer :(</b>") {
                obs3.innerHTML = "<b>Wrong Again :(</b>";
            }

            else {
                obs3.innerHTML = "<b>Wrong Answer :(</b>";
            }
        }
    }
}

function verify4() {
    const choose4 = document.getElementById("choose4");
    const obs4 = document.getElementById("observations4");

    const selectedText4 = choose4.options[choose4.selectedIndex].text;

    if (selectedText4 == "--- Select ---") {
        obs4.innerHTML = "Select one of the options"
        obs4.style.color = "black";
    }

    else if (selectedText4 == "Yes") {
        obs4.innerHTML = "<b>Correct Answer!!!</b>";
        obs4.style.color = "green";
    }

    else {
        obs4.style.color = "red";
        obs4.innerHTML = "<b>Wrong Answer :(</b>";
    }
}
