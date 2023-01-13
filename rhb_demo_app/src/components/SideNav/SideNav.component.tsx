import React, {FC} from 'react';
import "./SideNav.styles.css"
import SideNavWrapper from "./SideNavWrapper.component"


const SideNav: FC = () => {
    
    return (
        <div className="sidenav">
            <aside className="basis-full" >
                <SideNavWrapper>
                </SideNavWrapper>
            </aside>
        </div>

    
    );
}

export default SideNav;

