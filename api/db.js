const { DataStore } = require("notarealdb");
const store = new DataStore("./data");

console.log(store.collection("user").list());

module.exports = {
  user: store.collection("user"),
  cylinder_type: store.collection("cylinder_type"),
  order: store.collection("order"),
  order_sub_type: store.collection("order_sub_type"),
  order_type: store.collection("order_type"),
  sub_order: store.collection("sub_order"),
  user_category: store.collection("user_category"),
  user_profile: store.collection("user_profile"),
};
