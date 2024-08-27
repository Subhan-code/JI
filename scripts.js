document.addEventListener("DOMContentLoaded", function() {
    const jobButton = document.getElementById("job-button");
    const internshipButton = document.getElementById("internship-button");
    const jobContent = document.getElementById("job-content");
    const internshipContent = document.getElementById("internship-content");

    jobButton.addEventListener("click", function() {
        jobButton.classList.add("active");
        internshipButton.classList.remove("active");
        jobContent.classList.add("active");
        internshipContent.classList.remove("active");
    });

    internshipButton.addEventListener("click", function() {
        internshipButton.classList.add("active");
        jobButton.classList.remove("active");
        internshipContent.classList.add("active");
        jobContent.classList.remove("active");
    });
}); document.addEventListener('DOMContentLoaded', () => {
    const jobSection = document.getElementById('job-cards');
    const internshipSection = document.getElementById('internship-cards');
    const jobSearchInput = document.getElementById('search-jobs');
    const internshipSearchInput = document.getElementById('search-internships');
    const jobButton = document.getElementById('job-button');
    const internshipButton = document.getElementById('internship-button');

    // Hide all sections initially
    jobSection.classList.add('hidden');
    internshipSection.classList.add('hidden');
    jobSearchInput.classList.add('hidden');
    internshipSearchInput.classList.add('hidden');

    // Switch to Jobs
    jobButton.addEventListener('click', () => {
        jobSection.classList.remove('hidden');
        internshipSection.classList.add('hidden');
        jobSearchInput.classList.remove('hidden');
        internshipSearchInput.classList.add('hidden');
        jobButton.classList.add('active');
        internshipButton.classList.remove('active');
    });

    // Switch to Internships
    internshipButton.addEventListener('click', () => {
        jobSection.classList.add('hidden');
        internshipSection.classList.remove('hidden');
        jobSearchInput.classList.add('hidden');
        internshipSearchInput.classList.remove('hidden');
        internshipButton.classList.add('active');
        jobButton.classList.remove('active');
    });

    // Search Functionality for Job and Internship Cards
    jobSearchInput.addEventListener('input', function() {
        const filter = jobSearchInput.value.toLowerCase();
        const cards = jobSection.querySelectorAll('.card');
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(filter) ? '' : 'none';
        });
    });

    internshipSearchInput.addEventListener('input', function() {
        const filter = internshipSearchInput.value.toLowerCase();
        const cards = internshipSection.querySelectorAll('.card');
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(filter) ? '' : 'none';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const accountImage = document.getElementById('account-image');
    const sidebar = document.getElementById('account-sidebar');
    const editForm = document.getElementById('edit-form-details');
    const userDetails = document.querySelector('.user-details');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const skillsInput = document.getElementById('skills');
    const profilePic = document.getElementById('profile-pic');
    const uploadPicInput = document.getElementById('upload-pic');
    const editDpBtn = document.querySelector('.edit-dp-btn');
    const closeBtn = document.querySelector('.close-btn');
    
    // Toggle sidebar
    accountImage.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        sidebar.style.transform = sidebar.classList.contains('hidden') ? 'translateX(100%)' : 'translateX(0)';
    });

    // Close sidebar
    closeBtn.addEventListener('click', () => {
        sidebar.classList.add('hidden');
        sidebar.style.transform = 'translateX(100%)';
    });

    // Toggle edit mode
    document.querySelector('.edit-btn').addEventListener('click', () => {
        editForm.classList.toggle('hidden');
    });

    // Form submission handling
    editForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Update user details in the sidebar
        userDetails.innerHTML = `
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Skills:</strong> ${skillsInput.value}</p>
            <button class="edit-btn">Edit Details</button>
        `;

        // Hide the edit form
        editForm.classList.add('hidden');
    });

    // Handle profile picture upload
    editDpBtn.addEventListener('click', () => {
        uploadPicInput.click(); // Trigger file input click
    });

    uploadPicInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePic.src = e.target.result; // Update profile picture
                accountImage.src = e.target.result; // Update profile picture in navbar
            };
            reader.readAsDataURL(file);
        }
    });
});
