document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typing-text") as HTMLElement;
    const text: string = "Welcome to My Website";
    let index: number = 0;

    function typeText(): void {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);  // Adjust typing speed here
        } else {
            setTimeout(() => {
                index = 0;
                textElement.innerHTML = "";
                typeText();
            }, 2000);  // Wait 2 seconds before repeating
        }
    }

    typeText();
});
