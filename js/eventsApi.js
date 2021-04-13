window.addEventListener("load", loadTopEvents)

function loadTopEvents() {
    cleanEvents();

    fetch(apiUrls.topThreeEvents, {
        method: 'GET',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                createEventElements(data[i].from, data[i].title);
            }
        })
        .catch(err => {
            console.log(err);
        })
}

function createEventElements(d, title) {
    var dateObj = new Date(d);

    var date = dateObj.getDate();
    date = (date < 10) ? "0" + date : date;

    var monthArr = new Array();
    monthArr[0] = "January";
    monthArr[1] = "February";
    monthArr[2] = "March";
    monthArr[3] = "April";
    monthArr[4] = "May";
    monthArr[5] = "June";
    monthArr[6] = "July";
    monthArr[7] = "August";
    monthArr[8] = "September";
    monthArr[9] = "October";
    monthArr[10] = "November";
    monthArr[11] = "December";
    var month = monthArr[dateObj.getMonth()];

    var year = dateObj.getFullYear();

    var dateString = date + " " + month + ", " + year;

    var divElement = document.createElement("div");

    divElement.innerHTML = `<div class="row justify-content-around"><div class="col-lg-11 main-card-content "><a href="" class="anchor"><div><p style="line-height: 0.5rem;">${dateString}</p><h5 class="text-limiter">${title}</h5></div></a></div></div>`;

    document.getElementById("events-div").appendChild(divElement);
}

function cleanEvents() {
    document.getElementById("events-div").innerHTML = "";
}