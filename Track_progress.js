
    function toggleMenu() {
        const menuContent = document.getElementById('menuContent');
        menuContent.classList.toggle('active');
        
        document.addEventListener('click', function(event) {
            if (!menuContent.contains(event.target) && !event.target.closest('.menu')) {
                menuContent.classList.remove('active');
            }
        });
    }

    function showTab(tab) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none'; 
        });

        document.getElementById(tab).style.display = 'block'; 
        document.getElementById('newTrack').focus(); 
    }

    function continueLearning(course) {
        let url = '';

        switch(course) {
            case 'beginner':
                url = 'https://www.example.com/beginner-course'; 
                break;
            case 'intermediate':
                url = 'https://www.example.com/intermediate-course'; 
                break;
            case 'advanced':
                url = 'https://www.example.com/advanced-course'; 
                break;
            default:
                console.error('Invalid course selected');
                return;
        }

        window.location.href = url; 
    }

    function addTrack() {
        const input = document.getElementById('newTrack');
        const trackName = input.value.trim();
        
        if (trackName === '') {
            alert("Please enter a request name.");
            return;
        }
        
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';
        trackItem.innerHTML = `
            <span>${trackName}</span>
            <div class="buttons">
                <button onclick="editTrack(this)">Edit</button>
                <button onclick="deleteTrack(this)">Delete</button>
            </div>
        `;
        
        document.getElementById('trackList').appendChild(trackItem);
        input.value = ''; 
    }

    function editTrack(button) {
        const trackItem = button.closest('.track-item');
        const trackName = trackItem.querySelector('span');
        const newName = prompt("Edit request name:", trackName.innerText);
        if (newName) {
            trackName.innerText = newName;
        }
    }

    function deleteTrack(button) {
        const trackItem = button.closest('.track-item');
        trackItem.remove();
    }

    function resetTracks() {
        document.getElementById('trackList').innerHTML = '';
    }

    function detectEnter(event) {
        if (event.key === "Enter") {
            addTrack();
        }
    
        }
