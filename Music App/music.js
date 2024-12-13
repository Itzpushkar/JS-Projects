let songIndex = 0;
let audioElement = new Audio("Songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let masterSingerName = document.getElementById("masterSingerName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Love Me Like You Do ",
    singerName: "By Ellie Goulding",
    songDuration: "4:10",
    filePath: "Songs/1.mp3",
    coverPath: "./Cover/1.jpeg",
  },
  {
    songName: "Soulmate",
    singerName: "By Arijit Singh, ....",
    songDuration: "3:33",
    filePath: "Songs/2.mp3",
    coverPath: "./Cover/2.jpeg",
  },
  {
    songName: "Saibo",
    singerName: "By Shreya Ghoshal",
    songDuration: "3:15",
    filePath: "Songs/3.mp3",
    coverPath: "./Cover/3.jpeg",
  },
  {
    songName: "Heeriye",
    singerName: "By Jasleen Royal, ....",
    songDuration: "3:14",
    filePath: "Songs/4.mp3",
    coverPath: "./Cover/4.jpeg",
  },
  {
    songName: "Chikni Chameli",
    singerName: "By Ajay-Atul, ....",
    songDuration: "5:01",
    filePath: "Songs/5.mp3",
    coverPath: "./Cover/5.jpeg",
  },
  {
    songName: "Illegal Weapon 2.0",
    singerName: "By Garry Sandhu, ....",
    songDuration: "3:08",
    filePath: "Songs/6.mp3",
    coverPath: "./Cover/6.jpeg",
  },
  {
    songName: "Garmi",
    singerName: "By Badshah, ....",
    songDuration: "3:02",
    filePath: "Songs/7.mp3",
    coverPath: "./Cover/7.jpeg",
  },
  {
    songName: "Namo Namo",
    singerName: "By Amit Trivedi",
    songDuration: "5:22",
    filePath: "Songs/8.mp3",
    coverPath: "./Cover/8.jpeg",
  },
  {
    songName: "Jaay Aene Javado",
    singerName: "By Mahesh Vanzara",
    songDuration: "5:08",
    filePath: "Songs/9.mp3",
    coverPath: "./Cover/9.jpeg",
  },
  {
    songName: "Ranchhod Rangila",
    singerName: "By Rajesh Ahir, ....",
    songDuration: "4:40",
    filePath: "Songs/10.mp3",
    coverPath: "./Cover/10.jpeg",
  },
];

let allSingersName = [
  "By Ellie Goulding",
  "Arijit Singh and Badshah",
  "Sachin-Jigar, Shreya Ghoshal, and Tochi Raina",
  "Arijit Singh and Jasleen Royal",
  "Ajay-Atul and Shreya Ghoshal",
  "Garry Sandhu and Jasmine Sandlas",
  " Badshah and Neha Kakkar",
  "Amit Trivedi",
  "Mahesh Vanzara",
  "Rajesh Ahir and Sabhiben Ahir",
];

songItems.forEach((e, i) => {
  console.log(e, i);
  e.getElementsByTagName("img")[0].src = songs[i].coverPath;
  e.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  e.getElementsByClassName("singerName")[0].innerText = songs[i].singerName;
  arr = e.getElementsByTagName("span");
  songSpan = arr[2];
  songSpan.innerText = songs[i].songDuration;
});
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.src = "./Images/pause.png";
  } else {
    audioElement.pause();
    makeAllPlays();
    masterPlay.src = "./Images/play-button.png";
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((e) => {
    e.src = "./Images/play-button.png";
  });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      masterPlay.src = "./Images/pause.png";
      e.target.src = "./Images/pause.png";
      masterSongName.innerText = songs[songIndex].songName;
      masterSingerName.innerText = allSingersName[songIndex];

      audioElement.src = `Songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
    });
  }
);

document.getElementById("next").addEventListener("click", (e) => {
  makeAllPlays();
  if (songIndex >= 10) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  newIdOfSong = `${songIndex}`;
  document.getElementById(newIdOfSong).src = "./Images/pause.png";
  //   idOfSong.src = "./Images/pause.png";
  masterPlay.src = "./Images/pause.png";
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
});

document.getElementById("previous").addEventListener("click", (e) => {
  makeAllPlays();
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  newIdOfSong = `${songIndex}`;
  document.getElementById(newIdOfSong).src = "./Images/pause.png";
  masterPlay.src = "./Images/pause.png";
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
});

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
  }`;
}

audioElement.addEventListener("timeupdate", () => {
  // Update progress bar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;

  // Update current time
  document.getElementById("current-time").innerText = formatTime(
    audioElement.currentTime
  );
});

audioElement.addEventListener("loadeddata", () => {
  // Update total duration when the audio is loaded
  document.getElementById("total-duration").innerText = formatTime(
    audioElement.duration
  );
});
