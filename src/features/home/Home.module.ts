import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:1180px;
    margin: 0 auto;
`

export const Wrapper = styled.div`
        height: 50px;
        width:100%;
        text-align:center;
`

export const MenuNavLink = styled(NavLink)`
     text-decoration:none;
     font-size: 18px;
     color: black;
     margin-left:20px;
     &:hover {
            color:red;
            border-bottom: 1px solid red;
        }
    
    &.active {
        color:red;
        border-bottom: 1px solid red;
    };
`