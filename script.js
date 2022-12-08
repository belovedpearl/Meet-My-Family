const famille = [
    {
        id: 1,
        name: "Adegoke O",
        status: "Father",
        img: "baba.jpg",
        text: "I live in wrexham, i work at a distance not too far from home. I love to eat and read. i also love to tour but currently busy due to work demands. I really do hope to balance my work demands with my life desires someday.",
      },
      {
        id: 2,
        name: "Oluwaseun O",
        status: "Mother",
        img: "mama.jpg",
        text: "A trained animal scientist setting out in a new career (software development). I am passionate about this new path. I love to read, play with my children and listen to godly music. I really do hope to balance my life with the career am getting into.",
      },
      {
        id: 3,
        name: "Ayooluwa O",
        status: "Son",
        img: "ay.jpg",
        text: "I am the first son and the first born of my family. I am from Nigeria in Africa. I am in year 2 and learning to read ,I love to read, play with my brother and play games. I always try to do the right thing everytime.",
      },
      {
        id: 4,
        name: "Ifemayowa O",
        status: "Son",
        img: "may.jpg",
        text: "i am the second born of my family. I am from Nigeria. I am three years old. I love to play with my ipad and also my play with my brother. I love my mummy, daddy and my brother. Not to mention i also like to disturb my brother.",
      },
    ]
//select each of the required html id
    const img = document.getElementById('img');
    const identify = document.getElementById('name');
    const position = document.getElementById('position');
    const text = document.getElementById('text');

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const tell = document.getElementById('tell');

    //set the current item
    let currentMember = 0;

    //display text content
    function showMember(){
        let item = famille[currentMember];
            img.src = item.img;
            identify.textContent = item.name;
            position.textContent = item.status;
            text.textContent = item.text
    }

    //add an onload event listener
    window.addEventListener('DOMContentLoaded', function(){
            showMember()
    })

    //show next member
    next.addEventListener('click', function(){
        currentMember++
        if(currentMember > famille.length -1){
            currentMember = 0
        }
       showMember()
    })

    //show previous member
    prev.addEventListener('click', function(){
        currentMember--
        if(currentMember < 0){
            current = famille.length -1
        }
       showMember()
    })

    //show random member
    tell.addEventListener('click', function(){
      currentMember = Math.floor(Math.random() * famille.length);
     showMember()
    })