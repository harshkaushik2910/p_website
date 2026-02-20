/* ============================================
   STATE MANAGEMENT
   ============================================ */

const STATE = {
    currentSection: 1,
    totalSections: 8,
    completed: false,
    musicPlaying: false,
    unlockedSections: new Set([1]),
    revealedParagraphs: 0,
    passwordAttempts: 0,
    voiceAudioPlaying: false,
    passwordUnlocked: false
};

const CORRECT_PASSWORD = "sunhera";
const CELEBRATION_VIDEO_URL = 'final_video.mp4'; // Declare CELEBRATION_VIDEO_URL
const FINAL_PHOTO_URL = 'ending_photo.jpg'; // Declare FINAL_PHOTO_URL

// Section 1: Handwriting text
const SECTION_1_TEXT = "Hi Sanskriti…";
const SECTION_1_SUBTEXT = "This is something I made, only for you.";

// Section 2: Name animation
const SECTION_2_NAME = "Sanskriti ❤️";
const SECTION_2_TEXT = "Aur tumhara naam… sirf ek naam nahi, mera sab kuch ban chuka hai.";

// Section 4: Essay
const SECTION_4_ESSAY = `To my Sanskriti,

Some people just feel like peace… and you’re one of them.
Whenever I’m with you, it feels like my heart discovers a new way to love you, a little more than before. And even when I’m not with you, the feeling doesn’t fade… it stays, quietly, reminding me how much I want to love you and be loved by you.

Talking to you has become the best part of my day.
There’s something so comforting about you… even through texts.
Your presence carries a kind of calmness I’ve never felt with anyone else. It feels like you are a part of me… a part I just want to protect, understand, and take care of.

Your smile… it has this rare ability to fix everything.
My bad days, my mood, my thoughts… everything just feels lighter because of it. And at the same time, it makes my heart beat even more for you.

People like you don’t come often. You are rare.
A pure heart, a beautiful soul, and a personality that feels so genuine — it all makes you one of the most beautiful human beings I’ve ever known.

And your eyes…
they are something I can never stop admiring.
They feel like an ocean, full of emotions, always carrying something deep within. So many times, I’ve felt like they want to say a lot more… but you hold it back. And that’s okay… you don’t always have to say everything. I understand.

Your heart…
the way you feel things, deeply and truly — that’s what makes me love you the way I do.
You are someone who feels with her whole heart, who gives her all when she cares… and that’s something really rare.

Somehow… you feel like a part of me.
And honestly, I want this part of me… to always be you.

Life will have its ups and downs, that’s just how it is.
But one thing I can promise you is — I’ll be there.
In every high, in every low, in every situation… I’ll stand beside you.

When you’re with me, I want all of you —
that feelful Sanskriti… kind, passionate, loving, real.
And yes… in my eyes, you are perfect.

I love you… more than I can even explain, sometimes even more than I love myself.
To love you, and to be loved by you… would be the most beautiful thing for me. And I’m ready for it.
I’ll do whatever it takes, and I won’t give up on you.
I promise, I’ll never let you down.
I want not just moments with you… but a whole life.

So maybe, the best way to say it is this—

“I think… whatever our souls are made of, yours and mine are the same.”
And I love you… more than anything in this universe.

Yours,\n
______`;

// Section 5: Photo description
const SECTION_5_TEXT = "These are the moments that made me fall in love.";

// Section 6: Honesty Essay
const SECTION_6_ESSAY = `Sanskriti,

I won’t pretend to be perfect, because I’m not.
There will be days when I overthink things more than I should.
Days when I feel too much, or maybe don’t know how to express it the right way.

There will be moments when I won’t look my best,
when I’ll be tired, messy, or just not at my best version.
And maybe sometimes, I’ll make mistakes… say the wrong thing, or take time to understand.

But one thing I want you to know is —
whatever I feel, I feel it genuinely.

I may not be the most perfect,
not the most handsome,
not someone who always gets everything right…
but I am someone who truly cares.

I’ll listen, I’ll learn, and I’ll grow.
For you. For us.

Because what we have,
what I feel for you…
it matters to me more than my ego, more than my flaws.

And no matter what kind of days come — good or bad —
I won’t run away from it. I’ll stay. I’ll try. I’ll improve.

I can assure you that I will try my best for you, for us, in every circumstance.`;

