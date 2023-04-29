
import { Router } from "./router.js"

const router = new Router()
router.add('/', "./pages/home.html")
router.add('/download', "./pages/download.html")
router.add('/requirements', "./pages/requirements.html")
router.add('/wiki', "./pages/wiki.html")
router.add(404, './pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () =>  router.route()

const buttonMenu = document.querySelector('.buttonMenu');
const buttonHome = document.querySelector('.buttonHome');
const buttonDownload = document.querySelector('.buttonDownload');
const buttonRequirements = document.querySelector('.buttonRequirements');
const buttonWiki = document.querySelector('.buttonWiki');

if(buttonMenu){
  buttonMenu.addEventListener('click', function(){
    buttonMenuClick()
  })
  }
  buttonHome.addEventListener('click', function(){
    buttonHomeClick()
  })
  buttonDownload.addEventListener('click', function(){
    buttonDownloadClick()

  })
  buttonRequirements.addEventListener('click', function(){
    buttonRequirementsClick()
    
  })
  buttonWiki.addEventListener('click', function(){
    buttonWikiClick()
    
  })

  function buttonHomeClick(){
    buttonDownload.classList.remove('active');
    buttonRequirements.classList.remove('active');
    buttonWiki.classList.remove('active');
    buttonHome.classList.add('active');
  }
  function buttonDownloadClick(){
    buttonDownload.classList.add('active');
    buttonRequirements.classList.remove('active');
    buttonWiki.classList.remove('active');
    buttonHome.classList.remove('active');  
  }
  function buttonRequirementsClick(){
    buttonDownload.classList.remove('active');
    buttonRequirements.classList.add('active');
    buttonWiki.classList.remove('active');
    buttonHome.classList.remove('active');  
  }
  function buttonWikiClick(){
    buttonDownload.classList.remove('active');
    buttonRequirements.classList.remove('active');
    buttonWiki.classList.add('active');
    buttonHome.classList.remove('active');  
  }
  function buttonMenuClick(){
    buttonDownload.classList.add('active');
    buttonRequirements.classList.remove('active');
    buttonWiki.classList.remove('active');
    buttonHome.classList.remove('active'); 
  }

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}
