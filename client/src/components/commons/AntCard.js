import React from 'react'
import { Col, Card } from 'antd';

const { Meta } = Card;
const AntCard = (props) => {

  if (props.landingPage) {
    // [ LandingPage ] 처리 =============================
    return (
      <Col lg={4} md={6} sm={12} xs={24} >
        {/* <a href={`/movie/영화아이디`}> */}
        <a href={`/movie/${props.movieId}`}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={
              <img
                src={props.path}
                alt={props.title}
              />
            }
          >
            <Meta title={props.title} />
          </Card>
        </a>
      </Col>
    )
  } else {
    // [ Detail ] 처리 ==================================
    return (
      <Col lg={4} md={6} sm={12} xs={24} >
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={
            <img
              src={props.path}
              alt={props.name}
            />
          }
        >
          <Meta title={props.name} />
        </Card>
      </Col>
    )
  };
}

export default AntCard