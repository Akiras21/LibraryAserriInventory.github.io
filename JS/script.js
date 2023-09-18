// uno.js 

const bookForm = document.getElementById('book-form'); 

const editForm = document.getElementById('edit-form'); 

const booksSection = document.getElementById('books'); 

let books = []; 

let editingIndex = -1; 

bookForm.addEventListener('submit', (e) => { 

 e.preventDefault(); 

 const title = e.target.elements.title.value; 

 const author = e.target.elements.author.value; 

 const isbn = e.target.elements.isbn.value; 

 if (title.trim() === '' || author.trim() === '' || isbn.trim() === '') { 

 alert('Por favor, completa todos los campos.'); 

 return; 

} 

const newBook = { 

 title, 

 author, 

 isbn, 
}; 

if (editingIndex === -1) { 

 // Agregar un nuevo libro 

 books.push(newBook); 

 clearBookForm(); // Limpiar los campos del formulario de Agregar libro 

} else { 

// Editar libro existente 

books[editingIndex] = newBook; 

editingIndex = -1; 

 bookForm.reset(); 

 document.getElementById('add-book').style.display = 'block'; 

 document.getElementById('edit-book').style.display = 'none'; 

}

displayBooks(); 

}); 

function displayBooks() { 

booksSection.innerHTML = ''; 

books.forEach((book, index) => { 
  const bookItem = document.createElement('div'); 

 bookItem.classList.add('book-item'); 

 bookItem.innerHTML = ` 

 <h3>${book.title}</h3> 

 <p>Autor: ${book.author}</p> 

 <p>ISBN: ${book.isbn}</p> 

 <button onclick="editBook(${index})">Edit</button> 

 <button onclick="removeBook(${index})">Delete</button> 

`; 

booksSection.appendChild(bookItem); 

}); 

} 

function editBook(index) { 

 const bookToEdit = books[index]; 

 document.getElementById('edit-title').value = bookToEdit.title; 

 document.getElementById('edit-author').value = bookToEdit.author; 

 document.getElementById('edit-isbn').value = bookToEdit.isbn; 

 editingIndex = index; 

 document.getElementById('add-book').style.display = 'none'; 

 document.getElementById('edit-book').style.display = 'block'; 

} 

function removeBook(index) { 

 books.splice(index, 1); 

 displayBooks(); 

} 

function cancelEdit() { 

 editingIndex = -1; 

 clearBookForm(); // Limpiar los campos del formulario de Agregar libro 

 document.getElementById('add-book').style.display = 'block'; 

 document.getElementById('edit-book').style.display = 'none'; 

} 

 

function saveEditedBook() { 

 const title = document.getElementById('edit-title').value; 

 const author = document.getElementById('edit-author').value; 

 const isbn = document.getElementById('edit-isbn').value; 

 if (title.trim() === '' || author.trim() === '' || isbn.trim() === '') { 

 alert('Por favor, completa todos los campos.'); 

 return; 
} 

const editedBook = { 

 title, 

 author, 

 isbn, 
}; 

books[editingIndex] = editedBook; 
 editingIndex = -1; 

 editForm.reset(); 

 document.getElementById('add-book').style.display = 'block'; 

 document.getElementById('edit-book').style.display = 'none'; 

 displayBooks(); 

} 

// Añadir esta función para limpiar los campos del formulario de Agregar libro 

function clearBookForm() { 

 document.getElementById('title').value = ''; 

 document.getElementById('author').value = ''; 

 document.getElementById('isbn').value = ''; 

} 
//slider
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1);
    }
});

 