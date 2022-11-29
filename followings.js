(function (){
    requests.prototype.get(`${getUrl()}/followings`, showFollowings);
}())
document.getElementById("allUsers").addEventListener("click", function(){
    requests.prototype.get(`${getUrl()}/users`, showUsers);
});