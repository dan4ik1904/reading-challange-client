import { useEffect, useState } from 'react';
import useTelegram from './useTelegram';
import api from '../api/axios';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const { tg } = useTelegram();

    useEffect(() => {
        const checkAuth = async () => {
            setLoading(true);

            if (!tg || !tg.initDataUnsafe || !tg.initDataUnsafe.user || !tg.initDataUnsafe.user.id) {
                console.error('Telegram API не инициализирован или ID пользователя недоступен');
                setLoading(false);
                return;
            }

            try {
                const response = await api.get('/auth/me', {
                    headers: {
                        Authorization: tg.initDataUnsafe.user.id
                    }
                });

                const dataRes = response.data;
                setData(dataRes);
                console.log(response);
                console.log(tg);

                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Ошибка при проверке аутентификации:', error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [tg]);

    return { isAuthenticated, loading, data };
};

export default useAuth;
