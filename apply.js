document.addEventListener("DOMContentLoaded", () => {
    const selectedJob = localStorage.getItem("jobToApply");
  
    if (selectedJob) {
      const jobSelect = document.getElementById("jobPosition");
      jobSelect.innerHTML = `<option value="${selectedJob}">${selectedJob}</option>`;
    }
  });
  
  document.getElementById("applyForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const skills = document.getElementById("skills").value;
    const jobPosition = document.getElementById("jobPosition").value;
  
    const application = {
      fullName,
      email,
      skills,
      jobPosition,
      date: new Date().toLocaleDateString()
    };
  
    let applications = JSON.parse(localStorage.getItem("upliftApplications")) || [];
    applications.push(application);
    localStorage.setItem("upliftApplications", JSON.stringify(applications));
  
    alert("✅ Your application has been submitted!");
    window.location.href = "dashboard.html"; // You can change this
  });