// Section 7: Build-up
const SECTION_7_TITLE = "The Moment";
const SECTION_7_TEXT = `This is the moment where everything slowly comes together.

Every word I've written, every feeling I've held onto, every little thing I've wanted to say but couldn't… it all leads here.

To this exact moment.
To you.
To us.

I've thought about this a lot — about the right time, the perfect way, the perfect words.  
But then I realized… moments don't become perfect because of timing.  
They become perfect because of the person you're sharing them with.

And with you… even the simplest moments feel special.

So here I am, not trying to be perfect,  
just trying to be real.

Taking a deep breath…  
and finally saying what my heart has been wanting to say for so long.

Because this…  
this moment right here —  
means everything to me.`;


// Section 8: Proposal paragraphs
const PROPOSAL_PARAGRAPHS = [
    "Sanskriti… Shayad main perfect words kabhi choose na kar paun… par jo feel karta hoon, wo aaj pura sach kehna chahta hoon.",

    "Tum mere liye sirf ek person nahi ho… tum ek feeling ho. Aisi feeling jo mere har normal din ko special bana deti hai… aur har heavy moment ko halka.",

    "Tumhare saath hona complicated nahi lagta… sab kuch bas simple aur sahi lagta hai.",

    "Main ye promise nahi karta ki main perfect ho jaunga… par main ye zaroor promise karta hoon ki main hamesha real rahunga.",

    "Main tumhari respect karunga, tumhari baaton ko samjhunga, tumhari space ko value karunga… aur har din tumhare saath grow karna chahta hoon.",

    "Ye jo kuch bhi hai… jo main feel karta hoon… wo temporary nahi hai. Ye woh cheez hai jo main khona nahi chahta.",

    "Isliye aaj… bina kisi doubt ke, bina kuch chupaye… main tumse ek simple sa, par sabse important sawaal poochna chahta hoon…"
];


// Section 8 emoji for background
const SECTION_8_EMOJIS = ['❤️', '✨', '🌸', '💫', '🌹', '💕', '🎀', '💫'];

// Music URLs (placeholder - user will provide)
const MUSIC_URLS = {
    section1: 'section_1.mp3',
    section2: 'section_2.mp3',
    section3: 'sunhera.mp3',
    section4: 'section_4.mp3',
    section5: 'section_5.mp3',
    section6: 'section_6.mp3',
    section7: 'section_7.mp3',
    section8: 'section_8.mp3',
    unlock: 'section8.mp3',
    voiceAudio: 'speech_audio.mp3'
};

// Video and Photo URLs (user will provide)
// const CELEBRATION_VIDEO_URL = '';  // Your celebration video URL
// const FINAL_PHOTO_URL = '';        // Your final photo URL

/* ============================================
   INITIALIZATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    createNavigation();
    initSection1();
    initSection2();
    initSection4();
    initSection5();
    initSection6();
    initSection7();
    initSection8();
    showSection(1);
    playBackgroundMusic(1);
});

/* ============================================
   NAVIGATION SETUP
   ============================================ */

function createNavigation() {
    const navSteps = document.getElementById('navSteps');
    navSteps.innerHTML = '';
    
    for (let i = 1; i <= 8; i++) {
        const step = document.createElement('div');
        step.className = 'nav-step';
        step.dataset.step = i;
        step.textContent = i === 3 ? '🔐' : i === 8 ? '❤️' : i;
        navSteps.appendChild(step);
    }
    
    updateNavigation();
}

function updateNavigation() {
    document.querySelectorAll('.nav-step').forEach(step => {
        const stepNum = parseInt(step.dataset.step);
        step.classList.remove('visible', 'current', 'next');
        
        if (STATE.unlockedSections.has(stepNum)) {
            step.classList.add('visible');
            if (stepNum === STATE.currentSection) {
                step.classList.add('current');
            }
        } else if (stepNum === STATE.currentSection + 1) {
            step.classList.add('visible', 'next');
        }
        
        step.onclick = () => {
            if (STATE.unlockedSections.has(stepNum) || STATE.completed) {
                showSection(stepNum);
            }
        };
    });
}

/* ============================================
   SECTION NAVIGATION
   ============================================ */

