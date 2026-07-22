const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { priceId } = JSON.parse(event.body);
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.URL}/book/confirmation`,
    cancel_url: `${process.env.URL}/book`,
  });
  return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
};
