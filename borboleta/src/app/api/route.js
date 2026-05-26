// Importamos a ferramenta do Next.js que permite enviar respostas no formato JSON
import { NextResponse } from 'next/server';

// Importamos o nosso "banco de dados" simulado
import { produtosData } from '../../../data/produtos';

// Exportamos uma função assíncrona com o nome exato do método: GET
export async function GET() {
  
  // O NextResponse pega o nosso array de produtos e o transforma em texto JSON.
  // O status: 200 significa "OK, requisição feita com sucesso!"
  return NextResponse.json(produtosData, { status: 200 });
}