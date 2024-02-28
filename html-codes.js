let x = document.getElementById("snackbar");

let pelisBtn  = document.getElementById('peliculas'),
    pelisCode = `
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
.tabs .tab a:focus,.tabs .tab a:focus.active{background:none}.col img{aspect-ratio: 2 / 3;width:100%;border-radius:5px;margin-bottom:5px}.padDrew{padding:10px 0;margin:50px 0}.sidenav li{transition:background ease .2s}.row .col{padding:0 5px}.each-category{padding:0 5px}.sidenav li>a{margin:0 10px;background:#212121;color:rgb(222,215,215);border-radius:3px;display:flex;align-items:center;gap:10px;padding:0 10px}#nav-mobile a.active-sidenav,.sidenav li>a.active-sidenav{background:rgba(60,128,85,.2);color:#20bf6b}#nav-mobile a{font-weight:600}.buscador{float:right;margin:0 18px;z-index:1}@media screen and (min-width:991px){nav .brand-logo{margin:0 10px}}@media only screen and (max-width:992px){nav .brand-logo{left:110px}}.tab a,.sidenav li a{font-weight:600}img.circle{border-radius:100%;overflow:hidden}.banner{display:flex;gap:10px;padding:10px;background:rgb(20,20,20)}.sidenav li{line-height:0}*{list-style-type:none}
</style>
<title>Pelis Home - FlixThemes</title>
</head>
<body class="grey darken-4">
<div class="navbar-fixed">
<nav class="nav-extended black">
<div class="nav-wrapper">
<a href="#" class="brand-logo">Peliculas</a>
<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
<ul id="nav-mobile" class="right hide-on-med-and-down">
<li><a href="#!" class="active-sidenav">Películas</a></li>
<li><a href="go:seriehome">Series</a></li>
<li><a href="#!">Novelas</a></li>
</ul>
<a href="go:buscar" class="left-align buscador"><i class="material-icons">search</i></a>
</div>

<div class="nav-content">
<ul class="tabs tabs-transparent">
<li class="tab"><a href="#TAG1" class="active">TAG1</a></li>
<li class="tab"><a href="#TAG2">TAG2</a></li>
</ul>
</div>
</nav>
</div>

<ul class="sidenav grey darken-4" id="mobile-demo">
<li class="row banner">
<div class="col s4">
<img src="https://i.ibb.co/72qPbVD/darkflix-logo.png" alt="" class="responsive-img circle">
</div>
<div class="col s8">
<h4 class="white-text">Darkflix!</h4>
</div>
</li>
<li><a class="active-sidenav" href="#!"><span class="material-icons">movie </span> Películas</a></li>
<li><a class="" href="go:seriehome"><span class="material-icons"> live_tv </span> Series</a></li>
<li><a class="" href="#!"><span class="material-icons"> theaters </span> Novelas</a></li>
</ul>

<div class="each-category">

<!--INICIO DE SECCION TAG1-->
<div id="TAG1" class="row padDrew">

<li><a href="go:peli" class="col s4 m3 l2">
<img src="https://www.themoviedb.org/t/p/w220_and_h330_face/gPwXtxnEgppVaMsrpPNajw1K7LH.jpg" alt="poster">
</a></li>

</div><!--FIN DE SECCION TAG1-->



</div>




<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>
M.AutoInit();
</script>

</body>
</html>
`;

let seriesBtn  = document.getElementById('series'),
    seriesCode = `
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
.tabs .tab a:focus,.tabs .tab a:focus.active{background:none}.col img{aspect-ratio: 2 / 3;width:100%;border-radius:5px;margin-bottom:5px}.padDrew{padding:10px 0;margin:50px 0}.sidenav li{transition:background ease .2s}.row .col{padding:0 5px}.each-category{padding:0 5px}.sidenav li>a{margin:0 10px;background:#212121;color:rgb(222,215,215);border-radius:3px;display:flex;align-items:center;gap:10px;padding:0 10px}#nav-mobile a.active-sidenav,.sidenav li>a.active-sidenav{background:rgba(60,128,85,.2);color:#20bf6b}#nav-mobile a{font-weight:600}.buscador{float:right;margin:0 18px;z-index:1}@media screen and (min-width:991px){nav .brand-logo{margin:0 10px}}@media only screen and (max-width:992px){nav .brand-logo{left:110px}}.tab a,.sidenav li a{font-weight:600}img.circle{border-radius:100%;overflow:hidden}.banner{display:flex;gap:10px;padding:10px;background:rgb(20,20,20)}.sidenav li{line-height:0}*{list-style-type:none}
</style>
<title>Series Home - FlixThemes</title>
</head>
<body class="grey darken-4">
<div class="navbar-fixed">
<nav class="nav-extended black">
<div class="nav-wrapper">
<a href="#" class="brand-logo">Series</a>
<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
<ul id="nav-mobile" class="right hide-on-med-and-down">
<li><a href="go:pelishome" >Películas</a></li>
<li><a href="#!" class="active-sidenav">Series</a></li>
<li><a href="#!">Novelas</a></li>
</ul>
<a href="go:buscar" class="left-align buscador"><i class="material-icons">search</i></a>
</div>

<div class="nav-content">
<ul class="tabs tabs-transparent">
<li class="tab"><a href="#TAG1" class="active">TAG1</a></li>
<li class="tab"><a href="#TAG2">TAG2</a></li>
</ul>
</div>
</nav>
</div>

<ul class="sidenav grey darken-4" id="mobile-demo">
<li class="row banner">
<div class="col s4">
<img src="https://i.ibb.co/72qPbVD/darkflix-logo.png" alt="" class="responsive-img circle">
</div>
<div class="col s8">
<h4 class="white-text">Darkflix!</h4>
</div>
</li>
<li><a class="" href="go:pelishome"><span class="material-icons">movie </span> Películas</a></li>
<li><a class="active-sidenav" href="#!"><span class="material-icons"> live_tv </span> Series</a></li>
<li><a class="" href="#!"><span class="material-icons"> theaters </span> Novelas</a></li>
</ul>

<div class="each-category">

<!--INICIO DE SECCION TAG1-->
<div id="TAG1" class="row padDrew">

<li><a href="go:darkSerie" class="col s4 m3 l2">
<img src="https://www.themoviedb.org/t/p/w220_and_h330_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg" alt="poster">
</a></li>

</div><!--FIN DE SECCION TAG1-->



</div>




<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>
M.AutoInit();
</script>

</body>
</html>
`

