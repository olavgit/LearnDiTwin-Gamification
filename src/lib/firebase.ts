import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDrTR0lVaKeBrqIlhJiwst2-KsEwBtE538',
	authDomain: 'bob-game-90e47.firebaseapp.com',
	projectId: 'bob-game-90e47',
	storageBucket: 'bob-game-90e47.appspot.com',
	messagingSenderId: '880391810715',
	appId: '1:880391810715:web:f537e6f4c16b7412e7a03e',
	measurementId: 'G-FL5LYSNQ76'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
