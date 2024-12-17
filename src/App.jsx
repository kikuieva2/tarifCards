
import './app/App.css'


function App() {
  import React, { useState } from 'react';

const TextFormatter = () => {
  const [inputText, setInputText] = useState(''); 
  const [formattedText, setFormattedText] = useState('');  

  // Обработчик для обновления состояния ввода
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Обработчик для форматирования текста при нажатии кнопки
  const handleButtonClick = () => {
    const formatted = inputText.toUpperCase();  // Пример форматирования - перевод в заглавные буквы
    setFormattedText(formatted);
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInputChange} 
          placeholder="Введите текст" 
        />
        <button onClick={handleButtonClick}>Показать отформатированный текст</button>
      </div>
      
      {formattedText && (
        <div style={{ marginTop: '20px', color: 'blue', fontSize: '18px' }}>
          <strong>Отформатированный текст:</strong> {formattedText}
        </div>
      )}
    </div>
  );
};

export default TextFormatter;

}

export default App
