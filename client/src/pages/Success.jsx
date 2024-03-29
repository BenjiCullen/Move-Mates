import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map(item => item._id);

            if (products.length) {
                const { data } = await addOrder({ variables: { products } });
                const productsData = data.addOrder.products;

                productsData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }
            setTimeout(() => {
                window.location.assign('/');
            }, 3000);
        }
        saveOrder();
    }, [addOrder]);

    return (
        <div>
            <h1>Success!</h1>
            <h2>
                You will have you Move Mate helping you within a few days 
            </h2>
            <h2>
                You will now be redirected to the homepage
            </h2>
        </div>
    )
};

export default Success;