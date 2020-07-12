/*
Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

Вопросы к этому заданию
1.Создать объект с полем product, равным ‘iphone’

2.Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

3.Добавить поле details, которое будет содержать объект с полями model и color 
*/

let shopping = {
    product: 'iphone'
};
console.log(shopping);

shopping.price = 1000;
shopping.currency = 'dollar';
console.log(shopping);

shopping.details = {};
shopping.details.model = null;
shopping.details.color = "";
console.log(shopping);