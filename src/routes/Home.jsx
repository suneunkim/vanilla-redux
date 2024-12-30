import '../index.css'
import VaccinationChart from '../components/chart/VaccinationChart'
import MortalityChart from '../components/chart/MortalityChart'
import RecoveryChart from '../components/chart/RecoveryChart'
import BasicTable from '../components/chart/BasicTable'
import useCovidData from '../hooks/useCovidData'

export default function Home() {
  const { covidStates, isLoading, error } = useCovidData()

  if (isLoading) return <div>로딩중입니다.</div>
  if (error) return <div>잠시후 다시 시도해주세요. {error}</div>

  const { mortalityData, recoveryData, vaccineData } = covidStates

  return (
    <>
      <h1>주요 인구 대국의 코로나19 차트</h1>
      <div>
        <section id='container'>
          {vaccineData && <VaccinationChart data={vaccineData} />}
          {mortalityData && <MortalityChart data={mortalityData} />}
          {recoveryData && <RecoveryChart data={recoveryData} />}
        </section>

        <div className='stats-table'>
          <BasicTable data={covidStates} />
        </div>
      </div>
    </>
  )
}

// https://disease.sh/docs/#/
