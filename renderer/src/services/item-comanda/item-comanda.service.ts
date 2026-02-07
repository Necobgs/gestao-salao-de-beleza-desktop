import { environment } from "../../environment";
import api from "../api";
import type iCreateItemComanda from "./interfaces/create-item-comanda.interface";


export default class ItemComandaService {
  _endpoint = environment.base_url + "/item-comanda";

  async findAll(query?: string) {
    const url = this._endpoint + (query ? `?${query}` : "");
    return api.get(url);
  }

  async create(dto: iCreateItemComanda) {
    return api.post(this._endpoint, dto);
  }

  async update(id: number, dto: Partial<iCreateItemComanda>) {
    return api.patch(`${this._endpoint}/${id}`, dto);
  }

  async delete(id: number, query?: string) {
    const url = `${this._endpoint}/${id}` + (query ? `?${query}` : "");
    return api.delete(url);
  }
}

