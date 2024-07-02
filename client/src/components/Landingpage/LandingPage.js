import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';
import MainImage from "./Section/MainImage";
import { Button, Row } from "antd";
import { useNavigate } from "react-router-dom";
import AntCard from "../commons/AntCard";
import axios from 'axios';

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  function fetchMovies(page) {
    const endPoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    axios.get(endPoint)
      .then(response => {
        console.log("axios", response)
        const endPointData = response.data;
        setMainMovieImage(endPointData.results[0]);
        setCurrentPage(endPointData.page);
        setMovies([...Movies, ...endPointData.results]);
      });

  }

  useEffect(() => {
    const page = 1;
    fetchMovies(page);
  }, []);

  const loadMoreItems = () => {
    fetchMovies(CurrentPage + 1);
  };

  return (
    <>
      <div>
      </div>
      <div style={{ width: '100%' }}>
        {
          MainMovieImage &&
          <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
            title={MainMovieImage.title}
            overview={MainMovieImage.overview}
          />
        }
        <div style={{ width: '85%', margin: '1rem auto' }}>
          <h2>새로나온 영화</h2>
          <div style={{ float: 'right', marginTop: '-45px' }}>
            <Button onClick={() => navigate(1)}>다음</Button>
          </div>
          <hr />
          {/* Movie Grid Card */}
          <Row gutter={[10, 10]}>
            {
              Movies.map(movie => {
                return (
                  <React.Fragment key={movie.id}>
                    <AntCard landingPage
                      path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
                      title={movie.title}
                      id={movie.id}
                    />
                  </React.Fragment>
                );
              })
            }
          </Row>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button onClick={loadMoreItems}> 더보기</button>
      </div>
    </>
  );
}

export default LandingPage;