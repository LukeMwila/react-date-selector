 import React, { Component } from 'react'
 import Months from './Months'
 import DaysOfWeek from './Days'
 import MonthDates from './MonthDates'
 import DateSelectorOverlay from './DateSelectorOverlay'
 import CalendarContainer from './CalendarContainer'
 import Ionicon from 'react-ionicons'
 import moment from 'moment'
 import classnames from 'classnames'
 import PropTypes from 'prop-types'
 import {
  DAYS_IN_WEEK,
  MONTHS_IN_YEAR
 } from './constants'

 class Calendar extends Component {
   constructor () {
     super()
     this.nextMonth = this.nextMonth.bind(this)
     this.previousMonth = this.previousMonth.bind(this)
   }

   componentWillMount () {
     let daysOfWeek = DAYS_IN_WEEK
     let monthsInYear = MONTHS_IN_YEAR
     let currentMonth = moment().month()
     let monthName = MONTHS_IN_YEAR[currentMonth]
     let currentYear = moment().year()
     let currentDate = moment().format('DD/MM/YYYY')

     this.setState({ daysOfWeek: daysOfWeek, months: monthsInYear, monthName: monthName, currentMonth: currentMonth, currentYear: currentYear, currentDate: currentDate })
   }

   nextMonth (e) {
     let self = this
     if (self.state.currentMonth === 11) {
       let newYear = self.state.currentYear + 1
       let newMonth = 0
       let monthName = MONTHS_IN_YEAR[newMonth]
       self.setState({ currentMonth: newMonth, currentYear: newYear, monthName: monthName })
     } else {
       let newYear = self.state.currentYear
       let newMonth = self.state.currentMonth + 1
       let monthName = MONTHS_IN_YEAR[newMonth]
       self.setState({ currentMonth: newMonth, currentYear: newYear, monthName: monthName })
     }
   }

   previousMonth (e) {
     let self = this
     if (self.state.currentMonth === 0) {
       let newYear = self.state.currentYear - 1
       let newMonth = 11
       let monthName = MONTHS_IN_YEAR[newMonth]
       self.setState({ currentMonth: newMonth, currentYear: newYear, monthName: monthName })
     } else {
       let newYear = self.state.currentYear
       let newMonth = self.state.currentMonth - 1
       let monthName = MONTHS_IN_YEAR[newMonth]
       self.setState({ currentMonth: newMonth, currentYear: newYear, monthName: monthName })
     }
   }

   render () {
     let classes = classnames({
       'hide-me': !this.props.displayCalendar
     })
     return (
       <div className={classes}>
         <DateSelectorOverlay>
           <CalendarContainer>
             <div onClick={this.props.closeCalendar} className='close-btn pointer'><Ionicon icon="md-close" fontSize="55px" color="#fff"/></div>
             <Months month={this.state.monthName} year={this.state.currentYear} nextMonth={this.nextMonth} previousMonth={this.previousMonth} />
             <DaysOfWeek daysOfWeek={this.state.daysOfWeek} />
             <MonthDates selectDate={this.props.selectDate} currentDate={this.state.currentDate} currentMonth={this.state.currentMonth} currentYear={this.state.currentYear} />
           </CalendarContainer>
         </DateSelectorOverlay>
       </div>
     )
   }
 }

 export default Calendar
