import { findByEmail } from '../repositories/user';
import { insert } from '../repositories/user';
import * as bcrypt from 'bcryptjs';
import { transaction } from 'objection';
import { IUser } from '../../../interfaces/user';
import { User } from '../../../models/user';

export async function login(user: IUser) {
    const userDB = await findByEmail(user.email);

    if (!userDB) {
        return;
    }

    const passwordIsValid = bcrypt.compareSync(user.password, userDB.password);

    if (!passwordIsValid) {
        return;
    }
}

export async function save(user: IUser) {
    return await transaction(User.knex(), async transaction => {
        return await insert(user, transaction);
    });
}