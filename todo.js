var count = 0;
function populate() {
  count = 0;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response);
      var temp = "";

      for (var i = 0; i < response.length; i++) {
        temp += "<tr>";
        temp += "<td>" + response[i].id + "</td>";
        temp += "<td>" + response[i].title + "</td>";
        if (response[i].completed) {
          temp +=
            "<td>" + `<input type="checkbox" disabled checked  />` + "</td>";
        } else {
          temp +=
            "<td>" +
            `<input type="checkbox" onclick="check(this)" />` +
            "</td>";
        }
      }
      document.getElementById("mytable").innerHTML = temp;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

function check(item) {
  if (item.checked) {
    count++;
  } else {
    count--;
  }
  var promise = new Promise(function (resolve, reject) {
    if (count == 5) {
      resolve("Congrats, you have successfully completed 5 tasks");
    } else {
      reject();
    }
  });

  promise
    .then(function (s) {
      alert(s);
    })
    .catch(function (e) {
      console.log(e);
    });
}

function mainpage() {
  window.location.href = "./index.html";
}
