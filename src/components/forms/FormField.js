import React from 'react';
import { Box } from '../../atoms';

export const FormField = ({ row = false, children }) => (
    <Box sx={{ display: 'flex', gap: 3, flexDirection: row ? 'row' : 'column' }}>
        {children}
    </Box>
);

