import React from 'react';
import PropTypes from 'prop-types';

const CallToAction = ({ heading }) => (
  <div>
    <h1>{heading}</h1>
  </div>
);

CallToAction.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default CallToAction;
