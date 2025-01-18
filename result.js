function toggleDetails(memberElement) {
    const details = memberElement.querySelector('.member-details');
    // Toggle visibility of member details
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}