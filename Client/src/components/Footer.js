import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
        <footer>
           <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/onboarding">Onboarding</Link></li>
                <li><Link to="/users">Users up1</Link></li>
                <li><Link to="/admin-cms">Admin-cms</Link></li>
             </ul>
        </footer>
  )
}