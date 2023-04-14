import Layout from "./Layout"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

export default function Calendario(props) {
    return (
        <Stack sx={{
            //BISOGNA METTERE LA CARD WIDTH con le props
        }}>
            <Paper elevation={10}
                sx={{
                    width: "250px",
                    margin: 6,
                    borderRadius: 3,
                    height: "auto"
                }}>
                <Paper elevation={3}
                    sx={{
                        width: "auto",
                        margin: 1,
                        display: "inline"
                    }}>
                    <Typography variant="h6">
                        <center>
                            {props.data}
                        </center>

                    </Typography>
                </Paper>

                <Paper elevation={3}
                    sx={{
                        width: "auto",
                        height: "auto",
                        borderRadius: 2,
                        margin: 1,
                        display: "inline"
                    }}>
                    <Typography variant="h6" sx={{ backgroundColor: "rgba(152,251,152)", borderRadius: 2, padding: 1 }}>
                        <Typography variant="subtitle2">
                            Mattina
                        </Typography>
                        {props.mattina}
                    </Typography>
                </Paper>

                <Paper elevation={3}
                    sx={{
                        width: "auto",
                        borderRadius: 2,
                        margin: 1,
                        display: "inline"
                    }}>
                    <Typography variant="h6" sx={{ backgroundColor: "rgba(255,99,71)", borderRadius: 2, padding: 1 }}>
                        <Typography variant="subtitle2">
                            Pomeriggio
                        </Typography>
                        {props.pomeriggio}
                    </Typography>
                </Paper>

                <Paper elevation={3}
                    sx={{
                        width: "auto",
                        borderRadius: 2,
                        margin: 1,
                        display: "inline"
                    }}>
                    <Typography variant="h6" sx={{ backgroundColor: "rgba(176,224,230 dgd j df  ih jr jrj r)", borderRadius: 2, padding: 1 }}>
                        <Typography variant="subtitle2">
                            Sera
                        </Typography>

                        {props.sera}
                    </Typography>
                </Paper>
            </Paper>







        </Stack>

    )
}



