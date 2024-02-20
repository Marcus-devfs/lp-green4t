import React from 'react';
import { Text } from '../../atoms';

export const FormLabel = ({ htmlFor, children }) => (
    <Box>
        <Text large>
            {children}
        </Text>
    </Box>
);

