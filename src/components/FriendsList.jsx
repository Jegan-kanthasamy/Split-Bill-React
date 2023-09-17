import { Friends } from "./Friends";

/* ==========================Friends list components================= */
export function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(friend => {
        return <Friends friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}
