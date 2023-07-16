const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Please fill out all the fields!");
  }
  const formData = {
    email: email.value,
    password: password.value,    
  };
    
    console.log(formData);
    evt.target.reset();  
}
