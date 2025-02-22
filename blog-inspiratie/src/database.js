import { db } from "./firebase"; // Asigură-te că ai configurat corect Firebase
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Adaugă o postare nouă
export const addPost = async (title, content, userId) => {
  try {
    // Adăugăm postarea în colecția "posts"
    await addDoc(collection(db, "posts"), {
      title,
      content,
      userId,
      createdAt: new Date(), // Data creării postării
    });
    console.log("Post added successfully!");
  } catch (error) {
    console.error("Error adding post:", error.message); // Detalii despre eroare
  }
};

// Obține toate postările din Firestore
export const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts")); // Obținem toate postările
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Returnează postările
  } catch (error) {
    console.error("Error getting posts:", error.message); // Detalii despre eroare
  }
};

// Adaugă un comentariu la o postare existentă
export const addComment = async (postId, userId, text) => {
  try {
    // Adăugăm comentariul în colecția "comments"
    await addDoc(collection(db, "comments"), {
      postId,
      userId,
      text,
      createdAt: new Date(), // Data creării comentariului
    });
    console.log("Comment added successfully!");
  } catch (error) {
    console.error("Error adding comment:", error.message); // Detalii despre eroare
  }
};

// Obține toate comentariile pentru o postare
export const getComments = async (postId) => {
  try {
    const q = query(collection(db, "comments"), where("postId", "==", postId)); // Filtrăm comentariile pe baza postId
    const querySnapshot = await getDocs(q); // Obținem comentariile pentru postarea specificată
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Returnează comentariile
  } catch (error) {
    console.error("Error getting comments:", error.message); // Detalii despre eroare
  }
};
