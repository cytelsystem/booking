import "./Header.scss"
import Logo from "../../shared/Logo/Logo";
import { Context } from"../../core/Context"
import { useContext } from "react";
import HeaderButtons from "./HeaderButtons/HeaderButton";
import {Avatar} from "../Avatar/Avatar"



const Header = () => {

    const userContext = useContext(Context);


    return (
        < header >
            <div className="headerContainer">
                <Logo />
                <div className="headerItems">
                    {userContext.user ? <Avatar /> : <HeaderButtons />}
                </div></div>
        </header>
    )
} 
export default Header;

