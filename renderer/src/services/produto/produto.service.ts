
import { environment } from "../../environment";
import api from "../api";
import type iCreateProduto from "./interfaces/create-produto.interface";


export default class ProdutoService {
  _endpoint = environment.base_url + "/produto";

  async findAll() {
    return api.get(this._endpoint);
  }

  async create(dto: iCreateProduto) {
    return api.post(this._endpoint, dto);
  }

  async update(id: number, dto: Partial<iCreateProduto>) {
    return api.patch(`${this._endpoint}/${id}`, dto);
  }

  async delete(id: number) {
    return api.delete(`${this._endpoint}/${id}`);
  }
}
