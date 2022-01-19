import * as React from "react";
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UseInput from "../CustomInput";
import ArtistCard from "./ArtistCard";

export default function ArtistGrid() {
    const obj = [
        {
            "artistName": "Guns N' Roses",
            "url": "/artists/guns-n-roses/"
        },
        {
            "artistName": "Gusttavo Lima",
            "url": "/artists/gusttavo-lima/"
        },
        {
            "artistName": "George Michael",
            "url": "/artists/george-michael/"
        },
        {
            "artistName": "Gal Costa",
            "url": "/artists/gal-costa/"
        },
        {
            "artistName": "Gavin James",
            "url": "/artists/gavin-james/"
        },
        {
            "artistName": "Gloria Gaynor",
            "url": "/artists/gloria-gaynor/"
        },
        {
            "artistName": "Green Day",
            "url": "/artists/green-day/"
        },
        {
            "artistName": "Gilberto Gil",
            "url": "/artists/gilberto-gil/"
        },
        {
            "artistName": "Gerson Rufino",
            "url": "/artists/gerson-rufino/"
        },
        {
            "artistName": "Gabriela Rocha",
            "url": "/artists/gabriela-rocha/"
        },
        {
            "artistName": "George Harrison",
            "url": "/artists/george-harrison/"
        },
        {
            "artistName": "Grupo Revelação",
            "url": "/artists/grupo-revelacao/"
        },
        {
            "artistName": "Gonzaguinha",
            "url": "/artists/gonzaguinha/"
        },
        {
            "artistName": "Gian & Giovani",
            "url": "/artists/gian-e-giovani/"
        },
        {
            "artistName": "GAYLE",
            "url": "/artists/gayle/"
        },
        {
            "artistName": "Goo Goo Dolls",
            "url": "/artists/goo-goo-dolls/"
        },
        {
            "artistName": "Galinha Pintadinha",
            "url": "/artists/galinha-pintadinha/"
        },
        {
            "artistName": "Glee",
            "url": "/artists/glee/"
        },
        {
            "artistName": "Guardiões Da Galáxia (Trilha Sonora)",
            "url": "/artists/guardioes-da-galaxia-trilha-sonora/"
        },
        {
            "artistName": "Gorillaz",
            "url": "/artists/gorillaz/"
        },
        {
            "artistName": "Gotye",
            "url": "/artists/gotye/"
        },
        {
            "artistName": "Giveon",
            "url": "/artists/giveon/"
        },
        {
            "artistName": "The Greatest Showman - O Rei do Show",
            "url": "/artists/the-greatest-showman-o-rei-do-show/"
        },
        {
            "artistName": "Gloria Groove",
            "url": "/artists/gloria-groove/"
        },
        {
            "artistName": "Gillette",
            "url": "/artists/gillette/"
        },
        {
            "artistName": "Gnash",
            "url": "/artists/gnash/"
        },
        {
            "artistName": "Gabriel O Pensador",
            "url": "/artists/gabriel-pensador/"
        },
        {
            "artistName": "Genesis",
            "url": "/artists/genesis/"
        },
        {
            "artistName": "Gustavo Mioto",
            "url": "/artists/gustavo-mioto/"
        },
        {
            "artistName": "Gabrielle Aplin",
            "url": "/artists/gabrielle-aplin/"
        },
        {
            "artistName": "Gabily",
            "url": "/artists/gabily/"
        },
        {
            "artistName": "Grimes",
            "url": "/artists/grimes/"
        },
        {
            "artistName": "Gigi D'Agostino",
            "url": "/artists/gigi-dagostino/"
        },
        {
            "artistName": "G-Eazy",
            "url": "/artists/g-eazy/"
        },
        {
            "artistName": "Gino & Geno",
            "url": "/artists/gino-e-geno/"
        },
        {
            "artistName": "Guilherme e Santiago",
            "url": "/artists/guilherme-e-santiago/"
        },
        {
            "artistName": "Gwen Stefani",
            "url": "/artists/gwen-stefani/"
        },
        {
            "artistName": "Gabriel Guedes",
            "url": "/artists/gabriel-guedes/"
        },
        {
            "artistName": "Gnarls Barkley",
            "url": "/artists/gnarls-barkley/"
        },
        {
            "artistName": "Guilherme Arantes",
            "url": "/artists/guilherme-arantes/"
        },
        {
            "artistName": "Gabriela Gomes",
            "url": "/artists/gabriela-gomes/"
        },
        {
            "artistName": "George Ezra",
            "url": "/artists/george-ezra/"
        },
        {
            "artistName": "Grupo Menos é Mais",
            "url": "/artists/grupo-menos-e-mais/"
        },
        {
            "artistName": "Gym Class Heroes",
            "url": "/artists/gym-class-heroes/"
        },
        {
            "artistName": "Glass Animals",
            "url": "/artists/glass-animals/"
        },
        {
            "artistName": "Ghost",
            "url": "/artists/ghost/"
        },
        {
            "artistName": "Grupo Tá Na Mente",
            "url": "/artists/grupo-ta-na-mente/"
        },
        {
            "artistName": "Gilberto e Gilmar",
            "url": "/artists/gilberto-e-gilmar/"
        },
        {
            "artistName": "Geraldo Azevedo",
            "url": "/artists/geraldo-azevedo/"
        },
        {
            "artistName": "Grease",
            "url": "/artists/grease/"
        },
        {
            "artistName": "Gloria Estefan",
            "url": "/artists/gloria-estefan/"
        },
        {
            "artistName": "Greta Van Fleet",
            "url": "/artists/greta-van-fleet/"
        },
        {
            "artistName": "Gary Barlow",
            "url": "/artists/gary-barlow/"
        },
        {
            "artistName": "Girl In Red",
            "url": "/artists/girl-in-red/"
        },
        {
            "artistName": "Grupo Doce Encontro",
            "url": "/artists/grupo-doce-encontro/"
        },
        {
            "artistName": "Gaúcho da Fronteira",
            "url": "/artists/gaucho-da-fronteira/"
        },
        {
            "artistName": "Gilbert O'Sullivan",
            "url": "/artists/gilbert-osullivan/"
        },
        {
            "artistName": "Grace VanderWaal",
            "url": "/artists/grace-vanderwaal/"
        },
        {
            "artistName": "Gilsons",
            "url": "/artists/gilsons/"
        },
        {
            "artistName": "Gigliola Cinquetti",
            "url": "/artists/gigliola-cinquetti/"
        },
        {
            "artistName": "Giulia Be",
            "url": "/artists/giulia-be/"
        },
        {
            "artistName": "Grupo Disfarce",
            "url": "/artists/grupo-disfarce/"
        },
        {
            "artistName": "Galantis",
            "url": "/artists/galantis/"
        },
        {
            "artistName": "G.R.E.S. Acadêmicos do Grande Rio",
            "url": "/artists/g-r-e-s-academicos-do-grande-rio/"
        },
        {
            "artistName": "Gr6 Explode",
            "url": "/artists/gr6-explode/"
        },
        {
            "artistName": "G.R.E.S. Gaviões da Fiel",
            "url": "/artists/g-r-e-s-gavioes-da-fiel/"
        },
        {
            "artistName": "Gavin DeGraw",
            "url": "/artists/gavin-degraw/"
        },
        {
            "artistName": "Gabriel Sater",
            "url": "/artists/gabriel-sater/"
        },
        {
            "artistName": "Grace Rodriguez",
            "url": "/artists/grace-rodriguez/"
        },
        {
            "artistName": "Gretchen",
            "url": "/artists/gretchen/"
        },
        {
            "artistName": "G.R.E.S. Portela",
            "url": "/artists/g-r-e-s-portela/"
        },
        {
            "artistName": "Gaab",
            "url": "/artists/gaab/"
        },
        {
            "artistName": "Garth Brooks",
            "url": "/artists/garth-brooks/"
        },
        {
            "artistName": "G.R.E.S. Acadêmicos do Salgueiro",
            "url": "/artists/g-r-e-s-academicos-do-salgueiro/"
        },
        {
            "artistName": "Garbage",
            "url": "/artists/garbage/"
        },
        {
            "artistName": "Galo Frito",
            "url": "/artists/galo-frito/"
        },
        {
            "artistName": "Goiano & Paranaense",
            "url": "/artists/goiano-paranaense/"
        },
        {
            "artistName": "Gipsy Kings",
            "url": "/artists/gipsy-kings/"
        },
        {
            "artistName": "Giselli Cristina",
            "url": "/artists/giselli-cristina/"
        },
        {
            "artistName": "Guga Nandes",
            "url": "/artists/guga-nandes/"
        },
        {
            "artistName": "Grover Washington Jr.",
            "url": "/artists/grover-washington-jr/"
        },
        {
            "artistName": "George Benson",
            "url": "/artists/george-benson/"
        },
        {
            "artistName": "Grupo Clareou",
            "url": "/artists/grupo-clareou/"
        },
        {
            "artistName": "Grupo Pra Valer",
            "url": "/artists/grupo-pra-valer/"
        },
        {
            "artistName": "Gabrielle",
            "url": "/artists/gabrielle/"
        },
        {
            "artistName": "Gala",
            "url": "/artists/gala/"
        },
        {
            "artistName": "Grupo Vou Pro Sereno",
            "url": "/artists/grupo-vou-pro-sereno/"
        },
        {
            "artistName": "Geraldo Vandré",
            "url": "/artists/geraldo-vandre/"
        },
        {
            "artistName": "Gildo de Freitas",
            "url": "/artists/gildo-de-freitas/"
        },
        {
            "artistName": "Gisele Nascimento",
            "url": "/artists/gisele-nascimento/"
        },
        {
            "artistName": "Gabi Sampaio",
            "url": "/artists/gabi-sampaio/"
        },
        {
            "artistName": "George Strait",
            "url": "/artists/george-strait/"
        },
        {
            "artistName": "Gamadinho",
            "url": "/artists/gamadinho/"
        },
        {
            "artistName": "Grupo Tradição",
            "url": "/artists/grupo-tradicao/"
        },
        {
            "artistName": "Gary Moore",
            "url": "/artists/gary-moore/"
        },
        {
            "artistName": "Grupo de Louvor Praia da Costa",
            "url": "/artists/grupo-de-louvor-praia-da-costa/"
        },
        {
            "artistName": "Gislaine e Mylena",
            "url": "/artists/gislaine-e-milena/"
        },
        {
            "artistName": "Genival Santos",
            "url": "/artists/genival-santos/"
        },
        {
            "artistName": "Grupo Logos",
            "url": "/artists/grupo-logos/"
        },
        {
            "artistName": "Grupo Fogo No Pé",
            "url": "/artists/grupo-fogo-no-pe/"
        }
    ];
    const [artist, setArtist] = useState("");
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        console.log(artist);
        if (artist) {
            fetch("https://lyrics-finder1.p.rapidapi.com/artists/name/" + artist, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "lyrics-finder1.p.rapidapi.com",
                    "x-rapidapi-key": "b68c7940d3mshe41d4d504b976ebp113903jsn062aef3610cf"
                }
            })
                .then(async response => {
                    console.log(response);
                    if (response.ok) {
                        const itemFromData = await response.json();
                        console.log(itemFromData);
                        setArtists(itemFromData);
                    } else {
                        setArtists([]);
                    }
                })
                .catch(err => {
                    console.error(err);
                    setArtists([]);
                });
        } else {
            setArtists([]);
        }
    }, [artist]);
    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <UseInput value={artist} onChange={(e) => {
                        setArtist(e.target.value);
                    }}/>
                </Grid>

                {artists.slice(0, 9).map((artist) =>
                    <Grid key={artist.artistName} item xs={4}>
                        <ArtistCard artist={artist}/>
                    </Grid>
                )}

            </Grid>
        </Container>
    );
}
