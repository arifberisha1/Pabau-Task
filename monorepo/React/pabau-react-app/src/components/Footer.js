import pabauLogo from "../images/pabauLogo.png";

export default function Footer(){
    return(
        <footer>
            Powered By <img src={pabauLogo} alt="pabau-logo"/> Pabau
        </footer>
    );
}