import React, {FC} from 'react';
import "./HomePage.styles.css"
import {homepageMock} from "../mockData/homepageMock"


const HeaderGreetings: FC = () => {

  const data = homepageMock
  const greetingsHeader = `Greetings, ${data.name} ..`
  const updateHeader = "Here is the update from your payment channels, that is really important for you to catch up"

    return (
    <div className="row-span-2 headerGreetings">
        <h1> {greetingsHeader}</h1>
          <div className="row-span-2">
          <span>{updateHeader}</span>
          </div>
    </div>
    );
}

export default HeaderGreetings;
