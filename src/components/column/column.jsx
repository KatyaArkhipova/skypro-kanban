import React from "react";
import Card from "../card/card";

const Column = () => {
    return (
        <div className="columns-container">
            <div className="main__column">
                <div className="column__title">
                    <p>Без статуса</p>
                    <Card />
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>Нужно сделать</p>
                    <Card />
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>В работе</p>
                    <Card />
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>Тестирование</p>
                    <Card />
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>Готово</p>
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Column;