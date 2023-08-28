import styled from 'styled-components'
import React from 'react'

const By = styled.h3`
font-style: italic;
`
const Quote = styled.h2`
    background-color: #bcbcbc;
    border-radius: 3%;
    padding: 2rem;
    max-width: 70%;
    font-style:italic;
` 
const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
`
const Source = styled.a`
    border: 1px solid black;
    padding: 0.5rem;
    background-color: #f3f393;
    color: black;
    &:hover{
        padding: 0.5rem 1rem;
    }
`


function Quotes({ by, source, quote }) {
    return (<>
        <Flex>
        <Quote>"{quote}"</Quote>
        <By>- {by}</By>
        <Source href={source}>Click</Source>
        </Flex>
    </>)
}

export default Quotes