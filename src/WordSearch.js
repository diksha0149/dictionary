import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"
export default function WordSearch(){
    let [keyword,setKeyword]=useState("");
    let[results,setResults]=useState(null);
    function handlereasponse(reasponse){
        setResults(reasponse.data[0]);
    }
    function handlephotoreasponse(reasponse){
        console.log(reasponse);
    }
    function Search(event){
        event.preventDefault();
        let apiurl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiurl).then(handlereasponse);
        let apikey='563492ad6f917000010000019a52fb170ee6445f890467c5e02eb0cf';
        let photoapi=`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        axios.get(photoapi).then(handlereasponse);
    }
    function handlekeywordchange(event){
         setKeyword(event.target.value);
    }
    return(
    <div className="Search">
        <div className="heading">WordBook 📖</div>
        <form onSubmit={Search} >
            <div className="formsearch">
            <input type="search" onChange={handlekeywordchange} className="searchbox"/>
            </div>
        </form>
        <Results results={results}/>
    </div>
    )
}
