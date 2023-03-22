import {MidSpan, ParaBold} from '../styles/styles'
type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  description?: string | JSX.Element
}

const Tile = ({ title, info }: Props): JSX.Element => {

  return (
    <MidSpan>
      <ParaBold>{title}</ParaBold> <span>{info}</span>
    </MidSpan>

  )
}
export default Tile
