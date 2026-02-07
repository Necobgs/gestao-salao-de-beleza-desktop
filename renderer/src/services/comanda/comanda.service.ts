import { environment } from "../../environment";
import api from "../api";
import type iCreateComanda from "./interfaces/create-comanda.interface";

export default class ComandaService {
  _endpoint = environment.base_url + "/comanda";

  async findAll(query?: string) {
    const url = this._endpoint + (query ? `?${query}` : "");
    return api.get(url);
  }

  async update(id: number, dto: Partial<iCreateComanda>) {
    return api.patch(`${this._endpoint}/${id}`, dto);
  }

  async delete(id: number) {
    return api.delete(`${this._endpoint}/${id}`);
  }
}

