$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});


// Get the button element by its ID
var contactbutton = document.getElementById("contactbutton");
    // Add a click event listener to the button
contactbutton.addEventListener("click", function() {
        // Redirect to the desired link
    window.location.href = "https://www.linkedin.com/in/nishanthjanarthanan/";
});