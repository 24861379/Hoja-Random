# Hoja-Random - Ejecución de Pruebas Automatizadas con Cypress

Este proyecto incluye pruebas automatizadas con [Cypress](https://www.cypress.io/) para verificar el correcto funcionamiento de la aplicación **Hoja-Random**.

---

## Requisitos Previos

- Tener [Node.js](https://nodejs.org/) instalado.
- Tener las dependencias del proyecto instaladas (incluyendo Cypress).

---

## Instalación de Dependencias

Si aún no lo has hecho, instala las dependencias ejecutando en la raíz del proyecto:

```bash
npm install

---

## Ejecución de las Pruebas Cypress

Para ejecutar las pruebas, usa el siguiente comando:

```bash
npx cypress open
```

Se abrirá una ventana de Cypress en la que se escogerá el navegador donde se van a ejecutar las pruebas.

Selecciona **E2E Testing**, elige tu navegador preferido y haz clic en el archivo de pruebas correspondiente (por ejemplo, `cypress/e2e/HR.cy.js`).

---