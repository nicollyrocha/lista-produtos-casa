import Parse from "parse/dist/parse.min.js";

export const getProducts = async function () {
 try {
  const parseQuery = new Parse.Query("products");
  let profiles = await parseQuery.find();
  return profiles;
 } catch (error) {
  return `Error! ${error.message}`;
 }
};
