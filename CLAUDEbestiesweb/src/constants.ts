import type { FeatureCategory, PricingTier, Step, Testimonial, FaqItem, LogoOption } from './types';

export const LOGO_OPTIONS: LogoOption[] = [
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/rainbow.jpg?alt=media&token=214acbc9-b0d1-4fd4-a9f8-ff84bc2e49bf',
        alt: 'Rainbow and clouds logo'
    },
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/handshake.jpg?alt=media&token=de8e3bcb-9a6d-4e58-9108-e74d1e42040c',
        alt: 'Handshake logo'
    },
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/infinity.jpg?alt=media&token=d511707d-7f88-4051-9bd7-4dfed6104121',
        alt: 'Infinity symbol logo'
    },
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/friends.jpg?alt=media&token=a1e860db-97e5-4a80-8599-f4dc42a0d618',
        alt: 'Two besties with heart logo'
    },
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/doubleb.jpg.jpg?alt=media&token=b1073219-ea92-4a15-9dd5-8802ac111203',
        alt: 'BB letters logo'
    }
];

export const FEATURES_DATA: FeatureCategory[] = [
    {
        title: "CORE BESTIES FEATURES",
        emoji: "💕",
        items: [
            { icon: 'timer', title: 'Check-In Timers', description: "Set a quick check-in timer so your besties know when to expect you're safe." },
            { icon: 'notifications_off', title: "Only Alerts If You're NOT Safe", description: "No 'I got home' messages. You only tap one button: \"I'm Safe.\" If you don't, your besties get notified." },
            { icon: 'sms', title: 'Alerts Through Messenger & WhatsApp (Free)', description: "Your friends don't need the app. They get a simple message through platforms everyone already uses." },
            { icon: 'paid', title: 'SMS Alerts (Paid Tier)', description: "For friends not on Messenger or WhatsApp, you can enable SMS alerts to cover telecommunication costs." },
            { icon: 'cloud_off', title: 'Works Even If Your Phone Is Off', description: "The check-in is sent from the cloud, so besties are alerted even if your phone dies, loses reception, or gets lost." },
            { icon: 'group_add', title: 'Add Your Besties', description: "Choose your emergency support circle. Alerts go to all of them." },
            { icon: 'event_note', title: 'Optional Meeting Details', description: "Include where you went and who you're meeting. This is only sent if you miss your check-in." },
            { icon: 'touch_app', title: "One-Tap \"I'm Safe\"", description: "Tap once when things are all good. That's it." }
        ]
    },
    {
        title: "FRIENDSHIP FEATURES",
        emoji: "👯‍♀️",
        items: [
            { icon: 'favorite', title: 'Bestie Circles', description: "Add the people who look after you. They'll automatically be contacted if anything feels off." },
            { icon: 'history', title: 'Check-In History', description: "A simple list of your past timers so you can keep track." },
            { icon: 'dashboard', title: 'Bestie Dashboard', description: "See the timers you've set and the people responsible for checking on you." }
        ]
    },
    {
        title: "NIGHT OUT FEATURES",
        emoji: "🌙",
        items: [
            { icon: 'celebration', title: "Girls' Night Check-Ins", description: "Hopping between bars or clubs? Keep a simple check-in running so your girls know you're good." },
            { icon: 'directions_walk', title: 'Walk-Me-Home Timers', description: "Short timers you set while walking to your car, train, Uber, or home." }
        ]
    },
    {
        title: "SAFETY FEATURES",
        emoji: "❤️",
        items: [
            { icon: 'location_on', title: 'Emergency Location Sharing', description: "Your location is only sent to friends if you miss your check-in." },
            { icon: 'more_time', title: 'Add Extra Time', description: "Running late? Extend your timer in one tap." },
            { icon: 'groups', title: 'Multi-Bestie Alerts', description: "If one bestie doesn't respond, the message goes to everyone you've selected." }
        ]
    }
];

export const PRICING_DATA: PricingTier[] = [
    {
        title: "FREE TIER (Forever)",
        subtitle: "All the core features you need to stay safe.",
        icon: 'favorite',
        highlight: false,
        features: [
            "Unlimited Besties", 
            "Messenger alerts", 
            "WhatsApp alerts", 
            "\"I'm Safe\" button",
            "Check-in timers", 
            "Meeting details", 
            "Check-in history", 
            "Walk-me-home timers",
            "Girls' Night timers"
        ],
        footer: "Completely free. Forever."
    },
    {
        title: "BESTIES+ (Paid)",
        subtitle: "You only pay if you want SMS alerts.",
        icon: '💘',
        highlight: true,
        features: [
            "SMS alerts to any mobile number", 
            "Faster delivery", 
            "Higher reliability for non-app users", 
            "Helps fund backend costs"
        ],
        footer: "No subscription needed unless you want SMS."
    }
];

export const HOW_IT_WORKS_DATA: Step[] = [
    { title: "Set a check-in time", description: "Tell the app when you expect to be safe." },
    { title: "Add the friends who'll check on you", description: "Messenger, WhatsApp, or SMS." },
    { title: "Live your life", description: "Go to your date, event, meetup, appointment." },
    { title: "Tap \"I'm Safe\"", description: "If everything is good." },
    { title: "No tap = your besties get alerted", description: "Simple. Automatic. Real support." }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    { quote: "Me and my girls literally use this every time one of us goes on a date.", author: "Steph" },
    { quote: "Besties does what we've been doing manually for years.", author: "Chloe" },
    { quote: "No more guilt texts — if I forget to answer, the app looks after me.", author: "Lily" },
    { quote: "Such a safe, comforting idea.", author: "Anna" }
];

export const FAQ_DATA: FaqItem[] = [
    { question: "Do my friends need the app?", answer: "No — they get messages in Messenger, WhatsApp, or SMS." },
    { question: "Does it track me?", answer: "Only if you miss your check-in. Otherwise no location is stored." },
    { question: "Can I use it for dates?", answer: "Absolutely — it's perfect for meeting new people." },
    { question: "What happens if I forget to tap \"I'm Safe\"?", answer: "Your besties get a message automatically." }
];