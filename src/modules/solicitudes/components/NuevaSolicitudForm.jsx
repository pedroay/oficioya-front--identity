
//controla la descripción, los errores y el estado de envío.
import { useState } from 'react';
//redirige a /solicitudes cuando la operación termina correctamente.
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/hooks/useAuth';//obtiene el token del usuario autenticado.
import { crearSolicitud } from '../services/solicitudesService';//nvía el identificador del trabajador y la descripción al backend.
import MensajeError from '../../core/components/MensajeError';//muestra cualquier error recibido durante el envío.

function NuevaSolicitudForm({ trabajadorId }) {
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState(null);
  //enviando: impide que el usuario envíe el formulario varias veces mientras se procesa la solicitud.
  const [enviando, setEnviando] = useState(false);

  const { token } = useAuth();
  const navigate = useNavigate();

  async function manejarEnvio(evento) {
    evento.preventDefault();
    setError(null);
    setEnviando(true);

    try {
      // El backend identifica al contratante mediante el token.
      await crearSolicitud({ trabajadorId, descripcion }, token);
      navigate('/solicitudes');
    } catch (e) {
      setError(e.message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={manejarEnvio}>
      <label htmlFor="descripcion-solicitud">
        Descripción del servicio
      </label>

      <textarea
        id="descripcion-solicitud"
        value={descripcion}
        onChange={(evento) => setDescripcion(evento.target.value)}
        placeholder="Describe el servicio que necesitas"
        required
        disabled={enviando}
        rows={4}
      />

      <MensajeError error={error} />

      <button type="submit" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar solicitud'}
      </button>
    </form>
  );
}

export default NuevaSolicitudForm;
