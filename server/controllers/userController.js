import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "./../utils/catchAsync.js";

export const getUser = catchAsync(async(req, res, next) => {
    const user = await User.findOne({ username: req.params.nickname })

    if (!user) {
        return next(new AppError("böyle bir kullanıcı yok!"))
    }
    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
});

export const deleteUser = catchAsync(async(req, res, next) => {
    const user = await User.findOneAndDelete({ username: req.params.nickname })
    if (!user) {
        return next(new AppError("bu nick'e sahip bir kullanıcı yok!", 404))
    }
    res.status(204).json({
        status: "success",
        data: null
    })
});

//kullanıcı nickname değiştiremez, sadece biyografi ve profil fotoğrafı değiştirebilir
export const updateUser = catchAsync(async(req, res, next) => {
    const updatedUser = await User.findOneAndUpdate({ username: req.params.nickname })
    if (!user) {
        return next(new AppError("bu nick'e sahip bir kullanıcı yok!", 404))
    }
    res.status(200).json({
        status: "success",
        data: {
            user: updatedUser
        }
    })
});