import   React, { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'

import Header from '../../components/header'

import getHomeData from '../../services/api-service'

const Home = () => {
  const dispatch = useDispatch()
  //const state = useSelector(state => state)
  const { homeReducer } = useSelector(state => state)

  return (
    <div>
      <div className="container">
        <Header text="Pizza Order">
          
        </Header>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home;