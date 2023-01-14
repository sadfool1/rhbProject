import React from 'react';
import {homepageMock} from "../mockData/homepageMock"


const TotalIncome = (): JSX.Element => {

  const totalIncomeText = "Total Income"
  const totalOutgoingText = "Total Outgoing"
  const data = homepageMock


  return (
    <div>

      <div className="row-span-1">
        {totalIncomeText}
      <div className="row-span-1">

      <span>{data.totalIncome}</span>
      </div>

      </div>
      <div className="row-span-1">
      {totalOutgoingText}
      <div className="row-span-1">

      <span>{data.totalOutgoing}</span>
      </div>

      </div>


    </div>
  )
}

export default TotalIncome;
