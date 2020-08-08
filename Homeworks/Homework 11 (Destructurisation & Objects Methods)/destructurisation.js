/* 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:



func(‘a’, ‘b’, ‘c’, ‘d’) →

{ first: ‘a’, other: [‘b’, ‘c’, ‘d’] } */


const funcWithRest = (first, ...others) => { return {"first": first, "other": others}};

const res = funcWithRest('a', 'b', 'c', 'd', 'f', 'e');
console.log(res)


/*  2. Организовать функцию getInfo, которая принимает объект вида
{ name: ..., info: { employees: [...], partners: [ … ] } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:


const organisation = {
name: 'Google',
info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
};



getInfo(organisation); →
Name: Google
Partners: Microsoft Facebook */

const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
    };

function showInfo({name="Unknown", info:{partners}}){
    const [m, f, x] = partners;
    console.log(name)
    console.log(m, f)
}
showInfo(organisation)

/* 3.  Дан объект:

let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": [
      "aliquip",
      "anim",
      "exercitation",
      "non",

    ],

    "friends": [
      {
        "id": 0,
        "name": "Barber Hicks"
      },

      {
        "id": 1,
        "name": "Santana Cruz"
      },

      {
        "id": 2,
        "name": "Leola Cabrera"
      }
    ],
  };



Используя деструктуризацию получить значения из следующих полей

1. name,  balance, email

2. из массива tags получить первый и последний элемент

3. из массива friends получить значение поле name из первого элемента массива

Если какое то из полей не имеет значения то подставить значение по умолчанию. */


let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": [
      "aliquip",
      "anim",
      "exercitation",
      "non",

    ],

    "friends": [
      {
        "id": 0,
        "name": "Barber Hicks"
      },

      {
        "id": 1,
        "name": "Santana Cruz"
      },

      {
        "id": 2,
        "name": "Leola Cabrera"
      }
    ],
  };


const{name: names = "Unknown", balance= "Unknown", email="Unknown", tags = []} = user;
const[a, a1, e, n] = tags; /* можно так еще: const {tags: [firstInd = "unknown1",,, lastInd = "unknown2"]} = user;
console.log(`Some User tags are: ${firstInd }, ${lastInd }`);
const {friends: [{name: friendName0 = "NoName0"}]} = user;
console.log(`First Friend name is: ${friendName0 }`);*/
console.log(names, balance, email);
console.log(a, n);

const{friends} = user;
const[name1,...name] = friends;
console.log(name1);



/* 4. С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends. */

const [...newTags] = tags;
console.log(newTags);

const[...newFriends] = friends;
console.log(...newFriends);
