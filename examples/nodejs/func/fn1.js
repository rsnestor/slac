function say(word) {
   console.log(word);
}
 
//function as a parameter
function execute(someFunction, value) {
   someFunction(value);
}
 
say("Hello");
execute(say, "World!");

//anonymous function
execute(function(word){ console.log(word) }, "Goodbye");
//single param fat arrow
execute(w => { console.log(w) }, "G2"); //single param "fat arrow"
//self-executing empty anonymous function 
(() => console.log("Empty anonymous"))();
