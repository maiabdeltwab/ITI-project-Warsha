window.onscroll = function navObacity(event) {
    var element = document.documentElement.scrollTop;
    document.querySelector(".header").onmouseover = function() {
        document.querySelector(".header").style.opacity = "1";
    };
    document.querySelector(".header").onmouseout = function() {
        document.querySelector(".header").style.opacity = "0.7";
    };

    // if (element > 100) {
    //   console.log(element);
    //   document.querySelector(".header").style.opacity = "0.7";
    //   document.querySelector(".header").onmouseover = function () {
    //     document.querySelector(".header").style.opacity = "1";
    //   };
    // } else {
    //   document.querySelector(".header").style.opacity = "1";
    // }
}


var comment = document.getElementById("commentsbox");
var Service = document.getElementById("serviceTable");

var btncomment = document.getElementById("commentButton");
var btnservice = document.getElementById("ServicetButton");

btncomment.onclick = function() {
    comment.style.display = "inline-flex";
    Service.style.display = "none";
    btncomment.style.color = "#D89216";
    btnservice.style.color = "#3A3535 ";
}
btnservice.onclick = function() {
    comment.style.display = "none";
    Service.style.display = "table";
    btnservice.style.color = "#D89216";
    btncomment.style.color = "#3A3535";

}

var obj = [{
        "id": 1,
        "location": "Fayoum",
        "name": "The local work shop",
        "phonenumber": "010234938532",
        "rate": 4,
        "address": "Egpy - ElFayoum , Mesala street behind Rosana Resturant Below ElSeha Clinic",
        "image": "url('/resources/workShop1.jpg')",
        "icon": "url('/resources/workShop3.jpg')"
    },
    {
        "id": 2,
        "location": "Itsa",
        "name": "The Race work shop",
        "phonenumber": "010555638510",
        "rate": 2,
        "address": "Egpy - Itsa , family street after zad bank the third house at the left side ",
        "image": "url('/resources/workShop2.jpg')",
        "icon": "url('/resources/workShop4.jpg')"
    },
    {
        "id": 3,
        "location": "Maadi",
        "name": "The Bos work shop",
        "phonenumber": "010234938532",
        "rate": 2,
        "address": "Egpy - Maadi ,family street after zad bank the third house at the left side ",
        "image": "url('/resources/workShop5.jpg')",
        "icon": "url('/resources/workShop2.jpg')"
    },
    {
        "id": 4,
        "location": "Mohandesen",
        "name": "The Race work shop",
        "phonenumber": "010555638510",
        "rate": 2,
        "address": "Egpy - Mohandesen ,  Mesala street behind Rosana Resturant Below ElSeha Clinic ",
        "image": "url('/resources/workShop4.jpg')",
        "icon": "url('/resources/workShop2.jpg')"
    },

    {
        "id": 5,
        "location": "Fayoum",
        "name": "The local work shop",
        "phonenumber": "010234938532",
        "rate": 4,
        "address": "Egpy - ElFayoum , Mesala street behind Rosana Resturant Below ElSeha Clinic",
        "image": "url('/resources/workShop2.jpg')",
        "icon": "url('/resources/workShop3.jpg')"
    },
    {
        "id": 6,
        "location": "Itsa",
        "name": "The Race work shop",
        "phonenumber": "010555638510",
        "rate": 2,
        "address": "Egpy - Itsa , family street after zad bank the third house at the left side ",
        "image": "url('/resources/workShop3.jpg')",
        "icon": "url('/resources/workShop5.jpg')"
    },

    {
        "id": 7,
        "location": "Damares",
        "name": "Master work shop",
        "phonenumber": "010938532145",
        "rate": 2,
        "address": "Egpy - Minya ,family street after zad bank the third house at the left side ",
        "image": "url('/resources/workShop4.jpg')",
        "icon": "url('/resources/workShop1.jpg')"
    },
    {
        "id": 8,
        "location": "Minya",
        "name": "The Bos work shop",
        "phonenumber": "010555638510",
        "rate": 5,
        "address": "Egpy - Minya ,  Mesala street behind Rosana Resturant Below ElSeha Clinic ",
        "image": "url('/resources/workShop2.jpg')",
        "icon": "url('/resources/workShop3.jpg')"
    }
];
console.log(obj[3].name);
window.onload = function() {
        var dis = document.getElementById("commentsbox");
        dis.style.display = "none";
        var id = parseInt(window.location.href.split('=')[1]) - 1;

        document.getElementById("workshopName").innerHTML = obj[id].name;
        document.getElementById("workshopPhone").innerHTML = obj[id].phonenumber;
        document.getElementById("workshopAddress").innerHTML = obj[id].address;
        document.getElementById("workshopRate").innerHTML = obj[id].rate;
        //   document.getElementsByClassName("portada").style.backgroundImage="url('workShop1.jpg')";

    }
    // function post() {

//     var para = document.createElement("p");
//     var sp = document.createElement("span"); ////here
//     var x = document.getElementById("txtArea").value;
//     var name = firstName + lastName;////here
//     var node = document.createTextNode(x);
//     var node2 = document.createTextNode(name);////here
//     sp.appendChild(node2);////here
//     para.appendChild(node);////here

//     var element = document.getElementById("div1");
//     var y=element.appendChild(sp);////here
//     var z = element.appendChild(para);

//     document.getElementById("txtArea").value = "";
//     console.log(para);
//     console.log(node);

// }