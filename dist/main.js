(()=>{document.addEventListener("DOMContentLoaded",(function(){})),document.onreadystatechange=function(){"complete"!==document.readyState?(document.querySelector("message-box").style.visibility="hidden",document.querySelector(".loader").style.visibility="visible"):(document.querySelector(".loader").style.display="none",document.querySelector(".message-box").style.visibility="visible")};var e=document.getElementById("user-position"),t={fetchAirQuality:function(e){var t=this;fetch("https://airapi.airly.eu/v2/measurements/nearest?"+e,{headers:{apikey:"B4NwRiiIR9Pvgu4QZnBPRgJlr6dBWefM",Accept:"application/json"}}).then((function(e){if(e.ok)return e.json();throw alert("Nie odnaleziono czujnika"),new Error("Nie odnaleziono czujnika")})).then((function(e){return t.displayAirQuality(e)})),fetch("https://airapi.airly.eu/v2/installations/nearest?"+e,{headers:{apikey:"B4NwRiiIR9Pvgu4QZnBPRgJlr6dBWefM",Accept:"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Nie odnaleziono czujnika")})).then((function(e){return t.displayLocation(e)}))},displayLocation:function(e){var t=e[0].address,n=t.city,o=t.street;document.querySelector(".address").innerText="Lokalizacja: "+n+", "+o},displayAirQuality:function(e){var t=e.current.indexes.at(0),n=t.value,o=t.level,i=t.description,r=t.advice,a=t.color;document.querySelector(".index").innerText="Indeks CAQI: "+n,document.querySelector(".level").innerText="Poziom: "+o,document.querySelector(".description").innerText=i,document.querySelector(".advice").innerText=r,document.querySelector(".message-box").style.background=a}};navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){e.innerHTML="Szerokość: "+n.coords.latitude+" <br>Długość: "+n.coords.longitude,t.fetchAirQuality("lat=".concat(n.coords.latitude,"&lng=").concat(n.coords.longitude))}),(function(e){console.error("Błąd lokalizacji.",e)})):e.innerHTML="Geolokalizacja niedostępna."})();