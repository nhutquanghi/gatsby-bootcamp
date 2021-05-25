import React from 'react'
import { Link } from 'gatsby'

import * as headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={`header ${headerStyles.header}`}>
            <h1>
                <Link className={`title ${headerStyles.title}`} to="/">
                    Nhựt Quang
                </Link>
            </h1>
            <nav>
                <ul className={`navList ${headerStyles.navList}`}>
                    <li>
                        <Link className={`navItem ${headerStyles.navItem}`} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={`navItem ${headerStyles.navItem}`} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={`navItem ${headerStyles.navItem}`} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={`navItem ${headerStyles.navItem}`} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header