// Protecting who can start a new scrum

scrumRoutes.get('/', scrumsController.index);
scrumRoutes.post('/', authHelpers.loginRequired, scrumsController.create);

scrumRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render('scrums/scrums-new');
});

scrumRoutes.get('/:id', scrumsController.show);
scrumRoutes.get('/:id/edit', authHelpers.loginRequired, scrumsController.edit);
scrumRoutes.put('/:id', authHelpers.loginRequired, scrumsController.update);
scrumRoutes.delete('/:id', authHelpers.loginRequired, scrumsController.delete);