
 
 /*
​
Full-page view:
​
https://codepen.io/GeorgePark/full/VXrwOP/
​
*/
let _headers = {
     "Content-type" : "application/json",
     "Access-Control-Allow-Origin": "*",
     "User-Agent" : "telran",
     "ngrok-skip-browser-warning": "69420",
     "x-access-token" : localStorage.getItem("token")
};

let url = "http://65.109.13.139:9191";
const posts = document.querySelectorAll('.gallery-item');

posts.forEach(post => {
post.addEventListener('click', () => {
 //Get original image URL
 const imgUrl = post.firstElementChild.src.split("?")[0];
 //Open image in new tab
 window.open(imgUrl, '_blank');
});
});


 



function newInfo(){
let newAvatar = document.getElementById("input_avatar").value
let newAge = document.getElementById('input_age').value
let newBio = document.getElementById("input_bio").value
let newFullname = document.getElementById("input_fullname").value

fetch(url + "/me", {
 method: 'PUT',
 headers: _headers,
 body: JSON.stringify({
     "avatar": newAvatar,
     "age": newAge,
     "bio": newBio,
     "fullName": newFullname
 })
}).then (data => data.json())
.then(data => {
 console.log("ID is: ", data._id);
 console.log("Name is: ", data.username);
 console.log("Age is: ", data.age);
 console.log("Avatar is: ", data.avatar);
});
}

(function (){
requests.prototype.get(`${url}/me`, showMe);
requests.prototype.get(`${url}/posts`, postShow);
requests.prototype.get(`${url}/followers`, getFollowers);
requests.prototype.get(`${url}/followings`, getFollowings);
requests.prototype.get(`${url}/me`, getPost);

}())

function follow(){
  let data = document.getElementById('input_username').value
      fetch(url + "/follow", {
          method: 'POST',
          headers: _headers,
          body: JSON.stringify({
              "username": data
          })
         }).then (data => data.json())
         }
  

//информация о постах
function postShow(){
fetch(url +"/posts",{
    method:"GET",
    headers: _headers
}).then(data => data.json())
.then(data => {
    console.log(data)
    for (let i = 0; i <= data.length-1; i++) {
        let post = `<div class='gallery-item' tabindex='0'><img class='gallery-image' src='${data[i].image}'/><div class='gallery-item-type'><p>${data[i].title}</p></div></div>`;
        document.getElementById("items").innerHTML += post; 
    }
})
}

//разлогин
async function logOut()
{
await fetch(url + "/destroy-session",
{
 method: 'POST',
 headers:
 {
     "Content-type" : "application/json",
     "Access-Control-Allow-Origin": "*",
     "User-Agent" : "telran",
     "ngrok-skip-browser-warning": "69420",
     "x-access-token" : localStorage.getItem("token")
 }
}).then((data) => {
 localStorage.clear();
})

}


//обновление постов
function _posts(){
fetch(url + "/post", {
 method: 'POST',
 headers: _headers,
 body: JSON.stringify({
     "title": "12",
     "description": "my fourth post",
     "status": "active",
     "image": "https://i.insider.com/5f15f64c3f7370109a1d96c6?width=1136&format=jpeg"
 })
}).then (data => data.json())
}

//удаление поста
function deletePost(){
    fetch(url + "/post/{_id}", {
    method: "DELETE",
    headers: _headers,
}).then (data => data.json())
}

//открытие поста
function openPost(){
    fetch(url + "/post/637bb724bc93dfe36e24de46",{
        method:"GET",
        headers:_headers
    }).then (data => data.json())
    .then(function() {
        location.href = 'openPost.html';
    }).then(function(){
        document.getElementById("items").innerHTML
    })
}

////////////////////////////////


function goToSignIn(){
  window.location = "SignIn.html"
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
  
  fetch(url+"/signin", 
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

function logOut() {
    fetch( url+"/destroy-session",
      {
        method: "POST",
        headers:_headers
      })
      .then (function() {
        location.href = 'signIn.html'
      })
    }


  // function getMe() {
  //   let token = localStorage.getItem("token");
  //   fetch(url+"/me", {
  //       method: "GET",
  //       headers: {
  //           "Content-type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           "User-Agent": "telran",
  //           "ngrok-skip-browser-warning": "69420",
  //           "x-access-token": token,
  //       }
  //   })
  //   .then (data => data.json())
  //   .then(data => { 
      
  //     console.log("User id = ", data.id);
  //     console.log("Username = ", data.username);
  //     console.log("User age = ", data.age);
  //     console.log("User avatar = ", data.avatar);
      
  //   });
  // }


  
  
  function updateData(){
    let myData = {
      "username":"Nazar",
      "avatar": "https://gravatar.com/avatar/94ba92c542400f71e3a080ec8c913e9e?s=400&d=identicon&r=x",
      "age": 17 
    }
    let token = localStorage.getItem("token");
    fetch(url+"/me",{
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
    fetch(url+"/me", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "telran",
        "ngrok-skip-browser-warning": "69420",
        "x-access-token": token,
    }
    }).then (data => data.json())
    .then (data=> {
      location.href = 'signIn.html'
    })
    
  }

  let selectedImg;
document.getElementById("items").onclick = function (event) {
  let target = event.target;
  if (target.tagName != "IMG") return;
  new Promise((resolve, reject) => {
    resolve();
  }).then(function(){
    return _openIMG(target);
  }).then(function(){
    location.href = "openPost.html";
  })
};

  //подписка на людей
 
  