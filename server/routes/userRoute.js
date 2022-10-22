import express from "express";
const router = express.Router();
import { signUp, logIn, protect, updatePassword, forgotPassword, resetPassword, restricTo } from "./../controllers/authController.js";
import { getUser, deleteMe, updateMe, deleteUser, updateUser } from "./../controllers/userController.js";


router.post("/kayit", signUp);
router.post("/giris", logIn);
router.post("/ayarlar/sifremi-unuttum", protect, forgotPassword)
router.post("/ayarlar/sifremi-resetle/:token", protect, resetPassword)

router.patch("/ayarlar/sifre", protect, updatePassword);
router.patch("/ayarlar/hesabi-kapat", protect, deleteMe)
router.patch("/ayarlar/guncelle", protect, updateMe)


//restricTo() fonksiyonu istenildiği gibi çalışmıyor!
router
    .route("/:nickname")
    .get(getUser)
    .delete(protect, deleteUser)
    .patch(protect, updateUser)
    //.patch(updateMe) ???


export default router;