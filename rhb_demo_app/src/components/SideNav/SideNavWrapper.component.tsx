import React, { Fragment, FC } from 'react';
import "./SideNav.styles.css"
import Logo from './Logo.component';
import SideNavElement from './SideNavElement.component';
import DashboardIcon from "../../assets/dashboard.svg"
import AnalyticsIcon from "../../assets/analyticsIcon.svg"
import UserProfileBadge from './UserProfileBadge';

import transactionsLogo from "../../assets/transactionsLogo.svg"
import flagIcon from "../../assets/flagIcon.svg"
import budgetIcon from "../../assets/budgetIcon.svg"
import settingIcon from "../../assets/settingIcon.svg"
import leaderboardLogo from "../../assets/leaderboardLogo.svg"
import chatIcon from "../../assets/chatIcon.svg"
const SideNavWrapper: FC = () => {

    return (
        <Fragment>
            <div className="py-16 bg-gray-50 rounded navbarHeight navbarColor overflow-hidden">
                <Logo></Logo>
                <ul className="space-y-4 iconlist">
                    <SideNavElement linkTo ="/home" icon={DashboardIcon} title="Dashboard"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={AnalyticsIcon} title="Analytics"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={transactionsLogo} title="Transactions"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={flagIcon} title="Accounts"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={budgetIcon} title="budget"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={settingIcon} title="settings"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={leaderboardLogo} title="Leaderboards"></SideNavElement>
                    <SideNavElement linkTo ="/snipe" icon={chatIcon} title="Village"></SideNavElement>
                </ul>

                <UserProfileBadge></UserProfileBadge>
            </div>
        </Fragment>

    );
}

export default SideNavWrapper;