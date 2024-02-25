import useOnline from "./useOnline";

export default function HomePage(){
const isOnline = useOnline(4000)
    return isOnline ? "I am Online" : "Not Online";
}