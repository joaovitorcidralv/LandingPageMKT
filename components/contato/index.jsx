import Button from "../button";
import Styles from "./contato.module.scss";
import Input from "../input";
import Select from "../select";


const Contato = () => {
    return (
        <div className={Styles.container}>
        <div className={Styles.texts}>
            <span>ENTRE EM CONTATO</span>
            <h1>Aumente seus resultados com vendas e performance</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={Styles.form}>
            <h1>Fale com um especialista</h1>
            
            <form>
                <Input type="text" placeholder="Nome Completo" required/>
                <Input type="email" placeholder="Email Profissional" required/>
                <Input type="text" placeholder="Celular" required pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"/>
                <Input type="text" placeholder="Site" required/>
                <Select placeholder="Orçamento para Mídia" options={[
                    {label: "Instagram", value: "Instagram"},
                    {label: "Facebook", value: "Facebook"}
                ]}
                required
                />

                <Button title="Enviar" kind="full"/>
            </form>
        </div>
    </div>
    );
};

export default Contato;