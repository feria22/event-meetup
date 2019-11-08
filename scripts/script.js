
// timeend = new Date(2020, 0, 1, 0, 0);
var date = new Date();
var timeend = new Date(date.getFullYear(), date.getMonth() + 1, 0);


window.onload = () => Time();
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
showMap.onclick=function(){
	contactWindow.classList.add('displayNone')
}