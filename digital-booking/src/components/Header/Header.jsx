import "./Header.scss"
import Logo from "../../shared/Logo/Logo";
import Button from "../../shared/Button/Button";
import Avatar from "../Avatar/Avatar"


const Header = () => {

    return (
        <header>
            <div className="headerContainer">
                <Logo />
                <div className="headerItems">
                    <Button classList={'db-button-primary-outlined'}>Crear cuenta</Button>
                    <Button classList={'db-button-primary-outlined'}>Iniciar sesión</Button>
                </div>
            </div>
        </header>
    )
};

export default Header;

