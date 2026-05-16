function showSection(id) {
    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.add('hidden');
    });

    document.getElementById(id).classList.remove('hidden');
}

function openVideo(url) {
    window.open(url, "_blank");
}
