# ATOM FE CHALLENGE TEMPLATE - ANGULAR

Este proyecto es una plantilla con lo necesario para comenzar a desarrollar el front-end de la aplicación de la prueba técnica de Atom. Se base en Angular con la versión 15.2.1.
Se ha realizado la instalación y configuración de varias dependencias necesarias para el desarrollo de la aplicación, como por ejemplo: Angular Material.

## Instrucciones
Siéntete libre de clonar este repositorio y utilizarlo como base para el desarrollo de la aplicación. Sigue las indicates de la prueba técnica para completar la aplicación y desarrolla como más te sientas cómodo.

De igual manera puedes documentar dentro de este archivo todo lo que deseas contar sobre tu desarrollo, como por ejemplo, decisiones de diseño, problemas encontrados, etc.

## Comentarios sobre el desarrollo


### Tipo de Diseño modular centrado en componentes

- La carpeta components posee todos los componentes utilizados en la aplicación de forma encapsulada. Cada componente representa una parte de la interfaz de usuario y encapsula su funcionalidad y estilo.


- La carpeta app contiene subcarpetas que representan diferentes módulos de la aplicación, como components, interceptors, interfaces, layout, modules, y router. Esta modularidad facilita la organización y el mantenimiento del código al separar las diferentes funcionalidades en módulos más pequeños y manejables.


- La estructura de carpetas  esta organizada de manera intuitiva, lo que facilita la navegación y la comprensión del código para los desarrolladores. Cada carpeta tiene un propósito claro y está destinada a contener archivos relacionados.

### Estructura de Carpetas

```
.
├── src
│   ├── app
│   │   ├── components
│   │   ├── interceptors
│   │   ├── interfaces
│   │   ├── layout
│   │   ├── modules
│   │   └── router
│   ├── assets
│   ├── environments
│   └── app-routing.module.ts
├── angular.json
├── .editorconfig
├── .gitignore
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
