
// Important: Include cloud messaging module after the initial configure()
var hmsPush = require('com.ikamaru.ti.hms.push');

// Called when the Firebase token is ready
hmsPush.addEventListener('didRefreshRegistrationToken', onToken);

// Called when direct messages arrive. Note that these are different from push notifications
hmsPush.addEventListener('didReceiveMessage', onMessage);

function onToken(e) {
    Ti.API.info('Token', e.token);
}

function onMessage(e) {
    Ti.API.info('Message', e.message);
}

// Android: For configuring custom sounds and importance for the generated system
// notifications when app is in the background
hmsPush.createNotificationChannel({
    sound: 'warn_sound',
    channelId: 'general',
    channelName: 'General Notifications',
    importance: 'high', //will pop in from the top and make a sound
    showBadge: true
});
hmsPush.registerForPushNotifications();
Ti.API.info("Last data: " + hmsPush.lastData);


// check if token is already available
if (hmsPush.token !== null) {
    Ti.API.info('hmsPush-Token', hmsPush.token);
} else {
    Ti.API.info('Token is empty. Waiting for the token callback ...');
}


// subscribe to topic
hmsPush.subscribeToTopic('testTopic');