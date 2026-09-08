// Internationalization and consent initialization.
document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("language-toggle");
  // Cache frequently-used elements
  const langText = document.querySelector(".lang-text");
  const headerHeart = document.querySelector(".header-heart");
  const LANG_KEY = "portfolio-lang";

  if (!langBtn) return;

  // Cache each element's original (English) HTML so switching back to English
  // restores exactly what's written in index.html (even if keys are duplicated).
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (element.dataset.i18nEn == null) {
      element.dataset.i18nEn = element.innerHTML;
    }
  });

  // Arabic strings override the English source text stored in the HTML.
  const translations = {
    en: {
      "support-heart": "Support me on Patreon",
    },
    ar: {
      // Navigation
      "support-heart": "ادعمني على Patreon",
      "nav-name": "محمد مختار  ",
      "nav-services": "الخدمات",
      "nav-skills": "المهارات",
      "nav-about": "عني",
      "nav-projects": "المشاريع",
      "nav-contact": "شغّلني",
      "nav-language": "العربية",
      // Hero Section
      "hero-title":
        'من <span class="highlight">صفر</span> لـ <span class="highlight">بطل</span> —بـ€20 في الساعة.',
      "hero-subtitle": "مطور Frontend · مهندس صوت · مصمم UI/UX",
      "hero-button-services": "شوف الخدمات",
      "hero-button-github": "GitHub",

      // Services
      "services-title": "أقدر أساعدك إزاي؟",
      "service-1-title": "مطور واجهات أمامية",
      "service-1-status": "متاح",
      "service-1-desc":
        "بعمل مواقع Responsive وسهلة الاستخدام بـ HTML وCSS وJavaScript الحديثة.",
      "service-2-title": "تحرير بودكاست",
      "service-2-status": "متاح",
      "service-2-desc":
        "بمنتج وبحرّر بودكاست بخبرة حوالي سنتين في هندسة الصوت.",
      "service-5-title": "مونتاج",
      "service-5-status": "متاح",
      "service-5-desc":
        "مونتاج وتحرير فيديو حديث باستخدام DaVinci Resolve و Kdenlive.",
      "service-6-title": "تصميم صور/ثَمبنيل",
      "service-6-status": "متاح",
      "service-6-desc":
        "بصمّم ثَمبنيلز ومرئيات جذابة للفيديو ومحتوى السوشيال ميديا باستخدام GIMP وInkscape.",
      "service-7-title": "تصميم UI/UX",
      "service-7-status": "متاح",
      "service-7-desc":
        "بصمّم واجهات وتجربة استخدام بسيطة وواضحة باستخدام Figma وPenpot.",

      // Donation
      "donation-title": "ادعمني على Patreon.",
      "donation-text":
        "لو شغلي عاجبك وعايز تدعمني، تبرع بسيط مش هيضر. دوس على القلب المنوّر عشان تفكّر تتبرعلي. الف شكر مقدما!",

      // Skills
      "skills-title": "المهارات والتقنيات",
      "skills-frontend": "الواجهة الأمامية",
      "skills-tools": "الأدوات",
      "skills-serving": "الخدمات",

      // Projects
      "projects-title": "المشاريع",
      "projects-text":
        "عملت مشاريع كتير خلال آخر 3 سنين، من بناء المواقع وهندسة الصوت وتصميم الصور المصغرة للفيديو، لحد المونتاج وتصميم UI/UX. لو حابب تشوف مشاريعي، زور صفحتي على LinkedIn.",

      // About
      "about-title": "من التطوير للتصميم",
      "about-text":
        "بجمع بين تطوير الويب، تصميم UI/UX، والمونتاج عشان أطلع تجربة شكلها حلو وسهلة الاستخدام.",
      "about-1-title": "تسليم سريع",
      "about-1-desc": "تسليم في خلال 48 ساعة.",
      "about-2-title": "عين للتفاصيل",
      "about-2-desc": "شغل مظبوط مع اهتمام كبير بالتفاصيل.",
      "about-3-title": "متاح دلوقتي",
      "about-3-desc": "بشتغل مع الناس <strong>من كل حتة في العالم</strong>.",

      // Contact
      "contact-title": "محتاج خدمة؟",
      "contact-text":
        'خلّينا نبني اللي محتاجه. أنا جاهز أبدأ <strong data-i18n="contact-rn">دلوقتي</strong>.',
      "contact-rn": "دلوقتي",
      "contact-hire": "شغّلني",

      // Hire Modal
      "hire-modal-title": "طرق الشغل معايا",
      "hire-upwork": "شغّلني على Upwork",
      "hire-freelancer": "شغّلني على Freelancer.com",
      "hire-guru": "شغّلني على Guru.com",
      "hire-hubstaff": "شغّلني على Hubstaff Talent",
      "hire-linkedin": "شغّلني على LinkedIn",
      "hire-telegram": "كلّمني على تيليجرام",
      "hire-mostaql": "شغّلني على مستقل",

      // Footer
      "footer-text": "تم عمله بواسطة موخو (لقبي).",
      "footer-copyright":
        '&copy; <span id="current-year">2026</span> محمد مختار. كل الحقوق محفوظة.',
      "footer-source": "مصدر الموقع",

      // Tech Tags
      "tag-audacity": "Audacity",
      "tag-audio-engineering": "هندسة الصوت",
      "tag-css": "CSS",
      "tag-davinci-resolve": "DaVinci Resolve",
      "tag-figma": "Figma",
      "tag-flac-files": "ملفات FLAC",
      "tag-gimp": "GIMP",
      "tag-html": "HTML",
      "tag-inkscape": "Inkscape",
      "tag-javascript": "جافاسكريبت",
      "tag-kdenlive": "Kdenlive",
      "tag-montage": "مونتاج",
      "tag-penpot": "Penpot",
      "tag-photo-thumbnail-editing": "تعديل الصور/المصغرات",
      "tag-ui-ux-design": "تصميم UI / UX",
      "tag-video-editing": "تحرير الفيديو",
      "tag-writing": "كتابة",
      "cookie-notice":
        "نحن نستخدم ملفات تعريف الارتباط لمعرفة موقعك وتوفير تجربة أفضل. هل توافق؟",
      "cookie-accept": "موافق",
      "cookie-reject": "أرفض",
    },
  };

  // Cookie helpers keep preferences available across browser sessions.
  function getCookie(name) {
    const cookieStr = document.cookie || "";
    const parts = cookieStr.split(";");
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();
      if (!part) continue;
      const eqIndex = part.indexOf("=");
      const key = eqIndex >= 0 ? part.slice(0, eqIndex) : part;
      if (key !== name) continue;
      const value = eqIndex >= 0 ? part.slice(eqIndex + 1) : "";
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
    const ttlDays =
      typeof days === "number" && Number.isFinite(days) ? days : defaultDays;
    const maxAge = Math.max(0, Math.floor(ttlDays * 24 * 60 * 60));
    const expires = new Date(Date.now() + maxAge * 1000).toUTCString();

    const encoded = encodeURIComponent(value);
    let cookie = `${name}=${encoded}; Max-Age=${maxAge}; Expires=${expires}; Path=/; SameSite=Lax`;
    if (location.protocol === "https:") cookie += "; Secure";
    document.cookie = cookie;
  }

  // Language preference order: cookie, legacy localStorage value, system locale.
  function getSavedLangCode() {
    // 1) Cookie (highest priority)
    const cookieLang = getCookie(LANG_KEY);
    if (cookieLang === "ar" || cookieLang === "en") return cookieLang;

    // 2) Backwards-compat: older versions used localStorage
    const savedLang = localStorage.getItem(LANG_KEY);
    if (savedLang === "ar" || savedLang === "en") {
      setCookie(LANG_KEY, savedLang);
      return savedLang;
    }

    return null;
  }

  function getSystemLangCode() {
    const browserLang =
      (navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language) || "";
    return /^ar(?:-|$)/i.test(browserLang) ? "ar" : "en";
  }

  function isArabicCountry(countryCode) {
    // Arabic-speaking / MENA countries (best-effort, not perfect)
    const arCountries = new Set([
      "AE",
      "BH",
      "DJ",
      "DZ",
      "EG",
      "IQ",
      "JO",
      "KW",
      "LB",
      "LY",
      "MA",
      "MR",
      "OM",
      "PS",
      "QA",
      "SA",
      "SD",
      "SO",
      "SY",
      "TN",
      "YE",
    ]);
    return arCountries.has(String(countryCode || "").toUpperCase());
  }

  async function getIpBasedLangCode() {
    // Calls a third-party GeoIP endpoint. If it fails, we fall back gracefully.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    try {
      const res = await fetch("https://ipapi.co/json/", {
        signal: controller.signal,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) return null;
      const data = await res.json();
      const country = data && (data.country_code || data.country);
      if (!country) return null;
      return isArabicCountry(country) ? "ar" : "en";
    } catch {
      return null;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async function detectPreferredLangCode() {
    // Priority: cookie/localStorage > browser/system locale > IP-based > default
    const saved = getSavedLangCode();
    if (saved) return saved;

    const systemLang = getSystemLangCode();
    if (systemLang === "ar" || systemLang === "en") return systemLang;

    const ipLang = await getIpBasedLangCode();
    if (ipLang === "ar" || ipLang === "en") return ipLang;

    // If GeoIP fails (blocked, offline, adblock, etc.), default to English.
    return "en";
  }

  // Apply translations without replacing the data attributes used by future toggles.
  function applyTranslations(lang) {
    // Query current translatable elements each time (innerHTML updates can replace nodes)
    const elements = document.querySelectorAll("[data-i18n]");
    const heartLabel = translations[lang]?.["support-heart"];
    if (headerHeart && heartLabel) {
      headerHeart.setAttribute("aria-label", heartLabel);
      headerHeart.setAttribute("title", heartLabel);
    }

    // English: restore original HTML from the page itself
    if (lang === "en") {
      elements.forEach((element) => {
        if (element.dataset.i18nEn != null) {
          element.innerHTML = element.dataset.i18nEn;
        }
      });
      return;
    }

    const langData = translations[lang] || {};
    elements.forEach((element) => {
      const key = element.dataset.i18n;
      const value = langData[key];
      if (!value) return;
      if (value.includes("<")) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    // Update language button text (prefer inner span to preserve button markup)
    const langLabel = langData["nav-language"];
    if (langLabel) {
      if (langText) {
        langText.textContent = langLabel;
      } else if (langBtn) {
        langBtn.textContent = langLabel;
      }
    }
  }

  // Set document direction and persist the selected language.
  function setLanguage(isArabic, save = true) {
    const lang = isArabic ? "ar" : "en";

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    // Apply translations
    applyTranslations(lang);

    // Save preference
    if (save) {
      localStorage.setItem(LANG_KEY, lang);
      setCookie(LANG_KEY, lang);
    }

    console.log(`🌍 Language set to: ${lang.toUpperCase()}`);
  }

  // Toggle between the two supported interface languages.
  function toggleLanguage() {
    const currentLang = document.documentElement.lang || "en";
    setLanguage(currentLang !== "ar");
  }

  // Consent controls also determine whether IP-based language detection may run.
  const cookieBanner = document.getElementById("cookie-banner");
  const btnAccept = document.getElementById("cookie-accept");
  const btnReject = document.getElementById("cookie-reject");

  function checkCookieConsent() {
    const consent = getCookie("cookie-consent");
    if (!consent) {
      if (cookieBanner) cookieBanner.classList.add("show");
      // If they haven't explicitly interacted, use the browser/system language but don't block site.
      const saved = getSavedLangCode();
      if (saved) {
        setLanguage(saved === "ar", false);
      } else {
        setLanguage(getSystemLangCode() === "ar", false);
      }
    } else if (consent === "accepted") {
      detectPreferredLangCode().then((langCode) =>
        setLanguage(langCode === "ar", false),
      );
    } else {
      // Rejected
      const saved = getSavedLangCode();
      setLanguage(saved ? saved === "ar" : getSystemLangCode() === "ar", false);
    }
  }

  if (btnAccept && btnReject) {
    btnAccept.addEventListener("click", () => {
      setCookie("cookie-consent", "accepted", 365);
      cookieBanner.classList.remove("show");
      detectPreferredLangCode().then((langCode) =>
        setLanguage(langCode === "ar", false),
      );
    });

    btnReject.addEventListener("click", () => {
      setCookie("cookie-consent", "rejected", 365);
      cookieBanner.classList.remove("show");
    });
  }

  checkCookieConsent();

  // Add click event
  langBtn.addEventListener("click", toggleLanguage);
});

// Add small runtime RTL adjustments that depend on the selected language.
const rtlStyles = document.createElement("style");
rtlStyles.textContent = `
    /* RTL Layout */
    html[dir="rtl"] body {
      direction: rtl;
        text-align: right;
        font-family: 'Almarai', sans-serif;
    }
    
    html[dir="rtl"] .nav-shell,
    html[dir="rtl"] .hero-grid,
    html[dir="rtl"] .donation-layout,
    html[dir="rtl"] .container {
        direction: rtl;
    }
    
    html[dir="rtl"] .nav-links {
      direction: rtl;
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

    html[dir="rtl"] .services-grid {
      direction: rtl;
    }

    html[dir="rtl"] .eyebrow,
    html[dir="rtl"] .hero-meta {
      direction: ltr;
      flex-direction: row;
      justify-content: flex-end;
      text-align: left;
    }

    html[dir="rtl"] .service-header {
      flex-direction: row-reverse;
    }
`;
document.head.appendChild(rtlStyles);

// Replay section reveals whenever content enters or leaves the viewport.
// The services heading and grid share one section-level trigger so they appear together.
document.addEventListener("DOMContentLoaded", function () {
  const revealTargets = Array.from(
    document.querySelectorAll(
      ".reveal, .section-heading, .service-card, .about-lead, .point, .donation-copy, .donation-heart, .project-link, .skill-category, .contact-inner",
    ),
  ).filter(
    (element) =>
      !element.closest(".services") ||
      element.classList.contains("service-card"),
  );
  const servicesSection = document.querySelector(".services");
  const servicesRevealTargets = servicesSection
    ? servicesSection.querySelectorAll(".section-heading, .services-grid")
    : [];
  const allRevealTargets = [...revealTargets, ...servicesRevealTargets];

  allRevealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty(
      "--reveal-delay",
      `${Math.min(index % 4, 3) * 70}ms`,
    );
  });

  let lastScrollY = window.scrollY;
  let scrollDirection = "down";
  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      scrollDirection = currentScrollY >= lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );

  function updateReveal(element, isIntersecting) {
    if (element.classList.contains("project-link")) {
      if (isIntersecting && scrollDirection === "down") {
        element.classList.remove("project-reset");
        element.classList.add("is-visible");
      } else if (!isIntersecting && scrollDirection === "up") {
        element.classList.remove("is-visible");
        element.classList.add("project-reset");
      }
      return;
    }

    if (element.classList.contains("donation-heart")) {
      if (isIntersecting) {
        element.classList.remove("reveal-reset");
        element.classList.remove("is-visible");
        void element.offsetWidth;
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
        element.classList.add("reveal-reset");
      }
      return;
    }

    element.classList.toggle("is-visible", isIntersecting);
  }

  if (!("IntersectionObserver" in window)) {
    allRevealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        updateReveal(entry.target, entry.isIntersecting);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  revealTargets.forEach((element) => revealObserver.observe(element));

  if (servicesSection) {
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        servicesRevealTargets.forEach((element) => {
          element.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50% 0px" },
    );

    servicesObserver.observe(servicesSection);
  }
});

// Mobile nav toggle and outside-click dismissal.
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close nav helper
  function closeNav() {
    const wasOpen = navLinks.classList.contains("open");
    if (!wasOpen) return;
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  // Close when clicking/touching outside the nav or the toggle
  ["click", "touchstart"].forEach((evt) => {
    document.addEventListener(
      evt,
      function (e) {
        if (!navLinks.classList.contains("open")) return;
        const target = e.target;
        if (navLinks.contains(target) || navToggle.contains(target)) return;
        closeNav();
      },
      { passive: true },
    );
  });

  // Optionally close when a nav link is clicked (mobile UX)
  navLinks
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", closeNav));
});

// Hire modal: navigation, contact, and service cards share these platform links.
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("hire-modal");
  const openers = [
    document.getElementById("hire-me-trigger"),
    document.getElementById("hire-me-trigger-contact"),
  ].filter(Boolean);

  const serviceCards = Array.from(
    document.querySelectorAll("#services .service-card"),
  );

  if (!modal || (openers.length === 0 && serviceCards.length === 0)) return;

  function openModal(e) {
    if (e) e.preventDefault();
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  openers.forEach((el) => el.addEventListener("click", openModal));

  serviceCards.forEach((card) => {
    card.classList.add("is-clickable");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", openModal);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal();
      }
    });
  });

  modal.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });
});
