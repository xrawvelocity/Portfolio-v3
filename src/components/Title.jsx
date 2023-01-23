import React from "react";

const Title = ({ children, color = "#030303" }) => {
    return (
        <h1
            style={{
                margin: "4rem auto",
                width: "100%",
                textAlign: "center",
                color,
            }}
        >
            {children}
        </h1>
    );
};

export default Title;
