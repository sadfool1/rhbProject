import React, {useState, FC} from 'react';
import "./HomePage.styles.css"

interface ButtonProps{
    id: string,
    label: string
}
const Button: FC<ButtonProps> = (props) => {

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        
        <div className="genericButton"> 
            <button className="buttonText btn" 
                onClick={buttonHandler}
                id={props.id}
                >{props.label}
            </button>
        </div>

    );
}

export default Button;