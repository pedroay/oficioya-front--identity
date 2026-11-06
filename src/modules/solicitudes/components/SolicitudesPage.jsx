
import { useSolicitudes } from '../hooks/useSolicitudes';
import { useAuth } from '../../auth/hooks/useAuth';
import SolicitudItem from './SolicitudItem';
import MensajeError from '../../core/components/MensajeError';

function SolicitudesPage() {
  const { solicitudes, cargando, error, ejecutarAccion } = useSolicitudes();
  //Obtenemos el rol del usuario autenticado
  const { usuario } = useAuth();

  if (cargando) {
    return <p>Cargando solicitudes...</p>;
  }

  return (
    <section>
      <h2>Mis solicitudes</h2>

      <MensajeError error={error} />

      {solicitudes.length === 0 && !error && (
        <p>No tienes solicitudes.</p>
      )}

      <ul style={{ padding: 0 }}>
        {solicitudes.map((solicitud) => (
          // Pasamos la informaciÃ³n a cada solicitud
          <SolicitudItem
            key={solicitud.id}
            solicitud={solicitud}
            rol={usuario?.rol}
            onAccion={ejecutarAccion}
          />
        ))}
      </ul>
    </section>
  );
}

export default SolicitudesPage;
