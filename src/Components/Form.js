import React from 'react';
import styled from 'styled-components';
import { IoSearchSharp } from 'react-icons/io5';
const FormHolder = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

const Form = ({ language, setLanguage, onSubmit }) => {
  return (
    <FormHolder>
      <input
        type="text"
        className="form-control"
        placeholder="Type to Detect"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <button
        type="submit"
        className="form-submit"
        onSubmit={onSubmit(language)}
      >
        <IoSearchSharp />
      </button>
    </FormHolder>
  );
};

export default Form;
