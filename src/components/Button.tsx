import React, {ChangeEvent} from 'react';
type PropsType={
    title:string,
    callBack:()=>void
}
const Button = (props:PropsType) => {
    return (
        <button onClick={()=> props.callBack()}>{props.title}</button>
    );
};

export default Button;