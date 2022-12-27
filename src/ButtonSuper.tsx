

type ButtonSuperTypeProps={
    title:string
    callback:()=>void
    disabled:boolean
}

export const ButtonSuper =(props:ButtonSuperTypeProps)=>{
    const onClickHandler=()=>{
        props.callback()
    }
    return(
        <button onClick={onClickHandler} disabled={props.disabled}>{props.title}</button>
    )
}