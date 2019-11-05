module.exports = app => {

    const Tasks = app.models;

    app.get('/', (req, res) => {
        res.json({ status: 'NTASK API' })
    });
};


