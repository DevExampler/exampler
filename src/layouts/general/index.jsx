import React from 'react';
// Componentes
import Header from '../../utils/header/index.jsx';


const GeneralLayout = ({children}) => {
    return (
        <>
            {children}
            <Header />
        </>
    )
}

export default GeneralLayout;