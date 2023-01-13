import { FC } from 'react';
import brandLogo from "../../assets/brandLogo.svg";
import "./SideNav.styles.css";

const Logo: FC = () => {

    return (
        <a href="" className="logoSetting">
            <img src={brandLogo} alt="brand Logo" />
            <span className="budgetQuest">Budget Quest</span>
        </a>
    );
}

export default Logo;