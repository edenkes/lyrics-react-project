import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {Link} from "react-router-dom";

export default function SongCard({song}) {
    const theme = useTheme();

    return (
        <Card sx={{display: "flex"}}>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <CardContent sx={{flex: "1 0 auto"}}>
                    <Typography component="div" variant="h5">
                        {song.songName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {song.singer}
                    </Typography>
                </CardContent>
                <Box sx={{display: "flex", alignItems: "center", pl: 1, pb: 1}}>
                    <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? <SkipNextIcon/> : <SkipPreviousIcon/>}
                    </IconButton>
                    <Link to={"/artists" + song.uri || "/"}>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{height: 38, width: 38}}/>
                        </IconButton>
                    </Link>
                    <IconButton aria-label="next">
                        {theme.direction === "rtl" ? <SkipPreviousIcon/> : <SkipNextIcon/>}
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}


SongCard.propTypes = {
    song: PropTypes.any,
};