;(function () {
  function s(attr_name) {
    return document.querySelector(attr_name)
  }

  function sa(attr_name) {
    return document.querySelectorAll(attr_name)
  }

  function load_bar() {
    var overlay = s('#overlay')
    var prog = s('#progress')
    var stat = s('#prog_status')
    var videos = sa('video')
    var images = document.images
    var c = 0
    var il = images.length
    var vl = videos.length

    if (il + vl == 0) return doneLoading()

    function imgLoaded() {
      c += 1
      var percent = (100 / (il + vl)) * c
      prog.style.width = percent - 40 + '%'
      stat.innerHTML = 'Loading ' + percent + '%'
      if (c === il + vl) return doneLoading()
    }

    function doneLoading() {
      overlay.style.opacity = 0
      for (var i = 0; i < il; i++) {
        var tImg = new Image()
        tImg.onload = function () {}
        tImg.onerror = function () {}
        tImg.src = images[i].src
      }
      for (var i = 0; i < vl; i++) {
        var tv = videos[i]
        tv.oncanplaythrough = function () {}
      }
      setTimeout(function () {
        overlay.style.display = 'none'
        document.removeEventListener('DOMContentLoaded', load_bar, false)
      }, 800)
    }

    for (var i = 0; i < il; i++) {
      var tImg = new Image()
      tImg.onload = imgLoaded
      tImg.onerror = imgLoaded
      tImg.src = images[i].src
    }

    for (var i = 0; i < vl; i++) {
      var tv = videos[i]
      tv.oncanplaythrough = imgLoaded
    }
  }

  document.addEventListener('DOMContentLoaded', load_bar, false)
})()
