import React from "react";
import Calendar from "../Calendar/Calendar";
import Column from "../column/column";
import Card from "../card/card";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <Calendar />
                    <div className="cards__container">
                        <Card />
                        <Card />
                    </div>
                    <Column />
                </div>
            </div>
        </main>
    );
};

export default Main;