function showSection(sectionNum) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`section-${sectionNum}`);
    if (targetSection) {
        targetSection.classList.add('active');
        STATE.currentSection = sectionNum;
        STATE.unlockedSections.add(sectionNum);
        updateNavigation();
        
        // Play music for this section
        playBackgroundMusic(sectionNum);
        
        // Stop voice audio when switching sections
        stopVoiceAudio();
        
        // Reset proposal for section 8
        if (sectionNum === 8) {
            STATE.revealedParagraphs = 0;
            document.getElementById('proposalText').innerHTML = '';
            document.getElementById('proposalQuestion').style.display = 'none';
            document.getElementById('clickHint').style.display = 'block';
            createEmojiAnimation();
        }
    }
}

function nextSection() {
    if (STATE.currentSection < STATE.totalSections) {
        showSection(STATE.currentSection + 1);
    }
}

/* ============================================
   SECTION 1: HANDWRITING ANIMATION
   ============================================ */

function initSection1() {
    const textElement = document.getElementById('handwritingText');
    textElement.textContent = '';
    
    // Typewriter effect for handwriting
    let index = 0;
    const text = SECTION_1_TEXT + '\n' + SECTION_1_SUBTEXT;
    
    function typeWriter() {
        if (STATE.currentSection === 1) {
            if (index < text.length) {
                const char = text.charAt(index);
                if (char === '\n') {
                    textElement.innerHTML += '<br>';
                } else {
                    textElement.textContent += char;
                }
                index++;
                setTimeout(typeWriter, 80);
            }
        }
    }
    
    // Start typewriter when section 1 is shown
    const observer = new MutationObserver(() => {
        if (document.getElementById('section-1').classList.contains('active') && index === 0) {
            typeWriter();
        }
    });
    
    observer.observe(document.getElementById('section-1'), { attributes: true });
}

/* ============================================
   SECTION 2: ANIMATED NAME
   ============================================ */

function initSection2() {
    const nameElement = document.getElementById('animatedName');
    const descElement = document.getElementById('nameDescription');
    
    // Animate name letter by letter when section 2 is active
    const observer = new MutationObserver(() => {
        if (document.getElementById('section-2').classList.contains('active')) {
            animateNameLetterByLetter(nameElement);
            setTimeout(() => {
                animateFadeText(descElement);
            }, SECTION_2_NAME.length * 100 + 200);
        }
    });
    
    observer.observe(document.getElementById('section-2'), { attributes: true });
}

function animateNameLetterByLetter(element) {
    element.innerHTML = '';
    let index = 0;
    
    function addLetter() {
        if (index < SECTION_2_NAME.length) {
            const span = document.createElement('span');
            span.style.display = 'inline-block';
            // span.style.animation = 'fadeInDown 0.4s ease-out forwards';
            span.style.marginLeft = '4px';
            span.textContent = SECTION_2_NAME.charAt(index);
            element.appendChild(span);
            index++;
            setTimeout(addLetter, 100);
        }
    }
    
    addLetter();
}

function animateFadeText(element) {
    element.textContent = SECTION_2_TEXT;
    element.style.animation = 'fadeInUp 1.5s ease-in-out forwards';
}

/* ============================================
   SECTION 3: PASSWORD UNLOCK
   ============================================ */

function checkPassword() {
    const input = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMessage');
    const unlockMsg = document.getElementById('unlockMessage');
    const userAnswer = input.value.toLowerCase().trim();
    
    if (userAnswer === CORRECT_PASSWORD.toLowerCase()) {
        STATE.passwordUnlocked = true;
        errorMsg.textContent = '';
        errorMsg.classList.remove('show');
        unlockMsg.style.display = 'block';
        
        input.style.borderColor = 'var(--accent-gold)';
        input.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)';
        
        // Play unlock music
        playAudio(MUSIC_URLS.unlock);
        
        // Show fullscreen image after 1.2s
        setTimeout(() => {
            showFullscreenImage();
        }, 1200);
    } else {
        STATE.passwordAttempts++;
        errorMsg.textContent = '🔐 That\'s not quite right. Try again!';
        errorMsg.classList.add('show');
        
        input.classList.add('shake');
        setTimeout(() => {
            input.classList.remove('shake');
            input.value = '';
        }, 500);
    }
}

function handlePasswordKey(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
}

