import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const APIUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {matchData: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch(APIUrl)
    const data = await response.json()
    // console.log(data.teams)
    const formattedData = data.teams.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({
      matchData: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {matchData, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="header">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div id="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list">
            {matchData.map(item => (
              <TeamCard key={item.id} teamData={item} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
