import React from 'react';
import './CryptoWebApp.css'


import BTCPrice from './PriceCalculators/BTCprice';
import Navigation from './site/nav';
import PricingBox from './site/ticker-bar';

export default class CryptoWebApp extends React.Component {

    render() {
        return (
            <div>
                <PricingBox></PricingBox>
                <Navigation></Navigation>
            </div>
        )
    }
}