const validateBody = (req, res, next) => {
    const { body } = req;

    if(body.title === undefined || body.title === ''){
       return res.status(400).json({message: "Field tittle is required"})
    }

    if(body.description === undefined){
        return res.status(400).json({message: "Field description is required"})
    }

    if(body.status === undefined){
        return res.status(400).json({message: "Field status is required"})
    }

    next();
;}


module.exports = {
    validateBody
}