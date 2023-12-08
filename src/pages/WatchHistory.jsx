import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistory, getHistory } from '../components/services/allAPI';

function WatchHistory() {
  const [history, setHistory] = useState([]);

  const getAllWatchHistory = async () => {
    // make api call
    const { data } = await getHistory();
    setHistory(data);
  };

  useEffect(() => {
    getAllWatchHistory();
  }, []);

  const handleDeleteHistory = async (id) => {
    // make api call
    await deleteHistory(id);
    // get all history
    getAllWatchHistory();
  };

  return (
    <>
      <div className='container d-flex mt-5 mb-5 justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }}>
          <i className='fa-solid fa-arrow-long fa-beat me-1'></i>Back to Home
        </Link>
      </div>
      <div className='container'>
        <table className='table mt-5 mb-5'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history?.length > 0 ? (
              history.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.caption}</td>
                  <td>
                    <a href={item?.embedlink} target='_blank' rel='noopener noreferrer'>
                      {item?.embedlink}
                    </a>
                  </td>
                  <td>{item?.timeiStamp}</td>
                  <td>
                    <button onClick={() => handleDeleteHistory(item?.id)} className='btn'>
                      <i className='fa-solid fa-trash text-danger'></i>
                    </button>{' '}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='5' className='text-center'>
                  <p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
