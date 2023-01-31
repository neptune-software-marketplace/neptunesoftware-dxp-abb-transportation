// req is the http request object when the server script is used as an api endpoint.
const data = req.query; // request data body.

let query = entities.missionmanagermain.createQueryBuilder("alias").where("alias.DepartureStation = :DepartureStation", {DepartureStation: data.station});
query = query.orWhere("alias.ArrivalStation = :ArrivalStation", {ArrivalStation: data.station});

//query = query.andWhere("alias.Status != :Status", {Status: "COMPLETE"});

let entity = await query.getMany();

let res = []
entity.forEach(function(i, data) {
    if (i.Status != "COMPLETE") {
        res.push(i)
    }
});



result = res;
complete();