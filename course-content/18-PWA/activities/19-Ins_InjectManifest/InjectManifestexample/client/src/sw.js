import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// Import the expiration plugin
import { ExpirationPlugin } from 'workbox-expiration';


//self. __WB_MANIFEST - workbox
//Webpack will take that reference and generate our final dist/service-worker.js . 
//But for that we need to add a new plugin to our webpack.
//Add assets to the cache and respond to network requests with these cached assets.
precacheAndRoute(self.__WB_MANIFEST);

const cacheName = 'static-resources';
const matchCallback = ({ request }) => {
  console.log(request);
  return (
    // CSS
    request.destination === 'style' ||
    // JavaScript
    request.destination === 'script'
  );
};

//registers the route
// https://developers.google.com/web/tools/workbox/modules/workbox-routing
// registerRoute(matchCb, handlerCb);
// matchCb({url, request, event}) 
// handlerCb ({url, request, event, params})
// The only limitation is that the "match" callback must synchronously return a truthy value, 
// you can’t perform any asynchronous work. The reason for this is that the Router must synchronously respond to the fetch event or allow falling through to other fetch events.
registerRoute(
  matchCallback,
  // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.StaleWhileRevalidate
  // Resources are requested from both the cache and the network in parallel. 
  // The strategy will respond with the cached version if available, 
  // otherwise wait for the network response. 
  // The cache is updated with the network response with each successful request.
  new StaleWhileRevalidate({
    // ****
    // https://developer.chrome.com/docs/workbox/modules/workbox-strategies/#stale-while-revalidate
    // The stale-while-revalidate pattern allows you to respond to the request as quickly as possible with a cached response if available, falling back to the network request if it's not cached. 
    // The network request is then used to update the cache. As opposed to some implementations of stale-while-revalidate, 
    // this strategy will always make a revalidation request, regardless of the age of the cached response.
    cacheName,
    plugins: [
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-cacheable-response.CacheableResponsePlugin
    // If both statuses and headers are specified, then both conditions must be met for the Response to be considered cacheable.
    // HTTP StatusCode=0 is associated with incomplete capture of a hit or page and often with a labeling of the hit as: request canceled ("ReqCancelled=Client" "ReqCancelled=Server" or "ReqCancelled=True").
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Register route for caching images
// The cache first strategy is often the best choice for images because it saves bandwidth 
//and improves performance.
registerRoute(
  ({ request }) => request.destination === 'image',
  // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.CacheFirst?hl=en
  // A cache first strategy is useful for assets that have been revisioned, such as URLs like /styles/example.a8f5f1.css, since they can be cached for long periods of time.
  new CacheFirst({
     // ****
    // The request hits the cache. If the asset is in the cache, serve it from there.
    // If the request is not in the cache, go to the network.
    // Once the network request finishes, add it to the cache, then return the response from the network.
    cacheName: 'my-image-cache',
    plugins: [
      //https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-cacheable-response.CacheableResponsePlugin
      //If both statuses and headers are specified, then both conditions must be met for the Response to be considered cacheable.
      new CacheableResponsePlugin({
        // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-cacheable-response.CacheableResponsePlugin
        // If both statuses and headers are specified, then both conditions must be met for the Response to be considered cacheable.
        // HTTP StatusCode=0 is associated with incomplete capture of a hit or page 
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);
