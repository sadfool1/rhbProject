import React, { FC, Fragment } from 'react';
import "./HomePage.styles.css"
import HeaderGreetings from "./Header"
import TotalIncome from "./TotalIncome.component"
import Balances from './Balances.component';

interface HomePageFetchDataProps {
}

const HomePage: FC<HomePageFetchDataProps> = (props) => {

    return (
        <Fragment>
            <div className="homepage">
                <div className='grid grid-rows-2 flex overflow-y-hidden '>
                    <HeaderGreetings />
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-0 fullFont ">
                    <TotalIncome />
                    <Balances />
                </div>
            </div>
        </Fragment>
    );
}

export default HomePage;
