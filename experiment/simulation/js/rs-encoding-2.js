var binaryString = "";
// Array for storing decimal values
var symbol = [0, 0, 0, 0, 0];
// Final Answer in terms of alpha
var ans = ["", "", "", "", "", ""];

function verify() {

    const obs = document.getElementById("observations");

    // Inputs taken as latex and each output is 4-bit string 
    var inp = ["", "", "", "", "", ""];
    var out = ["", "", "", "", "", ""];
    inp[0] = document.getElementById("math-field-1").value;
    inp[1] = document.getElementById("math-field-2").value;
    inp[2] = document.getElementById("math-field-3").value;
    inp[3] = document.getElementById("math-field-4").value;
    inp[4] = document.getElementById("math-field-5").value;
    inp[5] = document.getElementById("math-field-6").value;

    var sameFlag = 0;
    var invalidFlag = 0;

    const validInp = ["0", "1", "α", "α^2", "α^3", "α^4", "α^5", "α^6",
        "α^7", "α^8", "α^9", "α^10", "α^11", "α^12", "α^13", "α^14"];

    for (let i = 0; i < inp.length; i++) {
        for (let j = i + 1; j < inp.length; j++) {
            if ((inp[i] === inp[j]) && inp[i].length != 0) {
                sameFlag = 1;
            }
        }
    }

    for (let i = 0; i < inp.length; i++) {
        if (validInp.indexOf(inp[i]) === -1) {
            invalidFlag = 1;
        }
    }

    if (inp[0] == "" || inp[1] == "" || inp[2] == "" ||
        inp[3] == "" || inp[4] == "" || inp[5] == "") {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the evaluation points."
    }

    else if (invalidFlag == "1") {
        obs.style.color = "black";
        obs.innerHTML = "Enter valid evaluation points."
    }

    else if (sameFlag == "1") {
        obs.style.color = "black";
        obs.innerHTML = "The evaluation points must be distinct."
    }


    else {
        for (var i = 0; i < 6; i++) {

            if (inp[i] == "0") {
                out[i] = "1011";
            }
            else if (inp[i] == "1") {
                out[i] = "1110";
            }

            else if (inp[i] == "α") {
                out[i] = "0011"
            }

            else if (inp[i] == "α^2") {
                out[i] = "1101"
            }

            else if (inp[i] == "α^3") {
                out[i] = "1100"
            }

            else if (inp[i] == "α^4") {
                out[i] = "0100"
            }

            else if (inp[i] == "α^5") {
                out[i] = "0011"
            }

            else if (inp[i] == "α^6") {
                out[i] = "0000"
            }

            else if (inp[i] == "α^7") {
                out[i] = "0100"
            }

            else if (inp[i] == "α^8") {
                out[i] = "0101"
            }

            else if (inp[i] == "α^9") {
                out[i] = "1010"
            }

            else if (inp[i] == "α^10") {
                out[i] = "1001"
            }

            else if (inp[i] == "α^11") {
                out[i] = "0000"
            }

            else if (inp[i] == "α^12") {
                out[i] = "0011"
            }

            else if (inp[i] == "α^13") {
                out[i] = "0001"
            }

            else if (inp[i] == "α^14") {
                out[i] = "0000"
            }
        }


        for (var i = 0; i < 6; i++) {

            symbol[i] = parseInt(out[i], 2);
        }

        for (var i = 0; i < 6; i++) {

            if (symbol[i] == 0) {
                ans[i] = "0";
            }
            else if (symbol[i] == 1) {
                ans[i] = "\u03B1<sup>3</sup>";
            }

            else if (symbol[i] == 2) {
                ans[i] = "\u03B1<sup>2</sup>";
            }

            else if (symbol[i] == 3) {
                ans[i] = "\u03B1<sup>6</sup>";
            }

            else if (symbol[i] == 4) {
                ans[i] = "\u03B1";
            }

            else if (symbol[i] == 5) {
                ans[i] = "\u03B1<sup>9</sup>";
            }

            else if (symbol[i] == 6) {
                ans[i] = "\u03B1<sup>5</sup>";
            }

            else if (symbol[i] == 7) {
                ans[i] = "\u03B1<sup>11</sup>";
            }

            else if (symbol[i] == 8) {
                ans[i] = "1";
            }

            else if (symbol[i] == 9) {
                ans[i] = "\u03B1<sup>14</sup>";
            }

            else if (symbol[i] == 10) {
                ans[i] = "\u03B1<sup>8</sup>";
            }

            else if (symbol[i] == 11) {
                ans[i] = "\u03B1<sup>13</sup>";
            }

            else if (symbol[i] == 12) {
                ans[i] = "\u03B1<sup>4</sup>";
            }

            else if (symbol[i] == 13) {
                ans[i] = "\u03B1<sup>7</sup>";
            }

            else if (symbol[i] == 14) {
                ans[i] = "\u03B1<sup>10</sup>";
            }

            else if (symbol[i] == 15) {
                ans[i] = "\u03B1<sup>12</sup>";
            }

        }

        obs.innerHTML = "The encoded codeword is <br> <b>(" + ans[0] + ", " + ans[1] + ", " + ans[2] + ", " + ans[3] + ", " + ans[4] + ", " + ans[5] +
            ")<br>" + out[0] + " " + out[1] + " " + out[2] + " " + out[3] + " " + out[4] + " " + out[5] + "</b>";

        binaryString = out[0] + out[1] + out[2] + out[3] + out[4] + out[5];


        // Get the canvas element and context
        const canvas = document.getElementById("barcode");
        const context = canvas.getContext("2d");

        // Set canvas dimensions
        canvas.width = binaryString.length * 8;
        canvas.height = 100;

        // Draw barcode
        for (let i = 0; i < binaryString.length; i++) {
            if (binaryString.charAt(i) === "0") {
                // Draw white followed by black
                context.fillStyle = "#fff";
                context.fillRect(i * 8, 25, 4, 100);
                context.fillStyle = "#000";
                context.fillRect((i * 8) + 4, 25, 4, 100);
            } else {
                // Draw black followed by white
                context.fillStyle = "#000";
                context.fillRect(i * 8, 25, 4, 100);
                context.fillStyle = "#fff";
                context.fillRect((i * 8) + 4, 25, 4, 100);
            }
        }
    }
}

function replaceAlpha(input) {
    input.value = input.value.replace(/alpha/gi, "α");
}
