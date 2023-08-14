import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardsItems from './CardsItems';
import { useQuery } from '@tanstack/react-query';

const Card = () => {
    // const [cards, setCards] = useState([]);

    const url = 'http://localhost:5000/cards'

    const { data: cards = [], isLoading, refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });


    return (
    <div className='my-8 grid gap-4 grid-cols w-2/4 m-auto'>
            {
                cards.map(card=><CardsItems
                key={card._id}
                card = {card}
                refetch={refetch}
                ></CardsItems>)
            }
    </div>
    );
};

export default Card;