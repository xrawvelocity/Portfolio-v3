import { Box } from "@mui/system";
import React from "react";

const Flex = ({ sx, children, ...props }) => {
    return (
        <Box sx={{ display: "flex", ...sx }} {...props}>
            {children}
        </Box>
    );
};

export default Flex;
