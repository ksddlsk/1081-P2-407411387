const db = require("../utils/database");

const Speakers = class Speakers {
    constructor(id, name, job, pic) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.pic = pic;
    }

    static fetchAll(){
        return db.execute("SELECT * FROM `1081-1a`.speakers;");
    }
};

module.exports = Speakers;