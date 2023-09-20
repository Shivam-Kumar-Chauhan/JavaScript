// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // Un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("shivam")

