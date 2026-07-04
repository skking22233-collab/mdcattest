import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, setDoc, getDoc } from "firebase/firestore";

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

// Global Sound Management using Firestore (chunking for large files)
export const saveSurpriseSoundToFirebase = async (base64String: string | null) => {
  try {
    if (!base64String) {
      await deleteDoc(doc(db, "settings", "surpriseSound"));
      return true;
    }

    // Split into 800KB chunks (Firestore limit is 1MB per document)
    const chunkSize = 800 * 1024;
    const chunks = [];
    for (let i = 0; i < base64String.length; i += chunkSize) {
      chunks.push(base64String.substring(i, i + chunkSize));
    }

    // Save metadata
    await setDoc(doc(db, "settings", "surpriseSound"), {
      chunksCount: chunks.length,
      timestamp: Date.now()
    });

    // Save chunks
    const chunkPromises = chunks.map((chunkData, index) => 
      setDoc(doc(db, "settings", `surpriseSound_chunk_${index}`), {
        data: chunkData
      })
    );
    await Promise.all(chunkPromises);
    return true;
  } catch (e) {
    console.error("Error saving sound to Firebase:", e);
    return false;
  }
};

export const getSurpriseSoundFromFirebase = async () => {
  try {
    const metaDoc = await getDoc(doc(db, "settings", "surpriseSound"));
    if (!metaDoc.exists()) return null;

    const count = metaDoc.data().chunksCount;
    let fullString = "";

    // Fetch chunks sequentially or in parallel
    const chunkPromises = [];
    for (let i = 0; i < count; i++) {
      chunkPromises.push(getDoc(doc(db, "settings", `surpriseSound_chunk_${i}`)));
    }
    
    const chunkDocs = await Promise.all(chunkPromises);
    for (const chunkDoc of chunkDocs) {
      if (chunkDoc.exists()) {
        fullString += chunkDoc.data().data;
      }
    }

    return fullString || null;
  } catch (e) {
    console.error("Error fetching sound from Firebase:", e);
    return null;
  }
};
