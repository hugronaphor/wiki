(function($) {

  'use strict';

  /**
   * A simple Drupal behavior example.
   */
  Drupal.behaviors.header = {
    attach: function(context) {
      
      
    Raphael.fn.polyline = function (x,y) {
        var poly = ['M',x,y,'L'];
        for (var i=2;i<arguments.length;i++) {
                poly.push(arguments[i]);
        }
        return this.path(poly.join(' '));
    }
    
   window.onload = function () {
     
     //alert('test');
            var R = Raphael("paper", 300, 300);
            var attr = {
                fill: "#333",
                stroke: "#666",
                "stroke-width": 1,
                "stroke-linejoin": "round"
            };
            var aus = {};
            
//             <path id="null" fill="none" stroke="#000" d="M164.64,207.6L146.98 201.79 139.62 191.82 139.47 188.17 143.1 178.6 151.32 173.62 165.21 173.78 170.47 179.32 173.28 186.8 170.47 199.98 164.48 207.7"/>
// <line y2="335.92" x1="164.48" x2="234.45" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="207.7" stroke-width="4.5026" fill="none"/>
// <line y2="275.83" x1="170.47" x2="271.67" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="199.98" stroke-width="4.5026" fill="none"/>
// <line y2="211.2" x1="173.28" x2="297.04" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="186.8" stroke-width="4.5026" fill="none"/>
// <line y2="141.58" x1="169.43" x2="338.85" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="178.22" stroke-width="4.5026" fill="none"/>
// <line y2="118.4" x1="169.55" x2="245.81" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="178.23" stroke-width="4.5026" fill="none"/>
// <line y2="105.24" x1="164.99" x2="197.73" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="173.72" stroke-width="4.5026" fill="none"/>
// <line y2="87.987" x1="151.57" x2="143.42" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="173.65" stroke-width="4.5026" fill="none"/>
// <line y2="79.633" x1="143.1" x2="87.341" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="178.65" stroke-width="4.5026" fill="none"/>
// <line y2="138.17" x1="139.71" x2="60.593" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="188.61" stroke-width="4.5026" fill="none"/>
// <line y2="188.03" x1="139.03" x2="47.099" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="191.69" stroke-width="4.5026" fill="none"/>
// <line y2="259.34" x1="145.58" x2="34.229" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="201.92" stroke-width="4.5026" fill="none"/>
// <line y2="322" x1="146.86" x2="69.447" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="202.2" stroke-width="4.5026" fill="none"/>
// <line y2="317.92" x1="152.16" x2="139.87" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="203.09" stroke-width="4.5026" fill="none"/>



aus.path1 = R.path("M148.66,230.61L175.19 226.81 187.66 212.47 192.87 190.75 189.93 175 183.76 171.22 170.58 160.57 149.85 154.48 131.36 157.12 114.05 172.46 116.94 173.84 113.83 191.1 119.04 215.43 133.2 225.29 148.66 230.61").attr(attr);
aus.path2 = R.path("M146.6,254.36L187.39 249.94 212.51 230.92 207.5 227.79 221.77 197.06 213.02 169.11 207.21 148.75 204.01 151.32 184.9 131.84 146.14 119.81 115.27 129.33 86.963 156.22 77.092 189.23 89.936 230.04 116.77 249.14 146.6 254.36").attr(attr);
aus.path3 = R.path("M142.6,290.3L200.31 278.27 239.23 251.91 259.4 203.73 245.94 163.3 230.64 130.76 197.85 104.95").attr(attr);
aus.path4 = R.path("M144.1,96.829L101.64 105.69 60.178 138.07").attr(attr);
aus.path5 = R.path("M143.29,289.55L101.14 273 69.564 242.06 45.799 189.1").attr(attr);
aus.path6 = R.path("M30.413,219.45L45.22 252.4 86.017 296.19 139.25 314.08 220.62 312.11 266.03 269.27 281.87 207.98 283.3 153.6 256.52 121.39").attr(attr);
aus.path7 = R.path("M255.5,345.58L257.66 332.5 260.3 319.22 263.04 306.23 266.44 293.04 270.21 280.28 274.25 267.58 278.37 254.9 283.3 242.32 288.56 229.66 294.13 217.58 299.88 205.36 306.35 193.63 312.93 181.92 320.11 170.21 327.19 158.87 334.93 147.67 339.15 141.64").attr(attr);
aus.path8 = R.path("M339.15,141.64L313.44 135.86 287.9 129.74 262.54 123.38 237.2 116.6 211.81 109.43 186.66 101.75 161.68 94.291 136.82 86.041 112 77.484 102.97 74.374").attr(attr);
aus.path9 = R.path("M103.35,74.247L87.274 78.912 84.707 79.493 78.416 80.008 72.123 80.105 65.963 79.901 61.515 79.376").attr(attr);
aus.path10 = R.path("M59.713,78.965L61.416 86.409 62.295 95.377 62.649 104.42 62.649 113.41 62.124 122.38 61.295 131.31 60.178 140.22 58.629 148.93 56.439 157.83 54.146 166.62 51.209 175.06 48.307 183.42 44.702 191.86 40.552 199.97 36.509 208.03 31.744 215.59 26.958 223.28 16.853 239.18").attr(attr);

aus.path11 = R.path("M17.412,239.31L24.143 247.22 30.784 255.11 37.078 263.29 42.93 271.75 48.36 280.44 53.64 289.08 58.456 298.05 62.964 307.15 67.133 316.52 69.447 322").attr(attr);
aus.path12 = R.path("M69.447,322L80.824 320.42 91.996 319.5 103.3 318.88 114.68 318.38 126.16 318.44 137.68 318.67 149.22 319.55 160.4 320.7 171.75 322.38 183.01 324.27 194.14 326.35 205.31 328.98 216.43 331.83 227.11 335.32 238.14 338.92 248.88 342.89 255.5 345.58").attr(attr);
aus.path13 = R.path("M392.64,162.6L339.36 141.7 386.74 113.5").attr(attr);
//aus.path14 = R.path("").attr(attr);
//aus.path15 = R.path("").attr(attr);
//aus.path16 = R.path("").attr(attr);
//aus.path17 = R.path("").attr(attr);
//aus.path18 = R.path("").attr(attr);

// <path id="null" fill="none" stroke="#000" d="M17.412,239.31L24.143 247.22 30.784 255.11 37.078 263.29 42.93 271.75 48.36 280.44 53.64 289.08 58.456 298.05 62.964 307.15 67.133 316.52 69.447 322"/>
// <path id="null" fill="none" stroke="#000" d="M69.447,322L80.824 320.42 91.996 319.5 103.3 318.88 114.68 318.38 126.16 318.44 137.68 318.67 149.22 319.55 160.4 320.7 171.75 322.38 183.01 324.27 194.14 326.35 205.31 328.98 216.43 331.83 227.11 335.32 238.14 338.92 248.88 342.89 255.5 345.58"/>
// <line y2="497.07" x1="255.63" x2="317.48" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="344.3" stroke-width="4.5026" fill="none"/>
// <path id="null" fill="none" stroke="#000" d="M392.64,162.6L339.36 141.7 386.74 113.5"/>
// <line y2="74.645" x1="88.395" x2="104.2" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="2.682" stroke-width="4.5026" fill="none"/>
// <line y2="79.129" x1="3.163" x2="60.446" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="6.952" stroke-width="4.5026" fill="none"/>
// <line y2="321.81" x1="26.454" x2="69.491" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" y1="480.98" stroke-width="4.5026" fill="none"/>
            
            
            
           // aus.vic = R.path("M252.869,203.121l-0.873-0.643l-1.721-0.121l-8.182-4.065l0.178-1.349l-0.354-1.082l-0.722-1.028l-0.566-1.235l0.204-1.168l-1.433-0.73l-0.899,0.326l-0.711,0.295l-0.74,0.111l-1.083,0.354l-1.451,0.408l-1.961-0.461l-1.037-0.603l-0.896,0.327l-0.658,0.666l-1.164-0.204l-1.223-0.571l-0.925,0.139l-1.434-0.729l-1.85,0.28l-0.823-0.444l-0.741,0.11l-0.471,0.638l0.223,1.481l-1.295,0.195l-1.619-0.701l-1.277-0.943l-0.379-1.268l-1.973-1.783l-1.619-0.701l-1.138-0.018l-1.444-2.054l-0.604-2.748l-1.008-0.413l-1.721-0.119l-0.98-0.232l-1.055,0.539l-0.045,0.953l-1.092-0.971l-0.492-2.009l-1.73-1.44l-2.12-0.248l-1.748-0.305l-1.024,0.723l-1.834-0.86l-1.109,0.168l-0.08,0.038v28.152l0.436,0.031l2.342,1.916v1.065l0.64-0.214l0.638,0.427l1.278-1.491l2.556,1.278l1.703-0.427l7.881,4.261l3.193-3.195l2.557-1.704h1.49l0.428-1.275l-1.492,0.425l-0.853-0.64h1.063l2.771-2.129l1.277,2.555l-1.277,1.703l-1.917-0.424l1.917,1.702l1.277-0.852l0.64,0.213l0.211-1.703h1.492l0.426,1.276l-0.852,0.214l-0.215,1.276l1.49,1.065l1.491-0.213l0.214,0.426l-0.639-0.213l1.064,1.916l0.851-0.64l0.853,0.427l-0.213-0.64l0.854,1.705l1.064,1.063l0.426-2.769l-1.277,0.852l-0.426-1.703h2.13l2.526-0.843l4.074-4.269l2.768-1.703l-3.406,1.489l1.917-1.278l-0.071-0.07l-0.568-0.567l1.492,0.427l1.703-0.64l-0.213,0.427l9.371-0.853l1.915-1.703l-0.638-0.64H252.869z").attr(attr);
          //  aus.nsw = R.path("M278.939,132.632l-0.641-0.853l0.183-1.97l-0.975,0.091l-0.92-0.092l-0.506,0.415l-0.526,0.234l-0.541,0.053l-0.939-0.271l-1.049,0.468l-0.813-0.833l-0.938-0.272l-0.851,0.631l-0.67,0.614l-1.083,0.106l-0.904,0.09l-0.108,0.741l0.288,1.068l0.722-0.073l-0.651,0.795l-0.129,0.559l-1.049,0.47l-0.757-0.291l-0.433-0.688l-0.651,0.794l-0.651,0.795l-0.309,0.578l-0.688,0.433l-0.47-1.049l-0.069-0.723l-0.435-0.688l-0.415-0.507l-0.631-0.85l-1.121-0.254l-1.643-0.021l-0.577-0.309l-0.761-0.29l-0.722,0.071l-0.235-0.524l-0.903,0.089l-1.41,0.504l-1.3-0.237l-1.321-0.416l-0.541,0.053L250,132.249l-1.104-0.073l-0.073,1.102l-0.722,0.072l0.053,0.543l-0.869,0.449l-53.113-0.052l-0.002,0.043v45.292l0.08-0.038l1.109-0.168l1.834,0.86l1.024-0.723l1.748,0.305l2.12,0.248l1.73,1.44l0.492,2.009l1.092,0.971l0.045-0.953l1.055-0.539l0.98,0.232l1.721,0.119l1.008,0.413l0.604,2.748l1.444,2.054l1.138,0.018l1.619,0.701l1.973,1.783l0.379,1.268l1.277,0.943l1.619,0.701l1.295-0.195l-0.223-1.481l0.471-0.638l0.741-0.11l0.823,0.444l1.85-0.28l1.434,0.729l0.925-0.139l1.223,0.571l1.164,0.204l0.658-0.666l0.896-0.327l1.037,0.603l1.961,0.461l1.451-0.408l1.083-0.354l0.74-0.111l0.711-0.295l0.899-0.326l1.433,0.73l-0.204,1.168l0.566,1.235l0.722,1.028l0.354,1.082l-0.178,1.349l8.182,4.065l1.721,0.121l0.873,0.643h0.513l-0.213,0.64l0.112-0.336l0.227,0.167l0.939-0.471l-0.213-1.704l0.427-0.212h0.425l-0.425-1.065l-0.853-0.213l0.426-0.853l-0.426-1.064l0.426,0.214l0.427-1.491l0.851-3.406l-0.213-2.131l0.426-1.277h-0.426l1.065-0.852l-0.64-0.853l0.854,0.213l1.703-4.046l1.49-0.428l-0.641-1.275l0.641-0.214v0.853l0.424-0.214l-0.424-1.276l-0.426,0.213l0.213-0.426l-0.854-0.213l1.49-0.64l0.427-1.491l-0.427-0.639l0.64-0.215v-1.489l1.703-1.703l-0.638-0.214l1.063-0.213l-1.276-0.426l1.489-0.213l0.214-1.064l-0.64,0.426l-0.427-0.426l0.64,0.213l-0.213-0.639l0.64,0.426l0.213-1.704v-0.212l-0.427,0.425v-0.639l-0.213,0.214l-0.213-0.641l0.64,0.427l0.213-1.064v0.853l0.852-0.426l0.214-1.064l-0.427-0.427h0.854l0.637-1.703l-0.637,0.853l-0.214-0.853h0.638v-0.853l0.213,0.853l0.854-1.491l-0.213-0.426h0.427v0.64l2.556-1.491l-0.853-0.213l-0.853,0.639l-0.213-0.213l0.426-0.426l-0.213-0.426l0.853,0.426l0.638-0.426l0.215,0.426l0.853-1.277l1.489-0.853l0.214-1.702l-0.64-0.215v0.428l-0.852-0.428h1.064l0.213-1.49l1.49-1.277l1.918-6.176l-0.213-4.26l1.489-3.834l0.213-0.639l0.64-3.62l-0.64-0.426l0.64,0.213l-0.213-0.853l1.703-3.193h-0.426l0.426-0.214L278.939,132.632z M261.268,143.072h-0.215l-0.213-0.639l0.641-0.214L261.268,143.072z").attr(attr);
//            aus.wa = R.path("M112.615,33.818l-0.426-0.425l-0.852-0.213l-1.278,0.213l0.852,0.639l0.213,0.852l-0.852-1.065l0.638,1.065l-0.212-0.213l-0.213,0.426l-0.426-0.426l-0.213,0.852l-0.426-1.064l-0.426,0.639l1.064,2.982h-0.426l-0.213-1.065l-1.065-1.065v1.704l-0.639,0.639l0.426-0.852l-0.426-0.639l0.426-0.213l-0.213-1.277l0.639-1.491h-0.426l0.852-0.212l-0.426-0.639l0.426-0.212l-1.491-1.065l-0.212,0.425l-1.917-2.981l-1.491-0.852l-0.213-0.852l-0.639-0.213l0.213,0.638l-0.639-0.638l-0.426,0.425V27.22l-0.426,0.425l-0.426-1.064l-1.278-0.427v0.427l-0.852-0.213l0.426,1.065l0.852,0.425l-0.373-0.053l-1.118-0.16l0.213,0.64L98.77,28.71l-0.213-0.425l-0.213,1.277l-0.639-1.277l-0.426,0.212l0.426-1.064l-1.277,0.852l-0.213,0.425l0.426,0.426l-0.852,0.426l-0.213-1.065H95.15l0.426-0.425H95.15l0.426-0.426l-0.639,0.426l-0.639-0.213v0.427l-0.213-0.427v0.427l1.278,0.639l-0.852,0.639l0.213,0.638l-0.639,0.427l0.426,0.852h-0.852v1.065l-0.639-0.639l0.212-0.853l-0.852,0.213v-0.639l-0.639,1.704l0.213-1.917l0.426-0.639l-0.852-0.426v2.343l-0.639-0.213l-0.426,0.852l-0.213-0.639l-0.426,0.425l0.213-0.852l-0.852,0.852l0.426,0.213l-1.278,0.639l0.639,0.853h0.639l-0.852,0.64l1.278,0.425l0.213-0.425l0.426,0.212l-0.852,0.852l1.064,0.426h-1.064l-0.426-0.639l-0.852,0.639l-0.639-1.49l-0.426,0.212l0.213,0.852l-1.278,0.213l0.426,0.213l-0.213,0.639l1.278-0.852l-1.278,1.065l0.426,0.426l1.065-0.64v0.426h0.426l-0.639,0.639l1.277,1.064l-1.064-0.852l-0.426,0.425l-0.426-0.852l-0.852-0.212v-0.426l-0.639,0.426l-0.426,0.852l-0.213-0.427l-0.212,0.639l-0.852-0.212l0.213,0.212l-0.852,0.64l0.426,0.212l-0.639,0.213l0.852,2.342l0.213-0.372v0.16l0.426-0.64l-0.355,0.355l0.568-0.994l0.639-0.425l-0.426,0.425h0.639l-0.852,0.639l-0.213,1.491h0.426l-0.852,0.425l0.426,0.213l-0.426,0.213l-0.426-1.065l-0.426,1.917l1.491-0.213l1.278,0.639l1.065-0.212l-1.065,0.425l-0.426-0.425l-1.917,0.212l-0.426-0.426l-0.426,0.426l0.373,0.224l-1.011,0.203l0.639-0.213l-0.639-0.213l-0.639-0.852l-1.491-0.639l0.639,0.639h-0.426l0.426,0.64l-0.852-0.64v0.213l-1.065-0.426h0.426l-0.212-0.426h0.426l-0.852-0.425v0.425l-0.639-0.213l0.213,0.427l-0.426-0.427l0.426,0.64l-0.426,0.212l0.852,0.213l0.212,0.426l-0.639-0.213l0.639,0.426H77.48l1.064,0.639h-1.49l0.426,0.639l0.212-0.426l0.639,0.213l-0.852,0.639l1.49,0.426l0.426,1.278l0.852-0.426v-0.426l0.426,0.213l-1.064,1.065l0.426,0.426l-0.639-0.213l1.065,1.917l-1.917-1.917l-0.639,0.213l0.852,1.49l-0.426-0.213l-0.426,1.065v1.065l-1.278-1.278l-0.639-2.129l-0.852-0.64v-1.704h-0.639l-0.639-0.639l0.213-0.852l0.639-0.213l-0.426-0.639l-0.639,0.213l-1.278,2.129l0.639,0.639l-1.704-0.212l-0.213,0.639l0.426,0.852l-0.852-0.426v0.426l-0.852,0.213l-0.639,0.852l0.426,0.213l-1.065,0.852l-0.213,1.916l0.639,1.491l-0.426,1.491l1.491,0.213v0.852l-2.981,2.13l-0.852,0.212l-0.639,0.852l0.426,0.64l-1.065,0.212l0.213,0.852l-1.065,1.917l-2.555,3.195l-5.963,2.556l-1.491,0.213h-1.491L51.924,69.6l-0.852,0.639L50.434,69.6l-1.917-0.426L48.73,69.6v0.213L48.517,69.6l-0.426-0.213L47.878,69.6l-1.491,1.917l-4.472,0.852v-0.426l-1.704,1.065l0.213,0.426h-0.639l-0.426,0.852l-1.065,0.213v-0.213l-1.704,0.852l-1.278-0.639l-0.213-0.64l-1.491,0.852l-0.639-0.212l-0.426-0.213l0.639-1.065h-0.426l-1.065,1.278l0.212,0.212h-0.426l-2.129,1.065l-0.639-0.426l-0.213,1.064l-1.704,0.852l-0.639,1.278l-1.064,0.213l-1.065,1.704l-4.046,1.065l-1.704,1.064l-0.213,1.278l-0.426,0.213l-0.426-0.213l0.213,0.852l-0.639,1.065l0.426,0.426l-0.426-0.212l0.212,0.425l-0.852,1.065l-0.426-0.639l-1.065,0.639l0.426-1.49l-0.426,0.425l-0.213-1.49l0.852-2.556L13.8,82.804l-2.129,5.111l1.065,2.769l-0.426,1.278l0.213,2.555l-2.129,2.982l-0.426,3.833l1.704,2.769l-0.213,0.427l0.426,1.704l0.852,0.639l2.342,4.685l0.639,0.213l0.212,1.064h-0.639l0.213,2.343l-1.064,1.277l-1.065-1.704l-0.213-2.342v1.065l-1.065,0.852l0.213-2.343l-1.704-2.769l-0.639,1.704l0.426,0.426v-0.852l0.639,3.194l2.13,1.704l-0.213,1.917l-1.277,0.64l-0.213-1.491l-0.213,1.278l-0.426-2.556l-0.213,1.277l-0.852-3.407l0.213,2.769l-0.639-0.426v-2.342l-0.213,1.704l-0.852-0.639l5.537,8.093l1.278,3.407l-0.426,1.065l0.426,2.129l2.343,2.769l0.639,1.278l-0.213,0.852l1.917,2.557l0.852,2.98l-0.213,3.833v0.427l0.639,3.407l4.259,8.944l0.213,3.193l1.065-0.639v0.425l-1.065,0.214l0.213,1.064l-0.426,0.639l0.213,1.491l-0.852,1.704l0.639,4.896l-2.342,2.77h-1.065l-1.278-0.853v4.474l0.852,2.342l0.212-0.426l1.278-0.213l2.342,1.277l1.917,2.98l2.555,0.853l0.213-0.639l0.852,0.639h-1.065l1.704,1.063l0.639-0.639l1.278,0.639l2.981-0.424l1.704,1.062l0.426-0.852l1.917,0.64l0.426-0.213l-1.064-0.427l0.426-0.853l0.426-0.213l-0.213,0.853h1.704l-0.213-0.64l1.491-0.213l0.213-1.278l1.917-0.852l0.212-0.852l1.065-0.428l-0.426-0.425l2.769,0.853l0.213-0.853l0.852,0.213v-0.853l1.065,0.213l-0.852-0.853l2.981-2.769h0.639l2.768,0.426l1.065-0.852l5.324-0.64l2.769,0.853l1.49-0.639l0.852,1.49h1.065l0.426-0.854l1.491,0.427l0.212-0.64l2.769-0.213l0.639,0.426l0.213,0.854l1.491-1.064l1.064,0.426l2.982-2.981l0.852-3.407l0.852-0.852l3.833-1.278l7.667-4.472l1.704-0.426l3.195,0.426l3.62-0.214l6.814-2.129l4.642-2.321V44.302l-0.381,0.381l-0.427-0.213v1.704l-0.638,0.851v-0.212l0.213-0.426l-1.278-0.426l0.213-0.852l-0.639,0.426l0.852-1.491l-0.213-0.638h0.638l-0.425-0.64l1.065-0.638l-0.426,0.638l0.426,0.213l0.852-0.638l0.168,0.042v-8.565H112.615z M83.443,45.535v-0.81l0.639,0.384L83.443,45.535z M113.852,44.081V43.35l-0.168,0.056L113.852,44.081z").attr(attr);
//            aus.nt = R.path("M166.71,26.155v0.639h-0.851l-0.213-0.852l0.213-0.425l-1.066,0.212l0.428,0.64l-1.49,0.425v1.065l0.213,0.852l-0.641,0.852l0.641-0.426l1.49,0.852h1.916l-0.213-1.065l-0.214,0.426l-1.063-0.213v-0.851l0.639-0.214l-0.213-0.638l1.064-0.852L166.71,26.155zM172.666,43.192l-2.13-0.639l-2.769-1.917l-0.64,0.212l0.213,0.426l-1.065-0.426l-0.639,0.213v-0.852l-2.343-1.065l-0.851-1.704l-3.407-2.129l-0.214,0.212V35.1l-0.641,0.213l-1.062-1.065l-0.428-1.49l1.277-0.426l1.066-2.556l1.277-0.639l0.213-1.278l1.063-2.342l-0.853,0.639l-0.426-0.213l-0.214-1.917l0.427,0.213l0.426-0.426l-0.639-0.213l0.213-0.639l0.639-0.426l0.213,0.639l0.64-1.277l0.214,1.065l0.213-1.065l0.639,0.213l0.213-0.639l0.427,1.065l-0.427,0.639l0.854-0.426l0.637-1.278l-0.637-0.639l1.276,0.213l-1.276-1.491l0.424,0.213l0.213-0.426l0.428,0.639l-0.213-0.852h0.639l0.428-1.065l-0.213-0.639h0.424v0.639l1.278-1.491l-1.278-1.278l-0.639,0.427l0.428,0.425h-0.641l-0.854-1.917h-0.424l0.637-0.852l-2.555,1.917l1.491,0.427l-0.64,1.277l-0.639,0.427l-0.853-0.213l-0.427,0.426v-0.64h-0.426l0.639-1.064l-0.639,0.212l-0.213-0.425l0.852-1.065l-1.703,0.852l-0.214,0.639l-0.638-0.425l1.703-1.917l-2.344,1.277l-0.213-0.425l-1.062,0.213l-1.066,0.639l0.854,0.426l-1.277-0.213l0.425,0.639l-2.556-1.065l-0.639-1.49l-0.852,1.065l-2.557-0.64l-0.641,1.278l0.428-1.065l-0.428-0.852l-0.424,0.213l-0.214-0.639l-0.853,0.639l-0.639-0.639l0.639-0.64l-0.852-0.212l-1.917,1.064l0.213-0.852l-0.427,0.426l-0.426-0.639l-0.638,0.426l0.212-0.639l-1.278,0.213l-1.49-2.556h-0.426l0.212,0.64l-0.425-0.213l-1.065,0.852l-1.491-2.13l-0.426,0.639l-0.213-1.278l-0.638,0.426l0.212,0.639l-1.065-1.065l0.213,1.278l0.426,0.212l-0.426,0.64l-0.426-1.491l-0.851-0.639v0.852l-1.066-0.213l0.213,0.426l-0.425,0.425l1.065-0.212l0.213,0.426l-0.213,0.213l0.852,0.213l0.212,0.639l0.853-0.426l1.917-0.213v0.425h0.426l-0.426,0.213l0.638,0.213h-0.426l0.426,0.213l-0.426,0.212h1.278l-1.065,1.065l0.852,0.639L138.6,13.59l-0.213,1.278l1.065,0.425l-1.491-0.425l-0.639,0.425l-0.213,1.278l-0.426-1.065l-0.638,0.426l-0.213-0.64l-1.065,1.065l-1.065-0.639l-2.981,0.425l-0.853-0.639l-0.213-1.065l-0.426,1.278l-1.704-0.427l0.426,1.492l-1.065-0.213l-0.426,0.425l1.065,0.852l-0.852-0.212l0.399,0.665l-0.399,0.399l-0.426-0.852v0.213l-0.426,0.213l0.213-1.065l-1.278-0.213l0.213,1.492h-0.426l1.277,0.639h-0.639v0.425l-1.065-1.064l-0.639,0.212l0.213,0.426l-0.425-0.426v1.491l-1.491,0.425v1.491l1.278,1.491l-0.426-0.213l-1.704,1.278l-0.639-0.213v-0.426l-0.639,0.426l-0.213,1.917l0.426-0.213l-0.852,0.639l0.213,1.065l-0.639,0.427l-0.426-0.427l0.426,1.065l-0.426-0.427l-0.426,0.852l-0.213-0.639l-0.852,1.49v0.64l0.639,0.639l0.426-0.426v0.64l0.852-0.213l0.213,0.426l0.852-0.426l-0.213,0.426l-1.065,0.639h0.639v0.426h-0.212l0.142,0.284l0.163,0.081l0.547-0.365l-0.213,0.639l1.491-0.852v0.639h-0.852l0.426,0.425l-0.639-0.212h-0.426h-0.852l0.426,0.852l-0.426-0.426l0.213,1.49l-0.639,0.213l-0.639-1.491l-0.639-0.213l0.213,1.065l-0.852-1.278l0.213,0.426h-0.639l0.426,0.639l-0.426,0.426l0.639,0.212h-0.639l-0.213,0.852v-0.639l-0.426,0.852l0.426-1.065l-0.213-0.213l0.213-0.639l-0.426-0.212v0.212l0.212,0.639l-0.426-0.426v-0.852l-0.426,0.639v-0.852h-0.713v8.557l0.716,0.18l-0.213,0.639l-0.503,0.168v0.586l0.077,0.31l-0.077,0.077v73.016h59.58V44.169L172.666,43.192z M125.184,12.525l2.129,1.278l2.13-1.278l0.639-1.064l0.64,0.212v-0.852l0.638-0.212l-0.851-1.278h-0.853l-0.212-0.639l-0.639,0.852l0.426,1.065l-0.638-1.491l-0.213,0.639l-0.426-0.212v1.277l-0.213-1.065h-0.213l-0.639-0.212l-1.278,0.426l0.852,1.278l-0.852-0.426l-0.213-1.065l-0.426,0.426l0.213,0.213h-0.213v-0.213V9.332l-1.491-0.852l0.525,2.797l-0.737,0.185l0.425-0.426l-0.425,0.213l0.425-0.852l-0.425-0.852l-1.491,1.065l0.852,0.426h-0.426v0.852l0.212,0.142v0.497l-0.212-0.639l-0.213,0.426l-0.639-0.426v0.852h-0.426l4.046,0.426L125.184,12.525z M123.906,12.525l0.157-0.939l0.056,0.3l1.064,0.638l-1.064-0.425L123.906,12.525z").attr(attr);
//            aus.sa = R.path("M113.819,117.351v38.96l0.502-0.251l6.602-0.641l1.064-0.212l4.26,0.426l2.343-1.276l4.046,2.129l2.981,2.342h1.917l-0.213-0.426l0.426-0.213h1.491l2.555,2.131h2.556l-0.64-0.64l0.426-0.214l0.427,0.426l0.426-0.639l2.341,2.343l-0.638,0.214v1.063l1.276-0.64l0.853,0.213l0.853,1.703l-0.64,0.854l0.213-0.639h-1.062l0.424,0.852l-0.424,0.641l0.851,0.211l-0.427,0.641l1.278,1.277l-0.426-1.277l0.64,1.277l0.639-0.426l1.277,0.853l-0.64-0.64l1.063,0.213l-0.424,0.427l1.276,1.702v1.277l2.344,2.131l1.277,5.75l0.213-0.64l0.213,0.64l0.425,0.213l-0.851,0.213l-0.427-0.853l0.213-0.213l-0.854-0.214v-0.425l-0.638,1.276l0.851-0.426l2.558,3.194l1.063-0.64l1.065,1.278l0.425-2.344l-1.49,0.64l0.641-0.427l0.213-1.703l0.851-0.427l0.427,0.427v-1.489l3.194-3.621l2.556-1.277l-0.64,0.213l0.427-0.852l0.428,0.424l1.49-0.424l1.489-4.261l1.277-1.491l0.853,0.428v-4.26l1.064,2.342l0.213,1.918l0.64,0.639l-1.704,1.49l1.277,2.343l-2.557,2.556l-0.637,1.918l-0.428,0.213l0.428,1.276l-0.641,1.278l0.426-0.213l0.215,1.277l-0.428,2.556l-0.427,0.426l-2.554-0.64l-1.066,3.194l2.13-0.214l1.704-1.275l1.49,0.638l0.853-0.425l-0.426-0.428l1.063-2.342l0.213-2.13l1.279-2.981l3.193,5.537l-0.428,0.213l-0.213-0.639l-0.213,4.686l-2.342,2.129l2.981,0.214l1.276-1.064l1.065,0.214l3.188,2.549l-3.188-2.336l2.769,2.129l1.812,2.353l-1.383-2.138l1.062,0.851l1.277,2.769l-0.564-0.873l1.631,4.281l-0.213,1.064l-1.063,1.064l0.851,1.276l-0.426,0.64l1.703,2.342l2.477,3.302l0.08,0.319l1.277,1.064l2.547,0.182v-90.426H113.819z M172.887,189.499l0.213-1.065h-1.492l0.428-1.277l-7.028,1.49l-0.426,1.064l1.278,1.491l1.918-0.213l1.49-0.427l1.703,0.853l0.852-0.64l0.213-0.853h2.77l0.424-0.851l-1.49-0.639L172.887,189.499z").attr(attr);
//            aus.qld = R.path("M278.516,129.443l-0.851-0.852l-0.606-2.546l-0.459-1.926l-0.639-0.852l-0.641,0.425l0.428-0.639l-0.854-0.426l0.641-0.639l-0.641-0.639l0.854-0.426l-0.641-0.639v-0.639l1.064,1.277l-0.638-1.917l-0.214,0.64l0.427-1.704l-0.42-0.279l0.207-1.851h-0.427l0.853-3.407h-0.426l-0.427-0.852l-0.428,1.277l0.215-1.064h-0.639l0.424-0.426l-0.851-0.639v-1.278l0.638-0.639l-1.277,0.426l1.066-0.426l-0.214-1.065l-2.343-0.639l0.64-0.426l-1.278-1.491l0.213-0.852l-0.639-0.426l-0.213,0.426l0.213-0.639l-1.277-0.64v0.213l-1.064-1.065l-1.064-2.769l-0.853-0.212l0.213-0.852l-0.426,0.639V98.35l-0.64-0.213l0.426,0.852l-0.852-0.426v0.426l-0.853-0.426v0.426l-2.769-3.833l-0.64,0.852l-0.851-1.277l0.424-0.213l-0.639-1.278l0.426-0.425l-0.639-2.342h0.428l0.211-1.705l-0.426-1.064v0.639l-0.426-0.213l-0.427-0.852l0.64,0.213l0.213-0.213l-0.64-1.065v0.852l-0.213-0.852l-0.426-0.212l-0.212,0.639l0.638,1.065l-0.426-0.213l0.426,1.065l-2.979-2.13l-1.066-1.704l-0.211,0.426l-0.641,1.064l0.641,1.491l0.425,0.852l-0.425-0.426l-1.279-1.49l-1.277,1.49l0.641-1.49h-0.854l0.426-0.213l-0.213-0.425l-0.851,0.212l0.851-0.426l-1.276-2.981l0.427-2.342l-0.214,0.425l-0.853-0.852l-0.213,0.427v-1.917l-0.852,0.425l0.213-0.639h-0.213l0.424-1.065l-0.851-0.852l-0.64,0.426l0.213-0.852h-1.49l-0.213-0.639l0.426-0.213l-1.062-0.639l0.211-0.426l-0.639-0.639l0.639-0.213l-0.425-0.426l0.638,0.213l0.213-0.426l1.065,0.852l-1.278-2.13l-0.424,0.213v-0.639h-0.641l-0.213-0.852h-0.854v0.852l-0.639-0.213l-0.854-0.852l0.215-0.213v-0.213l-1.064-0.639l-1.277,0.213l-0.426-1.492h-0.64l0.426,1.065l-0.853-0.213l-1.277-1.277l0.854,0.425l-1.279-2.768v0.852l-1.916,0.212l-0.852-1.916l-0.213,0.852h-0.641l-0.639-0.852l-2.129-0.853l-1.277-1.49l0.425-2.342h-0.853l-1.489-2.556l1.063-3.62h-0.427v-1.704l-1.276-2.343l0.426-1.064l-1.065,0.212l-2.554-3.407v-1.065h0.426v-1.49l-0.854-1.065l-0.213-2.342l-0.852-0.852l1.064-1.278v-0.213l-0.641,0.213l-0.211-1.065l0.852-1.064h-0.428l-0.424-0.852l-1.279-0.213l-0.852-1.278l-1.49-0.425l-1.064-2.769l-1.277,1.065l-0.854-0.426l-0.424,1.278l-1.279,0.639l-1.063-0.852l-0.64-2.769l-1.064-1.704l0.428-2.13l-0.641-2.129l0.213-1.917l-1.277,0.426l0.639-1.916l-1.277-0.852v-0.852l-1.062-0.213l-0.215-1.491l1.277-1.064l-1.062-0.427l-0.854,0.213l-0.638-0.639V9.97l-0.854-2.556h-0.64l-0.424-0.852v0.426l-0.854,0.425l1.066-1.704l-0.213-0.213l-0.214-0.212l-0.853,0.212l-0.639,1.278L202.055,7.2l0.215,1.065l-0.64,2.769h-0.213l-0.213,1.49h0.638l-0.852,0.213l-0.213,1.278l0.427,0.639l0.426-0.427l-0.426,0.64l-0.427-0.213l-0.213,0.852l-0.213-1.49l-1.064,1.704l0.64,0.213h-0.64l-0.854,2.129h0.641l-0.213-0.852l0.639,0.213l-0.426,0.213l0.853,0.639h1.064l-1.064,0.426l1.064,0.426l-0.427,0.213l0.213,1.064l-0.852-1.491l-0.427,1.065l-1.065,0.852l0.641,1.917l-0.213,0.639l0.426-0.213l-0.213,0.213l0.426,0.213h-0.854l-1.062,3.194l1.062,2.343l-0.638,2.129l0.853,3.833l-1.277,3.407l-0.641,2.555l0.427,1.065l-1.49,4.259l-1.703,2.13l-0.427,2.769l-1.917,1.491l-3.62,0.852l-0.427-0.213l-1.277-0.852l-1.489-0.213l-0.854-1.064l-1.49-0.639l-0.427-1.916l-0.851-0.852l-2.769-0.853l-3.409-0.425l-1.822-2.43v73.182h20.771v16.982l0.002-0.043l53.113,0.052l0.869-0.449l-0.053-0.543l0.722-0.072l0.073-1.102l1.104,0.073l0.796-1.173l0.541-0.053l1.321,0.416l1.3,0.237l1.41-0.504l0.903-0.089l0.235,0.524l0.722-0.071l0.761,0.29l0.577,0.309l1.643,0.021l1.121,0.254l0.631,0.85l0.415,0.507l0.435,0.688l0.069,0.723l0.47,1.049l0.688-0.433l0.309-0.578l0.651-0.795l0.651-0.794l0.433,0.688l0.757,0.291l1.049-0.47l0.129-0.559l0.651-0.795l-0.722,0.073l-0.288-1.068l0.108-0.741l0.904-0.09l1.083-0.106l0.67-0.614l0.851-0.631l0.938,0.272l0.813,0.833l1.049-0.468l0.939,0.271l0.541-0.053l0.526-0.234l0.506-0.415l0.92,0.092l0.975-0.091l-0.183,1.97L278.516,129.443zM274.258,109.85l0.852,1.491l1.916-5.751l-0.426-0.852v-1.49l-1.063,0.852l0.85,1.278l-1.704,1.917h0.428l-0.428,1.49L274.258,109.85z").attr(attr);
//            aus.tas = R.path("M214.201,220.805l-0.639,1.277l0.213,2.555v0.853l0.426,0.426l1.279-1.278l-0.213-2.98L214.201,220.805z M243.377,238.691l-0.425-1.276l0.638-1.704l-0.638-0.638l0.638-1.705l-1.703-2.129l-1.066-0.214l-0.424,1.279l-1.278-0.64l-1.491,1.703l-1.064-0.64l-1.064,0.854l-0.852-0.426l-1.49,0.638l1.064,1.065l-0.215,0.426l-1.277-1.491l-1.062,0.853l0.21,0.853l-0.424-1.065l-1.916,0.426l-4.899-2.982h-1.277l-0.428-1.064v0.853l-0.85-0.213v0.425l-2.982-1.49l0.215,1.703l-0.641,1.278l0.852,3.621l1.492,2.13l-0.428,0.425l2.131,2.769v1.916l0.639-0.639l1.064,1.917h0.426l-0.426,1.491l-0.213-1.277l-1.917-1.705l0.638,3.834l0.641,0.213l1.064,3.194l1.065,0.427l1.063,2.342h0.641l-0.428-0.213l0.428-0.853l0.426,1.279h1.704l-0.214,0.426l-1.49-0.426v0.638l-0.426-0.212l0.638,1.704l1.492-0.641l2.34,0.428l-0.21-0.639l0.85,1.489h1.277l0.854-1.278l-0.641-0.639l0.854,0.215l0.214-0.853l-0.64-0.213l0.853-0.427l-0.853-1.063l0.213-0.427v0.638l0.427,0.427l0.213-0.638v0.638l0.851,0.426l0.213-2.343l0.641,0.214v-1.277l-1.067-1.704l1.491,1.917l0.426-0.213l-0.426,1.277l0.854-0.64l-0.215-1.063l0.641-0.213l-1.066-0.64l1.066,0.212l0.425,1.066l0.853-0.213l1.064-1.918l-0.639-1.064l0.852-0.426l0.212-1.703l-0.64,0.212l1.066-2.129h0.639l-0.639-0.213l0.852-1.278l-0.426,1.278l1.064,0.425v1.279l0.428-0.641l-0.64-1.49L243.377,238.691z M241.248,228.257h2.129l0.213,0.64l0.852-0.64l-0.852-1.065L241.248,228.257z M240.396,224.637l0.852,0.853l0.639,1.491l1.703-0.641l-0.425-1.064l-0.427,0.427l0.427-1.065l0.212-0.426h-0.852l-1.705-2.129l-1.276,1.491l0.853,0.212V224.637z").attr(attr);







            var current = null;
            for (var state in aus) {
                aus[state].color = Raphael.getColor();
                (function (st, state) {
                    st[0].style.cursor = "pointer";
                    st[0].onmouseover = function () {
                        current && aus[current].animate({fill: "#333", stroke: "#666"}, 500) && (document.getElementById(current).style.display = "");
                        st.animate({fill: st.color, stroke: "#ccc"}, 500);
                        st.toFront();
                        R.safari();
                        document.getElementById(state).style.display = "block";
                        current = state;
                    };
                    st[0].onmouseout = function () {
                        st.animate({fill: "#333", stroke: "#666"}, 500);
                        st.toFront();
                        R.safari();
                    };
                    if (state == "nsw") {
                        st[0].onmouseover();
                    }
                })(aus[state], state);
            }
        };
      
    }
  };

  Drupal.behaviors.generalItemHover = {
    attach: function(context) {

      // Animate text on hover for Items.
      // TO DO.

    }
  };

})(jQuery);
