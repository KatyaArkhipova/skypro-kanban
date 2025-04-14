import React from "react";
import Column from "../column/column";
import Card from "../card/card";


const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <div className="cards__container">
                        <Column>
                            <Card />
                            <Card />
                        </Column>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;