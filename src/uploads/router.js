import express from "express";
import {generatePutUrl, generateGetUrl} from "./service.js";
import pool from "../connection.js";

const router = express.Router();

router.get("/get-signed-url", async (req, res, next) => {
    const {Key, ContentType} = req.query;
    generatePutUrl(Key, ContentType).then(url => res.send(url)).catch(err => res.send(err));
});

router.put("/save-avatar", (req, res, next) => {
    const {key} = req.body;
    generateGetUrl(key).then(url => {
        pool.query(`UPDATE customers SET profile_picture = '${url}' WHERE id = 1`)
            .then(result => res.send("Successfully saved image."))
            .catch(err => console.log(err));
    });
});

export default router;