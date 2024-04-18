importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAJhNxjoRLL0TDhsFTxH38CYPyR1R-9LLI",
  authDomain: "khetimitra-a185e.firebaseapp.com",
  projectId: "khetimitra-a185e",
  storageBucket: "khetimitra-a185e.appspot.com",
  messagingSenderId: "842229436500",
  appId: "1:842229436500:web:94b88f5327fdcd8df59dc1",
  measurementId: "G-888WE906YD",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
