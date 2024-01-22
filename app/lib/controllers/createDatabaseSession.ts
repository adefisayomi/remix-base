import { createSessionStorage } from "@remix-run/node";
import Session from "../schemas/session";

export function createDatabaseSessionStorage({ cookie }: { cookie: any }) {

  return createSessionStorage({
    cookie,
    async createData(data, expires) {
      const session = new Session(data);
      await session.save();
      return session.id;
    },
    async readData(id) {
      return (await Session.findOne({ id })) || null;
    },
    async updateData(id, data, expires) {
      await Session.updateOne({ id }, { $set: data });
    },
    async deleteData(id) {
      await Session.deleteOne({ id });
    },
  });
}