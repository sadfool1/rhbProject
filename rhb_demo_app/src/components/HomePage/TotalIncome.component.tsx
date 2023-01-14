import React from 'react';
import { homepageMock } from "../mockData/homepageMock"
import arrowDown from "../../assets/arrowDown.svg"
import arrowUp from "../../assets/arrowUp.svg"


const TotalIncome = (): JSX.Element => {

  const totalIncomeText = "Total Income"
  const totalOutgoingText = "Total Outgoing"
  const data = homepageMock
  const mockPercentage = "1.23 %"

  return (
    <>
      <div className="borderWrapper">
        <div className="row-span-1">
          <div className="grid-cols-3 ">
            <div className="grid-row-2">
              <img src={arrowDown} />
              <img src={arrowUp} />
            </div>
            <div className="grid-row-4">
              <span>{totalIncomeText}</span>
              <span>{data.totalIncome}</span>
              <span>{totalOutgoingText}</span>
              <span>{data.totalOutgoing}</span>
            </div>

          </div>
        </div>
        <div className="col-span-1">
          <h1> {mockPercentage} </h1>
        </div>
      </div>
    </>
  )
}

export default TotalIncome;