/* eslint-disable prettier/prettier */
/* eslint-disable  */

import React from 'react'
import PropTypes from 'prop-types'

const Form = props => {
  return (
    <form className="flex sm:flex-col">
      <input className="sm:mb-4" type="text" name="name" id="name" placeholder="name"/>
      <input className="sm:mb-4" type="email" name="email" id="email" placeholder="email" />
      <button type="submit">Submit</button>
    </form>
  )
}

Form.propTypes = {

}

export default Form
