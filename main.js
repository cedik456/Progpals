const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

      let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode") {
          body.classList.add("dark");
        }
  
       /* Toggle Dark and Light Mode */
      
      modeToggle.addEventListener("click" , () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

       /* To Keep User In Selected Mode  */

        if(!body.classList.contains("dark")) {
          localStorage.setItem("mode", "light-mode");
        }else{
          localStorage.setItem("mode", "dark-mode");
        }
      })

      
      /* Toggle Search box */

      searchToggle.addEventListener("click" , () => {
      searchToggle.classList.toggle("active");
      })

      /* Toggle Sidebar */

      sidebarOpen.addEventListener("click" , () => {
        nav.classList.add("active");
      })

      body.addEventListener("click" , e => {
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu") ) {
          nav.classList.remove("active");
        }
      });




