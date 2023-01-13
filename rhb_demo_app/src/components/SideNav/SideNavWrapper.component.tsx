import React, { Fragment, FC } from 'react';
import "./SideNav.styles.css"
import Logo from './Logo.component';
import SideNavElement from './SideNavElement.component';
import DashboardIcon from "../../assets/dashboard.svg"
import AnalyticsIcon from "../../assets/analyticsIcon.svg"

const SideNavWrapper: FC = () => {

    return (
        <Fragment>
            <div className="py-16 bg-gray-50 rounded navbarHeight navbarColor overflow-hidden">
                <Logo></Logo>
                <ul className="space-y-4">
                    <SideNavElement linkTo ="/home" icon={DashboardIcon} title="dashboard"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="analytics"></SideNavElement>

                </ul>
            </div>
        </Fragment>

    );
}

export default SideNavWrapper;