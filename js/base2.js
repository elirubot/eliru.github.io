function cercaa() {

var a = document.getElementById("input").value;
var b = a.replace(/["%","&","€","!","?","*","=","@","$"]/g,"");
var c = b.replace(/ /g,"");
var d = c.toLowerCase();

var titolo = document.getElementById("titolo");

var output = document.getElementById("output");

condition=false;

var paesia = [
{"text":"https://vk.com/id514199508","namefemale":"Ашот Агаджанян","fact":"Вз отзывы","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id514199508"},
{"text":"https://vk.com/mamaev_best","namefemale":"Ашот Агаджанян","fact":"Вз отзывы","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id514199508"}, 

{"text":"https://vk.com/childrenpizdik","namefemale":"Артём Медведев","fact":"Кидок - кинул на 145р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id600690367"},
{"text":"https://vk.com/id600690367","namefemale":"Артём Медведев","fact":"Кидок - кинул на 145р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id600690367"}, 


{"text":"https://vk.com/id617728793","namefemale":"Артем Шонхоров","fact":"Скам","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id617728793"},
{"text":"https://vk.com/id615299453","namefemale":"Давид Пираев","fact":"Скам","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id615299453"}, 

{"text":"https://vk.com/id638164910","namefemale":"Максим Громов","fact":"Скам","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id638164910"},
{"text":"https://vk.com/id569203067","namefemale":"Сергей Марвинов","fact":"Кидок - кинул на 700р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id569203067"}, 

{"text":"https://vk.com/id434282525","namefemale":"Иван Соколов","fact":"Вз отзывы","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id434282525"},
{"text":"https://vk.com/id546011111","namefemale":"Дима Аняня(Прогован)","fact":"Кидок.","number":"+89106840842","group":"Не удалось найти ","vechnaya":"https://vk.com/id546011111"}, 

{"text":"https://vk.com/id635715285","namefemale":"Жак Фреско","fact":"Скам","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id635715285"},
{"text":"https://vk.com/id658054146","namefemale":"Степан Матвеев","fact":"Вз отзывы","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id658054146"}, 

{"text":"https://vk.com/id583081130","namefemale":"Ваня Бро","fact":"Не верьте кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id583081130"},
{"text":"https://vk.com/gta5boosteasy5","namefemale":"ПРОКАЧКА ГТА5  НАКРУТКА ГТА БУСТ","fact":"Обманули на 150р","number":"Не удалось найти ","group":"https://vk.com/gta5boosteasy5","vechnaya":"https://vk.com/public152112376"}, 

{"text":"https://vk.com/public152112376","namefemale":"ПРОКАЧКА ГТА5  НАКРУТКА ГТА БУСТ","fact":"Обманули на 150р","number":"Не удалось найти ","group":"https://vk.com/gta5boosteasy5","vechnaya":"https://vk.com/public152112376"},
{"text":"https://vk.com/id506930544","namefemale":"Данил Будько","fact":"Предлагает скам 50 на 50","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id506930544"},

{"text":"https://vk.com/verhunov_trade","namefemale":"Илья Верхунов","fact":"Кидок - кинул на 900р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id579254755"},
{"text":"https://vk.com/id579254755","namefemale":"Илья Верхунов","fact":"Кидок - кинул на 900р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id579254755"}, 

{"text":"https://vk.com/id544923980","namefemale":"Даня Королёв","fact":"Кидок - кинул на аккаунт в Standoff2.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id544923980"},
{"text":"https://vk.com/sk1pyyy_durak","namefemale":"Даня Королёв","fact":"Кидок - кинул на аккаунт в Standoff2.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id544923980"}, 

{"text":"https://vk.com/slip.slide","namefemale":"Марсель Меркулов","fact":"Кидок - кинул на 70р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id631693436"},
{"text":"https://vk.com/id631693436","namefemale":"Марсель Меркулов","fact":"Кидок - кинул на 70р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id631693436"}, 

{"text":"https://vk.com/marlov_5","namefemale":"Андрей Счатов","fact":"Взаимные отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id651013129"},
{"text":"https://vk.com/id651013129","namefemale":"Андрей Счатов","fact":"Взаимные отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id651013129"}, 

{"text":"https://vk.com/why_morozov","namefemale":"Максим Морозов","fact":"Скамер","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id569860590"},
{"text":"https://vk.com/id569860590","namefemale":"Максим Морозов","fact":"Скамер","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id569860590"}, 

{"text":"https://vk.com/mosqw","namefemale":"Павел Московский","fact":"Продажа страницы с отзывами","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id684505935"},
{"text":"https://vk.com/id684505935","namefemale":"Павел Московский","fact":"Продажа страницы с отзывами","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id684505935"}, 

{"text":"https://vk.com/mepandayt","namefemale":"Денис Гончаров","fact":"Кидок - кинул на 800р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id550489933"},
{"text":"https://vk.com/id550489933","namefemale":"Денис Гончаров","fact":"Кидок - кинул на 800р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id550489933"}, 

{"text":"https://vk.com/xarpasov","namefemale":"Андрей Харпачов","fact":"Предлагает скамнуть","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id657926301"},
{"text":"https://vk.com/id657926301","namefemale":"Андрей Харпачов","fact":"Предлагает скамнуть","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id657926301"}, 

{"text":"https://vk.com/denis_karpov20","namefemale":"Денис Карпов","fact":"Кидок - кинул на 550р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id683114729"},
{"text":"https://vk.com/id683114729","namefemale":"Денис Карпов","fact":"Кидок - кинул на 550р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id683114729"}, 

{"text":"https://vk.com/isakov_garant_official","namefemale":"Николай Исаков","fact":"Кидок - кинул на 550р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id466569521"},
{"text":"https://vk.com/id466569521","namefemale":"Николай Исаков","fact":"Кидок - кинул на 550р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id466569521"}, 

{"text":"https://vk.com/isakov_garant_official","namefemale":"Николай Исаков","fact":"Кидок - кинул на 550р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id466569521"},
{"text":"https://vk.com/id678292161","namefemale":"Марат Тимченко","fact":"Кидок - кинул на 500р","number":"+79520248248","group":"Не удалось найти ","vechnaya":"https://vk.com/id678292161"}, 

{"text":"https://vk.com/id687039584","namefemale":"Андрей Матвеев ","fact":"Кидок - кинул на 25р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id687039584"},
{"text":"https://vk.com/id647196303","namefemale":"Артем Калинин","fact":"Кидок - кинул на 45р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id647196303"}, 

{"text":"https://vk.com/id624594857","namefemale":"Олег Абрамов","fact":"Кидок - кинул на 45р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id624594857"},
{"text":"https://vk.com/id509028246","namefemale":"Шахриёр Закиров","fact":"Гарант кидала не ведитесь он вместе с другом кидают на аккаунты или деньги","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id509028246"}, 

{"text":"https://vk.com/id563911665","namefemale":"Тимофей Яшин","fact":"Кидок - кинул на 200р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id563911665"},
{"text":"https://vk.com/id675440137","namefemale":"Галина Пупкина","fact":"Мошенница","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id675440137"}, 

{"text":"https://vk.com/id578272130","namefemale":"Артем Мыргин","fact":"Скамер","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id578272130"},
{"text":"https://vk.com/id298091574","namefemale":"Витя Фадеев","fact":"Кидок - кинул на 10р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id298091574"}, 

{"text":"https://vk.com/id458016817","namefemale":"Артём Коптев","fact":"Сначала предлагает Поповича, отказуется от мирного и пирина, потом вовсе просит на доверие, типичная схема кидков!!","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id458016817"},
{"text":"https://vk.com/id584699110","namefemale":"Имя не определено","fact":"Скам","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id584699110"}, 

{"text":"https://vk.com/id386971032","namefemale":"Тихон Смольский","fact":"Накрутчик отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id386971032"},
{"text":"https://vk.com/id177516212","namefemale":"Виктор Каневский","fact":"Накрутчик отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id177516212"}, 

{"text":"https://vk.com/id638164910","namefemale":"Максим Громов","fact":"Накрутчик отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id638164910"},
{"text":"https://vk.com/id475771468","namefemale":"Андрей Фролов","fact":"Накрутчик отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id475771468"}, 

{"text":"https://vk.com/id685480112","namefemale":"Кирилл Федулов","fact":"Кидок - кинул на 30р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id685480112"},
{"text":"https://vk.com/id677434984","namefemale":"Роман Соболев","fact":"Кидок - кинул на 210р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id677434984"}, 

{"text":"https://vk.com/id443880086","namefemale":"Никита Хромов","fact":"Кидок - кинул на 210р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id443880086"},
{"text":"https://vk.com/id594717962","namefemale":"Олег Ксенофонтов","fact":"Кидок - кинул на аккаунт самп.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id594717962"}, 

{"text":"https://vk.com/id474017950","namefemale":"Саша Малов","fact":"Кидок - кинул на 80р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id474017950"},
{"text":"https://vk.com/id414239169","namefemale":"Никита Фоменко","fact":"Накрутчик Отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id414239169"},

{"text":"https://vk.com/momont062","namefemale":"Евгений Наумов","fact":"Кидок - кинул на 453р..","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id348035159"},
{"text":"https://vk.com/id348035159","namefemale":"Евгений Наумов","fact":"Кидок - кинул на 453р..","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id348035159"}, 

{"text":"https://vk.com/leagueoflegends123456","namefemale":"Алмаз Ганиев","fact":"Кидок - кинул на 250р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id671658626"},
{"text":"https://vk.com/id671658626","namefemale":"Алмаз Ганиев","fact":"Кидок - кинул на 250р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id671658626"}, 

{"text":"https://vk.com/quattr1x","namefemale":"Матвей Пистенков","fact":"Кидок - кинул на 200р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id674055319"},
{"text":"https://vk.com/id674055319","namefemale":"Матвей Пистенков","fact":"Кидок - кинул на 200р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id674055319"}, 

{"text":"https://vk.com/id563184162","namefemale":"Дмитрий Караев","fact":"Кидок - кинул на 600р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id563184162"}, 

{"text":"https://vk.com/id606003841","namefemale":"Фархат Кучин","fact":"Кидок - кинул на 600р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id606003841"}, 

{"text":"https://vk.com/vlad_markelov4","namefemale":"Влад Маркелов","fact":"Данный человек кинул меня на 450р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id663151509"},
{"text":"https://vk.com/id663151509","namefemale":"Влад Маркелов","fact":"Данный человек кинул меня на 450р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id663151509"}, 

{"text":"https://vk.com/kachep","namefemale":"Егор Каспер","fact":"Кидок - кинул на 899р .","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id687045410"},
{"text":"https://vk.com/id687045410","namefemale":"Егор Каспер","fact":"Кидок - кинул на 899р .","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id687045410"}, 

{"text":"https://vk.com/spiner_75","namefemale":"Ника Фролов","fact":"Кидок - кинул на 40р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id562001011"},
{"text":"https://vk.com/id562001011","namefemale":"Ника Фролов","fact":"Кидок - кинул на 40р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id562001011"}, 

{"text":"https://vk.com/malio97","namefemale":"ДавидБл Исаев","fact":"Кидок - кинул на 50р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id545734114"},
{"text":"https://vk.com/id545734114","namefemale":"ДавидБл Исаев","fact":"Кидок - кинул на 50р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id545734114"}, 

{"text":"https://vk.com/kvewrz","namefemale":"Александр Дубровский","fact":"Фейк ручение.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id572264338"},
{"text":"https://vk.com/id572264338","namefemale":"Александр Дубровский","fact":"Фейк ручение.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id572264338"}, 

{"text":"https://vk.com/id258585465","namefemale":"Артемий Фролов","fact":"Вз отзывы","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id258585465"}, 

{"text":"https://vk.com/id536402686","namefemale":"Саша Григоренко","fact":"Кидок - кинул на 300р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id536402686"}, 

{"text":"https://vk.com/id687045410","namefemale":"Егор Каспер","fact":"Кидок - кинул на 899р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id687045410"}, 

{"text":"https://vk.com/id669614207","namefemale":"Егор Фомусов","fact":"Кидок - кинул на 260р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id669614207"}, 

{"text":"https://vk.com/id643068275","namefemale":"Sergey Sotnikov","fact":"Накрученные Отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id643068275"}, 

{"text":"https://vk.com/id680432553","namefemale":"Кирилл Газин","fact":"Кидок - кинул на 60р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id680432553"}, 

{"text":"https://vk.com/id644717360","namefemale":"Владислав Климов","fact":"Кидок - кинул на 100р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id644717360"}, 

{"text":"https://vk.com/id16570693","namefemale":"Даниил Дербатов","fact":"Накрученные Отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id16570693"},

{"text":"https://vk.com/kenov_official2021","namefemale":"Максимильян  Костин","fact":"Кидок - кинул на 400р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id645188669"},
{"text":"https://vk.com/id645188669","namefemale":"Максимильян  Костин","fact":"Кидок - кинул на 400р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id645188669"}, 

{"text":"https://vk.com/lerdy1337","namefemale":"Rogers Joyce","fact":"Кидок - кинул на 100р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id682106379"},
{"text":"https://vk.com/id682106379","namefemale":"Rogers Joyce","fact":"Кидок - кинул на 100р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id682106379"}, 

{"text":"https://vk.com/id545571986","namefemale":"Mihail Sadoveanu","fact":"Кидок - кинул на 20р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id545571986"}, 

{"text":"https://vk.com/id632067172","namefemale":"Никита Сергеев","fact":"Кидок - кинул на 20р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id632067172"}, 

{"text":"https://vk.com/garant_poddybov","namefemale":"Алексей Поддубов","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id582486570"},
{"text":"https://vk.com/id582486570","namefemale":"Алексей Поддубов","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id582486570"}, 

{"text":"https://vk.com/mironovgay","namefemale":"Амир Миронов","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id473153830"},
{"text":"https://vk.com/id473153830","namefemale":"Амир Миронов","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id473153830"}, 

{"text":"https://vk.com/ptichka_rezerv_original","namefemale":"Тимофей Яшин","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id202124262"},
{"text":"https://vk.com/id202124262","namefemale":"Тимофей Яшин","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id202124262"}, 

{"text":"https://vk.com/ptenchik_garant","namefemale":"Тимофей Яшин","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id563911665"},
{"text":"https://vk.com/id563911665","namefemale":"Тимофей Яшин","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id563911665"}, 

{"text":"https://vk.com/over_the_life","namefemale":"Кирилл Казанцев","fact":"Кидок -  Делал аватарки по договоренной цене в 200р, но деньги не получил, ответ - игнор.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id519334060"},
{"text":"https://vk.com/id519334060","namefemale":"Кирилл Казанцев","fact":"Кидок -  Делал аватарки по договоренной цене в 200р, но деньги не получил, ответ - игнор.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id519334060"}, 

{"text":"https://vk.com/aygoolo","namefemale":"Саша Гуляев","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id279051672"},
{"text":"https://vk.com/id279051672","namefemale":"Саша Гуляев","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id279051672"}, 

{"text":"https://vk.com/garant_sotn1k","namefemale":"Александр Сотников","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id616085705"},
{"text":"https://vk.com/id616085705","namefemale":"Александр Сотников","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id616085705"}, 

{"text":"https://vk.com/bakin_777","namefemale":"Тёма Бакин (Курганский)","fact":"Отказ от топ гаранта","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id379324686"},
{"text":"https://vk.com/id379324686","namefemale":"Тёма Бакин (Курганский)","fact":"Отказ от топ гаранта","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id379324686"}, 

{"text":"https://vk.com/alx_chuk","namefemale":"Александр Чуковский","fact":"Кидок - кинул на 35р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id591998964"},
{"text":"https://vk.com/id591998964","namefemale":"Александр Чуковский","fact":"Кидок - кинул на 35р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id591998964"}, 

{"text":"https://vk.com/top.garant11","namefemale":"Егор Манукян","fact":"Кидок - кинул на 350р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id417275282"},
{"text":"https://vk.com/id417275282","namefemale":"Егор Манукян","fact":"Кидок - кинул на 350р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id417275282"}, 

{"text":"https://vk.com/isaevsky17","namefemale":"Алексей Саевский","fact":"Кидок - кинул на 450р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id584518037"},
{"text":"https://vk.com/id584518037","namefemale":"Алексей Саевский","fact":"Кидок - кинул на 450р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id584518037"}, 

{"text":"https://vk.com/fedy.garant","namefemale":"Федя Вирт","fact":"Кидок - кинул на 180р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id669933105"},
{"text":"https://vk.com/id669933105","namefemale":"Федя Вирт","fact":"Кидок - кинул на 180р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id669933105"}, 

{"text":"https://vk.com/dubrov_garantik","namefemale":"Макс Дубровский","fact":"Кидок - кинул на 80р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id681933777"},
{"text":"https://vk.com/id681933777","namefemale":"Макс Дубровский","fact":"Кидок - кинул на 80р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id681933777"}, 

{"text":"https://vk.com/quickmoney7","namefemale":"Артём Морозов","fact":"Кидок.","number":"+79671276784 ","group":"https://vk.com/public51091099","vechnaya":"https://vk.com/id535432531"},
{"text":"https://vk.com/id535432531","namefemale":"Артём Морозов","fact":"Кидок.","number":"+79671276784 ","group":"https://vk.com/public51091099","vechnaya":"https://vk.com/id535432531"}, 

{"text":"https://vk.com/dimasafonov_garant","namefemale":"Дима Сафонов","fact":"Кидок - кинул на 125 р. (голда)","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id411894834"},
{"text":"https://vk.com/id411894834","namefemale":"Дима Сафонов","fact":"Кидок - кинул на 125 р. (голда)","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id411894834"},

];

for (var a=0;a<paesia.length;a++) {
    if (d==paesia[a]["text"]) {
    condition=true;
    titolo.innerHTML = "Обнаружен мошенник!";        
    output.innerHTML = "<ul><li>Вы проверяли эту ссылку: "+c+"</li><li>Имя Фамилия: "+paesia[a]["namefemale"]+"</li><li>Описание/Коммент: "+paesia[a]["fact"]+"</li><li>Номер телефона: "+paesia[a]["number"]+"</li><li>Группа: "+paesia[a]["group"]+"</li><li>Вечная ссылка: "+paesia[a]["vechnaya"]+"</li></ul>";
    titolo.style.color = "red";
    li.style.color = "white";
    titolo.style.fontsize = "25px";
    titolo.style.border = "0px solid red";
    titolo.style.borderRadius = "0px";
    output.style.border = "0px solid red";
    output.style.color = "black";
    output.style.borderRadius = "0px";
    }  
  
   else if (condition===false) {
   titolo.innerHTML = "<q>"+c+"</q>В нашей базе данного человека нет, но это не значит что можно ему доверять, возможно его ещё не слили, но если слили или если вас обманули, то просим отправить заявку на добавление мошенника в нашу базу.";
    output.innerHTML = "Ещё советуем навсякий проверять вечную ссылку.";
    titolo.style.color = "black";
    titolo.style.border = "0px solid white";
    titolo.style.borderRadius = "0px";
    output.style.color = "black";
    output.style.border = "0px solid black";
    output.style.borderRadius = "0px";
    }
    }
    
}



