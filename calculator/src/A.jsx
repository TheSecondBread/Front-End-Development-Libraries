import React from "react";
import styles from './Container.module.css';

const buttons = [
    { id: "zero", value: "0" },
    { id: "one", value: "1" },
    { id: "two", value: "2" },
    { id: "three", value: "3" },
    { id: "four", value: "4" },
    { id: "five", value: "5" },
    { id: "six", value: "6" },
    { id: "seven", value: "7" },
    { id: "eight", value: "8" },
    { id: "nine", value: "9" },
    { id: "add", value: "+" },
    { id: "subtract", value: "-" },
    { id: "multiply", value: "*" },
    { id: "divide", value: "/" },
    { id: "decimal", value: "." },
    { id: "equals", value: "=" },
    { id: "clear", value: "AC" },
    { id: "del", value: "del" }
];

function B({ handleButtonClick }) {
    return (
        <div className={styles.Bcontainer}>
            {buttons.map(button => (
                <button key={button.id} id={button.id} className={styles.B} onClick={handleButtonClick}>{button.value}</button>
            ))}
        </div>
    );
}

function Input({ calculation }) {
    return <input id="display" type="text" className={styles.Input} readOnly value={calculation} />;
}

function Container({ children }) {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
}

export { Container, B, Input };
