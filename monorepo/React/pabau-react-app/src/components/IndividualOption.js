import {useContext} from "react";
import Context from "../utils/Context";
import {useNavigate} from "react-router-dom";

export default function IndividualOption(props) {

    const {update} = useContext(Context);
    const navigate = useNavigate();

    return (
        <button className={"btn-class"} onClick={() => {
            update({text: props.text, step: 2});
            navigate("/option")
        }}>
            <div className={"individualOption-div"}>
                <img src={props.img} alt="option-image"/>
                <div className={"text-div"}>
                    <p>{props.text}</p>
                </div>
                <p>></p>
            </div>
        </button>
    );
}
