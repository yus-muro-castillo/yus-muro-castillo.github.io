document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const surpriseBtn = document.querySelector('.surprise-btn');
    const termsModal = document.querySelector('.terms-modal');
    const acceptBtn = document.querySelector('.accept-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const indexYesBtn = document.querySelector('.container .message .response-buttons .yes-btn');
    const indexNoBtn = document.querySelector('.container .message .response-buttons .no-btn');
    const surpriseYesBtn = document.querySelector('.heart-animation-container .response-buttons .yes-btn');
    const surpriseNoBtn = document.querySelector('.heart-animation-container .response-buttons .no-btn');

    if (surpriseBtn) {
        console.log('Adding click listener to surprise button');
        surpriseBtn.addEventListener('click', function() {
            console.log('Surprise button clicked');
            if (termsModal) {
                console.log('Showing terms modal');
                termsModal.style.display = 'flex';
                setTimeout(() => termsModal.classList.add('active'), 10);
            } else {
                console.error('Terms modal not found');
            }
        });
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            console.log('Terms accepted');
            window.location.href = 'surprise.html';
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            console.log('Terms canceled');
            termsModal.classList.remove('active');
            setTimeout(() => termsModal.style.display = 'none', 300);
        });
    }

    // Handle index.html Yes button
    if (indexYesBtn) {
        indexYesBtn.addEventListener('click', function() {
            console.log('Index Yes button clicked');
            const heartsContainer = document.querySelector('.container .message .hearts-container');
            
            // Create confetti
            for (let i = 0; i < 200; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                heartsContainer.appendChild(confetti);
            }

            // Hide text sections
            document.querySelector('.smile-section').style.display = 'none';
            document.querySelector('.perezosa-section').style.display = 'none';

            // Show final message
            const finalMessage = document.createElement('p');
            finalMessage.classList.add('special-message');
            finalMessage.textContent = '¡Estoy muy feliz! Te enviaré un mensaje para que coordinemos nuestra cita 😊';
            finalMessage.style.animation = 'fadeIn 2s ease-in-out';
            document.querySelector('.message').appendChild(finalMessage);

            // Hide response buttons
            document.querySelector('.response-buttons').style.display = 'none';
        });
    }

    // Handle index.html No button
    if (indexNoBtn) {
        indexNoBtn.addEventListener('click', function() {
            console.log('Index No button clicked');
            
            // Move the No button randomly
            const randomX = Math.random() * (window.innerWidth - indexNoBtn.offsetWidth);
            const randomY = Math.random() * (window.innerHeight - indexNoBtn.offsetHeight);
            
            indexNoBtn.style.position = 'absolute';
            indexNoBtn.style.left = `${randomX}px`;
            indexNoBtn.style.top = `${randomY}px`;
            indexNoBtn.style.transition = 'all 0.3s ease';

            // Show final message
            const finalMessage = document.createElement('p');
            finalMessage.classList.add('special-message');
            finalMessage.textContent = 'Entiendo, pero espero que me des una oportunidad más adelante. ¡Sigamos siendo amigos!';
            finalMessage.style.animation = 'fadeIn 2s ease-in-out';
            document.querySelector('.message').appendChild(finalMessage);

            // Hide response buttons
            document.querySelector('.response-buttons').style.display = 'none';
        });
    }

    // Handle surprise.html Yes button
    if (surpriseYesBtn) {
        surpriseYesBtn.addEventListener('click', function() {
            console.log('Surprise Yes button clicked');
            const heartsContainer = document.querySelector('.heart-animation-container');
            
            // Create confetti
            for (let i = 0; i < 200; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                heartsContainer.appendChild(confetti);
            }

            // Hide text sections
            document.querySelector('.smile-section').style.display = 'none';
            document.querySelector('.perezosa-section').style.display = 'none';

            // Show final message with adjusted position
            const finalMessage = document.createElement('p');
            finalMessage.classList.add('special-message');
            finalMessage.textContent = "Sabía que dirías que sí 😌️, porque ya eres mi perezosa, así que prepárate que estos días vamos a hacer la apuesta de quién come más, si te gano, te cuidaré y te respetaré por siempre, siempre y cuando decidas que yo esté a tu lado, básicamente si gano, sera nuestra primera boda 😉️, siempre recuerda que ERES PERFECTA !!!";
            finalMessage.style.animation = 'fadeIn 2s ease-in-out';
            finalMessage.style.marginTop = '300px'; // Add margin to lower the text
            document.querySelector('.heart-animation-container').appendChild(finalMessage);

            // Adjust container position
            const container = document.querySelector('.heart-animation-container');
            container.style.position = 'relative';
            container.style.top = '50px'; // Move container down

            // Hide response buttons
            document.querySelector('.response-buttons').style.display = 'none';
        });
    }

    // Handle surprise.html No button
    if (surpriseNoBtn) {
        surpriseNoBtn.addEventListener('click', function() {
            console.log('Surprise No button clicked');
            
            // Get viewport dimensions and button size
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const buttonWidth = surpriseNoBtn.offsetWidth;
            const buttonHeight = surpriseNoBtn.offsetHeight;
            
            // Calculate safe area with padding
            const padding = 20; // Minimum distance from edges
            const maxX = viewportWidth - buttonWidth - padding;
            const maxY = viewportHeight - buttonHeight - padding;
            
            // Ensure values are valid
            const safeMaxX = Math.max(padding, maxX);
            const safeMaxY = Math.max(padding, maxY);
            
            // Generate random position within safe area
            const randomX = Math.max(padding, Math.min(safeMaxX, Math.random() * safeMaxX));
            const randomY = Math.max(padding, Math.min(safeMaxY, Math.random() * safeMaxY));
            
            // Debug positioning
            console.log('Viewport:', viewportWidth, 'x', viewportHeight);
            console.log('Button size:', buttonWidth, 'x', buttonHeight);
            console.log('New position:', randomX, randomY);
            
            // Apply new position with smooth transition
            surpriseNoBtn.style.position = 'fixed';
            surpriseNoBtn.style.left = `${randomX}px`;
            surpriseNoBtn.style.top = `${randomY}px`;
            surpriseNoBtn.style.transition = 'all 0.3s ease';
            
            // Add mobile-specific adjustments
            if (window.innerWidth <= 768) {
                // Ensure button doesn't go off screen on mobile
                surpriseNoBtn.style.maxWidth = '90%';
                surpriseNoBtn.style.whiteSpace = 'nowrap';
                surpriseNoBtn.style.fontSize = '0.9rem';
                surpriseNoBtn.style.zIndex = '1000'; // Ensure button stays on top
            }
        });
    }
});
