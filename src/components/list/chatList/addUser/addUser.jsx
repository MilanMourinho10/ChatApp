import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import "./addUser.css";
import { db } from "../../../../lib/firebase";
import { useState } from "react";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore(); // ändring för korrekt användning

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      const userChatDoc = doc(userChatRef, user.id);
      const userChatSnap = await getDoc(userChatDoc);
      if (!userChatSnap.exists()) {
        await setDoc(userChatDoc, { chats: [] });
      }

      const currentUserChatDoc = doc(userChatRef, currentUser.id);
      const currentUserChatSnap = await getDoc(currentUserChatDoc);
      if (!currentUserChatSnap.exists()) {
        await setDoc(currentUserChatDoc, { chats: [] });
      }

      // Här skapas newChatDataForUser och newChatDataForCurrentUser
      const newChatDataForUser = {
        chatId: newChatRef.id,
        lastMessage: "",
        receiverId: currentUser.id,
        updatedAt: serverTimestamp(),
      };

      const newChatDataForCurrentUser = {
        chatId: newChatRef.id,
        lastMessage: "",
        receiverId: user.id,
        updatedAt: serverTimestamp(),
      };

      // Använd de deklarerade objekten här
      await updateDoc(userChatDoc, {
        chats: arrayUnion(newChatDataForUser),
        updatedAt: serverTimestamp(),
      });

      await updateDoc(currentUserChatDoc, {
        chats: arrayUnion(newChatDataForCurrentUser),
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addUsers">
      <form className="userform" onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button className="addBtn">Search</button>
      </form>
      {user && (
        <div className="user-search">
          <div className="detail-user">
            <img src={user.avatar || "./avatar.png"} alt="" className="user-img" />
            <span>{user.username}</span>
          </div>
          <button className="addBtn" onClick={handleAdd}>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
