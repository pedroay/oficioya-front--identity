# Instalación y ejecución de OficioYa Frontend

## 1. Descripción

OficioYa es una aplicación web que permite conectar trabajadores que ofrecen servicios con usuarios que necesitan contratarlos.

El frontend está desarrollado con **React y Vite** y se comunica con un backend que administra la autenticación, los trabajadores y las solicitudes de servicio.

## 2. Requisitos previos

Para ejecutar el frontend es necesario contar con:

- **Node.js y npm** instalados.
- El repositorio frontend descargado.
- El backend de OficioYa en ejecución en el puerto **8080**.
- Un navegador web para acceder a la aplicación.

**Repositorio frontend:** [OficioYa Frontend](https://github.com/pedroay/oficioya-front--identity)

**Repositorio backend:** [Agregar enlace al repositorio backend](https://github.com/pedroay/OficioYaOrchestor.git)

> El backend debe estar configurado y funcionando antes de utilizar las funcionalidades del frontend que requieren comunicación con la API.

## 3. Instalación del frontend

Primero, descargar el repositorio:

```bash
git clone https://github.com/pedroay/oficioya-front--identity.git
```

Ingresar a la carpeta del proyecto:

```bash
cd oficioya-front--identity
```

Instalar las dependencias necesarias:

```bash
npm install
```

Este comando utiliza el archivo `package.json` para instalar las dependencias del proyecto.

## 4. Ejecución del proyecto

Una vez instaladas las dependencias, iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local donde está disponible el frontend, normalmente:

```text
http://localhost:5173/
```

Abrir esa dirección en el navegador para acceder a OficioYa.

## 5. Conexión con el backend

El frontend necesita comunicarse con el backend de OficioYa para utilizar funcionalidades como:

- Inicio de sesión y autenticación.
- Consulta de trabajadores.
- Creación de solicitudes.
- Aceptación, rechazo y cancelación de solicitudes.

El backend debe encontrarse en ejecución en:

```text
http://localhost:8080
```

Es importante verificar que la configuración del cliente HTTP del frontend apunte a la dirección correspondiente del backend.

El archivo responsable de la comunicación HTTP se encuentra en:

`src/modules/core/lib/httpClient.js`

## 6. Consideraciones importantes

- El backend debe estar disponible para ejecutar las operaciones que requieren acceso a la API.
- El frontend y el backend son aplicaciones independientes y deben iniciarse por separado.
- Si el backend no está disponible, algunas funcionalidades pueden generar errores de conexión.
- La ejecución local requiere que las dependencias del proyecto estén instaladas correctamente.