import React from "react";

const Title = ({ children, color = "#FFF" }) => {
    return (
        <h1
            style={{
                margin: "7rem auto",
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
