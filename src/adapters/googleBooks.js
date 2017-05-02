class GoogleBooks {
  constructor(query){
    this.query = query
    this.url = 'https://www.googleapis.com/books/v1/volumes'
  }

  get(){
    const url = `${this.url}?q=${this.query}`
    console.log('Firing ajax request for ' + this.query)
    return $.ajax({
      url: url
    })
  }

  // post(data){
  //   return $.ajax({
  //     method: 'POST',
  //     data: data,
  //     url: url
  //   })
  // }

}

// class Spotify {
//
//   get(books){
//     const query = books.items[0].volumeInfo.title
//     return $.ajax("SPOTIFY/URL" + "?q=" + query)
//   }
// }
