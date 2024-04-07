import React from 'react';
import View from './View';

function ParentComponent() {

  const storedData = JSON.parse(localStorage.getItem('userData')) || [];

  const handleUpdate = (data) => {
    // Navigate to the form page with data
    console.log("Navigate to the form page with data:", data);
  };

  const handleDelete = (index) => {
    // Remove the item at the specified index from storedData
    const newData = [...storedData];
    newData.splice(index, 1);
    localStorage.setItem('userData', JSON.stringify(newData));
    window.location.reload(); // Refresh the page to reflect changes
  };

  return (
    <View storedData={storedData} handleUpdate={handleUpdate} handleDelete={handleDelete} />
  );
}

export default ParentComponent;
