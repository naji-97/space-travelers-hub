import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, Image, Stack } from 'react-bootstrap';
// eslint-disable-next-line
const RocketCard = ({ id, name, description, imgUrl }) => (
  <Stack direction="horizontal" gap={2} className="p-2">
    <div>
      <Image src={imgUrl} alt="rocket" width={200} />
    </div>
    <Stack>
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <Button variant="primary" type="button">
          Reserve Rocket
        </Button>
      </div>
    </Stack>
  </Stack>
);
export default RocketCard;
