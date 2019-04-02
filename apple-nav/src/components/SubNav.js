import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const SubNav = props => {
    const tab = props.navdata.find(tab => `${tab.path}` === props.history.location.pathname)
    console.log(props.navdata)
    console.log(props.history.location.pathname)
    console.log(tab)
    
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