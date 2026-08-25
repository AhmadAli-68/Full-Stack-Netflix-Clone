import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useEffect, useRef, useState } from 'react'

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([])
  // const cardsRef = useRef()

  // const handleWheel = (event) => {
  //   event.preventDefault();
  //   cardsRef.current.scrollLeft += event.deltaY
  // }

  // useEffect(() => {
  //   cardsRef.current.addEventListener('wheel', handleWheel)
  // }, [])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2QzMDBmOWFlMDZmNmY1NDNhNWU0N2E1NTc2NzIxNSIsIm5iZiI6MTc4NzY1NjUzMy43MDQsInN1YiI6IjZhOGQ3OTU1NjJkMDIwY2UxODlmOTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CF0PC4_oDwHBA8ClHGS7uvB84vmrk7sZclntfkYsls8'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>

      <div className='card-list'>
        {apiData.map((card, index) => (
          <div className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.original_title} />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards