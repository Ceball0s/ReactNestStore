import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto } from './schemas/producto.schema';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(@InjectModel(Producto.name) private productoModel: Model<Producto>) {}

  async listarTodos(): Promise<Producto[]> {
    return this.productoModel.find().exec();
  }

  async buscarPorId(id: string): Promise<Producto> {
    const producto = await this.productoModel.findById(id).exec();
    if (!producto) {
      throw new NotFoundException(`Producto with ID ${id} not found`);
    }
    return producto;
  }

  async crear(createProductoDto: CreateProductoDto): Promise<Producto> {
    const nuevoProducto = new this.productoModel(createProductoDto);
    return nuevoProducto.save();
  }

  async editar(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const updatedProducto = await this.productoModel.findByIdAndUpdate(id, updateProductoDto, { new: true }).exec();
    if (!updatedProducto) {
      throw new NotFoundException(`Producto with ID ${id} not found`);
    }
    return updatedProducto;
  }

  async eliminar(id: string): Promise<any> {
    const result = await this.productoModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Producto with ID ${id} not found`);
    }
    return result;
  }
}