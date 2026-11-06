import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import { listarSolicitudes } from '../services/solicitudesService';

export function useSolicitudes() {
  const { token, logout } = useAuth();
  const [solicitudes, setSolicitudes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // La carga vive en una función aparte para poder volver a llamarla
  // desde el bloque 6 (después de aceptar, rechazar o cancelar)
  const cargar = useCallback(async () => {
    try {
      const datos = await listarSolicitudes(token);
      setSolicitudes(datos);
    } catch (e) {
      if (e.status === 401) {
        logout(); // token vencido: volver al login
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

  return { solicitudes, cargando, error };
}