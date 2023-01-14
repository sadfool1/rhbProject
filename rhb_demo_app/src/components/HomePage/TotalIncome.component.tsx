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
        <div className="fontcolor">
        <div className="grid grid-rows-2 grid-cols-3 withinBorder">
            <div className="row-span-1">
              <img src={arrowDown} />
              
            </div>
            <div className="col-span-2"> <span>{totalIncomeText}</span>
            <div className="row-span-1"> <span>{data.totalIncome}</span></div>
            </div>

            <div className="row-span-1">
              <img src={arrowUp} />

            </div>
            <div className="col-span-2"> <span>{totalOutgoingText}</span>
            <div className="row-span-1"> <span>{data.totalOutgoing}</span></div>
              </div>
                        
        </div>
      </div>

      <div className="percentageWrapper"><div className="percentage"> <span className="percentageFont">{mockPercentage}</span></div></div>

      </div>
    </>
  )
}

export default TotalIncome;