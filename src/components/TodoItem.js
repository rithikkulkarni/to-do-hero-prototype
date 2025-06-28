import React from 'react';

export default function TodoItem({ text, checked, onToggle, onDelete }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      <img
        src={`/assets/${checked ? 'checkbox_checked' : 'checkbox_empty'}.png`}
        width={16}
        height={16}
        alt="checkbox"
        onClick={onToggle}
        style={{ cursor: 'pointer', marginRight: '16px' }}
      />
      <span style={{ fontSize: '10px', color: 'white' }}>{text}</span>
      <img
        src="/assets/delete_icon.png"
        width={16}
        height={16}
        alt="delete"
        onClick={onDelete}
        style={{ cursor: 'pointer', marginLeft: 'auto' }}
      />
    </li>
  );
}
