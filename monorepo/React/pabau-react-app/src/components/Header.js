export default function Header(props){
    return(
        <header>
            <div className={"header-div"}>
                <p style={{"font-weight": "bolder"}}>{props.text}</p>
            </div>
            <div className={"header-div"}>
                <p style={{"color": "grey"}}>Step {props.step}/2</p>
            </div>
        </header>
    );
}