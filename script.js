window.onscroll = () => {
    const navbarEl = document.querySelector("#frame1")
      if (window.scrollY > 0) navbarEl.style.background = "white"
      else navbarEl.style.background = "rgba(0,0,0,0)"
      
      const navbarTxt = document.querySelector(".btns")
      if (window.scrollY > 0) {
          navbarTxt.style.color = "#3ca028" 
          navbarTxt.style.textShadow = "none"
      }else {
          navbarTxt.style.color = "white"
          navbarTxt.style.textShadow = "5px 5px 5px rgb(90, 90, 90)"
      }
    
    
    }
    