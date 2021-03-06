/* eslint-disable no-restricted-globals */
import { useCallback, useEffect, useState } from "react";

import UserForm from "../components/UserForm/UserForm";
import UserCard from "../components/UserCard/UserCard";
import UserService from "../services/UserService";

import classes from './Home.module.css';
import User from "../models/user";

const Home: React.FC = () => {
  const [users, setUsers] = useState<string>();
  const [repos, setRepos] = useState<any[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [userList, setUserList] = useState<User>();

  const loadUsers = useCallback( async () => {
    try{   
      setIsLoading(true);
      if(users){
        const usersList = await UserService.listUser(users);
        setUserList(usersList); 
      }
    }catch(error){
      console.error(error);
      setHasError(true);
    } finally{
      setIsLoading(false);
    }
  }, [users]);

  const loadRepos = useCallback( async () => {
    try{   
      setIsLoading(true);
      if(users){
        const reposList = await UserService.listRepos(users);
        
        setRepos(reposList); 
      }
    }catch(error){
      console.error(error);
      setHasError(true);
    } finally{
      setIsLoading(false);
    }
  }, [users]);

  useEffect(()=>{
    loadUsers();
    loadRepos();
  },[loadUsers, loadRepos]);

  if(isLoading){  
    return <p>Loading...</p>
  }

  return (
    <body className={classes.form}>
      <UserForm setUsers={setUsers}/>
      <main>
        {!isLoading && !hasError && userList && repos &&(
          <UserCard avatar_url={userList.avatar_url} name={userList.name} bio={userList.bio} followers={userList.followers} following={userList.following} public_repos={userList.public_repos} repos={repos}/>
        )}
      </main>
    </body>
  );
}

export default Home;

