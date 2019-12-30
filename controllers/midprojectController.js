const Midproject = require("../models/midprojectModel")

exports.getMidproject = async (req, res, next) => {
    try {
        let midproject;
        await Midproject.fetchAll().then(([rows]) => {
            midproject = rows;
        });
        //console.log("model-testing", midproject.length);
        res.render('midproject', { 
            data: midproject,
            title: 'midproject'
        });
    } catch (err) {
        console.log(err);
    }
};