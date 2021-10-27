import React from 'react';
import product1 from "../../assets/images/icons/product1.png"

type ProductCardProps = {
    img: any;
    category: String;
    title: String;
    price: number;
    bestSeller: boolean;
}

const ProductCard: React.FC<ProductCardProps> = () => (
    <div className="product-card">
        <div className="product-image" style={{ backgroundImage: `url('${product1}')` }}>
            <div className="best-seller-badge">Best Seller</div>
            <button className="add-to-cart-btn" type="button">ADD TO CART</button>
        </div>
        <p className="product-category">People</p>
        <h3 className="product-title">Red Bench</h3>
        <p className="product-price">$3.89</p>
    </div>
)

export default ProductCard