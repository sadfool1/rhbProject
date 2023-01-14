import React from 'react';
import { homepageMock } from "../mockData/homepageMock"


const Balances = (): JSX.Element => {

    const balanceString = "Balances"

    return (
        <>
            <div className="row-span-1">
                <div className="row-span-1">
                    {balanceString}
                </div>
            </div>

        </>
    )
}

export default Balances;