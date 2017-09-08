function say(word) {
   console.log(word);
}
 
//function as a parameter
function execute(someFunction, value) {
   someFunction(value);
}
 
execute(say, "Hello");

//anonymous function
execute(function(word){ console.log(word) }, "Goodbye");
execute(w => { console.log(w) }, "G2"); //single param "fat arrow"
execute(w => console.log(w), "G3");

