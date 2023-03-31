import React, {ChangeEvent, KeyboardEvent} from 'react';
type PropsType={
    title:string,
    callBack:(e:ChangeEvent<HTMLInputElement>)=>void
    onKeyDown:(e: KeyboardEvent<HTMLInputElement>)=>void
}
const Input = (props:PropsType) => {
    return (
        <input value={props.title} type="text" onChange={props.callBack} onKeyDown={props.onKeyDown}/>
    );
};

export default Input;