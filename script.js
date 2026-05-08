// Language Toggle with Translations
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('language-toggle');
    // Cache frequently-used elements
    const langText = document.querySelector('.lang-text');
    const LANG_KEY = 'portfolio-lang';

    if (!langBtn) return;

    // Cache each element's original (English) HTML so switching back to English
    // restores exactly what's written in index.html (even if keys are duplicated).
    document.querySelectorAll('[data-i18n]').forEach(element => {
        if (element.dataset.i18nEn == null) {
            element.dataset.i18nEn = element.innerHTML;
        }
    });

    // Translation dictionary (Arabic only; English comes from the HTML itself)
    const translations = {
        ar: {
            // Navigation
            'nav-name':'محمد مختار',
            'nav-services': 'الخدمات',
            'nav-skills': 'المهارات',
            'nav-about': 'عني',
            'nav-contact': 'شغّلني',
            'nav-language': 'العربية',
            
            // Hero Section
            'hero-title': 'من <span class="highlight">صفر</span> لـ <span class="highlight">بطل</span> —بـ$5 في الساعة.',
            'hero-subtitle': 'مطور Frontend · مهندس صوت · مساعد افتراضي · مترجم إنجليزي/عربي',
            'hero-button-services': 'شوف الخدمات',
            'hero-button-github': 'GitHub',
            
            // Services
            'services-title': 'أقدر أساعدك إزاي؟',
            'service-1-title': 'مطور واجهات أمامية',
            'service-1-status': 'متاح',
            'service-1-desc': 'بعمل مواقع Responsive وسهلة الاستخدام بـ HTML وCSS وJavaScript الحديثة.',
            'service-2-title': 'تحرير بودكاست',
            'service-2-status': 'متاح',
            'service-2-desc': 'بمنتج وبحرّر بودكاست بخبرة حوالي سنتين في هندسة الصوت.',
            'service-3-title': 'خدمات الترجمة',
            'service-3-status': 'متاح',
            'service-3-desc': 'بترجم بين الإنجليزي والعربي.',
            'service-4-title': 'مساعد افتراضي',
            'service-4-status': 'متاح',
            'service-4-desc': 'بقدّم مساعدة افتراضية للمهام اليومية والمتابعة والتنظيم، ومعايا خبرة في Notion وZoom وحزمة أوفيس.',
            'service-5-title': 'مونتاج',
            'service-5-status': 'شغال عليه',
            'service-5-desc': 'مونتاج وتحرير فيديو حديث باستخدام DaVinci Resolve و Kdenlive.',
            'service-6-title': 'تصميم صور/ثَمبنيل',
            'service-6-status': 'شغال عليه',
            'service-6-desc': 'بصمّم ثَمبنيلز ومرئيات جذابة للفيديو ومحتوى السوشيال ميديا باستخدام GIMP وInkscape.',
            'service-7-title': 'تصميم UI/UX',
            'service-7-status': 'شغال عليه',
            'service-7-desc': 'بصمّم واجهات وتجربة استخدام بسيطة وواضحة باستخدام Figma وPenpot.',

            // Donation
            'donation-title': 'ادعمني على Patreon',
            'donation-text': 'لو شغلي عاجبك وعايز تدعمني، تبرع بسيط مش هيضر. دوس على القلب المنوّر عشان تفكّر تتبرعلي',
            
            // Skills
            'skills-title': 'المهارات والتقنيات',
            'skills-frontend': 'الواجهة الأمامية',
            'skills-tools': 'الأدوات',
            'skills-learning': 'لسه بتعلّمها',

            // About
            'about-title': 'من التطوير للتصميم',
            'about-text': 'بجمع بين تطوير الويب وتصميم UI/UX عشان أطلع تجربة شكلها حلو وسهلة الاستخدام.',
            'about-1-title':'تسليم سريع',
            'about-1-desc':'تسليم في خلال 48 ساعة.',
            'about-2-title':'عين للتفاصيل',
            'about-2-desc':'شغل مظبوط مع اهتمام كبير بالتفاصيل.',
            'about-3-title':'متاح دلوقتي',
            'about-3-desc':'بشتغل مع الناس <strong>من كل حتة في العالم</strong>.',

            // Contact
            'contact-title': 'محتاج خدمة؟',
            'contact-text': 'خلّينا نبني اللي محتاجه. أنا جاهز أبدأ <strong data-i18n="contact-rn">دلوقتي</strong>.',
            'contact-rn':'دلوقتي',
            'contact-hire':'شغّلني',

            // Hire Modal
            'hire-modal-title': 'طرق الشغل معايا',
            'hire-upwork': 'شغّلني على Upwork',
            'hire-freelancer': 'شغّلني على Freelancer.com',
            'hire-guru': 'شغّلني على Guru.com',
            'hire-hubstaff': 'شغّلني على Hubstaff Talent',
            'hire-linkedin': 'شغّلني على LinkedIn',
            'hire-telegram': 'كلّمني على تيليجرام',
            'hire-mostaql': 'شغّلني على مستقل',
            
            // Footer
            'footer-text': 'متعمل بواسطة موخو (لقبي).',
            'footer-copyright': '&copy; <span id="current-year">2026</span> محمد مختار. كل الحقوق محفوظة.',
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
        // Query current translatable elements each time (innerHTML updates can replace nodes)
        const elements = document.querySelectorAll('[data-i18n]');

        // English: restore original HTML from the page itself
        if (lang === 'en') {
            elements.forEach(element => {
                if (element.dataset.i18nEn != null) {
                    element.innerHTML = element.dataset.i18nEn;
                }
            });
            return;
        }

        const langData = translations[lang] || {};
        elements.forEach(element => {
            const key = element.dataset.i18n;
            const value = langData[key];
            if (!value) return;
            if (value.includes('<')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        });

        // Update language button text (prefer inner span to preserve button markup)
        const langLabel = langData['nav-language'];
        if (langLabel) {
            if (langText) {
                langText.textContent = langLabel;
            } else if (langBtn) {
                langBtn.textContent = langLabel;
            }
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
    
    html[dir="rtl"] .service-card {
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

// Hire modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('hire-modal');
    const openers = [
        document.getElementById('hire-me-trigger'),
        document.getElementById('hire-me-trigger-contact')
    ].filter(Boolean);

    const serviceCards = Array.from(document.querySelectorAll('#services .service-card'));

    if (!modal || (openers.length === 0 && serviceCards.length === 0)) return;

    function openModal(e) {
        if (e) e.preventDefault();
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    openers.forEach(el => el.addEventListener('click', openModal));

    serviceCards.forEach(card => {
        card.classList.add('is-clickable');
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('click', openModal);
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal();
            }
        });
    });

    modal.querySelectorAll('[data-modal-close]').forEach(el => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });
});