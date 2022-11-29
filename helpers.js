

function getUrl(){
    return "http://65.109.13.139:9191";
}
function postShow(data){
    for (let i = 0; i <= data.length-1; i++) {
        let post = `<div class='gallery-item' tabindex='0'><img class='gallery-image' id='${data[i]._id}'src='${data[i].image}' /><div class='gallery-item-type'><p>${data[i].title}</p></div></div>`;
        document.getElementById("items").innerHTML += post;
    }
}












function showMe(data){
    let token = localStorage.getItem("token");
    console.log(data);
        document.getElementById("userAvatar").src = data.avatar;
        document.getElementById("username").innerHTML = data.username;
        document.getElementById("userBio").innerHTML = data.bio;
        document.getElementById("fullname").innerHTML = data.fullName;
        localStorage.setItem("id", data._id);
        localStorage.setItem("token", token)
        // document.getElementById("posts_count").innerHTML = data.posts_count;
}

function clearStorage(){
    localStorage.clear();
}
function showFollowers(data){
    console.log(data);
    let flws = data.followers;
    for (let i = 0; i <= flws.length-1; i++) {
        let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${flws[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${flws[i].username}</a></h4></div></div><div class="clearfix"></div><hr/>`;
        document.getElementById("items").innerHTML += post;
    }
}
function showFollowings(data){
    let flwngs = data.following;
    for (let i = 0; i <= flwngs.length-1; i++) {
        let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${flwngs[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${flwngs[i].username}</a></h4></div></div><div class="clearfix"></div><hr/>`;
        document.getElementById("items").innerHTML += post;
    }
}
function getFollowers(data) {
    let gflws = data.followers;
    document.getElementById("flws").innerHTML = gflws.length + " followers";
}
function getFollowings(data){
    let gflwngs = data.following;
    document.getElementById("flwngs").innerHTML = gflwngs.length + " followings";
}
function getPost(data){
   
document.getElementById("postCount").innerHTML = data.posts_count + " posts"
}

function showUsers(data){
    for (let i = 0; i <= data.length-1; i++) {
        let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${data[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${data[i].fullName}</a></h4></div></div><div class="clearfix"><button>Subscribe</button></div><hr/>`;
        document.getElementById("showUsers").innerHTML += post;
    }
}