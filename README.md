# react-calendar-date-selector

A simple date selector for input fields in React projects.

## Installation

  ```bash
  npm install react-calendar-date-selector --save
  ```
  or
  ```bash
  yarn add react-calendar-date-selector
  ```

## Usage

```js
import DateSelector from 'react-calendar-date-selector'

class App extends Component {
  constructor () {
    super()
    this.state = {
      chosenDate: ''
    }
    this.selectDate = this.selectDate.bind(this)
  }

  selectDate (e, date) {
    e.preventDefault()
    console.log(date)
    this.setState({ chosenDate: date  })
  }

  render() {
    return (
      <div className='App'>
        <DateSelector selectDate={this.selectDate} chosenDate={this.state.chosenDate} />
      </div>
    );
  }
}

export default App;
```

### DateSelector Styling
CSS class names should be applied to the classNames property.

#### DateSelector props

| Props              | Default values | Possible values                          |
| -------------------| --------------| ------------------------------------------|
| classNames         | none          | string                                    |
| chosendate         | none          | string                                    |
| selectDate         | none          | function                                  |