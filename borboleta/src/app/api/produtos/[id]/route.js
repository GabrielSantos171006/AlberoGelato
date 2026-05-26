import { NextResponse } from 'next/server';
import { produtosData } from '../../../../data/produtos';

export async function GET(request, { params }) {
  // Aguarda os parâmetros da URL
  const parametros = await params;
  
  // Transforma o ID da URL em número
  const produtoId = parseInt(parametros.id);
  
  // Busca o produto no "banco de dados"
  const produto = produtosData.find(p => p.id === produtoId);

  // Se o produto não existir, retorna erro 404
  if (!produto) {
    return NextResponse.json(
      { erro: 'Produto não encontrado na base de dados.' }, 
      { status: 404 }
    );
  }

  // Se existir, retorna os dados do produto com sucesso (200)
  return NextResponse.json(produto, { status: 200 });
}