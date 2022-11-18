import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl, id} = teamData
  return (
    <Link className="link-team " to={`/team-matches/${id}`}>
      <li className="team-info">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
