import React from 'react'
import styled from 'styled-components'

const Menu = styled.nav `
display: flex;
justify-content: left;
box-sizing: border-box;
nav {
    margin-left: 2rem; // hmmm 
    box-sizing: border-box;
    width:80%;
    display: flex;
    flex-direction: row;
    align-items: left;
    border: 2px solid green;
    margin: 0 auto;
}


nav a {
    border: .1rem solid black;
    text-decoration: none;
    padding: 1rem;
    margin-left: 0;
    margin-right: -.4rem;
    font-size: 1.5rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
}

nav a:hover {
    border: .1rem solid white;
    text-decoration: none;
    padding: 1rem;
    margin-left: 0;
    margin-right: -.4rem;
    font-size: 1.5rem;
    background-color: white;
    color: black;
}

`

export default function(props){
    

    return (
    <Menu>
        <nav>
            <ul>NASA Picture Of The Day: This is a future menu!</ul>
                <li><a href= "#">Item 1</a></li>
                <li><a href= "#">Item 2</a></li>
                <li><a href= "#">Item 3</a></li>
            
        </nav>
    </Menu>
    )
}