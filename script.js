const story = {
    A: {
      text: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula sit amet mi 
        tincidunt dapibus. Maecenas non fringilla orci. Proin accumsan risus non lectus 
        convallis, nec vulputate massa suscipit. Nullam vestibulum, est at venenatis 
        tincidunt, justo nisi vestibulum libero, vitae facilisis justo enim at arcu.\n\n 
        
        Aliquam erat volutpat. Ut ullamcorper lacus a tellus bibendum, eget pulvinar 
        lectus tempor. Sed at justo nisi. Fusce nec erat venenatis, fringilla turpis ut, 
        tincidunt purus. Donec bibendum massa at efficitur scelerisque.
  
        Suspendisse id ligula accumsan, ultrices est quis, tristique libero. Integer 
        molestie euismod lacus, id sodales magna vehicula eget. Cras porta leo eu lacus 
        tincidunt, sed tincidunt eros feugiat. Ut dictum felis eget lorem vestibulum, ut 
        consequat turpis varius.
      `,
      choices: {
        A1: "Choice A",
        A2: "Choice B"
      },
      next: {
        A1: "A1",
        A2: "A2"
      }
    },
    A1: {
      text: `
        Praesent convallis mauris eu odio scelerisque, non viverra eros vestibulum. Sed 
        dictum est id urna dapibus, non porttitor justo dignissim. Suspendisse vel dui id 
        nisi tristique ultricies. Vivamus sodales, nulla et tristique dignissim, lacus 
        felis ultrices arcu, non tincidunt dolor arcu et odio. Sed consectetur eros eget 
        mollis tincidunt.
      `,
      choices: {
        A1a: "Choice A",
        A1b: "Choice B"
      },
      next: {
        A1a: "A1a",
        A1b: "A1b"
      }
    },
    A2: {
        text: `
          Praesent convallis mauris eu odio scelerisque, non viverra eros vestibulum. Sed 
          dictum est id urna dapibus, non porttitor justo dignissim. Suspendisse vel dui id 
          nisi tristique ultricies. Vivamus sodales, nulla et tristique dignissim, lacus 
          felis ultrices arcu, non tincidunt dolor arcu et odio. Sed consectetur eros eget 
          mollis tincidunt.
        `,
        choices: {
          A2a: "Choice A",
          A2b: "Choice B"
        },
        next: {
          A2a: "A2a",
          A2b: "A2b"
        }
      },

    B: {
        text: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula sit amet mi 
          tincidunt dapibus. Maecenas non fringilla orci. Proin accumsan risus non lectus 
          convallis, nec vulputate massa suscipit. Nullam vestibulum, est at venenatis 
          tincidunt, justo nisi vestibulum libero, vitae facilisis justo enim at arcu.\n\n 
          
          Aliquam erat volutpat. Ut ullamcorper lacus a tellus bibendum, eget pulvinar 
          lectus tempor. Sed at justo nisi. Fusce nec erat venenatis, fringilla turpis ut, 
          tincidunt purus. Donec bibendum massa at efficitur scelerisque.
    
          Suspendisse id ligula accumsan, ultrices est quis, tristique libero. Integer 
          molestie euismod lacus, id sodales magna vehicula eget. Cras porta leo eu lacus 
          tincidunt, sed tincidunt eros feugiat. Ut dictum felis eget lorem vestibulum, ut 
          consequat turpis varius.
        `,
        choices: {
          B1: "Choice A",
          B2: "Choice B"
        },
        next: {
          B1: "B1",
          B2: "B2"
        }
      },
      B1: {
        text: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula sit amet mi 
          tincidunt dapibus. Maecenas non fringilla orci. Proin accumsan risus non lectus 
          convallis, nec vulputate massa suscipit. Nullam vestibulum, est at venenatis 
          tincidunt, justo nisi vestibulum libero, vitae facilisis justo enim at arcu.\n\n 
          
          Aliquam erat volutpat. Ut ullamcorper lacus a tellus bibendum, eget pulvinar 
          lectus tempor. Sed at justo nisi. Fusce nec erat venenatis, fringilla turpis ut, 
          tincidunt purus. Donec bibendum massa at efficitur scelerisque.
    
          Suspendisse id ligula accumsan, ultrices est quis, tristique libero. Integer 
          molestie euismod lacus, id sodales magna vehicula eget. Cras porta leo eu lacus 
          tincidunt, sed tincidunt eros feugiat. Ut dictum felis eget lorem vestibulum, ut 
          consequat turpis varius.
        `,
        choices: {
          B1a: "Choice A",
          B2a: "Choice B"
        },
        next: {
          B1a: "B1a",
          B2a: "B2a"
        }
      },
      B2: {
        text: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula sit amet mi 
          tincidunt dapibus. Maecenas non fringilla orci. Proin accumsan risus non lectus 
          convallis, nec vulputate massa suscipit. Nullam vestibulum, est at venenatis 
          tincidunt, justo nisi vestibulum libero, vitae facilisis justo enim at arcu.\n\n 
          
          Aliquam erat volutpat. Ut ullamcorper lacus a tellus bibendum, eget pulvinar 
          lectus tempor. Sed at justo nisi. Fusce nec erat venenatis, fringilla turpis ut, 
          tincidunt purus. Donec bibendum massa at efficitur scelerisque.
    
          Suspendisse id ligula accumsan, ultrices est quis, tristique libero. Integer 
          molestie euismod lacus, id sodales magna vehicula eget. Cras porta leo eu lacus 
          tincidunt, sed tincidunt eros feugiat. Ut dictum felis eget lorem vestibulum, ut 
          consequat turpis varius.
        `,
        choices: {
          B2a: "Choice A",
          B2a: "Choice B"
        },
        next: {
          B2a: "B2a",
          B2a: "B2a"
        }
      },
  };
  
  let fontSize = 16; // Default font size
  
  function choose(path) {
    if (!story[path]) return; // Ensure the path exists
  
    const storyContainer = document.getElementById("story-container");
    const nextStory = story[path];
  
    // Disable all buttons in the current chapter
    const currentChapter = storyContainer.lastElementChild;
    const buttons = currentChapter.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
  
    // Create a new chapter element
    const chapterDiv = document.createElement("div");
    chapterDiv.classList.add("chapter"); // Add the base class
  
    // Add narration text with proper newlines
    const storyText = document.createElement("p");
    const formattedText = nextStory.text
      .trim()
      .replace(/\n\s*\n/g, "<br><br>");
    storyText.innerHTML = formattedText;
    
    // Set the same font size as the current font size
    storyText.style.fontSize = fontSize + 'px';
  
    chapterDiv.appendChild(storyText);
  
    // Add choices if available
    if (Object.keys(nextStory.choices).length > 0) {
      const choicesDiv = document.createElement("div");
      choicesDiv.classList.add("choices");
  
      Object.keys(nextStory.choices).forEach(choiceKey => {
        const button = document.createElement("button");
        button.textContent = nextStory.choices[choiceKey];
        button.onclick = () => choose(nextStory.next[choiceKey]);
        choicesDiv.appendChild(button);
      });
  
      chapterDiv.appendChild(choicesDiv);
    }
  
    // Append the chapter to the container
    storyContainer.appendChild(chapterDiv);
  
    // Trigger the "show" class to start the reveal animation
    setTimeout(() => {
      chapterDiv.classList.add("show");
    }, 50);
  
    // Scroll to the newly added chapter smoothly
    chapterDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const fontSizeIncrease = document.getElementById('font-size-increase');
    const fontSizeDecrease = document.getElementById('font-size-decrease');
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');
  
    // Toggle Dark/Light Mode
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');
      darkModeToggle.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌞'; // Switch icon
    });
  
    // Increase Font Size
    fontSizeIncrease.addEventListener('click', () => {
      if (fontSize < 24) { // Set a maximum font size limit
        fontSize += 2;
        updateFontSize();
      }
    });
  
    // Decrease Font Size
    fontSizeDecrease.addEventListener('click', () => {
      if (fontSize > 12) { // Set a minimum font size limit
        fontSize -= 2;
        updateFontSize();
      }
    });
  
    function updateFontSize() {
      document.querySelectorAll('.chapter p').forEach(paragraph => {
        paragraph.style.fontSize = fontSize + 'px';
      });
    }
  
    // Initialize with default light mode and font size
    body.classList.add('light-mode');
    updateFontSize();
  
    // Add scroll event listener to toggle transparency
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerPoint = 200; // Scroll position to trigger transparency
  
      if (scrollY > triggerPoint) {
        modeToggle.classList.add('transparent'); // Make buttons transparent
      } else {
        modeToggle.classList.remove('transparent'); // Restore full opacity
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const usernameDisplay = document.getElementById('username-display');
    const mainMenu = document.getElementById('main-menu');
    
    const usernames = ['Kichuune', 'shiuyalan']; // Add the usernames here
    let currentIndex = 0;
    let flickerDuration = 1000; // 1 second for each flicker
    let displayDuration = 4800; // Total time for loading screen
    
    // Function to alternate the usernames with flickering effect
    let usernameDisplayInterval = setInterval(() => {
      usernameDisplay.textContent = usernames[currentIndex];
      
      // Fade in/out effect for the username display
      usernameDisplay.style.opacity = 1;
      setTimeout(() => {
        usernameDisplay.style.opacity = 0;
      }, flickerDuration / 2); // Fade out after half the interval
      
      currentIndex = (currentIndex + 1) % usernames.length; // Toggle between usernames
    }, flickerDuration); // Change the username every second
    
    // After the display duration, transition from loading screen to main menu
    setTimeout(() => {
      clearInterval(usernameDisplayInterval); // Stop alternating usernames
  
      // Apply fade-out to the loading screen
      loadingScreen.classList.add('fade-out');
      
      // After the fade-out animation, hide loading screen and show the main menu
      setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide loading screen
        mainMenu.style.display = 'block'; // Show main menu
        mainMenu.classList.add('fade-in'); // Apply fade-in to the main menu
      }, 500); // Match this timeout to the fade-out animation duration
    }, displayDuration);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const mainMenu = document.getElementById('main-menu');
    const mainMenu2 = document.getElementById('main-menu-2');
    const goToMenu2Button = document.getElementById('go-to-menu-2');
    const startButton = document.getElementById('start-game');
  
    // Transition to second main menu
    goToMenu2Button.addEventListener('click', () => {
      mainMenu.classList.add('fade-out');
      setTimeout(() => {
        mainMenu.style.display = 'none';
        mainMenu2.style.display = 'flex';
        mainMenu2.classList.add('fade-in');
      }, 500); // Match this to the fade-out duration
    });
  
    // Start button logic
    startButton.addEventListener('click', () => {
        mainMenu2.style.display = 'none'; // Hide the main menu
        app.style.display = 'block'; // Show the main app content
      // Add any further logic for starting your application here
    });
  });
  
