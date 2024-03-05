export function formatDate(d: Date) {
    let DD = d.getDate().toString()
    if (DD.length < 2) DD = '0' + DD

    let MM = d.getMonth().toString()
    if (MM.length < 2) MM = '0' + MM

    let YY = d.getFullYear().toString()

    let mm = d.getMinutes().toString()
    if (mm.length < 2) mm = '0' + mm

    let hh = d.getHours().toString()
    if (hh.length < 2) hh = '0' + hh
    return DD + '.' + MM + '.' + YY + ', ' + hh + ':' + mm
}

export function paddedString(string: String, padding: number, line_start?: Boolean) {
    if (line_start === true) return " ".repeat(padding) + string
    else return string + " ".repeat(padding)
}