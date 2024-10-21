const result = xhr.responseJSON;

let data = [];
let seenStations = new Set();

//Check for duplicate stations 

result.forEach(station => {
  if (station.ArrivalStation !== '' && !seenStations.has(station.ArrivalStation)) {
    data.push({ ArrivalStation: station.ArrivalStation });
    seenStations.add(station.ArrivalStation);
  }
});


modeloSelectDialogStations.setData(data);

modeloSelectStationVertrekstation.setData(data);
modeloSelectStationAankomststation.setData(data);