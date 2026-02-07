import { environment } from "../../environment";
import api from "../api";
import type iCreateAgenda from "./interfaces/create-agenda.interface";

export default class AgendaService {
  _endpoint = environment.base_url + "/agenda";

  async findAll(query?: string) {
    const url = this._endpoint + (query ? `?${query}` : "");
    return api.get(url);
  }

  async create(dto: iCreateAgenda) {
    return api.post(this._endpoint, dto);
  }

  async update(id: number, dto: Partial<iCreateAgenda>) {
    return api.patch(`${this._endpoint}/${id}`, dto);
  }

  async delete(id: number) {
    return api.delete(`${this._endpoint}/${id}`);
  }
}

