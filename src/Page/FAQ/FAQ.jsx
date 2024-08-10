import { useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

export default function FAQ() {
    const theme = useTheme();
    return (
        <Stack direction={"column"} gap={1}>
            <Accordion sx={{ padding: "10px  12px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography
                        sx={{
                            fontSize: "15px",

                            textTransform: "capitalize",
                            wordSpacing: "1px",
                            letterSpacing: "2px",
                            // @ts-ignore
                            color: theme.palette.primary,
                        }}
                    >
                        Default transition using Collapse
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{
                            fontSize: "14px",

                            color:
                                theme.palette.mode === "dark"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[700],

                            letterSpacing: "1px",
                            lineHeight: "26px",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ padding: "10px  12px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography
                        sx={{
                            fontSize: "15px",

                            textTransform: "capitalize",
                            wordSpacing: "1px",
                            letterSpacing: "2px",
                            // @ts-ignore
                            color: theme.palette.primary,
                        }}
                    >
                        Default transition using Collapse
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{
                            fontSize: "14px",

                            color:
                                theme.palette.mode === "dark"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[700],

                            letterSpacing: "1px",
                            lineHeight: "26px",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ padding: "10px  12px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography
                        sx={{
                            fontSize: "15px",

                            textTransform: "capitalize",
                            wordSpacing: "1px",
                            letterSpacing: "2px",
                            // @ts-ignore
                            color: theme.palette.primary,
                        }}
                    >
                        Default transition using Collapse
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{
                            fontSize: "14px",

                            color:
                                theme.palette.mode === "dark"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[700],

                            letterSpacing: "1px",
                            lineHeight: "26px",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ padding: "10px  12px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <Typography
                        sx={{
                            fontSize: "15px",

                            textTransform: "capitalize",
                            wordSpacing: "1px",
                            letterSpacing: "2px",
                            // @ts-ignore
                            color: theme.palette.primary,
                        }}
                    >
                        Default transition using Collapse
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{
                            fontSize: "14px",

                            color:
                                theme.palette.mode === "dark"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[700],

                            letterSpacing: "1px",
                            lineHeight: "26px",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
}
