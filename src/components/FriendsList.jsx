import { Friends } from "./Friends";

/* ==========================Friends list components================= */
export function FriendsList({ friends, onSelection, selectedFriends }) {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <Friends
            friend={friend}
            onSelection={onSelection}
            selectedFriends={selectedFriends}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}
