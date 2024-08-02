const btnSigIn = document.getElementById("sign-in")
      btnSigup = document.getElementById("sign-up")
      containerFormRegister = document.querySelector(".register")
      containerFormLogin = document.querySelector(".login")

btnSigIn.addEventListener("click", e =>{
    containerFormRegister.classList.add("hide")
    containerFormLogin.classList.remove("hide")
})

btnSigup.addEventListener("click", e =>{
    containerFormLogin.classList.add("hide")
    containerFormRegister.classList.remove("hide")
})


