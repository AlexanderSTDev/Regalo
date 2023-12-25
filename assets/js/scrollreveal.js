const inicioCard = ScrollReveal({
    origin: 'left',
    distance: '300px',
    duration: 2000,
    delay: 200
});

inicioCard.reveal('.inicio-card, .inicio-cuadro');
inicioCard.reveal('.inicio-img', { origin: 'bottom' });
inicioCard.reveal('.inicio-card-2, .inicio-cuadro-2', { origin: 'right' });