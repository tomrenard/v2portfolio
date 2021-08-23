import React, { useState } from 'react';
import { GiBeveledStar, GiRobotAntennas } from 'react-icons/gi';

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
