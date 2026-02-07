import { environment } from "../../environment";
import api from "../api";
import type iCreateProfissional from "./interfaces/create-profissional.interface";

export default class ProfissionalService {
  _endpoint = environment.base_url + "/profissional";

  async findAll() {
    return api.get(this._endpoint);
  }

  async create(dto: iCreateProfissional) {
    return api.post(this._endpoint, dto);
  }

  async update(id: number, dto: Partial<iCreateProfissional>) {
    return api.patch(`${this._endpoint}/${id}`, dto);
  }

  async delete(id: number) {
    return api.delete(`${this._endpoint}/${id}`);
  }
}
