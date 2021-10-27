import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from "../ProductCard"

const ContentBlock: React.FC = () => (
    <div>
        <Grid container>
            <Grid item lg={4} md={6} sm={6}  xs={12}>
                <ProductCard img="" category="" title="" price={36.9} bestSeller />
            </Grid>
            <Grid item lg={4} md={6} sm={6}  xs={12}>
                <ProductCard img="" category="" title="" price={36.9} bestSeller />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <ProductCard img="" category="" title="" price={36.9} bestSeller />
            </Grid>
            <Grid item lg={4} md={6} sm={6}  xs={12}>
                <ProductCard img="" category="" title="" price={36.9} bestSeller />
            </Grid>
            <Grid item lg={4} md={6} sm={6}  xs={12}>
                <ProductCard img="" category="" title="" price={36.9} bestSeller />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <ProductCard img="" category="" title="" price={36.9} bestSeller />
            </Grid>
        </Grid>
    </div>
)

export default ContentBlock