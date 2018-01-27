# react-date-selector

A simple date selector for input fields in React projects.

## Installation

  ```bash
  npm install react-date-selector --save
  ```
  or
  ```bash
  yarn add react-date-selector
  ```

## Usage

```js
import DateSelector from 'react-date-selector'

class App extends Component {
  render() {
    return (
      <div>
        <DateSelector />
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