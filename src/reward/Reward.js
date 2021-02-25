import React, { useState } from 'react';

function Reward() {

    let data = localStorage.getItem('products');
    
    let total = 0;

    const calcualteRewards = () => {
        let total = 0;
        if (data) {
            data = JSON.parse(data);
            data.forEach(product => {
                  total = total + product.rewards;
            });
        }
        return total;
    }
    total = calcualteRewards();
     const [totalRewards] = useState(total);

    return <div> 
        <h2> Your Reward Points: {totalRewards}</h2> 
         
    </div>
}


export default Reward;