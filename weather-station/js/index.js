

var weatherUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-30362C28-40DD-4165-BB72-A129AEF15927&format=JSON&sort=time';
fetch(weatherUrl)
    .then(res => {
        return res.json();
    }).then(result => {
        result.records.location.forEach(x => {
            let city = x.locationName;
            changePlaceData(city, x);
        });
    });

var aqiUrl = 'https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json';
fetch(aqiUrl)
    .then(res => {
        return res.json();
    }).then(result => {
        place_data.forEach(x => {
            x.AIQ = "";
            x.Status = "";
            x.PM25 = "";
        })
        result.forEach(x => {
            let city = x.County;
            changeAqiData(city, x);
        });
    });

function changeAqiData(value, x) {
    for (var i in place_data) {
        if (place_data[i].place == value) {
            var AQI = x.AQI;
            var SiteName = x.SiteName;
            var Status = x.Status;
            var PM25 = x["PM2.5_AVG"];

            place_data[i].AIQ += `${SiteName} ${AQI},`;
            place_data[i].Status += `${SiteName} ${Status},`;
            place_data[i].PM25 += `${SiteName} ${PM25},`;
            break; //Stop this loop, we found it!
        }
    }
}

function changePlaceData(value, e) {
    for (var i in place_data) {
        if (place_data[i].place == value) {
            var img = "";
            var weather = e.weatherElement[0].time[0].parameter.parameterName;
            var weatherIcon = e.weatherElement[0].time[0].parameter.parameterValue;

            var MaxT = e.weatherElement[4].time[0].parameter.parameterName;// 最高溫度
            var MinT = e.weatherElement[2].time[0].parameter.parameterName;// 最低溫度
            var PoP = e.weatherElement[1].time[0].parameter.parameterName;// 降雨機率


            if (weatherIcon >= 10) {
                img = `img/${weatherIcon}.svg`;
                
            }
            else {
                img = `img/0${weatherIcon}.svg`;
            }

            place_data[i].weather = weather;
            place_data[i].low = MinT;
            place_data[i].high = MaxT;
            place_data[i].weatherIcon = img;
            place_data[i].PoP = PoP;
            break; //Stop this loop, we found it!
        }
    }
}

var vm = new Vue({
    el: "#app",
    data: {
        filter: "",
        place_data: place_data
    }, computed: {
        now_area: function () {
            var vobj = this;
            var result = this.place_data.filter(function (obj) {
                return obj.tag == vobj.filter;
            });
            if (result.length == 0) {
                return null;
            }
            return result[0];
        }
    }
});

$("path").mouseenter(function (e) {
    var tagname = $(this).attr("data-name");
    vm.filter = tagname;
});
