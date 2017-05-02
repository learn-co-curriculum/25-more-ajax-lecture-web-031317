$(document).ready(function(){
  console.log('Document ready!')

  // Selects Different HTML Elements
  const $input = $('input#query')
  const $bookList = $('ul#books')
  const $form = $('form#book-search')

  function fetchAndRenderBooks(e){
    e.preventDefault()
    console.log("Form submitted!!")
    const bookAdapter = new GoogleBooks($input.val())
    // const newSpotifyAdapter = new Spotify()
    bookAdapter.get()
      .then(renderBooks)
      // .then(function(book){
      //   return book.volumeInfo
      // })
      // .then(function(volumeInfo){
      //   return volumeInfo.title
      // })
      // .then(function(title){
      //   debugger
      // })
      // .catch(function(){
      //   console.log("Something went wrong!")
      // })
  }

  // function simple(){
  //   debugger
  // }

  function renderBooks (data, status, request){
    // takes in some data and renders out a list of books
    console.log('response received!')
    console.log(data)
    const bookListItems = data.items.map(function(book){
      return `<li>${book.volumeInfo.title}</li>`
    })
    //
    // url = `api.spotify.com/search?q=${book.volumeInfo.title}`
    // $.ajax({
    //   url: url,
    //   success: function(data){
    //
    //   }
    // })

    $bookList.html(bookListItems.join(''))
    return data.items[0]
  }

  // on submit, fires a function
  $form.on('submit', fetchAndRenderBooks)
})
