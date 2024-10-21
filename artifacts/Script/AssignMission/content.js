// req is the http request object when the server script is used as an api endpoint.
const data = req.body; // request data body.

const user = req.user;
const userId = user.id;

//username
const username = user.username;

//log.info("username = "+username+"|"+"data ="+JSON.stringify(data))

await entities.missionmanagermain.createQueryBuilder()
    .update()
    .set({"AssignedTo":username,"Status":"ASSIGNED"})
    .where("id = :id", {id: data.id})
    .execute();


complete();
