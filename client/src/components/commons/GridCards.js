import React from 'react';
import { Col } from 'antd';

const GridCards = (props) => {

  if (props.landingPage) {
    // [ LandingPage ] 처리 =============================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.title}
            />
          </a>
        </div>
      </Col>
    )
  } else {
    // [ Detail ] 처리 ==================================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <img
            style={{ width: '100%' }}
            src={props.path}
            alt={props.castName}
          />
        </div>
      </Col>
    )
  };
}

export default GridCards