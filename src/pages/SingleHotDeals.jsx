import React from 'react';

const SingleHotDeals = ({ singleHotProduct }) => {
    const { _id, product_name, product_price, product_type, product_discount, product_img } = singleHotProduct;
    return (
        <a class="card card-compact rounded bg-base-100 shadow-lg" href="/product-details/6386cf1c29def1258745bd0e"><figure>
            <img class="w-full h-[225px]" src={product_img} alt="car!" />
        </figure>
            <div class="card-body justify-between">
                <h2 class="card-title text-black mt-2">{product_name}
                </h2>
                <div class="flex items-center justify-between">
                    <h2 class="card-title text-black mt-2">$ {product_price}
                    </h2>
                    <span class="text-lg text-black block font-medium">$ {product_discount}</span>
                </div>
            </div>
        </a>
    );
};

export default SingleHotDeals;