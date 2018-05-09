let greet = function() {
    console.log("Hello world!");
};

greet();
function ques() {
    console.log("????");
}

console.log(greet());

let data = {
    firstName: "Allen",
    lastName: "Young"
}
console.log(data);
//alert(data);

//-----
// Callback functions demo
function ask(msg, yes, no) {
    if (msg == "ojbk")
        yes();
    else
        no();
}

ask("ojbK", 
    function() {
        console.log("YES OJBK")},
    function() {
        console.log("No ojbk");}
);