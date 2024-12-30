import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function BasicTable({ data }) {
  // 데이터 통합

  const tableData = data?.countries.map((country, index) => ({
    ...country,
    mortality: data.mortalityData[index].value,
    recovery: data.recoveryData[index].value,
    vaccination: data.vaccineData[index].value,
  }))

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='covid data table'>
        <TableHead>
          <TableRow>
            <TableCell>국가</TableCell>
            <TableCell align='right'>확진자</TableCell>
            <TableCell align='right'>사망자</TableCell>
            <TableCell align='right'>완치자</TableCell>
            <TableCell align='right'>치명률(%)</TableCell>
            <TableCell align='right'>회복률(%)</TableCell>
            <TableCell align='right'>백신 접종률(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData &&
            tableData.map((country, index) => (
              <TableRow
                key={country.country}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {country.country}
                </TableCell>
                <TableCell align='right'>{country.cases.toLocaleString()}</TableCell>
                <TableCell align='right'>{country.deaths.toLocaleString()}</TableCell>
                <TableCell align='right'>{country.recovered.toLocaleString()}</TableCell>
                <TableCell align='right'>{country.mortality}%</TableCell>
                <TableCell align='right'>{country.recovery}%</TableCell>
                <TableCell align='right'>{data.vaccineData[index].value}%</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
