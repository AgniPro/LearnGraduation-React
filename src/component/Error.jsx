import { useState, useEffect } from 'react';

function FloatingMessage({ statusCode, message }) {
  const [displayMessage, setDisplayMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (message) {
      setDisplayMessage(message);
      switch (statusCode) {
        case 200:
          setBackgroundColor('green');
          break;
        case 401:
          setBackgroundColor('red');
          break;
        case 500:
        setBackgroundColor('red');
        break;
        case 404:
          setBackgroundColor('#ff404');
          break;
        case 409:
          setBackgroundColor('red');
        break;
        case 'notification':
          setBackgroundColor('blue');
          break;
        default:
          setBackgroundColor('grey');
      }
      const timeoutId = setTimeout(() => {
        setDisplayMessage('');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [message, statusCode]);

  if (!displayMessage) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '100px',
        backgroundColor,
        color: 'white',
        padding: '10px',
        zIndex: '10',
      }}
    >
      {displayMessage}
    </div>
  );
}
export default FloatingMessage;
