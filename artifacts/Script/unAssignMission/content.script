// req is the http request object when the server script is used as an api endpoint.
const data = req.body; // request data body.

await entities.missionmanagermain.createQueryBuilder()
    .update()
    .set({"AssignedTo":"","Status":"CREATED"})
    .where("id = :id", {id: data.id})
    .execute();

complete();