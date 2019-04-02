import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const SubNav = props => {
    const tab = props.navdata.find(tab => `${tab.path}` === props.history.location.pathname)
    
    return (

        <>
        {tab.subcontent.map(item => (
            <ItemWrapper>
            <img src={item.icon} />
            <a>{item.name}</a>
            </ItemWrapper>
        ))}  
        
        </>
    );
}

export default SubNav;