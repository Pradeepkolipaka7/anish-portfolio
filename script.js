 const toggleBtn = document.getElementById("darkModeToggle");
    const toggleIcon = document.getElementById("toggleIcon");

    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      toggleIcon.src = isDark ? "icons/Group 21.png" : "icons/Moon Black.png";
      toggleIcon.alt = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
    });

    document.getElementById("downloadCv").addEventListener("click", () => {
      alert("Downloading CV...");
      // window.location.href = "anish-cv.pdf";
    });

    function showSection(sectionId) {
      document.getElementById("home").style.display = sectionId === "home" ? "block" : "none";
      document.getElementById("about").style.display = sectionId === "about" ? "block" : "none";
    }