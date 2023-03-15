import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketData } from '../redux/rockets/rockets';
import RocketCard from './RocketCard';
// import { addRockets } from '../redux/rockets/Rockets';
const RocketList = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets.data);
  const rocketStatus = useSelector((state) => state.rockets.status);
  useEffect(() => {
    if (rocketStatus === 'idle') dispatch(getRocketData());
  }, [dispatch, rocketStatus]);
  return (
    <Container>
      {rocketsData.map((rocket) => (
        <RocketCard
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          imgUrl={rocket.flickr_images[0]}
          description={rocket.description}
        />
      ))}
    </Container>
  );
};
export default RocketList;
