import Styles from "./button.module.scss";

/*
props

title: String
kind: "primary" | "secondary | full "
*/

const Button = ({ title, kind , onClick}) => {
    const generationClassByKind = ()=> {
        if(kind === "secundary") return Styles.secundary;
        if(kind === "full") return Styles.full;

        return Styles.primary;
    }

    return (
        <button
            className={`${Styles.button} ${generationClassByKind()}`}
            onClick={() => onClick()}
        >
            {title}
        </button>
    );
};

export default Button;