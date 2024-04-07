import React, { useState, useEffect } from 'react';
import './comp.css'
import { Link } from 'react-router-dom';


function View() {
  const [savedData, setSavedData] = useState([]);

  const handleDelete = (index) => {
    const updatedData = savedData.filter((_, i) => i !== index);
    setSavedData(updatedData);
    localStorage.setItem('savedData', JSON.stringify(updatedData));
  };


  useEffect(() => {
    // Load saved data from local storage when component mounts
    const savedDataFromLocalStorage = JSON.parse(localStorage.getItem('savedData')) || [];
    setSavedData(savedDataFromLocalStorage);
  }, []);

  return (
    <>
    <div>
      
      <h2 className='title'>My Collection</h2>
      {savedData.map((data, index) => (
        
        <div class="cv-container" key={index}>
          <div class="name">
            {data.fname} {data.lname}
          </div>
          <div className="subtitle">
            {data.title}
          </div>
          <div className="details">
          <div >
              <div class="cv-item">
              <h4>Personal Information</h4>
              <hr/>
              <strong>Date of Birth:</strong> {data.dob}
            </div>
         
            
            <div class="cv-item">
              <strong>Address:</strong> {data.address}
            </div>
            <div class="cv-item">
              <strong>Phone Number:</strong> {data.number}
            </div>
            <div class="cv-item">
              <strong>Employement Status:</strong> {data.dropdown}
            </div>
          </div>
          
            <div className="expireance">
              <div class="cv-item">
                <h4>Experience</h4>
                <hr/>
                
                <div className='cv-item'><strong>Company: </strong>{data.company}<br/></div>
                <div className='cv-item'> <strong>Address: </strong>{data.caddress}<br/></div>
                <div className='cv-item'><strong>Number of Experience: </strong>{data.numberofexperience}<br/></div>
                <div className='cv-item'><strong>Period: </strong>{data.period}</div>
                
              </div>
            </div>
           
          </div>
          
          <Link to="/Form"><button
              style={{ backgroundColor: '#007bff', color: '#fff', marginRight: '10px', marginTop:'40px', marginLeft:'55px' }}
          > 
            Update
          </button></Link>
          
          <button
            onClick={() => handleDelete(index)}
            style={{ backgroundColor: '#dc3545', color: '#fff' }}
          >
            Delete
          </button>

        </div>

      ))}
    </div></>
  );
}

export default View;
