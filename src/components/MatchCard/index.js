import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const formattedData = {
    id: matchDetails.id,
    umpires: matchDetails.umpires,
    result: matchDetails.result,
    manOfTheMatch: matchDetails.man_of_the_match,
    date: matchDetails.date,
    venue: matchDetails.venue,
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    firstInnings: matchDetails.first_innings,
    secondInnings: matchDetails.second_innings,
    matchStatus: matchDetails.match_status,
  }
  const {result, competingTeam, competingTeamLogo, matchStatus} = formattedData
  const status = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card-container">
      <div>
        <img
          className="match-card-image"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="match-card-name">{competingTeam}</p>
        <p>{result}</p>
      </div>
      <p className={`text ${status}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
