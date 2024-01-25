import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ handleSearch }) => {
  return (
    <Form className='mx-auto p-2' style={{ width: '75%' }}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Control
          type='text'
          placeholder='Search...'
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
