import { Model } from 'objection';

export class Place extends Model {
    public id: string;
    public name: string;
    public address: string;
    public number: string;
    public city: string;
    
    static get tableName() {
        return 'place';
    }
}