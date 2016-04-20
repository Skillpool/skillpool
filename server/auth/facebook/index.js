'use strict';

import express from 'express';
import passport from 'passport';
import {setTokenCookie} from '../auth.service';

var router = express.Router();

router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/signup',
    session: false,
    display: 'popup'
  }),setTokenCookie)
  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false,
    display: 'popup'
  }), setTokenCookie);

export default router;
