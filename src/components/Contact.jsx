/* eslint-disable jsx-a11y/anchor-has-content */
import { TextField } from "@mui/material";
import React, { Component } from "react";

const Contact = () => {
    const ContactInput = ({ name, label, type = "text" }) => {
        return (
            <TextField
                // className={classes.input}
                sx={{
                    height: "70px",

                    "& > label": { fontSize: "16px !important", color: "#fff" },
                    "& > div": {
                        "&:hover": {
                            "& > fieldset": {
                                borderColor: "#aaa !important",
                            },
                        },
                    },
                    "& > div > input": {
                        fontSize: "18px !important",
                        color: "#fff",
                    },
                    "& > div > fieldset": {
                        borderColor: "#fff !important",
                    },
                }}
                name={name}
                label={label}
                type={type}
                margin="dense"
                variant="outlined"
                required
            />
        );
    };
    return (
        <section class="contact">
            <div id="contact"></div>
            <div class="contact-text">
                <h1 class="contact-text__title">Contact</h1>
                <p class="contact-text__paragraph">
                    If you'd like to start a new project, need help with an
                    existing project or have any other question, please feel
                    free to reach out to me.
                </p>
            </div>

            <form
                class="contact-form"
                action="https://formspree.io/xjvojgwr"
                method="POST"
            >
                <ContactInput name="name" label="Name" />
                <ContactInput name="email" label="Email" type="email" />
                <ContactInput name="message" label="Message" type="textarea" />
                <button class="contact-form-button" type="submit">
                    Send email
                </button>
            </form>
        </section>
    );
};

export default Contact;
