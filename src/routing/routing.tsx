import React from "react";

interface HomeRoute {
    name: string;
    path: string;
}


export const HomeRouting:HomeRoute[] = [
    {
        name: 'Beer List',
        path: '/beer-list',
       
    },
    {
        name: 'Favourite',
        path: '/favourite',
    }
]