function showFullscreenImage() {
    const modal = document.getElementById('fullscreenModal');
    const img = document.getElementById('unlockImage');
    
    // Set a placeholder image (user should provide actual image URL)
    img.src = 'locked_section_image.jpg';
    
    modal.style.display = 'flex';
    modal.style.animation = 'fadeIn 0.8s ease-in-out';
}

function closeModalAndNext() {
    const modal = document.getElementById('fullscreenModal');
    modal.style.display = 'none';
    nextSection();
}

/* ============================================
   SECTION 4: ESSAY WITH VOICE
   ============================================ */

function initSection4() {
    const essayElement = document.getElementById('essayText');
    
    const observer = new MutationObserver(() => {
        if (document.getElementById('section-4').classList.contains('active')) {
            essayElement.textContent = SECTION_4_ESSAY;
        }
    });
    
    observer.observe(document.getElementById('section-4'), { attributes: true });
}

function toggleVoiceAudio(e) {
    if (e) e.preventDefault();
    
    const voiceAudio = document.getElementById('voiceAudio');
    const button = document.querySelector('.voice-button');
    
    if (STATE.voiceAudioPlaying) {
        voiceAudio.pause();
        STATE.voiceAudioPlaying = false;
        button.classList.remove('playing');
        document.getElementById('voiceButtonText').textContent = 'Listen in my voice';
    } else {
        // User needs to provide voice audio URL
        if (MUSIC_URLS.voiceAudio) {
            voiceAudio.src = MUSIC_URLS.voiceAudio;
            voiceAudio.play();
            STATE.voiceAudioPlaying = true;
            button.classList.add('playing');
            document.getElementById('voiceButtonText').textContent = 'Pause';
            
            // Pause background music
            document.getElementById('bgMusic').volume = 0.25;
        }
    }
}

function stopVoiceAudio() {
    const voiceAudio = document.getElementById('voiceAudio');
    const button = document.querySelector('.voice-button');
    
    voiceAudio.pause();
    STATE.voiceAudioPlaying = false;
    
    if (button) {
        button.classList.remove('playing');
        document.getElementById('voiceButtonText').textContent = 'Listen in my voice';
    }
    
    // Restore background music
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) bgMusic.volume = 0.5;
}

/* ============================================
   SECTION 5: PHOTO CARDS
   ============================================ */

function initSection5() {
    const container = document.getElementById('cardsContainer');
    const textElement = document.getElementById('section5Text');
    
    const observer = new MutationObserver(() => {
        if (document.getElementById('section-5').classList.contains('active')) {
            textElement.textContent = SECTION_5_TEXT;
            createPhotoCards();
        }
    });
    
    observer.observe(document.getElementById('section-5'), { attributes: true });
}

function createPhotoCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    // Create 6 photo cards with actual images
    const imagePaths = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg', 'photo10.jpg', 'photo11.jpg', 'photo12.jpg'];
    for (let i = 0; i < imagePaths.length; i++) {
        const card = document.createElement('div');
        card.className = 'card-item';

        const image = document.createElement('img');
        image.src = imagePaths[i];
        image.className = 'card-image';

        card.appendChild(image);
        container.appendChild(card);
    }
}

/* ============================================
   SECTION 6: HONESTY ESSAY
   ============================================ */

function initSection6() {
    const honestyElement = document.getElementById('honestyText');
    
    const observer = new MutationObserver(() => {
        if (document.getElementById('section-6').classList.contains('active')) {
            const paragraphs = SECTION_6_ESSAY.split('\n\n');
            honestyElement.innerHTML = '';
            
            paragraphs.forEach((para, index) => {
                const p = document.createElement('p');
                p.textContent = para.trim();
                p.style.animationDelay = `${index * 0.2}s`;
                honestyElement.appendChild(p);
            });
        }
    });
    
    observer.observe(document.getElementById('section-6'), { attributes: true });
}

/* ============================================
   SECTION 7: BUILD-UP
   ============================================ */

function initSection7() {
    const titleElement = document.getElementById('section7Title');
    const textElement = document.getElementById('section7Text');
    
    const observer = new MutationObserver(() => {
        if (document.getElementById('section-7').classList.contains('active')) {
            titleElement.textContent = SECTION_7_TITLE;
            textElement.textContent = SECTION_7_TEXT;
        }
    });
    
    observer.observe(document.getElementById('section-7'), { attributes: true });
}

