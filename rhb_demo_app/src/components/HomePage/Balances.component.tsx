import React from 'react';
import { homepageMock } from "../mockData/homepageMock"



const Balances = (): JSX.Element => {

    const balanceString = "Balances"

    return (
        <>
            <div className="borderWrapper fontcolor">
            <div className="grid-row-2 ">
                <div className="row-span-1">
                    {balanceString}
                </div>
                <div className="row-span-1  balancesNumber">{homepageMock.balances}</div>
            </div>
            </div>
        </>
    )
}

export default Balances;