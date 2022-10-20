let buttonElem = document.querySelectorAll('.button');/* все кнопки*/
//в зависимости от id кнокпи рисуем квадрат, треугольник или круг
let square=document.getElementById('button_1').getAttribute('id');
let triangle=document.getElementById('button_2').getAttribute('id');
let circle =document.getElementById('button_3').getAttribute('id');

 //функция ВЫДЕЛЕНИЕ ФИГУРЫ желтым, при одном клике на нее И УДАЛЕНИЕ ПРИ ДВОЙНОМ НАЖАТИИ на фигуру
function Del(_figure, el)
{
  var timeoutId;//для отличия одного клика от двойного, для обновления
  _figure.addEventListener("click", function(){
    if(el.getAttribute('id')==triangle)
    {
      _figure.style.borderBottomColor="yellow";// выбранную фигуру в желтый
    }
    else{
      _figure.style.background="yellow";// выбранную фигуру в желтый
    }
 
    if (!timeoutId)//обновл таймера
        timeoutId = setTimeout('console.log("Fire")', 500);
        _figure.addEventListener("dblclick", function(){// при двойном нажатии
        clearTimeout(timeoutId);
        clearTimeout(timeoutId - 1);
        _figure.style.display="none";//убираем выбранную фигуру
        console.log('Dblclick');

      }); 
  });

}


buttonElem.forEach((el) => {//проходим по каждой кнопке
 
  el.addEventListener("click", function(event){//при клике на кнопку
    let input_val = document.getElementById('input_').value;//значение в инпуте
    console.log(`${input_val}`)
      
    if(event.target.closest('.button') && input_val){//общая проверка

      for(let i=0; i<input_val; i++)// строим n фигур- считываем из инпута кол-во фигур
      {

        if(el.getAttribute('id')==square)//если квадрат
        {
    
          let width_= parseInt(Math.random() * ( parseInt((document.body.offsetWidth)/2)  - 300) + 100);
          //console.log(`${width_}`)
          let _figure = document.createElement("div");//создаем тег див
          // создаем n тегов равных числу введеному в инпут
          _figure.className = '_figure';//присваиваем имя тегам
        
          _figure.classList.add('square');//добавл класс- отрисовка квадрата
          _figure.style.width=`${width_}px`;// с рандомной высотой=шириной
          _figure.style.height=`${width_}px`;
          _figure.style.opacity=`${83.5}%`;//для того, чтоб было видно наложение фигур 

          //ПОЗИЦИОНИРОВАНИЕ РАНДОМНОЕ
          _figure.style.transform = `translate(${parseInt(Math.random()*(parseInt((document.body.offsetWidth)/2)-100)+100)}px,
          ${parseInt(Math.random()*(parseInt((document.body.offsetWidth)/2)-450)+Math.random()*300)}px)`;
          let style_figure=_figure.style.transform;
          //console.log(`${style_figure}`);
          document.body.append(_figure);//добавл теги- псведоэлементы (фигуры) в докумнент

          //функция ВЫДЕЛЕНИЕ ФИГУРЫ желтым, при одном клике на нее И УДАЛЕНИЕ ПРИ ДВОЙНОМ НАЖАТИИ на фигуру
          Del(_figure,el);
        }
        
        if(el.getAttribute('id')==triangle)//если треугольник
        {
          let width_= parseInt(Math.random() * ( parseInt((document.body.offsetWidth)/4)  - 300) + 100);
          let _figure = document.createElement("div");//создаем тег див
          // создаем n тегов равных числу введеному в инпут
          _figure.className = '_figure';//присваиваем имя
          _figure.classList.add('triangle');//добавл класс- отрисовку треугольника
          _figure.style.borderWidth=`${width_}px`;// с рандомной шириной
          _figure.style.borderBottomWidth=`${width_}px`;
          _figure.style.opacity=`${85}%`;//для того, чтоб было видно наложение фигур 

          //ПОЗИЦИОНИРОВАНИЕ РАНДОМНОЕ, изменяем с помощью свойства transform координаты X и Y
          _figure.style.transform = `translate(${parseInt(Math.random()*(parseInt((document.body.offsetWidth)/2)-100)+100)}px,
          ${parseInt(Math.random()*(parseInt((document.body.offsetWidth)/2)-450)+Math.random()*300)}px)`; 
          let style_figure=_figure.style.transform;
          //console.log(`${style_figure}`);   
          document.body.append(_figure);//добавл теги- псведоэлементы (фигуры) в докумнент

          //функция ВЫДЕЛЕНИЕ ФИГУРЫ желтым, при одном клике на нее И УДАЛЕНИЕ ПРИ ДВОЙНОМ НАЖАТИИ на фигуру
          Del(_figure, el);
        }

        if(el.getAttribute('id')==circle)//если круг
        {
          let width_= parseInt(Math.random() * ( parseInt((document.body.offsetWidth)/4)  - 300) + 150);
          let _figure = document.createElement("div");//создаем тег див
          // создаем n тегов равных числу введеному в инпут
          _figure.className = '_figure';//присваиваем имя
          _figure.classList.add('circle');//добавл класс- отрисовку фигуры
          _figure.style.width=`${width_}px`;//с рандомной высотой=шириной
          _figure.style.height=`${width_}px`;
          _figure.style.borderRadius=`${width_/2}px`;//радиус круга-пол ширины
          _figure.style.opacity=`${85}%`;//для того, чтоб было видно наложение фигур 

          //ПОЗИЦИОНИРОВАНИЕ РАНДОМНОЕ, изменяем с помощью свойства transform координаты X и Y
          _figure.style.transform = `translate(${parseInt(Math.random()*(parseInt((document.body.offsetWidth)/2)-100)+100)}px,
          ${parseInt(Math.random()*(parseInt((document.body.offsetWidth)/2)-450)+Math.random()*300)}px)`;
          let style_figure=_figure.style.transform;
          //console.log(`${style_figure}`);
          document.body.append(_figure);//добавл теги- псведоэлементы (фигуры) в докумнент

          //функция ВЫДЕЛЕНИЕ ФИГУРЫ желтым, при одном клике на нее И УДАЛЕНИЕ ПРИ ДВОЙНОМ НАЖАТИИ на фигуру
          Del(_figure, el);
        }

      }
      
    }

  })  
});