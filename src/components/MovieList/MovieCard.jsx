import React from "react";
import './MovieCard.css';
import Star from '../../assets/star.png'

const MovieCard =() => {
  return (

    <a href="" className="movie_card">
    <img src="/src/assets/Tron.jpg" alt=" " className="movie_poster"/>
  
     <div className="movie_details">
     <h3 className="movie_details_heading">Movie Name </h3>
     <div className="align_center movie_data_rate">
     <p>10-20-2025</p>
     <p>8.0 <img src={Star} alt="rating icon" className="card_emoji"/></p>
     </div>

     <p className="movie_description">
  this movie is on the basis of racing and some future timeline movie represanting that time of the racing culture and story of a specfic personality of thata time showing somethign that is important to understand in life and future to be remeber
     </p>
     </div>


    </a>
  )
}

export default MovieCard;