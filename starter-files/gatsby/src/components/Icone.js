import React from 'react';
import { GiBeveledStar } from 'react-icons/gi';

export default function Icone({ scrollY }) {
  return (
    <GiBeveledStar
      style={{
        fontSize: '3rem',
        transform: `rotate(${scrollY / 100}turn)`,
      }}
    />
  );
}
