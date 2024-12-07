import React, { useState, FormEvent } from 'react';
import CustomSelect from '../../components/Select/Select';
import CustomSelectArray from '../../components/Select/SelectArray';
import users from '../../stores/users';
import useTelegram from '../../hooks/useTelegram';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Loading from '../../components/Loading/Loading';


const Auth: React.FC = observer(() => {
    const {tgID} = useTelegram()
    const [username, setUsername] = useState<string>('');
    const [classname, setClassname] = useState<string>('');
    const [students, setStudents] = useState<Array<string>>([])
    const [isOpenStudents, setIsOpenStudents] = useState(false)

    const navigate = useNavigate()

    const classes = [
        { value: 1, label: '5А' },
        { value: 2, label: '5Б' },
        { value: 3, label: '6А' },
        { value: 4, label: '6Б' },
        { value: 5, label: '7А' },
        { value: 6, label: '7Б' },
        { value: 7, label: '8А' },
        { value: 8, label: '8Б' },
        { value: 9, label: '9А' },
        { value: 10, label: '9Б' },
        { value: 11, label: '10' },
        { value: 12, label: '11' },
    ];

    type StudentsByClass = {
        [classId: number]: Array<string>
    }

    const studentsWithClass: StudentsByClass = {
        1: [
          "Ахметов Гимран Арманович",
          "Ахтямов Дамир Маратович",
          "Беркутов Ранэль Рустамович",
          "Бурганов Салават Тимурович",
          "Валеев Инсаф Фаизович",
          "Гарифуллин Алмаз Рамилевич",
          "Евтеев Даниил Александрович",
          "Зарипов Амир Ренатович",
          "Исламов Данил Русланович",
          "Кутуев Роман Александрович",
          "Махмутов Иван Дмитриевич",
          "Миннегулов Самир Элвирович",
          "Николаев Артур Михайлович",
          "Пастушенко Данил",
          "Питов Усман Сельверович",
          "Рахимкулов Азамат Азатович",
          "Фахрутдинов Самат Динарович",
          "Хабибуллин Карим Айратович",
          "Шалаумов Филипп Степанович",
          "Шарипов Наиль Ильдарович",
          "Шайдуллин Тимур Ильшатович"
        ],
        2: [
          "Абдуллаев Аким",
          "Аглямов Амир Ильдарович",
          "Азизов Даниил Тимурович",
          "Азиуллин Тимур Маратович",
          "Берданов Артем Иванович",
          "Бурнин Дмитрий Максимович",
          "Габдракипов Ислам Радикович",
          "Гайнуллин Рифат Русланович",
          "Гасимов Самир Виленович",
          "Джафаров Сафар Махир оглы",
          "Ибрагимов Камиль Айратович",
          "Каюмов Амиль Ирекович",
          "Магазов Тимур Наилевич",
          "Михайлов Ярослав Евгеньевич",
          "Мусин Марат Рустемович",
          "Сайфиев Камиль Ренатович",
          "Салимов Минтимер Рамилевич",
          "Тазиев Гумар Ринатович",
          "Хабибуллин Бахтияр Русланович",
          "Хайруллин Тимур Ильдусович",
          "Шамсутдинов Артем Василевич"
        ],
        3: [
            "Айметдинов Нурсултан Асимович",
            "Андреев Платон Владиславович",
            "Багавиев Самат Рустамович",
            "Вершинин Гордей Александрович",
            "Гайнутдинов Далиль Ильнарович",
            "Гимранов Самир Рустемович",
            "Зайнуллин Амир Илнурович",
            "Ибраев Булат Ильшатович",
            "Калимуллин Разиль Наилович",
            "Каримов Дамир Тимурович",
            "Кашапов Абдулла Ильшатович",
            "Мингалиев Наиль Раилевич",
            "Мифтахов Малик Ильдарович",
            "Мубаракшин Ильгиз Рашитович",
            "Насыйров Адель Булатович",
            "Нуриев Тимур Илдарович",
            "Самигуллин Амир Рамисович",
            "Сибгатуллин Кирам Ленарович",
            "Тимерханов Амир Евгеньевич",
            "Тураев Никита Александрович",
            "Хасанов Карим Ильдарович",
            "Хисматуллин Салих Фаридович",
            "Хузин Булат Денисович",
            "Шархемуллин Тимур Ульфатович",
            "Ялчын Эмирхан Шерефевич",
            "Фаттахов Вильдан Айдарович"
        ],
        4: [
            "Вакилов Ильшат Наилович",
            "Володин Аким Владиславович",
            "Ганиев Саид Маратович",
            "Давлетшин Кирам Ильнурович",
            "Жуков Данил Юрьевич",
            "Зайнулин Эмиль Маратович",
            "Зарипов Айдар Ренатович",
            "Камалиев Марк Марсович",
            "Кузьмин Арсений Сергеевич",
            "Латипов Ильнур Ильдарович",
            "Мухтаров Раиль Азатович",
            "Никонов Максим Алексеевич",
            "Новиков Илья Алексеевич",
            "Приказчиков Родион Алексеевич",
            "Сахибгареев Айдар Марсович",
            "Сунгатов Инсаф Русланович",
            "Титов Мирон Евгеньевич",
            "Урезов Семен Алексеевич",
            "Фазлиев Дамир Айратович",
            "Хабибуллин Ислам Ильнурович",
            "Хрущев Демид Сергеевич",
            "Хрущев Федор Максимович",
            "Чернышов Мирон Романович",
            "Юнусов Сабир Ленарович",
            "Петров Владислав Дмитриевич",
            "Гарифуллин Амирхан Айдарович"
        ],
        5: [
            "Аллун Ильяс Фейсалович",
            "Артемьев Ярослав Артемович",
            "Валиев Нариман Ренатович",
            "Галимов Радмир Русланович",
            "Гиззатуллин Рамазан Алмазович",
            "Долганов Владимир Андреевич",
            "Дронов Артемий Романович",
            "Карнаухов Глеб Дмитриевич",
            "Клевлин Евгений Александрович",
            "Кондратьев Артур Вадимович",
            "Кузьмин Егор Павлович",
            "Мингазов Булат Маратович",
            "Михеев Захар Юрьевич",
            "Мухаметшин Салават Даниярович",
            "Набиуллин Амир Ильмирович",
            "Охотников Глеб Александрович",
            "Сираев Нияз Ильназович",
            "Халиков Ильяс Ильнурович",
            "Хафизов Тимур Айратович",
            "Ханнанов Карим Ильдарович",
            "Шарафуллин Салават Линарович",
            "Шигапов Тимур Азатович"
        ],
        6: [
            "Абзалов Аскар Маратович",
            "Ахметзянов Камиль Рустемович",
            "Ахтямов Булат Маратович",
            "Гараев Салих Радикович",
            "Гафиятов Мансур Ильнурович",
            "Грушев Роман Эдуардович",
            "Добротворский Даниял Алексеевич",
            "Зайнуллин Амир Ильдарович",
            "Зайнуллин Юсуф Равилевич",
            "Зигангиров Абдулькарим Ленарович",
            "Исламов Нияз Динарович",
            "Калашников Михаил Александрович",
            "Каримов Салават Фаритович",
            "Кашапов Рафаэль Рамилевич",
            "Можаев Даниял Константинович",
            "Мурзин Вадим Максимович",
            "Рябов Владислав Денисович",
            "Сафин Фатих Ришатович",
            "Сулейманов Султан Дмитриевич",
            "Тайманов Сергей Алексеевич",
            "Туйчин Шамиль Ленарович",
            "Хайрутдинов Зиннур Расулевич",
            "Цыганов Илья Алексеевич",
            "Шамилов Юсуф Ильнарович",
            "Юсупов Даниил Русланович"
        ],
        7: [
           "Абдуллин Тимур Давирович",
            "Аглямов Райнур Рустамович",
            "Артемьев Артем Романович",
            "Ахунов Булат Маратович",
            "Бадрутдинов Тимур Эдуардович",
            "Баянов Андрей Владимирович",
            "Бендюков Савелий Алексеевич",
            "Габдрахманов Дамир Ильнарович",
            "Гарипов Карим Айдарович",
            "Ермолаев Илья Дмитриевич",
            "Зимирев Артур Евгеньевич",
            "Исламов Камиль Зиннурович",
            "Курманов Карим Ринатович",
            "Мартышев Илья Сабирович",
            "Мусин Амирхан Рустемович",
            "Мухаметгалиев Данис Ильнарович",
            "Пермяков Олег Андреевич",
            "Сайфутдинов Эдгар Радикович",
            "Сытин Михаил Константинович",
            "Усманов Константин Дмитриевич",
            "Хаертдинов Самат Русланович",
            "Шайдуллин Айбулат Айдарович",
            "Шандыров Роман Витальевич",
            "Шикин Глеб Максимович",
            "Юсупов Билал Ильнурович" 
        ],
        8: [
            "Ахметов Аяз Фанилевич",
            "Ахметшин Рамир Русланович",
            "Аюпов Амир Динарович",
            "Баев Самир Ленарович",
            "Бикулов Степан Александрович",
            "Вазиев Ислам Русланович",
            "Гапонов Степан Евгеньевич",
            "Головачев Глеб Владимирович",
            "Денисов Ярослав Сергеевич",
            "Зарипов Анвар Азатович",
            "Ибрагимов Ильяс Рамилевич",
            "Колпаков Матвей Евгеньевич",
            "Корнилов Вадим Дмитриевич",
            "Крешков Даниил Вячеславович",
            "Лобанов Кирилл Дмитриевич",
            "Морозов Родион Евгеньевич",
            "Мусин Матвей Александрович",
            "Мухаметшин Давид Рустамович",
            "Савельев Тимур Дмитриевич",
            "Санников Егор Иванович",
            "Тагиров Анвар Динарович",
            "Федоров Макар Александрович",
            "Хузеев Зульфат Альбертович",
            "Шаймуратов Азамат Ильгизович",
            "Якимов Максим"
        ],
        9: [
            "Анисимов Павел Арсеньевич",
            "Ахметшин Амир Русланович",
            "Биктагиров Камиль Вахитович",
            "Биктагиров Нияз Вахитович",
            "Гаврилов Вадим Павлович",
            "Гатауллин Данияр Айратович",
            "Дмитриев Глеб Николаевич",
            "Ибатуллин Амир Азатович",
            "Измайлов Артем Маратович",
            "Калимуллин Амир Наилевич",
            "Киямов Аяз Русланович",
            "Малыгин Егор Евгеньевич",
            "Минебаев Вахит Азатович",
            "Муртазин Сайдаш Маратович",
            "Николаев Михаил Андреевич",
            "Нуриев Эмиль Наильевич",
            "Пастухов Игорь Николаевич",
            "Сахибгареев Мурат Марсович",
            "Сычев Дмитрий Анатольевич",
            "Сунгатов Ильсур Русланович",
            "Федоров Максим Николаевич",
            "Федоров Степан Артемович",
            "Чернышов Илья Александрович",
            "Шакиров Алим Земфирович"
        ],
        10: [
            "Андреев Данис Артемович",
            "Ахметзянов Саид Ленарович",
            "Ганиев Тимур Эрикович",
            "Ершин Георгий Сергеевич",
            "Колесников Герман Вадимович",
            "Красильников Кирилл Артемович",
            "Макарихин Владислав Денисович",
            "Мугизов Ильдар Ахтямович",
            "Мусин Алмаз Альбертович",
            "Мухаметшин Рустем Артурович",
            "Никонов Михаил Алексеевич",
            "Новиков Николай Олегович",
            "Рафиков Али Артурович",
            "Сабиров Артур Василевич",
            "Сармаев Максим Валерьевич",
            "Упаев Семен Альбертович",
            "Файзуллин Тимур Айратович",
            "Федотов Кирилл Вячеславович",
            "Филиппов Александр Сергеевич",
            "Хафизов Тимур Альбертович",
            "Шаяхметов Самир Ильясович",
            "Юнусов Эдуард Ильназович",
            "Юсупов Альмир Маратович",
            "Ягудин Альфред Альбертович"
        ],
        11: [
            "Аллун Абдульбари Фейсал",
            "Багавиев Талгат Рустамович",
            "Большаков Марк Евгеньевич",
            "Валиуллин Ильяс Альбертович",
            "Галиев Рашид Русланович",
            "Галимуллин Самат Маратович",
            "Замалетдинов Раиль Маратович",
            "Зиганшин Билал Газинурович",
            "Ильин Дмитрий Викторович",
            "Казаков Богдан Денисович",
            "Капралов Дамир Станиславович",
            "Кашапов Арсен Русланович",
            "Киямов Самат Рустемович",
            "Миндубаев Тимур Русланович",
            "Михайлов Данила Евгеньевич",
            "Мухаметшин Самат Рустамович",
            "Рустаев Самир Рустамович",
            "Семенов Дмитрий Владимирович",
            "Тазеев Ильшат Ильдарович",
            "Тураев Кирилл Александрович",
            "Усманов Булат Ильдарович",
            "Фатыхов Камиль Ленарович",
            "Халиуллин Тимерлан Робертович",
            "Хисамиев Ильяс Ильнарович",
            "Хузеев Эльдар Айратович",
            "Шабуров Тимур Ринатович",
            "Шайхутдинов Самир Ильдарович",
            "Якушев Глеб Евгеньевич",
            "Яруллин Ильяс Фаязович"
        ],
        12: [
            "Абдуллин Данис Зуфарович",
            "Айтуганов Айдар Ильдарович",
            "Андреев Валерий Вячеславович",
            "Гайсин Рамазан Салаватович",
            "Григорьев Эдуард Васильевич",
            "Калимуллин Айзат Наилович",
            "Киямутдинов Камиль Айратович",
            "Кожевников Павел Александрович",
            "Колзин Матвей Андреевич",
            "Кудашов Камиль Азатович",
            "Кузнецов Амир Игоревич",
            "Насибуллин Карим Маратович",
            "Обманщин Евгений Алексеевич",
            "Сабиров Айнур Наилевич",
            "Сайфуллин Рафаэль Рамисович",
            "Хазиев Айдар Алмазович",
            "Хамидуллин Ислам Альбертович",
            "Хамидуллин Райнур Ринатович",
            "Хисамеев Камиль Марселевич",
            "Шакуров Айзат Рифатович",
            "Шарифуллин Булат Анасович",
            "Швецов Вячеслав Евгеньевич"
        ]

      };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const onChangeClass = (value: number, label: string) => {
        setClassname(label)
        setStudents(studentsWithClass[value])
    }


    const send = async() => {
        if(username && classname) {
            users.auth({
                fullName: username,
                className: classname,
                tgId: tgID
            })
            .finally(() => {
                navigate('/')
            })
            
        }
    }

    if(users.isLoading) return <Loading />
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={{ backgroundColor: '#1d1d1d', borderRadius: '10px', padding: '2em', marginTop: '5em' }}>
                        <h2 className="text-center" style={{ color: '#fff' }}>Авторизиция</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label" style={{ color: '#888' }}>Выберите класс</label>
                                <CustomSelect onClick={() => {setIsOpenStudents(false)}} options={classes} onChange={onChangeClass} placeholder='Класс'/>
                            </div>
                            {students.length > 0 && (
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ color: '#888' }}>Выберите имя</label>
                                    <CustomSelectArray setIsOpen={setIsOpenStudents} isOpen={isOpenStudents} options={students} onChange={setUsername} placeholder='Имя'/>
                                </div>
                            )}
                            
                            <button onClick={send} type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#646cff', border: 'none' }}>
                                Авторизироваться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Auth;