import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useTelegram from "../../hooks/useTelegram";
import Loading from "../../components/Loading/Loading";
import users from "../../stores/users";
import InfoLitsey from "../../components/Home/InfoListsey";
import TopFive from "../../components/Home/TopFive";


const Home: FC = observer(() => {

  const { tgID } = useTelegram()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
      const fetch = async() => {
          await users.fetchTopFiveUsers() 
      }
      fetch()
  }, [])

  useEffect(() => {
    if(tgID) users.fetchClassmaets(tgID)
  }, [tgID])

  if(users.isLoading) return <Loading />
  return (
      <div className="home__items">
          <InfoLitsey />
          {users.users && (
              <TopFive title="Топ лицея" users={users.topFiveUsers}/>    
          )
         }
          {users.classmates && isAuthenticated ? (
              <TopFive title={"Топ класса"} users={users.classmates}/>    
          ) : (
              <></>
          )}
      </div>
  )
})

export default Home;

