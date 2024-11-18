import User from "../models/user.model.js"

export const getUserForSlider = async (req,res,next) => {
    
    try {
        const loggedInUser = req.user.id

        const allUserLoggedInExtract = await User.find({
                _id : {$ne : loggedInUser},
        }).select("-password")

        res.status(200).json(allUserLoggedInExtract)
    } catch (error) {
        next(error)
    }
}