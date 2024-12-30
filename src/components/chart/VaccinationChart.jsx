import { ResponsiveBar } from '@nivo/bar'

const VaccinationChart = ({ data }) => {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <p>백신 누적 접종률</p>
      <ResponsiveBar
        data={data}
        keys={['value']}
        indexBy='country'
        margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '국가별 백신 누적 접종률',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '접종률 (%)',
          legendPosition: 'middle',
          legendOffset: -45,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role='application'
        ariaLabel='백신 접종률'
      />
    </div>
  )
}

export default VaccinationChart
