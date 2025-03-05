document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "This Minigame Idea Does Not Exist",
            url: "https://websim.ai/@api/this-minigame-idea-does-not-exist",
            description: "Generates unique minigame concepts that have never existed before.",
            thumbnail: "minigame.jpg"
        },
        {
            title: "This Programming Language Does Not Exist",
            url: "https://websim.ai/@api/this-programming-language-does-not-exist",
            description: "Creates fictional programming languages with unique syntax and features.",
            thumbnail: "programming.jpg"
        },
        {
            title: "This Date Does Not Exist",
            url: "https://websim.ai/@api/this-date-does-not-exist",
            description: "Generates non-existent dates with historical events that never happened.",
            thumbnail: "date.jpg"
        },
        {
            title: "This Soda Does Not Exist",
            url: "https://websim.ai/@api/this-soda-does-not-exist",
            description: "Creates fictional soda brands with unique flavors and designs.",
            thumbnail: "soda.jpg"
        },
        {
            title: "This Cat Does Not Exist",
            url: "https://websim.ai/@api/this-cat-does-not-exist",
            description: "Generates fictional cat breeds with unique characteristics.",
            thumbnail: "cat.jpg"
        },
        {
            title: "This Wireframe Does Not Exist",
            url: "https://websim.ai/@api/this-wireframe-does-not-exist/1",
            description: "Creates unique UI wireframes for non-existent applications.",
            thumbnail: "wireframe.jpg"
        },
        {
            title: "This Classic Arcade Game Does Not Exist",
            url: "https://websim.ai/@api/this-classic-arcade-game-does-not-exist/",
            description: "Generates fictional classic arcade games with unique gameplay mechanics.",
            thumbnail: "arcade.jpg"
        },
        {
            title: "This Slideshow Cartoon Does Not Exist",
            url: "https://websim.ai/@api/this-slideshow-cartoon-does-not-exist",
            description: "Creates fictional cartoon characters and storylines in slideshow format.",
            thumbnail: "cartoon.jpg"
        },
        {
            title: "This Fridge Does Not Exist",
            url: "https://websim.ai/@api/this-fridge-does-not-exist/",
            description: "Generates fictional refrigerator designs with unique features.",
            thumbnail: "fridge.jpg"
        },
        {
            title: "This Planet Does Not Exist",
            url: "https://websim.ai/@api/this-planet-does-not-exist",
            description: "Creates fictional planets with unique characteristics and ecosystems.",
            thumbnail: "planet.jpg"
        },
        {
            title: "This Tetris Game Does Not Exist",
            url: "https://websim.ai/@api/this-tetris-game-does-not-exist",
            description: "Generates Tetris-like games with unique twists on the classic formula.",
            thumbnail: "tetris.jpg"
        },
        {
            title: "This Snake Game Does Not Exist",
            url: "https://websim.ai/@api/this-snake-game-does-not-exist",
            description: "Creates Snake-like games with unique mechanics and visuals.",
            thumbnail: "snake.jpg"
        }
    ];

    // Generate thumbnail colors based on project title
    function generateThumbnailColor(title) {
        // Simple hash function to generate a color
        let hash = 0;
        for (let i = 0; i < title.length; i++) {
            hash = title.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        // Convert to RGB
        const r = (hash & 0xFF0000) >> 16;
        const g = (hash & 0x00FF00) >> 8;
        const b = hash & 0x0000FF;
        
        return `hsl(${(hash % 360)}, 70%, 80%)`;
    }

    // Create project cards
    const projectContainer = document.querySelector('.project-container');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.dataset.url = project.url;
        projectCard.dataset.title = project.title;
        
        const backgroundColor = generateThumbnailColor(project.title);
        
        // Use text-based thumbnail with generated color
        projectCard.innerHTML = `
            <div class="project-thumbnail" style="background-color: ${backgroundColor};">
                <div style="height: 100%; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: rgba(0,0,0,0.3);">
                    ${project.title.charAt(0)}${project.title.split(' ')[1].charAt(0)}
                </div>
                <div class="prompt-badge">
                    <div class="prompt-icon">1</div>
                    prompt
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        projectContainer.appendChild(projectCard);
    });

    // Fullscreen functionality
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const projectIframe = document.getElementById('projectIframe');
    const fullscreenTitle = document.getElementById('fullscreenTitle');
    const closeFullscreenBtn = document.getElementById('closeFullscreen');
    
    // Open fullscreen view when a project card is clicked
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const url = this.dataset.url;
            const title = this.dataset.title;
            
            fullscreenTitle.textContent = title;
            projectIframe.src = url;
            fullscreenContainer.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when fullscreen is open
        });
    });
    
    // Close fullscreen view
    closeFullscreenBtn.addEventListener('click', function() {
        fullscreenContainer.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
        projectIframe.src = ''; // Clear iframe source to stop content
    });
    
    // Close fullscreen view when clicking outside the iframe
    fullscreenContainer.addEventListener('click', function(e) {
        if (e.target === fullscreenContainer) {
            closeFullscreenBtn.click();
        }
    });
    
    // Close fullscreen view when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenContainer.style.display === 'flex') {
            closeFullscreenBtn.click();
        }
    });
});

