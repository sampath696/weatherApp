import { optionType } from './../types/index'
import {SuggestionButton, Ul} from '../styles/styles'

type componentProps = {
  options: []
  onSelect: (option: optionType) => void
}



const Suggestions = ({ options, onSelect }: componentProps): JSX.Element => (
  <Ul>
    {options.map((option: optionType, index: number) => (
      <li key={option.name + '-' + index}>
        <SuggestionButton
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </SuggestionButton>
      </li>
    ))}
  </Ul>
)

export default Suggestions
