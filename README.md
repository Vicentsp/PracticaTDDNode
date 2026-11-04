# PracticaTDDNode

Práctica de TDD con JavaScript, Node.js 24, Vitest y GitHub Actions.

## Autor

Vicente Antonio Bonmatí Anton — GitHub: Vicentsp.

Trabajo individual: realizo tanto las pruebas como la implementación
y refactorización de ambas funciones. Los pull requests los integro yo;
no hay revisión de un compañero.

## Funcionalidades

- fibonacci(n): devuelve el término de índice n de Fibonacci.
  Solo admite números enteros entre 0 y 78.
  Cualquier otra entrada lanza RangeError con el mensaje:
  "solo números enteros entre 0 y 78".

- esPinValido(pin): admite únicamente cadenas de 4 o 6 dígitos
  del 0 al 9 que no sean todos iguales.
  Conserva los ceros iniciales y rechaza espacios y otros tipos.

## Instalación

Necesitas Node.js 24.

```bash
npm ci
```

## Ejecutar las pruebas

Una ejecución completa:

```bash
npm test
```

Modo de seguimiento de cambios:

```bash
npm run test:watch
```

En PowerShell, si npm.ps1 está bloqueado, utiliza npm.cmd en lugar de npm.

## Metodología y ramas

Se sigue el ciclo RED, GREEN y REFACTOR.

- main: versión final.
- development: integración con todas las pruebas superadas.
- feature-tests: creación de las pruebas.
- feature-code: integración de pruebas e implementaciones.
- impl-fibonacci: implementación de Fibonacci.
- impl-pin: implementación de la validación del PIN.

## Integración continua

El archivo .github/workflows/ci.yml configura GitHub Actions
para instalar las dependencias y ejecutar las pruebas automáticamente.