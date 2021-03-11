const db = require('../models');

const index = (req, res) => {
    // Purpose: Fetch all examples from DB and return
    console.log('=====> Inside GET /stocks');

    db.Stock.find({}, (err, foundStocks) => {
        if (err) console.log('Error in stocks#index:', err);
        res.json(foundStocks);
    });
}

const show = (req, res) => {
    // Purpose: Fetch one example from DB and return
    console.log('=====> Inside GET /stocks/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id

    db.Stock.findById(req.params.id, (err, foundStock) => {
        if (err) console.log('Error in stock#show:', err);
        res.json(foundStock);
    });
};

const create = (req, res) => {
    // Purpose: Create one example by adding body to DB, and return
    console.log('=====> Inside POST /stocks');
    console.log('=====> req.body');
    console.log(req.body); // object used for creating new example

    db.Stock.create(req.body, (err, savedStock) => {
        if (err) console.log('Error in example#create:', err);
        res.json(savedStock);
    });
};

const update = (req, res) => {
    // Purpose: Update one example in the DB, and return
    console.log('=====> Inside PUT /stocks/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id
    console.log('=====> req.body');
    console.log(req.body); // object used for updating example

    db.Stock.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedStock) => {
        if (err) console.log('Error in stock#update:', err);
        res.json(updatedStock);
    });
};

const destroy = (req, res) => {
    // Purpose: Update one example in the DB, and return
    console.log('=====> Inside DELETE /stocks/:id');
    console.log('=====> req.params');
    console.log(req.params);

    db.Stock.findByIdAndDelete(req.params.id, (err, deletedStock) => {
        if (err) console.log('Error in stock#destroy:', err);
        res.sendStatus(200);
        console.log(deletedStock);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};

