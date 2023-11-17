import { useEffect } from "react";

function FetchData(url, callback) {

    useEffect(() => {
        try {
            fetch(url).then(res=>res.json()).then(data=>callback(data))
        }
            
        catch (error) {
        console.log(error);
    }
}, [url,callback])
}

export default FetchData