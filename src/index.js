import React, { Component } from 'react'
import CalendarForDateSelector from './CalendarForDateSelector'
import PropTypes from 'prop-types'

class DateSelector extends Component {
  constructor () {
    super()
    this.state = {
      chosenDate: '',
      displayCalendar: false
    }
    this.selectDate = this.selectDate.bind(this)
    this.toggleCalendarDisplay = this.toggleCalendarDisplay.bind(this)
  }

  selectDate (e, date) {
    e.preventDefault()
    this.setState({ chosenDate: date, displayCalendar: !this.state.displayCalendar })
  }

  toggleCalendarDisplay () {
    this.setState({ displayCalendar: !this.state.displayCalendar })
  }

  render () {
    return (
      <div>
        <CalendarForDateSelector selectDate={this.selectDate} displayCalendar={this.state.displayCalendar} />
        <input className={this.props.classNames} onClick={this.toggleCalendarDisplay} value={this.state.chosenDate} />
      </div>
    )
  }
}

DateSelector.propTypes = {
  classNames: PropTypes.string
}

export default DateSelector
