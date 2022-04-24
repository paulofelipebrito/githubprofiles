class User {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;

  constructor(avatar_url: string, name: string, bio: string, followers: number, following: number, public_repos: number) {
    this.avatar_url= avatar_url;
    this.name= name;
    this.bio= bio;
    this.followers= followers;
    this.following= following;
    this.public_repos= public_repos;
  }
}

export default User;