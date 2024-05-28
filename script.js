window.onscroll = () => {
    const navbarEl = document.querySelector("#frame1")
      if (window.scrollY > 0) {
        navbarEl.style.background = "white"
      }else{
        navbarEl.style.background = "rgba(0,0,0,0)"
      }

      const navbarTxts = document.querySelectorAll(".btns");
      navbarTxts.forEach(btn => {
          if (window.scrollY > 0) {
              btn.style.color = "#3ca028";
              btn.style.textShadow = "none";
          } else {
              btn.style.color = "white";
              btn.style.textShadow = "5px 5px 5px rgb(90, 90, 90)";
          }
      });
    
    const headerImg = document.querySelector(".h_img")
        if (window.scrollY > 0) {
            headerImg.src = "imgs/logoverde.png"
        }else {
            headerImg.src = "imgs/logocinza.png"
        }

        const navgrad = document.querySelector(".pre_login1")
      if (window.scrollY > 0) {
        navgrad.style.background = "rgba(0,0,0,0)"
      }else{
        navgrad.style.background = "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(164,164,164,1) 78%, rgba(164,164,164,1) 95%, rgba(164,164,164,1) 100%);"
      }
    }
    