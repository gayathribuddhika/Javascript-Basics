function return_statement() {
    return "Hello World";
}

document.write(return_statement()+ "<br>");


function addNum(a,b) {
    var c = a+b;
    return c;
}

document.write(addNum(10,20)+ "<br>");

function name1() {
    document.write("Hello ");
}

function name2() {
    document.write("Bye " + "<br>");
}

function call1() {
    name1();
    name2();
}

call1();

var girl = "Gayathri ";// globle variable

function name() {
    document.write(girl);
}

name();
document.write(girl);

function name3() {
    var boy = "gayan ";// local variable
    document.write(boy);
}

name3();
document.write(boy);//boy variable is cannot get here. 