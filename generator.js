let isSerie = document.getElementById('serie');
let isMovie = document.getElementById('movie');

let types = document.querySelectorAll('input[type=radio][name=type]');

types.forEach(type => {
    type.addEventListener('change', () =>{
        if (type.value == "movie") {
            document.getElementById('season-selector').style.display = "none";
            document.getElementById('second-code').style.display = "none";
        } else if (type.value == "serie"){
            document.getElementById('second-code').style.display = "block";
            document.getElementById('season-selector').style.display = "block";
        }
    })
})


function convertMinutes(minutess){
    let hours = Math.floor(minutess / 60) ,
    minutes = Math.floor(minutess % 60),
    total = '';

    if (minutess < 60){
        total = `${minutes}m`
        return total
    } else if (minutess > 60){
      total = `${hours}h ${minutes}m`
      return total
    } else if (minutess = 60){
        total = `${hours}h`
        return total
    }
}


function generar() {
let serieKey = document.getElementById('numero').value;
let languaje = "es-MX"
let seasonNumber = document.getElementById('numeroTemporada').value;

const cargarPeliculas = async() => {

if (isSerie.checked) {
try {

const respuesta = await fetch(` https://api.themoviedb.org/3/tv/${serieKey}?api_key=1f098c7d68777348425d008055475b88&language=${languaje}`);
const respuesta3 = await fetch(`https://api.themoviedb.org/3/tv/${serieKey}/season/${seasonNumber}?api_key=1f098c7d68777348425d008055475b88&language=${languaje}`);

if (respuesta.status === 200) {
const datos = await respuesta.json();
const datosTemporada = await respuesta3.json();
console.log(datosTemporada);

let template = document.getElementById('html-final');

// HTML ENTRADAS DE SERIES (SIN TEMPORADAS)
let justHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<style>
.tabs .tab a:focus,.tabs .tab a:focus.active{background:none}.col img{width:100%;border-radius:5px;margin-bottom:5px}.padDrew{padding:10px 0;margin:50px 0}.sidenav li{transition:background ease .2s}.row .col{padding:0 5px}.each-category{padding:0 5px}.sidenav li>a{margin:0 10px;background:#212121;color:rgb(222,215,215);border-radius:3px;display:flex;align-items:center;gap:10px;padding:0 10px}#nav-mobile a.active-sidenav,.sidenav li>a.active-sidenav{background:rgba(60,128,85,.2);color:#20bf6b}#nav-mobile a{font-weight:600}.buscador{float:right;margin:0 18px;z-index:1}@media screen and (min-width:991px){nav .brand-logo{margin:0 10px}}@media only screen and (max-width:992px){nav .brand-logo{left:120px}}.tab a,.sidenav li a{font-weight:600}img.circle{border-radius:100%;overflow:hidden}.banner{display:flex;gap:10px;padding:10px;background:rgb(20,20,20)}.sidenav li{line-height:0}.bg-fondo{display:flex;align-items:flex-end;padding:10px;padding-top:150px;position:relative;background:rgba(0,0,0,.7)}.bg-fondo h4{font-weight:500}.bg-fondo::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:url(https://image.tmdb.org/t/p/w500/${datos.backdrop_path}) no-repeat center center / cover;z-index:-1;opacity:.8}
</style>
<title>Serie Darkflix</title>
</head>

<body class="grey darken-4">

<div class="fixed-action-btn">
<a href="#" class="btn-floating btn-large green darken-2">
    <i class="large material-icons">format_list_numbered</i>
</a>
</div>

<div class="row bg-fondo">
<div class="col s3 m4 l2">
<img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}" alt="">
</div>
<div class="col s9 m8 l10">
<h4 class="white-text">${datos.name} (${datos.first_air_date.slice(0,4)})</h4>
</div>
</div>

<div class="container white-text">
<h5>SINOPSIS</h5>
<p class="flow-text grey-text">
${datos.overview}
</p>

</div>




<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>
 M.AutoInit();
</script>

</body>
</html>`;
                    

let episodeList = '';
    
datosTemporada.episodes.forEach(episode => {

episodeList += `
<a href="#!" class="collection-item grey darken-4 white-text flow-text waves-effect waves-light">T${episode.season_number} - EP${episode.episode_number}. ${episode.name}</a>

`
})

let seasonsOption = '';
    
datos.seasons.forEach(season => {
if(season.name != ("Especiales" || "especiales" )){
seasonsOption += `<li class="tab"><a href="#temporada${season.season_number}">Temporada ${season.season_number}</a></li>
`
}
})

let seasonOnly = `
<div id="temporada${seasonNumber}">

<div class="collection">
${episodeList}
</div>
        
</div>

`;
let temposTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<style>
.tabs .tab a:focus,.tabs .tab a:focus.active{background:none}.col img{width:100%;border-radius:5px;margin-bottom:5px}.padDrew{padding:10px 0;margin:50px 0}.sidenav li{transition:background ease .2s}.row .col{padding:0 5px}.each-category{padding:0 5px}.sidenav li>a{margin:0 10px;background:#212121;color:rgb(222,215,215);border-radius:3px;display:flex;align-items:center;gap:10px;padding:0 10px}#nav-mobile a.active-sidenav,.sidenav li>a.active-sidenav{background:rgba(60,128,85,.2);color:#20bf6b}#nav-mobile a{font-weight:600}.buscador{float:right;margin:0 18px;z-index:1}@media screen and (min-width:991px){nav .brand-logo{margin:0 10px}}@media only screen and (max-width:992px){nav .brand-logo{left:150px}}.tab a,.sidenav li a{font-weight:600}img.circle{border-radius:100%;overflow:hidden}.banner{display:flex;gap:10px;padding:10px;background:rgb(20,20,20)}.sidenav li{line-height:0}.each-category{padding-top:55px}.collection{border:none;border-radius:0;margin:0}.collection .collection-item{border-bottom:2px solid #111}.modal{margin:133px auto}
</style>
<title>Tempos - FlixThemes</title>
</head>
<body class="grey darken-4">
<div class="navbar-fixed">
<nav class="nav-extended black">
<div class="nav-wrapper">
<a href="#" class="brand-logo">${datos.name}</a>
<a href="#!" class="sidenav-trigger"><i class="material-icons">arrow_back</i></a>
</div>

<div class="nav-content">
<ul class="tabs tabs-transparent">
${seasonsOption}
</ul>
</div>
</nav>
</div>


<div class="each-category" id="each-category">

${seasonOnly}
    
</div>


</div>


<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>
M.AutoInit();
</script>

</body>
</html>
`;


const btnCopiar = document.getElementById('copiar');
template.innerText = justHtml;

let templateHTML = template.innerText;

let seasonFrame = document.getElementById('html-final-2');
let copiarTempos = document.getElementById('copiar2');

if (seasonNumber == 1){
    seasonFrame.innerText = temposTemplate;
} else if (seasonNumber > 1){
   seasonFrame.innerText = seasonOnly;
}


let genSeasonsCount;
    
if (datos.number_of_seasons == 1){
    genSeasonsCount = " Temporada"
} else if (datos.number_of_seasons > 1){
    genSeasonsCount = " Temporadas"
}


btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(templateHTML);
})

copiarTempos.addEventListener('click', () => {
    navigator.clipboard.writeText(seasonFrame.innerText);
})


let genPoster = document.getElementById('info-poster');
let genTitle = document.getElementById('info-title');
let genSeasons = document.getElementById('info-seasons');
let genYear = document.getElementById('info-year');

genPoster.setAttribute('src', `https://image.tmdb.org/t/p/w500/${datos.poster_path}`)
genTitle.innerText = datos.name;
genSeasons.innerText = datos.number_of_seasons + genSeasonsCount;
genYear.innerText = datos.first_air_date.slice(0,4);



} else if (respuesta.status === 401) {
console.log('Wrong key');
} else if (respuesta.status === 404) {
console.log('No existe');
}
    
} catch (error) {
console.log(error);
}
} 


