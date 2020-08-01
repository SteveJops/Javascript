/* 1. Создать объект, который описывает ширину и высоту

прямоугольника, а также может посчитать площадь фигуры: */

const rectangle = {
    width:25, 
    height:15, 
    getSquare:function(){
        return this.width * this.height;
    },
};

// console.log(rectangle.getSquare());

/* 2.Создать объект, у которого будет цена товара и его скидка, а также

два метода: для получения цены и для расчета цены с учетом скидки: */

const price = {

price: 10,

discount: '15%',

getPrice: function(){
    return this.price },

getPriceWithDiscount: function(){
    return this.price - ((this.price * parseInt(this.discount))/100)}
};

console.log(price.getPrice()); // 10

console.log(price.getPriceWithDiscount()); // 8.5


/* 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. 
Метод должен возвращать новую высоту: */

const field = {
    height: function(){
        return this.height;
    },
    getHeightPlusOne: function(){
        return this.height += 1;
    }

};

field.height = 10;

field.getHeightPlusOne(); // придумать свое название для метода

console.log(field.height); // 11;


/* 4. Создать объект “вычислитель”, у которого есть числовое свойство

“значение” и методы “удвоить”, “прибавить один”, “отнять один”.

Методы можно вызывать через точку, образуя цепочку методов: */

const numerator = {

value: 1,
double: function () {
    this.value*=2;
    return this;
},
plusOne: function () {
    this.value+=1;
    return this;
},
minusOne: function () {
    return this.value-=1;
}
}
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value) // 3


/* 5. Создать объект с розничной ценой и количеством продуктов.

Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов) */


const products = {
    price: '10.35$',
    quantity: 19,
    mainPrice(){
        const getPrice = parseFloat(this.price) * this.quantity;
        return getPrice;
    },
}
console.log(products.mainPrice());

/* 6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.

Для этого “позаимствуйте” метод из предыдущего объекта.*/

const parts = {
    price: "39.60$",
    quantity: 7,
}
parts.mainPrice = products.mainPrice;

console.log(parts.mainPrice());



7. /* Даны объект и функция:

let sizes = {width: 5, height: 10},

getSquare = function () {return this.width * this.height};

Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes */

let sizes = {width: 5, height: 10},

getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes))

8. /* let element = {
    height: 25,
    getHeight: function () {return this.height;}
    };
    let getElementHeight = element.getHeight;
    getElementHeight(); // undefined
    Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.*/

    let element = {
        height: 25,
        getHeight: function () {return this.height;}
        };
    let getElementHeight = element.getHeight;
    console.log(getElementHeight.call(element));