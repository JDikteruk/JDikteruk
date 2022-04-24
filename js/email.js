function sendEmail (){
    var tempParams = {
        name:document.getElementById("nameInput").value,
        company:document.getElementById("company").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        msg:document.getElementById("msg").value
    };

    emailjs.send('service_2cs2j5q','template_qpszt7m', tempParams)
    .then(
        function(res){
            console.log(res.status);
     })

    
}