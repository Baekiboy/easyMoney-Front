const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
btnsup.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const login = (event) => {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username && password) {
    axios
      .post(
        "http://127.0.0.1:8000/api/login",
        {
          username: username,
          password: password,
        }
      )
      .then((ans) => {
         return ans.data;
      }).then(data=>{
        localStorage.setItem('token',data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log(data);
        if(!data.user.first_name){
            window.location = "/idenperso.html";
        }else if(!data.user.doc_verified){
          window.location = "/idendoc.html";
        }else{
          window.location = "/menu.html";
        }
    }).catch(error=>{
        console.log(error);
        document.getElementById('error').style.display="block";
    });
  }
};

const signup=(event)=>{
  event.preventDefault();
   let username = document.getElementById("username-signup").value;
   let password = document.getElementById("password-signup").value;
   let email = document.getElementById("email-signup").value;
   if (username && password && email) {
     axios
       .post("http://127.0.0.1:8000/api/register", {
         username,password,email
       })
       .then((ans) => {
         return ans.data;
       })
       .then((data) => {
          console.log(data);
       })
       .catch((error) => {
         console.log(error);
         document.getElementById("error").style.display = "block";
       });
   }

}
