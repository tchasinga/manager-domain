import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Mehtodinputdata = ({ onDataUpdate }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const item_id = uuidv4();
    const blog = { item_id, title, author, category };

    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/K4n5MHOJJUM7HBvm37uj/books/`, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the data immediately
        onDataUpdate(data);
        history.push('/');

      })
      .catch((error) => {
       console.log("you get some errors : ")
      });

    // Reset the input fields
    setTitle('');
    setAuthor('');
    setCategory('');
  }

  return (
    <div className="dataForm">
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author" />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Mehtodinputdata;
