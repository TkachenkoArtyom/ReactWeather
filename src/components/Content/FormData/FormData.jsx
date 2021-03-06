import React from "react";
import style from "./FormData.module.sass";

const FormData = (props) => {

    return (
        <div className={style.formDataContent}>
            <p><input type="text" placeholder="Название города.." onChange={props.handleChange}/></p>
            <button onClick={props.getWeatherInfo}>Узнать погоду</button>
        </div>
    )
};

export default FormData;