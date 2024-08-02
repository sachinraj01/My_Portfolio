// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//================================================================================================//
//Only for projects.html page
document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const certificationsContainer = document.getElementById('certifications');
            const projectsContainer = document.getElementById('projects');

            data.certifications.forEach(cert => {
                const certHTML = `
                    <div class="certificate">
                        <h4>${cert.title}</h4>
                        <p>${cert.description}</p>
                        <p class="certificates"><img src="${cert.image}" alt="CERTIFICATIONS" /></p>
                    </div>
                    <br>
                `;
                certificationsContainer.innerHTML += certHTML;
            });

            data.projects.forEach(proj => {
                const projHTML = `
                    <ul class="projects-sec">
                        <li><strong class="project-heading">${proj.title} (${proj.date})</strong><br />
                            <ul>
                                <li><b>Tech Stack:</b> ${proj.tech_stack}</li>
                                <li><b>Role:</b> ${proj.role}</li>
                                <li><b>Problem Statement:</b> ${proj.problem_statement}</li>
                                <li><b>Solution:</b> ${proj.solution}</li>
                            </ul>
                        </li>
                    </ul>
                    <br>
                `;
                projectsContainer.innerHTML += projHTML;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});