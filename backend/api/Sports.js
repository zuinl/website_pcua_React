module.exports = app => {
    const search = (req, res) => {
        let status
        let message = ""
        app.db.sportModel
        .find({ title: { $regex: '.*' + req.params.searchText + '.*', $options: 'i' } }, (err, docs) => {
            if(err) {
                status = 500,
                message = "Houve um erro no servidor"
            } else {
                status = 200
                message = "Sucesso"
            }
            res.status(status).json({ message, sports: docs })
        })
    }

    const getAll = (req, res) => {
        let status
        let message = ""
        app.db.sportModel
        .find({ }, (err, docs) => {
            if(err) {
                status = 500,
                message = "Houve um erro no servidor"
            } else {
                status = 200
                message = "Sucesso"
            }
            res.status(status).json({ message, sports: docs })
        })
    }

    const add = (req, res) => {
        let status
        let message = ""
        app.db.sportModel.create({
            _id: req.body._id,
            title: req.body.title,
            time: req.body.time,
            project: req.body.project,
            address: req.body.address,
            instructor: req.body.instructor,
        }, (err, doc) => {
            if(err) {
                status = 400
                message = "Houve um erro ao criar a turma esportiva"
            }
            else {
                status = 201
                message = `Turma ${req.body.title} criada com sucesso`
            }
            res.status(status).json({ message })
        })
    }

    return { search, getAll, add }
}