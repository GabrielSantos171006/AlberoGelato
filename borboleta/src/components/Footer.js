'use client';
export default function Footer() {
  const handleWhatsappClick = () => {
    alert("Atendimento via WhatsApp indisponível no momento. Por favor, utilize o iFood!");
  };

  return (
    <footer id="contato">
      <div className="footerConteudo">
        <div className="footerInfo">
          <strong>Albero Dei Gelati</strong>
          <p>Rua: Joaquim Antunes, 391 – Pinheiros</p>
          <p>CEP: 05415-010 – São Paulo - SP</p>
        </div>
        
        <div className="footerRedes">
          <p>Siga nossas redes:</p>
          <div className="iconesRedes">
            <a href="https://www.instagram.com/albero_br/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/albero.br/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
            </a>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/124/124034.png" 
              alt="WhatsApp" 
              style={{ cursor: 'pointer' }}
              onClick={handleWhatsappClick} 
            />
          </div>
        </div>
      </div>
      <div className="footerDireitos">
        <p>&copy; 2026 Albero Dei Gelati. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}