import React from 'react'
import QuoteList from '../quotes/QuoteList'

const DUMMY_QUOTE = [
    {id:"q1", author:"Adarsh", text:"React sucks! some time it kills" },
    {id:"q2", author:"Akay", text:"I don't know what I want to do ?" },
    {id:"q3", author:"Ram", text:"Honesty is the best policy." }
]

const AllQuotes = () => {
    return (
        <>
       <QuoteList quotes={DUMMY_QUOTE}/>
        </>
    )
}

export default AllQuotes
