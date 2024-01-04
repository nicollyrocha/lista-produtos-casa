const Parse = require("parse");

export const getProducts = async function () {
    try {
        const parseQuery = new Parse.Query("products");
        let profiles = await parseQuery.find();
        return profiles;
    } catch (error: any) {
        return `Error! ${error.message}`;
    }
};
