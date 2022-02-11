function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "graphkeytech@gmail.com",
        Password : "592C78291E37CD6EAF4A2E1FEF5F126EB967",
        To : 'graphkeytech@gmail.com',
        From : "seancube.sn@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}