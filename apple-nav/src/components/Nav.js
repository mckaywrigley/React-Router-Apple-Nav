import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

// Top Nav Images
import apple from './apple.png';
import search from './search.png';
import shop from './shop.png';

import TopNav from './TopNav';
import SubNav from './SubNav';

const NavWrapper = styled.div`
    background-color: rgba(45,45,45,0.98);
    display: flex;
    z-index: 9999;
    width: 100%;
    flex-direction: column;
`

const TopNavContent = styled.div`
    margin: 0 auto;
    height: 44px;
    max-width: 980px;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .apple-logo {
        width: 18px;
        height: 22px;
    }

    .search-logo {
        margin-top: 5px;
    }


    a {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-size: 14px;

        &:hover {
            opacity: .65;
        }
    }
`

const SubNavContent = styled.div`
    height: 92px;
    max-width: 980px;
    padding: 0 186px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-color: rgba(45,45,45,0.98);;

    img {
        max-height: 35px;
    }

    a {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-size: 11px;

        &:hover {
            opacity: .65;
        }
    }
`

class Nav extends React.Component {
    
    render() {
        return (
            <NavWrapper>
                <TopNavContent>
                    <a><img className="apple-logo" src={apple}/></a>
                    {this.props.navdata.map(tab => (
                        <TopNav 
                        key={tab.path}
                        tab={tab}
                        />
                    ))}
                    <a>Support</a>
                    <a><img className="search-logo" src={search}/></a>
                    <a><img className="shop-logo" src={shop}/></a>
                </TopNavContent>
                <SubNavContent>
                    <Route path="/mac" render={props => (
                        <SubNav {...props} navdata={this.props.navdata} />
                    )}></Route>
                    <Route path="/iphone" render={props => (
                        <SubNav {...props} navdata={this.props.navdata} />
                    )}></Route>
                    <Route path="/ipad" render={props => (
                        <SubNav {...props} navdata={this.props.navdata} />
                    )}></Route>
                    <Route path="/watch" render={props => (
                        <SubNav {...props} navdata={this.props.navdata} />
                    )}></Route>
                    <Route path="/tv" render={props => (
                        <SubNav {...props} navdata={this.props.navdata} />
                    )}></Route>
                    <Route path="/music" render={props => (
                        <SubNav {...props} navdata={this.props.navdata} />
                    )}></Route>
                </SubNavContent>
            </NavWrapper>
        )
    }
    
}

export default Nav;