
import Boton from '../../core/design-system/Boton';

function SolicitudItem({ solicitud, rol, onAccion }) {
  const esPendiente = solicitud.estado === 'PENDIENTE';

  const puedeAceptarORechazar =
    rol === 'TRABAJADOR' && esPendiente;

  const puedeCancelar =
    rol === 'CONTRATANTE' &&
    (solicitud.estado === 'PENDIENTE' ||
      solicitud.estado === 'ACEPTADA');

  return (
    <li
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        listStyle: 'none'
      }}
    >
      <strong>Solicitud #{solicitud.id}</strong>

      <p>{solicitud.descripcion}</p>

      <p>
        Estado: <strong>{solicitud.estado}</strong>
      </p>

      {puedeAceptarORechazar && (
        <div style={{ display: 'flex', gap: 8 }}>
          <Boton
            onClick={() => onAccion(solicitud.id, 'aceptar')}
          >
            Aceptar
          </Boton>

          <Boton
            variante="secundario"
            onClick={() => onAccion(solicitud.id, 'rechazar')}
          >
            Rechazar
          </Boton>
        </div>
      )}

      {puedeCancelar && (
        <Boton
          variante="secundario"
          onClick={() => onAccion(solicitud.id, 'cancelar')}
        >
          Cancelar
        </Boton>
      )}
    </li>
  );
}

export default SolicitudItem;
