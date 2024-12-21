import { readFileSync, writeFileSync } from "fs";

const read = () => {
    return parseInt(readFileSync("db.txt", "utf-8"));
}

const write = (count: number) => {
    writeFileSync("db.txt", count.toString());
}

export {
    read,
    write,
};
