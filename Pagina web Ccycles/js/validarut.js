/**
 * Validación de RUT Chileno
 * algoritmo Modulo 11
 */
var validacionrut = {
    /**
     * Valida rut de la forma XXXXXXXX-X 
     */
    validaRut: function(rut) {
        var pattern = /^[0-9]+-[0-9kK]$/;
        var matcher = rut.match(pattern);
        if (!matcher) return false;
        var stringRut = rut.split("-");
        return stringRut[1].toLowerCase() === validacionrut.dv(stringRut[0]);
    },

    /**
     * Valida el dígito verificador
     */
    dv: function(rut) {
        var M = 0, S = 1, T = parseInt(rut);
        for (; T != 0; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return (S > 0) ? String(S - 1) : "k";
    }
};