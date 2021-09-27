import React, {useEffect} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {removeFromFavourite} from './FavouriteListSlice'
import {resetList} from '../listOfBeer/ListOfBeerSlice'
import {RootStateOrAny, useSelector} from "react-redux";
import {Beer} from "../../interfaces/IListOfBeer";
import {BeerContainer, BeerList} from "../listOfBeer/ListOfBeer.module";
export const FavouriteList = () => {
    const dispatch = useAppDispatch()
    const favouriteList = useSelector((state: RootStateOrAny) => state.favourite.favouriteList);

    const removeBeerFromFavourite = (id:number) => {
        dispatch(removeFromFavourite(id))
    }

    useEffect(()=> {
        dispatch(resetList())
    },[])

    return (
        <BeerList>
            {favouriteList.map((item:Beer)=> (
                <BeerContainer key={item.id}>
                    <img className="" src={item.image_url} alt={item.name}/>
                    <p>{item.name}</p>
                    <p>{item.first_brewed}</p>
                    <div>
                        <button onClick={()=>removeBeerFromFavourite(+item.id)}>Remove from favourite</button>
                    </div>
                </BeerContainer>
            ))}
        </BeerList>
    );
};