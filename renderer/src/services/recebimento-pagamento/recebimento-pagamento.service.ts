import { environment } from "../../environment";
import api from "../api";


export default class RecebimentoPagamentoService {
  _endpoint = environment.base_url + "/recebimento-pagamento";

  async findAll(query?: string) {
    const url = this._endpoint + (query ? `?${query}` : "");
    return api.get(url);
  }

  // async create(dto: iCreateRecebimentoPagamento) {
  //   return api.post(this._endpoint, dto);
  // }

  // async update(id: number, dto: Partial<iCreateRecebimentoPagamento>) {
  //   return api.patch(`${this._endpoint}/${id}`, dto);
  // }

  async delete(id: number) {
    return api.delete(`${this._endpoint}/${id}`);
  }
}

