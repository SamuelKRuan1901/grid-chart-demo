import './App.css';
import BarChart from './components/BarChart';
import GridTable from './components/GridTable';
import { FaChartSimple } from 'react-icons/fa6';
import { CiViewTable } from 'react-icons/ci';
import { useState } from 'react';

function App() {
  const [chartOptions, setChartOptions] = useState(true);
  return (
    <>
      <div className='btn-box'>
        <div className='btn' onClick={() => setChartOptions(true)}>
          <FaChartSimple
            style={{ fontSize: '20px', color: 'black', cursor: 'pointer' }}
          />
        </div>
        <div className='btn' onClick={() => setChartOptions(false)}>
          <CiViewTable
            style={{ fontSize: '26px', color: 'black', cursor: 'pointer' }}
          />
        </div>
      </div>
      {chartOptions ? <BarChart /> : <GridTable />}
      {/* <GridTable />
      <BarChart /> */}
    </>
  );
}

export default App;
