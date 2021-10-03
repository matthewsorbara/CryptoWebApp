import React from 'react';
import './CryptoWebApp.css'


import BTCPrice from './PriceCalculators/BTCprice';
import ETHPrice from './PriceCalculators/ETHprice';
import XRPPrice from './PriceCalculators/XRPprice';
import Navigation from './site/nav';


export default class CryptoWebApp extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <BTCPrice></BTCPrice>
                <ETHPrice></ETHPrice>
                <XRPPrice></XRPPrice>

            </div>
        )
    }
}