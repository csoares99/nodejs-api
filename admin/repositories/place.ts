import { Place } from '../../models/place';

export async function getAll(): Promise<Place[]> {
    return await Place
    .query()
    .skipUndefined();
}