import classes from './UserCard.module.css';

type Repos = {
  id: number,
  name: string,
  html_url: string,
  created_at: string
}

const UserCard: React.FC<{avatar_url: string; name: string; bio:string; followers: number; following:number; public_repos: number; repos: Repos[]}> = (props) => {
  return (
    <div className={classes.card}>
      <div>
        <img className={classes.avatar} src={props.avatar_url} alt={props.name} />
      </div>
      <div className={classes.userInfo}>
        <h2>{props.name}</h2>
        <p>{props.bio}</p>

        <ul className={classes.info}>
          <li>{props.followers}<strong> Followers </strong></li>
          <li>{props.following}<strong> Following </strong></li>
          <li>{props.public_repos}<strong> Repos </strong></li>
        </ul>

        <div>
          {props.repos
            .sort((a,b)=> Date.parse(b.created_at) - Date.parse(a.created_at))
            .slice(0,10)
            .map((repo) => 
              <a href={repo.html_url} key={repo.id} className={classes.repo}>{repo.name}</a>
            )
          }
        </div>


      </div>
    </div>
  );
}

export default UserCard;