import NavBar from "../../sections/NavBar";
import Footer from "../../sections/Footer";
import ReactWhatsappButton from "react-whatsapp-button";
import "./styles.css";

function PrivacyClinic() {
  return (
    <div className="container">
      <ReactWhatsappButton 
        countryCode="55" 
        phoneNumber="[INSERIR NÚMERO DO WHATSAPP]" 
        className="whatsapp-button"
      />
      <NavBar />
      
      <main className="terms-container">
        <div className="terms-header">
          <h1>Política de Privacidade - Clínica Cleuza Canan</h1>
          <p className="last-update">Última atualização: [DATA ATUAL]</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>📱 Sobre o App da Clínica Cleuza Canan</h2>
            <p>
              O aplicativo da <strong>Clínica Cleuza Canan</strong> é uma solução desenvolvida para 
              facilitar o gerenciamento de atividades e tarefas diárias de pacientes, permitindo que 
              profissionais de saúde, familiares e administradores acompanhem e registrem o progresso 
              terapêutico de forma organizada e segura.
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
            <p>Coletamos dados pessoais e técnicos para fornecer e melhorar o serviço. Todos os dados são processados de forma segura e apenas para fins legítimos relacionados ao cuidado e acompanhamento terapêutico.</p>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>📊 Dados Pessoais e de Cadastro</h3>
                <ul>
                  <li><strong>Usuários:</strong> Nome completo, email, senha (criptografada), CPF, data de cadastro</li>
                  <li><strong>Perfis:</strong> Papel (role) - profissional, família ou administrador</li>
                  <li><strong>Profissionais:</strong> Tipo de profissional (profissional_type) quando aplicável</li>
                  <li><strong>Tarefas Registradas:</strong> Descrição de atividades, horários, status de conclusão (check)</li>
                  <li><strong>Dados de Acompanhamento:</strong> Mês/ano, dia, hora das tarefas</li>
                  <li><strong>Tokens de Notificação:</strong> Push tokens para comunicações</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>📊 Dados Técnicos e de Uso</h3>
                <ul>
                  <li><strong>Sessões:</strong> Tokens JWT para autenticação (com tempo de expiração definido)</li>
                  <li><strong>Dispositivo:</strong> Sistema operacional, modelo do dispositivo</li>
                  <li><strong>Interações:</strong> Navegação entre telas, seleção de pacientes, visualização de calendário</li>
                  <li><strong>Logs de Erros:</strong> Para depuração e melhoria do sistema</li>
                  <li><strong>API Calls:</strong> Registros de requisições para monitoramento de segurança</li>
                </ul>
              </div>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <h3>📍 Localização</h3>
                <ul>
                  <li>Não coletamos dados de localização em tempo real</li>
                  <li>Apenas dados de contexto relacionados ao acompanhamento terapêutico (datas e horários de atividades)</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>📢 Notificações e Comunicações</h3>
                <ul>
                  <li><strong>Notificações Push:</strong> Para alertas sobre tarefas e atualizações (quando autorizado)</li>
                  <li><strong>Integração Interna:</strong> Comunicação entre profissionais e familiares via registro de tarefas</li>
                </ul>
              </div>
            </div>

            <div className="disclosure-box">
              <h3>🎯 Finalidades do Tratamento de Dados</h3>
              <p>
                Utilizamos os dados exclusivamente para: <strong>autenticação e segurança</strong>, 
                <strong> gestão terapêutica</strong>, <strong>comunicação segura</strong>, 
                <strong> melhoria do serviço</strong> e <strong>conformidade legal</strong>. 
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
                <h4>Hospedagem do Backend</h4>
                <p>Infraestrutura do servidor (dados criptografados)</p>
              </div>
              <div className="provider">
                <h4>Banco de Dados (PostgreSQL)</h4>
                <p>Armazenamento seguro de todos os dados do sistema</p>
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

            <div className="disclosure-box">
              <h3>⚖️ Divulgação Obrigatória</h3>
              <p>
                Podemos divulgar dados se exigido por lei (ex.: ordens judiciais), para proteger direitos, 
                investigar violações de segurança, ou responder a autoridades competentes (ex.: conselhos profissionais de saúde).
                <strong> Não vendemos, alugamos ou comercializamos dados pessoais.</strong>
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🚫 Seus Direitos</h2>
            
            <div className="rights-grid">
              <div className="right-card">
                <h3>📵 Cancelamento (Opt-Out)</h3>
                <ul>
                  <li>Desative notificações push nas configurações do dispositivo</li>
                  <li>Desinstale o aplicativo via loja de aplicativos</li>
                  <li>Solicite desativação da conta via contato abaixo</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>📝 Acesso e Correção</h3>
                <ul>
                  <li>Acesse/atualize dados via perfil no aplicativo</li>
                  <li>Solicite correções de informações cadastrais</li>
                  <li>Revise tarefas e registros conforme permissões</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>🗑️ Exclusão de Dados</h3>
                <ul>
                  <li>Solicite exclusão de conta via email abaixo</li>
                  <li>Período de retenção conforme exigências legais da área de saúde</li>
                  <li>Logs de segurança mantidos por período determinado por lei</li>
                  <li>Direito de portabilidade disponível mediante solicitação</li>
                </ul>
              </div>
            </div>

            <div className="right-card full-width">
              <h3>👶 Proteção de Crianças e Vulneráveis</h3>
              <p>
                Coletamos e tratamos dados de pacientes com consentimento explícito dos responsáveis legais 
                ou conforme autorização legal. Implementamos controles de acesso rigorosos para proteger 
                informações sensíveis.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🌍 Conformidade Legal</h2>
            <div className="compliance-box">
              <h3>📜 LGPD - Lei Geral de Proteção de Dados</h3>
              <p>
                Cumprimos integralmente a <strong>Lei 13.709/2018 (LGPD)</strong> no Brasil, garantindo 
                todos os direitos aos titulares dos dados. Usuários fora do Brasil concordam com a jurisdição 
                brasileira para questões relacionadas à privacidade e proteção de dados.
              </p>
            </div>
            <div className="compliance-box" style={{ background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)', marginTop: '1rem' }}>
              <h3>⚕️ Legislação da Área de Saúde</h3>
              <p>
                Respeitamos as normativas específicas do setor de saúde, incluindo sigilo profissional 
                e confidencialidade de informações de pacientes.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>🛡️ Segurança e Proteção de Dados</h2>
            
            <div className="security-info">
              <div className="security-item">
                <h3>🔐 Medidas de Segurança Implementadas</h3>
                <ul>
                  <li><strong>Senhas:</strong> Criptografadas com algoritmos seguros (bcrypt)</li>
                  <li><strong>Tokens:</strong> JWT com expiração controlada</li>
                  <li><strong>Transmissão:</strong> Comunicação via HTTPS/SSL</li>
                  <li><strong>Armazenamento:</strong> Banco de dados seguro com backups criptografados</li>
                  <li><strong>Controle de Acesso:</strong> Baseado em papéis (RBAC) com permissões granulares</li>
                  <li><strong>Monitoramento:</strong> Auditoria de acessos e atividades</li>
                </ul>
              </div>
              
              <div className="security-item">
                <h3>🚨 Resposta a Incidentes</h3>
                <ul>
                  <li>Notificação em até 72h para usuários afetados em caso de violação de dados</li>
                  <li>Procedimentos de contenção e mitigação estabelecidos</li>
                  <li>Comunicação transparente com as autoridades competentes</li>
                </ul>
              </div>
            </div>

            <div className="disclosure-box">
              <h3>🔄 Atualizações da Política</h3>
              <p>
                Esta política pode ser atualizada para refletir mudanças no aplicativo ou evoluções legais. 
                Notificaremos sobre alterações significativas através do aplicativo. 
                <strong> O uso contínuo após notificação implica aceitação das mudanças.</strong>
              </p>
            </div>
          </section>

          <section className="terms-section consent-section">
            <h2>✅ Consentimento</h2>
            <p>
              Ao se cadastrar ou usar o <strong>aplicativo da Clínica Cleuza Canan</strong>, você concorda com esta 
              Política de Privacidade e o processamento de seus dados conforme descrito. 
              Recomendamos revisar esta política periodicamente.
            </p>
          </section>

          <section className="terms-section contact-section">
            <h2>📞 Contato e Dúvidas</h2>
            <div className="contact-info">
              <p>
                <strong>Clínica Cleuza Canan</strong>
              </p>
              <p>
                <strong>Site:</strong>{' '}
                <a href="https://clinicacleuzacanan.com.br/" className="email-link" target="_blank" rel="noopener noreferrer">
                  https://clinicacleuzacanan.com.br/
                </a>
              </p>
              <p>
                <strong>Instagram:</strong>{' '}
                <a href="https://www.instagram.com/clinicacleuzacanan" className="email-link" target="_blank" rel="noopener noreferrer">
                  @clinicacleuzacanan
                </a>
              </p>
              <p>
                <strong>YouTube:</strong>{' '}
                <a href="https://www.youtube.com/@clinicacleuzacanan" className="email-link" target="_blank" rel="noopener noreferrer">
                  @clinicacleuzacanan
                </a>
              </p>
              {/* <p>
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.link/mfkdqi" className="email-link" target="_blank" rel="noopener noreferrer">
                  [Link para WhatsApp]
                </a>
              </p>
              <p>
                <strong>E-mail:</strong>{' '}
                <a href="mailto:[INSERIR EMAIL DE CONTATO]" className="email-link">
                  [INSERIR EMAIL DE CONTATO]
                </a>
              </p> */}
              <p className="effective-date">
                <strong>Vigência:</strong> Esta política entra em vigor em [DATA ATUAL]
              </p>
              <p className="contact-note">
                Para dúvidas sobre privacidade, solicitações de exclusão de dados ou exercício de seus direitos, 
                entre em contato diretamente conosco através dos canais acima.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyClinic;