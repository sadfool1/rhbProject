import { FC } from 'react';
import brandLogo from "../../assets/brandLogo.svg";
import "./SideNav.styles.css";
import progressBar from "../../assets/progressBar.svg"


const UserProfileBadge: FC = () => {

    return (
        <div className="userProfile grid-rows-4 ">
            <span className="budgetQuest">Ali Riaz</span>
            <p className="userLevel">Level 3</p>
            <img src={progressBar}/>
        </div>
    );
}

export default UserProfileBadge;