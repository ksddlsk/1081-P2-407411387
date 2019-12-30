const Speakers = require("../models/speakersModel");

exports.getSpeakers = async (req, res, next) => {
    try{
        let speakers;
        await Speakers.fetchAll().then(([rows]) => {
            speakers = rows;
        });
        //console.log("model-testing", speakers.length);
        res.render('speakers', { 
            data: speakers,
            title: 'speakers' 
        });
    }catch (err) {
        console.log(err);
    }
};