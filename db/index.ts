import Dexie, { EntityTable } from "dexie";

interface HotDogs {
  hotDogs: number;
}

export const db = new Dexie("hotDogsStorage")

db.version(1).stores({
  hotDogs: "hotDogs"
})
