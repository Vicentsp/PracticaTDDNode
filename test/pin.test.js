import { describe, it, expect } from "vitest";
import { esPinValido } from "../src/pin.js";

describe("PIN: entradas válidas", () => {
    it.each(["0123", "1234", "123456", "000001"])(
        "acepta el PIN %s",
        (pin) => {
            expect(esPinValido(pin)).toBe(true);
        }
    );
});

describe("PIN: entradas inválidas", () => {
    const casosInvalidos = [
        ["cadena vacía", ""],
        ["tres caracteres", "123"],
        ["cinco caracteres", "12345"],
        ["siete caracteres", "1234567"],
        ["cuatro dígitos iguales", "1111"],
        ["seis dígitos iguales", "888888"],
        ["solo ceros", "0000"],
        ["letras", "12a4"],
        ["espacio inicial", " 1234"],
        ["espacio final", "1234 "],
        ["espacio interior", "12 4"],
        ["signo positivo", "+123"],
        ["signo negativo", "-123"],
        ["separador decimal", "12.3"],
        ["salto de línea final", "1234\n"],
        ["dígitos no ASCII", "１２３４"],
        ["null", null],
        ["undefined", undefined],
        ["un número", 1234],
        ["un booleano", true],
        ["un array", ["1234"]],
        ["un objeto", {}]
    ];

    it.each(casosInvalidos)("rechaza %s", (_, pin) => {
        expect(esPinValido(pin)).toBe(false);
    });
});