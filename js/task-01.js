const categoriesList = document.querySelectorAll('#categories .item');
  
console.log(`Liczba kategorii: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('ul li').length;
  console.log(`Kategoria: ${categoryName}, Liczba elementów: ${categoryItemsCount}`);
});