import styled from "styled-components";

export const BeerList = styled.div`
    margin: 0 auto;
    text-align: center;
`

export const BeerContainer = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background: grey;
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    img {
        max-width:100px;
        width:100%;
        height:100px;
        object-fit: contain;
    }
    
    p {
        margin: 10px 0;
        padding:0;
        font-weight: 600;
    }
    
    button {
        cursor:pointer;
    }
`