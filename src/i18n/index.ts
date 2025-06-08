
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        features: "Features",
        aiCoverLetter: "AI Cover Letter",
        autoApplySettings: "Auto-Apply Settings",
        dailyReport: "Daily Report",
        contact: "Contact",
        login: "Login"
      },
      hero: {
        title: "AI-Powered Job Application",
        titleAccent: "Automation Platform",
        subtitle: "Apply to hundreds of jobs automatically while you sleep - from LinkedIn to StepStone",
        startButton: "Start Auto-Applying",
        watchDemo: "Watch Demo"
      },
      smartFlow: {
        title: "🧠 Smart Job Flow",
        step1: {
          title: "Upload Resume via Telegram",
          description: "Share your resume and job preferences through our Telegram bot interface."
        },
        step2: {
          title: "Generate Cover Letter with AI",
          description: "Our AI analyzes the job posting and creates a personalized German cover letter."
        },
        step3: {
          title: "We Fill Out the Job Form for You",
          description: "Automatically complete and submit applications to job platforms on your behalf."
        },
        step4: {
          title: "You Receive Reports via Telegram",
          description: "Get detailed progress reports and updates directly through Telegram notifications."
        }
      },
      platforms: {
        title: "Connected Job Platforms",
        subtitle: "We automatically apply to jobs on the most popular platforms"
      },
      testimonials: {
        title: "What Our Users Say",
        sarah: "Landed 3 interviews in my first week using this platform. The AI-generated cover letters were perfect for the German job market!",
        ahmad: "Finally, a tool that understands German job requirements. The Telegram integration makes everything so convenient.",
        maria: "The automated job applications saved me hours of work. Highly recommended for anyone job hunting in Germany!"
      },
      cta: {
        title: "Ready to Automate Your Job Search?",
        subtitle: "Join thousands who've automated their job applications with AI",
        button: "Start Auto-Applying Now"
      },
      footer: {
        description: "AI-powered job application automation for the modern job seeker.",
        features: "Features",
        platform: "Platform",
        legal: "Legal",
        about: "About",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
        rights: "All rights reserved."
      },
      demo: {
        title: "AutoJobPilot Demo",
        subtitle: "See how our AI-powered automation works",
        close: "Close"
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        features: "Funktionen",
        aiCoverLetter: "KI Anschreiben",
        autoApplySettings: "Auto-Bewerbung Einstellungen",
        dailyReport: "Täglicher Bericht",
        contact: "Kontakt",
        login: "Anmelden"
      },
      hero: {
        title: "KI-gestützte Stellenbewerbung",
        titleAccent: "Automatisierungsplattform",
        subtitle: "Bewerben Sie sich automatisch auf Hunderte von Jobs während Sie schlafen - von LinkedIn bis StepStone",
        startButton: "Auto-Bewerbung starten",
        watchDemo: "Demo ansehen"
      },
      smartFlow: {
        title: "🧠 Intelligenter Job-Ablauf",
        step1: {
          title: "Lebenslauf via Telegram hochladen",
          description: "Teilen Sie Ihren Lebenslauf und Jobpräferenzen über unsere Telegram Bot-Schnittstelle."
        },
        step2: {
          title: "Anschreiben mit KI generieren",
          description: "Unsere KI analysiert die Stellenausschreibung und erstellt ein personalisiertes deutsches Anschreiben."
        },
        step3: {
          title: "Wir füllen das Bewerbungsformular für Sie aus",
          description: "Automatisches Ausfüllen und Einreichen von Bewerbungen auf Job-Plattformen in Ihrem Namen."
        },
        step4: {
          title: "Sie erhalten Berichte via Telegram",
          description: "Erhalten Sie detaillierte Fortschrittsberichte und Updates direkt über Telegram-Benachrichtigungen."
        }
      },
      platforms: {
        title: "Verbundene Job-Plattformen",
        subtitle: "Wir bewerben uns automatisch auf Jobs auf den beliebtesten Plattformen"
      },
      testimonials: {
        title: "Was unsere Nutzer sagen",
        sarah: "Habe 3 Vorstellungsgespräche in meiner ersten Woche mit dieser Plattform erhalten. Die KI-generierten Anschreiben waren perfekt für den deutschen Arbeitsmarkt!",
        ahmad: "Endlich ein Tool, das deutsche Jobanforderungen versteht. Die Telegram-Integration macht alles so bequem.",
        maria: "Die automatisierten Jobbewerbungen haben mir Stunden Arbeit erspart. Sehr empfehlenswert für alle, die in Deutschland nach Jobs suchen!"
      },
      cta: {
        title: "Bereit, Ihre Jobsuche zu automatisieren?",
        subtitle: "Schließen Sie sich Tausenden an, die ihre Jobbewerbungen mit KI automatisiert haben",
        button: "Jetzt Auto-Bewerbung starten"
      },
      footer: {
        description: "KI-gestützte Jobbewerungsautomatisierung für den modernen Jobsuchenden.",
        features: "Funktionen",
        platform: "Plattform",
        legal: "Rechtliches",
        about: "Über uns",
        privacy: "Datenschutzrichtlinie",
        terms: "Nutzungsbedingungen",
        cookies: "Cookie-Richtlinie",
        rights: "Alle Rechte vorbehalten."
      },
      demo: {
        title: "AutoJobPilot Demo",
        subtitle: "Sehen Sie, wie unsere KI-gestützte Automatisierung funktioniert",
        close: "Schließen"
      }
    }
  },
  fa: {
    translation: {
      nav: {
        home: "خانه",
        features: "ویژگی‌ها",
        aiCoverLetter: "نامه انگیزشی هوشمند",
        autoApplySettings: "تنظیمات درخواست خودکار",
        dailyReport: "گزارش روزانه",
        contact: "تماس",
        login: "ورود"
      },
      hero: {
        title: "پلتفرم درخواست شغل",
        titleAccent: "مبتنی بر هوش مصنوعی",
        subtitle: "در خواب به صدها شغل درخواست دهید - از LinkedIn تا StepStone",
        startButton: "شروع درخواست خودکار",
        watchDemo: "مشاهده دمو"
      },
      smartFlow: {
        title: "🧠 جریان هوشمند شغل",
        step1: {
          title: "آپلود رزومه از طریق تلگرام",
          description: "رزومه و ترجیحات شغلی خود را از طریق ربات تلگرام ما به اشتراک بگذارید."
        },
        step2: {
          title: "تولید نامه انگیزشی با هوش مصنوعی",
          description: "هوش مصنوعی ما آگهی شغلی را تجزیه و تحلیل کرده و نامه انگیزشی آلمانی شخصی‌سازی شده ایجاد می‌کند."
        },
        step3: {
          title: "ما فرم شغلی را برای شما پر می‌کنیم",
          description: "تکمیل و ارسال خودکار درخواست‌ها به پلتفرم‌های شغلی از طرف شما."
        },
        step4: {
          title: "گزارش‌ها را از طریق تلگرام دریافت کنید",
          description: "گزارش‌های پیشرفت دقیق و به‌روزرسانی‌ها را مستقیماً از طریق اعلان‌های تلگرام دریافت کنید."
        }
      },
      platforms: {
        title: "پلتفرم‌های شغلی متصل",
        subtitle: "ما به طور خودکار به مشاغل در محبوب‌ترین پلتفرم‌ها درخواست می‌دهیم"
      },
      testimonials: {
        title: "نظرات کاربران ما",
        sarah: "در اولین هفته استفاده از این پلتفرم 3 مصاحبه کاری کسب کردم. نامه‌های انگیزشی تولید شده توسط هوش مصنوعی برای بازار کار آلمان عالی بودند!",
        ahmad: "بالاخره ابزاری که نیازهای شغلی آلمان را درک می‌کند. ادغام تلگرام همه چیز را بسیار راحت می‌کند.",
        maria: "درخواست‌های شغلی خودکار ساعت‌ها وقت من را صرفه‌جویی کرد. به شدت برای هر کسی که در آلمان به دنبال کار است توصیه می‌شود!"
      },
      cta: {
        title: "آماده خودکارسازی جستجوی شغل هستید؟",
        subtitle: "به هزاران نفری بپیوندید که درخواست‌های شغلی خود را با هوش مصنوعی خودکار کرده‌اند",
        button: "اکنون درخواست خودکار را شروع کنید"
      },
      footer: {
        description: "اتوماسیون درخواست شغل مبتنی بر هوش مصنوعی برای جویندگان کار مدرن.",
        features: "ویژگی‌ها",
        platform: "پلتفرم",
        legal: "حقوقی",
        about: "درباره ما",
        privacy: "سیاست حریم خصوصی",
        terms: "شرایط خدمات",
        cookies: "سیاست کوکی",
        rights: "تمام حقوق محفوظ است."
      },
      demo: {
        title: "دمو AutoJobPilot",
        subtitle: "ببینید اتوماسیون مبتنی بر هوش مصنوعی ما چگونه کار می‌کند",
        close: "بستن"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
