import { getAll } from "../repositories/place";
import { Place } from "../../models/place";

export async function getAllPlaces(): Promise<Place[]> {
    const places = await getAll();
    
    return places;
} 