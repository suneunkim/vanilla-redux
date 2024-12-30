import { useEffect, useState } from 'react'
import { processData, processVaccineData } from './../utils/processData'
import { MAJOR_COUNTRIES } from '../constants'
import { fetchCountryCovidData, fetchCountryVaccineData } from '../api/covidDataService'

export default function useCovidData() {
  const [covidStates, setCovidStates] = useState({
    countries: [], // 기본 국가 데이터
    mortalityData: [], // 가공된 치명률 데이터
    recoveryData: [], // 가공된 회복률 데이터
    vaccineData: [], // 백신 데이터
  })

  const [isLoading, setIsloading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsloading(true)
        const countries = Object.values(MAJOR_COUNTRIES)

        // 5개 국의 나라별 다양한 데이터, 백신 데이터
        const [countryData, vaccineData] = await Promise.all([
          Promise.all(countries.map(fetchCountryCovidData)),
          Promise.all(countries.map(fetchCountryVaccineData)),
        ])

        const processedData = {
          countries: countryData,
          mortalityData: processData(countryData, 'mortality'),
          recoveryData: processData(countryData, 'recovery'),
          vaccineData: processVaccineData(vaccineData, countryData),
        }

        setCovidStates((prev) => ({ ...prev, ...processedData }))
      } catch (error) {
        setError(error.message)
        console.error('Error fetching COVID data.', error)
      } finally {
        setIsloading(false)
      }
    }

    fetchAllData()
  }, [])

  return { covidStates, isLoading, error }
}

// https://disease.sh/docs/#/
