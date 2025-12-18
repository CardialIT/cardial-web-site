import React, { useState, useEffect } from "react";
import NavBar from "../../sections/NavBar";
import Footer from "../../sections/Footer";
import "./styles.css";

// URL da API no Railway
const API_BASE_URL = "https://truckage-api-production.up.railway.app";

function ResetSenha() {
  const [step, setStep] = useState(1); // 1 = Solicitar email, 2 = Digitar nova senha
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [userEmail, setUserEmail] = useState("");

  // Verificar se há token na URL ao carregar a página
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");
    
    if (urlToken) {
      setToken(urlToken);
      validateToken(urlToken);
    }
  }, []);

  // Validar token da URL
  const validateToken = async (tokenToValidate) => {
    setLoading(true);
    setMessage({ type: "", text: "" });
    
    try {
      const response = await fetch(`${API_BASE_URL}/validar-token/${tokenToValidate}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.valid) {
        setUserEmail(data.email);
        setStep(2);
        setMessage({ 
          type: "success", 
          text: `Token válido! Agora você pode criar uma nova senha para ${data.email}`
        });
      } else {
        setMessage({ 
          type: "error", 
          text: data.error || "Token inválido ou expirado. Solicite um novo link." 
        });
        // Voltar para o passo 1 após mostrar erro
        setTimeout(() => setStep(1), 3000);
      }
    } catch (error) {
      console.error("Erro ao validar token:", error);
      setMessage({ 
        type: "error", 
        text: "Não foi possível validar o token. Tente novamente mais tarde." 
      });
    } finally {
      setLoading(false);
    }
  };

  // Solicitar link de recuperação
  const handleSolicitarReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    
    if (!email) {
      setMessage({ type: "error", text: "Por favor, digite seu email." });
      setLoading(false);
      return;
    }
    
    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ type: "error", text: "Por favor, digite um email válido." });
      setLoading(false);
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/esqueci-senha`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      // Verificar se a resposta é JSON válida
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Resposta do servidor não é JSON");
      }
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage({ 
          type: "success", 
          text: "✅ Link de recuperação enviado! Verifique sua caixa de email (e a pasta de spam)." 
        });
        // Opcional: mostrar email mascarado
        const maskedEmail = email.replace(/(.{2})(.*)(?=@)/, (match, p1, p2) => 
          p1 + "*".repeat(p2.length)
        );
        setEmail(maskedEmail);
      } else {
        setMessage({ 
          type: "error", 
          text: data.error || "Erro ao enviar link de recuperação. Tente novamente." 
        });
      }
    } catch (error) {
      console.error("Erro ao solicitar reset:", error);
      setMessage({ 
        type: "error", 
        text: "Não foi possível conectar ao servidor. Verifique sua internet e tente novamente." 
      });
    } finally {
      setLoading(false);
    }
  };

  // Redefinir senha
  const handleRedefinirSenha = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    
    // Validações
    if (!password || !confirmPassword) {
      setMessage({ type: "error", text: "Preencha ambos os campos de senha." });
      setLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setMessage({ type: "error", text: "A senha deve ter pelo menos 6 caracteres." });
      setLoading(false);
      return;
    }
    
    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "As senhas não coincidem." });
      setLoading(false);
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/redefinir-senha`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          token, 
          novaSenha: password,
          confirmarSenha: confirmPassword
        }),
      });
      
      // Verificar se a resposta é JSON válida
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Resposta do servidor não é JSON");
      }
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage({ 
          type: "success", 
          text: "✅ Senha redefinida com sucesso! Agora você pode fazer login com sua nova senha." 
        });
        
        // Limpar campos após sucesso
        setPassword("");
        setConfirmPassword("");
        
        // Redirecionar para login após 3 segundos
        setTimeout(() => {
          window.location.href = "/"; // ou para a página de login
        }, 3000);
      } else {
        setMessage({ 
          type: "error", 
          text: data.error || "Erro ao redefinir senha. O token pode ter expirado." 
        });
        
        // Se o token for inválido, voltar para o passo 1
        if (data.error && data.error.includes("Token inválido")) {
          setTimeout(() => {
            setStep(1);
            setToken("");
            setMessage({ type: "", text: "" });
          }, 3000);
        }
      }
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      setMessage({ 
        type: "error", 
        text: "Não foi possível conectar ao servidor. Verifique sua internet e tente novamente." 
      });
    } finally {
      setLoading(false);
    }
  };

  // Resetar formulário
  const handleResetForm = () => {
    setStep(1);
    setEmail("");
    setToken("");
    setPassword("");
    setConfirmPassword("");
    setMessage({ type: "", text: "" });
    setUserEmail("");
    
    // Limpar token da URL sem recarregar a página
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <div className="reset-senha-container">
      <NavBar />
      
      <main className="reset-main">
        <div className="reset-card">
          <div className="reset-header">
            <div className="logo-header">
              <h1>🔐 Recuperação de Senha</h1>
              <p className="app-name">Truckage Cardial</p>
            </div>
            <p className="reset-subtitle">Redefina sua senha para acessar sua conta</p>
            
            {/* Indicador de progresso */}
            <div className="progress-steps">
              <div className={`step-indicator ${step >= 1 ? "active" : ""}`}>
                <span className="step-number">1</span>
                <span className="step-label">Informar Email</span>
              </div>
              <div className="step-connector"></div>
              <div className={`step-indicator ${step >= 2 ? "active" : ""}`}>
                <span className="step-number">2</span>
                <span className="step-label">Nova Senha</span>
              </div>
            </div>
          </div>

          {/* Mensagem de status */}
          {message.text && (
            <div className={`message-box ${message.type}`}>
              <div className="message-icon">
                {message.type === "success" ? "✅" : "❌"}
              </div>
              <div className="message-content">
                {message.text}
                {message.type === "success" && step === 1 && (
                  <div className="email-note">
                    O link será enviado para: <strong>{email}</strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Formulário - Passo 1: Solicitar email */}
          {step === 1 && (
            <form onSubmit={handleSolicitarReset} className="reset-form">
              <div className="form-group">
                <label htmlFor="email">
                  Email Cadastrado
                  <span className="required">*</span>
                </label>
                <div className="input-with-icon">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    required
                    disabled={loading}
                    className={email.includes("*") ? "masked-email" : ""}
                  />
                </div>
                <small className="form-help">
                  Enviaremos um link seguro para redefinir sua senha
                </small>
              </div>

              <button 
                type="submit" 
                className="submit-btn primary-btn"
                disabled={loading || email.includes("*")}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Enviando Link...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">✉️</span>
                    Enviar Link de Recuperação
                  </>
                )}
              </button>
            </form>
          )}

          {/* Formulário - Passo 2: Nova senha */}
          {step === 2 && (
            <form onSubmit={handleRedefinirSenha} className="reset-form">
              <div className="user-info-card">
                <div className="user-icon">👤</div>
                <div className="user-details">
                  <span className="user-label">Redefinindo senha para:</span>
                  <strong className="user-email">{userEmail || email}</strong>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Nova Senha
                  <span className="required">*</span>
                </label>
                <div className="input-with-icon">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua nova senha"
                    required
                    disabled={loading}
                    minLength="6"
                  />
                </div>
                <small className="form-help">
                  Mínimo de 6 caracteres (recomendado: letras, números e símbolos)
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirmar Nova Senha
                  <span className="required">*</span>
                </label>
                <div className="input-with-icon">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Digite a senha novamente"
                    required
                    disabled={loading}
                    minLength="6"
                  />
                </div>
              </div>

              <div className="password-strength">
                <div className="strength-header">
                  <span>Força da senha:</span>
                  <span className={`strength-text ${
                    password.length >= 6 ? "strong" : 
                    password.length >= 4 ? "medium" : "weak"
                  }`}>
                    {password.length === 0 && "Digite sua senha"}
                    {password.length > 0 && password.length < 4 && "Fraca"}
                    {password.length >= 4 && password.length < 6 && "Média"}
                    {password.length >= 6 && "Forte"}
                  </span>
                </div>
                <div className={`strength-bar ${
                  password.length >= 6 ? "strong" : 
                  password.length >= 4 ? "medium" : "weak"
                }`}>
                  <div className="strength-fill"></div>
                </div>
              </div>

              <div className="form-buttons">
                <button 
                  type="submit" 
                  className="submit-btn primary-btn"
                  disabled={loading || password !== confirmPassword}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Redefinindo Senha...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">✅</span>
                      Redefinir Senha
                    </>
                  )}
                </button>
                
                <button 
                  type="button" 
                  onClick={handleResetForm}
                  className="secondary-btn"
                  disabled={loading}
                >
                  <span className="btn-icon">↩️</span>
                  Usar outro email
                </button>
              </div>
            </form>
          )}

          {/* Links úteis */}
          <div className="reset-links">
            <a href="/" className="back-link">
              <span className="link-icon">🏠</span>
              Voltar para página inicial
            </a>
            {step === 1 && (
              <a href="#" className="help-link" onClick={(e) => {
                e.preventDefault();
                setMessage({
                  type: "info",
                  text: "Entre em contato com o suporte: gestaocadialit@gmail.com"
                });
              }}>
                <span className="link-icon">❓</span>
                Precisa de ajuda?
              </a>
            )}
          </div>

          {/* Dicas de segurança */}
          <div className="security-tips">
            <h3><span className="tip-icon">🔒</span> Dicas de Segurança</h3>
            <ul>
              <li>O link de recuperação expira em 1 hora</li>
              <li>Verifique sua pasta de spam caso não encontre o email</li>
              <li>Não compartilhe seu link de recuperação com ninguém</li>
              <li>Após redefinir, faça login imediatamente com a nova senha</li>
              <li>Use senhas diferentes para cada serviço</li>
            </ul>
          </div>

          {/* Informações da API */}
          <div className="api-info">
            <small>
              Conectado à API: <code>truckage-api-production.up.railway.app</code>
            </small>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ResetSenha;