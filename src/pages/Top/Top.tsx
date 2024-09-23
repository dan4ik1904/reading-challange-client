import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import users from "../../stores/users";
import './Top.css'
import Loading from "../../components/Loading/Loading";
import Item from "../../components/Item/Item";


const Top: FC = observer(() => {

  useEffect(() => {
    users.fetchTopUsers()
  }, [])

  if(users.isLoading === true) return <Loading />
  return (
    <main>
      <div className="users">
        {users.users.map((user) => (
          <>
            <Item h3={user.fullName} h4={user.className} books={user.booksCount} pagesCount={user.pagesCount}></Item>
          </>
        ))
        }
      </div>
      
    </main>
  );
  
})

export default Top;
