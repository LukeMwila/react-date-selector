import React, { Component } from 'react'
import { getDaysInMonth } from './Functions/'
import moment from 'moment'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.css'

class MonthDates extends Component {
  returnMonthDates () {
    let classes
    let dateObjects = getDaysInMonth(this.props.currentMonth, this.props.currentYear)
    let firstDayOfMonth = dateObjects[0].getDay()
    let firstDateOfMonth = dateObjects[0]

    for (let i = 0; i < firstDayOfMonth; i++) {
      dateObjects.unshift(moment(firstDateOfMonth).subtract(i + 1, 'days').toDate())
    }

    let dates = dateObjects.map((date) => {
      classes = classnames({
        'floatLeftCalendar dateContainerCalendar centerCalendar pointer': true,
        'greyedOutDateCalendar': (this.props.currentMonth !== moment(date).month()), // grey out any date that is from the previous month
        'highlightCurrentDateCalendar': (this.props.currentDate === moment(date).format('DD/MM/YYYY'))
      })

      return <div className={classes} key={moment(date).format('DD/MM/YYYY')} data-calendar-date={moment(date).format('DD/MM/YYYY')} onClick={(e) => { this.props.selectDate(e, moment(date).format('DD/MM/YYYY')) }}>
        <div className='dateCircleDivCalendar'>
          <span>{date.getDate()}</span>
        </div>
      </div>
    })

    return <div>{dates}</div>
  }

  render () {
    return (
      <div>
        {this.returnMonthDates()}
      </div>
    )
  }
}

export default MonthDates
