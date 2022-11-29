async function _openIMG() {
   
  await fetch(url + "/post/" + "637ffaccbc93dfe36e24ec65", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "telran",
        "ngrok-skip-browser-warning": "69420",
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        sessionStorage.setItem("image", data.image);
        sessionStorage.setItem("title", data.title);
        sessionStorage.setItem("description", data.description);
        sessionStorage.setItem("author", data.author.username);
      });
  }