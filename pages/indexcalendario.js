import Calendario from "@/components/calendar"
import { Typography } from "@mui/material"


export default function Home(){
    return(
        <Calendario 
        data="giovedì 24"
        mattina="Attività"
        pomeriggio="Attività"
        sera="Attività"
        />
        
    )
}