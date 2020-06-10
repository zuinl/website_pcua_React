module.exports = app => {
    app.get('/sports/getAll', app.api.Sports.getAll)
    app.get('/sports/search/:searchText', app.api.Sports.search)
    app.post('/sports/add', app.api.Sports.add)
}