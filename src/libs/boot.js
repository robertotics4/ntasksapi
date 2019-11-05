module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log(`NTask API started on port ${app.get('port')}`);
        });
    });
};