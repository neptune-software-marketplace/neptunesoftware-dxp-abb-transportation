const data = req.body

await entities.missionmanagermain.createQueryBuilder()
    .update()
    .set({"DepartureWagonNumber":data.DepartureWagonNumber,"DepartureDoorNumber":data.DepartureDoorNumber,"ReportStartTime":data.ReportStartTime,"ReportEndTime":data.ReportEndTime,"Status":"COMPLETE"})
    .where("id = :id", {id: data.id})
    .execute();

complete();