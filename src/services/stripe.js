const Stripe = require("stripe").default;
const stripe = new Stripe(process.env.STRIPE_PK || "");

/**
 * Generar intencion de PAGO
 */

const generatePaymentIntent = async (data) => {
  console.log("data",data);
  
  const { amount, user, payment_method } = data;
  const customers = await stripe.customers.list({
    email: user.email,
    limit: 1,
  });
  let customer;
  if (customers.data.length > 0) {
    // Usar cliente existente
    customer = customers.data[0];
  } else {
    // Crear un nuevo cliente
    customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
    });
  }
  const resPaymentIntent = await stripe.paymentIntents.create({
    amount: Number((parseFloat(amount) * 100).toFixed(0)),
    currency: process.env.STRIPE_CURRENCY,
    payment_method_types: ["card"],
    payment_method,
    metadata: { ...user },
    customer: customer.id,
  });

  return resPaymentIntent;
};

async function confirmPaymentIntentIfNecessary(paymentIntentId) {
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  if (paymentIntent.status !== 'succeeded' && paymentIntent.status !== 'requires_confirmation') {
    const confirmedPaymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    return confirmedPaymentIntent;
  } else {
    return paymentIntent;
  }
}


const generatePaymentSessions = async (data) => {
  const { lineItems, url, metadata, coupon } = data;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${url}?state=success`,
    cancel_url: `${url}?state=cancel`,
    currency: "usd",
    metadata: metadata,
    customer_email: metadata?.email || "",
    discounts: coupon
      ? [
          {
            coupon: coupon,
          },
        ]
      : [],
  });

  return session;
};

const generatePaymentCuponsPercent = async (value) => {
  const coupon = await stripe.coupons.create({
    percent_off: value,
    duration: "once",
  });

  return coupon.id;
};

const generatePaymentCuponsAmount = async (value) => {
  const coupon = await stripe.coupons.create({
    amount_off: value,
    duration: "once",
  });

  return coupon.id;
};

const createRefund = async (paymentIntent) => {
  const refund = await stripe.refunds.create({
    payment_intent: paymentIntent,
  });

  return refund;
};

/**
 * Confirmar pago
 */

const confirmPaymentIntent = async (id) => {
  const paymentIntent = await stripe.paymentIntents.confirm(id);
  return paymentIntent;
};

/**
 * Crear fuente
 */

const generatePaymentMethod = async (token) => {
  const paymentMethod = await stripe.paymentMethods.create({
    type: "card",
    card: { token },
  });

  return paymentMethod;
};

/**
 * Consultar detalle de ordne
 */

const getPaymentDetail = async (id) => {
  const detailOrder = await stripe.paymentIntents.retrieve(id);
  return detailOrder;
};

module.exports = {
  generatePaymentIntent,
  getPaymentDetail,
  confirmPaymentIntent,
  createRefund,
  generatePaymentMethod,
  generatePaymentSessions,
  generatePaymentCuponsPercent,
  generatePaymentCuponsAmount,
  confirmPaymentIntentIfNecessary,
};
