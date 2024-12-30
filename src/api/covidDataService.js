import { API_ENDPOINTS } from '../constants'

export const fetchCountryCovidData = async (country) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.COUNTRY_DATA}/${country}`)
    return await response.json()
  } catch (error) {
    console.error(`Error fetching COVID data for ${country}.`, error)
    return null
  }
}

export const fetchCountryVaccineData = async (country) => {
  try {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}?lastdays=1&fullData=false`
    )
    return response.json()
  } catch (error) {
    console.error(`Error fetching vaccine data for ${country}.`, error)
    return null
  }
}
