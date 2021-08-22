const $video = document.querySelector('#video')
    const $play = document.querySelector('#play')
    const $pause = document.querySelector('#pause')
    const $backward = document.querySelector('#backward')
    const $forward = document.querySelector('#forward')
    const $progress = document.querySelector('#progress')
    
    $play.addEventListener('click', handlePlay)
    $pause.addEventListener('click', handlePause)
    $backward.addEventListener('click', handleBackward)
    $forward.addEventListener('click', handleForward)
    $video.addEventListener('loadedmetadata', handleLoaded)
    $video.addEventListener('timeupdate', handleTimeUpdate)
    $progress.addEventListener('input', handleInput)

    function handlePlay() {
        $video.play()
        $play.hidden = true
        $pause.hidden = false
        console.log('Le Diste Click Al Botón De Play')
    }

    function handlePause() {
        $video.pause()
        $play.hidden = false
        $pause.hidden = true
        console.log('Le Diste Click Al Botón De Pause')
    }

    function handleBackward() {
        $video.currentTime = $video.currentTime - 10
        console.log('Para Atras 10 Segundos', $video.currentTime)
    }

    function handleForward() {
        $video.currentTime = $video.currentTime + 10
        console.log('Para Adelante 10 Segundos', $video.currentTime)
    }

    function handleLoaded() {
        $progress.max = $video.duration
        console.log('Ha Cargado El Video', $video.duration)
    }

    function handleTimeUpdate() {
        $progress.value = $video.currentTime
        console.log('Tiempo Actual', $video.currentTime)
    }

    function handleInput() {
        $video.currentTime = $progress.value
        console.log($progress.value)
    }