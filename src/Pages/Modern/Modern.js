import React from 'react';
import ModernTop from './ModernTop';
import './Modern.css'
import ModernRevenue from './ModernRevenue';
import ModernProducts from './ModernProducts';
import ModernSales from './ModernSales';
import ModernBottom from './ModernBottom';

const Modern = () => {
    return (
        <div>
            <ModernTop />
            <ModernRevenue />
            <ModernProducts />
            <ModernSales />
            <ModernBottom />

            <p className="text-center mb-0"> © 2021 All rights reserved by Wrappixel.com </p>
        </div>
    );
};

export default Modern;