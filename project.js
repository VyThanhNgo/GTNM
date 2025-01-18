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
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === tabName);
    if (activeButton) activeButton.classList.add('active');
  }

  // Initialize the first tab (Requirement) to be active
  document.addEventListener('DOMContentLoaded', () => {
    showTab('requirement');
  });

  // Toggle design sections
  function toggleDesignSection(header) {
    const section = header.parentElement;
    const content = section.querySelector('.design-row');
    const isOpen = section.classList.contains('open');

    document.querySelectorAll('.design-section').forEach(sec => {
      sec.classList.remove('open');
      sec.querySelector('.design-row').style.display = 'none';
      sec.querySelector('span').style.transform = 'rotate(0deg)';
    });

    if (!isOpen) {
      section.classList.add('open');
      content.style.display = 'block';
      section.querySelector('span').style.transform = 'rotate(90deg)';
    }
  }

  // Function to toggle open/close for Implementation section
function toggleImplementationSection(header) {
    const section = header.parentElement;
    const content = section.querySelector('.implementation-row');
    const isOpen = section.classList.contains('open');

    // Close any other open sections
    document.querySelectorAll('.implementation-section').forEach(sec => {
        sec.classList.remove('open');
        sec.querySelector('.implementation-row').style.display = 'none';
        sec.querySelector('span').style.transform = 'rotate(0deg)';
    });

    // Toggle current section
    if (!isOpen) {
        section.classList.add('open');
        content.style.display = 'block';
        section.querySelector('span').style.transform = 'rotate(90deg)'; // Arrow pointing down
    }
}
