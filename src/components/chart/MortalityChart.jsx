import { ResponsiveRadialBar } from '@nivo/radial-bar'

const MortalityChart = ({ data }) => {
  // 데이터 포맷 변환
  const formattedData = data.map((country) => ({
    id: country.country,
    data: [
      {
        x: 'Mortality Rate',
        y: parseFloat(country.value),
      },
    ],
  }))

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <p>치명률 비교 파이 차트 - 상위 5개국의 사망자/확진자 비율</p>
      <ResponsiveRadialBar
        data={formattedData}
        valueFormat='>-.2f'
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 10, right: 120, bottom: 40, left: 40 }}
        colors={{ scheme: 'pastel1' }}
        enableRadialGrid={false}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        enableLabels={true}
        labelsSkipAngle={20}
        animate={false}
        isInteractive={false}
        legends={[]}
      />
    </div>
  )
}

export default MortalityChart
