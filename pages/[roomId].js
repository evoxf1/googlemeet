import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
const Room = () => {
  const socket = useSocket();
  const { peer, myId } = usePeer();
};

export default Room

// useEffect(() => {
//     socket?.on("connect", () => {
//       console.log(socket.id);
//     });
//   }, [socket]);