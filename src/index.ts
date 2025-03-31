type tipoSangue = "A" | "B" | "AB" | "O";

let tipoSanguePaciente: tipoSangue = "A";

function verificarTipoSangue(tipoSangue: tipoSangue): void {
    console.log(`tipo é ${tipoSangue}`);
}
verificarTipoSangue("AB")