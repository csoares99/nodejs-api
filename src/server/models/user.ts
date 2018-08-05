import { Model } from 'objection';
import * as uuid from 'uuid';

export class User extends Model {
    public id: string;
    public name: string;
    public roles: string;
    public password: string;
    public email: string;
    public active: boolean;
    public created_at: Date;
    public updated_at: Date;


    static get tableName() {
        return 'user';
    }

    public $beforeInsert(): void {
        this.created_at = new Date();
        this.updated_at = this.created_at;
        this.id = uuid.v4();
    }
}