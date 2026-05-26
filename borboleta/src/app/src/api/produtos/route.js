import { NextResponse } from 'next/server';
import { produtosData } from '../../../../data/produtos';

// Recebemos a requisição (request) e os parâmetros da URL (params)
export async function GET(request, { params }) {
  
  // 1. Aguardamos a leitura dos parâmetros da URL
  const parametros = await params;
  
  // 2. Pegamos o 'id' que veio na URL (ex: api/produtos/5) e convertemos de Texto para Número
  const produtoId = parseInt(parametros.id);
  
  // 3. Procuramos no nosso "banco de dados" qual produto tem esse mesmo ID
  const produto = produtosData.find(p => p.id === produtoId);

  // 4. Lógica de Validação: Se não encontrou o produto (ID não existe)...
  if (!produto) {
    // Retornamos um erro 404 (Not Found)
    return NextResponse.json(
      { erro: 'Produto não encontrado na base de dados.' }, 
      { status: 404 }
    );
  }

  // 5. Se tudo deu certo, retornamos apenas o objeto daquele produto específico (Status 200)
  return NextResponse.json(produto, { status: 200 });
}