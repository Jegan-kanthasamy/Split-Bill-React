import { Button } from "./Button";

/* =========================================================================== */

export function Friends({ friend, onSelection, selectedFriends }) {
  const isSelected = friend.id === selectedFriends?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You Owes {friend.name} {friend.balance * friend.balance}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance * friend.balance}$
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
