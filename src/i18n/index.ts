
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
        login: "Login",
        admin: "Admin"
      },
      hero: {
        title: "AI-Powered Job Application",
        titleAccent: "Automation Platform",
        subtitle: "Apply to hundreds of jobs automatically while you sleep - from LinkedIn to StepStone",
        startButton: "Start Auto-Applying",
        watchDemo: "Watch Demo"
      },
      features: {
        title: "Complete Automation Suite",
        telegramBot: {
          title: "Telegram Bot Assistant",
          description: "Collect all application data through our smart Telegram bot interface."
        },
        aiCoverLetter: {
          title: "AI Cover Letter Generator",
          description: "Generate DIN 5008 compliant cover letters using ChatGPT and Gemini."
        },
        automation: {
          title: "Auto-Apply to Jobs",
          description: "Automatically submit applications to StepStone, LinkedIn, Xing, and more."
        },
        analytics: {
          title: "Analytics & Reports",
          description: "Track applications, monitor success rates, and receive daily reports."
        }
      },
      admin: {
        title: "Admin Dashboard",
        subtitle: "Monitor system performance and user analytics",
        stats: {
          totalUsers: "Total Users",
          coverLetters: "Cover Letters Generated",
          applications: "Applications Sent",
          tokenUsage: "Token Usage",
          successRate: "Success Rate"
        }
      },
      telegram: {
        title: "Telegram Bot Setup",
        subtitle: "Configure your Telegram bot integration",
        status: "Bot Status",
        token: "Bot Token",
        webhook: "Webhook URL",
        commands: "Available Commands"
      },
      automation: {
        title: "Job Platform Settings",
        subtitle: "Configure credentials for automatic job applications",
        platforms: {
          linkedin: "LinkedIn",
          stepstone: "StepStone",
          xing: "Xing",
          irantalent: "IranTalent"
        }
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
        login: "Anmelden",
        admin: "Admin"
      },
      hero: {
        title: "KI-gestützte Stellenbewerbung",
        titleAccent: "Automatisierungsplattform",
        subtitle: "Bewerben Sie sich automatisch auf Hunderte von Jobs während Sie schlafen - von LinkedIn bis StepStone",
        startButton: "Auto-Bewerbung starten",
        watchDemo: "Demo ansehen"
      },
      features: {
        title: "Komplette Automatisierungs-Suite",
        telegramBot: {
          title: "Telegram Bot Assistent",
          description: "Sammeln Sie alle Bewerbungsdaten über unsere intelligente Telegram Bot-Schnittstelle."
        },
        aiCoverLetter: {
          title: "KI Anschreiben Generator",
          description: "Erstellen Sie DIN 5008 konforme Anschreiben mit ChatGPT und Gemini."
        },
        automation: {
          title: "Auto-Bewerbung",
          description: "Automatisches Einreichen von Bewerbungen bei StepStone, LinkedIn, Xing und mehr."
        },
        analytics: {
          title: "Analytics & Berichte",
          description: "Verfolgen Sie Bewerbungen, überwachen Sie Erfolgsraten und erhalten Sie tägliche Berichte."
        }
      },
      admin: {
        title: "Admin Dashboard",
        subtitle: "Systemleistung und Benutzeranalysen überwachen",
        stats: {
          totalUsers: "Gesamtnutzer",
          coverLetters: "Generierte Anschreiben",
          applications: "Gesendete Bewerbungen",
          tokenUsage: "Token-Verbrauch",
          successRate: "Erfolgsrate"
        }
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
        login: "ورود",
        admin: "مدیریت"
      },
      hero: {
        title: "پلتفرم درخواست شغل",
        titleAccent: "مبتنی بر هوش مصنوعی",
        subtitle: "در خواب به صدها شغل درخواست دهید - از LinkedIn تا StepStone",
        startButton: "شروع درخواست خودکار",
        watchDemo: "مشاهده دمو"
      },
      features: {
        title: "مجموعه کامل اتوماسیون",
        telegramBot: {
          title: "دستیار ربات تلگرام",
          description: "جمع‌آوری تمام داده‌های درخواست از طریق رابط هوشمند ربات تلگرام ما."
        },
        aiCoverLetter: {
          title: "تولیدکننده نامه انگیزشی هوشمند",
          description: "تولید نامه‌های انگیزشی مطابق با استاندارد DIN 5008 با استفاده از ChatGPT و Gemini."
        },
        automation: {
          title: "درخواست خودکار شغل",
          description: "ارسال خودکار درخواست‌ها به StepStone، LinkedIn، Xing و بیشتر."
        },
        analytics: {
          title: "تحلیل و گزارش",
          description: "پیگیری درخواست‌ها، نظارت بر نرخ موفقیت و دریافت گزارش‌های روزانه."
        }
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
