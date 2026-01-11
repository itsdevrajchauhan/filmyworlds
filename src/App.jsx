import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import MovieCard from "./components/MovieList/MovieCard";

const App =() =>{
  return(
    <div className ='app'>
   <Navbar/>
    <main> Main Contnet</main>
    <MovieList/>
   

    </div>
  )

};

export default App;