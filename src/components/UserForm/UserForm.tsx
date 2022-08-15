import {useRef} from 'react';

import classes from './UserForm.module.css';

const UserForm: React.FC<{setUsers: (user: string) => void}> = (props) => {
  const usernameInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: any) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current!.value;
    
    props.setUsers(enteredUsername);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input type="text" id="search" placeholder="Search a Github User" className={classes.input} ref={usernameInputRef}/>
    </form>
  )
}

export default UserForm;
