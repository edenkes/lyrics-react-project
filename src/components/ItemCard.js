import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Title from "./dashboard/Title";
import {Link, useNavigate, useParams} from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function ItemCard(props) {
    const [item, setItem] = useState({images: {}});
    let {id} = useParams();

    useEffect(async () => {
        const data = await fetch("https://fortniteapi.io/v2/items/get?id=" + id + "&lang=en",
            {
                headers: {
                    "Authorization": "c7e9cc97-efd708da-e8782f2e-895ea5a8"
                }
            });


        const itemFromData = await data.json();
        console.log(itemFromData.item);
        console.log(id);

        setItem(itemFromData.item);
    }, []);
    // return (<div>
    //     {item &&
    //         <div>
    //             <h1>{item.name}</h1>
    //             <img src={item.images.background} alt=""/>
    //         </div>
    //     }
    // </div>);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"

                image={item.images.background}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );

}

ItemCard.propTypes = {
    match: PropTypes.any,
};