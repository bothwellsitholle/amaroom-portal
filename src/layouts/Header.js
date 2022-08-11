import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  Collapse,
  Nav,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from 'reactstrap';
// import Logo from "./Logo";
import { ReactComponent as LogoWhite } from '../assets/images/logos/materialprowhite.svg';
import user1 from '../assets/images/users/user4.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  let navigate = useNavigate();

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById('sidebarArea').classList.toggle('showSidebar');
  };
  return (
    <Navbar color='primary' dark expand='md' className='fix-header'>
      <div className='d-flex align-items-center'>
        <div className='d-lg-block d-none me-5 pe-3'>
          {/* <Logo /> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <img
              src='https://amaroomamahle.co.za/wp-content/uploads/2021/11/AMAROOM.png'
              height='50'
              width='100'
              alt='logo'
            /> */}
            <LogoWhite />
          </div>
        </div>
        <NavbarBrand href='/'>
          <LogoWhite className=' d-lg-none' />
        </NavbarBrand>
        <Button
          color='primary'
          className=' d-lg-none'
          onClick={() => showMobilemenu()}
        >
          <i className='bi bi-list'></i>
        </Button>
      </div>
      <div className='hstack gap-2'>
        <Button
          color='primary'
          size='sm'
          className='d-sm-block d-md-none'
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className='bi bi-x'></i>
          ) : (
            <i className='bi bi-three-dots-vertical'></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className='me-auto' navbar>
          {/* <NavItem>
            <Link to="/starter" className="nav-link">
              Starter
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color='transparent'>
            <img
              src={localStorage.getItem('avatar') || user1}
              alt='profile'
              className='rounded-circle'
              width='50'
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>{window.localStorage.getItem('fullname') || 'Sbusiso Nkala'}</DropdownItem>
            <DropdownItem onClick={() => {navigate('/settings')}}>Settings</DropdownItem>
            <DropdownItem onClick={() => {navigate('/account')}}> Edit Profile</DropdownItem>
            {/* <DropdownItem divider />
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>
              <span
                href='http://localhost:3000/'
                onClick={() => {
                  console.log('logout clicked!');
                  window.location.reload();
                  window.localStorage.removeItem('token');
                  navigate("/");
                }}
              >
                Logout
              </span>
            </DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
