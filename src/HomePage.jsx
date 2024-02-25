import useOnline from "./useOnline";

export default function HomePage(){
const isOnline = useOnline()
    return isOnline ? "I am Online" : "Not Online";
}