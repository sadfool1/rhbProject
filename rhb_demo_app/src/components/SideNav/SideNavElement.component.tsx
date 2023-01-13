import { StringColorFormat } from '@faker-js/faker';
import React, { FC } from 'react';
import "./SideNav.styles.css"

interface SideNavElementProps {
    linkTo: any,
    icon: any,
    title?: string;
}
const SideNavElement: FC<SideNavElementProps> = (props) => {
    return (

        <li className='listAlignment'>
            <a href={props.linkTo} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={props.icon}></img>
                <span>{props.title}</span>
            </a>
        </li>
    );
}

export default SideNavElement;