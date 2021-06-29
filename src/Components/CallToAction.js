import React from 'react';
import PropTypes from 'prop-types';

const CallToAction = ({ heading, content }) => (
  <div className="text-center">
    <h1>{heading}</h1>
    <p>{content}</p>
  </div>
);

CallToAction.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
};

export default CallToAction;
