import AntiWrinkleTreatment from "../images/AntiWrinkleTreatment.png"
import DermalFillers from "../images/DermalFillers.jpg"
import SecretRF from "../images/secretRF.png"
import HArmonyCA from "../images/HArmonyCA.jpg"
import Profhilo from "../images/Profhilo.png"
import Facials from "../images/Facials.jpg"
import IndividualOption from "./IndividualOption";
import Header from "./Header";
import {useContext, useEffect} from "react";
import Context from "../utils/Context";

export default function LandingPage() {

    const optionsArray = [
        {img: AntiWrinkleTreatment, text: "Anti Wrinkle Treatment"},
        {img: DermalFillers, text: "Dermal Fillers"},
        {img: SecretRF, text: "Secret RF"},
        {img: HArmonyCA, text: "HArmonyCA"},
        {img: Profhilo, text: "Profhilo"},
        {img: Facials, text: "Facials"}
    ];

    const {text, step, update} = useContext(Context);

    useEffect(()=>{
        update({text: "Choose Service", step: 1});
    }, []);

    return (
        <>
            <Header text={text} step={step}/>
            <body>
            <div className={"height-container"}>
                <div className={"container"}>
                    <div className={"body-div"}>
                        <div className={"options-div"}>
                            {optionsArray.map(option =>
                                <IndividualOption img={option.img} text={option.text}/>)}
                        </div>
                    </div>
                </div>

                <div className={"container-2"}>
                    <div className={"body-div-2"}>
                        <p>Not sure about consultation type? Please, call <a className={"phone-number"}
                                                                             href="tel:02037959063">0203 7959063</a></p>
                    </div>
                </div>
            </div>
            </body>
        </>
    );
}