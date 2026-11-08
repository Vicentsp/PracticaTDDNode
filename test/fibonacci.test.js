import { describe, it, expect } from "vitest";
import { fibonacci } from "../src/fibonacci.js";

describe("Fibonacci: entradas válidas", () => {
    it("devuelve 0 para n = 0", () => {
        expect(fibonacci(0)).toBe(0);
    });

    it("devuelve 1 para n = 1", () => {
        expect(fibonacci(1)).toBe(1);
    });

    it("devuelve 1 para n = 2", () => {
        expect(fibonacci(2)).toBe(1);
    });

    it("devuelve 5 para n = 5", () => {
        expect(fibonacci(5)).toBe(5);
    });

    it("devuelve 55 para n = 10", () => {
        expect(fibonacci(10)).toBe(55);
    });

    it("admite el límite superior: n = 78", () => {
        expect(fibonacci(78)).toBe(8944394323791464);
    });
});

describe("Fibonacci: entradas inválidas", () => {
    const casosInvalidos = [
        ["un número negativo", -1],
        ["un número mayor que 78", 79],
        ["un decimal", 2.5],
        ["NaN", NaN],
        ["infinito positivo", Infinity],
        ["infinito negativo", -Infinity],
        ["una cadena", "5"],
        ["null", null],
        ["undefined", undefined],
        ["un booleano", true],
        ["un array", []],
        ["un objeto", {}]
    ];

    it.each(casosInvalidos)("rechaza %s", (_, valor) => {
        expect(() => fibonacci(valor)).toThrow(RangeError);

        expect(() => fibonacci(valor)).toThrow(
            /^solo números enteros entre 0 y 78$/
        );
    });
});