import hslToRgb from './hslToRgb'

export default (colour) => {
    // takes decimal int < 255 and converts to 2 digit hex (with leading 0)
    let to2digitHex = (dec) => {
        let hex = Math.round(dec).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    }

    let rgbToHsl = (r, g, b) => {
        r /= 255, g /= 255, b /= 255;
    
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
    
        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
        
            h /= 6;
        }
    
        return [ h, s, l ];
    }








    let rhex = colour.substr(0, 2);
    let ghex = colour.substr(2, 2);
    let bhex = colour.substr(4, 2);

    let rdec = parseInt(rhex, 16);
    let gdec = parseInt(ghex, 16);
    let bdec = parseInt(bhex, 16);

    let hsl = rgbToHsl(rdec, gdec, bdec);
    hsl[2] = hsl[2] * 0.6;
    let rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

    let darkrhex = to2digitHex(rgb[0]);
    let darkghex = to2digitHex(rgb[1]);
    let darkbhex = to2digitHex(rgb[2]);

    return darkrhex + darkghex + darkbhex;
}