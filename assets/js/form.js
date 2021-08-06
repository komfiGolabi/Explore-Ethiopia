
function sendMail(contactForm){
    emailjs.send("gmail", "explore-ethio",{
        "from_name":contactForm.name.value , "from_email":contactForm.emailaddress.value,
        "message_us":contactForm.message.value})
    .then(
        function(response) {
            console.log("Your message has been sent. We get back to you shortly!" , response);
            alert("Your message has been sent. We get back to you shortly!");
            contactForm.reset();
        },
        function(error){
            console.log("Oops, something went wrong! Try again!", error);
            alert("Oops, something went wrong! Try again!");
            contactForm.reset();
        }
    );

    return false;

}


