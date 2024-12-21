import { read, write } from "~/plugins/db.client";


export default defineEventHandler((event) => {
    const count = read() + 1;
    write(count);
    return {
        "users": read()
    }
});