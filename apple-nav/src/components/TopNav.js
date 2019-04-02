import React from 'react';
import {NavLink } from 'react-router-dom';
import SubNav from './SubNav';
import styled from 'styled-components';

class TopNav extends React.Component {

    render() {
        return (
            <>
            <NavLink 
            to={this.props.tab.path}
            >{this.props.tab.content}</NavLink>  
            </>  
        );
    } 
}

export default TopNav;