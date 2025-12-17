import NavBar from "../../sections/NavBar";
import Footer from "../../sections/Footer";
import ReactWhatsappButton from "react-whatsapp-button";
import "./styles.css";

function TermsRuminar() {
  return (
    <div className="container">
      <ReactWhatsappButton 
        countryCode="55" 
        phoneNumber="999293516" 
        className="whatsapp-button"
      />
      <NavBar />
      
      <main className="terms-container">
        <div className="terms-header">
          <h1>Termos de Uso e Política de Privacidade</h1>
          <p className="last-update">Última atualização: 13 de Dezembro de 2025</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>📱 Sobre o Ruminar Leite</h2>
            <p>
              O aplicativo <strong>Ruminar Leite</strong> é um serviço gratuito desenvolvido pela 
              <strong> Cardial I.T</strong>, fornecido "NO ESTADO EM QUE SE ENCONTRA" para auxiliar 
              produtores e profissionais da indústria leiteira.
            </p>
          </section>

          <section className="terms-section">
            <h2>🔒 Coleta e Uso de Informações</h2>
            <p>O aplicativo coleta informações para melhorar sua experiência:</p>
            <div className="info-grid">
              <div className="info-card">
                <h3>📊 Dados Técnicos</h3>
                <ul>
                  <li>Endereço IP do dispositivo</li>
                  <li>Páginas visitadas e tempo de uso</li>
                  <li>Sistema operacional do dispositivo</li>
                  <li>Tempo total de uso do aplicativo</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>📍 Localização</h3>
                <ul>
                  <li>Localização geográfica aproximada</li>
                  <li>Dados agregados e anonimizados</li>
                  <li>Para serviços personalizados</li>
                  <li>Análise de tendências regionais</li>
                </ul>
              </div>
            </div>
            
            <div className="notice-box">
              <h3>📢 Notificações</h3>
              <p>
                Podemos entrar em contato ocasionalmente para fornecer informações importantes, 
                avisos obrigatórios e promoções relevantes para o setor leiteiro.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🤝 Compartilhamento com Terceiros</h2>
            <p>
              Compartilhamos apenas dados <strong>agregados e anonimizados</strong> com serviços 
              externos para melhorar nossa plataforma:
            </p>
            
            <div className="providers">
              <div className="provider">
                <h4>Google Play Services</h4>
                <p>Para distribuição e atualizações do aplicativo</p>
              </div>
              <div className="provider">
                <h4>Expo</h4>
                <p>Para desenvolvimento e manutenção técnica</p>
              </div>
            </div>

            <div className="disclosure-box">
              <h3>⚖️ Divulgação Obrigatória</h3>
              <p>
                Podemos divulgar informações quando exigido por lei, para proteger direitos, 
                investigar fraudes ou responder a solicitações governamentais.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🚫 Seus Direitos</h2>
            
            <div className="rights-grid">
              <div className="right-card">
                <h3>📵 Cancelamento (Opt-Out)</h3>
                <p>
                  Você pode interromper toda coleta de dados desinstalando o aplicativo através 
                  dos processos padrão do seu dispositivo ou loja de aplicativos.
                </p>
              </div>
              
              <div className="right-card">
                <h3>🗑️ Exclusão de Dados</h3>
                <p>
                  Para solicitar exclusão de seus dados, entre em contato pelo e-mail abaixo. 
                  Responderemos em prazo razoável.
                </p>
              </div>
              
              <div className="right-card">
                <h3>👶 Proteção de Crianças</h3>
                <p>
                  Não coletamos dados de menores de 13 anos. Se descobrirmos dados de crianças, 
                  serão excluídos imediatamente.
                </p>
              </div>
            </div>
          </section>

          <section className="terms-section">
            <h2>🛡️ Segurança e Alterações</h2>
            
            <div className="security-info">
              <div className="security-item">
                <h3>🔐 Segurança dos Dados</h3>
                <p>
                  Adotamos medidas físicas, eletrônicas e procedimentais para proteger suas 
                  informações.
                </p>
              </div>
              
              <div className="security-item">
                <h3>🔄 Atualizações da Política</h3>
                <p>
                  Esta política pode ser atualizada. Notificaremos alterações nesta página. 
                  O uso contínuo significa aceitação das mudanças.
                </p>
              </div>
            </div>
          </section>

          <section className="terms-section consent-section">
            <h2>✅ Seu Consentimento</h2>
            <p>
              Ao utilizar o aplicativo <strong>Ruminar Leite</strong>, você concorda com o 
              processamento de suas informações conforme descrito nesta Política de Privacidade.
            </p>
          </section>

          <section className="terms-section contact-section">
            <h2>📞 Contato</h2>
            <div className="contact-info">
              <p>
                <strong>Prestadora de Serviço:</strong> Cardial I.T
              </p>
              <p>
                <strong>E-mail:</strong>{' '}
                <a href="mailto:gestaocadialit@gmail.com" className="email-link">
                  gestaocadialit@gmail.com
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong> (55) 99929-3516
              </p>
              <p className="effective-date">
                <strong>Vigência:</strong> Esta política entra em vigor em 13/12/2025
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsRuminar;