import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const cleanInputValue = inputValue.trim();
    if(cleanInputValue.length <= 1) return;
    onNewCategory(cleanInputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
