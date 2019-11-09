
// timeend = new Date(2020, 0, 1, 0, 0);
var date = new Date();
var timeend = new Date(date.getFullYear(), date.getMonth() + 1, 0);


window.onload = () =>{ Time();};
window.onload = () => {
	document.getElementById("time_today").insertAdjacentHTML("afterend", ":");
	document.getElementById("time_thour").insertAdjacentHTML("afterend", ":");
	document.getElementById("time_tmin").insertAdjacentHTML("afterend", ":");
	document.getElementById('time_for_event').style.visibility = "visible";
};
function Time() {
	let today = new Date();
	today = Math.floor((timeend-today)/1000);
	let tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	let tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	let thour=today%24; today=Math.floor(today/24);if(thour<10)thour='0'+thour;
	let timestr=today +":"+ thour+":"+tmin+":"+tsec;
	// document.getElementById('time_today').innerHTML = +today + '<br><div class="time_words">days</div>';
	// document.getElementById('time_thour').innerHTML=thour+'<br><div class="time_words">hours</div>';
	// document.getElementById('time_tmin').innerHTML=tmin+'<br><div class="time_words">minutes</div>';
	// document.getElementById('time_tsec').innerHTML=tsec+'<br><div class="time_words">seconds</div>';
	
	// contorol for timer
	document.getElementById('time_today').innerHTML = '20<br><div class="time_words">days</div>';
	document.getElementById('time_thour').innerHTML='03<br><div class="time_words">hours</div>';
	document.getElementById('time_tmin').innerHTML='06<br><div class="time_words">minutes</div>';
	document.getElementById('time_tsec').innerHTML='52<br><div class="time_words">seconds</div>';

};

setInterval(Time,1000);
let pastEvetsImgArray=[
	"https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/09/17/21/47/audience-1677028_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/04/04/03/03/event-1306079_960_720.jpg",
	"https://cdn.pixabay.com/photo/2015/09/18/11/38/audience-945449_960_720.jpg",
	// "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__740.jpg",
	"https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790_960_720.jpg",
	"https://cdn.pixabay.com/photo/2013/12/12/20/01/fireworks-227383_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/01/19/17/18/fairground-1149626_960_720.jpg",
	"https://cdn.pixabay.com/photo/2015/07/02/10/16/circus-828680_960_720.jpg",
];
document.querySelectorAll('.pastEventsImg').forEach(function(elem){
	genPastImg();
})
function genPastImg(i=1){
	let j;
	for(i;i<=4;i++){
		j=Math.floor(Math.random()*(pastEvetsImgArray.length-0)+0);
		console.log(j);
		let img=document.createElement("div");
		img.classList.add(`pastEventsImgN${i}`);
		img.innerHTML=`<img src="${pastEvetsImgArray[j]}" alt="event">`;
		document.querySelectorAll('.pastEventsImg')[0].appendChild(img);
	}
}
document.querySelector('#viewMore').onclick=function(){
	genPastImg();
}
let clickTable=document.querySelectorAll('table .clickable .fa');
for(let i=0;i<clickTable.length;i++){
	let j=i+1;
	if (i%2==0){
		document.querySelector(`[aria-controls="group-of-rows-${j}"]`).classList+=' tbldDark';
		document.querySelector('#group-of-rows-'+j).classList+=' tbldDark';
	}
	document.querySelector(`#group-of-rows-${j}`).classList+=' displayNone';
	clickTable[i].onclick=function (){
	document.querySelector(`#group-of-rows-${j}`).classList.toggle('displayNone');
	}
}
let contactWindow=document.querySelector('#contactDetails');
let showMap=document.querySelector('#viewMap');
let showContact=document.querySelector('#showContact');
showMap.onclick=function(){
	contactWindow.classList.add('displayNone');
	showContact.classList.remove('displayNone');
};
showContact.onclick=function(){
	contactWindow.classList.remove('displayNone');
	showContact.classList.add('displayNone');
};

let mymap = L.map('map').setView([52.232238, 21.028800], 16);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZmVyaWEyMiIsImEiOiJjazJxcXVwcmowZ20xM3BvNmVtYjg2cHA4In0.RS1U1kS6ir0yLgZZvwVBCg'
}).addTo(mymap);
mymap.scrollWheelZoom.disable();

let markforMap = L.icon({
	iconUrl: 'img/marker.svg',
	iconSize:     [25, 41], 
});
L.marker([52.232238, 21.028896], {icon: markforMap}).addTo(mymap).bindPopup(`<img src="img/logo.png"><p>City: Warszawa</p><p>ul. Blablabla 9</p><p>000000000 numer</p>`);