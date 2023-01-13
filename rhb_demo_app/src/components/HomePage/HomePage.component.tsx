import React, { FC, Fragment } from 'react';
import "./HomePage.styles.css"
import HeaderGreetings from "./Header"

interface HomePageFetchDataProps {
}

const HomePage: FC<HomePageFetchDataProps> = (props) => {

    return (
    <Fragment> 
        <div className="homepage">
            <div className="grid grid-cols-3 flex ">
                <div className='grid grid-rows-3 flex overflow-y-hidden '>
                    <HeaderGreetings />
                </div>
                <div className="grid col-span-1 grid-rows-3 flex overflow-y-hidden">
                </div>
                <div className="grid col-span-1 grid-rows-3 flex overflow-y-hidden">
                </div>

            </div>
            <div className="grid grid-cols-6 grid-rows-6 gap-0 ">
            </div>
        </div>
    </Fragment>
    );
}

export default HomePage;