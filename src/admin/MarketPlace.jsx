import React, { useEffect, useState } from 'react';
import customAxios from '../utils/http';

function MarketPlace() {
    const [market, setMarket] = useState('');

    useEffect(() => {
        const fetchMarket = async () => {
            try {
                const response = await customAxios.get('/marketplace/get.php');
                if (response.status === 200) {
                    const dt = response.data;
                    console.log(dt);

                    // Extract content inside <section>
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(dt, "text/html");
                    const extractedHTML = doc.querySelector("#response")?.innerHTML || dt;
                    
                    setMarket(extractedHTML);
                }
            } catch (error) {
                console.log("Error fetching marketplace data:", error);
            }
        };

        fetchMarket();
    }, []);

    return (
        <div>
            {market && <div dangerouslySetInnerHTML={{ __html: market }} />}
        </div>
    );
}

export default MarketPlace;
