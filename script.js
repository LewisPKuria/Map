var mymap = L.map('map').setView([-0.303, 36.05], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-0.4832, 37.1274]).addTo(mymap);
marker.bindPopup("<b>kush is a jkuat student!!!</b><br>here is his home.").openPopup();