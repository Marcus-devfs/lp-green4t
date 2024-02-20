// Exemplo básico do FormContainer.js
import React, { useState } from 'react';
import { Box } from '../../atoms';

export const FormContainer = ({ children, onSubmit }) => {

    return (
        <form onSubmit={onSubmit}>
            <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column', padding: { xs: '50px 30px', xm: '50px 0px', md: '50px 0px', lg: '50px 0px' } }}>
                {children}
            </Box>
        </form>
    );
};
