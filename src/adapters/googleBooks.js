class GoogleBooks {
  constructor(query){
    this.query = query
    this.baseUrl = 'https://www.googleapis.com/books/v1/volumes'
  }

  get(){
    const url = `${this.baseUrl}?q=${this.query}`
    return $.ajax({
      url: url
    })
  }
}
