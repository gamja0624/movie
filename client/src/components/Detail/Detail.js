import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from '../Landingpage/Section/MainImage';
import MovieInfo from './MovieInfo';
import { Button, Divider } from 'antd';
import ImageList from './ImageList';

const Detail = () => {

  const naviegate = useNavigate();
  const { movieId } = useParams();

  // [ state ] ==========================================================
  const [Movie, setMovie] = useState({});
  const [Casts, setCasts] = useState([]);
  const [Crew, setCrew] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
  const [MakerToggle, setMakerToggle] = useState(false);

  useEffect(() => {
    console.log('페이지가 로드되면, 실행됩니다.')

    // [ 특정 영화 정보 ] URL ===========================================
    // 'https://api.themoviedb.org/3/movie/11?api_key=API_KEY'
    let endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`;

    // [ 영화 출연진 정보 ] URL =========================================
    // https://api.themoviedb.org/3/movie/movie_id/credits?api_key=API_KEY
    let endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`;


    // [ 특정 영화 정보 요청 ]  영화 아이디로 정보 요청 =================
    fetch(endpointInfo)
      .then(response => response.json())
      .then(response => {
        setMovie(response);
      });

    // [ 영화 출연진 정보 요청 ]
    fetch(endpointCrew)
      .then(response => response.json())
      .then(response => {
        setCasts(response.cast);
        setCrew(response.crew);
      })

  }, []);

  // [ 버튼 핸들러 : 배우 목록 ]
  function toggleActorVeiw() {
    setActorToggle(!ActorToggle)
  }

  // [ 버튼 핸들러 : 제작진 목록 ]
  function toggleMakerView() {
    setMakerToggle(!MakerToggle)
  }

  return (
    <>

      {/* Header */}
      <div>
        {Movie &&
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
            title={Movie.original_title}
            overview={Movie.overview}
          />
        }
      </div>

      {/* 영화 목록 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Button onClick={() => naviegate(-1)}>영화 목록</Button>
      </div>

      {/* Body */}
      <div style={{ width: '85%', margin: '20px auto' }}>
        {/* MovieInfo */}
        <MovieInfo movie={Movie} />
        <br />

        {/*  배우 & 제작진 목록 버튼  */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Button
            type={ActorToggle ? 'primary' : 'dashed'}
            onClick={toggleActorVeiw}
            style={{ margin: '10px' }}
          > 배우 목록 </Button>
          <Button
            type={MakerToggle ? 'primary' : 'dashed'}
            onClick={toggleMakerView}
            style={{ margin: '10px' }}
          > 제작진 목록 </Button>
        </div>

        {/* Actor Grid  */}
        {ActorToggle &&
          <div>
            <Divider style={{ borderColor: '#000' }}>배우 목록</Divider>
            <ImageList
              targets={Casts}
            />
          </div>
        }

        {/* Maker Grid  */}
        {MakerToggle &&
          <div>
            <Divider
              style={{ borderColor: '#000' }}
            >제작진 목록</Divider>
            <ImageList
              targets={Crew}
            />

          </div>
        }

      </div>
    </>
  );
};

export default Detail;