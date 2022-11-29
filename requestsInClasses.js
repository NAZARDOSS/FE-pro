function getHeaders() {
  return {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-access-token": localStorage.getItem("token") || "",
  };
}

let requests = function () {};

requests.prototype.post = function (url, sendData) {
  fetch(url, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(sendData),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

requests.prototype.get = function (url, next) {
  console.log("started get function");
  fetch(url, {
    method: "GET",
    headers: getHeaders(),
  })
    .then((data) => data.json())
    .then((data) => {
      next(data);
    });
};
requests.prototype.delete = function (url) {
  fetch(url, {
    method: "DELETE",
    headers: getHeaders(),
  }).then(() => {
    localStorage.clear();
  });
};
requests.prototype.logout = async function (url) {
  await fetch(url, {
    method: "POST",
    headers: getHeaders(),
  });
};

// --------------------------------------------------

class Requests {
  #requestTypes = {
    post: "POST",
    put: "PUT",
    get: "GET",
    delete: "DELETE",
  };
  constructor(url, sendData, next) {
    this.url = url || "";


    this.next =
      next ||
      function () {
        return;
      };
    this.sendData = sendData || {};
    this.headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "x-access-token": localStorage.getItem("token") || "",
    };
  }

  doPost() {
    fetch(this.url, {
      method: requestTypes.post,
      headers: this.headers,
      body: JSON.stringify(this.sendData),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      });
  }

  doPut() {
    fetch(this.url, {
      method: requestTypes.put,
      headers: this.headers,
      body: JSON.stringify(this.sendData),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      });
  }

  doGet() {
    fetch(this.url, {
      method: this.#requestTypes.get,
      headers: this.headers,
    })
      .then((data) => data.json())
      .then((data) => {
        this.next(data);
      });
  }

  doDelete() {
    fetch(this.url, {
      method: requestTypes.delete,
      headers: this.headers,
    }).then(() => {
      localStorage.clear();
    });
  }
}


