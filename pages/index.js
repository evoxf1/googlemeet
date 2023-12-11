import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "@/styles/home.module.css";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom=()=>{
    if(roomId) router.push(`/${roomId}`)
    else{
alert("Please Provide a room ID")}
  }

  return (
    <div className={styles.homeContainer}>
      <h1>VIDEO CALL</h1>
      <div className={styles.enterRoom}>
        {" "}
        <input
          type="text"
          placeholder="Enter Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e?.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
      <span className={styles.separatorText}>-------------or-----------</span>
      <button onClick={createAndJoin}>Create a new room</button>
    </div>
  );
}
