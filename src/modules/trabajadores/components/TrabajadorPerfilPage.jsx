import { useParams, useNavigate } from 'react-router-dom';
import { useTrabajador } from '../hooks/useTrabajador';
import { useAuth } from '../../auth/hooks/useAuth'; // Traemos la seguridad
import Boton from '../../core/design-system/Boton';
import MensajeError from '../../core/components/MensajeError';

function TrabajadorPerfilPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { trabajador, cargando, error } = useTrabajador(id);
  const { usuario } = useAuth(); 

  if (cargando) return <p style={{ padding: 16 }}>Cargando perfil...</p>;
  if (error) return <MensajeError error={error} />;
  if (!trabajador) return <p style={{ padding: 16 }}>El trabajador no existe</p>;

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', display: 'grid', gap: 16 }}>
      <Boton variante="secundario" onClick={() => navigate('/trabajadores')} style={{ justifySelf: 'start' }}>
        ← Volver a la lista
      </Boton>
      
      <div style={{ padding: 24, border: '1px solid #e5e7eb', borderRadius: 8 }}>
        <h1 style={{ marginTop: 0 }}>{trabajador.nombre}</h1>
        <p><strong>Oficio Principal:</strong> {trabajador.oficioPrincipal}</p>
        <p><strong>Zona de cobertura:</strong> {trabajador.zona}</p>
        <p><strong>Teléfono de contacto:</strong> {trabajador.telefono}</p>
        <p><strong>Correo:</strong> {trabajador.correo}</p>
      </div>

      {/* Condicional del esqueleto: El botón solo sale si eres CONTRATANTE */}
      {usuario?.rol === 'CONTRATANTE' && (
        <Boton onClick={() => alert(`Aquí irá el formulario del bloque 4/5`)}>
          Solicitar Servicio
        </Boton>
      )}
    </div>
  );
}

export default TrabajadorPerfilPage;