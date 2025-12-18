// Language Toggle with Translations
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('language-toggle');
    // Cache frequently-used elements
    const langText = document.querySelector('.lang-text');
    const translatableElements = Array.from(document.querySelectorAll('[data-i18n]'));
    const LANG_KEY = 'portfolio-lang';
    
    if (!langBtn) return;
    
    // Translation dictionary
    const translations = {
        en: {
            // Navigation
            'nav-name':'Muhammed Mokhtar',
            'nav-projects': 'Projects',
            'nav-skills': 'Skills',
            'nav-about': 'About',
            'nav-contact': 'Hire Me',
            'nav-language': 'English',
            
            // Hero Section
            'hero-title': 'Turning from <span class="highlight">zero</span> to <span class="highlight">hero</span> through code.',
            'hero-subtitle': 'Frontend Developer · A-Level Student · Building the web one commit at a time.',
            'hero-button-projects': 'See My Work',
            'hero-button-github': 'GitHub',
            
            // Projects
            'projects-title': 'Projects',
            'project-1-title': 'Countdown Launch Site',
            'project-1-status': 'Live',
            'project-1-desc': 'This portfolio was built for my 18th Birthday. It\'s made with is-a.dev Domain, which is completely free. Also, my website is open source. Pure HTML/CSS/JS.',
            'project-2-title': 'A-Level Study Tools',
            'project-2-status': 'In Progress',
            'project-2-desc': 'Interactive calculators and visualizers for Math/Physics formulas.',
            'project-3-title': 'Local Business Redesign',
            'project-3-status': 'Coming Soon',
            'project-3-desc': 'Modern website redesign for a local cafe (pre-launch project).',
            
            // Skills
            'skills-title': 'Skills & Stack',
            'skills-frontend': 'Front-End',
            'skills-tools': 'Tools',
            'skills-learning': 'Learning',
            
            // About
            'about-title': 'From A-Levels to Code',
            'about-text': 'Currently balancing betweeen my college and while building a career in web development. It isn\'t just about college— it\'s about launching a professional journey.',
            'about-1-title':'Launch Mode',
            'about-1-desc':'Website goes live with my 18th birthday.',
            'about-2-title':'Fast Learner',
            'about-2-desc':'From HTML to projects in 3 months.',
            'about-3-title':'Available Now',
            'about-3-desc':'Accepting freelance projects Globally.',
            
            // Contact
            'contact-title': 'Ready to Build Something?',
            'contact-text': 'Let\'s create your website. I\'m available for projects starting from <strong>now</strong>.',
            'contact-rn':'now',
            'contact-telegram': "I'm here on Telegram",
            
            // Footer
            'footer-text': 'Built with ❤️ by Mokho, my nickname.',
            'footer-copyright': '&copy; <span id="current-year">2026</span> Muhammed Mokhtar. All rights reserved.',
            'footer-source': 'Website Source Code'
        },
        
        ar: {
            // Navigation
            'nav-name':'محمد مختار',
            'nav-projects': 'المشاريع',
            'nav-skills': 'المهارات',
            'nav-about': 'عني',
            'nav-contact': 'وظفني',
            'nav-language': 'العربية',
            
            // Hero Section
            'hero-title': 'بتحول من <span class="highlight">صفر</span> إلى <span class="highlight">خارق</span> من خلال البرمجة.',
            'hero-subtitle': 'مطور واجهات أمامية · طالب A-Levels · أبني الويب بإيد واحدة.',
            'hero-button-projects': 'شوف أعمالي',
            'hero-button-github': 'جيتهاب',
            
            // Projects
            'projects-title': 'المشاريع',
            'project-1-title': 'موقعي الجديد',
            'project-1-status': 'مباشر',
            'project-1-desc': 'حياتي الجديدة بتبتدي مع عيد ميلادي ال١٨. الموقع مجاني باستخدام دومين is-a.dev. ده غير كمان ان الموقع ده مفتوح المصدر. HTML/CSS/JS خالص.',
            'project-2-status': 'تحت الإنشاء',
            'project-2-title': 'أدوات دراسة A-Levels',
            'project-2-desc': 'آلات حاسبة تفاعلية ومرئيات لصيغ الرياضيات والفيزياء.',
            'project-3-title': 'إعادة تصميم أعمال محلية',
            'project-3-status': 'قريبا',
            'project-3-desc': 'إعادة تصميم حديث لموقع مقهى محلي (مشروع ما قبل الإطلاق).',
            
            // Skills
            'skills-title': 'المهارات والتقنيات',
            'skills-frontend': 'الواجهة الأمامية',
            'skills-tools': 'الأدوات',
            'skills-learning': 'قيد التعلم',

            // About
            'about-title': 'من A-Levels إلى البرمجة',
            'about-text': 'دلوقتي بحاول اوفق بين الجامعة وبين اني ابني مسيرة مهنية في تطوير الويب. الموضوع مش بس عن الجامعة— الموضوع عن اني أبدأ مشوار مهني.',
            'about-1-title':'وضع الإطلاق',
            'about-1-desc':'الموقع هيبقي متوفر لما أكمل ال١٨ سنة.',
            'about-2-title':'متعلم سريع',
            'about-2-desc':'من HTML لمشاريع كبيرة في 3 شهور',
            'about-3-title':'متوفر الأن',
            'about-3-desc':'بقبل الأعمال الحرة عالميًا.',

            // Contact
            'contact-title': 'مستعد لبناء شيء ما؟',
            'contact-text': 'يلا نعمل موقعك الالكتروني. أنا موجود لعمل الموقع إبنداءًا من <strong>الأن</strong>.',
            'contact-telegram':'أنا هنا على تيليجرام',
            
            // Footer
            'footer-text': 'بُني بكل ❤️ من محمد.',
            'footer-copyright': '&copy; <span id="current-year">٢٠٢٦</span> محمد مختار. جميع الحقوق محفوظة.',
            'footer-source': 'مصدر الموقع'
        }
    };
    
    function getCookie(name) {
        const cookieStr = document.cookie || '';
        const parts = cookieStr.split(';');
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i].trim();
            if (!part) continue;
            const eqIndex = part.indexOf('=');
            const key = eqIndex >= 0 ? part.slice(0, eqIndex) : part;
            if (key !== name) continue;
            const value = eqIndex >= 0 ? part.slice(eqIndex + 1) : '';
            try {
                return decodeURIComponent(value);
            } catch {
                return value;
            }
        }
        return null;
    }

    function setCookie(name, value, days) {
        // "Forever" cookies aren't truly forever; browsers may cap lifetimes.
        // We set a long lifetime (20 years) so it persists unless the user clears cookies.
        const defaultDays = 365 * 20;
        const ttlDays = (typeof days === 'number' && Number.isFinite(days)) ? days : defaultDays;
        const maxAge = Math.max(0, Math.floor(ttlDays * 24 * 60 * 60));
        const expires = new Date(Date.now() + (maxAge * 1000)).toUTCString();

        const encoded = encodeURIComponent(value);
        let cookie = `${name}=${encoded}; Max-Age=${maxAge}; Expires=${expires}; Path=/; SameSite=Lax`;
        if (location.protocol === 'https:') cookie += '; Secure';
        document.cookie = cookie;
    }

    function getSavedLangCode() {
        // 1) Cookie (highest priority)
        const cookieLang = getCookie(LANG_KEY);
        if (cookieLang === 'ar' || cookieLang === 'en') return cookieLang;

        // 2) Backwards-compat: older versions used localStorage
        const savedLang = localStorage.getItem(LANG_KEY);
        if (savedLang === 'ar' || savedLang === 'en') {
            setCookie(LANG_KEY, savedLang);
            return savedLang;
        }

        return null;
    }

    function isArabicCountry(countryCode) {
        // Arabic-speaking / MENA countries (best-effort, not perfect)
        const arCountries = new Set([
            'AE','BH','DJ','DZ','EG','IQ','JO','KW','LB','LY','MA','MR','OM','PS','QA','SA','SD','SO','SY','TN','YE'
        ]);
        return arCountries.has(String(countryCode || '').toUpperCase());
    }

    async function getIpBasedLangCode() {
        // Calls a third-party GeoIP endpoint. If it fails, we fall back gracefully.
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);
        try {
            const res = await fetch('https://ipapi.co/json/', {
                signal: controller.signal,
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            const country = data && (data.country_code || data.country);
            if (!country) return null;
            return isArabicCountry(country) ? 'ar' : 'en';
        } catch {
            return null;
        } finally {
            clearTimeout(timeoutId);
        }
    }

    async function detectPreferredLangCode() {
        // Priority: cookie/localStorage > IP-based > default
        const saved = getSavedLangCode();
        if (saved) return saved;

        const ipLang = await getIpBasedLangCode();
        if (ipLang === 'ar' || ipLang === 'en') return ipLang;

        // If GeoIP fails (blocked, offline, adblock, etc.), default to English.
        // Persist the default so subsequent loads don't re-request GeoIP.
        setCookie(LANG_KEY, 'en');
        localStorage.setItem(LANG_KEY, 'en');
        return 'en';
    }
    
    // Apply translations to page
    function applyTranslations(lang) {
        const langData = translations[lang];
        
        // Update all cached translatable elements
        translatableElements.forEach(element => {
            const key = element.dataset.i18n;
            if (langData[key]) {
                if (langData[key].includes('<')) {
                    element.innerHTML = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });

        // Update language button text (prefer inner span to preserve button markup)
        if (langText) {
            langText.textContent = langData['nav-language'];
        } else if (langBtn) {
            langBtn.textContent = langData['nav-language'];
        }
    }
    
    // Set language function
    function setLanguage(isArabic) {
        const lang = isArabic ? 'ar' : 'en';
        
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
        
        // Apply translations
        applyTranslations(lang);
        
        // Save preference
        localStorage.setItem(LANG_KEY, lang);
        setCookie(LANG_KEY, lang);
        
        console.log(`🌍 Language set to: ${lang.toUpperCase()}`);
    }
    
    // Toggle language
    function toggleLanguage() {
        const currentLang = document.documentElement.lang || 'en';
        setLanguage(currentLang !== 'ar');
    }
    
    // Initialize
    detectPreferredLangCode().then(langCode => {
        setLanguage(langCode === 'ar');
    });
    
    // Add click event
    langBtn.addEventListener('click', toggleLanguage);
});

// Add RTL CSS adjustments
const rtlStyles = document.createElement('style');
rtlStyles.textContent = `
    /* RTL Layout */
    html[dir="rtl"] body {
        text-align: right;
        font-family: 'Almarai', sans-serif;
    }
    
    html[dir="rtl"] .container {
        direction: rtl;
    }
    
    html[dir="rtl"] .nav-links {
        margin-right: auto;
        margin-left: 0;
    }
    
    html[dir="rtl"] .hero-content {
        text-align: right;
    }
    
    html[dir="rtl"] .project-card {
        text-align: right;
    }
    
    html[dir="rtl"] .about-points {
        text-align: right;
    }
`;
document.head.appendChild(rtlStyles);

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', function() {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close nav helper
    function closeNav() {
        const wasOpen = navLinks.classList.contains('open');
        if (!wasOpen) return;
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    // Close when clicking/touching outside the nav or the toggle
    ['click', 'touchstart'].forEach(evt => {
        document.addEventListener(evt, function(e) {
            if (!navLinks.classList.contains('open')) return;
            const target = e.target;
            if (navLinks.contains(target) || navToggle.contains(target)) return;
            closeNav();
        }, { passive: true });
    });

    // Optionally close when a nav link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
});