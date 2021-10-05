var address = "";

// check for Geolocation support
if (navigator.geolocation) { console.log('Geolocation is supported!'); }
else { console.log('Geolocation is not supported for this Browser/OS.'); }

function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPos, showErr);
    }
    else {
        alert("Sorry! your Browser does not support Geolocation API")
    }
}
//Showing Current Poistion on Google Map
function showPos(position) {
    latt = position.coords.latitude;
    long = position.coords.longitude;
    console.log("Latt = " + latt);
    console.log("Long = " + long);

    var lattlong = new google.maps.LatLng(latt, long);
    var myOptions = {
        center: lattlong,
        zoom: 15,
        mapTypeControl: true,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    }
    var maps = new google.maps.Map(document.getElementById("demo"), myOptions);
    var markers = new google.maps.Marker({ position: lattlong, map: maps, title: "You are here!" });
}


function showErr(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation API.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("USer location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function submit_address()
{
    address = document.getElementById("address").value;
    console.log(address);

    let str = document.getElementById("address").value; 
    let res = str.replace(/ /g, "+");
    console.log(res);
    
   // document.getElementById("adressCreation").href = "https://earth.google.com/web/search/" + res + "+";
resN = res.concat("+");
finalAdress = "https://earth.google.com/web/search/".concat(resN);
console.log(resN);  
console.log(finalAdress);

    
    document.getElementById("adrs").innerHTML = ' <p class="btn btn-danger">NOTE : If you are using mobile phone then make sure to have google earth app</p> <br><br> <a id="address" href= "'+ finalAdress+'"/>See Me On Google Earth!</a>'
}




