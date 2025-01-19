// Function to show the corresponding tab content
function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });

  const activeTab = document.getElementById(tabName);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach((button) => {
    button.classList.remove('active');
    if (button.getAttribute('data-tab') === tabName) {
      button.classList.add('active');
    }
  });
}

// Initialize the first tab (Requirement) to be active
document.addEventListener('DOMContentLoaded', () => {
  showTab('requirement');
});

// Toggle design sections when the header is clicked
function toggleDesignSection(header) {
  const section = header.parentElement;
  const content = section.querySelector('.design-row');
  const isOpen = section.classList.contains('open');

  // Close all sections before opening the one clicked
  document.querySelectorAll('.design-section').forEach(sec => {
    if (sec !== section) {
      sec.classList.remove('open');
    }
  });

  // Toggle the current section
  if (isOpen) {
    // Close the section if it's already open
    section.classList.remove('open');
  } else {
    // Open the section if it was closed
    section.classList.add('open');
  }
}

function openModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}



// Function to toggle open/close for Implementation section
function toggleImplementationSection(header) {
  const section = header.parentElement;
  const content = section.querySelector('.implementation-row');
  const isOpen = section.classList.contains('open');

  // Close all other implementation sections before opening the clicked one
  document.querySelectorAll('.implementation-section').forEach(sec => {
    sec.classList.remove('open');
    sec.querySelector('.implementation-row').style.display = 'none';
    sec.querySelector('span').style.transform = 'rotate(0deg)';
  });

  // Only open the section if it was not already open
  if (!isOpen) {
    section.classList.add('open');
    content.style.display = 'block';  // Show the content
    section.querySelector('span').style.transform = 'rotate(90deg)';  // Rotate the arrow
  }
}
