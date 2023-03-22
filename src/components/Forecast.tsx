import Degree from './Degree'
import Tile from './Tile'

import {
  getSunTime,
} from './../helpers'

import { Div, Div2, Section, Section3, H2, MidPara, Span, H1, Para, ParaBold, MidSpan, MainSection } from '../styles/styles'

import { forecastType } from '../types'

type Props = {
  data: forecastType
}


const Forecast = ({ data }: Props) => {
  const today = data.list[0]



  const date = new Date();
  const showTime = date.getHours()
    + ':' + date.getMinutes()
    + ":" + date.getSeconds();
  const ampm = date.getHours() >= 12 ? 'pm' : 'am';

  return (
    <Div>
      <Div2>
        <Section>
          <H2>
            {data.name}<Span>,{data.country}, Weather</Span>
          </H2>
          <MidPara>As of {showTime}{" "} {ampm} </MidPara>
          <H1>
            <Degree temp={Math.round(today.main.temp)} />
          </H1>
          <Para>
            {today.weather[0].main} ({today.weather[0].description})
          </Para>

        </Section>

        <MainSection>
          <Section3>
            <MidSpan>
              <span> <ParaBold>High/Low</ParaBold></span> <span><Degree temp={Math.ceil(today.main.temp_max)} />/
                <Degree temp={Math.floor(today.main.temp_min)} /></span>
            </MidSpan>
            <Tile
              icon="humidity"
              title="Humidity"
              info={`${today.main.humidity} %`}
            />
            <Tile
              icon="pressure"
              title="Pressure"
              info={`${today.main.pressure} hPa`}
            />
            <Tile
              icon="visibility"
              title="Visibility"
              info={`${(today.visibility / 1000).toFixed()} km`}
            />
          </Section3>
          <Section3>
            <Tile
              icon="wind"
              title="Wind"
              info={`${Math.round(today.wind.speed)} km/h`}
            />
            <Tile
              icon="feels"
              title="Wind Direction"
              info={<Degree temp={Math.round(today.main.feels_like)} />}
            />
            <MidSpan>
              <ParaBold>Sunrise</ParaBold><span>{getSunTime(data.sunrise)} AM</span>
            </MidSpan>
            <MidSpan>
              <ParaBold>Sunset</ParaBold><span>{getSunTime(data.sunset)} PM</span>
            </MidSpan>
          </Section3>
        </MainSection>
      </Div2>
    </Div>
  )
}

export default Forecast
