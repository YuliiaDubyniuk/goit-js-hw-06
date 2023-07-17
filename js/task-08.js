const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill out all the fields!");
    return;
  }
  const formData = {
    email: email.value,
    password: password.value,    
  };
    
    console.log(formData);
    evt.target.reset();  
}
