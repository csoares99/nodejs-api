import {compare} from 'bcryptjs';
import {findByEmail} from '../repositories/user';
import * as tokenService from '../../../services/token';

export async function login(email: string, password: string): Promise<string> {
    const user = await findByEmail(email);

    if (!user) {throw 'user-not-found';}

    if (!compare(password, user.password)) {throw 'invalid-password'}
    return tokenService.sign(user);
}