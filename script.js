
import { google } from 'googleapis';
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const CREDS = {
    id:             import.meta.env.VITE_CLIENT_ID,
    secret:         import.meta.env.VITE_CLIENT_SECRET,
    refresh_token:  import.meta.env.VITE_REFRESH_TOKEN,
    redirect_uri:   "https://alberty.dev"
};

const oAuth2Client = new google.auth.oAuth2(
    CREDS.id, CREDS.secret, CREDS.redirect_uri
);

let token = {
    access_token:   "",
    refresh_token:  CREDS.refresh_token,
    expiry_date:    -1,
    scope:          SCOPES,
    token_type:     "Bearer"
};

// List files in a shared drive
function listFiles(auth) {
    const drive = google.drive({ version: 'v3', auth });
    drive.files.list({
      pageSize: 10,
      fields: 'nextPageToken, files(id, name)',
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
    }, (err, res) => {
      if (err) return console.error('The API returned an error:', err);
      const files = res.data.files;
      if (files.length) {
        console.log('Files:');
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
        });
      } else {
        console.log('No files found.');
      }
    });
  }

document.addEventListener('DOMContentLoaded', function () {
    console.log("testing: ", JSON.stringify(CREDS));
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
