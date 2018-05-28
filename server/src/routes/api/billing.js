const Router = require('express').Router();
const stripeConfig = require('../../config').apiKeys.stripe;
const stripe = require('stripe')(stripeConfig.publishableKey);
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
