import { useState, useEffect } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import * as trabajadoresService from '../services/trabajadoresService';

export function useTrabajador(id) {
  const [trabajador, setTrabajador] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { token, logout } = useAuth();

  useEffect(() => {
    async function cargarPerfil() {
      try {
        setCargando(true);
        const data = await trabajadoresService.obtenerTrabajador(id, token);
        setTrabajador(data);
      } catch (e) {
        if (e.status === 401) logout();
        setError(e.message);
      } finally {
        setCargando(false);
      }
    }

    if (id && token) {
      cargarPerfil();
    }
  }, [id, token, logout]);

  return { trabajador, cargando, error };
}