import React from 'react'
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;
const AntCard = (props) => {

  if (props.landingPage) {
    // [ LandingPage ] 처리 =============================
    return (
      <Col lg={4} md={6} sm={12} xs={24} >
        {/* <a href={`/movie/영화아이디`}> */}
        <Link to={`detail/${props.id}`}>
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
        </Link>
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