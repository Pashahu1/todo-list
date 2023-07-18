'use strick';

const app = document.querySelector('.todo-app');
const list = document.querySelector('.todo-app__list');
const form = document.querySelector('.todo-app__form');


// form.addEventListener('submit', (event) => {
//  event.preventDefault();

  // const item = document.createElement('li');

  // item.textContent = form.elements.todo.value;

  // item.addEventListener('dblclick', () => {
  //   item.remove();
  // });

  // list.prepend(item);
  // list.insertAdjacentHTML('beforeend', `
  //   <li>
  //     ${form.elements.todo.value}
  //     <button onclick = 'this.parentElement.remove()'>x</button>
  //   </li>
  // `)

//   form.reset();
// })

// submit - подія відправки данних форми
// dblclick - подія дабл кліку
// append - він передає якийсь новий створений елемент на сторінку наразі item, в кінець
// prepend - створює на початку сторінки
// createElement('li');- створює новий елемент наразі 'li'
// item.textContent = form.elements.todo.value; - тут я зробив так що я створюю той контент що вписав в форму

// item - відповідає за створенні компоненти
// item.textContent - відповідає за створення самого контенту
// form.elements.todo.value; - ця частина код відповідає за індифікацію введення в форму наразі todo це імя форми в якій будуть індифікуватися значення




// list.insertAdjacentHTML('beforeend', `
// <li>
//   ${form.elements.todo.value}
//   <button onclick = 'this.parentElement.remove()'>x</button> 
// </li>
// `)


// list.insertAdjacentHTML - за його допомоги можна використовувати хтмл елементи та задавати йому 2 - значення

// 1)де він бде розміщувати контент
// 2)хтм елемент в якому він буде прописувати новий контент

// <li>
//   ${form.elements.todo.value} - аналізація введеного текст 
//   <button onclick = 'this.parentElement.remove()'>x</button> -створю кнопк яка при кліці бууде видаляти новий створений елемент на сторінці.
// </li> - на данному прикладі я взяв лі та задопомоги інтерполяції задав значення,які будуть аналізувати контент,тим самим він буде розпізнавати те що бло написано в формі та бде виводитися на вказаном місці.

// form.reset(); - очищує інпут після натискання на кнопку форми



// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   list.insertAdjacentHTML('beforeend', `
//     <li>
//       ${form.elements.todo.value}
//       <button onclick = 'this.parentElement.remove()'>X</button>
//     </li>
//   `)

//   form.reset();
// });


form.addEventListener('submit', (event) => {
  event.preventDefault();

  list.insertAdjacentHTML('beforeend', `
    <li>
      ${form.elements.todo.value};
      <button class="button__closer" onclick = 'this.parentElement.remove()'>X</button> 
    </li>
  `)
  
  form.reset();
})
