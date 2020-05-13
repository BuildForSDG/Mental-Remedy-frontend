import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GiHealing, GiDoctorFace
} from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import NavItem from './NavItem';

class NavList extends Component {
  render() {
    const { menuOpen } = this.props;
    return (
        <ul className="nav-list">
            <NavItem linkDes="Home" icon={<FaHome/>} id="home" menuOpen={menuOpen} />
            <NavItem linkDes="About" icon={<IoIosPeople/>} menuOpen={menuOpen} />
            <NavItem linkDes="Mental Disorders" icon={<GiHealing/>} menuOpen={menuOpen} />
            <NavItem linkDes="Specialists" icon={<GiDoctorFace/>} menuOpen={menuOpen} />
        </ul>
    );
  }
}

NavList.propTypes = {
  // Name all the props and set their type
  menuOpen: PropTypes.bool
};

export default NavList;
