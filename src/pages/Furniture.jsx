import React, { useEffect, useState } from 'react';
import SingleHotDeals from './SingleHotDeals';

const Furniture = () => {
    const [hotProduct, setHotProduct] = useState([]);

    useEffect(() => {
        fetch("https://api.hiring.masterkey.tech/api/v1/products")
            .then(res => res.json())
            .then(data => {
                const filteredProducts = data.products[0].productData.filter(product => product.product_type === "Deals on furniture");
                setHotProduct(filteredProducts);
            })
    }, [])

    console.log(hotProduct)

    return (
        <div className='py-12'>
            <div className="container">
                <h2 className='text-2xl font-semibold text-black pb-3 border-b border-dashed mb-8'>Deals on furniture {hotProduct?.length}</h2>
                <div className='hot-deals-items grid lg:grid-cols-5 xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 mt-12'>
                    {
                        hotProduct?.map(singleHotProduct => <SingleHotDeals
                            key={singleHotProduct?._id}
                            singleHotProduct={singleHotProduct}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Furniture;