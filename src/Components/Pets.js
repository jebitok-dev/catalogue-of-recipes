import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Pets = ({ id, media, name }) => {
  let data = '';

  if (media.length !== 0) {
    data = media[0].medium;
  }

  return (
    <Link to={`/details/${id}`}>
      <div className="card">
        <div className="image-container">
          <img src={data} alt={name} />
          <h1 className="info">{name}</h1>
        </div>
      </div>
    </Link>
  );
};

Pets.propTypes = {
  name: PropTypes.string,
  media: PropTypes.array, // eslint-disable-line
  id: PropTypes.number,
};

Pets.defaultProps = {
  name: '',
  media: [],
  id: 1,
};

export default Pets;
