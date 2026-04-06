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
            link: "https://www.notion.so/AI-Chat-Assistant-ef2fb7542ffa431c9fc2060005b9494a?source=copy_link"
        },
        {
            id: "image",
            name: "AI Image Generator",
            description: "Create stunning images from text prompts. DALL-E & Stable Diffusion models available.",
            icon: "fas fa-image",
            image: "assets/images/image-cover.svg",
            tags: ["DALL-E", "SD"],
            featured: false,
            link: "https://www.notion.so/AI-Image-Generator-4ce2ca010f5d4c6cbeaa1d48fb6355bb?source=copy_link"
        },
        {
            id: "code",
            name: "AI Code Generator",
            description: "Generate, debug, and refactor code in 50+ languages with AI-powered assistance.",
            icon: "fas fa-code",
            image: "assets/images/code-cover.svg",
            tags: ["Multi-Lang", "Free"],
            featured: false,
            link: "https://scarlet-spark-844.notion.site/AI-Code-Generator-3a7f809daa22495bbe9cc7b1c90154a7"
        },
        {
            id: "writer",
            name: "AI Content Writer",
            description: "SEO-optimized blog posts, marketing copy, and social media content in seconds.",
            icon: "fas fa-pen-fancy",
            image: "assets/images/writer-cover.svg",
            tags: ["SEO", "Marketing"],
            featured: false,
            link: "https://scarlet-spark-844.notion.site/AI-Content-Writer-36ab6fa6a9f64f20bc57ff54d8740729"
        },
        {
            id: "translate",
            name: "AI Translator",
            description: "Translate text across 100+ languages with context-aware AI translation engine.",
            icon: "fas fa-language",
            image: "assets/images/translate-cover.svg",
            tags: ["100+ Languages"],
            featured: false,
            link: "https://scarlet-spark-844.notion.site/AI-Translator-fa7cad1a3ce945009237d8d80d0411ac"
        },
        {
            id: "speech",
            name: "Speech to Text",
            description: "Convert audio to text with high accuracy using Whisper-based AI transcription.",
            icon: "fas fa-microphone",
            image: "assets/images/speech-cover.svg",
            tags: ["Whisper", "Free"],
            featured: false,
            link: "https://scarlet-spark-844.notion.site/Speech-to-Text-6d3f89b038d84820a5246e3dd934d21b?source"
        }
    ],

    freeTools: [
        { name: "JSON Formatter", icon: "fas fa-exchange-alt", link: "https://www.notion.so/JSON-Formatter-6ad11f8bdb14459f983f9492b7a50cf4?pvs=24" },
        { name: "Hash Generator", icon: "fas fa-lock", link: "https://www.notion.so/Hash-Generator-d28bb7d28dd34e97b463d8dfca8364a0?pvs=24" },
        { name: "Code Minifier", icon: "fas fa-compress-arrows-alt", link: "https://scarlet-spark-844.notion.site/Code-Minifier-a267ea91ce8543d88bc11dedc17250ed" },
        { name: "Color Converter", icon: "fas fa-palette", link: "https://scarlet-spark-844.notion.site/Color-Converter-89e5f879b07b40b19815f076dff1f3ab" },
        { name: "Regex Tester", icon: "fas fa-file-code", link: "https://scarlet-spark-844.notion.site/Regex-Tester-a0992fc151cd43399856621c71f11566" },
        { name: "UUID Generator", icon: "fas fa-key", link: "https://scarlet-spark-844.notion.site/UUID-Generator-7eb8d7a7801c4125aec36d90c8b38459" },
        { name: "JWT Decoder", icon: "fas fa-shield-alt", link: "https://scarlet-spark-844.notion.site/JWT-Decoder-cacd3f37b08e4deba52cd1d20606e080" },
        { name: "SQL Formatter", icon: "fas fa-database", link: "https://scarlet-spark-844.notion.site/SQL-Formatter-fef19ff4d9fa4e49adfaae279a4dd741" },
        { name: "Timestamp Converter", icon: "fas fa-clock", link: "https://scarlet-spark-844.notion.site/Timestamp-Converter-2e05333ebe35400380f0db7e8e5ddd10" },
        { name: "Base64 Encode/Decode", icon: "fas fa-font", link: "https://scarlet-spark-844.notion.site/Base64-Encode-Decode-80ba648aedd946c4907978f949148b67" },
        { name: "Password Generator", icon: "fas fa-random", link: "https://scarlet-spark-844.notion.site/Password-Generator-d7640907bda54cb88f71ae616705fa47" },
        { name: "Markdown Preview", icon: "fas fa-file-alt", link: "https://scarlet-spark-844.notion.site/Markdown-Preview-890ddedad0e64b60be4040f2ace993fd" }
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

    premiumTools: [
        {
            name: "n8n Workflow Collection",
            icon: "fas fa-project-diagram",
            description: "A curated collection of powerful n8n automation workflows to supercharge your productivity.",
            tags: ["AI", "Tools"],
            badge: "Premium",
            link: "https://www.notion.so/n8n-Workflow-Collection-331d9ea4dbbe803787ece05a97927886?v=59f16d0d4acb4000bbe53d2c939d93f1&source=copy_link"
        },
        {
            name: "Cheapest Proxy $1/GB",
            icon: "fas fa-shield-alt",
            description: "Premium proxy service at unbeatable prices — just $1 per GB. Reliable, fast & affordable.",
            tags: ["Web", "Traffic Tools"],
            badge: "Premium",
            link: "https://www.notion.so/Cheapest-Proxy-1-1GB-337d9ea4dbbe802da7b8f4ad1f60d625?source=copy_link"
        },
        {
            name: "Perplexity AI",
            icon: "fas fa-search",
            description: "AI-powered search engine that delivers accurate, real-time answers with cited sources.",
            tags: ["AI", "Search"],
            badge: "Premium",
            link: "https://www.notion.so/Perplexity-AI-33ad9ea4dbbe808b8da7daf52020f5a2?source=copy_link"
        },
        {
            name: "Midjourney",
            icon: "fas fa-paint-brush",
            description: "Generate stunning, high-quality images from text prompts with the leading AI art generator.",
            tags: ["AI", "Image"],
            badge: "Premium",
            link: "https://www.notion.so/Midjourney-33ad9ea4dbbe805aa7dffedd75a50cbe?source=copy_link"
        },
        {
            name: "Runway ML",
            icon: "fas fa-film",
            description: "AI-powered video generation and editing tools for creators — text-to-video, inpainting & more.",
            tags: ["AI", "Video"],
            badge: "Premium",
            link: "https://www.notion.so/Runway-ML-33ad9ea4dbbe8016ac34c1dbe6eafc76?source=copy_link"
        },
        {
            name: "OpenAI API",
            icon: "fas fa-brain",
            description: "Access GPT-4, DALL-E, Whisper and more through OpenAI's powerful developer API platform.",
            tags: ["AI", "API"],
            badge: "Premium",
            link: "https://www.notion.so/OpenAI-API-33ad9ea4dbbe80ab9490ea025bf5dbd6?source=copy_link"
        },
        {
            name: "RapidAPI",
            icon: "fas fa-plug",
            description: "Discover and connect to thousands of APIs — the world's largest API marketplace for developers.",
            tags: ["API", "Dev"],
            badge: "Premium",
            link: "https://www.notion.so/RapidAPI-33ad9ea4dbbe80cc8576fca50d374336?source=copy_link"
        },
        {
            name: "Vercel",
            icon: "fas fa-rocket",
            description: "Deploy frontend apps instantly with Vercel — the platform for modern web development.",
            tags: ["Hosting", "Dev"],
            badge: "Premium",
            link: "https://www.notion.so/Vercel-33ad9ea4dbbe8060bfe0ccce183a9e2f?source=copy_link"
        }
    ],

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
