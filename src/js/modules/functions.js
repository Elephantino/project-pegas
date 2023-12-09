export function isWebp() {

   function testWebP(callback) {
      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
     let className = support === true ? 'webp' : 'no-webp'; 
      document.documentElement.classList.add(className);
   });

   // testWebP(function (support) {
   //    if (support == true) {
   //       document.querySelector('html').classList.add('webp');
   //    } else {
   //       document.querySelector('html').classList.add('no-webp');
   //    }
   // });
   
}


export function gridAnimations(el) {
  el.addEventListener("click", () => {
    el.classList.toggle("gridAnimationAuto")
  })
}







export function findVideos() {       //  находим все видео
  let videos = document.querySelectorAll('.video-wrapper');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video-wrapper__link');
  let media = video.querySelector('.video-wrapper__media');
  let button = video.querySelector('.video-wrapper__button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();  // при клике после замены удаляется ссылка а вместе с ней и картинка (обложка) и все остальное 
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video-wrapper--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video-wrapper__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1'; // сразу после вставки начнется проигрывание  autoplay=1

  return 'https://www.youtube.com/embed/' + id + query;
}

// findVideos();