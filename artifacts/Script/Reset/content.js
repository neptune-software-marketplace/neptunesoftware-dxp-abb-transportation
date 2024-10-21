await entities.missionmanagermain.createQueryBuilder()
    .update()
    .set({"Status":"CREATED","AssignedTo":""})
    .execute();


complete();