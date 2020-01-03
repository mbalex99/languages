/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import Sidebar from "./sidebar"
import classNames from "classnames"

interface State {
  toggled: boolean
}

export default class Layout extends React.Component<any, State> {
  state = {
    toggled: false,
  }

  toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    this.setState({
      toggled: !this.state.toggled,
    })
  }

  render() {
    
    const wrapperClass = classNames({
      "d-flex": true,
      "toggled": this.state.toggled
    })

    return (
      <div className={wrapperClass} id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button
              className="btn btn-primary"
              id="menu-toggle"
              onClick={this.toggle}
            >
              Toggle Menu
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">{this.props.children}</div>
        </div>
      </div>
    )
  }
}
