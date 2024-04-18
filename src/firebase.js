import { initializeApp } from "firebase/app";
import { getToken, getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAJhNxjoRLL0TDhsFTxH38CYPyR1R-9LLI",
  authDomain: "khetimitra-a185e.firebaseapp.com",
  projectId: "khetimitra-a185e",
  storageBucket: "khetimitra-a185e.appspot.com",
  messagingSenderId: "842229436500",
  appId: "1:842229436500:web:94b88f5327fdcd8df59dc1",
  measurementId: "G-888WE906YD",
};

console.log("*** Firebase Config ***", firebaseConfig);

//firebase intialize
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
export {messaging};
export const getFirebaseToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    console.log("Notification permission granted.");
    const token = await getToken(messaging, {
      vapidKey:
        "BOwW8HWr9XW8zLy7rGnxiZFxKsB2Yk4Sk4ddbUHUwtrljUgq0jUMU5uCJHf4R4e_ePnP-eop6vY412UJMHGVD1Q",
    });
    console.log(token);
  } else {
    console.log("permission denied");
  }
};

