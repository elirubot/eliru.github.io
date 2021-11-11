
function cerca() {

var a = document.getElementById("input").value;
var b = a.replace(/["%","&","€","!","?","*","=","@","$"]/g,"");
var c = b.replace(/ /g,"");
var d = c.toLowerCase();

var titolo = document.getElementById("titolo");

var output = document.getElementById("output");

condition=false;

var paesi = [{"text":"https://vk.com/id655718261","namefemale":"Никита Рудов","fact":"Пытается накрутить отзывы, чтобы скамить","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id655718261"},
{"text":"https://vk.com/id665118583","namefemale":"Влад Николаев","fact":"Попытка украсть учётную запись в игре.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id665118583"},
{"text":"https://vk.com/id602773585","namefemale":"Андрей Петров","fact":"Обманул на кейс на своём же сайте, его поддержка обещала выдать писал я это ещё в июле этого года мне так и не выдали плюс заблокировали в вк.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id602773585"}, 

{"text":"https://vk.com/kislitgrief","namefemale":"DELETED","fact":"Кидок - кинул на 1к рублей. После оплаты сразу же попал в чс.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id572536299"},
{"text":"https://vk.com/id572536299","namefemale":"DELETED","fact":"Кидок - кинул на 1к рублей. После оплаты сразу же попал в чс.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id572536299"}, 

{"text":"https://vk.com/Prostotop15","namefemale":"Азия Хусейнов","fact":"Отзывы накручены","number":"+77057111706","group":"Не удалось найти","vechnaya":"https://vk.com/id545600632"},
{"text":"https://vk.com/id545600632","namefemale":"Азия Хусейнов","fact":"Отзывы накручены","number":"+77057111706","group":"Не удалось найти","vechnaya":"https://vk.com/id545600632"}, 

{"text":"https://vk.com/garant_fimenko_official","namefemale":"Кирил Фименко","fact":"Взаимные отзывы.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id684033917"},
{"text":"https://vk.com/id684033917","namefemale":"Кирил Фименко","fact":"Взаимные отзывы.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id684033917"}, 

{"text":"https://vk.com/garantkraev","namefemale":"Матвей Краев","fact":"Взаимные отзывы.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id644305527"},
{"text":"https://vk.com/id644305527","namefemale":"Матвей Краев","fact":"Взаимные отзывы.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id644305527"}, 

{"text":"https://vk.com/x_fedot149_x","namefemale":"Степан Федотов","fact":"Кинул На дм мификов из пет симулятор икс, стоимостью 120₽","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id505905099"},
{"text":"https://vk.com/id505905099","namefemale":"Степан Федотов","fact":"Кинул На дм мификов из пет симулятор икс, стоимостью 120₽","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id505905099"}, 

{"text":"https://vk.com/id643807460","namefemale":"Алексей Меркулов","fact":"Диз информатор","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id643807460"}, 

{"text":"https://vk.com/garant_melehov","namefemale":"Алексей Мелехов","fact":"Кидок - кинул на 270р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id577366507"},
{"text":"https://vk.com/id577366507","namefemale":"Алексей Мелехов","fact":"Кидок - кинул на 270р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id577366507"}, 

{"text":"https://vk.com/markelov2131","namefemale":"Саша Белов","fact":"Вз отзывы","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id621806883"},
{"text":"https://vk.com/id621806883","namefemale":"Саша Белов","fact":"Вз отзывы","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id621806883"}, 

{"text":"https://vk.com/felix_ermakov","namefemale":"Кирилл Ермаков","fact":"Украл аккаунт, ","number":"Не удалось найти","group":"https://vk.com/public197222314","vechnaya":"https://vk.com/id427521875"},
{"text":"https://vk.com/id427521875","namefemale":"Кирилл Ермаков","fact":"Украл аккаунт, ","number":"Не удалось найти","group":"https://vk.com/public197222314","vechnaya":"https://vk.com/id427521875"}, 

{"text":"https://vk.com/id681801842","namefemale":"Алексей Варченко","fact":"Оплатил товар на связь не выходит добавил в черный список.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id681801842"}, 

{"text":"https://vk.com/id638493563","namefemale":"Артур Праваков","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id638493563"}, 

{"text":"https://vk.com/id501514819","namefemale":"Антон Громов","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id501514819"}, 

{"text":"https://vk.com/id637996100","namefemale":"Владислав Швецов","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id637996100"}, 

{"text":"https://vk.com/id518307907","namefemale":"Алмаз Асаев","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id518307907"}, 

{"text":"https://vk.com/id631446039","namefemale":"Евгений Зеленин","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id631446039"}, 

{"text":"https://vk.com/id650639810","namefemale":"Даниил Шумилов","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id650639810"}, 

{"text":"https://vk.com/id472313096","namefemale":"Булат Бубликов","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id472313096"}, 

{"text":"https://vk.com/id502559614","namefemale":"Илья Силин","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id502559614"}, 

{"text":"https://vk.com/id595946246","namefemale":"Артём Ефиновский","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id595946246"}, 

{"text":"https://vk.com/id575863801","namefemale":"Аля Вдвоенко","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id575863801"}, 

{"text":"https://vk.com/id590637940","namefemale":"Арсений Азартов","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id590637940"}, 

{"text":"https://vk.com/id606337801","namefemale":"Ярослав Кочетов","fact":"Кидок и накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id606337801"},
{"text":"https://vk.com/gromov.myata","namefemale":"Тимофей Громов","fact":"Кидок - кинул на аккаунт.","number":"+79373989611","group":"Не удалось найти ","vechnaya":"https://vk.com/id622121934"},
{"text":"https://vk.com/new_garant1911","namefemale":"Ваня Землянкин","fact":"Кидок - кинул на 136р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id461637923"},
{"text":"https://vk.com/id461637923","namefemale":"Ваня Землянкин","fact":"Кидок - кинул на 136р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id461637923"},
{"text":"https://vk.com/zimov_garant","namefemale":"Дима Зимов","fact":"Кидок - кинул на 160р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id635563976"},
{"text":"https://vk.com/id635563976","namefemale":"Дима Зимов","fact":"Кидок - кинул на 160р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id635563976"},
{"text":"https://vk.com/sladkovskih_genshin","namefemale":"Никита Бельский","fact":"Кидок - кинул на 195р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id459293895"},
{"text":"https://vk.com/id459293895","namefemale":"Никита Бельский","fact":"Кидок - кинул на 195р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id459293895"},
{"text":"https://vk.com/axyennniy_22","namefemale":"Леонид Носов(Алексей Санкин)","fact":"Хотел купит аккаунт тт в итоге дал данные и снес телефон до заводских. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id668634382"},
{"text":"https://vk.com/damir_go","namefemale":"Дамир Байбиков","fact":"Хотел купить робуксы,вытоги обманули. Чел не вернул деньги и начал игнорить.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id229539469"},
{"text":"https://vk.com/id229539469","namefemale":"Дамир Байбиков","fact":"Хотел купить робуксы,вытоги обманули. Чел не вернул деньги и начал игнорить.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id229539469"},
{"text":"https://vk.com/ududjdjddjdjdh","namefemale":"Артём Левицкий","fact":"Накрутка отзывов путём спама Александр Суворов ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id499681659"},
{"text":"https://vk.com/id499681659","namefemale":"Артём Левицкий","fact":"Накрутка отзывов путём спама Александр Суворов ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id499681659"},
{"text":"https://vk.com/id615299453","namefemale":"Давид Пираев","fact":"Пиарили его посты в группе, вкладывали силу и деньги, обещал заплатить не один раз. Под конец просто слился и стал прикидываться дурачком, якобы нас не знает и почти день фулл игнора..","number":"Не удалось найти","group":"https://vk.com/esqsix01","vechnaya":"https://vk.com/id615299453"},
{"text":"https://vk.com/garant_wopx2","namefemale":"Александр Бруев","fact":"Кидок - кинул на 150р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id318566617"},
{"text":"https://vk.com/id318566617","namefemale":"Александр Бруев","fact":"Кидок - кинул на 150р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id318566617"},
{"text":"https://vk.com/owner_russia","namefemale":"Максим Краевский","fact":"Кидок - кинул на 150р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id542137457"},
{"text":"https://vk.com/id542137457","namefemale":"Максим Краевский","fact":"Кидок - кинул на 150р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id542137457"},
{"text":"https://vk.com/id668634382","namefemale":"Леонид Носов(Алексей Санкин)","fact":"Хотел купит аккаунт тт в итоге дал данные и снес телефон до заводских. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id668634382"},
{"text":"https://vk.com/al.elizarov_garant","namefemale":"Алексей Елизаров","fact":"Кидок - кинул на 54р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id675206899"},
{"text":"https://vk.com/id675206899","namefemale":"Алексей Елизаров","fact":"Кидок - кинул на 54р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id675206899"},
{"text":"https://vk.com/garant_nefridov","namefemale":"Никита Ефридов","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id657400878"},
{"text":"https://vk.com/id657400878","namefemale":"Никита Ефридов","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id657400878"},
{"text":"https://vk.com/blackangel_18312827","namefemale":"Аяз Галимуллин ","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id455746624"},
{"text":"https://vk.com/id455746624","namefemale":"Аяз Галимуллин ","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id455746624"},
{"text":"https://vk.com/mr.gamer83","namefemale":"Горшок Вася","fact":"Он пытался меня обмануть но не смог. Делюсь чтобы другие не попались.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id608236653"},
{"text":"https://vk.com/id608236653","namefemale":"Горшок Вася","fact":"Он пытался меня обмануть но не смог. Делюсь чтобы другие не попались.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id608236653"}, 

{"text":"https://vk.com/id634615330","namefemale":"Денис Афанасьев","fact":"Кидок - кинул на 50р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id634615330"}, 

{"text":"https://vk.com/xzzzzzzzzz17","namefemale":"Никита Вайс","fact":"Кидок -  Кинул на 1200р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id283952843"},
{"text":"https://vk.com/id283952843","namefemale":"Никита Вайс","fact":"Кидок -  Кинул на 1200р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id283952843"}, 

{"text":"https://vk.com/kandratovtop666","namefemale":"Максим Кондратов","fact":"Кидок - Очередной кидочек хотел оплатит в крипте и в итоге чуть не оплатил, он пытался взять больше в 10 раз чем акк стоит)","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id612149756"},
{"text":"https://vk.com/id612149756","namefemale":"Максим Кондратов","fact":"Кидок - Очередной кидочек хотел оплатит в крипте и в итоге чуть не оплатил, он пытался взять больше в 10 раз чем акк стоит)","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id612149756"},

{"text":"https://vk.com/brawl_stars_accounts","namefemale":"Brawl Stars купить продажа обмен аккаунтов","fact":"Группа с 38к участниками кидает людей","number":"+79526239502","group":"Это и есть сообщество ","vechnaya":"https://vk.com/club148711118"},
{"text":"https://vk.com/club148711118","namefemale":"Brawl Stars купить продажа обмен аккаунтов","fact":"Группа с 38к участниками кидает людей","number":"+79526239502","group":"Это и есть сообщество ","vechnaya":"https://vk.com/club148711118"}, 

{"text":"https://vk.com/id176352258","namefemale":"Оксана Медведева","fact":"Просит неадекватную предоплату в 15-30 тыс. и просто блокирует. Отзывы написала сама себе с разных профилей. Фото украдено у девушки из Германии https://www.instagram.com/realestateblondies/ Постоянно блокируется Сбером и администрацией ВК.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id176352258"}, 

{"text":"https://vk.com/id652130535","namefemale":"Дима Эмин","fact":"Кидок - кинул на 92р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id652130535"}, 

{"text":"https://vk.com/lefixzy","namefemale":"Андрей Валеев","fact":"Накрутчик - накрутка отзывов. ","number":"Не удалось найти ","group":"https://vk.com/hilekkk","vechnaya":"https://vk.com/id645484291"},
{"text":"https://vk.com/id645484291","namefemale":"Андрей Валеев","fact":"Накрутчик - накрутка отзывов. ","number":"Не удалось найти ","group":"https://vk.com/hilekkk","vechnaya":"https://vk.com/id645484291"}, 

{"text":"https://vk.com/a.insomniac","namefemale":"Andy Insomniac","fact":"Признался в скаме и удалил сообщение","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id586927422"},
{"text":"https://vk.com/id586927422","namefemale":"Andy Insomniac","fact":"Признался в скаме и удалил сообщение","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id586927422"}, 

{"text":"https://vk.com/yng_uzi","namefemale":"Данил Дьячков","fact":"Предлагает вз отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id618129285"},
{"text":"https://vk.com/id618129285","namefemale":"Данил Дьячков","fact":"Предлагает вз отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id618129285"}, 

{"text":"https://vk.com/komarov_offf","namefemale":"Артём Комаров","fact":"Обещал дать процент, не дал.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id467051630"},
{"text":"https://vk.com/id467051630","namefemale":"Артём Комаров","fact":"Обещал дать процент, не дал.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id467051630"}, 

{"text":"https://vk.com/id579647275","namefemale":"Маша Фонфилова","fact":"Накручивает отзывы","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id579647275"}, 

{"text":"https://vk.com/maksim_ckynzuk","namefemale":"Максим Громов","fact":"Скам","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id638164910"},
{"text":"https://vk.com/id638164910","namefemale":"Максим Громов","fact":"Скам","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id638164910"}, 

{"text":"https://vk.com/prohorenko_official1","namefemale":"Артём Минаков","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id683675827"},
{"text":"https://vk.com/id683675827","namefemale":"Артём Минаков","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id683675827"}, 

{"text":"https://vk.com/garant_sampovsky","namefemale":"Арсений Самповский","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id682593179"},
{"text":"https://vk.com/id682593179","namefemale":"Арсений Самповский","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id682593179"}, 

{"text":"https://vk.com/ayee026391001","namefemale":"Кирилл Фиалков(Кирилл Крутышкин)","fact":"Продажа страницы с отзывами.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id583639550"},
{"text":"https://vk.com/id583639550","namefemale":"Кирилл Фиалков(Кирилл Крутышкин)","fact":"Продажа страницы с отзывами.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id583639550"}, 




{"text":"https://vk.com/garant_sukhanov","namefemale":"Юра Суханов","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id652789419"},
{"text":"https://vk.com/id652789419","namefemale":"Юра Суханов","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id652789419"}, 

{"text":"https://vk.com/garant_fesenko_original","namefemale":"Михаил Фесенко","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id658045162"},
{"text":"https://vk.com/id658045162","namefemale":"Михаил Фесенко","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id658045162"}, 

{"text":"https://vk.com/whatxsss","namefemale":"Александр Расколов","fact":"Накрученые отзывы, предлагает скамить. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id616553648"},
{"text":"https://vk.com/id616553648","namefemale":"Александр Расколов","fact":"Накрученые отзывы, предлагает скамить. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id616553648"}, 

{"text":"https://vk.com/kentworkk","namefemale":"Магомед Мамедов","fact":"Предлагает скамить. ","number":"Не удалось найти ","group":"https://vk.com/shopvilion","vechnaya":"https://vk.com/id580825205"},
{"text":"https://vk.com/id580825205","namefemale":"Магомед Мамедов","fact":"Предлагает скамить. ","number":"Не удалось найти ","group":"https://vk.com/shopvilion","vechnaya":"https://vk.com/id580825205"}, 

{"text":"https://vk.com/yaebaletujizn00","namefemale":"Ринат Джалилов","fact":"Предлагает скамить. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id569691680"},
{"text":"https://vk.com/id569691680","namefemale":"Ринат Джалилов","fact":"Предлагает скамить. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id569691680"}, 

{"text":"https://vk.com/vvvjki","namefemale":"Саша Гроченко","fact":"Скам - Предлагает скамить. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id587930898"},
{"text":"https://vk.com/id587930898","namefemale":"Саша Гроченко","fact":"Скам - Предлагает скамить. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id587930898"}, 

{"text":"https://vk.com/maks123432","namefemale":"Максим Олеников","fact":"Скамер, ворует чужие скрины и продаёт под видом своих аккаунтов.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id670994254"},
{"text":"https://vk.com/id670994254","namefemale":"Максим Олеников","fact":"Скамер, ворует чужие скрины и продаёт под видом своих аккаунтов.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id670994254"}, 

{"text":"https://vk.com/ya_orlov18","namefemale":"Алексей Орлов","fact":"Накрутчик отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id558927063"},
{"text":"https://vk.com/id558927063","namefemale":"Алексей Орлов","fact":"Накрутчик отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id558927063"}, 

{"text":"https://vk.com/gg.efremow","namefemale":"Богдан Ефремов","fact":"Накрутчик отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id572301599"},
{"text":"https://vk.com/id572301599","namefemale":"Богдан Ефремов","fact":"Накрутчик отзывов","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id572301599"}, 

{"text":"https://vk.com/creepy3ero","namefemale":"Абылайхан Рассенганов","fact":"После того как предложил гаранта, кинул в чс и удалил сообщение.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id540383492"},
{"text":"https://vk.com/id540383492","namefemale":"Абылайхан Рассенганов","fact":"После того как предложил гаранта, кинул в чс и удалил сообщение.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id540383492"}, 

{"text":"https://vk.com/kenov_official2021","namefemale":"Максимильян Костин","fact":"Кидок - кинул на 1000р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"http://vk.com/id645188669"},
{"text":"http://vk.com/id645188669","namefemale":"Максимильян Костин","fact":"Кидок - кинул на 1000р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"http://vk.com/id645188669"}, 

{"text":"https://vk.com/elizarov_gerant","namefemale":"Алексей Елизаров","fact":"Кидок - кинул на 70р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id675206899"},
{"text":"https://vk.com/id675206899","namefemale":"Алексей Елизаров","fact":"Кидок - кинул на 70р","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id675206899"}, 

{"text":"https://vk.com/sherbakov.best","namefemale":"Никита Щербаков","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id663132588"},
{"text":"https://vk.com/id663132588","namefemale":"Никита Щербаков","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id663132588"}, 

{"text":"https://vk.com/work.frolow","namefemale":"Андрей Фролов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id660030402"},
{"text":"https://vk.com/id660030402","namefemale":"Андрей Фролов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id660030402"}, 

{"text":"https://vk.com/a.reznev","namefemale":"Антон Резнев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id659903026"},
{"text":"https://vk.com/id659903026","namefemale":"Антон Резнев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id659903026"}, 

{"text":"https://vk.com/alya_protonova","namefemale":"Аля Вдовенко","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id575863801"},
{"text":"https://vk.com/id575863801","namefemale":"Аля Вдовенко","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id575863801"}, 

{"text":"https://vk.com/zxc.saga1dak","namefemale":"Артём Сагайдак","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id594325747"},
{"text":"https://vk.com/id594325747","namefemale":"Артём Сагайдак","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id594325747"}, 

{"text":"https://vk.com/azam_ebet","namefemale":"Азамат Тандыров","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id648396673"},
{"text":"https://vk.com/id648396673","namefemale":"Азамат Тандыров","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id648396673"}, 

{"text":"https://vk.com/kop_garant","namefemale":"Артём Коптев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"https://vk.com/bs.target","vechnaya":"https://vk.com/id458016817"},
{"text":"https://vk.com/id458016817","namefemale":"Артём Коптев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"https://vk.com/bs.target","vechnaya":"https://vk.com/id458016817"}, 

{"text":"https://vk.com/kopa_garant","namefemale":"Артём Коптев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"https://vk.com/bs.target","vechnaya":"https://vk.com/id610810450"},
{"text":"https://vk.com/id610810450","namefemale":"Артём Коптев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"https://vk.com/bs.target","vechnaya":"https://vk.com/id610810450"}, 

{"text":"https://vk.com/gromov_zxcqwe","namefemale":"Артем Громов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id643821421"},
{"text":"https://vk.com/id634705447","namefemale":"Даня Абайский","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id643821421"}, 

{"text":"https://vk.com/gromov_zxcqwe","namefemale":"Артем Громов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id643821421"},
{"text":"https://vk.com/id643821421","namefemale":"Артем Громов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id643821421"}, 

{"text":"https://vk.com/asketow228","namefemale":"Иван Аскетов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id625261713"},
{"text":"https://vk.com/id625261713","namefemale":"Иван Аскетов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id625261713"}, 

{"text":"https://vk.com/gdz_silin","namefemale":"Илья Силин","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id502559614"},
{"text":"https://vk.com/id502559614","namefemale":"Илья Силин","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id502559614"}, 

{"text":"https://vk.com/lisetsky_original","namefemale":"Артур Лисецкий","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id580860773"},
{"text":"https://vk.com/id580860773","namefemale":"Артур Лисецкий","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id580860773"}, 

{"text":"https://vk.com/original_serjantov","namefemale":"Сергей Сержантов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id658981214"},
{"text":"https://vk.com/id658981214","namefemale":"Сергей Сержантов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id658981214"}, 

{"text":"https://vk.com/sergey_romanov_garant","namefemale":"Сергей Романов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id662329631"},
{"text":"https://vk.com/id662329631","namefemale":"Сергей Романов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id662329631"}, 

{"text":"https://vk.com/rebkov_lvlapp","namefemale":"Даня Ребков","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id570941675"},
{"text":"https://vk.com/id570941675","namefemale":"Даня Ребков","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id570941675"}, 

{"text":"https://vk.com/obsis_ebet_vseh","namefemale":"Ваня Фролов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id463686809"},
{"text":"https://vk.com/id463686809","namefemale":"Ваня Фролов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id463686809"}, 

{"text":"https://vk.com/yumashev1","namefemale":"Никита Юмашев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id530901646"},
{"text":"https://vk.com/id530901646","namefemale":"Никита Юмашев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id530901646"}, 

{"text":"https://vk.com/qq_gromovv","namefemale":"Никита Громов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id618189370"},
{"text":"https://vk.com/id618189370","namefemale":"Никита Громов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id618189370"}, 

{"text":"https://vk.com/artem1112344","namefemale":"Никита Басталев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id362104542"},
{"text":"https://vk.com/id362104542","namefemale":"Никита Басталев","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id362104542"}, 

{"text":"https://vk.com/official_snezhin","namefemale":"Дмитрий Снежин","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id613365722"},
{"text":"https://vk.com/id613365722","namefemale":"Дмитрий Снежин","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id613365722"}, 

{"text":"https://vk.com/sl.tarin","namefemale":"Слава Таринов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id641399562"},
{"text":"https://vk.com/id641399562","namefemale":"Слава Таринов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id641399562"}, 

{"text":"https://vk.com/garant_radch","namefemale":"Илья Радченко","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id442740492"},
{"text":"https://vk.com/id442740492","namefemale":"Илья Радченко","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id442740492"},

{"text":"https://vk.com/russian_scammer ","namefemale":"Ваня Исаев","fact":"Кидок ","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id641656853"},
{"text":"https://vk.com/id641656853 ","namefemale":"Ваня Исаев","fact":"Кидок ","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id641656853"}, 

{"text":"https://vk.com/lunev_garant ","namefemale":"Дмитрий Лунев","fact":"Кидок и накрутчик ","number":"+79616390572","group":"Не удалось найти ","vechnaya":"https://vk.com/id80592033"},
{"text":"https://vk.com/id80592033 ","namefemale":"Дмитрий Лунев","fact":"Кидок и накрутчик ","number":"+79616390572","group":"Не удалось найти ","vechnaya":"https://vk.com/id80592033"}, 

{"text":"https://vk.com/servinov","namefemale":"Андрей Сервинов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id568115657"},
{"text":"https://vk.com/id568115657","namefemale":"Андрей Сервинов","fact":"Кидок и накрутчик ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id568115657"}, 

{"text":"https://vk.com/kalinin_bestb ","namefemale":"Сергей Некрасов","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id586166852"},
{"text":"https://vk.com/id586166852 ","namefemale":"Сергей Некрасов","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id586166852"}, 

{"text":"https://vk.com/zixov ","namefemale":"Александр Зыхов","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id294821121"},
{"text":"https://vk.com/id294821121 ","namefemale":"Александр Зыхов","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id294821121"}, 

{"text":"https://vk.com/veterok_ok ","namefemale":"Сергей Ветров","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id614737990"},
{"text":"https://vk.com/id614737990 ","namefemale":"Сергей Ветров","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id614737990"}, 

{"text":"https://vk.com/mamkin_kibersport1337 ","namefemale":"Leonardo Buffalo","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id568805272"},
{"text":"https://vk.com/id568805272 ","namefemale":"Leonardo Buffalo","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id568805272"}, 

{"text":"https://vk.com/a.gagarin95 ","namefemale":"Алексей Гагарин","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id626834508"},
{"text":"https://vk.com/id626834508 ","namefemale":"Алексей Гагарин","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id626834508"}, 

{"text":"https://vk.com/id502559614 ","namefemale":"Илья Силин","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id502559614"}, 

{"text":"https://vk.com/id625261713 ","namefemale":"Иван Аскетов","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id625261713"}, 

{"text":"https://vk.com/id524629870 ","namefemale":"Владимир Быков","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id524629870"}, 

{"text":"https://vk.com/gromov_zxcqwe ","namefemale":"Артем Громов","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/gromov_zxcqwe"}, 

{"text":"https://vk.com/id362104542 ","namefemale":"Никита Басталев","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id362104542"}, 

{"text":"https://vk.com/id442740492 ","namefemale":"Илья Радченко","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id442740492"}, 

{"text":"https://vk.com/id421265254 ","namefemale":"Алина Магнатова","fact":"Кидок ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id421265254"}, 

{"text":"https://vk.com/id421265254 ","namefemale":"Анастасия Линк","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id663491060"}, 

{"text":"https://vk.com/id633896647 ","namefemale":"Дмитрий Степанов","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id633896647"}, 

{"text":"https://vk.com/id321137187 ","namefemale":"Рахим Козырев","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id321137187"}, 

{"text":"https://vk.com/id519206233 ","namefemale":"Семён Корякин","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id519206233"}, 

{"text":"https://vk.com/ld572179743 ","namefemale":"Илья Попытов","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/ld572179743"}, 

{"text":"https://vk.com/id424558908 ","namefemale":"Илья Антипов","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id424558908"}, 

{"text":"https://vk.com/id507064953 ","namefemale":"Дима Филатов","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id507064953"}, 

{"text":"https://vk.com/id618953037 ","namefemale":"Никита Аверин","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id618953037"}, 

{"text":"https://vk.com/id616203309 ","namefemale":"Святослав Митин","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id616203309"}, 

{"text":"https://vk.com/id596411143","namefemale":"Данил Пивоваров","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id596411143"}, 

{"text":"https://vk.com/id665945323","namefemale":"Никита Лясовский","fact":" Кидок","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id665945323"},

{"text":"https://vk.com/4mo_blyat01","namefemale":"Давид Пираев","fact":"Кидок - кинул на 850₽, Пиарили его посты в группе, вкладывали силу и деньги, обещал заплатить не один раз. Под конец просто слился и стал прикидываться дурачком, якобы нас не знает и почти день фулл игнора..","number":"Не удалось найти ","group":"https://vk.com/club194988423","vechnaya":"https://vk.com/id615299453"},
{"text":"https://vk.com/id615299453","namefemale":"Давид Пираев","fact":"Кидок - кинул на 850₽, Пиарили его посты в группе, вкладывали силу и деньги, обещал заплатить не один раз. Под конец просто слился и стал прикидываться дурачком, якобы нас не знает и почти день фулл игнора..","number":"Не удалось найти ","group":"https://vk.com/club194988423","vechnaya":"https://vk.com/id615299453"},

{"text":"https://vk.com/islamgaranttop1","namefemale":"Ислам Алимов","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id643955290"},
{"text":"https://vk.com/id643955290","namefemale":"Ислам Алимов","fact":"Накрученые отзывы.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id643955290"},

{"text":"https://vk.com/mxrgo","namefemale":"Мухаммад Алимов","fact":"Кидок - кинул на 3000р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id578177107"},
{"text":"https://vk.com/id578177107","namefemale":"Мухаммад Алимов","fact":"Кидок - кинул на 3000р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id578177107"},

{"text":"https://vk.com/id49567089","namefemale":"Олег Панов","fact":"Данный человек занимается обманом. ","number":"+74232492257","group":"https://vk.com/lodka.motor.vladik","vechnaya":"https://vk.com/id49567089"},

{"text":"https://vk.com/id622121934","namefemale":"Тимофей Громов","fact":"Кидок - кинул на аккаунт.","number":"+79373989611","group":"Не удалось найти ","vechnaya":"https://vk.com/id622121934"},
{"text":"https://vk.com/filatov_garant_55","namefemale":"Михаил Филатов","fact":"Кидок - кинул на 150р.","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id559878159"},
{"text":"https://vk.com/zeronso2","namefemale":"Радмир Берлогожин ","fact":"Диз информатор","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id610370977"},
{"text":"https://vk.com/id610370977","namefemale":"Радмир Берлогожин ","fact":"Диз информатор","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id610370977"},
{"text":"https://vk.com/sirnick_garant","namefemale":"Олег Сырников","fact":"Очередной недогарант ушел в скам. Купил у него группу, в итоги каким-то чудом меня от туда сняли.","number":"Не удалось найти","group":"https://vk.com/club206685327","vechnaya":"https://vk.com/id671175540"},
{"text":"https://vk.com/id671175540","namefemale":"Олег Сырников","fact":"Очередной недогарант ушел в скам. Купил у него группу, в итоги каким-то чудом меня от туда сняли.","number":"Не удалось найти","group":"https://vk.com/club206685327","vechnaya":"https://vk.com/id671175540"},
{"text":"https://vk.com/garantnq","namefemale":"Егор Смирнов","fact":"Кидок - Кинул на 300р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id655028990"},
{"text":"https://vk.com/id655028990","namefemale":"Егор Смирнов","fact":"Кидок - Кинул на 300р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id655028990"},
{"text":"https://vk.com/id_official_fomin","namefemale":"Андрей Фомин","fact":"Кидок - Кинул на 300р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id543043584"},
{"text":"https://vk.com/id543043584","namefemale":"Андрей Фомин","fact":"Кидок - Кинул на 300р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id543043584"},
{"text":"https://vk.com/iiantipov_igarant0191","namefemale":"Илья Антипов","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id424558908"},
{"text":"https://vk.com/standiceru","namefemale":"Standice.ru самый честный сайт Standoff2","fact":"Довольно популярная группа, но кидает, первый вывод сделали без проблем, а на второй начали затирать о подозрительной активности на сайте, тех поддержка сказала что разморозят вывод в течении 2 дней, прошло уже 4 и не отвечают, так же группа кинула в чёрный список","number":"Не удалось найти","group":"Это и есть сообщество","vechnaya":"https://vk.com/public194555773"},
{"text":"https://vk.com/id637210107","namefemale":"Сегей Букин","fact":"Оплатил акк и просят ещё 200 руб","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id637210107"},
{"text":"https://vk.com/artem_krasnobaev","namefemale":"Артём Краснобаев","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id487190958"},
{"text":"https://vk.com/id487190958","namefemale":"Артём Краснобаев","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id487190958"},
{"text":"https://vk.com/public194555773","namefemale":"Standice.ru самый честный сайт Standoff2","fact":"Довольно популярная группа, но кидает, первый вывод сделали без проблем, а на второй начали затирать о подозрительной активности на сайте, тех поддержка сказала что разморозят вывод в течении 2 дней, прошло уже 4 и не отвечают, так же группа кинула в чёрный список","number":"Не удалось найти","group":"Это и есть сообщество","vechnaya":"https://vk.com/public194555773"},
{"text":"https://vk.com/id424558908","namefemale":"Илья Антипов","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id424558908"},
{"text":"https://vk.com/id559878159","namefemale":"Михаил Филатов","fact":"Кидок - кинул на 150р.","number":"Не удалось найти","group":"Не удалось найти ","vechnaya":"https://vk.com/id559878159"},
{"text":"https://vk.com/tsopper","namefemale":"Дима Медведев","fact":"Кидок","number":"+79114650571","group":"Не удалось найти ","vechnaya":"https://vk.com/id397797028"},
{"text":"https://vk.com/id397797028","namefemale":"Дима Медведев","fact":"Кидок","number":"+79114650571","group":"Не удалось найти ","vechnaya":"https://vk.com/id397797028"},
{"text":"https://vk.com/poshelnahuidodik","namefemale":"Ваня Комаров","fact":"Кидок - кинул на 50р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id616330368"},
{"text":"https://vk.com/id646540070","namefemale":"Кирилл Ширхалов","fact":"Кидок - чел кинул на буст,оставил себе акк.","number":"+79196784708","group":"Не удалось найти","vechnaya":"https://vk.com/id646540070"},
{"text":"https://vk.com/id616330368","namefemale":"Ваня Комаров","fact":"Кидок - кинул на 50р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id616330368"},
{"text":"https://vk.com/garant_romeo","namefemale":"Real Romeo","fact":"Кидок - кинул на 650р.","number":"+89528237031","group":"Не удалось найти ","vechnaya":"https://vk.com/id506818610"},
{"text":"https://vk.com/id506818610","namefemale":"Real Romeo","fact":"Кидок - кинул на 650р.","number":"+89528237031","group":"Не удалось найти ","vechnaya":"https://vk.com/id506818610"},
{"text":"https://vk.com/ride4ell","namefemale":"Роман Рейдов","fact":"Кидок - кинул на 35р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id658369727"},
{"text":"https://vk.com/id658369727","namefemale":"Роман Рейдов","fact":"Кидок - кинул на 35р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id658369727"},
{"text":"https://vk.com/office_garant_molchanov","namefemale":"Александр Молчанов","fact":"Кидок - кинул на 30р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id595962654"},
{"text":"https://vk.com/id595962654","namefemale":"Александр Молчанов","fact":"Кидок - кинул на 30р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id595962654"},
{"text":"https://vk.com/frolov_id1","namefemale":"Роман Фролов","fact":"Выставил на продажу страницу с отзывами. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id574186301"},
{"text":"https://vk.com/id574186301","namefemale":"Роман Фролов","fact":"Выставил на продажу страницу с отзывами. ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id574186301"},
{"text":"https://vk.com/rudov_garant1","namefemale":"Никита Рудов","fact":"Пытается накрутить отзывы, чтобы скамить","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id655718261"},

{"text":"https://vk.com/olegtopchik","namefemale":"Олег Васильченко","fact":"Кидало, восстановил аккаунт, Цена аккаунта-1500","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id478609359"},

{"text":"https://vk.com/id478609359","namefemale":"Олег Васильченко","fact":"Кидало, восстановил аккаунт, Цена аккаунта-1500","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id478609359"},

{"text":"https://vk.com/frexerso2","namefemale":"Руслан Тояров","fact":"Скрин: https://vk.com/photo-76570454_457243488","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id551817839"},

{"text":"https://vk.com/id551817839","namefemale":"Руслан Тояров","fact":"Скрин: https://vk.com/photo-76570454_457243488","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id551817839"},

{"text":"https://vk.com/according25ok","namefemale":"Богдан Французов","fact":"скамнул на 10 руб ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id666701808"},

{"text":"https://vk.com/id666701808","namefemale":"Богдан Французов","fact":"скамнул на 10 руб ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id666701808"},
{"text":"https://vk.com/garant_butenko","namefemale":"Кирилл Бутенко","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id260392030"},
{"text":"https://vk.com/id260392030","namefemale":"Кирилл Бутенко","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id260392030"},
{"text":"https://vk.com/molnievseller","namefemale":"Иван Иванов","fact":"Купил у него два канала и занял 100р, на каналах скрутили подписчиков, в итоге потерял 1100 рублей","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id390777667"},
{"text":"https://vk.com/ymer_v_ad","namefemale":"Кирилл Бутенко","fact":"Кидок - кинул на 140р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id378197562"},
{"text":"https://vk.com/id378197562","namefemale":"Кирилл Бутенко","fact":"Кидок - кинул на 140р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id378197562"},
{"text":"https://vk.com/aleksey_mimrysnosoirval_2021","namefemale":"Алексей Миронов","fact":"Кидок - кинул на 525р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id602986715"},
{"text":"https://vk.com/id602986715","namefemale":"Алексей Миронов","fact":"Кидок - кинул на 525р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id602986715"},
{"text":"https://vk.com/aewsp","namefemale":"Кирилл Шурин","fact":"Кидок - кинул на 525р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id567249906"},
{"text":"https://vk.com/id567249906","namefemale":"Кирилл Шурин","fact":"Кидок - кинул на 525р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id567249906"},
{"text":"https://vk.com/id596255122","namefemale":"Илья Петров","fact":"Продаёт страницу для скама. ","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id596255122"},
{"text":"https://vk.com/iliabelov777","namefemale":"Илья Белов","fact":"Кидок - кинул на 770р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id243734151"},
{"text":"https://vk.com/id243734151","namefemale":"Илья Белов","fact":"Кидок - кинул на 770р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id243734151"},
{"text":"https://vk.com/imperator_palpatineee","namefemale":"Император Палпатин","fact":"Фейк конкурс , также скинул фейк скриншот.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id669930679"},
{"text":"https://vk.com/id669930679","namefemale":"Император Палпатин","fact":"Фейк конкурс , также скинул фейк скриншот.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id669930679"},
{"text":"https://vk.com/milkissog","namefemale":"Женя Милкис","fact":"Обманывает людей на деньги!","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id670016610"},
{"text":"https://vk.com/id670016610","namefemale":"Женя Милкис","fact":"Обманывает людей на деньги!","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id670016610"},
{"text":"https://vk.com/mc.lovkin","namefemale":"Илья Лёвкин","fact":"Якобы дизайнер, показывает  чужие работы и пытается обмануть, попытка скама не удалось.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id540696867"},
{"text":"https://vk.com/id540696867","namefemale":"Илья Лёвкин","fact":"Якобы дизайнер, показывает  чужие работы и пытается обмануть, попытка скама не удалось.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id540696867"},
{"text":"https://vk.com/covidochka","namefemale":"Олегсей Бывальцев","fact":"Кидок - кинул на 122р.","number":"+79622282085","group":"Не удалось найти","vechnaya":"https://vk.com/id502405459"},
{"text":"https://vk.com/gang_trapa","namefemale":"Алексей Смирнов","fact":"Кидок - кинул на 90р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id624596862"},
{"text":"https://vk.com/id624596862","namefemale":"Алексей Смирнов","fact":"Кидок - кинул на 90р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id624596862"},
{"text":"https://vk.com/id562001011","namefemale":"Никита Фролов","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id562001011"},
{"text":"https://vk.com/spiner_75","namefemale":"Никита Фролов","fact":"Кидок","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id562001011"},
{"text":"https://vk.com/id502405459","namefemale":"Олегсей Бывальцев","fact":"Кидок - кинул на 122р.","number":"+79622282085","group":"Не удалось найти","vechnaya":"https://vk.com/id502405459"},
{"text":"https://vk.com/gazingarant","namefemale":"Алексей Газин","fact":"Кидок - кинул на 5200р.","number":"+79586686374","group":"Не удалось найти","vechnaya":"https://vk.com/id596336872"},
{"text":"https://vk.com/id596336872","namefemale":"Алексей Газин","fact":"Кидок - кинул на 5200р.","number":"+79586686374","group":"Не удалось найти","vechnaya":"https://vk.com/id596336872"},
{"text":"https://vk.com/azam_ebet","namefemale":"Азамат Тандыров","fact":"Кидок - кинул на 576р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id648396673"},
{"text":"https://vk.com/vizapdov","namefemale":"Владислав Визардов","fact":"Кидок - кинул на 650р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id561356672"},
{"text":"https://vk.com/id561356672","namefemale":"Владислав Визардов","fact":"Кидок - кинул на 650р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id561356672"},
{"text":"https://vk.com/id648396673","namefemale":"Азамат Тандыров","fact":"Кидок - кинул на 576р.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id648396673"},
{"text":"https://vk.com/filimongg","namefemale":"Pavel Filimon","fact":"Обманул на аккаунт клеш рояль.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id545743625"},
{"text":"https://vk.com/id545743625","namefemale":"Pavel Filimon","fact":"Обманул на аккаунт клеш рояль.","number":"Не удалось найти ","group":"Не удалось найти","vechnaya":"https://vk.com/id545743625"},
{"text":"https://vk.com/i_m_marat","namefemale":"Марат Тимченко","fact":"Кидок - кинул на 500р.","number":"+79520248248","group":"Не удалось найти","vechnaya":"https://vk.com/id678292161"},
{"text":"https://vk.com/id678292161","namefemale":"Марат Тимченко","fact":"Кидок - кинул на 500р.","number":"+79520248248","group":"Не удалось найти","vechnaya":"https://vk.com/id678292161"},
{"text":"https://vk.com/id390777667","namefemale":"Иван Иванов","fact":"Купил у него два канала и занял 100р, на каналах скрутили подписчиков, в итоге потерял 1100 рублей","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id390777667"},

{"text":"https://vk.com/id457490099","namefemale":"Григорий Бэйл","fact":"Создатель сайта","number":"Не удалось найти","group":"https://vk.com/eliruofficial","vechnaya":"https://vk.com/id457490099"},

{"text":"https://vk.com/gregorymorozovidme","namefemale":"Григорий Бэйл","fact":"Создатель сайта","number":"Не удалось найти","group":"https://vk.com/eliruofficial","vechnaya":"https://vk.com/id457490099"},

{"text":"https://vk.com/adamnord","namefemale":"Adam Nordman","fact":"Под видом продажи золота просто разводят детей на деньги Отзывы соответственно не настоящие так как про комиссию нигде не указано и не написано не в скринах отзывов или где либо еще Киньте жалобу Пусть лошок потеряет доход который так старательно нарабатывал на пиздеже.","number":"+79236908174","group":"https://t.me/goldstand2","vechnaya":"https://vk.com/id399422787"},

{"text":"https://vk.com/id399422787","namefemale":"Adam Nordman","fact":"Под видом продажи золота просто разводят детей на деньги Отзывы соответственно не настоящие так как про комиссию нигде не указано и не написано не в скринах отзывов или где либо еще Киньте жалобу Пусть лошок потеряет доход который так старательно нарабатывал на пиздеже.","number":"+79236908174","group":"https://t.me/goldstand2","vechnaya":"https://vk.com/id399422787"},

{"text":"https://vk.com/bbb8818","namefemale":"Николай Траненко","fact":"обманул на аккаунт стоимостью 500₽ ","number":"+79536189219","group":"Не удалось найти","vechnaya":"https://vk.com/id576310067"},
{"text":"https://vk.com/id576310067","namefemale":"Николай Траненко","fact":"обманул на аккаунт стоимостью 500₽ ","number":"+79536189219","group":"Не удалось найти","vechnaya":"https://vk.com/id576310067"},

{"text":"https://vk.com/garant_minytov","namefemale":"Александр Минутов","fact":"обманул на аккаунт стоимостью 500₽ ","number":"+79536189219","group":"Не удалось найти","vechnaya":"https://vk.com/id132621610"},
{"text":"https://vk.com/id132621610","namefemale":"Александр Минутов","fact":"обманул на аккаунт стоимостью 500₽ ","number":"+79536189219","group":"Не удалось найти","vechnaya":"https://vk.com/id132621610"},

{"text":"https://vk.com/krylov_nelox","namefemale":"Максим Крутов","fact":"обманул на 800₽ ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id676041673"},
{"text":"https://vk.com/id676041673","namefemale":"Максим Крутов","fact":"обманул на 800₽ ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id676041673"},

{"text":"https://vk.com/ya_smirnov_of","namefemale":"Максим Смирнов","fact":"обманул на 800₽ ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id628945929"},
{"text":"https://vk.com/id628945929","namefemale":"Максим Смирнов","fact":"обманул на 800₽ ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id628945929"},

{"text":"https://vk.com/id517221528","namefemale":"Андрей Кувшин","fact":"Предложил купить аккаунт бравл Старс за 150р. потом после оплаты кинул в ЧС.","number":"+89776350525","group":"Не удалось найти","vechnaya":"https://vk.com/id517221528"},

{"text":"https://vk.com/official_nicolai1993","namefemale":"Николай Крылов","fact":"После продажи аккаунта за 2700р пытался второй раз тот же аккаунт продать другому человеку(восстановить и привязать на почту покупателя)","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id646241520"},
{"text":"https://vk.com/id646241520","namefemale":"Николай Крылов","fact":"После продажи аккаунта за 2700р пытался второй раз тот же аккаунт продать другому человеку(восстановить и привязать на почту покупателя)","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id646241520"},
{"text":"https://vk.com/hmelew","namefemale":"Алексей Филипов","fact":"Обманул на 120р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id666843554"},
{"text":"https://vk.com/id666843554","namefemale":"Алексей Филипов","fact":"Обманул на 120р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id666843554"},
{"text":"https://vk.com/hmelew","namefemale":"Алексей Филипов","fact":"Обманул на 120р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id666843554"},
{"text":"https://vk.com/id666843554","namefemale":"Алексей Филипов","fact":"Обманул на 120р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id666843554"},
{"text":"https://vk.com/albert.bbikov","namefemale":"Альберт Быков","fact":"Накрутчик ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id562733367"},
{"text":"https://vk.com/id562733367","namefemale":"Альберт Быков","fact":"Накрутчик ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id562733367"},
{"text":"https://vk.com/leovorochay","namefemale":"Лев Ворочай","fact":"Продажа стр с отзывами  ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id621152965"},
{"text":"https://vk.com/id621152965","namefemale":"Лев Ворочай","fact":"Продажа стр с отзывами  ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id621152965"},
{"text":"https://vk.com/id_francyz","namefemale":"Никита Громов","fact":"Накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id483124125"},
{"text":"https://vk.com/id483124125","namefemale":"Никита Громов","fact":"Накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id483124125"},
{"text":"https://vk.com/grabber33","namefemale":"Данил Липецкий","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id303482311"},
{"text":"https://vk.com/id303482311","namefemale":"Данил Липецкий","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id303482311"},
{"text":"https://vk.com/viktoria_mironova2022","namefemale":"Данил Липецкий","fact":"Накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id568306080"},
{"text":"https://vk.com/id568306080","namefemale":"Данил Липецкий","fact":"Накрутчик","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id568306080"},
{"text":"https://vk.com/why.kempelov","namefemale":"Артем Кемпелов","fact":"Кинул на 2800р.","number":"+79500001875","group":"Не удалось найти","vechnaya":"https://vk.com/id676326201"},
{"text":"https://vk.com/id676326201","namefemale":"Артем Кемпелов","fact":"Кинул на 2800р.","number":"+79500001875","group":"Не удалось найти","vechnaya":"https://vk.com/id676326201"},
{"text":"https://vk.com/id678789734","namefemale":"Андрей Зорин","fact":"Накрутчик Отзывов","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id678789734"},
{"text":"https://vk.com/v_savin29","namefemale":"Вова Савин","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id194966529"},
{"text":"https://vk.com/id194966529","namefemale":"Вова Савин","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id194966529"},
{"text":"https://vk.com/ermakov_garan","namefemale":"Никита Ермаков","fact":"Кидок","number":"Не удалось найти","group":"https://vk.com/club205329580","vechnaya":"https://vk.com/id660121319"},
{"text":"https://vk.com/id660121319","namefemale":"Никита Ермаков","fact":"Кидок","number":"Не удалось найти","group":"https://vk.com/club205329580","vechnaya":"https://vk.com/id660121319"},
{"text":"https://vk.com/clubclub2242146","namefemale":"ПИАР | Brawl Stars , PING, StandOff2 ,Minecraft","fact":"Обманули на 199р.","number":"Не удалось найти","group":"Это и есть Сообщество.","vechnaya":"https://vk.com/club208296303"},
{"text":"https://vk.com/club208296303","namefemale":"ПИАР | Brawl Stars , PING, StandOff2 ,Minecraft","fact":"Обманули на 199р.","number":"Не удалось найти","group":"Это и есть Сообщество.","vechnaya":"https://vk.com/club208296303"},
{"text":"https://vk.com/elizaweta_ponomoreva","namefemale":"Елизавета Пономорева","fact":"Обманули на 2150р..","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id675434957"},
{"text":"https://vk.com/id675434957","namefemale":"Елизавета Пономорева","fact":"Обманули на 2150р..","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id675434957"},
{"text":"https://vk.com/id3793760","namefemale":"Aram Akhmedov","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id3793760"},
{"text":"https://vk.com/ara_ls","namefemale":"Aram Akhmedov","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id3793760"},
{"text":"https://vk.com/orig_derbetov","namefemale":"Daniil Derbetov","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id16570693"},
{"text":"https://vk.com/id16570693","namefemale":"Daniil Derbetov","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id16570693"},
{"text":"https://vk.com/seksua1ka","namefemale":"Аня Беллова","fact":"Мошенница! В общем она якобы хотела приобрести мои услуги трейда, в итоге перешла на грубый разговор , оскарбления родителй и тд. Так же ей постоянно нужны скрины аккаунтов, предпологаю что она их берет для мошеннических схем! Жалобу на нее мошенничество.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id597976142"},
{"text":"https://vk.com/id597976142","namefemale":"Аня Беллова","fact":"Мошенница! В общем она якобы хотела приобрести мои услуги трейда, в итоге перешла на грубый разговор , оскарбления родителй и тд. Так же ей постоянно нужны скрины аккаунтов, предпологаю что она их берет для мошеннических схем! Жалобу на нее мошенничество.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id597976142"},
{"text":"https://vk.com/anisimov_garantik","namefemale":"Влад Насваев'ковид","fact":"Kидок, кинул на 50р","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id453608793"},
{"text":"https://vk.com/id453608793","namefemale":"Влад Насваев'ковид","fact":"Kидок, кинул на 50р","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id453608793"},
{"text":"https://vk.com/garant_miron","namefemale":"Владислав Миронов","fact":"Kидок, кинул на 800р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id608423213"},
{"text":"https://vk.com/id608423213","namefemale":"Владислав Миронов","fact":"Kидок, кинул на 800р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id608423213"},

{"text":"https://vk.com/zhomartov05","namefemale":"Жасик Жомартов","fact":"Kидок","number":"+87474265274","group":"https://vk.com/club182916667","vechnaya":"https://vk.com/id417502130"},
{"text":"https://vk.com/id417502130","namefemale":"Жасик Жомартов","fact":"Kидок","number":"+87474265274","group":"https://vk.com/club182916667","vechnaya":"https://vk.com/id417502130"},
{"text":"https://vk.com/avangartop1kz","namefemale":"AVANGAR Free Fire","fact":"Группа кидка https://vk.com/id417502130 Жасик Жомартов","number":"+87474265274","group":"Это и есть сообщество","vechnaya":"https://vk.com/club182916667"},
{"text":"https://vk.com/club182916667","namefemale":"AVANGAR Free Fire","fact":"Группа кидка https://vk.com/id417502130 Жасик Жомартов","number":"+87474265274","group":"Это и есть сообщество","vechnaya":"https://vk.com/club182916667"},
{"text":"https://vk.com/id_popa_official","namefemale":"Эрик Попов","fact":"Решил купить у него голду на 1370 руб, скинул ему! Он сказал выставить скин, я выставил. Прошло 5 дней, так и не купил.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id520354496"},
{"text":"https://vk.com/id520354496","namefemale":"Эрик Попов","fact":"Решил купить у него голду на 1370 руб, скинул ему! Он сказал выставить скин, я выставил. Прошло 5 дней, так и не купил.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id520354496"},
{"text":"https://vk.com/gravprav","namefemale":"Влад Граф","fact":"Хотел я купить Kunai Luxury за 520 рублей по тп, позвал мирного в гаранты, он добавил Влада Графа и написал ручаюсь (мирный тут не причем) т.е Влад Граф являлся гарантом. В итоге произошла отмена (отменил я) он долго не отвечал часа 2, в итоге пишет ку сорри далее он пишет что у него отлетел киви с деньгами, но он сказал что завтра якобы выведет кабура и он мне отдаст деньги, пишу на следующией день мол ну что? он мне отвечает что еще выводит, я пишу ок на следующий день пишу опять же ну что? он говорит до конца дня скину, я опять же пишу ок пишу в полночь мол ну что? он мне отвечает что не переводится и говорит давай киви (у меня сбер и тинькофф) я пишу что нету, в итоге через где то утром пишу, он же мне сказал что тебя наебали, бб.. Вы наверное спросите зачем я пошел на него? Это же нн. Но тут не так просто ибо он взял стаж у 3 топов (круз, попов, мирный) поэтому я и поверил. Деньги то мне вернут, но хочу предупредить что он всех кинул в чс, меня и всех у кого взял стаж, а посты у него остались типо что они за него ручаются, хотя он снят теперь со всех стажей. ","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id624784754"},
{"text":"https://vk.com/id624784754","namefemale":"Влад Граф","fact":"Хотел я купить Kunai Luxury за 520 рублей по тп, позвал мирного в гаранты, он добавил Влада Графа и написал ручаюсь (мирный тут не причем) т.е Влад Граф являлся гарантом. В итоге произошла отмена (отменил я) он долго не отвечал часа 2, в итоге пишет ку сорри далее он пишет что у него отлетел киви с деньгами, но он сказал что завтра якобы выведет кабура и он мне отдаст деньги, пишу на следующией день мол ну что? он мне отвечает что еще выводит, я пишу ок на следующий день пишу опять же ну что? он говорит до конца дня скину, я опять же пишу ок пишу в полночь мол ну что? он мне отвечает что не переводится и говорит давай киви (у меня сбер и тинькофф) я пишу что нету, в итоге через где то утром пишу, он же мне сказал что тебя наебали, бб.. Вы наверное спросите зачем я пошел на него? Это же нн. Но тут не так просто ибо он взял стаж у 3 топов (круз, попов, мирный) поэтому я и поверил. Деньги то мне вернут, но хочу предупредить что он всех кинул в чс, меня и всех у кого взял стаж, а посты у него остались типо что они за него ручаются, хотя он снят теперь со всех стажей.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id624784754"},
{"text":"https://vk.com/okoppp","namefemale":"Лёша Олеев","fact":"После отправки данных кинул в чс и сбросил телефон","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id569434970"},
{"text":"https://vk.com/id569434970","namefemale":"Лёша Олеев","fact":"После отправки данных кинул в чс и сбросил телефон","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id569434970"},
{"text":"https://vk.com/moon_web","namefemale":"ПРОДАЖА ОБМЕН СКИНОВ CS GO...","fact":"Будьте внимательны данная группа обманывает людей ! ","number":"Не удалось найти","group":"Это и есть сообщество","vechnaya":"https://vk.com/club89233658"},
{"text":"https://vk.com/club89233658","namefemale":"ПРОДАЖА ОБМЕН СКИНОВ CS GO...","fact":"Будьте внимательны данная группа обманывает людей ! ","number":"Не удалось найти","group":"Это и есть сообщество","vechnaya":"https://vk.com/club89233658"},
{"text":"https://vk.com/m1rsw_ivnv_garant","namefemale":"Мирослав Иванов","fact":"Кидок, Кинул на 100 рублей, кинул ему бабки требует вторую часть и бабки не хочет отдавать.","number":"+79876882850","group":"Не удалось найти","vechnaya":"https://vk.com/id565164933"},
{"text":"https://vk.com/id565164933","namefemale":"Мирослав Иванов","fact":"Кидок, Кинул на 100 рублей, кинул ему бабки требует вторую часть и бабки не хочет отдавать.","number":"+79876882850","group":"Не удалось найти","vechnaya":"https://vk.com/id565164933"},
{"text":"https://vk.com/garant_podus0v","namefemale":"Никита Подусов","fact":"Накрутчик отзывов","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id679311152"},
{"text":"https://vk.com/id679311152","namefemale":"Никита Подусов","fact":"Накрутчик отзывов","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id679311152"},
{"text":"https://vk.com/kentworkk","namefemale":"Магомед Мамедов","fact":"Продажа стр с отзывами","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id580825205"},
{"text":"https://vk.com/id580825205","namefemale":"Магомед Мамедов","fact":"Продажа стр с отзывами","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id580825205"},
{"text":"https://vk.com/a_martinin","namefemale":"Артём Мартинин","fact":"Данный человек обманул на аккаунт при обмене в игре. после перевязки данных на себя он кинул в чс и ничего отдал взамен.","number":"+375259144173","group":"Не удалось найти","vechnaya":"https://vk.com/id349365836"},
{"text":"https://vk.com/id349365836","namefemale":"Артём Мартинин","fact":"Данный человек обманул на аккаунт при обмене в игре. после перевязки данных на себя он кинул в чс и ничего отдал взамен.","number":"+375259144173","group":"Не удалось найти","vechnaya":"https://vk.com/id349365836"},
{"text":"https://vk.com/balaev.garant","namefemale":"Амир Балаев","fact":"Кинул на 350р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id551582632"},
{"text":"https://vk.com/id551582632","namefemale":"Амир Балаев","fact":"Кинул на 350р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id551582632"},
{"text":"https://vk.com/nikitos1k_famelov","namefemale":"Никита Фамелов","fact":"Обманул на  112р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id680155114"},
{"text":"https://vk.com/id680155114","namefemale":"Никита Фамелов","fact":"Обманул на  112р.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id680155114"},
{"text":"https://vk.com/id667324302","namefemale":"Илья Кузнецов","fact":"слива:кинул на отзыв чела, и + накручивает отзывы.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id667324302"},
{"text":"https://vk.com/offical_garant_kuznetsov","namefemale":"Илья Кузнецов","fact":"слива:кинул на отзыв чела, и + накручивает отзывы.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id667324302"},
{"text":"https://vk.com/mmmmmmmmmmn5544","namefemale":"Максим Кобяков","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id669962903"},
{"text":"https://vk.com/id669962903","namefemale":"Максим Кобяков","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id669962903"},
{"text":"https://vk.com/leeeeeegaaaaa","namefemale":"Стёпа Кидок","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id630582056"},
{"text":"https://vk.com/id630582056","namefemale":"Стёпа Кидок","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id630582056"},
{"text":"https://vk.com/id668823691","namefemale":"Дмитрий Песков","fact":"Кидок - Накрутчик,кинул на отзыв, накрут отзывов.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id668823691"},
{"text":"https://vk.com/kl1n0k666","namefemale":"Александр Александров","fact":"Кидок - кинул на акк в бравл старс по коду.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id266062331"},
{"text":"https://vk.com/id266062331","namefemale":"Александр Александров","fact":"Кидок - кинул на акк в бравл старс по коду.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id266062331"},
{"text":"https://vk.com/id632961055","namefemale":"Илья Краснов","fact":"Кидок - кинул на 101р.","number":"+89273415209","group":"Не удалось найти","vechnaya":"https://vk.com/id632961055"},
{"text":"https://vk.com/vellafr","namefemale":"Владислав Горев","fact":"Кидок - кинул на отзыв.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id583791227"},
{"text":"https://vk.com/id583791227","namefemale":"Владислав Горев","fact":"Кидок - кинул на отзыв.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id583791227"},
{"text":"https://vk.com/v1kong","namefemale":"Паша Лунев","fact":"Кидок - кинул на отзыв.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id572789283"},
{"text":"https://vk.com/id572789283","namefemale":"Паша Лунев","fact":"Кидок - кинул на отзыв.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id572789283"},
{"text":"https://vk.com/yxnglennard","namefemale":"Lennard Wollyung ","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id673685993"},
{"text":"https://vk.com/id673685993","namefemale":"Lennard Wollyung ","fact":"Кидок","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id673685993"},
{"text":"https://vk.com/gg_gopov","namefemale":"Максим Малыханов","fact":"Пытался кинуть на аккаунт и на скрины моего инвентаря.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id532790659"},
{"text":"https://vk.com/id532790659","namefemale":"Максим Малыханов","fact":"Пытался кинуть на аккаунт и на скрины моего инвентаря.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id532790659"},
{"text":"https://vk.com/oper_702_rus","namefemale":"Егор Громов","fact":"Накрут. Отзыв.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id633467843"},
{"text":"https://vk.com/id633467843","namefemale":"Егор Громов","fact":"Накрут. Отзыв.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id633467843"},
{"text":"https://vk.com/getreadyfornovember","namefemale":"Матвей Дальченко","fact":"Учит скаму и сам скамит.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id478444494"},
{"text":"https://vk.com/id478444494","namefemale":"Матвей Дальченко","fact":"Учит скаму и сам скамит.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id478444494"},
{"text":"https://vk.com/byf3i","namefemale":"Максим Стрелецкий ","fact":"Кинул на аккаунт.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id669195064"},
{"text":"https://vk.com/id669195064","namefemale":"Максим Стрелецкий ","fact":"Кинул на аккаунт.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id669195064"},
{"text":"https://vk.com/id520450803","namefemale":"Денис Денисов","fact":"Кинул на аккаунт по коду в бравл старс.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id520450803"},
{"text":"https://vk.com/id636630915","namefemale":"Сергей Шипилов","fact":"Обман - говорит что у него якобы есть промокоды, а у него их нет.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id636630915"},
{"text":"https://vk.com/id660174038","namefemale":"Олег Астархов","fact":"Кинул на аккаунт.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id660174038"},
{"text":"https://vk.com/tsopper","namefemale":"Дима Медведев","fact":"Кидок - кинул на 100 рублей.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id397797028"},
{"text":"https://vk.com/id397797028","namefemale":"Дима Медведев","fact":"Кидок - кинул на 100 рублей.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id397797028"},
{"text":"https://vk.com/yormamakanava","namefemale":"Бузмаков Арсений","fact":"Кидок - кинул на аккаунт.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id647165908"},
{"text":"https://vk.com/id647165908","namefemale":"Бузмаков Арсений","fact":"Кидок - кинул на аккаунт.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id647165908"},
{"text":"https://vk.com/idi.naxuuui","namefemale":"Саша Алексев(Ибрагим - старая ссылка  https://vk.com/fuck.mentiev)","fact":"Кидок - кинул на лайк.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id594968705"},
{"text":"https://vk.com/id594968705","namefemale":"Саша Алексев(Ибрагим - старая ссылка  https://vk.com/fuck.mentiev)","fact":"Кидок - кинул на лайк.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id594968705"},
{"text":"https://vk.com/kiriyanow","namefemale":"Владимир Кириянов","fact":"Накрут.Отзывов","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id619952591"},
{"text":"https://vk.com/id619952591","namefemale":"Владимир Кириянов","fact":"Накрут.Отзывов","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id619952591"},
{"text":"https://vk.com/higato","namefemale":"Артем Федин","fact":"Накрут.Отзывов","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id466690356"},
{"text":"https://vk.com/id466690356","namefemale":"Артем Федин","fact":"Накрут.Отзывов","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id466690356"},
{"text":"https://vk.com/id440555847","namefemale":"Артем Крашельников","fact":"Кинул на отзыв.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id440555847"},
{"text":"https://vk.com/n___i___g___g___e___r","namefemale":"Иван Сапожников","fact":"Кидок - кинул на аккаунт в клешь оф кленс.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id568789505"},
{"text":"https://vk.com/id568789505","namefemale":"Иван Сапожников","fact":"Кидок - кинул на аккаунт в клешь оф кленс.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id568789505"},
{"text":"https://vk.com/majerosano","namefemale":"Ренат Аверин","fact":"Кидок - кинул на аватарку.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id551664220"},
{"text":"https://vk.com/id551664220","namefemale":"Ренат Аверин","fact":"Кидок - кинул на аватарку.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id551664220"},
{"text":"https://vk.com/alexus_gofuckyourself","namefemale":"Алексей Архипенков","fact":"Кидок - кинул на аккаунт.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id466651199"},
{"text":"https://vk.com/id466651199","namefemale":"Алексей Архипенков","fact":"Кидок - кинул на аккаунт.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id466651199"},
{"text":"https://vk.com/oleg_krayevskiy","namefemale":"Олег Краевский","fact":"Кинул на стикер пак.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id640376046"},
{"text":"https://vk.com/id640376046","namefemale":"Олег Краевский","fact":"Кинул на стикер пак.","number":"Не удалось найти","group":"Не удалось найти","vechnaya":"https://vk.com/id640376046"},
{"text":"https://vk.com/kordord","namefemale":"Даниил Сергеев","fact":"Кидок - кинул на 120р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id579636321"},
{"text":"https://vk.com/id579636321","namefemale":"Даниил Сергеев","fact":"Кидок - кинул на 120р.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id579636321"},
{"text":"https://vk.com/gorjkiy","namefemale":"Дмитрий Неверов","fact":"Попытка скама. Когда спалили начал всё отрицать и говорить, что рофл. Удачи ему в базах🙃","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id648716070"},
{"text":"https://vk.com/id648716070","namefemale":"Дмитрий Неверов","fact":"Попытка скама. Когда спалили начал всё отрицать и говорить, что рофл. Удачи ему в базах🙃","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id648716070"},
{"text":"https://vk.com/suckofffacking","namefemale":"Виктор Крутышкин'","fact":"Представляется стажем Элины, после чего скамит, будьте осторожны, желательно сразу в чс! ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id575837153"},
{"text":"https://vk.com/id575837153","namefemale":"Виктор Крутышкин'","fact":"Представляется стажем Элины, после чего скамит, будьте осторожны, желательно сразу в чс! ","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id575837153"},
{"text":"https://vk.com/id657360181","namefemale":"Данил Некрасов","fact":"Накрутчик","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id657360181"},
{"text":"https://vk.com/syforovv","namefemale":"Александр Суфоров","fact":"Клоун с накруткой и взаимными отзывами.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id558091402"},
{"text":"https://vk.com/id558091402","namefemale":"Александр Суфоров","fact":"Клоун с накруткой и взаимными отзывами.","number":"Не удалось найти ","group":"Не удалось найти ","vechnaya":"https://vk.com/id558091402"},
{"text":"https://vk.com/touchso3","namefemale":"Арсений Юневич","fact":"Кинул на 1650р.","number":"+375293509414","group":"Не удалось найти ","vechnaya":"https://vk.com/id625932661"},
{"text":"https://vk.com/id625932661","namefemale":"Арсений Юневич","fact":"Кинул на 1650р.","number":"+375293509414","group":"Не удалось найти ","vechnaya":"https://vk.com/id625932661"},
];

for (var i=0;i<paesi.length;i++) {
    if (d==paesi[i]["text"]) {
    condition=true;
    titolo.innerHTML = "Обнаружен мошенник!";        
    output.innerHTML = "<ul><li>Вы проверяли эту ссылку: "+c+"</li><li>Имя Фамилия: "+paesi[i]["namefemale"]+"</li><li>Описание/Коммент: "+paesi[i]["fact"]+"</li><li>Номер телефона: "+paesi[i]["number"]+"</li><li>Группа: "+paesi[i]["group"]+"</li><li>Вечная ссылка: "+paesi[i]["vechnaya"]+"</li></ul>";
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



