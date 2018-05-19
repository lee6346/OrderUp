const Router = require('express').Router();
const keys = require('../../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const { requireJwtAuth } = require('../../middlewares/auth');

Router.post('/stripe', requireJwtAuth, async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: 'usd',
    description: 'cater order',
    source: req.body.id,
  });
  req.user.credits += 5;
  const user = await req.user.save();
  res.send(user);
});
module.exports = Router;
