
let _url = "http://65.109.13.139:9191"
function goToSignIn(){
  window.location = "http://127.0.0.1:5500/Insta_account/SignIn.html"
}
function goToSignUp(){
  window.location = "SignUp.html"
}
function signUp() {
    fetch(
      url + "/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify({
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
          confirm_password: document.getElementById("confirm_password").value,
        }),
      }
    )
    .then((response) => {
      JSON.stringify(response.body);
    });
}

function signIn(){
  
  fetch(_url+"/signin", 
  {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
          body: JSON.stringify({
              username: document.getElementById("username").value,
              password: document.getElementById("password").value,
      })
  })
  .then((data) => { //дата это наш ответ
      return data.json(); 
    }) // обработка фетча, только после этого можно с ним работать
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
    }).then(function() {
      location.href = 'account.html';
    })

      
}

// function logOut() {
//     fetch(
//       url+"destroy-session",
//       {
//         method: "POST",
//         headers: {
//           "x-access-token":
//           localStorage.getItem("token")
//         },
//       }
//     );
//   }


  function getMe() {
    let token = localStorage.getItem("token");
    fetch(_url+"/me", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent": "telran",
            "ngrok-skip-browser-warning": "69420",
            "x-access-token": token,
        }
    })
    .then (data => data.json())
    .then(data => { 
      
      console.log("User id = ", data.id);
      console.log("Username = ", data.username);
      console.log("User age = ", data.age);
      console.log("User avatar = ", data.avatar);
      console.log("token=", data.token)
      
    });
  }


  
  
  function updateData(){
    let myData = {
      "username":"Nazar",
      "avatar": "https://gravatar.com/avatar/94ba92c542400f71e3a080ec8c913e9e?s=400&d=identicon&r=x",
      "age": 17 
    }
    let token = localStorage.getItem("token");
    fetch(_url+"/me",{
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "telran",
        "ngrok-skip-browser-warning": "69420",
        "x-access-token": token,
    }, body: JSON.stringify(myData)
    })
}

  function deleteMe(){
    let token = localStorage.getItem("token");
    fetch(_url+"/me", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "telran",
        "ngrok-skip-browser-warning": "69420",
        "x-access-token": token,
    }
    }).then (data => data.json())
    
  }
  const post = document.querySelector('.post');
  
  

  