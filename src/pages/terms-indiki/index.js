// src/pages/PrivacyIndiki/index.js
import NavBar from "../../sections/NavBar";
import Footer from "../../sections/Footer";
import ReactWhatsappButton from "react-whatsapp-button";
import "./styles.css";

function PrivacyIndiki() {
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
          <h1>Política de Privacidade - indiki</h1>
          <p className="last-update">Última atualização: 24 de Fevereiro de 2026</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>🎯 Sobre o indiki</h2>
            <p>
              O aplicativo <strong>indiki</strong> é um programa de fidelidade desenvolvido pela 
              <strong> Cardial I.T</strong> para conectar clientes e lojas parceiras através de um sistema 
              de pontos e recompensas. O app permite acumular pontos em compras, trocar por recompensas 
              exclusivas e participar de campanhas promocionais das lojas cadastradas.
            </p>
            <div className="notice-box">
              <p>
                <strong>Importante:</strong> O indiki é fornecido "no estado em que se encontra", com o compromisso 
                de atualizações regulares e melhorias contínuas para aprimorar a experiência dos usuários. 
                Priorizamos a segurança dos seus dados e a transparência em todas as etapas.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🔒 Coleta e Uso de Informações</h2>
            <p>Coletamos dados pessoais e técnicos para fornecer e melhorar o serviço de fidelidade. Todos os dados são processados de forma segura e apenas para fins legítimos.</p>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>📊 Dados Pessoais e de Cadastro</h3>
                <ul>
                  <li><strong>Clientes:</strong> Nome completo, email, senha (criptografada), CPF, celular, endereço, cidade, estado, foto de perfil</li>
                  <li><strong>Lojas Parceiras:</strong> Nome da empresa, email, telefone, CNPJ, endereço completo, logo da empresa</li>
                  <li><strong>Documentos:</strong> Fotos de perfil (base64), documentos de identificação quando necessário</li>
                  <li><strong>Pontos e Recompensas:</strong> Histórico de pontos acumulados, pontos gastos, recompensas resgatadas</li>
                  <li><strong>Compras:</strong> Histórico de transações, valores, lojas onde comprou</li>
                  <li><strong>Campanhas:</strong> Participação em campanhas promocionais</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>📊 Dados Técnicos e de Uso</h3>
                <ul>
                  <li>Endereço IP do dispositivo</li>
                  <li>Páginas e ações visitadas, tempo de uso</li>
                  <li>Interações (visualizações de produtos, resgates de recompensas)</li>
                  <li>Sistema operacional, modelo do dispositivo</li>
                  <li>Logs de erros e atividades para depuração</li>
                  <li>Tokens JWT para sessões (expiram em 24h)</li>
                </ul>
              </div>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <h3>📍 Localização</h3>
                <ul>
                  <li>Cidade e estado de cadastro</li>
                  <li>Lojas próximas baseadas na localização (com consentimento)</li>
                  <li>Estados e cidades via IBGE</li>
                  <li>Não coletamos localização em tempo real sem consentimento explícito</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>📢 Notificações e Emails</h3>
                <ul>
                  <li>Emails para recuperação de senha</li>
                  <li>Confirmações de cadastro/atualizações</li>
                  <li>Notificações de pontos ganhos</li>
                  <li>Alertas de recompensas disponíveis</li>
                  <li>Notificações de campanhas ativas</li>
                  <li>Notificações push em tempo real</li>
                </ul>
              </div>
            </div>

            <div className="disclosure-box">
              <h3>🎯 Uso dos Dados</h3>
              <p>
                Utilizamos os dados para: autenticação, cálculo e gestão de pontos, personalização de ofertas, 
                comunicação sobre recompensas, análise de uso e conformidade legal. 
                <strong> Não usamos dados para marketing sem consentimento explícito.</strong>
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🤝 Compartilhamento com Terceiros</h2>
            <p>
              Compartilhamos dados mínimos e apenas quando necessário para o funcionamento do serviço:
            </p>
            
            <div className="providers">
              <div className="provider">
                <h4>Railway.app</h4>
                <p>Hospedagem do backend e infraestrutura</p>
              </div>
              <div className="provider">
                <h4>Sequelize/PostgreSQL</h4>
                <p>Banco de dados seguro e escalável</p>
              </div>
              <div className="provider">
                <h4>Expo</h4>
                <p>Desenvolvimento mobile e atualizações</p>
              </div>
              <div className="provider">
                <h4>Google Play/App Store</h4>
                <p>Distribuição e atualizações do aplicativo</p>
              </div>
            </div>

            <div className="providers">
              <div className="provider">
                <h4>IBGE API</h4>
                <p>Listas de estados/cidades (sem dados pessoais)</p>
              </div>
              <div className="provider">
                <h4>Nodemailer/Gmail</h4>
                <p>Envio de emails transacionais</p>
              </div>
            </div>

            <div className="disclosure-box">
              <h3>⚖️ Divulgação Obrigatória</h3>
              <p>
                Podemos divulgar dados se exigido por lei (ex.: ordens judiciais), para proteger direitos, 
                investigar fraudes ou responder a autoridades governamentais.
                <strong> Não vendemos dados pessoais para terceiros.</strong>
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🎁 Sistema de Pontos e Recompensas</h2>
            
            <div className="info-card special-card">
              <h3>Como funciona:</h3>
              <ul>
                <li><strong>Acúmulo:</strong> Clientes ganham pontos a cada compra realizada em lojas parceiras</li>
                <li><strong>Resgate:</strong> Pontos podem ser trocados por recompensas disponíveis no app</li>
                <li><strong>Validade:</strong> Pontos têm validade de 12 meses após a data de aquisição</li>
                <li><strong>Campanhas:</strong> Lojas podem criar campanhas com multiplicadores de pontos</li>
                <li><strong>Extrato:</strong> Clientes têm acesso ao histórico completo de pontos e resgates</li>
              </ul>
            </div>

            <div className="info-card special-card">
              <h3>Responsabilidades das Lojas:</h3>
              <ul>
                <li>Gerenciar seu catálogo de produtos e recompensas</li>
                <li>Processar corretamente os QR Codes de compra</li>
                <li>Manter estoque atualizado das recompensas</li>
                <li>Respeitar os termos das campanhas criadas</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>🚫 Seus Direitos</h2>
            
            <div className="rights-grid">
              <div className="right-card">
                <h3>📵 Cancelamento (Opt-Out)</h3>
                <ul>
                  <li>Desative notificações nas configurações do app</li>
                  <li>Desinstale via loja de aplicativos</li>
                  <li>Para emails promocionais: responda com "OPT-OUT"</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>📝 Acesso e Correção</h3>
                <ul>
                  <li>Acesse/atualize dados via perfil no app</li>
                  <li>Edite nome, telefone, endereço</li>
                  <li>Atualize foto de perfil quando necessário</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>🗑️ Exclusão de Dados</h3>
                <ul>
                  <li>Solicite exclusão via email abaixo</li>
                  <li>Deleção em até 30 dias</li>
                  <li>Histórico de pontos mantido por 5 anos (fins fiscais)</li>
                  <li>Direito de portabilidade disponível</li>
                </ul>
              </div>
            </div>

            <div className="right-card full-width">
              <h3>👶 Proteção de Crianças</h3>
              <p>
                O indiki é destinado a maiores de 18 anos. Não coletamos dados de menores de idade. 
                Se identificarmos dados de menores, excluiremos imediatamente.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🌍 Conformidade Legal</h2>
            <div className="compliance-box">
              <h3>📜 LGPD - Lei Geral de Proteção de Dados</h3>
              <p>
                Cumprimos integralmente a <strong>Lei 13.709/2018 (LGPD)</strong> no Brasil. 
                Usuários fora do Brasil concordam com a jurisdição brasileira para questões 
                relacionadas à privacidade e proteção de dados.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🛡️ Segurança e Alterações</h2>
            
            <div className="security-info">
              <div className="security-item">
                <h3>🔐 Segurança dos Dados</h3>
                <ul>
                  <li><strong>Senhas:</strong> Criptografadas com bcrypt</li>
                  <li><strong>Tokens:</strong> JWT com expiração curta</li>
                  <li><strong>Transmissão:</strong> HTTPS/SSL para todas as comunicações</li>
                  <li><strong>Armazenamento:</strong> Servidores seguros com backups criptografados</li>
                  <li><strong>QR Codes:</strong> Tokens únicos com expiração para compras</li>
                  <li><strong>Breach:</strong> Notificação em 72h para usuários afetados</li>
                </ul>
              </div>
              
              <div className="security-item">
                <h3>🔄 Atualizações da Política</h3>
                <p>
                  Esta política pode ser atualizada para refletir mudanças no app ou leis. 
                  Notificaremos via app/email sobre alterações significativas. 
                  <strong> O uso contínuo após notificação implica aceitação das mudanças.</strong>
                </p>
              </div>
            </div>
          </section>

          <section className="terms-section consent-section">
            <h2>✅ Seu Consentimento</h2>
            <p>
              Ao se cadastrar ou usar o <strong>indiki</strong>, você concorda com esta 
              Política de Privacidade e o processamento de seus dados conforme descrito. 
              Recomendamos revisar esta política periodicamente.
            </p>
          </section>

          <section className="terms-section contact-section">
            <h2>📞 Contato</h2>
            <div className="contact-info">
              <p>
                <strong>Desenvolvedor:</strong> Cardial I.T
              </p>
              <p>
                <strong>E-mail:</strong>{' '}
                <a href="mailto:gestaocardialit@gmail.com" className="email-link">
                  gestaocardialit@gmail.com
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong> (48) 99929-3516
              </p>
              <p className="effective-date">
                <strong>Vigência:</strong> Esta política entra em vigor em 24/02/2026
              </p>
              <p className="contact-note">
                Para dúvidas sobre privacidade, solicitações de exclusão de dados ou exercício de seus direitos, 
                entre em contato diretamente conosco.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyIndiki;