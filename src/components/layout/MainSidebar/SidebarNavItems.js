import React from "react";
import { Nav } from "shards-react";
import { Store } from "../../../flux";
import { Link } from "react-router-dom";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    return (
        <Nav className="nav--no-borders flex-column">
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" id="accordionSidebar">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
          <a className="nav-link collapsed dropdown-toggle nav-link" href="#collapseMantenedor" data-toggle="collapse" aria-expanded="false" aria-controls="collapseMantenedor">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Mantenedores</span>
          </a>
          <div id="collapseMantenedor" className="collapse">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">Colors</a>
              <a className="collapse-item" href="utilities-border.html">Borders</a>
              <a className="collapse-item" href="utilities-animation.html">Animations</a>
              <a className="collapse-item" href="utilities-other.html">Other</a>
            </div>
          </div>
        </li>
          </ul>
        </Nav>
    );
  }
}

export default SidebarNavItems;