else if(isMovie.checked){
try {

const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${serieKey}?api_key=1f098c7d68777348425d008055475b88&language=${languaje}`);

if (respuesta.status === 200) {
const datos = await respuesta.json();

let template = document.getElementById('html-final');

let justHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<style>.tabs .tab a:focus,.tabs .tab a:focus.active{background:none}.col img{width:100%;border-radius:5px;margin-bottom:5px}.padDrew{padding:10px 0;margin:50px 0}.sidenav li{transition:background ease .2s}.row .col{padding:0 5px}.each-category{padding:0 5px}.sidenav li>a{margin:0 10px;background:#212121;color:rgb(222,215,215);border-radius:3px;display:flex;align-items:center;gap:10px;padding:0 10px}#nav-mobile a.active-sidenav,.sidenav li>a.active-sidenav{background:rgba(60,128,85,.2);color:#20bf6b}#nav-mobile a{font-weight:600}.buscador{float:right;margin:0 18px;z-index:1}@media screen and (min-width:991px){nav .brand-logo{margin:0 10px}}@media only screen and (max-width:992px){nav .brand-logo{left:120px}}.tab a,.sidenav li a{font-weight:600}img.circle{border-radius:100%;overflow:hidden}.banner{display:flex;gap:10px;padding:10px;background:rgb(20,20,20)}.sidenav li{line-height:0}.bg-fondo{display:flex;align-items:flex-end;padding:10px;padding-top:150px;position:relative;background:rgba(0,0,0,.7)}.bg-fondo h4{font-weight:500}.bg-fondo::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:url(https://image.tmdb.org/t/p/w500/${datos.backdrop_path}) no-repeat center center / cover;z-index:-1;opacity:.8}.collection{border:none;border-radius:0;margin:0}.collection .collection-item{border-bottom:2px solid rgba(17,17,17,.4)}.modal{margin:50px auto}</style>
<title>Pelicula - FlixThemes</title>
</head>
<body class="grey darken-4">

<div class="fixed-action-btn">
<a href="#modal1" class="btn-floating btn-large green darken-2 modal-trigger">
<i class="large material-icons">play_arrow</i>
</a>
</div>

<div class="row bg-fondo">
<div class="col s3 m4 l2">
<img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}" alt="poster">
</div>
<div class="col s9 m8 l10">
<h4 class="white-text">${datos.title}</h4>
</div>
</div>

<div class="container white-text">

<h5>SINOPSIS</h5>
<p class="flow-text grey-text">${datos.overview}</p>

</div>


<div id="modal1" class="modal grey darken-4">
<div class="modal-content white-text">
<h5>Selecciona</h5>
<div class="collection">

<a href="#!" class="collection-item grey darken-4 white-text flow-text waves-effect waves-light">Español Latino</a>
<a href="#!" class="collection-item grey darken-4 white-text flow-text waves-effect waves-light">Español de España</a>
<a href="#!" class="collection-item grey darken-4 white-text flow-text waves-effect waves-light">Subtitulado</a>

</div>
</div>
<div class="modal-footer grey darken-4">
<a href="#!" class="modal-close waves-effect waves-green btn-flat white-text">Cerrar</a>
</div>
</div>

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>
 M.AutoInit();
</script>

</body>
</html>
`;                  
                    template.innerText = justHtml;
                    let templateHTML = template.innerText;

                    const btnCopiar = document.getElementById('copiar');
                    
                    btnCopiar.addEventListener('click', () => {
                        navigator.clipboard.writeText(templateHTML);
                    })
    
    
                    let genPoster = document.getElementById('info-poster');
                    let genTitle = document.getElementById('info-title');
                    let genSeasons = document.getElementById('info-seasons');
                    let genYear = document.getElementById('info-year');
    
                    genPoster.setAttribute('src', `https://image.tmdb.org/t/p/w500/${datos.poster_path}`)
                    genTitle.innerText = datos.title;
                    genSeasons.innerText = "";
                    genYear.innerText = datos.release_date.slice(0,4);
    
    
    
                } else if (respuesta.status === 401) {
                    console.log('Wrong key');
                } else if (respuesta.status === 404) {
                    console.log('No existe');
                }
    
            } catch (error) {
                console.log(error);
            }           
        }

    }

    cargarPeliculas();
}

generar();



