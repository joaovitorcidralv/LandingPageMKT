import Styles from "./footer.module.scss";
import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Link from "next/link";
import IconInstagram from "/public/images/Icon awesome-instagram.svg";
import IconFacebook from "/public/images/Icon awesome-facebook.svg";
import IconLinkedin from "/public/images/Icon awesome-linkedin.svg";
import IconYoutube from "/public/images/Icon awesome-youtube.svg";

const Footer = () => {
    return(
        <div className={Styles.container}>
            <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
                <Image src={Logo} alt="Logo"/>
                <h1 className={Styles.title}>0800 800 800</h1>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={Styles.column}>
                <h1>MENU</h1>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={Styles.column}>
                <h1>CONTEÚDO</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${Styles.column} ${Styles.alignRight}`}>
                <h1>SOCIAL</h1>
                <div className={Styles.icons}>
                    <Link href="/">
                    <Image src={IconInstagram} alt="Icon" className={Styles.icon}/>
                    </Link>
                    <Link href="/">
                    <Image src={IconFacebook} alt="Icon" className={Styles.icon}/>
                    </Link>
                    <Link href="/">
                    <Image src={IconLinkedin} alt="Icon" className={Styles.icon}/>
                    </Link>
                    <Link href="/">
                    <Image src={IconYoutube} alt="Icon" className={Styles.icon}/>
                    </Link>
                </div>
            </div>
            <div className={Styles.allRightsReserved}>
            ©2022 AGENCIA - Todos os direitos reservados.
            </div>
        </div>
    );
};

export default Footer;