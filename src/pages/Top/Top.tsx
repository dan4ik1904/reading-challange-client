import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import users from "../../stores/users";
import './Top.css';
import Loading from "../../components/Loading/Loading";
import UserTopCard from "../../components/Top/UserTopCard";

const Top: FC = observer(() => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there are more pages to load

  useEffect(() => {
    const fetchUsers = async () => {
      if (!hasMore) return; // Don't fetch if no more data
      setIsLoadingMore(true);
      try {
        await users.fetchTopUsers(page, itemsPerPage);
      } catch (error) {
        console.error("Error fetching users:", error);
        setHasMore(false); // Stop fetching on error
      } finally {
        setIsLoadingMore(false);
      }
    };

    if (!users.isLoading && !isLoadingMore && hasMore) {
      fetchUsers();
    }
  }, [page, hasMore]);


  const handleScroll = () => {
    const { innerHeight, scrollY } = window;
    const { offsetHeight } = document.documentElement;

    if (innerHeight + scrollY + 100 >= offsetHeight && !users.isLoading && !isLoadingMore && hasMore) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); //Added handleScroll to dependencies

  if (users.isLoading && page === 1) return <Loading />;

  return (
    <main>
      <div className="users items">
        {users.users.map((user) => (
          <UserTopCard key={user.id} user={user} />
        ))}
      </div>
      {isLoadingMore && <Loading isSmall />}
    </main>
  );
});

export default Top;