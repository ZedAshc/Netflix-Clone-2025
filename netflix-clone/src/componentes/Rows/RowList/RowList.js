import React from 'react'
import './rowlist.css'
import SingleRow from '../SingleRow/SingleRow';
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <>
      <SingleRow 
      title={"NETFLIX ORIGINALS"}
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true} 
      />
      <SingleRow title={"Trending Now"} fetchUrl={requests.fetchTrending}/> 
      <SingleRow title={"Top Rated"} fetchUrl={requests.fetchTopRatedMovies}/>
      <SingleRow title={"Action Movies"} fetchUrl={requests.fetchActionMovies}/>  
      <SingleRow title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies}/>
      <SingleRow title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies}/>
      <SingleRow title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies}/>
      <SingleRow title={"Documentaries"} fetchUrl={requests.fetchDocumentaries}/>
      <SingleRow title={"TV Shows"} fetchUrl={requests.fetchTvShow}/>
    </>
  );
}

export default RowList;
