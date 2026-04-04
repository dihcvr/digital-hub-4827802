var DB = {
    site: {
        name: "AI Digital Hub",
        tagline: "Your All-in-One AI Assistant for Everyday Tasks.",
        description: "Write, create, translate, and more — powered by AI. Simple tools that save you time.",
        stats: [
            { value: "50+", label: "AI Tools" },
            { value: "100%", label: "Free" },
            { value: "10K+", label: "Users" }
        ]
    },

    aiTools: [
        {
            id: "chat",
            name: "AI Chat Assistant",
            description: "Advanced conversational AI powered by GPT-4. Ask anything, get instant intelligent responses.",
            icon: "fas fa-robot",
            image: "assets/images/chat-cover.svg",
            tags: ["GPT-4", "Free"],
            featured: true,
            badge: "Popular",
            link: "https://chat.openai.com/"
        },
        {
            id: "image",
            name: "AI Image Generator",
            description: "Create stunning images from text prompts. DALL-E & Stable Diffusion models available.",
            icon: "fas fa-image",
            image: "assets/images/image-cover.svg",
            tags: ["DALL-E", "SD"],
            featured: false,
            link: "https://www.bing.com/images/create"
        },
        {
            id: "code",
            name: "AI Code Generator",
            description: "Generate, debug, and refactor code in 50+ languages with AI-powered assistance.",
            icon: "fas fa-code",
            image: "assets/images/code-cover.svg",
            tags: ["Multi-Lang", "Free"],
            featured: false,
            link: "https://github.com/features/copilot"
        },
        {
            id: "writer",
            name: "AI Content Writer",
            description: "SEO-optimized blog posts, marketing copy, and social media content in seconds.",
            icon: "fas fa-pen-fancy",
            image: "assets/images/writer-cover.svg",
            tags: ["SEO", "Marketing"],
            featured: false,
            link: "https://www.copy.ai/"
        },
        {
            id: "translate",
            name: "AI Translator",
            description: "Translate text across 100+ languages with context-aware AI translation engine.",
            icon: "fas fa-language",
            image: "assets/images/translate-cover.svg",
            tags: ["100+ Languages"],
            featured: false,
            link: "https://www.deepl.com/translator"
        },
        {
            id: "speech",
            name: "Speech to Text",
            description: "Convert audio to text with high accuracy using Whisper-based AI transcription.",
            icon: "fas fa-microphone",
            image: "assets/images/speech-cover.svg",
            tags: ["Whisper", "Free"],
            featured: false,
            link: "https://huggingface.co/spaces/openai/whisper"
        }
    ],

    freeTools: [
        { name: "JSON Formatter", icon: "fas fa-exchange-alt", link: "https://jsonformatter.org/" },
        { name: "Hash Generator", icon: "fas fa-lock", link: "https://emn178.github.io/online-tools/sha256.html" },
        { name: "Code Minifier", icon: "fas fa-compress-arrows-alt", link: "https://www.toptal.com/developers/javascript-minifier" },
        { name: "Color Converter", icon: "fas fa-palette", link: "https://colordesigner.io/convert/hextorgb" },
        { name: "Regex Tester", icon: "fas fa-file-code", link: "https://regex101.com/" },
        { name: "UUID Generator", icon: "fas fa-key", link: "https://www.uuidgenerator.net/" },
        { name: "JWT Decoder", icon: "fas fa-shield-alt", link: "https://jwt.io/" },
        { name: "SQL Formatter", icon: "fas fa-database", link: "https://sqlformat.org/" },
        { name: "Timestamp Converter", icon: "fas fa-clock", link: "https://www.epochconverter.com/" },
        { name: "Base64 Encode/Decode", icon: "fas fa-font", link: "https://www.base64decode.org/" },
        { name: "Password Generator", icon: "fas fa-random", link: "https://passwordsgenerator.net/" },
        { name: "Markdown Preview", icon: "fas fa-file-alt", link: "https://markdownlivepreview.com/" }
    ],

    proxyHighlight: {
        sectionLabel: "Best Proxy Deal",
        sectionIcon: "fas fa-bolt",
        title: "DataImpulse — Premium Proxies",
        subtitle: "90M+ residential, datacenter & mobile IPs across 195 countries. Pay-as-you-go with no expiration.",
        image: "assets/images/dataimpulse-cover.png",
        logo: "https://dataimpulse.com/wp-content/uploads/2023/07/logo-1.svg",
        priceFrom: "From",
        priceAmount: "$1",
        pricePeriod: "/ GB",
        badges: [
            { label: "Best Deal", icon: "fas fa-fire", type: "hot" },
            { label: "99.9% Uptime", icon: "fas fa-check-circle", type: "check" }
        ],
        cardTitle: "DataImpulse — Reliable & Affordable Proxies",
        description: "Access 90M+ IPs in 195 countries with residential, datacenter, mobile and premium residential proxies. Pay only for what you use — no subscriptions, no expiration. Trusted by Samsung, Amazon & Adobe.",
        features: [
            "90M+ IPs in 195 countries",
            "Pay-as-you-go, no expiration",
            "Residential, Datacenter & Mobile",
            "24/7 human support & 99.9% uptime"
        ],
        primaryBtn: { label: "Get Started — $1/GB", icon: "fas fa-rocket", link: "https://dataimpulse.com/?aff=YOUR_AFFILIATE_ID" },
        secondaryBtn: { label: "View Plans", icon: "fas fa-tags", link: "https://dataimpulse.com/pricing/?aff=YOUR_AFFILIATE_ID" }
    },

    apis: [
        {
            name: "Chat Completions API",
            method: "POST",
            endpoint: "/v1/chat/completions",
            description: "Multi-model chat API supporting GPT-4, Claude, Gemini and more. Stream or batch responses.",
            meta: [
                { icon: "fas fa-bolt", label: "Low Latency" },
                { icon: "fas fa-infinity", label: "Free Tier" }
            ],
            link: "#"
        },
        {
            name: "Image Generation API",
            method: "POST",
            endpoint: "/v1/images/generate",
            description: "Generate, edit, and upscale images via API. Supports DALL-E 3, SDXL, and Midjourney models.",
            meta: [
                { icon: "fas fa-image", label: "HD Output" },
                { icon: "fas fa-infinity", label: "Free Tier" }
            ],
            link: "#"
        },
        {
            name: "Speech-to-Text API",
            method: "POST",
            endpoint: "/v1/audio/transcribe",
            description: "Accurate audio transcription powered by Whisper. Supports 50+ languages and file formats.",
            meta: [
                { icon: "fas fa-microphone", label: "Whisper" },
                { icon: "fas fa-infinity", label: "Free Tier" }
            ],
            link: "#"
        },
        {
            name: "Embeddings API",
            method: "GET",
            endpoint: "/v1/embeddings",
            description: "Vector embeddings for semantic search, RAG, and similarity matching. Multiple models supported.",
            meta: [
                { icon: "fas fa-vector-square", label: "1536-dim" },
                { icon: "fas fa-infinity", label: "Free Tier" }
            ],
            link: "#"
        }
    ],

    contact: {
        heading: "Contact Us",
        description: "Have questions or want to collaborate? Reach out to us on your preferred platform.",
        socials: [
            { name: "WhatsApp", icon: "fab fa-whatsapp", url: "https://wa.me/", cssClass: "whatsapp" },
            { name: "Telegram", icon: "fab fa-telegram-plane", url: "https://t.me/", cssClass: "telegram" },
            { name: "Reddit", icon: "fab fa-reddit-alien", url: "https://reddit.com/", cssClass: "reddit" }
        ]
    },

    footer: {
        copyright: "2026 AI Digital Hub. All rights reserved.",
        platformLinks: [
            { name: "AI Tools", href: "#tools" },
            { name: "Free Tools", href: "#free-tools" },
            { name: "APIs", href: "#apis" },
            { name: "Contact", href: "#contact" }
        ],
        resourceLinks: [
            { name: "Documentation", href: "#" },
            { name: "API Reference", href: "#" },
            { name: "Status Page", href: "#" },
            { name: "Changelog", href: "#" }
        ]
    }
};
