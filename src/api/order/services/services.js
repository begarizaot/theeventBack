const findManyOrders = async (strapi, where) => {
  return await strapi.db.query("api::order.order").findMany({
    where: {  total_price: { $gt: 0 }, status_order_id: [1, 4],...where },
    populate: true,
    orderBy: { createdAt: "desc" },
  });
};

const findOneOrder = async (strapi, where) => {
  return await strapi.db.query("api::order.order").findOne({
    where: where,
    populate: true,
  });
};

const findWithCountOrders = async (strapi, where) => {
  return await strapi.db.query("api::order.order").findWithCount({
    where: where,
  });
};

const updateOrder = async (strapi, where, data) => {
  return await strapi.db.query("api::order.order").update({
    where: where,
    data: data,
    populate: true,
  });
};

const deleteOrder = async (strapi, where) => {
  return await strapi.db.query("api::order.order").delete({
    where: where,
  });
};

const createOrder = async (strapi, data) => {
  return await strapi.db.query("api::order.order").create({
    data: data,
  });
};

module.exports = {
  findOneOrder,
  findManyOrders,
  findWithCountOrders,
  updateOrder,
  deleteOrder,
  createOrder,
};
