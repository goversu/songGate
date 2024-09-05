document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language');
    const currentPath = window.location.pathname;
    const baseName = currentPath.split('/').pop().replace(/^zh-/, '').replace(/\.(html|php)$/, ''); // Get base file name without prefix and extension

    function handleLanguageChange() {
        const selectedLanguage = languageSelect.value;
        let newFileName;

        if (selectedLanguage === 'en') {
            newFileName = `${baseName}.html`; // English version of the current page
            window.location.href = `../en/${newFileName}`; // Navigate to English folder
        } else if (selectedLanguage === 'zh') {
            newFileName = `zh-${baseName}.html`; // Chinese version of the current page
            window.location.href = `../zh/${newFileName}`; // Navigate to Chinese folder
        }
    }

    languageSelect.addEventListener('change', handleLanguageChange);

    // Optional: Redirect based on URL parameter if available (for initial page load)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam) {
        languageSelect.value = langParam;
        handleLanguageChange();
    }
});
