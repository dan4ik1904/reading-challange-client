import { observer } from "mobx-react-lite";
import { FC } from "react";
import useTelegram from "../../hooks/useTelegram";


const Home: FC = observer(() => {

  const tg = useTelegram()

  if(tg) {
    const text = JSON.stringify(tg)
    return <p>{text}</p>
  }
  
  
})

export default Home;
