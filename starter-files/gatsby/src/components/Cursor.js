import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

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

    const addHoverEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setHovered(true));
        el.addEventListener('mouseout', () => setHovered(false));
      });
    };

    addHoverEvents();
    addEventListeners();
    return () => removeEventListeners();
  });

  return (
    <div
      className={hovered ? 'cursor hovered' : 'cursor'}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
