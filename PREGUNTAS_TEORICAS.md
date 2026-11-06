

### Preguntas teoricas 


## ¿Qué diferencia hay entre una prop y un estado (useState)?

Las props son datos que un componente recibe de otro, normalmente de su componente padre, y no puede modificar directamente. En cambio, useState permite almacenar y actualizar información dentro de un componente, haciendo que React vuelva a renderizarlo cuando cambia su estado.

## ¿Por qué la carga de datos va dentro de useEffect y no directamente en el cuerpo del componente?

Porque useEffect permite ejecutar operaciones como consultar una API después del renderizado y controlar cuándo se repiten. Si hacemos la petición directamente en el cuerpo del componente, se ejecutaría en cada renderizado, generando consultas innecesarias y posibles ciclos de actualización.

## ¿Para qué usaron useContext y qué pasaría si no lo usaran?

useContext permite compartir información, como los datos del usuario autenticado, entre diferentes componentes sin pasarla manualmente mediante props. Sin él, tendríamos que transmitir esa información entre varios componentes o utilizar otra solución para manejar el estado compartido, haciendo más complejo el código.

## ¿Por qué ocultar el botón "Aceptar" a un contratante no es suficiente para proteger la API?

Porque ocultar un botón solo restringe lo que el usuario ve, pero no impide que realice peticiones directamente a la API mediante herramientas externas. Por eso, el backend debe validar la autenticación y los permisos del usuario antes de permitir cualquier acción protegida.

## ¿Qué ventajas tiene tener el front y el back en repositorios separados?

Permite desarrollar, mantener, probar y desplegar el frontend y el backend de manera independiente. También facilita la organización del código, la asignación de responsabilidades y el trabajo simultáneo de diferentes desarrolladores. Sin embargo, requiere coordinar correctamente los cambios entre ambos proyectos.

## Referencias bibliográficas

React. (s. f.). *State: A component's memory*. React Documentation.
[https://react.dev/learn/state-a-components-memory](https://react.dev/learn/state-a-components-memory)


React. (s. f.). *State: A component's memory*. React Documentation.
[https://react.dev/learn/state-a-components-memory](https://react.dev/learn/state-a-components-memory)

React. (s. f.). *Passing data deeply with context*. React Documentation.
[https://react.dev/learn/passing-data-deeply-with-context](https://react.dev/learn/passing-data-deeply-with-context)


OWASP Foundation. (s. f.). *Authorization cheat sheet*. OWASP Cheat Sheet Series.
[https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)


GitHub. (s. f.). *Repositories*. GitHub Docs.
[https://docs.github.com/en/repositories](https://docs.github.com/en/repositories)

