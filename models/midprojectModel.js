const db = require("../utils/database");

const Midproject = class Midproject {
    constructor(id, name, link, pic){
        this.id = id;
        this.name = name;
        this.link = link;
        this.pic = pic;
    }

    static fetchAll(){
        return db.execute("SELECT * FROM `1081-1a`.midproject;");
    }
};

module.exports = Midproject;