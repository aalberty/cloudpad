import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore";

let serviceAccount = {
    "type": "service_account",
    "projectId": "personal-notepad-94a50",
    "privateKeyId": "e2c2e8bcf7fd060be55b02ed21d9ed2c404ea6b9",
    "privateKey": import.meta.env.VITE_FIREBASE_PRIVATE_KEY,
    "clientEmail": "firebase-adminsdk-3tciv@personal-notepad-94a50.iam.gserviceaccount.com",
    "clientId": "104199657300634952718",
    "authUri": "https://accounts.google.com/o/oauth2/auth",
    "tokenUri": "https://oauth2.googleapis.com/token",
    "authProviderX509CertUrl": "https://www.googleapis.com/oauth2/v1/certs",
    "clientX509CertUrl": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3tciv%40personal-notepad-94a50.iam.gserviceaccount.com",
    "universeDomain": "googleapis.com"
};

const app = initializeApp(serviceAccount);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('markdown');
    const preview = document.getElementById('preview');
    const saveButton = document.getElementById('saveButton');
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    function updatePreview() {
        const markdownText = textarea.value;
        preview.innerHTML = marked.parse(markdownText);
    }

    function saveNote() {
        console.warn("Load and save are not yet implemented");
    }

    function loadNote() {
        console.warn("Load and save are not yet implemented");
    }

    textarea.addEventListener('input', updatePreview);
    saveButton.addEventListener('click', saveNote);

    // Load the saved note on page load
    loadNote();
});
