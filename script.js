/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'جيش بشار الأسد يقومون بضرب وتعذيب مدني اعزل، بتاريخ: 11/7/2012 ',
        'name': 'video_1.mp4',
        'duration': '0:22',
    },
    {
        'id': 'a2',
        'title': 'أحد عناصر جيش بشار الأسد يقوم بإعدام رجل مدني ',
        'name': 'video_02.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'فارغ',
        'name': '',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'فارغ',
        'name': '',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'تعذيب المدنيين على يد ميليشيات نظام بشار الأسد وإجبارهم على تقليد اصوات الحيوانات',
        'name': 'video_05.mp4',
        'duration': '1:25',
    },
    {
        'id': 'a6',
        'title': 'جنود جيش بشار الأسد يقومون بقتل المدنيين وتصويرهم وشتمهم ',
        'name': 'video_06.mp4',
        'duration': '0:37',
    },
    {
        'id': 'a7',
        'title': 'إعدام المدنيين على يد جيش بشار الأسد وميليشياته في ريف حمص',
        'name': 'video_07.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'جيش نظام بشار الأسد يقوم بتعذيب المدنيين',
        'name': 'video_08.mp4',
        'duration': '2:39',
    },
    {
        'id': 'a9',
        'title': 'جيش بشار الأسد يقومون بقتل احد جنود الجيش الحر ويقومون بالرقص على جثته وشتمه ',
        'name': 'video_09.mp4',
        'duration': '1:07',
        
    },
    {   'id': 'a10',
        'title': 'جيش بشار الأسد وشبيحته يجردون رجل مدني من ملابسه ويقومون بتعذيبه',
        'name': 'video_10.mp4',
        'duration': '1:07'
    },    
    {   'id': 'a11',
        'title': 'عصابات بشار الأسد المجرمة تحول المدارس الى معتقلات، مدينة اللاذقية 2011',
        'name': 'video_11.mp4',
        'duration': '1:04'
    },
    {   'id': 'a12',
        'title': 'مجزرة الحولة ريف حمص 25/5/2012 "الإبادة الطائفية علناً " ميليشيات بشار الأسد تقوم بمجزرة الحولة وتقتل الأطفال والنساء والرجال',
        'name': 'video_12.mp4',
        'duration': '2:11'
    },
    {   'id': 'a12',
        'title': 'جيش بشار الأسد وشبيحته يجردون رجل مدني من ملابسه ويقومون بتعذيبه',
        'name': 'video_13.mp4',
        'duration': '1:07'
    },
    {   'id': 'a13',
        'title': 'مجزرة في مدينة حلب-حي بستان القصور جراء إسقاط البراميل المتفجرة على المدنيين 30/5/2014',
        'name': 'video_14.mp4',
        'duration': '1:07'
    },
    {   'id': 'a14',
        'title': 'إستهداف امرأة وعدد من المدنيين في حي العباسيين في دمشق من قبل قناص جيش بشار الأسد 4/6/2013',
        'name': 'video_15.mp4',
        'duration': '1:07'
    },
    {   'id': 'a15',
        'title': 'مجزرة حمورية (ريف دمشق) شبيحة بشار الأسد تقوم بإقتحام بلدة حمورية وإعدام المدنيين 14/6/2012',
        'name': 'video_15.mp4',
        'duration': '1:07'
    },
    {   'id': 'a16',
        'title': 'ميليشيا فاغنر يقومون بتعذيب وقتل شاب سوري في حقل الشاعر ، حيث قاموا بضربه بمطرقة وقطعوا رأسه ويديه و حرقوه بكل وحشية2017 الجزء 1' ,
        'name': 'video_16_part_01.mp4',
        'duration': '1:07'
    },
    {
       'id': 'a17',
       'title': 'ميليشيا فاغنر يقومون بتعذيب وقتل شاب سوري بحقل الشاعر، حيث قاموا بضربه بمطرقة و قطعوا رأسه ويديه وحرقوه بكل وحشية 2017 ، الجزء 2',
       'name': 'video_16_part_02.mp4',
       'duration': '1:07'
   },
   {
      'id': 'a18',
      'title': 'ميليشيا فاغنر يقومون بتعذيب وقتل شاب سوري بحقل الشاعر، حيث قاموا بضربه بمطرقة و قطعوا رأسه ويديه وحرقوه بكل وحشية 2017 ، الجزء 3',
      'name': 'video_16_part_03.mp4',
      'duration': '1:07'
   },
   {
      'id': 'a19',
      'title': 'ميليشيا فاغنر يقومون بتعذيب وقتل شاب سوري بحقل الشاعر، حيث قاموا بضربه بمطرقة و قطعوا رأسه ويديه وحرقوه بكل وحشية 2017 ، الجزء 4',
      'name': 'video_16_part_04.mp4',
      'duration': '1:07'
   },
   
   {   'id': 'a20',
        'title': 'ميليشيا فاغنر يقومون بتعذيب وقتل شاب سوري بحقل الشاعر، حيث قاموا بضربه بمطرقة و قطعوا رأسه ويديه وحرقوه بكل وحشية 2017 ، الجزء 5',
        'name': 'video_16_part_06.mp4',
        'duration': '1:07'
   },
   {   'id': 'a21',
        'title': 'جيش بشار الأسد وشبيحته يجردون رجل مدني من ملابسه ويقومون بتعذيبه',
        'name': 'video_17.mp4',
        'duration': '1:07'
   },
   {   'id': 'a22',
        'title': 'جيش بشار الأسد وشبيحته يجردون رجل مدني من ملابسه ويقومون بتعذيبه',
        'name': 'video_18.mp4',
        'duration': '1:07'
   },
   {   'id': 'a23',
        'title': 'جيش بشار الأسد وشبيحته يجردون رجل مدني من ملابسه ويقومون بتعذيبه',
        'name': 'video_19.mp4',
        'duration': '1:07'
   },
   {   'id': 'a24',
        'title': 'جيش بشار الأسد وشبيحته يجردون رجل مدني من ملابسه ويقومون بتعذيبه',
        'name': 'video_18.mp4',
        'duration': '1:07'
   },
    
    

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';
// adding a title 'ammar'
main_video_title.innerHTML = data[0].title
// 

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

/*let data = [{
  'thumbnail':'imsges/Background-image-blue.jpg'
}]
 document.body.style.setProperty('--url','url(images/'+match_video.thumbnail+')');
 
 videos.forEach(selected_video =>{
   selected_video.onclick = () =>{
     
     docment.body.style.setProperty('--url', 'ur(images/'+match_video.thumbnail+')');
   }
 }); */

