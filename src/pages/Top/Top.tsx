import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import users from "../../stores/users";
import './Top.css'
import Loading from "../../components/Loading/Loading";
import UserTopCard from "../../components/Top/UserTopCard";


const Top: FC = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
      if(users.endFetch !== true) users.fetchTopUsers(currentPage, 6);
  }, [currentPage]);

  const handleScroll = () => {
      if (
          window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.offsetHeight
      ) {
          if (!users.isLoading && !users.error) { // Убедитесь, что нет утечек данных
              setCurrentPage((prev) => prev + 1); // Увеличиваем страницу, чтобы подгрузить следующих пользователей
          }
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  if (users.isLoading && currentPage === 1) return <Loading />;
  
  return (
    <main>
      <div className="users items">
        {users.users.map((user) => (
          <UserTopCard key={user.id} user={user} />
        ))}
      </div>
      {users.isLoading && <Loading />} {/* Показываем загрузку при подгрузке следующих пользователей */}
    </main>
  );
  
})

export default Top;