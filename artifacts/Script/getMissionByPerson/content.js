// req is the http request object when the server script is used as an api endpoint.

//Station name
const data = req.query; // request data body.
//log.info(data);

// //User who made request
// const user = req.user;
// //log.info(user);
// const username = user.username;
//
// Since this script was changed to Anon access, the req.user doesn't work
const username = data.name

//Get all missions with matching station
let query = entities.missionmanagermain.createQueryBuilder("alias").where("alias.DepartureStation = :DepartureStation", {DepartureStation: data.station});
query = query.orWhere("alias.ArrivalStation = :ArrivalStation", {ArrivalStation: data.station});
let entity = await query.getMany();


let res = []
entity.forEach(function(i, data) {
    if ( (i.Status != "COMPLETE") & (i.AssignedTo === username) ) {
        res.push(i)
    }
});

result = res;
complete();