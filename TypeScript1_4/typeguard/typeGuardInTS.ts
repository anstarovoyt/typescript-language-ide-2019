export function f(parameter: string | number) {
    if (typeof parameter === "number") {
        parameter // completion
    }

    parameter.toExponential(); //quick fix
}