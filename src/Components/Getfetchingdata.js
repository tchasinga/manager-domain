import { useEffect, useState } from "react";
import Pagingdisplaying from "./Remotedisplayer";
import Mehtodinputdata from "./Creater";

const Datafetchingfirtmethod = () => {
    const [data, setData] = useState(null)
    // let books = [];
    
    // fetch data here and set it to state using the setter function.

    useEffect(() =>{
        fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/K4n5MHOJJUM7HBvm37uj/books/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setData(data))
        
    }, [data])
    console.log("books",data)
    return (  
         <div>
            <Mehtodinputdata />
           {data && <Pagingdisplaying data={data}/> }
         </div>
    );
}
 
export default Datafetchingfirtmethod;