import {useContext} from "react";
import Context from "../utils/Context";
import Header from "./Header";
import {useNavigate} from "react-router-dom";

export default function Option() {

    const {text, step} = useContext(Context);
    const navigate = useNavigate();

    return (
        <>
            <Header text={text} step={step}/>
            <body>
            <div className={"height-container"}>
                <div className={"container"}>
                    <div className={"body-div-option"}>
                        <button onClick={() => {
                            navigate(-1);
                        }}>Back
                        </button>
                    </div>
                </div>
            </div>
            </body>
        </>
    );
}