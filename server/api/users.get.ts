import { read, write } from "~/plugins/db.client";

export default defineEventHandler(async (event) => {
    return {
        "users": read()
    }
});