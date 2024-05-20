import React, { useState } from "react";
import { Container, B, Input } from "./A.jsx";

function App() {
    const [calculation, setCalculation] = useState("0");
    const [lastInput, setLastInput] = useState("");

    function handleButtonClick(event) {
        const value = event.target.innerText;

        if (calculation === "Error") setCalculation("0");

        switch (value) {
            case "=":
                try {
                    const result = eval(calculation.replace(/--/g, "+"));
                    setCalculation(String(result));
                } catch (error) {
                    setCalculation("Error");
                }
                break;
            case "AC":
                setCalculation("0");
                break;
            case "del":
                setCalculation((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
                break;
            case ".":
                const lastNumber = calculation.split(/[\+\-\*\/]/).pop();
                if (!lastNumber.includes(".")) {
                    setCalculation((prev) => prev + value);
                }
                break;
            default:
                if (["+","-","*","/"].includes(value)) {
                    if (["+","*","/"].includes(lastInput) && value === "-") {
                        setCalculation((prev) => prev + value);
                    } else if (["+","-","*","/"].includes(lastInput)) {
                        setCalculation((prev) => {
                            if (prev.slice(-1) === "-") {
                                return prev.slice(0, -2) + value;
                            }
                            return prev.slice(0, -1) + value;
                        });
                    } else {
                        setCalculation((prev) => prev + value);
                    }
                } else {
                    setCalculation((prev) => {
                        if (prev === "0" && value === "0") return prev; // Prevent leading zeros
                        if (prev === "0" && !["+", "-", "*", "/"].includes(value)) return value; // Replace leading zero with new number
                        return prev + value;
                    });
                }
                break;
        }
        setLastInput(value);
    }

    return (
        <Container>
            <Input calculation={calculation} />
            <B handleButtonClick={handleButtonClick} />
        </Container>
    );
}

export default App;
