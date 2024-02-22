
import React from 'react';
import { Box, TextInput } from '../../atoms';

export const FormInput = ({ type, name, value, onChange, placeholder, children, rows, checked }) => {
  if (type === 'select') {
    return (
      <div style={{ position: 'relative', display: 'inline-block', backgroundColor: '#7C95B10D', }}>
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          style={{
            backgroundColor: '#7C95B10D',
            width: '100%',
            color: '#000',
            fontSize: '13px',
            border: 'none',
            padding: '25px 20px',
            textDecoration: 'none',
            appearance: 'none',
            outline: 'none',
            fontFamily: 'PoppinsRegular',
          }}
        >
          {children}
        </select>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid #000', // Cor da seta
            pointerEvents: 'none',
          }}
        />
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        style={{
          backgroundColor: '#7C95B10D',
          color: '#000',
          fontSize: '13px',
          border: 'none',
          padding: '25px 20px',
          fontFamily: 'PoppinsRegular',
          resize: 'none',
        }}
        rows={rows}
      />
    );
  }


  if (type === 'checkbox') {
    return (
      <label style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <input type="checkbox" checked={checked} onChange={onChange} style={{
          display: 'none',
        }} />
        <div style={{
          width: 25,
          height: 25,
          padding: '5px',
          backgroundColor: '#7C95B10D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {checked && (
            <Box sx={{ display: 'flex', gap: 1, width: '100%', height: '100%', backgroundColor: 'green' }} />
          )}
        </div>
        {children}
      </label>
    );
  }


  return (
    <input type="text" name={name} value={value} onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
      style={{
        backgroundColor: '#7C95B10D',
        color: '#000',
        fontSize: '13px',
        width: '100%',
        border: 'none',
        padding: '25px 20px',
        fontFamily: 'PoppinsRegular',

      }}
    />
  );
};
