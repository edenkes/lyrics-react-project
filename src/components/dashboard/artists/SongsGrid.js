import * as React from "react";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UseInput from "../CustomInput";
import SongCard from "./SongCard";
import {useParams} from "react-router-dom";

export default function SongsGrid() {
    // const songs = [
    //     {
    //         "singer": "system-of-a-down",
    //         "songName": "Aerials",
    //         "uri": "/system-of-a-down/aerials.html"
    //     },
    //     {
    //         "singer": "system-of-a-down",
    //         "songName": "Attack",
    //         "uri": "/system-of-a-down/attack.html"
    //     },
    //     {
    //         "singer": "system-of-a-down",
    //         "songName": "Atwa",
    //         "uri": "/system-of-a-down/atwa.html"
    //     }
    // ];

    const [songs, setSongs] = useState([]);
    let {artist} = useParams();

    useEffect(() => {
        fetch("https://lyrics-finder1.p.rapidapi.com/artists/" + artist, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "lyrics-finder1.p.rapidapi.com",
                "x-rapidapi-key": "b68c7940d3mshe41d4d504b976ebp113903jsn062aef3610cf"
            }
        })
            .then(response => {
                console.log(response);
                response.json().then((res) => {
                    setSongs(res);
                }).catch(err => {
                    console.error(err);
                });
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <UseInput/>
                </Grid>

                {songs.slice(0, 9).map((song) =>
                    <Grid key={song.songName} item xs={4}>
                        <SongCard song={song}/>
                    </Grid>
                )}

            </Grid>
        </Container>
    );
}

SongsGrid.propTypes = {
    artist: PropTypes.any,
};