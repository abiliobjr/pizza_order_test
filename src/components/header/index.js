import { React } from 'react'

const Header = (props) => {
  return (
    <div>
      <img src="http://placehold.it/150x50" alt="Logo" title="Pizza Order" className="logo"/>
      <h1>{props.text}</h1>
      {props.children}
    </div>
  )
}

export default Header