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


