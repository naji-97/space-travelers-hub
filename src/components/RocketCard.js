import React from 'react';
import {
  Badge, Button, Image, Stack,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleRocketBooking } from '../redux/rockets/rockets';
// eslint-disable-next-line
const RocketCard = ({ id, name, description, imgUrl, reserved }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleRocketBooking(id));
  };
  return (
    <Stack direction="horizontal" gap={2} className="p-2">
      <div>
        <Image src={imgUrl} alt="rocket" width={250} />
      </div>
      <Stack>
        <h2>{name}</h2>
        {reserved ? (
          <div>
            <Badge bg="success" pill>
              Reserved
            </Badge>
          </div>
        ) : null}
        <p>{description}</p>
        <div>
          {reserved ? (
            <Button variant="outline-danger" onClick={handleClick}>
              Cancel Reserve
            </Button>
          ) : (
            <Button variant="primary" onClick={handleClick}>
              Reserve Rocket
            </Button>
          )}
        </div>
      </Stack>
    </Stack>
  );
};
export default RocketCard;
