import {getFirebaseToken,messaging} from "./firebase"
import { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    useEffect(()=>{
      getFirebaseToken();
      onMessage(messaging,(payload)=>{
         console.log(payload);
         toast(payload.notification.body);
      });
    },[]);

  return (
    <div className="app">
        <ToastContainer />

    </div>
  );
}
