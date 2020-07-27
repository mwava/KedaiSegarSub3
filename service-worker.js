importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
//pendaftaran cache
if(workbox){
    console.log("Success full");
    //cache configuration

      workbox.routing.registerRoute(
        /^https:\/\/api\.football-data\.org\/v2/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'api-football'
        })
     );
     workbox.routing.registerRoute(
        /^https:\/\/upload\.wikimedia\.org\/wikipedia/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'api-football-flag'
        })
     );
  
    workbox.precaching.precacheAndRoute([
        //outdoor
        {
            url: '/index.html',revision: '1'
        },
        {
            url: '/infoTeam.html',revision: '1'
        },
        {
            url: '/manifest.json',revision: '1'
        },
        {
            url: '/nav.html',revision: '1'
        },
        {
            url: '/subekrep.js',revision: '1'
        },
        //asset
        {
            url: '/asset/android-icon-144x144.png',revision: '1'
        },
        {
            url: '/asset/android-icon-192x192.png',revision: '1'
        },
        {
            url: '/asset/android-icon-96x96.png',revision: '1'
        },
        {
            url: '/asset/bundesliga.png',revision: '1'
        },
        {
            url: '/asset/kedai.png',revision: '1'
        },
        //End Asset
    
        //java script
        {
            url: '/js/data.js',revision:'1'
        },
        {
            url: '/js/database.js',revision:'1'
        },
        {
            url: '/js/idb.js',revision:'1'
        },
        {
            url: '/js/materialize.min.js',revision:'1'
        },
        {
            url: '/js/nav.js',revision:'1'
        },
        //End JS
    
        //style
        {
            url: '/css/materialize.min.css',revision:'1'
        },
        {
            url: '/css/style.css',revision:'1'
        },
        //END Style
    ])

/*
    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static',
        })
    )
    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
            }),
          ],
        }),
      );
    
    workbox.routing.registerRoute(
        new RegExp('/pages/'),
        workbox.strategies.StaleWhileRevalidate({
            cacheName:'kedaiPages-v1'
        })
      );
    
      workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/'),
        workbox.strategies.StaleWhileRevalidate({
            cacheName:'Api football'
        })
      );
      workbox.routing.registerRoute(
        ({url}) => url.origin,
        new workbox.strategies
           
     )
     */
 
}else{
    console.log("Crash")
}
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
  

