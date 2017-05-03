class YoutubeVideoInfo {
  constructor(query){
    this.query = query
    //this.url = 'https://www.googleapis.com/books/v1/volumes'

    //var API_key is in adapters.api_key.js (a .gitignore 'hidden file')

    //this is for just the title:
    //this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.query}&fields=items%2Fsnippet%2Ftitle&key=` + API_key

    //this is for everything from youtube.search.list, as one big object, which includes the title and the video ID:
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.query}` + `&fields=etag%2CeventId%2Citems%2Ckind%2CnextPageToken%2CpageInfo%2CprevPageToken%2CregionCode%2CtokenPagination%2CvisitorId&key=` + API_key

  }

  get(){
    const url = `${this.url}`
    console.log('Firing ajax request for ' + this.query)
    return $.ajax({
      url: url
    })
  }

}
