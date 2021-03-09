const withPWA = require("next-pwa"); // eslint-disable-line

module.exports = withPWA({
  trailingSlash: true,
  pwa: {
    dest: "public",
    runtimeCaching: [
      {
        // MUST be the same as "start_url" in manifest.json
        urlPattern: "/",
        // use NetworkFirst or NetworkOnly if you redirect un-authenticated user to login page
        // use StaleWhileRevalidate if you want to prompt user to reload when new version available
        handler: "StaleWhileRevalidate",
        options: {
          // don't change cache name
          cacheName: "start-url",
          expiration: {
            maxEntries: 1,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
      {
        urlPattern: /.*\.(?:jpg|jpeg|gif|png|svg|ico|webp)/i,
        handler: "CacheFirst",
        options: {
          cacheName: "image-artefacts",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
      {
        urlPattern: /.*\.(?:mp3|wav|ogg)/i,
        handler: "CacheFirst",
        options: {
          cacheName: "audio-artefacts",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
      {
        urlPattern: /.*/i,
        handler: "CacheFirst", // Reset to StaleWhileRevalidate
        options: {
          cacheName: "others",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
    ],
  },
});
