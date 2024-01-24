console.log("Hello World");

let my_btn = document.getElementById("my_btn");
let num_one = document.getElementById("num_one").value;
let num_two = document.getElementById("num_two").value;
console.log(my_btn);

my_btn.addEventListener("click", function(){
console.log("Button Clicked");

add_two_numbers(num_one, num_two);
});


function add_two_numbers(param_one, param_two){

let sum = parseInt(param_one) + parseInt(param_two);
console.log(sum);
}