import React from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types'

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      {tech.firstName}{' '}{tech.lastName}
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
}

export default TechItem
