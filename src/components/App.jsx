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
  const [selectedFriends, setSelectedFriends] = useState(null);

  /*=========Toggle add friends form=============== */

  function handleShowAddFriends() {
    setShowAddFriends(!showAddFriends);
    setSelectedFriends(null);
  }

  /* ================== Add friends to list================ */

  function handleAddFriends(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriends(false);
  }

  /* ====================Handle Selection=================== */

  function handleSelection(friend) {
    setSelectedFriends(cur => (cur?.id === friend.id ? null : friend));
    setShowAddFriends(false);
  }

  function handleSplitBill(value) {
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFriends.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriends(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriends={selectedFriends}
        />
        {showAddFriends && <FormAddFriend onAddFriend={handleAddFriends} />}
        <Button onClick={handleShowAddFriends}>
          {showAddFriends ? "Close" : `Add Friend`}
        </Button>
      </div>
      {selectedFriends && (
        <FormSplitBill
          selectedFriends={selectedFriends}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
