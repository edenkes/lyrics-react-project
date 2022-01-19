import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Title from "./dashboard/Title";
import {Link} from "react-router-dom";

export default function Shop() {
    const [items, setItems] = useState([]);
    useEffect(async () => {
        const data = await fetch("https://fortniteapi.io/v2/items/upcoming?lang=en",
            {
                headers: {
                    "Authorization": "c7e9cc97-efd708da-e8782f2e-895ea5a8"
                }
            });


        const itemsFromData = await data.json();
        console.log(itemsFromData.items);
        setItems(itemsFromData.items);
    }, []);
    return (<div>
        <h1>Shop</h1>
        {
            items.map(item=><ItemButton key={item.id} item={item}/>)
        }

    </div>);
}

const ItemButton = ({item}) =>{
    return (<div>
        <Link to={"/shop/"+ item.id}>
            <h3>{item.name}</h3>
        </Link>
    </div>);
};

ItemButton.propTypes = {
    item: PropTypes.any,
};