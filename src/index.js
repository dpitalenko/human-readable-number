module.exports = function toReadable (number) {
    const digits = {
        '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', 
        '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', 
        '18': 'eighteen', '19': 'nineteen', '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty', '60': 'sixty', '70': 'seventy', 
        '80': 'eighty', '90': 'ninety', '100': 'hundred'}

    let num = String(number);

    if(number < 21) {
        return digits[num];
    } 

    if(num.length == 2) {
        if(num[1] == '0') {
            const dig10 = digits[num[0] + '0'];
            return dig10;
        } else {
            const dig1 = digits[num[1]];
            const dig10 = digits[num[0] + '0'];
            return dig10 + ' ' + dig1;
        }
    }

    if(num.length == 3) {
        let test = Number(num.slice(1));
        if(num[2] == '0' && num[1] == '0') {
            const dig100 = digits[num[0]];
            return dig100 + ' ' + digits['100'];
        } else if(test < 21) {
            const dig1 = digits[test];
            const dig100 = digits[num[0]];
            return dig100 + ' ' + digits['100'] + ' ' + dig1;
        } else if(num[2] == '0') {
            const dig10 = digits[num[1] + '0'];
            const dig100 = digits[num[0]];
            return dig100 + ' ' + digits['100'] + ' ' + dig10;
        } else {
            const dig1 = digits[num[2]];
            const dig10 = digits[num[1] + '0'];
            const dig100 = digits[num[0]];
            return dig100 + ' ' + digits['100'] + ' ' + dig10 + ' ' + dig1;
        }
    }
}
