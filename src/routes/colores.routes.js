import { Router } from "express";
import { check } from "express-validator";
import validarTarea from "../helpers/validarTarea";

const router = Router();

router.route("/").get().post()
router.route("/:id").get().delete().put()

export default router