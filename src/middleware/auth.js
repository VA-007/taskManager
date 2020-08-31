const auth = async (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/');
    }
    next();
};

module.exports = auth;
