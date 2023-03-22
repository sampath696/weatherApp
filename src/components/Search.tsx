import { ChangeEvent } from 'react'
import Suggestions from './Suggestions'

import { optionType } from './../types/index'
import { SearchSection, Header, Division, Input, Button } from '../styles/styles'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}



const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => (
  <SearchSection>
    <Header>Weather App</Header>
    <Division>
      <Input
        type="text"
        value={term}
        onChange={onInputChange}
        placeholder="Serch for Weather"
      />

      <Suggestions options={options} onSelect={onOptionSelect} />

      <Button onClick={onSubmit}>
        search
      </Button>
    </Division>
  </SearchSection>
)

export default Search
