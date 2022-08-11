import { Button, Nav, NavItem } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'
import user1 from '../assets/images/users/user4.jpg'
import probg from '../assets/images/bg/download.jpg'

const navigation = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'bi bi-speedometer2',
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: 'bi bi-bell',
  },
  {
    title: 'Visits',
    href: '/visits',
    icon: 'bi bi-patch-check',
  },
  {
    title: 'Log A Sale',
    href: '/logsale',
    icon: 'bi bi-hdd-stack',
  },
  {
    title: 'Appointments',
    href: '/appointments',
    icon: 'bi bi-layout-split',
  },
  {
    title: 'Support',
    href: '/support',
    icon: 'bi bi-textarea-resize',
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: 'bi bi-columns',
  },
  {
    title: 'Account',
    href: '/account',
    icon: 'bi bi-people',
  },
]

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById('sidebarArea').classList.toggle('showSidebar')
  }
  let location = useLocation()

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex">
          <img
            src={localStorage.getItem('avatar') || user1}
            alt="user"
            width="50"
            className="rounded-circle"
          />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">
          {!window.localStorage.getItem('fullname')
            ? 'Sbusiso Nkala (active)'
            : window.localStorage.getItem('fullname')}
        </div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                onClick={showMobilemenu}
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? 'active nav-link py-3'
                    : 'nav-link text-secondary py-3'
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_self"
            className="mt-3"
            href="http://localhost:3000/"
            onClick={() => {
              window.localStorage.removeItem('token')
            }}
          >
            Logout
          </Button>
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar
