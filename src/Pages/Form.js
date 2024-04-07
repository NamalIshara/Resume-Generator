import React, { useState, useEffect } from 'react';
import View from '../Components/View';
import PageNav from './PageNav';
import '../Pages/style.css'

function Form() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    title:'',
    dob: '',
    address: '',
    number:'',
    unemployee:'',
    parttime:'',
    fulltime:'',
    sinhala:'',
    tamil:'',
    english:'',
    company: '',
    caddress:'',
    numberofexperience:'',
    period:''
  });

  const [savedData, setSavedData] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  useEffect(() => {
    // Load saved data from local storage when component mounts
    const savedDataFromLocalStorage = JSON.parse(localStorage.getItem('savedData')) || [];
    setSavedData(savedDataFromLocalStorage);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkboxChecked) {
      const newData = { ...formData };
      setSavedData([...savedData, newData]);
      localStorage.setItem('savedData', JSON.stringify([...savedData, newData]));
      setFormData({ fname: '',lname:'', title:'', dob: '', address: '',number:'',unemployee:'',parttime:'',fulltime:'', sinhala:'',tamil:'',english:'', company: '', caddress:'', numberofexperience:'',period:''});
    } else {
      alert('Please agree to terms and conditions to submit the form.');
    }
  };
  const handleLanguageChange = (e) => {
    const { value } = e.target;
    // Check if the language is already selected or not
    const updatedLanguages = formData.languages.includes(value)
      ? formData.languages.filter(lang => lang !== value) // If selected, remove the language
      : [...formData.languages, value]; // If not selected, add the language
  
    // Update the form data with the updated languages
    setFormData({ ...formData, languages: updatedLanguages });
  };

  return (
    <>
      <PageNav />
      <div className='main-form'>
        <h1 className='form-header'>Create Your Resume Here</h1>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <h4>Personal Details</h4>
            <input type="text" name="fname" placeholder="First-Name" value={formData.fname} onChange={handleChange} required /><br />
            <input type="text" name="lname" placeholder="Last-Name" value={formData.lname} onChange={handleChange} required /><br />
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required /><br />
            <input className='date-status' type="date" name="dob" value={formData.dob} onChange={handleChange} required /><br />
            <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required /><br />
            <input type="text" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} required /><br />
            <select className='select-status' name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
                <option value="">Select Employment Status</option>
                <option value="unemployed">Unemployed</option>
                <option value="part-time">Part-Time</option>
                <option value="full-time">Full-Time</option>
            </select><br /> 
            
           
           
            <h4 className='expe-header'>Experience</h4>
            <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required /><br />
            <input type="text" name="caddress" placeholder="Company Address" value={formData.caddress} onChange={handleChange} required /><br />
            <input type="text" name="numberofexperience" placeholder="Number of Experience" value={formData.numberofexperience} onChange={handleChange} required /><br />
            <input type="text" name="period" placeholder="Time Period" value={formData.period} onChange={handleChange} required /><br />
            <label htmlFor="employmentCheckbox">
              <input type="checkbox" id="employmentCheckbox" checked={checkboxChecked} onChange={handleCheckboxChange} required /> I agree to terms and conditions
            </label><br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
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
               <strong>Employement Status:</strong> {data.employmentStatus}
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
          </div> 
          ))}
        </div>
      </div>
    </>
  );
}

export default Form;
