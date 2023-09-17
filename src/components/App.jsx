import { useState } from "react";
import { FriendsList } from "./FriendsList";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";

/* ========= data ==================== */

let initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

/* =======================Main App function  ==================*/

export default function App() {
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  /*=========Toggle add friends form=============== */

  function handleShowAddFriends() {
    setShowAddFriends(!showAddFriends);
  }

  /* ================== Add friends to list================ */

  function handleAddFriends(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriends(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriends && <FormAddFriend onAddFriend={handleAddFriends} />}
        <Button onClick={handleShowAddFriends}>
          {showAddFriends === false ? `Add Friend` : "Close"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
