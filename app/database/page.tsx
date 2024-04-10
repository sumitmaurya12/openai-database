"use client"
import axios from "axios";

export default function Database(){
    async function fetchOrderInfo() {
          const response1 = await axios.post('/api/getinfo',
           {
            order_id:23599049
           }
          );
          console.log("this is axios response",response1);
    }
    function handleButtonClick() {
        fetchOrderInfo();
    }

    return(
        <div>
            <button
            onClick={handleButtonClick}
            >Get Status</button>
            <h1>Finding product info</h1>
        </div>
    )
}