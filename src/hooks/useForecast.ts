import { useState, useEffect, ChangeEvent } from 'react'

import { optionType, forecastType } from './../types/index'
import axios from 'axios'

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = '8cc144fcbf161a63346ca9b840cf4eab';

const useForecast = () => {
  const [city, setCity] = useState<optionType | null>(null)
  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [forecast, setForecast] = useState<forecastType | null>(null)

  const getSearchOptions = async (term: string,) => {
    axios.get(`${BASE_URL}/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&APPID=${API_KEY}`)
      .then(res => {
        let data = res.data;
        setOptions(data)
      })
      .catch((e) => console.log({ e }))

  }

  const onSubmit = () => {
    if (!city) return

    getForecast(city)
  }

  const getForecast = (data: optionType) => {
    axios.get(`${BASE_URL}/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=metric&lang=en&APPID=${API_KEY}`)
      .then((res) => {
        let data = res.data;
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        }

        setForecast(forecastData)
      })
      .catch((e) => console.log({ e }))

  }

  const onOptionSelect = (option: optionType) => {
    setCity(option)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(e.target.value)

    if (value !== '') {
      getSearchOptions(value)
    }
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  }, [city])

  return {
    forecast,
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange,
  }
}

export default useForecast
