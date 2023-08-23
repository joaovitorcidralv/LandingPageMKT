import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Link from "next/link";
import Styles from "./header.module.scss";


const Header = () => {
    return (
    <div className={Styles.container}>
        <div className={Styles.logotipo}>
            <Image src={Logo} alt="Logo"/>
        </div>
        <div className={Styles.menu}>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>O que fazemos</Link>
            <Link href={"/"}>Sobre</Link>
        </div>
        <div className={Styles.action}>
            <button className={Styles.button}>Fale Conosco</button>
        </div>
    </div>
    );
}

export default Header;