/* ============================================
   SECTION 8: PROPOSAL WITH EMOJI ANIMATIONS
   ============================================ */

function initSection8() {
    // Emoji animation initialization and state reset
    const observer = new MutationObserver(() => {
        if (document.getElementById('section-8').classList.contains('active')) {
            // Reset state for section 8
            STATE.revealedParagraphs = 0;
            const clickHint = document.getElementById('clickHint');
            const paragraphsContainer = document.getElementById('paragraphsContainer');
            const proposalQuestion = document.getElementById('proposalQuestion');
            const proposalSingleCard = document.getElementById('proposalSingleCard');
            
            if (clickHint) clickHint.style.display = 'block';
            if (paragraphsContainer) paragraphsContainer.innerHTML = '';
            if (proposalQuestion) proposalQuestion.style.display = 'none';
            if (proposalSingleCard) proposalSingleCard.style.display = 'flex';
            
            createEmojiAnimation();
        }
    });
    
    observer.observe(document.getElementById('section-8'), { attributes: true });
}

function createEmojiAnimation() {
    const background = document.getElementById('emojiBackground');
    background.innerHTML = '';
    
    // Create floating emoji particles
    for (let i = 0; i < 15; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji-particle';
        emoji.textContent = SECTION_8_EMOJIS[Math.floor(Math.random() * SECTION_8_EMOJIS.length)];
        
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = Math.random() * 100 + '%';
        emoji.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        emoji.style.animationDelay = Math.random() * 2 + 's';
        
        background.appendChild(emoji);
    }
}

function revealNextParagraph(e) {
    // Ignore clicks on buttons
    if (e && (e.target.classList.contains('yes-btn') || e.target.classList.contains('no-btn'))) {
        return;
    }
    
    const paragraphsContainer = document.getElementById('paragraphsContainer');
    const proposalQuestion = document.getElementById('proposalQuestion');
    const clickHint = document.getElementById('clickHint');
    const proposalSingleCard = document.getElementById('proposalSingleCard');
    
    if (STATE.revealedParagraphs < PROPOSAL_PARAGRAPHS.length) {
        // Hide the click hint on first reveal
        if (STATE.revealedParagraphs === 0 && clickHint) {
            clickHint.style.display = 'none';
        }
        
        // Add new paragraph to the container
        const p = document.createElement('p');
        p.className = 'proposal-paragraph';
        p.textContent = PROPOSAL_PARAGRAPHS[STATE.revealedParagraphs];
        
        paragraphsContainer.appendChild(p);
        STATE.revealedParagraphs++;
        
    } else if (proposalQuestion.style.display === 'none') {
        // Clear paragraphs and show proposal question
        paragraphsContainer.innerHTML = '';
        proposalSingleCard.style.display = 'none';
        proposalQuestion.style.display = 'block';
        proposalQuestion.style.animation = 'fadeInUp 1.2s ease-in-out';
    }
}

function handleYes(e) {
    e.stopPropagation();
    
    STATE.completed = true;
    
    // Hide navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = 'none';
    }
    
    playAudio(MUSIC_URLS.celebration);
    celebrateYes();
    updateNavigation();
    
    setTimeout(() => {
        document.getElementById('section-8').style.display = 'none';
        document.getElementById('completion-screen').style.display = 'flex';
    }, 3000);
}

function handleNo(e) {
    e.stopPropagation();
    
    const noBtn = e.target;
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    noBtn.style.position = 'relative';
    noBtn.style.transition = 'transform 0.3s ease-out';
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    setTimeout(() => {
        noBtn.style.transform = 'translate(0, 0)';
    }, 300);
}

function celebrateYes() {
    // Hide section 8
    document.getElementById('section-8').style.display = 'none';
    
    // Show celebration screen with black background
    const celebrationScreen = document.getElementById('celebration-screen');
    celebrationScreen.style.display = 'flex';
    celebrationScreen.classList.add('active');
    celebrationScreen.style.opacity = '0';
    
    // Fade in celebration screen
    setTimeout(() => {
        celebrationScreen.style.transition = 'opacity 0.8s ease-in-out';
        celebrationScreen.style.opacity = '1';
    }, 100);
    
    // Create floating hearts animation
    setTimeout(() => {
        createFloatingHearts();
    }, 800);
    
    // Create confetti
    setTimeout(() => {
        createConfetti();
    }, 1200);
    
    // Show video or photo after animations
    setTimeout(() => {
        playVideoOrPhoto();
    }, 8500);
}

