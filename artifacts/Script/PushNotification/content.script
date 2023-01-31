// const data = req.body; // request data body.

// log.info(data.message);

// const DepStation = data.DepartureStation;
// const DepTime = data.DepartureTime;
// const bodyText = DepStation + " " + DepTime;

// try {
//     const r = await p9.push.send({
        
//         title: 'Nieuwe missie beschikbaar',
//         body: bodyText,
//         launchpadName: '...',
        
//     })
    
//     log.info('Result after push', r);
    
// } catch (error) {
    
//     log.error('Error: ' + error);
    
// }

// Use to send push notifications with firebase. Firebase must have been configured in system settings.
try {
    const push = await p9.push.send({
        launchpadId: ["91906430-6D11-EC11-B563-0050F255E893"],
        launchpadName: 'DXP', // Only send to users for this Launchpad
        //userNames: [], // Array with user names
        //userIds: [], // Array with user id
        title: 'Hello world',
        //icon: 'your icon',
        body: 'This is the main text',
    })
    console.log('Result after push', push);

} catch (error) {
    console.error('Error sending push: ', error);
}