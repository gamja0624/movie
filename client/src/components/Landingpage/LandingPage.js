import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config'
import MainImage from './Section/MainImage';
import GridCards from '../commons/GridCards';
import { Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import AntCard from '../commons/AntCard';

function LandingPage() {

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0)
  const naviegate = useNavigate();

  function fecthMovies(page) {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        console.log('[ response ]', response); // ...reponse.results : 객체 20개가 들어오게 된다. 
        console.log('[ response.result ]', response.results); // ...reponse.results : 객체 20개가 들어오게 된다. 
        console.log('[ Movies ]', Movies)
        setMovies([...Movies, ...response.results]);
        // setMovies([...Movies, response.results]); 
        // -> reponse.results도 배열이기 때문에 배열안에 배열이 들어온 형태가 됨
        setMainMovieImage(response.results[0]);
        setCurrentPage(response.page);
      });
  }

  useEffect(() => {
    const page = 1;
    fecthMovies(page);

  }, []);

  const loadMoreItems = () => {
    console.log('더보기 버튼 클릭')
    fecthMovies(CurrentPage + 1);
    // fecthMovies(CurrentPage+1);
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        {/* Main Image */}
        {MainMovieImage &&
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            overview={MainMovieImage.overview}
          />
        }


        {/* 다음 페이지 이동 버튼 */}
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button onClick={() => naviegate(+1)}> 다음 ▶ </Button>
        </div>

        <div style={{ width: '85%', margin: '1rem auto' }}>
          <h2 style={{ display: 'inline-block' }}>새로 나온 영화</h2>
          <hr />

          {/* Movie Grid Card */}
          <Row gutter={[10, 10]}>
            {Movies.map(movie => {
              return (
                <React.Fragment key={movie.id}>
                  <AntCard
                    landingPage
                    path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
                    title={movie.title}
                    movieId={movie.id}
                  />
                </React.Fragment>
              )
            })}
          </Row>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <Button onClick={loadMoreItems}> 더보기 </Button>
        </div>
      </div>
    </>
  )


}

export default LandingPage;