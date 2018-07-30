import { User } from "../../models/user";
import { IUser } from "../../interfaces/user";
import { transaction, Transaction } from 'objection';

export async function findByEmail(email: string) {
    return await User
        .query()
        .where('email', '=', email)
        .first();
}

export async function insert(user: IUser, transaction: Transaction) {
    return await User.query(transaction).insert(user);
}