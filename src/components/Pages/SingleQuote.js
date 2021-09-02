import React from 'react'
import { useParams, Route, Link } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import HighlightedQuotes from "../../components/quotes/HighlightedQuote"


const DUMMY_QUOTE = [
    {id:"q1", author:"Adarsh", text:"React sucks! some time it kills" },
    {id:"q2", author:"Akay", text:"I don't know what I want to do ?" },
    {id:"q3", author:"Ram", text:"Honesty is the best policy." }
]



const SingleQuote = () => {
    const params = useParams()
const quote = DUMMY_QUOTE.find((quote) => quote.id===params.quoteId)

if(!quote){
    return <h4>No Quote Found !</h4>
}
    return (
        <div>
            <HighlightedQuotes text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}`} exact>
            <div className="centered">
                <Link className="btn" to ={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
            </div>
            </Route>
            
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </div>
    )
}

export default SingleQuote
