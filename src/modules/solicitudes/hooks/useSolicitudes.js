
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import { listarSolicitudes, cambiarEstado } from '../services/solicitudesService';

export function useSolicitudes() {
  const { token, logout } = useAuth();
  const [solicitudes, setSolicitudes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Obtiene las solicitudes desde el backend.
  const cargar = useCallback(async () => {
    try {
      const datos = await listarSolicitudes(token);
      setSolicitudes(datos);
      setError(null);
    } catch (e) {
      if (e.status === 401) {
        logout();
      } else {
        setError(e.message);
      }
    } finally {
      setCargando(false);
    }
  }, [token, logout]);

  useEffect(() => {
    cargar();
  }, [cargar]);

  // Ejecuta una acción sobre una solicitud.
  async function ejecutarAccion(id, accion) {
    setError(null);

    try {
      await cambiarEstado(id, accion, token);

      // Actualiza la lista después de una acción exitosa.
      await cargar();
    } catch (e) {
      if (e.status === 401) {
        logout();
      } else {
        setError(e.message);
      }
    }
  }

  return {
    solicitudes,
    cargando,
    error,
    ejecutarAccion
  };
}
