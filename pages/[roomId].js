import { useSocket } from "@/context/socket";
import useMediaStream from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";

import Player from "@/components/Player";
import { useEffect } from "react";
const Room = () => {
  const socket = useSocket();
  const { peer, myId } = usePeer();
  const { stream } = useMediaStream();

  useEffect(() => {
    if (!socket || !peer || !stream) return;
    const handleUserConnected = (newUser) => {
      console.log(`user connected in room with userId ${newUser}`);

      // const call = peer.call(newUser, stream)
    };
    socket.on("user-connected", handleUserConnected);
    return () => {
      socket.off("user-connected", handleUserConnected);
    };
  }, [peer, socket, stream]);

  useEffect(() => {
    if (!peer) return;
    peer.on("call", (call) => {
      const { peer: callerId } = call;
      call.answer(stream);
      call.on("stream", (incomingStream) => {
        console.log(`incoming stream from ${callerId}`);
      });
    });
  }, [peer, stream]);

  return (
    <div>
      <Player url={stream} muted playing playerId={myId} />
    </div>
  );
};

export default Room;
