import passport from 'passport';

const authRoutes = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get(
        '/auth/facebook',
        passport.authenticate('facebook', {
            scope: ['email'],
            display: 'popup'
        })
    );

    app.get('/auth/facebook/callback', passport.authenticate('facebook'));
};

export default authRoutes;
