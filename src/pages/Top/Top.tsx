import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import users from "../../stores/users";
import Loading from "../../components/UI/Loading/Loading";
import UserTopCard from "../../components/UI/UserTopCard/UserTopCard";
import itemStyles from '../../css/Item.module.css'


const Top: FC = observer(() => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there are more pages to load

  useEffect(() => {
    users.resetTopUsers(); // Сбросим список пользователей при переходе на страницу
    setPage(1); // Сбросим страницу на первую
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!hasMore || users.isLoading) return; // Don't fetch if no more data or if already loading
      setIsLoadingMore(true);
      try {
        await users.fetchTopUsers(page, itemsPerPage);
        if (users.topUsers.length < page * itemsPerPage) {
          setHasMore(false); // Если количество пользователей меньше, чем ожидается, значит больше нет данных
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setHasMore(false); // Останавливаем загрузку при ошибке
      } finally {
        setIsLoadingMore(false);
      }
    };

    fetchUsers();
  }, [page]);

  const handleScroll = () => {
    const { innerHeight, scrollY } = window;
    const { offsetHeight } = document.documentElement;

    if (innerHeight + scrollY + 100 >= offsetHeight && !isLoadingMore && hasMore) {
      setPage((prevPage) => prevPage + 1); // Используем функцию обновления состояния
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (users.isLoading && page === 1) return <Loading />;

  return (
    <>
      <div className={itemStyles.items}>
        {users.topUsers.map((user) => (
          <UserTopCard key={user.id} user={user} />
        ))}
      </div>
      {isLoadingMore && <Loading isSmall />}
    </>
  );
});

export default Top;