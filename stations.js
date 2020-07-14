let goodStations = [];
function chooseStations(stations){
for (let i = 0; i< stations.length; i++){
if (stations[i][1] >= 20 && (stations[i][2] ==‘restaurant’ || stations[i][2] ==‘school’)){
goodStations.push(stations[i][0]);
}
}
return goodStations;
}