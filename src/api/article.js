import fly from './server'

export default {
  getArticleList: function (params) {
    return fly('/rest/article/listPagination', params, {
      method: 'POST'
    })
  },
  findArticle: function (params) {
    return fly('/rest/article/find', params, {
      method: 'GET'
    })
  }
}
