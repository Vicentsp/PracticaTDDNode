# PracticaTDDNode

Práctica individual de TDD con JavaScript, Node.js y GitHub Actions.

## Funcionalidades

- fibonacci(n): calcula el término de la sucesión de Fibonacci.
- esPinValido(pin): comprueba que el PIN tenga 4 o 6 dígitos y que no sean todos iguales.

## Metodología

Las funciones se desarrollan siguiendo el ciclo RED, GREEN y REFACTOR.

## Ejecutar las pruebas

Desde la carpeta del proyecto:

npm test

En PowerShell, si npm.ps1 está bloqueado:

npm.cmd test

## Ramas

- main: versiones terminadas.
- development: integración del trabajo.
- feature-code: implementación de las funcionalidades.

## Aclaración del enunciado

Se considera fibonacci(0) = 0. Los números negativos y los valores no enteros provocan un RangeError.