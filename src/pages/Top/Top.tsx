import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import users from "../../stores/users";


const Top: FC = observer(() => {

  useEffect(() => {
    users.fetchAllUsers()
  }, [])

  if(users.isLoading === true) return <h1>Loading</h1>
  return (
    <main>
      {users.users.map((user) => (
        <h1>{user.fullName}</h1>
      ))}
    </main>
  );
  
})

export default Top;
