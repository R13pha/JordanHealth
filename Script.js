function sendmail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_ojwa4ge", "template_aai4bon", params)
    .then(function(response){
        alert("Email Sent!!");
        console.log("SUCCESS", response);
    })
    .catch(function(error){
        alert("Failed to send email!");
        console.log("ERROR", error);
    });
}
