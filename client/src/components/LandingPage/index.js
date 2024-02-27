import React from 'react';
import ProductList from '../ProductList';
import ServiceMenu from '../ServiceMenu';
import GridList from '../GridList';
import './style.css';

const LandingPage = () => {

    return (
        <div className='home center'>
            <ServiceMenu />
            <GridList />
            <ProductList />
        </div>
    );
};

export default LandingPage;