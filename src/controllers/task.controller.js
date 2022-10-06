import Task from "../model/Task.js";


export const getAuths = async (req,res) => {
    const data = await Task.find().sort('auth');
    return res.json(data);
}

export const authById = async (req,res) => {
    const data = await Task.findById(req.params.id);
    return res.json(data);
}

export const addAuth = async (req, res ) => {
    const { auth, description } = req.body;
    const newAuth = new Task({auth,description});
    await newAuth.save()
        .then( rs => res.status(200).json(rs) )
        .catch( err => res.status(500).json(err))
}

export const updateAuth = async (req,res) => {
    const { id } = req.params;
    const { auth, description } = req.body;
    await Task.findByIdAndUpdate(id,{auth,description})
        .then( rs => {
            res.status(200).json({
                message: 'The register has been updated succesfully'
            })
        })
        .catch( err => res.status(500).json(err))
}

export const removeAuth = async (req,res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id)
        .then( rs => {
            res.status(200).json({
                message: 'The register has been removed succesfully'
            })
        })
        .catch( err => res.status(500).json(err))
}


