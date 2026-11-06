function SolicitudItem({ solicitud }) {
  return (
    <li style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12, marginBottom: 12, listStyle: 'none' }}>
      <strong>Solicitud #{solicitud.id}</strong>
      <p>{solicitud.descripcion}</p>
      <p>Estado: <strong>{solicitud.estado}</strong></p>
    </li>
  );
}

export default SolicitudItem;