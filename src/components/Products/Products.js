import React,{useState, useEffect} from 'react';
import './Products.css'

function Products({setData}) {
    const productDetails = [];
    const [Responses, setResponses] = React.useState([]);
    const [stopInfiniteLoop, setStopInfiniteLoop] = React.useState(false);

    if (!stopInfiniteLoop) {
        fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
            .then(response => response.json())
            .then(data => {
                for (const dataItem in data) {
                    productDetails.push({
                        id: data[dataItem].id,
                        newPrice: data[dataItem].newPrice,
                        oldPrice: data[dataItem].oldPrice,
                        productImage: data[dataItem].productImage,
                        productName: data[dataItem].productName
                    });
                }
                setResponses(productDetails);
            })
        setStopInfiniteLoop(true);
    }

    const [count, setCount] = useState(0);

    const cartHandler = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }
    useEffect(() => {
        setData(count);
    })

    return (
        <div className="product-container">
            <p className="product-heading">Products</p>
            <div className="product-list">
                {
                    Responses && (
                        Responses.map((item) => {
                            return (
                                <div key={item.id} className="product-item">
                                    <div className="item-image">
                                        <img src={item.productImage} alt={item.productName} />
                                    </div>
                                    <p className="item-name">{item.productName}</p>
                                    <div className="price-section">
                                        <span>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" /></svg>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" /></svg>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" /></svg>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" /></svg>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" /></svg>
                                        </span>
                                        <div>
                                            <p className="item-old-price">{item.oldPrice}/-</p>
                                            <p className="item-new-price">{item.newPrice}/-</p>
                                        </div>
                                    </div>

                                    {/* <button className="cart-btn" >ADD TO CART</button> */}
                                    <button className="cart-btn" onClick={cartHandler} >ADD TO CART</button>

                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Products
