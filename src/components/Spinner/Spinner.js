import {SpinnerStyle} from "./SpinnerStyle"
import CircularProgress from '@mui/material/CircularProgress';


export const Spinner = () => {
    return (
        <SpinnerStyle >
            <CircularProgress/>
            <span>Loading</span>
        </SpinnerStyle>
    )
}