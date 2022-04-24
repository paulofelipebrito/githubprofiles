

const UserCard: React.FC<{avatar_url: string; name: string; bio:string; followers: number; following:number; public_repos: number;}> = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.avatar_url} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>{props.bio}</p>

        <ul>
          <li>{props.followers}</li>
          <li>{props.following}</li>
          <li>{props.public_repos}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;