let busquedaBtn  = document.getElementById('busqueda'),
    busquedaCode = `
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
.tabs .tab a:focus,.tabs .tab a:focus.active{background:none}.col img{aspect-ratio: 2 / 3;width:100%;border-radius:5px;margin-bottom:5px}.padDrew{padding:10px 0;margin:0}.sidenav li{transition:background ease .2s}.row .col{padding:0 5px}.each-category{padding:0 5px}.sidenav li>a{margin:0 10px;background:#212121;color:rgb(222,215,215);border-radius:3px;display:flex;align-items:center;gap:10px;padding:0 10px}#nav-mobile a.active-sidenav,.sidenav li>a.active-sidenav{background:rgba(60,128,85,.2);color:#20bf6b}#nav-mobile a{font-weight:600}.buscador{float:right;margin:0 18px;z-index:1}@media screen and (min-width:991px){nav .brand-logo{margin:0 10px}}@media only screen and (max-width:992px){nav .brand-logo{left:150px}}.tab a,.sidenav li a{font-weight:600}img.circle{border-radius:100%;overflow:hidden}.banner{display:flex;gap:10px;padding:10px;background:rgb(20,20,20)}.sidenav li{line-height:0}input[type="text"]{padding:10px}input[type=text]:not(.browser-default):focus:not([readonly]){border-bottom:1px solid #20bf6b;box-shadow:0 1px 0 0 #20bf6b}.container-x{width:90%;margin:0 auto}#busquedas span{display:none}.animation{opacity:1;animation:fade 2s ease}@keyframes fade{0%{opacity:0}100%{opacity:1}}
</style>
<title>Buscador - FlixThemes</title>
</head>
<body class="grey darken-4">

<div class="navbar-fixed">
<nav>
<div class="nav-wrapper black">
<div class="container-x">
<div class="input-field col s6">
<input placeholder="Buscar..." type="text" class="white-text" id="buscar" onkeyup="myFunction()">
</div>
</div>
</div>
</nav>
</div>

<ul id="busquedas" class="row padDrew">

<li>
<a href="pelicula.html" class="col s4 m3 l2">
<img src="https://www.themoviedb.org/t/p/w220_and_h330_face/gPwXtxnEgppVaMsrpPNajw1K7LH.jpg" alt="poster">
<span>Dragon Ball Super Hero</span>
</a>
</li>


</ul>

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>
M.AutoInit();
</script>

<script>
function myFunction(){var input,filter,ul,li,a,i,txtValue;input=document.getElementById("buscar");filter=input.value.toUpperCase();ul=document.getElementById("busquedas");li=ul.getElementsByTagName("li");for(i=0;i<li.length;i++){a=li[i].getElementsByTagName("a")[0];txtValue=a.textContent||a.innerText;if(txtValue.toUpperCase().indexOf(filter)>-1){li[i].style.display="";li[i].classList.add('animation')}else{li[i].style.display="none";li[i].classList.remove('animation')}}}
let ulCards=document.getElementById('busquedas');ulCards.style.display="none"
let searcher=document.getElementById('buscar');searcher.addEventListener('keyup',()=>{if(searcher.value!=""){ulCards.style.display=""}else{ulCards.style.display="none"}})

</script>
</body>
</html>
`

function toast() {
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function copyCode(item, itemCode) {
    item.addEventListener('click', () => {
        navigator.clipboard.writeText(itemCode);
        toast();
    })
}

copyCode(pelisBtn, pelisCode);
copyCode(seriesBtn, seriesCode);
copyCode(busquedaBtn, busquedaCode);