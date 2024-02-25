import useOnline from "./useOnline";

export default function ChatPage(){
    const isOnline = useOnline()
    return isOnline ? "I am here to chat" : "offline";
}