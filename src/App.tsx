import Forecast from './components/Forecast'
import Search from './components/Search'

import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {

  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast()

  return (
    <div>
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        /> <br />
        {forecast &&
          <Forecast data={forecast} />
        }
    </div>
  )
}

export default App