function createFloatingHearts() {
    const container = document.getElementById('heartsAnimation');
    const hearts = ['❤️', '💕', '💖', '💗'];
    
    for (let i = 0; i < 9; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.bottom = Math.random() * 100 + 'px';
        container.appendChild(heart);
    }
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const symbols = ['❤️', '✨', '💫', '🌹', '💕', '🎀'];
    
    for (let i = 0; i < 40; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece ' + 
                         (Math.random() > 0.5 ? 'confetti-heart' : 'confetti-sparkle');
        piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = Math.random() * 50 + 'px';
        piece.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        confettiContainer.appendChild(piece);
    }
}

function playVideoOrPhoto() {
    const videoUrl = CELEBRATION_VIDEO_URL;
    const photoUrl = FINAL_PHOTO_URL;
    
    if (videoUrl) {
        const videoContainer = document.getElementById('videoContainer');
        const celebrationVideo = document.getElementById('celebrationVideo');
        
        // low background music
        document.getElementById('bgMusic').volume = 0.5;
        
        // Fade in video with animation
        videoContainer.style.display = 'flex';
        videoContainer.style.opacity = '0';
        setTimeout(() => {
            videoContainer.style.transition = 'opacity 1s ease-in-out';
            videoContainer.style.opacity = '1';
        }, 50);
        
        celebrationVideo.src = videoUrl;
        
        // Add event listener for video end
        celebrationVideo.addEventListener('ended', fadeOutVideoAndShowPhoto, { once: true });
        
        celebrationVideo.play().catch(err => {
            console.log('[v0] Video playback error:', err);
            fadeOutVideoAndShowPhoto();
        });
    } else {
        showFinalPhoto();
    }
}

function fadeOutVideoAndShowPhoto() {
    const videoContainer = document.getElementById('videoContainer');
    const celebrationScreen = document.getElementById('celebration-screen');
    
    // Fade out video
    videoContainer.style.transition = 'opacity 1.5s ease-in-out';
    videoContainer.style.opacity = '0';
    
    // Background stays black (already set)
    setTimeout(() => {
        videoContainer.style.display = 'none';
        
        // Add black fade-in for background
        const bg = document.querySelector('.celebration-background');
        bg.style.transition = 'opacity 0.8s ease-in-out';
        bg.style.opacity = '1';
        
        // Show final photo
        setTimeout(() => {
            showFinalPhoto();
        }, 600);
    }, 1500);
    document.getElementById('bgMusic').volume = 0.5;
    // playBackgroundMusic(8);
}

function showFinalPhoto() {
    const photoUrl = FINAL_PHOTO_URL;
    
    if (photoUrl) {
        const photoContainer = document.getElementById('photoContainer');
        const finalPhoto = document.getElementById('finalPhoto');
        
        finalPhoto.src = photoUrl;
        
        // Fade in photo with smooth animation
        photoContainer.style.display = 'flex';
        photoContainer.style.opacity = '0';
        setTimeout(() => {
            photoContainer.style.transition = 'opacity 1.2s ease-in-out';
            photoContainer.style.opacity = '1';
        }, 50);
    }
}

function revisitProposal() {
    showSection(8);
}

/* ============================================
   AUDIO & MUSIC
   ============================================ */

function initAudio() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.5;
}

function playBackgroundMusic(sectionNum) {
    const bgMusic = document.getElementById('bgMusic');
    
    // Get music URL for section (user will provide)
    const musicUrl = MUSIC_URLS[`section${sectionNum}`];
    
    if (musicUrl && bgMusic.src !== musicUrl) {
        bgMusic.src = musicUrl;
        bgMusic.volume = 0.5;
        bgMusic.play().catch(err => {
            console.log('[v0] Audio autoplay blocked:', err);
        });
    }
}

function playAudio(url) {
    if (url) {
        const audio = new Audio(url);
        audio.volume = 0.7;
        audio.play().catch(err => {
            console.log('[v0] Could not play audio:', err);
        });
    }
}