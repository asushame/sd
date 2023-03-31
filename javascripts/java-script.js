//write here your js
// console.log('learning js')

// Открыть модальное окно
let popUpOpen = document.querySelector ('.open-popup');
let popUp = document.querySelector ('.popupbg');
let popUpClose = document.querySelector ('.popup-button');

popUpOpen.onclick = function () {
    popUp.classList.add('active');
}
// закрыть модальное окно
popUpClose.onclick = function () {
    popUp.classList.remove('active');
}

// закрыть модальное окно по бэкграунду

// ПЛЕЕР

// Элементы
const player = document.querySelector('.player');
const playButton = document.querySelector('.play');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');                      
const audio = document.querySelector('.audio');
const progressContainer = document.querySelector('.progress'); 
const progressBar = document.querySelector('.progress_bar'); 
const artistName = document.querySelector('.artistname');
const songName = document.querySelector('.songname');
const songCover = document.querySelector('.cover_img'); 
const imgSrc = document.querySelector('.img_src');

// Названия песен
const songs = ['Karma Police', 'Close Eyes','Money and run','Electric Feel' ]

// Песня по умолчанию
let songIndex = 0 

// Init
function loadSong (songname) {
    songName.innerHTML = songname;
    audio.src =  `music/${songname}.mp3`
    songCover.src = `img/cover${songIndex + 1}.png `
}
loadSong (songs[songIndex])

// Play
function playSong (){
    player.classList.add('play')
    songCover.classList.add('activee')
    imgSrc.src = './img/pause.svg'
    audio.play()
}

// Pause
function pauseSong (){
    player.classList.remove('play')
    songCover.classList.remove('activee')
    imgSrc.src = './img/play.svg'
    audio.pause()
}
playButton.addEventListener('click', () =>{
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

// Next song
function nextSong (){
    songIndex++

    if(songIndex > songs.length -1){
        songIndex = 0
    }

    loadSong (songs[songIndex])
    playSong()
}
nextButton.addEventListener('click', nextSong)

//Previous song
function previousSong (){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }

    loadSong (songs[songIndex])
    playSong()
}
previousButton.addEventListener('click',previousSong)

// Progress bar
function updateProgress(e){
    const{duration, currentTime} = e.srcElement
    // console.log(duration)
    // console.log(currentTime)
    const progressPercent = (currentTime / duration) * 100 
    progressBar.style.width=`${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

// Перемотка
function setProgress (e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
    
}
progressContainer.addEventListener('click', setProgress)

// Автоплей
audio.addEventListener('ended', nextSong)

// TO DO LIST
const inputField = document.querySelector('.input-field textarea');
const todoLists = document.querySelector('.todoLists');
const pendingNum = document.querySelector('.pending-num');
const clearButton = document.querySelector('.clear-button');

// сonsole.log(inputField,todoLists,pendingNum,clearButton)

// ДОБАВИТЬ ЗАДАЧУ

inputField.addEventListener('keyup',(e) =>{
    let inputVal = inputField.value.trim();
   

    if(e.key === 'Enter' && inputVal.length > 0){
        console.log('valid');
        let liTag = `   <li class="list pending" onclick ='handleStatus(this)'>
        <input type="checkbox">
        <span class="task">${inputVal}</span>
         
      </li>`;

      todoLists.insertAdjacentHTML('beforeend', liTag)
      inputField.value = '';
      allTasks ();
    }
})

function handleStatus(e){
    const checkbox = e.querySelector('input');
    // сonsole.log(checkbox);
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle('pending');
    allTasks ();
}



// КОЛИЧЕСТВО ЗАДАЧ СЧИТАЕМ

function allTasks (){
    let tasks = document.querySelectorAll('.pending');
    // сonsole.log(tasks);

    pendingNum.textContent = tasks.length === 0? 'НЕТ' : tasks.length;

}

// УДАЛЯЕМ ВСЕ ЗАДАЧИ
clearButton.addEventListener('click', () => {
    todoLists.innerHTML = '';
    allTasks ();

})

// УДАЛЯЕМ ЗАДАЧИ ПО ОТДЕЛЬНОСТИ
// function deleteTask(e){
//     e.parentElement.remove;
//     allTasks ();
// }




