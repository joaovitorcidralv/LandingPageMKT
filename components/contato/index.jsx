import Button from "../button";
import Styles from "./contato.module.scss";
import Input from "../input";
import Select from "../select";
import Link from "next/link";
import axios from "axios";


const Contato = () => {

    const SendMail = () => {
        axios
        .post("/api/sendMail", {messageBody: `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}, Site: ${site}, Midia: ${midia}`})
        .then(() => console.log("Uhuuuu!!"))
        .catch(() => console.log("Opsss! :( "))
    }
    return (
        <div className={Styles.container}>
        <div className={Styles.texts}>
            <span>ENTRE EM CONTATO</span>
            <h1>Aumente seus resultados com vendas e performance</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={Styles.form}>
            <h1>Fale com um especialista</h1>
        
            <Input type="email" placeholder="Email Profissional" required/>
            <Input type="text" placeholder="Nome Completo" required/>
            <Input type="text" placeholder="Celular" required pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"/>
            <Input type="text" placeholder="Site" required/>
            <Select placeholder="Orçamento para Mídia" options={[
                {label: "Instagram", value: "Instagram"},
                {label: "Facebook", value: "Facebook"}
            ]}
            required
        />

        <Button title="Enviar" kind="full" onClick={() => SendMail()} />
            
        </div>
        <div className={Styles.footer}>
            <p>
                Ao enviar esse formulário, você reconhece que leu e concorda com a nossa
                <Link href="/">
                    <span> Política de Privacidade.</span>
                </Link>
            </p>
        </div>
    </div>
    );
};

export default Contato;