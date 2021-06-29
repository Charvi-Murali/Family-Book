var album = [
"https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
"https://static.wikia.nocookie.net/simpsons-fanfiction/images/d/dc/TiitlitaLisa.jpg/revision/latest?cb=20150104100446",
"https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/220px-Maggie_Simpson.png"

];

var parentsname = [
   "Murali Subramanian",
   "Charvi Murali",
   "Neha Murali" 
]

var i = 0;

function next() {
document.getElementById("familyimage").src = album[i]
document.getElementById("name").innerHTML = parentsname[i]
i++
}

if (i==2) {
    i=0
}