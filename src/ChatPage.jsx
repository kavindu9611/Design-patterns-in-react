import { useEffect, useState } from "react";

export default function ChatPage(){
    const [isOnline,setOnline] = useState(false)

    useEffect(()=>{
      setTimeout(()=>{
    setOnline(true)
      },3000)
    },[])

    return isOnline ? "I am here to chat" : "offline";
}