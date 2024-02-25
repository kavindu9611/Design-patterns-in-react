import useOnline from "./useOnline";

export default function ChatPage(){
    const isOnline = useOnline(1000)
    return isOnline ? "I am here to chat" : "offline";
}