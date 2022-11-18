import {Component} from 'react'
import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: {}, recentMatches: [], bannerUrl: '', isLoading: true}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const formattedData = {
      id: latestMatchDetails.id,
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatches = data.recent_matches
    this.setState({
      latestMatch: formattedData,
      recentMatches,
      bannerUrl: teamBannerUrl,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {bannerUrl, latestMatch, recentMatches} = this.state

    return (
      <>
        <img className="team-banner" src={bannerUrl} alt="team banner" />
        <p>Latest Matches</p>
        <LatestMatch latestMatch={latestMatch} />
        <ul className="match-card-list">
          {recentMatches.map(item => (
            <MatchCard key={item.id} matchDetails={item} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="team-match-container">
        {isLoading ? (
          <div id="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
