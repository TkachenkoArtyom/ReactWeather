import React from "react";
import style from "./Header.module.sass";

const Header = () => {
    return (
        <header className={style.header}>
            <p>Прогноз погоды</p>
        </header>
    )
};

export default Header;