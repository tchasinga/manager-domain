import React, { useState} from 'react';

const Pagingdisplaying = ({ data }) => {
  const [itemsData, setItemsData] = useState(data);

  const handleRemoveItem = (id) => {
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/K4n5MHOJJUM7HBvm37uj/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        // Update the state or re-fetch the data
        const updatedData = { ...itemsData };
        delete updatedData[id];
        setItemsData(updatedData);
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };

  return (
    <div>
      {Object.entries(itemsData).map(([id, items]) => (
        <div className="dataContainer" key={id}>
          {items.map((item) => (
            <div key={item.title}>
              <h1>{item.title}</h1>
              <p>{item.author}</p>
              <p>{item.category}</p>
              <button onClick={() => handleRemoveItem(id)}>Remove...</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pagingdisplaying;
