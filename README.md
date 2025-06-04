# ReactTelegram

## Proyecto para el curso de React del Informatorio, es una reinterpretacion de la interfaz de Telegram.
- Lista de chats.
- Card con nombre, foto, último mensaje
- Un chat abierto con mínimo 15 mensajes de un mismo día

## Requerimientos:
### 1. Proyecto con Vite + React + TypeScript (opcional)
### 2. Diseñar una UI simple con componentes reutilizables:
  - Navbar
  - Lista de ítems (por ejemplo: canciones, películas, chats o productos)
### 3. Renderizar una lista de objetos mockeados
  - Al menos 7 ítems.
  - Al menos 4 listados (si tu app tiene justificado solo usar un listado, usar 1 solo)
  - Tipado en TypeScript (si es que lo utilizan).
    Ejemplo:
    ```js
    Proyecto - Entrega 1 1
    type Song = {
     id: string;
     title: string;
     artist: string;
     duration: string;
    };
    ```
### 4. Estilos
  - CSS Modules, Tailwind o CSS in JS.
  - Visualmente ordenado, no necesariamente responsive.
### 5. Uso de children para crear contenedores (si es necesario para la app que seleccionaste)
  - Crear al menos un componente contenedor genérico reutilizable que acepte children.
  Ejemplo:
  ```js
  type ContainerProps = {
   children: React.ReactNode;
  };
  const Container = ({ children }: ContainerProps) => {
   return <div className="p-4">{children}</div>;
  };
  ```
  Usar ese Container en varias partes de la app (para listas).
7. Cada ítem debe renderizarse como un componente individual
