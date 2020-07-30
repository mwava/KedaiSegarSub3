importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
//pendaftaran cache
if (workbox) {
    console.log("Success full");
    //cache configurat

} else {
    console.log("Crash")
}

workbox.precaching.precacheAndRoute([
    //outdoor
    {
        url: '/', revision: '1'
    },
    {
        url: '/index.html', revision: '1'
    },
    {
        url: '/pages/home.html', revision: '1'
    },
    {
        url: 'pages/saved.html', revision: '1'
    },
    {
        url: '/infoTeam.html', revision: '1'
    },
    {
        url: '/manifest.json', revision: '1'
    },
    {
        url: '/nav.html', revision: '1'
    },
    {
        url: '/subekrep.js', revision: '1'
    },
    //asset
    {
        url: '/asset/android-icon-144x144.png', revision: '1'
    },
    {
        url: '/asset/android-icon-192x192.png', revision: '1'
    },
    {
        url: '/asset/android-icon-96x96.png', revision: '1'
    },
    {
        url: '/asset/bundesliga.png', revision: '1'
    },
    {
        url: '/asset/kedai.png', revision: '1'
    },
    //End Asset

    //java script
    {
        url: '/js/data.js', revision: '1'
    },
    {
        url: '/js/database.js', revision: '1'
    },
    {
        url: '/js/idb.js', revision: '1'
    },
    {
        url: '/js/materialize.min.js', revision: '1'
    },
    {
        url: '/js/nav.js', revision: '1'
    },
    {
        url: '/js/app.js', revision: '1'
    },
    //End JS

    //style
    {
        url: '/css/materialize.min.css', revision: '1'
    },
    {
        url: '/css/style.css', revision: '1'
    },
    //END Style
], { ignoreUrlParametersMatching: [/.*/] });


workbox.routing.registerRoute(
    /^https:\/\/api\.football-data\.org\/v2/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'football'
    })
);
workbox.routing.registerRoute(
    /^https:\/\/upload\.wikimedia\.org\/wikipedia/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'logo'
    })
);

//push
self.addEventListener('push', function (event) {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    const options = {
        body: body,
        icon: '/asset/kedai.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});


