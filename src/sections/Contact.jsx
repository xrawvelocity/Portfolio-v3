/* eslint-disable jsx-a11y/anchor-has-content */
import { Button, TextField, Typography } from "@mui/material";
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
                        color: "#030303 !important",
                    },
                    "& > div": {
                        "&:hover": {
                            "& > fieldset": {
                                borderColor: "#333 !important",
                            },
                        },
                    },
                    "& > div > input": {
                        fontSize: "18px !important",
                        color: "#030303",
                    },
                    "& > div > textarea": {
                        fontSize: "18px !important",
                        color: "#030303",
                    },
                    "& > div > fieldset": {
                        borderColor: "#030303 !important",
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
                }}
            >
                <Title>Contact</Title>
                <Typography
                    sx={{
                        fontSize: { xs: "16px", xl: "20px" },
                        lineHeight: "1.5",
                    }}
                >
                    Please feel free to reach&nbsp;out&nbsp;to&nbsp;me.
                </Typography>
            </Flex>

            <form
                class="contact-form"
                action="https://formspree.io/f/mdoqgwej"
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
                {/* <button class="contact-form-button" type="submit">
                    Send email
                </button> */}
                <Button
                    component="button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        marginTop: "2rem",
                        marginBottom: "8rem",
                        fontSize: { xs: "16px", xl: "20px" },
                        color: "#fff !important",
                        background: "#15ceb5",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            background: "#12AD9A !important",
                        },
                    }}
                >
                    Send Email
                </Button>
            </form>
        </section>
    );
};

export default Contact;
