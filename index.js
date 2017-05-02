$(document).ready(function(){
  // Selects Different HTML Elements
  const $input = $('input#query')
  const $bookList = $('ul#books')
  const $form = $('form#book-search')

  // on submit, fires a function
  $form.on('submit', fetchAndRenderBooks)

  function fetchAndRenderBooks(e){
    e.preventDefault()
    const bookAdapter = new GoogleBooks($input.val())
    bookAdapter.get().then(renderBooks)
    $input.val('')
  }

  function renderBooks (data, status, request){
    const bookListItems = data.items.map(function(book){
      return `<li>${book.volumeInfo.title}</li>`
    })
    $bookList.html(bookListItems.join(''))
  }
})
