function generateThankYouNote() {
    const inputVal = document.getElementById('thankInput').value.trim();
    const thankYouNote = document.getElementById('thankYouNote');

    
    const templates = [
        (input) => `We're truly grateful for ${input}. Your support has been invaluable to us, and we can't thank you enough!`,
        (input) => `Your contribution of ${input} means the world to us. It's people like you who make a real difference. Thank you!`,
        (input) => `A million thanks for ${input}! It has significantly impacted our efforts in the most positive way.`,
        (input) => `The kindness and generosity you've shown through ${input} has touched our hearts deeply. Thank you from the bottom of our hearts.`,
        (input) => `We cannot express our gratitude enough for ${input}. Your generous act is greatly appreciated and will not be forgotten.`
    ];

    if(inputVal !== '') {
        const template = templates[Math.floor(Math.random() * templates.length)];
        const message = template(inputVal);
        thankYouNote.innerHTML = `<div class="card">
                                      <h3>Heartfelt Thanks</h3>
                                      <p>${message}</p>
                                  </div>`;
    } else {
        thankYouNote.innerHTML = `<p>Please enter something you're thankful for.</p>`;
    }
}
