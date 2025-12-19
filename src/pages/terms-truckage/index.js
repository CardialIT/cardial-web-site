import NavBar from "../../sections/NavBar";
import Footer from "../../sections/Footer";
import ReactWhatsappButton from "react-whatsapp-button";
import "./styles.css";

function PrivacyTruckage() {
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
          <h1>Política de Privacidade - Truckage Cardial</h1>
          <p className="last-update">Última atualização: 19 de Dezembro de 2025</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>📱 Sobre o Truckage Cardial</h2>
            <p>
              O aplicativo <strong>Truckage Cardial</strong> é um serviço desenvolvido pela 
              <strong> Cardial I.T</strong> para conectar empresas e motoristas na gestão de fretes rodoviários. 
              Ele facilita a criação, solicitação e acompanhamento de fretes, além de comunicação via chat em tempo real.
            </p>
            <div className="notice-box">
              <p>
                <strong>Importante:</strong> O app é fornecido "no estado em que se encontra" (sem garantias de perfeição absoluta, 
                como em qualquer software em evolução), mas estamos comprometidos com atualizações regulares e 
                melhorias contínuas para aprimorar a experiência dos usuários. Priorizamos a segurança e a privacidade 
                em todas as etapas.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🔒 Coleta e Uso de Informações</h2>
            <p>Coletamos dados pessoais e técnicos para fornecer e melhorar o serviço. Todos os dados são processados de forma segura e apenas para fins legítimos.</p>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>📊 Dados Pessoais e de Cadastro</h3>
                <ul>
                  <li><strong>Usuários:</strong> Nome completo, email, senha (criptografada), CPF/CNPJ, celular, endereço</li>
                  <li><strong>Motoristas:</strong> Data de nascimento, dados bancários completos</li>
                  <li><strong>Documentos:</strong> CNH, ANTT, comprovantes, alvará, placas (base64)</li>
                  <li><strong>Referências:</strong> Pessoais, comerciais e de motoristas/transportadoras</li>
                  <li><strong>Dados de Frete:</strong> Origem/destino, valor, tipo de carga, status</li>
                  <li><strong>Comunicação:</strong> Mensagens de chat vinculadas a fretes</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>📊 Dados Técnicos e de Uso</h3>
                <ul>
                  <li>Endereço IP do dispositivo</li>
                  <li>Páginas/acoes visitadas, tempo de uso</li>
                  <li>Interações (visualizações de fretes, envios de mensagens)</li>
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
                  <li>Dados geográficos de origem/destino de fretes</li>
                  <li>Estados e cidades via IBGE</li>
                  <li>Não coletamos localização em tempo real sem consentimento explícito</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>📢 Notificações e Emails</h3>
                <ul>
                  <li>Emails para recuperação de senha</li>
                  <li>Confirmações de cadastro/atualizações</li>
                  <li>Notificações de solicitações/fretes</li>
                  <li>Notificações push em tempo real via Socket.io</li>
                </ul>
              </div>
            </div>

            <div className="disclosure-box">
              <h3>🎯 Uso dos Dados</h3>
              <p>
                Utilizamos os dados para: autenticação, personalização de fretes, comunicação segura, 
                análise de uso e conformidade legal (validação de documentos). 
                <strong> Não usamos dados para marketing sem consentimento explícito.</strong>
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🤝 Compartilhamento com Terceiros</h2>
            <p>
              Compartilhamos dados mínimos e apenas quando necessário:
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
                investigar fraudes, disputas ou responder a autoridades governamentais (ex.: ANTT para verificações de documentos).
                <strong> Não vendemos dados pessoais.</strong>
              </p>
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
                  <li>Para emails promocionais: responda com "OPT-OUT" ou use link de descadastro</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>📝 Acesso e Correção</h3>
                <ul>
                  <li>Acesse/atualize dados via perfil no app</li>
                  <li>Edite nome, celular, documentos</li>
                  <li>Atualize dados bancários quando necessário</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>🗑️ Exclusão de Dados</h3>
                <ul>
                  <li>Solicite exclusão via email abaixo</li>
                  <li>Deleção em até 30 dias</li>
                  <li>Logs obrigatórios mantidos por 5 anos (fins fiscais)</li>
                  <li>Direito de portabilidade disponível</li>
                </ul>
              </div>
            </div>

            <div className="right-card full-width">
              <h3>👶 Proteção de Crianças</h3>
              <p>
                Não coletamos dados de menores de 18 anos. Se identificarmos dados de menores, 
                excluíremos imediatamente e notificaremos os responsáveis.
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
                  <li><strong>Senhas:</strong> Criptografadas com bcrypt (salt de 10 rodadas)</li>
                  <li><strong>Tokens:</strong> JWT com expiração curta; reset de senha descartável</li>
                  <li><strong>Transmissão:</strong> HTTPS/SSL para todas as comunicações</li>
                  <li><strong>Armazenamento:</strong> Servidores seguros com backups criptografados</li>
                  <li><strong>Medidas:</strong> Firewalls, monitoramento, auditorias regulares</li>
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
              Ao se cadastrar ou usar o <strong>Truckage Cardial</strong>, você concorda com esta 
              Política de Privacidade e o processamento de seus dados conforme descrito. 
              Recomendamos revisar esta política periodicamente antes de prosseguir.
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
                <strong>Vigência:</strong> Esta política entra em vigor em 19/12/2025
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

export default PrivacyTruckage;