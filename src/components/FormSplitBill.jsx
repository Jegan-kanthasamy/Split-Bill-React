import { useState } from "react";
import { Button } from "./Button";

/* ========================Split bill form component=================================== */
export function FormSplitBill({ selectedFriends, onSplitBill }) {
  /*============== Creating useState to control the input element ============  */

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriends.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />

      <label> 🚶 Your expenses</label>
      <input
        type="text"
        value={paidByUser}
        onChange={e =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label> 👭 {selectedFriends.name}'s expenses</label>
      <input type="text" disabled value={paidByFriend} />

      <label>😃 Who's paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriends.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
