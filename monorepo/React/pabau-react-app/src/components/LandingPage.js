import pabauLogo from "../images/pabauLogo.png";
import IndividualOption from "./IndividualOption";
import Header from "./Header";
import Footer from "./Footer";

export default function LandingPage() {

    const optionsArray = [
        {img: pabauLogo, text: "Dermal Fillers", location: "/"},
        {img: pabauLogo, text: "Dermal Fillers", location: "/"},
        {img: pabauLogo, text: "Dermal Fillers", location: "/"},
        {img: pabauLogo, text: "Dermal Fillers", location: "/"},
        {img: pabauLogo, text: "Dermal Fillers", location: "/"},
        {img: pabauLogo, text: "Dermal Fillers", location: "/"}
    ];

    return (
        <>
            <Header text={"Choose Service"} step={1}/>
            <body>
            <div className={"height-container"}>
                <div className={"container"}>
                    <div className={"body-div"}>
                        <div className={"options-div"}>
                            {optionsArray.map(option =>
                                <IndividualOption img={option.img} text={option.text} location={option.location}/>)}
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
            <Footer/>
        </>
    );
}