import { db } from "./firebase.js";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const addPost = async (title, content) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("Utilizatorul nu este autentificat!");
    return;
  }

  try {
    await addDoc(collection(db, "posts"), {
      title,
      content,
      userId: user.uid,
      createdAt: new Date(),
    });
    console.log("Post added successfully!");
  } catch (error) {
    console.error("Error adding post:", error.message);
  }
};

export const addComment = async (postId, text) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("Utilizatorul nu este autentificat!");
    return;
  }

  try {
    await addDoc(collection(db, "comments"), {
      postId,
      userId: user.uid,
      text,
      createdAt: new Date(),
    });
    console.log("Comment added successfully!");
  } catch (error) {
    console.error("Error adding comment:", error.message);
  }
};

