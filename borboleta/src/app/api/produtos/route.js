import { NextResponse } from 'next/server';
import { produtosData } from '../../../data/produtos';

export async function GET() {
  // Retorna todos os produtos do nosso "banco de dados" em formato JSON
  return NextResponse.json(produtosData, { status: 200 });
}