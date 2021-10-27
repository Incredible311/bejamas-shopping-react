import React from 'react';
import { Grid } from '@material-ui/core';
import featureImg from "../../assets/images/icons/feature-img.png";
import product1 from "../../assets/images/icons/product1.png";
import product2 from "../../assets/images/icons/product4.png";
import product3 from "../../assets/images/icons/product5.png";


type FeatureBlockProps = {
    img: any;
    category: String;
    title: String;
    details: any;
}

const FeatureBlock: React.FC<FeatureBlockProps> = () => (
    <div className="feature-block">
        <div className="d-flex-center justify-between">
            <h3 className="feature-block-title">Samurai King Resting</h3>
            <button type="button" className="feature-add-card-btn">ADD TO CART</button>
        </div>
        <div style={{ backgroundImage: `url('${featureImg}')` }} className="feature-product-img" >
            <div className="feature-product-img-title">
                Photo of the day
            </div>
        </div>
        <button type="button" className="mobile-add-cart-btn feature-add-card-btn">
            ADD TO CART
        </button>

        <Grid container>
            <Grid item md={8} xs={12} className="feature-product-content">
                <h4 className="feature-product-title">About the Samurai King Resting</h4>
                <h4 className="feature-product-category">Pets</h4>
                <p className="feature-product-description">
                    So how did the classical Latin become so incoherent? According to McClintock,
                    a 15th century typesetter likely scrambled part of Cicero&apos;s De Finibus in
                    order to provide placeholder text to mockup various fonts for a type
                    specimen book.So how did the classical Latin become so incoherent?
                    According to McClintock, a 15th century typesetter likely scrambled
                    part of Cicero&apos;s De Finibus in order to provide placeholder text to mockup
                    various fonts for a type specimen book.So how did the classical
                    Latin become so incoherent?
                    According to McClintock.</p>
            </Grid>
            <Grid item md={4} xs={12} className="feature-product-details">
                <div>
                    <h4 className="feature-product-title">People also buy</h4>
                    <div className="d-flex-center feature-product-detail-imgs">
                        <img src={product1} alt="product"
                            className="feature-product-buy-also-img" />
                        <img src={product2} alt="product"
                            className="feature-product-buy-also-img margin-x-20" />
                        <img src={product3} alt="product"
                            className="feature-product-buy-also-img" />
                    </div>
                    <div className="feature-product-details-text">
                        <h4 className="feature-product-details-title">Details</h4>
                        <p className="feature-product-details-size">
                            <b>Size: </b>1020 * 1020 pixel
                        </p>
                        <p className="feature-product-details-size"><b>Size: </b>15 mb</p>
                    </div>
                </div>
            </Grid>
        </Grid>

    </div>
)


export default FeatureBlock
