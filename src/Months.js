import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Ionicon from 'react-ionicons'


const Months = (props) => {
  return (
    <div className='fullWidthCalendar floatLeftCalendar monthContainerControllerCalendar' >
      <div className='floatLeftCalendar fullHeightCalendar oneThirdWidthCalendar left-align month-controller'>
        <span onClick={props.previousMonth}><Ionicon icon="md-arrow-back" fontSize="25px" color="#666"/></span>
      </div>
      <div className='floatLeftCalendar fullHeightCalendar oneThirdWidthCalendar monthNameCalendar center-align'><span>{props.month} {props.year}</span></div>
      <div className='floatLeftCalendar fullHeightCalendar oneThirdWidthCalendar right-align month-controller'>
        <span onClick={props.nextMonth}><Ionicon icon="md-arrow-forward" fontSize="25px" color="#666"/></span>
      </div>
    </div>
  )
}

Months.propTypes = {
  nextMonth: PropTypes.func.isRequired,
  previousMonth: PropTypes.func.isRequired,
  month: PropTypes.any.isRequired,
  year: PropTypes.any.isRequired
}

export default Months
