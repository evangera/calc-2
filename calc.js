function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1+num2;
    document.getElementById('out').value = result;
}
function result() {
    plus();
    plus2();
    plus3();
}

function plus2() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = (num1+num2)*1.13;
    document.getElementById('out2').value = result;
}

function plus3() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = (num1+num2)*1.17;
    document.getElementById('out3').value = result;
}
function multiply10() {
    var num1, num2;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1*10;
    document.getElementById('n1').value = result;
    document.getElementById('out').value = result+num2;
    document.getElementById('out2').value = (result+num2)*1.13;
    document.getElementById('out3').value = (result+num2)*1.17;
}
function multiply100() {
    var num1, num2;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1*100;
    document.getElementById('n1').value = result;
    document.getElementById('out').value = result+num2;
    document.getElementById('out2').value = (result+num2)*1.13;
    document.getElementById('out3').value = (result+num2)*1.17;
}
function multiply2() {
    var num2, num1;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    result = num2*2;
    document.getElementById('n2').value = result;
    document.getElementById('out').value = result+num1;
    document.getElementById('out2').value = (result+num1)*1.13;
    document.getElementById('out3').value = (result+num1)*1.17;
}
function multiply4() {
    var num2, num1;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    result = num2*4;
    document.getElementById('n2').value = result;
    document.getElementById('out').value = result+num1;
    document.getElementById('out2').value = (result+num1)*1.13;
    document.getElementById('out3').value = (result+num1)*1.17;
}
function clean() {
    var num1, num2;
    document.getElementById('n1').value = ""
    num1 = parseInt(num1);

    document.getElementById('n2').value = ""
    num2 = parseInt(num2);

    document.getElementById('out').value = ""
    document.getElementById('out2').value = ""
    document.getElementById('out3').value = ""
}
