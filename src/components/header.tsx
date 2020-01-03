import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header: React.StatelessComponent<{ siteTitle: string }> = ({
  siteTitle,
}) => (
  <nav className="navbar navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        {siteTitle}
      </Link>
    </div>
  </nav>
)

export default Header
