const makeBigger = () => {
   document.querySelector("h1").style.fontSize = '32pt';
   document.querySelector(".content").style.fontSize = '32pt';
   // alert('make bigger!');
};

const makeSmaller = () => {
   // alert('make smaller!');
   document.querySelector("h1").style.fontSize = '10pt';
   document.querySelector(".content").style.fontSize = '10pt';
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
