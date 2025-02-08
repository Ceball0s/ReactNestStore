import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './schemas/producto.schema';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  async listarTodos(): Promise<Producto[]> {
    return this.productosService.listarTodos();
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<Producto> {
    const producto = await this.productosService.buscarPorId(id);
    if (!producto) {
      throw new NotFoundException(`Producto with ID ${id} not found`);
    }
    return producto;
  }

  @Post()
  async crear(@Body() createProductoDto: CreateProductoDto): Promise<Producto> {
    return this.productosService.crear(createProductoDto);
  }

  @Put(':id')
  async editar(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const updatedProducto = await this.productosService.editar(id, updateProductoDto);
    if (!updatedProducto) {
      throw new NotFoundException(`Producto with ID ${id} not found`);
    }
    return updatedProducto;
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string): Promise<any> {
    const result = await this.productosService.eliminar(id);
    if (!result) {
      throw new NotFoundException(`Producto with ID ${id} not found`);
    }
    return result;
  }
}