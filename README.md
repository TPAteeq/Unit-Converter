# Metric - Imperial Unit converter

 The purpose of making this small project is to make it easier to convert any data of Length, Mass, or Volume into their respective counterpart system.


## Screenshot





# The Code

We have an empty input tag with the default value of *0*.

   

     <input id="cnt" class="inp" value="0">




Take the value of the input tag by calling a addEventListener and run a function where all the conversions take place 

    input.addEventListener('change', conversion);

We listen on the input tag and extract the changed value which is in string and parse it to an integer value.
    
    function conversion(e){
    let num = parseInt(e.target.value)
    
All possible convertible values are given a seperate variable.
    
    let m2f = 0
    let f2m = 0
    let l2g = 0

Then calculate the converted values as per the standard.
    
    //meters to feet and vice-versa
    m2f = num*3.28084 
    f2m = num*0.3048
    
After this get the html elements by ID and make changes on the DOM  with change in the value of the input.
Here we use string templates to change the DOM elements.    

    LenEL.innerText = `${num} meters = ${m2f} feet || ${num} feet = ${f2m} meters`

The upgraded version of this will actually involve making this into a chrome extension and that could be very useful,


## Built with

 - Semantic HTML5 markup
 - CSS custom properties
 - Vanilla JavaScript
 - Flexbox

