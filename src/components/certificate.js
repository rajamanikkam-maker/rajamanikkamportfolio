import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './crtdata';
import Spinner from 'react-bootstrap/Spinner';

const Playlist = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
          <Spinner animation='border' variant='danger' /> &nbsp;&nbsp; Loading .....
        </div>
      ) : (
        <div className='container'>
          <h2 className='text-center mt-2'>MY ACHIEVEMENTS</h2>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {projectData.map((el, index) => (
              <div key={index} className='col'>
                <Card style={{ height: '100%' }}>
                  <Card.Img variant='top' src={el.imgsrc} />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title className='text-center'>{el.projectName}</Card.Title>
                    <Button variant='primary' href={el.demo} target='_blank' className='text-decoration-none text-light'>
                      Click to View
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;