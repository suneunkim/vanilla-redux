export const processData = (data, type) => {
  return data.map((country) => ({
    country: country.country,
    value:
      type === 'mortality'
        ? ((country.deaths / country.cases) * 100).toFixed(2)
        : ((country.recovered / country.cases) * 100).toFixed(2),
  }))
}

export const processVaccineData = (vaccineData, countriesData) => {
  return vaccineData.map((vaccine, index) => {
    const latestDate = Object.keys(vaccine.timeline)[0]
    const doses = vaccine.timeline[latestDate]
    const population = countriesData[index].population

    return {
      country: vaccine.country,
      value: ((doses / population) * 100).toFixed(2),
    }
  })
}
