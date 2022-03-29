import * as React from 'react';

import { createSvgIcon } from '@mui/material/utils';

const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home', 
);

export default function CreateSvgIcon() {
    return (


        <HomeIcon color="primary" sx={{ fontSize: 40 }} style={{marginRight: 200}}/>

    );
}
