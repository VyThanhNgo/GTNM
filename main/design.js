const unitDetails = {
    1: {
        title: " Course Managment ",
        content: "Please upload photos to the page.",
        images: { design: '', code: '' }
    },
    2: {
        title: "Study Notes",
        content: "Please upload photos to the page.",
        images: { design: '', code: '' }
    },
    3: {
        title: "Track Progress",
        content: "Please upload photos to the page.",
        images: { design: '', code: '' }
    },
    4: {
        title: "Test",
        content: "Please upload photos to the page.",
        images: { design: '', code: '' }
    },
    5: {
        title: "Community",
        content: "Please upload photos to the page.",
        images: { design: '', code: '' }
    }

};

let currentUnit = null;

document.querySelectorAll('.unit-title').forEach(unit => {
    unit.addEventListener('click', function() {
        const unitNumber = this.getAttribute('data-unit');
        const mainTitle = document.getElementById('main-title');
        const mainContent = document.getElementById('main-content');
        const uploadSection = document.getElementById('upload-section');

        // Update main content area with selected unit info
        mainTitle.textContent = unitDetails[unitNumber].title;
        mainContent.innerHTML = `<p>${unitDetails[unitNumber].content}</p>`;

        // Show upload section
        uploadSection.style.display = 'block';

        // Set current unit
        currentUnit = unitNumber;

        // Load existing images if available
        loadExistingImages();
    });
});

function uploadDesign() {
    const designInput = document.getElementById('designUpload');
    if (designInput.files.length > 0) {
        const file = designInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            unitDetails[currentUnit].images.design = e.target.result;
            alert(`Design file uploaded for ${unitDetails[currentUnit].title}`);
            loadExistingImages();
        }

        reader.readAsDataURL(file);
    } else {
        alert('Please select a design file to upload.');
    }
}

function uploadCode() {
    const codeInput = document.getElementById('codeUpload');
    if (codeInput.files.length > 0) {
        const file = codeInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            unitDetails[currentUnit].images.code = e.target.result;
            alert(`Code file uploaded for ${unitDetails[currentUnit].title}`);
            loadExistingImages();
        }

        reader.readAsDataURL(file);
    } else {
        alert('Please select a code file to upload.');
    }
}

function displayImage(previewId, input) {
    const previewDiv = document.getElementById(previewId);
    const imgTag = previewDiv.querySelector('img');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imgTag.src = e.target.result;
            imgTag.style.display = 'block';
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function loadExistingImages() {
    if (currentUnit) {
        const designPreview = document.querySelector('#designPreview img');
        const codePreview = document.querySelector('#codePreview img');

        if (unitDetails[currentUnit].images.design) {
            designPreview.src = unitDetails[currentUnit].images.design;
            designPreview.style.display = 'block';
        } else {
            designPreview.style.display = 'none';
        }

        if (unitDetails[currentUnit].images.code) {
            codePreview.src = unitDetails[currentUnit].images.code;
            codePreview.style.display = 'block';
        } else {
            codePreview.style.display = 'none';
        }
    }
}
