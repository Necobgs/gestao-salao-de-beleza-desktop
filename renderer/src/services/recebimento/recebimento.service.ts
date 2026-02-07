import { environment } from "../../environment";
import api from "../api";
import type iCreateRecebimento from "./interfaces/create-recebimento.interface";

export default class RecebimentoService {
  _endpoint = environment.base_url + "/recebimento";

  async findAll(query?: string) {
    const url = this._endpoint + (query ? `?${query}` : "");
    return api.get(url);
  }

  async create(dto: iCreateRecebimento) {
    return api.post(this._endpoint, dto);
  }

  async update(id: number, dto: Partial<iCreateRecebimento>) {
    return api.patch(`${this._endpoint}/${id}`, dto);
  }

  async delete(id: number) {
    return api.delete(`${this._endpoint}/${id}`);
  }
}
