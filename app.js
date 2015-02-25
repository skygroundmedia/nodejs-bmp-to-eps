
var sys = require('sys')
, exec  = require('child_process').exec
, async = require('async')
, util  = require('util')

//!!!Notice that I am removing the file extension
var images = [
"albeniz", "Albinoni", "AScarlatti", "Barber", "Barrios", 
    "Bartok", "Beethoven", "Berlioz", "Bizet", "Borodin", 
    "Brahms", "Bruch", "Bruckner", "Busoni", "Chopin", 
    "Copland", "Corelli", "Debussy", "DScarlatti", "Dukas", 
    "Dvorak", "Faure", "Field", "Gershwin", "Granados", "Grieg", 
    "Handel", "Haydn", "Janáček", "JCBach", "JohnWilliams", 
    "jsbach", "Khachaturian", "Kodaly", "Korngold", "Lauridsen", 
    "Liszt", "Mahler", "Mendelssohn", "Mozart", "Paganini", "Poulenc", 
    "Prokofiev", "Puccini", "Purcell", "Pärt", "Rachmaninoff", 
    "Ravel", "Rimsky-Korsakov", "Rossini", "SaintSaens", 
    "Satie", "Schubert", "Schumann", "Scriabin", "Shostakovich", 
    "Sibelius", "Smetana", "Strauss-II", "stravinsky", "Tchaikovsky", 
    "Telemann", "Vaughan-Williams", "Verdi", "Vivaldi", "VonSuppe", 
    "Wagner", "Whitacre"
]

async.mapSeries(
    images,
    function(image, callback){
        //Manual 
        //http://potrace.sourceforge.net/potrace.1.html
        var params = {
            input:      "./bmp/" + image + ".bmp",
            output:     "-o " + "./eps/" + image + ".eps",
            resolution: "--resolution 150",
            opaque:     "--opaque",
            alphamax:   "--alphamax 0.2",
            curve:      "--opttolerance 0.5",
            progress:   "--progress"
        }
        //Simple Example
        //exec("potrace " + composer + ".bmp -o " + image + ".eps " , callback);
        exec( 
            util.format( "potrace " + "%s %s %s %s %s %s %s", 
            params.input, 
            params.output,
            params.resolution,
            params.opaque,
            params.alphamax,
            params.curve,
            params.progress
        )
        , callback)
    },
    function(err, results) {
        if(err) console.error(err.message)
        else console.log(results)
    }
)