import { useEffect, useState } from "react";

export default function useOnline(timeOut){
    const [isOnline,setOnline] = useState(false)

    useEffect(()=>{
      setTimeout(()=>{
    setOnline(true)
      },timeOut)
    },[])

    return isOnline 
}