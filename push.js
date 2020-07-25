var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BHU4PZh83C-SP_-K7ccPPsrtGBWiiycIZGhpDZINGeMg7tu3Uhuq8VPT1lHv-NVNNQjvQFvxMGtb2zg5GFzjyQc",
    "privateKey": "Hr7B-ey_ZbF6P2MlefrDRz0Js0QXemvCKXPBi1DiXT8"
};


webPush.setVapidDetails(
    'mailto:mwavafp31sss@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/flLSLT15dqQ:APA91bHMMU00LT0HsjHgPSx9sSRZceCNJYof2yTrPM_Zx2lx4qFSwR0712Bnvg372p6CmC34hp-y0mBZfkrTFcQ8qC0_qnzPNni42qbpBm1fFI6bwtoqjvpKar8u6ojy96X8EHy36wvS",
    "keys": {
        "p256dh": "BDFnrlCj6Zx5aezobDVp6IA6ubWAP4COGrHkiZbdCkIrWHEwaGt1HjdE7MorG81Y9kKxLfXDS9/McykgHTjh+7U=",
        "auth": "snN3VSm85A9BoPZ8Arheng=="
    }
};
var payload = 'Mau tau INFO BUNDESLIGA langsung open saja!!!! ';

var options = {
    gcmAPIKey: '517331275832',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);