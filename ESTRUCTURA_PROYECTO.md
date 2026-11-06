# Estructura del proyecto OficioYa

El frontend de **OficioYa** está organizado mediante una arquitectura modular que permite separar las funcionalidades de la aplicación, facilitar su mantenimiento y promover la reutilización de componentes.

## Árbol de carpetas

```text
src/
└── modules/
    ├── auth/
    │   ├── components/
    │   ├── hooks/
    │   ├── services/
    │   └── states/
    │
    ├── core/
    │   ├── components/
    │   ├── design-system/
    │   └── lib/
    │
    ├── solicitudes/
    │   ├── components/
    │   ├── hooks/
    │   └── services/
    │
    └── trabajadores/
        ├── components/
        ├── hooks/
        └── services/
```

## Descripción de los módulos

### 1. `auth/` — Autenticación

Contiene los componentes, hooks, servicios y estados responsables del inicio de sesión, la gestión del usuario autenticado y el manejo del token de acceso.

### 2. `core/` — Funcionalidades compartidas

Agrupa componentes reutilizables, elementos de diseño, protección de rutas, mensajes de error y utilidades generales como el cliente HTTP.

### 3. `solicitudes/` — Gestión de solicitudes

Contiene los componentes, hooks y servicios relacionados con la creación, consulta y gestión de solicitudes, incluyendo las acciones de aceptar, rechazar y cancelar.

### 4. `trabajadores/` — Gestión de trabajadores

Contiene las funcionalidades relacionadas con la consulta de trabajadores, la visualización de sus perfiles y la comunicación con los servicios correspondientes.

## Organización interna de los módulos

- **`components/`:** componentes de React encargados de representar la interfaz de usuario.
- **`hooks/`:** hooks personalizados que encapsulan lógica reutilizable.
- **`services/`:** funciones encargadas de comunicarse con el backend.
- **`states/`:** administración de estados compartidos y contextos.
- **`design-system/`:** componentes y estilos visuales reutilizables.
- **`lib/`:** funciones y utilidades generales de la aplicación.

Esta arquitectura permite mantener una separación clara de responsabilidades y facilita el desarrollo colaborativo del proyecto.