import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
