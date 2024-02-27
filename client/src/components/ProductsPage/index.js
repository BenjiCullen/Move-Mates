import React from 'react';
import ProductList from '../ProductList';
import ServiceMenu from '../ServiceMenu';

const ProductsPage = () => {

    return (
        <div className='home center'>
            <ServiceMenu />
            <ProductList />
        </div>
    );
};

export default ProductsPage;