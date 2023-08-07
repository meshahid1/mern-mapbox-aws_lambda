const CommentService = require('../service/commentService');

module.exports = (app) => {
    const service = new CommentService();
    app.use('/app-events', async (req, res, next) => {
        const {payload} = req.body

        service.SubscribedEvents(payload);
        console.log("============", payload);
    })
}