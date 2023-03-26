import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// Import the expiration plugin
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__WB_MANIFEST);

const cacheName = 'static-resources';
// The destination read-only property of the Request interface returns a string describing the type of content being requested.
// https://developer.mozilla.org/en-US/docs/Web/API/Request/destination
const matchCallback = ({ request }) => {
  console.log(request);
  return (
    // CSS
    request.destination === 'style' ||
    // JavaScript
    request.destination === 'script'
  );
};

registerRoute(
  matchCallback,
  new StaleWhileRevalidate({
    // On the first request for an asset, fetch it from the network, place it in the cache, and return the network response.
    // On subsequent requests, serve the asset from the cache first, then "in the background," re-request it from the network and update the asset's cache entry.
    // For requests after that, you'll receive the last version fetched from the network that was placed in the cache in the prior step.
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Register route for caching images
// The cache first strategy is often the best choice for images because it saves bandwidth and improves performance.
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    // The request hits the cache. If the asset is in the cache, serve it from there.
    // If the request is not in the cache, go to the network.
    //Once the network request finishes, add it to the cache, then return the response from the network.
    cacheName: 'my-image-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);


// const matchCb = ({url, request, event}) => {
//   return url.pathname === '/www.omdbapi.com/';
// };


// registerRoute(
//   matchCb,
//   new CacheFirst({
//     cacheName: 'my-json-cache',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   })
// );


