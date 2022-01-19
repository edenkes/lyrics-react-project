import * as React from "react";
import {useEffect, useState} from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Paper} from "@mui/material";
import SongCard from "./SongCard";
import {useParams} from "react-router-dom";

export default function LyricsView() {
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

    // const lyrics = {
    //     "songName": "Aerials",
    //     "songLyric": "Life is a waterfall\nWe're one in the river,\nand one again after the fall\nSwimming through the void\nwe hear the word\nWe lose ourselves but we find it all\nCause we are the ones that want to play\nAlways want to go but you never want to stay\nAnd we are the ones that want to chooseAlways want to play but you never want to loseAerials In the skyWhen you lose small mind you free your lifeLife is a waterfallWe drink from the riverthen we turn around and put up our wallsSwimming through the void we hear the wordWe lose ourselves but we find it allCause we are the ones that want to playAlways want to go but you never want to stayAnd we are the ones that want to chooseAlways want to play but you never want to loseOh!AerialsIn the skyWhen you lose small mind you free your lifeAerialsSo up highWhen you free your eyes eternal prizeAerialsIn the skyWhen you lose small mind you free your lifeAerialsSo up highWhen you free your eyes eternal prize(whispers)"
    // };

    const [songs, setSongs] = useState([]);
    const [lyrics, setLyrics] = useState([]);
    let {artist, song} = useParams();

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
        fetch("https://lyrics-finder1.p.rapidapi.com/" + artist + "/" + song, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "lyrics-finder1.p.rapidapi.com",
                "x-rapidapi-key": "b68c7940d3mshe41d4d504b976ebp113903jsn062aef3610cf"
            }
        })
            .then(response => {
                console.log(response);
                response.json().then((res) => {
                    console.log(res);
                    setLyrics(res[0]);
                }).catch(err => {
                    console.error(err);
                });
            })
            .catch(err => {
                console.error(err);
            });
    }, [artist, song]);

    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
                <Grid direction="column"
                      item xs={3}>
                    {songs.slice(0, 9).map((song) =>
                        <Grid key={song.songName} item sx={{mb: 3}} xs={12} spacing={3}>
                            <SongCard key={song.songName} song={song}/>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={9}>
                    <Paper>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {lyrics.songName}
                            </Typography>
                            <Typography>
                                {lyrics.songLyric}
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>


            </Grid>
        </Container>

    );
}

LyricsView.propTypes = {
    songs: PropTypes.any,
};