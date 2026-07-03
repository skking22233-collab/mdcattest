import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Helper functions for students collection
export const saveStudentToFirebase = async (studentData: any) => {
  try {
    const docRef = doc(db, "students", studentData.id);
    await setDoc(docRef, studentData);
    return true;
  } catch (e) {
    console.error("Error adding student: ", e);
    return false;
  }
};

export const getStudentsFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    const students: any[] = [];
    querySnapshot.forEach((doc) => {
      students.push(doc.data());
    });
    // Sort by most recent first
    return students.sort((a, b) => b.timestamp - a.timestamp);
  } catch (e) {
    console.error("Error getting students: ", e);
    return [];
  }
};

export const deleteStudentFromFirebase = async (id: string) => {
  try {
    await deleteDoc(doc(db, "students", id));
    return true;
  } catch (e) {
    console.error("Error deleting student: ", e);
    return false;
  }
};

export const clearAllStudentsFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    const deletePromises = querySnapshot.docs.map(document => deleteDoc(doc(db, "students", document.id)));
    await Promise.all(deletePromises);
    return true;
  } catch (e) {
    console.error("Error clearing students: ", e);
    return false;
  }
};
