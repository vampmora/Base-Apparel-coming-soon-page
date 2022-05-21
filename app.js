const form = document.querySelector('form');
const email = document.querySelector('input');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let emailValue = email.value;

   // console.log(email.value);

   if (validateEmail(emailValue)){
       form.classList.remove('error');
   }else {
       form.classList.add('error');
   }
});


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };






















