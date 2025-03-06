import './index.css';
import { data } from '../../libs/data';
import { useState } from 'react';

const GridTable = () => {
  console.log(data);

  const [showOptions, setShowOptions] = useState(10);
  const [page, setPage] = useState(1);
  const maxPages = Math.ceil(data.Grid_Data.length / showOptions);
  console.log(maxPages);
  return (
    <div className='container'>
      <div className='headerRow'>
        <th>Report Time</th>
        <th>Output</th>
        <th>Machine ID</th>
        <th>Status</th>
      </div>
      <table className='tableContainer'>
        <tbody className='tableBodyContainer'>
          {data.Grid_Data.length === 0 && <tr>No data available.</tr>}
          {page === 1 && (
            <>
              {data.Grid_Data.slice(0, showOptions).map((row, index) => (
                <tr key={index} className='rowContainer'>
                  <td className='elementContainer'>{row.REPORT_TIME}</td>
                  <td className='elementContainer'>{row.OUTPUT}</td>
                  <td className='elementContainer'>{row.MACHINE_ID}</td>
                  <td className='elementContainer'>{row.STATUS}</td>
                </tr>
              ))}
            </>
          )}
          {page === 2 && (
            <>
              {data.Grid_Data.slice(showOptions, showOptions * 2).map(
                (row, index) => (
                  <tr key={index} className='rowContainer'>
                    <td className='elementContainer'>{row.REPORT_TIME}</td>
                    <td className='elementContainer'>{row.OUTPUT}</td>
                    <td className='elementContainer'>{row.MACHINE_ID}</td>
                    <td className='elementContainer'>{row.STATUS}</td>
                  </tr>
                )
              )}
            </>
          )}
          {page === maxPages && (
            <>
              {data.Grid_Data.slice(
                showOptions * (maxPages - 1),
                showOptions * maxPages
              ).map((row, index) => (
                <tr key={index} className='rowContainer'>
                  <td className='elementContainer'>{row.REPORT_TIME}</td>
                  <td className='elementContainer'>{row.OUTPUT}</td>
                  <td className='elementContainer'>{row.MACHINE_ID}</td>
                  <td className='elementContainer'>{row.STATUS}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      <div className='footerRow'>
        <div>
          Showing {showOptions} of {data.Grid_Data.length} entries.
        </div>
        <div className='buttonBox'>
          Show Option:
          <select
            className='selectStyle'
            onChange={(e) => setShowOptions(e.target.value)}
          >
            <option value='10'>10</option>
            <option value='15'>20</option>
            <option value='30'>30</option>
          </select>
          <button
            className='btnStyle'
            onClick={() => setPage(page - 1)}
            disabled={page === 1 ? true : false}
          >
            Previous
          </button>
          <button
            className='btnStyle'
            onClick={() => setPage(page + 1)}
            disabled={page === maxPages ? true : false}
          >
            Next
          </button>
          page {page}
          <button
            className='btnStyle'
            onClick={() => setPage(1)}
            disabled={page === 1 ? true : false}
          >
            top
          </button>
          <button
            className='btnStyle'
            onClick={() => setPage(maxPages)}
            disabled={page === maxPages ? true : false}
          >
            last
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridTable;
