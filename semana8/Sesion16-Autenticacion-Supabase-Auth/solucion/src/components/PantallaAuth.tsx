import { useState } from "react";
import { registrarUsuario, iniciarSesion } from "../services/authService.ts";

type ModoAuth = "login" | "registro";

function PantallaAuth() {
  const [modo, setModo] = useState<ModoAuth>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function manejarEnvio(evento: React.FormEvent) {
    evento.preventDefault();
    setError(null);
    setEnviando(true);
    try {
      if (modo === "login") {
        await iniciarSesion(email, password);
      } else {
        await registrarUsuario(email, password);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="pantalla-auth">
      <div className="tarjeta-auth">
        <h3 className="text-center mb-4">🚀 {modo === "login" ? "Iniciar sesión" : "Crear cuenta"}</h3>
        {error && <div className="error-auth">⚠️ {error}</div>}
        <form onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" value={password}
              onChange={(e) => setPassword(e.target.value)} minLength={6} required />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={enviando}>
            {enviando ? "Un momento..." : modo === "login" ? "Entrar" : "Registrarme"}
          </button>
        </form>
        <div className="text-center">
          <button className="cambiar-modo-auth"
            onClick={() => { setModo(modo === "login" ? "registro" : "login"); setError(null); }}>
            {modo === "login" ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PantallaAuth;
