importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCYUGAXxUMB72KKaf53HNxgAD-g98qzRtw",
    authDomain: "flutter-maps-pratica---politic.firebaseapp.com",
    projectId: "flutter-maps-pratica---politic",
    storageBucket: "flutter-maps-pratica---politic.appspot.com",
    messagingSenderId: "1045165551552",
    appId: "1:1045165551552:web:fdc21d1b19de65b7442225"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();


  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });