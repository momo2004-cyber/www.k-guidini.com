function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (window.innerWidth <= 768) {
        document.getElementById('nav-menu').classList.remove('active');
    }
}

function addPost() {
    const author = document.getElementById('post-author').value || 'Anonyme';
    const content = document.getElementById('post-content').value;
    
    if (!content.trim()) {
        alert('Veuillez écrire un message avant de publier.');
        return;
    }

    const feed = document.getElementById('community-feed');
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
        <div class="post-header">
            <span class="post-author">${author}</span>
            <span class="post-time">À l'instant</span>
        </div>
        <div class="post-content">${content}</div>
        <div class="post-actions">
            <button class="post-action">👍 0 Utile</button>
            <button class="post-action">💬 0 Commentaire</button>
        </div>
    `;
    
    feed.insertBefore(newPost, feed.firstChild);
    
    document.getElementById('post-author').value = '';
    document.getElementById('post-content').value = '';
    
    alert('✅ Votre message a été publié avec succès !');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('survey-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Merci pour votre participation ! Vos réponses ont été enregistrées.');
        this.reset();
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
        this.reset();
    });
});
