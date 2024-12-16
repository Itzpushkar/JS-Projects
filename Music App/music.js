let songIndex = 0;
let audioElement = new Audio("");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let masterSingerName = document.getElementById("masterSingerName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songBanner = document.getElementById("songBanner");
let singerImage = document.getElementById("singerImage");
let masterBannerSingerName = document.getElementById("bannerSingerName");
let masterBannerSongName = document.getElementById("bannerSongName");

// const song = songs[songIndex];

// document.getElementById("bannerSongName").innerText = song.songName;
// document.getElementById("bannerSingerName").innerText = song.singerName;

let songs = [
  {
    songName: "Love Me Like You Do ",
    singerName: "By Ellie Goulding",
    songDuration: "4:10",
    filePath: "Songs/1.mp3",
    coverPath: "./Cover/1.jpeg",
    bannerSongName: "Love Me Like You Do ",
    bannerSingerName: `"Love Me Like You Do" is a romantic song performed by Ellie Goulding. It was featured in the movie "Fifty Shades of Grey" (2015). The song captures the emotional intensity of a romantic relationship. It became a popular hit, known for its smooth melody and powerful lyrics.`,
  },
  {
    songName: "Soulmate",
    singerName: "By Arijit Singh, ....",
    songDuration: "3:33",
    filePath: "Songs/2.mp3",
    coverPath: "./Cover/2.jpeg",
    bannerSongName: "Soulmate",
    bannerSingerName: `Singer: Darshan Raval
Movie/Album: Single (released in 2020)
Description: "Soulmate" is a soulful romantic song expressing the deep connection between two people, with the singer longing for a true soulmate. The song features soothing melodies and heartfelt lyrics.`,
  },
  {
    songName: "Saibo",
    singerName: "By Shreya Ghoshal",
    songDuration: "3:15",
    filePath: "Songs/3.mp3",
    coverPath: "./Cover/3.jpeg",
    bannerSongName: "Saibo",
    bannerSingerName: `Singers: Kailash Kher & Shruti Pathak
Movie: Shor in the City (2011)
Description: "Saibo" is a beautiful romantic ballad about the deep connection and affection between two people. The song’s gentle melody and emotional lyrics express love and devotion.`,
  },
  {
    songName: "Heeriye",
    singerName: "By Jasleen Royal, ....",
    songDuration: "3:14",
    filePath: "Songs/4.mp3",
    coverPath: "./Cover/4.jpeg",
    bannerSongName: "Heeriye",
    bannerSingerName: `Singers: Atif Aslam & Shreya Ghoshal
Movie: Race 3 (2018)
Description: "Heeriye" is a romantic song that beautifully expresses intense love and longing. The melody complements the heartfelt lyrics, making it a memorable romantic track from the movie "Race 3."`,
  },
  {
    songName: "Chikni Chameli",
    singerName: "By Ajay-Atul, ....",
    songDuration: "5:01",
    filePath: "Songs/5.mp3",
    coverPath: "./Cover/5.jpeg",
    bannerSongName: "Chikni Chameli",
    bannerSingerName: `Singer: Shreya Ghoshal
Movie: Agneepath (2012)
Description: "Chikni Chameli" is a high-energy dance number with a catchy beat, featuring a fun and lively performance by the lead actress. The song became a chartbuster with its peppy tune and powerful vocals.`,
  },
  {
    songName: "Illegal Weapon 2.0",
    singerName: "By Garry Sandhu, ....",
    songDuration: "3:08",
    filePath: "Songs/6.mp3",
    coverPath: "./Cover/6.jpeg",
    bannerSongName: "Illegal Weapon 2.0",
    bannerSingerName: `Singers: Jasmine Sandlas & Siddharth Slathia
Movie: Street Dancer 3D (2020)
Description: "Illegal Weapon 2.0" is a vibrant and upbeat dance track with electrifying beats. The song blends Punjabi music with modern rhythms, making it a favorite in dance clubs and parties.`,
  },
  {
    songName: "Garmi",
    singerName: "By Badshah, ....",
    songDuration: "3:02",
    filePath: "Songs/7.mp3",
    coverPath: "./Cover/7.jpeg",
    bannerSongName: "Garmi",
    bannerSingerName: `Singers: Neha Kakkar & Badshah
Movie: Street Dancer 3D (2020)
Description: "Garmi" is an energetic party track with bold beats, designed to get you on the dance floor. The song features Neha Kakkar’s and Badshah’s dynamic vocals, creating a fun and intense atmosphere.`,
  },
  {
    songName: "Namo Namo",
    singerName: "By Amit Trivedi",
    songDuration: "5:22",
    filePath: "Songs/8.mp3",
    coverPath: "./Cover/8.jpeg",
    bannerSongName: "Namo Namo",
    bannerSingerName: `Singer: Amit Trivedi
Movie: Kedarnath (2018)
Description: "Namo Namo" is a devotional song that expresses reverence and devotion to Lord Shiva. The peaceful and melodious track is a reflection of spiritual longing and faith.`,
  },
  {
    songName: "Bumro",
    singerName: "By Kamaal Khan",
    songDuration: "3:21",
    filePath: "Songs/9.mp3",
    coverPath: "./Cover/9.jpg",
    bannerSongName: "Bumro",

    bannerSingerName: `Singer: Kamaal Khan
Movie: Notebook
Description: The song is a recreation of the Kashmiri folk song "Bumbro", which was originally composed by Mohan Lal.It retains only the mukhda of the original, with new verses written by Kaushal Kishore`,
  },
  {
    songName: "Ranchhod Rangila",
    singerName: "By Rajesh Ahir, ....",
    songDuration: "4:40",
    filePath: "Songs/10.mp3",
    coverPath: "./Cover/10.jpeg",
    bannerSongName: "Ranchhod Rangila",
    bannerSingerName: `Singer: Rajesh Ahir & Sabhiben Ahir
    Album: Gujarati Folk Song 
    Description: "Ranchhod Rangila" is an energetic, vibrant track that has a traditional feel. The song celebrates the lively spirit of the protagonist and is known for its upbeat rhythm and celebratory tone.`,
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
  "Kamaal Khan",
  "Rajesh Ahir and Sabhiben Ahir",
];

songItems.forEach((e, i) => {
  //// console.log(e, i);
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
  // console.log(progress);
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
      singerImage.innerHTML = "";
      songIndex = parseInt(e.target.id);
      masterPlay.src = "./Images/pause.png";
      e.target.src = "./Images/pause.png";
      masterSongName.innerText = songs[songIndex].songName;
      masterBannerSongName.innerText = songs[songIndex].bannerSongName;
      masterBannerSingerName.innerText = songs[songIndex].bannerSingerName;
      masterSingerName.innerText = allSingersName[songIndex];
      if (songIndex + 1 == 4) {
        songBanner.style.setProperty(
          "--song-banner-image",
          `url(./Images/${songIndex + 1}.webp)`
        );
      } else {
        songBanner.style.setProperty(
          "--song-banner-image",
          `url(./Images/${songIndex + 1}.jpg)`
        );
      }

      if (
        songIndex + 1 == 1 ||
        songIndex + 1 == 5 ||
        songIndex + 1 == 8 ||
        songIndex + 1 == 9
      ) {
        let img = document.createElement("img");
        img.id = "singer1";
        img.src = `./Singers/${songIndex + 1}(1).jpg`;
        singerImage.appendChild(img);
      }

      if (
        songIndex + 1 == 2 ||
        songIndex + 1 == 3 ||
        songIndex + 1 == 4 ||
        songIndex + 1 == 6 ||
        songIndex + 1 == 7 ||
        songIndex + 1 == 10
      ) {
        let img1 = document.createElement("img");
        img1.id = "singer1";
        img1.src = `./Singers/${songIndex + 1}(1).jpg`;
        singerImage.appendChild(img1);
        let img2 = document.createElement("img");
        img2.id = "singer2";
        img2.src = `./Singers/${songIndex + 1}(2).jpg`;
        singerImage.appendChild(img2);
      }
      audioElement.src = `Songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
    });
  }
);

document.getElementById("next").addEventListener("click", (e) => {
  makeAllPlays();
  singerImage.innerHTML = "";
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
  masterBannerSongName.innerText = songs[songIndex].bannerSongName;
  masterBannerSingerName.innerText = songs[songIndex].bannerSingerName;
  masterSongName.innerText = songs[songIndex].songName;
  if (songIndex + 1 == 4) {
    songBanner.style.setProperty(
      "--song-banner-image",
      `url(./Images/${songIndex + 1}.webp)`
    );
  } else {
    songBanner.style.setProperty(
      "--song-banner-image",
      `url(./Images/${songIndex + 1}.jpg)`
    );
  }

  if (
    songIndex + 1 == 1 ||
    songIndex + 1 == 5 ||
    songIndex + 1 == 8 ||
    songIndex + 1 == 9
  ) {
    let img = document.createElement("img");
    img.id = "singer1";
    img.src = `./Singers/${songIndex + 1}(1).jpg`;
    singerImage.appendChild(img);
  }

  if (
    songIndex + 1 == 2 ||
    songIndex + 1 == 3 ||
    songIndex + 1 == 4 ||
    songIndex + 1 == 6 ||
    songIndex + 1 == 7 ||
    songIndex + 1 == 10
  ) {
    let img1 = document.createElement("img");
    img1.id = "singer1";
    img1.src = `./Singers/${songIndex + 1}(1).jpg`;
    singerImage.appendChild(img1);
    let img2 = document.createElement("img");
    img2.id = "singer2";
    img2.src = `./Singers/${songIndex + 1}(2).jpg`;
    singerImage.appendChild(img2);
  }
  audioElement.currentTime = 0;
  audioElement.play();
});

document.getElementById("previous").addEventListener("click", (e) => {
  makeAllPlays();
  singerImage.innerHTML = "";
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  newIdOfSong = `${songIndex}`;
  document.getElementById(newIdOfSong).src = "./Images/pause.png";
  masterPlay.src = "./Images/pause.png";
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  masterBannerSongName.innerText = songs[songIndex].bannerSongName;
  masterBannerSingerName.innerText = songs[songIndex].bannerSingerName;
  masterSongName.innerText = songs[songIndex].songName;
  if (songIndex + 1 == 4) {
    songBanner.style.setProperty(
      "--song-banner-image",
      `url(./Images/${songIndex + 1}.webp)`
    );
  } else {
    songBanner.style.setProperty(
      "--song-banner-image",
      `url(./Images/${songIndex + 1}.jpg)`
    );
  }

  if (
    songIndex + 1 == 1 ||
    songIndex + 1 == 5 ||
    songIndex + 1 == 8 ||
    songIndex + 1 == 9
  ) {
    let img = document.createElement("img");
    img.id = "singer1";
    img.src = `./Singers/${songIndex + 1}(1).jpg`;
    singerImage.appendChild(img);
  }

  if (
    songIndex + 1 == 2 ||
    songIndex + 1 == 3 ||
    songIndex + 1 == 4 ||
    songIndex + 1 == 6 ||
    songIndex + 1 == 7 ||
    songIndex + 1 == 10
  ) {
    let img1 = document.createElement("img");
    img1.id = "singer1";
    img1.src = `./Singers/${songIndex + 1}(1).jpg`;
    singerImage.appendChild(img1);
    let img2 = document.createElement("img");
    img2.id = "singer2";
    img2.src = `./Singers/${songIndex + 1}(2).jpg`;
    singerImage.appendChild(img2);
  }
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

audioElement.addEventListener("ended", () => {
  makeAllPlays();
  singerImage.innerHTML = "";
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  newIdOfSong = `${songIndex}`;
  document.getElementById(newIdOfSong).src = "./Images/pause.png";
  //   idOfSong.src = "./Images/pause.png";
  masterPlay.src = "./Images/pause.png";
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  masterBannerSongName.innerText = songs[songIndex].bannerSongName;
  masterBannerSingerName.innerText = songs[songIndex].bannerSingerName;
  masterSongName.innerText = songs[songIndex].songName;
  if (songIndex + 1 == 4) {
    songBanner.style.setProperty(
      "--song-banner-image",
      `url(./Images/${songIndex + 1}.webp)`
    );
  } else {
    songBanner.style.setProperty(
      "--song-banner-image",
      `url(./Images/${songIndex + 1}.jpg)`
    );
  }

  if (
    songIndex + 1 == 1 ||
    songIndex + 1 == 5 ||
    songIndex + 1 == 8 ||
    songIndex + 1 == 9
  ) {
    let img = document.createElement("img");
    img.id = "singer1";
    img.src = `./Singers/${songIndex + 1}(1).jpg`;
    singerImage.appendChild(img);
  }

  if (
    songIndex + 1 == 2 ||
    songIndex + 1 == 3 ||
    songIndex + 1 == 4 ||
    songIndex + 1 == 6 ||
    songIndex + 1 == 7 ||
    songIndex + 1 == 10
  ) {
    let img1 = document.createElement("img");
    img1.id = "singer1";
    img1.src = `./Singers/${songIndex + 1}(1).jpg`;
    singerImage.appendChild(img1);
    let img2 = document.createElement("img");
    img2.id = "singer2";
    img2.src = `./Singers/${songIndex + 1}(2).jpg`;
    singerImage.appendChild(img2);
  }
  audioElement.currentTime = 0;
  audioElement.play();
});
