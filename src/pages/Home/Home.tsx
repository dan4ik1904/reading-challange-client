import { observer } from "mobx-react-lite";
import { FC } from "react";
import useAuth from "../../hooks/useAuth";
import NoAuthorizatHome from "./NoAuthorizatHome";
import AuthorizatHome from "./AuthorizatHome";
import useTelegram from "../../hooks/useTelegram";
import Loading from "../../components/Loading/Loading";


const Home: FC = observer(() => {

  const { isAuthenticated, loading, data } = useAuth()
  const { tg } = useTelegram()

  console.log(data)
  console.log(tg)

  if(loading === true) return <Loading />

  return (
    <>
    { isAuthenticated ? (
        <>
          {tg?.initDataUnsafe?.user?.id}
          <AuthorizatHome />
        </>
        
      ) : (
        <>
          {tg?.initDataUnsafe?.user?.id}
          <NoAuthorizatHome />
        </>
        
      )
    }
    </>
   
  )
  
  
})

export default Home;
