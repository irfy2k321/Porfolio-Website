window.addEventListener("load", () => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);

    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    setTimeout(() => {
        preloader.style.opacity = "0"; // Fade out effect
        setTimeout(() => {
            preloader.style.display = "none"; // Hide preloader
            content.style.display = "block";  // Show main content
        }, 1000);
    }, 15000);  // 5-second delay

    // Typing Effect
    const textElement = document.getElementById("typing-text");
    const text = "Welcome to My Website";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                index = 0;
                textElement.innerHTML = "";
                typeText();
            }, 2000);
        }
    }

    setTimeout(typeText, 4000); // Start typing after content is shown

    const messages2 = [
        "Hi, I'm <span class='crimson'>AHMED ZUHAIR</span>",
        "Typed random <span class='crimson'>shit</span> and it worked",
        "I have portfolio but no <span class='crimson'>project</span> to show :(",
        "Ok time for a <span class='crimson'>joke</span>",
        "What is a market in Africa called?",
        "A <span class='crimson'>black market</span>",
        "You can scroll down <span class='crimson'>now</span>"
    ];
    let currentIndex2 = 0;
    const messageElement2 = document.getElementById("header-message2");

    // Set the initial message
    messageElement2.innerHTML = messages2[currentIndex2];

    function updateMessage2() {
        currentIndex2 = (currentIndex2 + 1) % messages2.length;
        messageElement2.innerHTML = messages2[currentIndex2];
    }

    messageElement2.addEventListener('animationiteration', updateMessage2);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Show "About" section when it comes into view
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutSection);
});