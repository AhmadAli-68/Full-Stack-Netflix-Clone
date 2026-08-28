import './Player.css'
import { useEffect, useState } from 'react';
import backArrowIcon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  const { id } = useParams();
  const navigate = useNavigate()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2QzMDBmOWFlMDZmNmY1NDNhNWU0N2E1NTc2NzIxNSIsIm5iZiI6MTc4NzY1NjUzMy43MDQsInN1YiI6IjZhOGQ3OTU1NjJkMDIwY2UxODlmOTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CF0PC4_oDwHBA8ClHGS7uvB84vmrk7sZclntfkYsls8'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
      <img src={backArrowIcon} onClick={() => navigate('/')} alt='Back Arrow Icon' />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder='0' allowFullScreen width='90%' height='90%'></iframe>

      <div className='player-info'>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player