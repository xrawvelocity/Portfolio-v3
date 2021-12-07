/* eslint-disable jsx-a11y/anchor-has-content */
import { TextField, Typography } from "@mui/material";
import React from "react";
import Flex from "../components/Flex";
import Title from "../components/Title";

const Contact = () => {
    const ContactInput = ({
        name,
        multiline = false,
        label,
        type = "text",
    }) => {
        return (
            <TextField
                multiline={multiline}
                rows={multiline ? "6" : "1"}
                sx={{
                    height: "auto",
                    width: "100%",
                    margin: "1.5rem 0",
                    "& > label": {
                        fontSize: "16px !important",
                        color: "#fff !important",
                    },
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
                    "& > div > textarea": {
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
            <Flex
                sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    width: { xs: "100%", md: "45%" },
                    textAlign: "center",
                    marginBottom: "3rem",
                }}
            >
                <Title>Contact</Title>
                <Typography sx={{ fontSize: "3rem", lineHeight: "1.5" }}>
                    If you'd like to start a new project, need help with an
                    existing project or have any other question, please feel
                    free to reach out to me.
                </Typography>
            </Flex>

            <form
                class="contact-form"
                action="https://formspree.io/xjvojgwr"
                method="POST"
            >
                <ContactInput name="name" label="Name" />
                <ContactInput name="email" label="Email" type="email" />
                <ContactInput
                    multiline
                    name="message"
                    label="Message"
                    type="textarea"
                />
                <button class="contact-form-button" type="submit">
                    Send email
                </button>
            </form>
        </section>
    );
};

export default Contact;
