import { environment } from "../../environment";
import api from "../api";
import type iCreateServico from "./interfaces/create-servico.interface";


export default class ServicoService {
  _endpoint = environment.base_url + "/servico";

  async findAll() {
    return api.get(this._endpoint);
  }

  async create(dto: iCreateServico) {
    return api.post(this._endpoint, dto);
  }

  async update(id: number, dto: Partial<iCreateServico>) {
    return api.patch(`${this._endpoint}/${id}`, dto);
  }

  async delete(id: number) {
    return api.delete(`${this._endpoint}/${id}`);
  }
}
