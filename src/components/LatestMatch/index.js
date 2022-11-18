import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch
  return (
    <div className="latest-match-details-container">
      <div className="latest-match-details-and-logo">
        <div className="latest-match">
          <p className="latest-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          className="latest-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <hr className="horizontal-line" />
      <div className="innings-container">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
