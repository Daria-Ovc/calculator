//ищем в документе калькулятор и поле вывода результата:
let my_calculator = document.querySelector('.calc');
let field_result = document.querySelector('#print_result')

//назначаем функцию-слушателя:
my_calculator.addEventListener('click', clickOnCalculator);

function clickOnCalculator(event) {

    //проверяем, что нажатие произошло именно на одну из кнопок, а не в другом месте:
    if(!event.target.classList.contains('button_calc'))
        return 0;

    //получаем тект кнопки, на которую было произведено нажатие:
    let value_btn = event.target.innerText;

    switch (value_btn) {

        //очищаем поле вывода результата:
        case 'AC': {
            field_result.innerText = '';
            break;
        }

        //высчитываем результат введенных операций:
        case '=': {

            //проверка на корректный ввод (только цифры и операторы должны быть):

            if(field_result.innerText.search(/[^0-9*/+-.]/mi) !== -1)
                return 0;

            //проверка на деление на 0:
            if (field_result.innerText.indexOf('/0') !== -1)
                field_result.innerText = 'Ошибка!';

            //вычисление резулььтата:
            field_result.innerText = eval(field_result.innerText).toFixed(3);

            break;
        }

        //добавляем в поле ввода символ, на который был клик:
        default: {
            field_result.innerText += value_btn;
        }
    }
}