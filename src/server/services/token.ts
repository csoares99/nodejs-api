import * as jwt from 'jsonwebtoken';

export async function sign(tokenData:any): Promise<string> {
    return jwt.sign(tokenData.toJSON(), 'marri');
}