import React from 'react';
import { Row } from 'antd';
import AntCard from '../commons/AntCard';
import { IMAGE_BASE_URL } from '../Config';


const ImageList = ({ targets }) => {
  return (
    <>
      <Row gutter={[10, 10]}>
        {targets.map((cast, index) => {
          return (
            <React.Fragment key={index}>
              {cast.profile_path &&
                <AntCard
                  path={`${IMAGE_BASE_URL}w400${cast.profile_path}`}
                  name={cast.name}
                  id={cast.id}
                />
              }
            </React.Fragment>
          )
        })}
      </Row>
    </>
  )
}

export default ImageList