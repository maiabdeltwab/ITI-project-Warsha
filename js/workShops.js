var data;

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function loadData() {
    readTextFile("Data.json", function(text) {
        var data = JSON.parse(text);
        for (var i = 0; i < data.length; i++) {

            if (i % 2 == 0) {
                var tr = document.createElement('tr');
            }

            var td = document.createElement('td');
            td.innerHTML = " <td> <div class='card'>   <div class='logo' style='background-image:" + data[i].icon + "'>    </div>   <div class='card-text'>   <div  class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>  <div class='title'>Work Shop Rate :" + data[i].rate + " </div>  <h2>" + data[i].name + " </h2>    <div class='address'> " + data[i].address + "</div>  <div class='actions'>    <a href='/warsha.html?id=' id='" + data[i].id + "'>Show more</a>     </div>     </div>  </div>     </div>   </td> ";

            tr.appendChild(td);
            if (i % 2 == 1) {
                document.getElementById("TableBody").appendChild(tr);
            }
        }
    });
}

loadData();

function filterCity() {
    var cnt = 0;
    document.getElementById("TableBody").innerHTML = "";
    city = document.getElementById("select-box1").value;
    readTextFile("Data.json", function(text) {
        var data = JSON.parse(text);
        for (var i = 0; i < data.length; i++) {

            if (data[i].city == city) {

                if (cnt % 2 == 0) {
                    var tr = document.createElement('tr');
                }

                var td = document.createElement('td');
                td.innerHTML = " <td> <div class='card'>   <div class='logo' style='background-image:" + data[i].icon + "'>    </div>   <div class='card-text'>   <div  class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>  <div class='title'>Work Shop Rate :" + data[i].rate + " </div>  <h2>" + data[i].name + " </h2>    <div class='address'> " + data[i].address + "</div>  <div class='actions'>    <a href='/warsha.html?id=' id='" + data[i].id + "'>Show more</a>      </div>     </div>  </div>     </div>   </td> ";

                tr.appendChild(td);
                if (cnt % 2 == 1) {
                    document.getElementById("TableBody").appendChild(tr);
                }
            }
            cnt++;
        }

    });
}



function filterLoction() {
    var cnt = 0;
    document.getElementById("TableBody").innerHTML = "";
    loc = document.getElementById("select-box2").value;
    readTextFile("Data.json", function(text) {
        var data = JSON.parse(text);
        var tr = document.createElement('tr');

        for (var i = 0; i < data.length; i++) {
            if (data[i].location == loc) {
                var td = document.createElement('td');
                td.innerHTML = " <td> <div class='card'>   <div class='logo' style='background-image:" + data[i].icon + "'>    </div>   <div class='card-text'>   <div  class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>  <div class='title'>Work Shop Rate :" + data[i].rate + " </div>  <h2>" + data[i].name + " </h2>    <div class='address'> " + data[i].address + "</div>  <div class='actions'>    <a href='/warsha.html?id=' id='" + data[i].id + "'>Show more</a>     </div>     </div>  </div>     </div>   </td> ";

                tr.appendChild(td);

                document.getElementById("TableBody").appendChild(tr);
            }

            cnt++;
        }

    });
}


function editLinks() {
    var links = document.querySelectorAll('.actions a[id]');
    console.log(links);
    for (let i = 0; i < links.length; i++) {
        links[i].href += links[i].id;
    }
}