import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
    Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Flex from "./Flex";

const Project = ({
    image,
    title,
    description,
    technologies,
    demo,
    code,
    started,
    updated,
}) => {
    const showTechnologies = () => {
        return technologies.map((each) => {
            return (
                <Grid item xs={6} sx={{ padding: "0 1.5rem" }}>
                    <Flex
                        sx={{
                            alignItems: "center",
                            mt: { xs: "3rem", xl: "2rem" },
                        }}
                    >
                        <Box
                            sx={{
                                height: { xs: "4rem", xl: "3rem" },
                                width: { xs: "4rem", xl: "3rem" },
                                mr: "1.5rem",
                            }}
                        >
                            <img
                                src={each.logo}
                                alt={each.name}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{
                                fontWeight: "600",
                                fontSize: "15px",
                            }}
                        >
                            {each.name}
                        </Typography>
                    </Flex>
                </Grid>
            );
        });
    };

    return (
        <Grid item xs={12} lg={6} xl={6}>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row" },
                    width: "100%",
                    border: "1px solid #030303aa",
                    color: "#030303",
                }}
            >
                <Flex
                    sx={{
                        flexDirection: "column",
                        width: { xs: "100%", xl: "55%" },
                        paddingBottom: "2rem",
                        borderRight: { xs: "none", xl: "1px solid #030303aa" },
                        borderBottom: { xl: "none", xs: "1px solid #030303aa" },
                    }}
                >
                    <CardMedia
                        component="img"
                        height="225"
                        image={image}
                        alt={title}
                        sx={{
                            borderBottom: "1px solid #111",
                            objectPosition: title.includes("Track Trade")
                                ? "left"
                                : "center",
                        }}
                    />
                    <Grid container sx={{ padding: "1rem" }}>
                        {showTechnologies()}
                    </Grid>
                </Flex>
                <CardContent
                    sx={{
                        p: "3rem",
                        width: { xs: "100%", xl: "45%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                    }}
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            sx={{
                                pb: ".5rem",
                                width: "fit-content",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: { xs: "1rem", sm: "0" },
                            }}
                            variant="h4"
                        >
                            {title}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{
                                fontSize: "16px",
                                marginBottom: "3rem",
                            }}
                        >
                            {description}
                        </Typography>
                    </Flex>
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            gutterBottom
                            sx={{ fontSize: "14px", marginBottom: "1rem" }}
                        >
                            <b>Project started on:</b> {started}
                        </Typography>
                        {updated && (
                            <Typography gutterBottom sx={{ fontSize: "14px" }}>
                                <b>Last updated on:</b> {updated}
                            </Typography>
                        )}
                    </Flex>
                    <CardActions
                        sx={{
                            px: "0",
                            pt: { xs: "5rem", xl: "3rem" },
                            justifyContent: {
                                xs: "center",
                                xl: "flex-start",
                            },
                            alignSelf: "center",
                        }}
                    >
                        <Button
                            component="a"
                            href={demo}
                            rel="noreferrer"
                            variant="contained"
                            target="_blank"
                            color="primary"
                            sx={{
                                fontSize: { xs: "12px", xl: "16px" },
                                color: "#fff !important",
                                background: "#15ceb5",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Visit Site
                        </Button>
                        <Button
                            component="a"
                            href={code}
                            rel="noreferrer"
                            target="_blank"
                            color="primary"
                            sx={{
                                fontSize: { xs: "12px", xl: "16px" },
                                ml: "16px !important",
                                color: "#15ceb5 !important",
                                whiteSpace: "nowrap",
                            }}
                        >
                            View Code
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Project;
