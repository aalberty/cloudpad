/*
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const CREDS = {
  id: import.meta.env.VITE_CLIENT_ID,
  secret: import.meta.env.VITE_CLIENT_SECRET,
  refresh_token: import.meta.env.VITE_REFRESH_TOKEN,
  redirect_uri: "https://alberty.dev"
};




document.addEventListener('DOMContentLoaded', function () {

  const textarea = document.getElementById('markdown');
  const preview = document.getElementById('preview');
  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');
  const workspace = document.getElementById('workspace');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
      workspace.style.marginLeft = "50px";
    }

    else {
      workspace.style.marginLeft = "250px";
    }
  });

  function updatePreview() {
    const markdownText = textarea.value;
    preview.innerHTML = marked.parse(markdownText);
  }

  function loadNote() {
    console.warn("Load and save are not yet implemented");
  }

  textarea.addEventListener('input', updatePreview);

  // Load the saved note on page load
  loadNote();
});

*/

