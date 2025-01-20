function toggleDetails(memberElement) {
    const details = memberElement.querySelector('.member-details');
    // Toggle visibility of member details
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('selfRating');
    const ratingValue = document.getElementById('ratingValue');

    slider.addEventListener('input', () => {
        ratingValue.textContent = `${slider.value}%`;
    });
});
