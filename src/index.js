import React, { Component } from 'react'
import CalendarForDateSelector from './CalendarForDateSelector'
import PropTypes from 'prop-types'

class DateSelector extends Component {
  constructor () {
    super()
    this.state = {
      displayCalendar: false
    }
    this.toggleCalendarDisplay = this.toggleCalendarDisplay.bind(this)
  }

  toggleCalendarDisplay () {
    this.setState({ displayCalendar: !this.state.displayCalendar })
  }

  render () {
    return (
      <div>
        <CalendarForDateSelector selectDate={this.props.selectDate} closeCalendar={this.toggleCalendarDisplay} displayCalendar={this.state.displayCalendar} />
        <input className={this.props.classNames} onClick={this.toggleCalendarDisplay} value={this.props.chosenDate} />
      </div>
    )
  }
}

DateSelector.propTypes = {
  classNames: PropTypes.string
}

export default DateSelector
