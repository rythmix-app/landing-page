import { Injectable } from '@angular/core';
import { neon } from '@neondatabase/serverless';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NeonService {
  private sql: any;

  constructor() {
    this.sql = neon(environment.neonConnectionString);
  }

  async query(sqlQuery: string, params: any[] = []) {
    try {
      const result = await this.sql.query(sqlQuery, params);
      return result;
    } catch (error) {
      console.error('Erreur Neon:', error);
      throw error;
    }
  }

  async getAll(tableName: string) {
    return await this.sql`SELECT * FROM ${tableName}`;
  }

  async getById(tableName: string, id: number) {
    return await this.sql.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id]);
  }

  async create(tableName: string, data: any) {
    const columns = Object.keys(data).join(', ');
    const values = Object.values(data);
    const placeholders = values.map((_, i) => `${i + 1}`).join(', ');

    const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders}) RETURNING *`;
    return await this.sql.query(query, values);
  }

  async update(tableName: string, id: number, data: any) {
    const updates = Object.keys(data)
      .map((key, i) => `${key} = ${i + 2}`)
      .join(', ');
    const values = [id, ...Object.values(data)];

    const query = `UPDATE ${tableName} SET ${updates} WHERE id = $1 RETURNING *`;
    return await this.sql.query(query, values);
  }

  async delete(tableName: string, id: number) {
    return await this.sql.query(`DELETE FROM ${tableName} WHERE id = $1`, [id]);
  }

  async insertEmail(tableName: string, email: string) {
    if (tableName === 'client') {
      return await this.sql`INSERT INTO client (email) VALUES (${email}) RETURNING *`;
    } else if (tableName === 'clientVip') {
      return await this.sql`INSERT INTO "clientVip" (email) VALUES (${email}) RETURNING *`;
    }
    throw new Error(`Table ${tableName} non supportée`);
  }

  get client() {
    return this.sql;
  }
}
