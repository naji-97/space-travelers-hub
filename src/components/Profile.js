import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRockets } from '../redux/rockets/Rocket';

const Rocket = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketsData && rocketsData.length === 0) {
      fetch('https://api.spacexdata.com/v3/rockets')
        .then((res) => res.json())
        .then((data) => {
          const selectedData = data.map((rocket) => ({
            id: rocket.id,
            rocket_name: rocket.rocket_name,
            description: rocket.description,
            flickr_images: rocket.flickr_images,
          }));
          dispatch(addRockets(selectedData));
        });
    }
  }, [dispatch, rocketsData]);

  return (
    <div>
      <h1>HELLO ROCKETS</h1>
      {rocketsData && rocketsData.length > 0
        ? rocketsData.map((rocket) => (
          <div key={rocket.id}>
            <p>
              Name:
              {rocket.rocket_name}
            </p>
            <p>
              Description:
              {rocket.description}
            </p>
            <p>
              Images:
              {rocket.flickr_images.join(', ')}
            </p>
          </div>
        ))
        : <p>Loading...</p>}
    </div>
  );
};

export default Rocket;
