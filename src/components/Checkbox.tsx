import React, {ChangeEvent, useState} from "react";

type PropsType={
    checked: boolean
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void
}

export function Checkbox(props:PropsType) {
    return (
            <input type="checkbox" checked={props.checked} onChange={props.onChange} />
    );
}
