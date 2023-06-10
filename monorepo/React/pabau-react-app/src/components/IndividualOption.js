export default function IndividualOption(props) {
    return (
        <div className={"individualOption-div"}>
            <img src={props.img} alt=""/>
            <div className={"text-div"}>
                <p>{props.text}</p>
            </div>
            <p><a href={props.location}>></a></p>
        </div>
    );
}
