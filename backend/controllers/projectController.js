const Project = require("../models/projectModel");

const createProject = async(req, res)=>{
    try{
        const { name , description } = req.body;

        const project = await Project.create({
            name,
            description,
            owner: req.user._id,
            members: [req.user._id],
        });

        res.status(201).json(project);

    }

    catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};