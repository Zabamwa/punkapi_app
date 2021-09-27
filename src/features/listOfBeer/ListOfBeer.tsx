import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {getList} from './ListOfBeerSlice'
import {addToFavourite, removeFromFavourite} from '../favouriteList/FavouriteListSlice'
import {RootStateOrAny, useSelector} from "react-redux";
import {Beer} from "../../interfaces/IListOfBeer";
import {BeerContainer, BeerList} from "./ListOfBeer.module";

export const ListOfBeer = () => {
    const dispatch = useAppDispatch()
    const beerList = useSelector((state: RootStateOrAny) => state.beerList.listOfBeer);
    const favouriteList = useSelector((state: RootStateOrAny) => state.favourite.favouriteList);
    const isLoading = useSelector((state:RootStateOrAny) => state.beerList.isLoading);

    const [page, setPage] = useState(1)
    useEffect(()=> {
        dispatch(getList(page))
    },[dispatch,page])

    const addBeerToFavourite = (id:number,data:Beer) => {
        dispatch(addToFavourite(id,data))
    }

    const removeBeerFromFavourite = (id:number) => {
        dispatch(removeFromFavourite(id))
    }

    const loadMore = () => {
        setPage((prev:number)=>prev+1)
    }

    return (
        <BeerList>
            {isLoading ?
                <p>Loading</p> :
                <>
                    {
                        beerList.map((item: Beer) => (
                            <BeerContainer key={item.id}>
                                <img className="" src={item.image_url} alt={item.name}/>
                                <p>{item.name}</p>
                                <p>{item.first_brewed}</p>
                                <div>
                                    {favouriteList.some((x: Beer) => x.id === item.id) ?
                                        <button onClick={() => removeBeerFromFavourite(+item.id)}>Remove from
                                            favourite</button> :
                                        <button onClick={() => addBeerToFavourite(+item.id, item)}>Add to
                                            favourite</button>
                                    }
                                </div>
                            </BeerContainer>
                        ))
                    }
                    <button onClick={loadMore}>Load more</button>
                </>
            }
        </BeerList>
    );
};