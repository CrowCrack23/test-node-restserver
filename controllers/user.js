


const userGet = (req, res) => {

    const query = req.query;

    res.json({
        query,
        msg: 'get API - controller'
    });
};


const userPost = (req, res) => {

    const body = req.body;

    res.status(201).json({
        body: body,
        msg: 'post API - controller'
    });
};

const userPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - controller',
        id
    });
};

const userDelete = (req, res) => {
    res.status(200).json({
        msg: 'delete API - controller'
    });
}


module.exports = {
    userGet,
    userDelete,
    userPut,
    userPost
}