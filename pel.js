
// Массив блюд
const dishes = [
 { name: 'Блинчики', price: 150 },
 { name: 'Пельмени', price: 200 },
 { name: 'Сырники', price: 180 },
 { name: 'Микс', price: 300 },
 { name: 'Пицца', price: 350 },
 { name: 'Бургер', price: 250 }
];

// Заполняем селект динамически с помощью цикла
const select = document.getElementById('dishSelect');
for (let i = 0; i < dishes.length; i++) {
 const option = document.createElement('option');
 option.value = dishes[i].name;
 option.text = `${dishes[i].name} - ${dishes[i].price}₽`;
 select.appendChild(option);
}

// Обработка формы
document.getElementById('orderForm').addEventListener('submit', function(e) {
 e.preventDefault();

 const name = document.getElementById('name').value.trim();
 const surname = document.getElementById('surname').value.trim();
 const address = document.getElementById('address').value.trim();
 const dishName = document.getElementById('dishSelect').value;

 // Находим цену выбранного блюда
 let dishPrice = 0;
 for (let i = 0; i < dishes.length; i++) {
   if (dishes[i].name === dishName) {
     dishPrice = dishes[i].price;
     break;
   }
 }

 // Итоговая сумма
 const total = dishPrice;

 // Выводим информацию
 const summaryDiv = document.getElementById('orderSummary');
 summaryDiv.innerHTML = `
   <h3>Ваш заказ:</h3>
   <p><strong>Имя:</strong> ${name}</p>
   <p><strong>Фамилия:</strong> ${surname}</p>
   <p><strong>Адрес:</strong> ${address}</p>
   <p><strong>Блюдо:</strong> ${dishName}</p>
   <p><strong>Цена:</strong> ${dishPrice}₽</p>
   <p><strong>Итоговая сумма:</strong> ${total}₽</p>
 `;
});
