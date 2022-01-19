import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function ArtistCard({artist}) {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardContent>
                <Link to={artist.url}>
                    <Typography gutterBottom variant="h5" component="div">
                        {artist.artistName}
                    </Typography>
                </Link>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}


ArtistCard.propTypes = {
    artist: PropTypes.any,
};