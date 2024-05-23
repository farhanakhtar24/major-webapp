// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAdPEbd2d9oahI-qO0EpdXQg5W-xz5PRXk",
	authDomain: "solocl-assignment.firebaseapp.com",
	projectId: "solocl-assignment",
	storageBucket: "solocl-assignment.appspot.com",
	messagingSenderId: "610505790909",
	appId: "1:610505790909:web:d3d195062999514ab8eed4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
