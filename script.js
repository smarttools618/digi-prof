/* ============================================
   TOOLS DATA
   ============================================ */
const toolsData = [
    // ===================== WEBSITES =====================

    // --- AI Models ---
    {
        id: 'chatgpt', name: 'ChatGPT',
        mainCat: 'website', subCat: 'ai-model',
        url: 'https://chatgpt.com/',
        shortDesc: 'أشهر نموذج ذكاء اصطناعي للمحادثة وكتابة المحتوى وحل المشكلات من OpenAI.',
        fullDesc: 'ChatGPT هو نموذج ذكاء اصطناعي متقدم من شركة OpenAI، يُعتبر الأشهر عالمياً في مجال المحادثة الذكية. يمكنه مساعدتك في كتابة المقالات، حل المسائل الرياضية، البرمجة، إنشاء خطط الدروس، وأكثر من ذلك.',
        features: ['محادثة ذكية بلغات متعددة بما فيها العربية', 'كتابة المقالات والتقارير والرسائل', 'حل المسائل الرياضية والبرمجية', 'تحليل الصور وملفات PDF', 'إنشاء خطط الدروس والتقييمات']
    },
    {
        id: 'gemini', name: 'Google Gemini',
        mainCat: 'website', subCat: 'ai-model',
        url: 'https://gemini.google.com/',
        shortDesc: 'نموذج جوجل الذكي، ممتاز في البحث المباشر وتحليل المعلومات المرتبطة بالإنترنت.',
        fullDesc: 'Google Gemini هو نموذج الذكاء الاصطناعي المتقدم من جوجل. يتميز بقدرته على البحث في الإنترنت مباشرة وتقديم معلومات محدثة مع مصادر موثوقة. يدعم تحليل الصور والنصوص والملفات.',
        features: ['بحث مباشر في الإنترنت مع مصادر', 'تحليل الصور والفيديوهات', 'التكامل مع خدمات جوجل', 'إنشاء محتوى إبداعي', 'دعم اللغة العربية بشكل ممتاز']
    },
    {
        id: 'claude', name: 'Claude',
        mainCat: 'website', subCat: 'ai-model',
        url: 'https://claude.ai/',
        shortDesc: 'نموذج من Anthropic يتميز بالكتابة البشرية الطبيعية وتحليل ملفات PDF الطويلة.',
        fullDesc: 'Claude هو نموذج ذكاء اصطناعي من شركة Anthropic، يتميز بجودة الكتابة العالية والقدرة على فهم وتحليل المستندات الطويلة. مثالي للبحث الأكاديمي والكتابة المهنية.',
        features: ['كتابة بأسلوب بشري طبيعي', 'تحليل مستندات PDF طويلة (حتى 200 صفحة)', 'دقة عالية في الإجابات', 'ممتاز في الترجمة والبحث الأكاديمي', 'دعم البرمجة بعدة لغات']
    },
    {
        id: 'deepseek', name: 'DeepSeek',
        mainCat: 'website', subCat: 'ai-model',
        url: 'https://chat.deepseek.com/',
        shortDesc: 'نموذج صيني قوي ومفتوح المصدر، ممتاز في البرمجة والرياضيات والتحليل المنطقي.',
        fullDesc: 'DeepSeek هو نموذج ذكاء اصطناعي صيني مفتوح المصدر. يتفوق في البرمجة والرياضيات والتحليل المنطقي والكتابة. أداة قوية للمعلمين والطلاب.',
        features: ['تفوق في البرمجة والرياضيات', 'تحليل منطقي دقيق', 'كتابة أكاديمية ومهنية', 'مفتوح المصدر وشفاف', 'سريع في الاستجابة']
    },
    {
        id: 'copilot', name: 'Microsoft Copilot',
        mainCat: 'website', subCat: 'ai-model',
        url: 'https://copilot.microsoft.com/',
        shortDesc: 'المساعد الذكي من مايكروسوفت، مدمج مع Bing ويدعم توليد الصور والبحث الذكي.',
        fullDesc: 'Microsoft Copilot هو المساعد الذكي من مايكروسوفت، مدمج مع محرك بحث Bing. يدعم توليد الصور ويتكامل مع تطبيقات Office للمساعدة في العمل اليومي.',
        features: ['بحث ذكي مع محرك Bing', 'توليد صور بتقنية DALL-E', 'تكامل مع تطبيقات Office', 'تلخيص المستندات والمحتوى', 'دعم عدة لغات']
    },
    {
        id: 'perplexity', name: 'Perplexity AI',
        mainCat: 'website', subCat: 'ai-model',
        url: 'https://www.perplexity.ai/',
        shortDesc: 'محرك بحث ذكي يقدم إجابات دقيقة مع مصادر موثوقة من الإنترنت مباشرة.',
        fullDesc: 'Perplexity AI هو محرك بحث ذكي يجمع بين قوة الذكاء الاصطناعي والبحث في الإنترنت. يقدم إجابات دقيقة مع مصادر موثوقة، مما يجعله مثالياً للبحث الأكاديمي.',
        features: ['بحث ذكي مع مصادر موثوقة', 'إجابات دقيقة ومحدثة', 'دعم البحث الأكاديمي', 'تلخيص المحتوى تلقائياً', 'واجهة نظيفة وسهلة الاستخدام']
    },

    // --- Image Generation ---
    {
        id: 'grok-image', name: 'Grok — توليد صور',
        mainCat: 'website', subCat: 'image-gen',
        url: 'https://grok.com/',
        shortDesc: 'أداة من xAI (تويتر/X) لتوليد صور عالية الجودة بالذكاء الاصطناعي.',
        fullDesc: 'Grok من xAI يوفر ميزة توليد صور بالذكاء الاصطناعي بجودة عالية. يمكنك إنشاء صور من وصف نصي بأساليب فنية متنوعة لاستخدامها في المحتوى التعليمي والإبداعي.',
        features: ['توليد صور بجودة عالية', 'أساليب فنية متعددة', 'وصف نصي بالعربية والإنجليزية', 'مناسب للمحتوى التعليمي', 'سهل الاستخدام']
    },
    {
        id: 'nano-banana', name: 'Nano Banana Pro',
        mainCat: 'website', subCat: 'image-gen',
        url: 'https://gemini.google.com/',
        shortDesc: 'محرر صور ذكي يعمل بتقنية Gemini لتوليد وتعديل وتحسين الصور بجودة عالية.',
        fullDesc: 'Nano Banana Pro هو محرر صور ذكي يعمل بتقنية Google Gemini لتوليد وتعديل الصور. يوفر أدوات متقدمة لإزالة الخلفيات، تبديل الوجوه، نقل الأنماط، والمزيد مع دقة عالية تصل إلى 4K.',
        features: ['توليد صور بالذكاء الاصطناعي', 'تعديل الصور بدقة عالية حتى 4K', 'إزالة الخلفيات تلقائياً', 'نقل الأنماط الفنية', 'يعمل بتقنية Google Gemini']
    },
    {
        id: 'google-flow-img', name: 'Google Flow — صور',
        mainCat: 'website', subCat: 'image-gen',
        url: 'https://labs.google/fx/tools/flow',
        shortDesc: 'أداة من Google Labs لتوليد الصور المبتكرة بأساليب متعددة.',
        fullDesc: 'Google Flow هي مساحة تجريبية من مختبرات جوجل مخصصة لتوليد الصور والتعديل عليها بطرق إبداعية متطورة.',
        features: ['توليد صور إبداعية', 'تقنيات تجريبية من جوجل', 'واجهة مستخدم مرنة']
    },

    // --- Video Generation ---
    {
        id: 'grok-video', name: 'Grok — توليد فيديو',
        mainCat: 'website', subCat: 'video-gen',
        url: 'https://grok.com/',
        shortDesc: 'أداة من xAI لتوليد فيديوهات قصيرة بالذكاء الاصطناعي من وصف نصي.',
        fullDesc: 'Grok من xAI يوفر ميزة توليد فيديوهات قصيرة بالذكاء الاصطناعي. يمكنك إنشاء فيديوهات من وصف نصي بجودة ممتازة لاستخدامها في المحتوى التعليمي والإبداعي.',
        features: ['توليد فيديو من نص', 'جودة ممتازة للفيديوهات', 'مناسب للمحتوى التعليمي', 'سهل الاستخدام', 'أساليب متعددة']
    },
    {
        id: 'veo-3', name: 'Veo 3',
        mainCat: 'website', subCat: 'video-gen',
        url: 'https://business.gemini.google/',
        shortDesc: 'نموذج من جوجل لتوليد وتصميم الفيديوهات المتقدمة للمؤسسات.',
        fullDesc: 'Veo 3 هو نظام متطور لتوليد الفيديوهات من جوجل، يوفر قدرات مذهلة لإنشاء فيديوهات عالية الجودة تستخدم في المجالات المتعددة.',
        features: ['توليد فيديوهات عالية الدقة', 'يعتمد على تقنيات جوجل', 'مفيد للشركات وصناع المحتوى']
    },
    {
        id: 'google-flow-vid', name: 'Google Flow — فيديو',
        mainCat: 'website', subCat: 'video-gen',
        url: 'https://labs.google/fx/tools/flow',
        shortDesc: 'أداة من Google Labs تتيح توليد الفيديوهات وإنشاء محتوى بصري مبتكر.',
        fullDesc: 'Google Flow توفر ميزات توليد الفيديو التجريبية ضمن Google Labs لتقديم إمكانيات جديدة في عالم إنشاء الفيديو.',
        features: ['توليد فيديوهات قصيرة', 'ميزات تجريبية من جوجل', 'حلول مرئية مبتكرة']
    },

    // --- Video Editing ---
    {
        id: 'submagic', name: 'Submagic',
        mainCat: 'website', subCat: 'video-editing',
        url: 'https://www.submagic.co/',
        shortDesc: 'يحول أي فيديو طويل إلى مقاطع قصيرة (Reels/Shorts) مع ترجمة وعناوين جذابة.',
        fullDesc: 'Submagic هو أداة ذكية تحول الفيديوهات الطويلة إلى مقاطع قصيرة احترافية (Reels/Shorts/TikTok) تلقائياً. يضيف الترجمة النصية والعناوين الجذابة بتصميم احترافي.',
        features: ['تحويل فيديوهات طويلة إلى مقاطع قصيرة', 'إضافة ترجمة نصية تلقائية', 'عناوين جذابة بتصميم احترافي', 'تصدير لـ TikTok و Instagram و YouTube', 'تعديل سريع وسهل']
    },

    // --- Speech to Text ---
    {
        id: 'google-ai-studio-stt', name: 'Google AI Studio',
        mainCat: 'website', subCat: 'speech-to-text',
        url: 'https://aistudio.google.com/',
        shortDesc: 'منصة جوجل المتقدمة لتحويل الكلام إلى نص باستخدام نماذج Gemini بدقة عالية.',
        fullDesc: 'Google AI Studio توفر إمكانيات متقدمة لتحويل الكلام إلى نص باستخدام نماذج Gemini. يمكنك رفع ملفات صوتية أو فيديو والحصول على نص مكتوب بدقة عالية مع دعم اللغة العربية.',
        features: ['تحويل صوت إلى نص بدقة عالية', 'دعم اللغة العربية والإنجليزية', 'رفع ملفات صوتية وفيديو', 'يعمل بنماذج Gemini المتقدمة', 'واجهة سهلة الاستخدام']
    },

    // --- Text to Speech ---
    {
        id: 'google-ai-studio-tts', name: 'Google AI Studio',
        mainCat: 'website', subCat: 'text-to-speech',
        url: 'https://aistudio.google.com/',
        shortDesc: 'منصة جوجل لتحويل النصوص إلى كلام طبيعي بأصوات متعددة ولغات مختلفة.',
        fullDesc: 'Google AI Studio توفر تحويل النصوص إلى كلام بأصوات طبيعية باستخدام نماذج Gemini. تدعم لغات متعددة بما فيها العربية مع إمكانية التحكم في نبرة الصوت وسرعته.',
        features: ['تحويل نص إلى كلام طبيعي', 'أصوات متعددة وطبيعية', 'دعم اللغة العربية', 'التحكم في النبرة والسرعة', 'يعمل بنماذج Gemini']
    },
    {
        id: 'elevenlabs', name: 'ElevenLabs',
        mainCat: 'website', subCat: 'text-to-speech',
        url: 'https://elevenlabs.io/',
        shortDesc: 'منصة متقدمة لتحويل النص إلى كلام بأصوات واقعية جداً مع استنساخ الصوت.',
        fullDesc: 'ElevenLabs هي منصة رائدة في تحويل النص إلى كلام بأصوات واقعية للغاية. تتميز بتقنية استنساخ الصوت وإمكانية إنشاء أصوات مخصصة. مثالية لإنشاء محتوى صوتي تعليمي احترافي.',
        features: ['أصوات واقعية جداً', 'استنساخ الصوت من عينة قصيرة', 'دعم لغات متعددة بما فيها العربية', 'إنشاء أصوات مخصصة', 'مثالي للمحتوى التعليمي']
    },

    // --- Audio Enhancement ---
    {
        id: 'adobe-podcast', name: 'Adobe Podcast',
        mainCat: 'website', subCat: 'audio',
        url: 'https://podcast.adobe.com/',
        shortDesc: 'أداة من أدوبي لتحسين جودة الصوت وإزالة الضوضاء من التسجيلات الصوتية.',
        fullDesc: 'Adobe Podcast هي أداة مجانية من أدوبي تستخدم الذكاء الاصطناعي لتحسين جودة الصوت بشكل كبير. تزيل الضوضاء والصدى من التسجيلات وتجعل الصوت يبدو احترافياً كأنه مسجل في استوديو.',
        features: ['تحسين جودة الصوت بالذكاء الاصطناعي', 'إزالة الضوضاء والصدى', 'جعل الصوت احترافي كالاستوديو', 'سهل الاستخدام — رفع ملف فقط', 'مجاني من أدوبي']
    },

    // --- Education ---
    {
        id: 'magic-school', name: 'Magic School AI',
        mainCat: 'website', subCat: 'education',
        url: 'https://www.magicschool.ai/',
        shortDesc: 'منصة مخصصة للمعلمين لإنشاء أوراق العمل، خطط الدروس، التقييمات والمحتوى التعليمي.',
        fullDesc: 'Magic School AI هي منصة ذكاء اصطناعي مصممة خصيصاً للمعلمين والتربويين. توفر أكثر من 60 أداة متخصصة لإنشاء أوراق العمل (Worksheets)، خطط الدروس، التقييمات، والتقارير. تساعد المعلمين في توفير 7-10 ساعات أسبوعياً.',
        features: ['إنشاء أوراق العمل (Worksheets) لأي مادة', 'أكثر من 60 أداة تعليمية متخصصة', 'إنشاء خطط الدروس والتقييمات', 'توليد تقارير الطلاب والملاحظات', 'دعم التعليم المتمايز حسب مستوى الطالب', 'التكامل مع Google Classroom']
    },
    {
        id: 'notebooklm', name: 'NotebookLM',
        mainCat: 'website', subCat: 'education',
        url: 'https://notebooklm.google.com/',
        shortDesc: 'أداة من جوجل تحول ملاحظاتك وملفات PDF إلى أدلة دراسية تفاعلية وبودكاست.',
        fullDesc: 'NotebookLM من جوجل يحول ملاحظاتك وملفات PDF إلى أدلة دراسية ذكية. يمكنه إنشاء ملخصات تفاعلية وبودكاست صوتي من المحتوى الخاص بك.',
        features: ['تحويل PDF إلى أدلة دراسية', 'إنشاء بودكاست صوتي من المحتوى', 'تلخيص ذكي للمستندات', 'أسئلة واجوبة تفاعلية', 'من جوجل']
    },

    // --- Utility ---
    {
        id: 'canva', name: 'Canva',
        mainCat: 'website', subCat: 'utility',
        url: 'https://www.canva.com/',
        shortDesc: 'منصة التصميم الجرافيكي الأشهر لعمل عروض تقديمية ومنشورات وصور احترافية.',
        fullDesc: 'Canva هي أشهر منصة تصميم جرافيكي في العالم. توفر نسخة مجانية للتعليم مع أدوات ذكاء اصطناعي مثل Magic Write وMagic Studio.',
        features: ['آلاف القوالب الجاهزة', 'عروض تقديمية احترافية', 'تصميم منشورات وبوسترات', 'أدوات ذكاء اصطناعي مدمجة', 'نسخة مجانية للمعلمين والطلاب']
    },
    {
        id: 'ilovepdf', name: 'iLovePDF',
        mainCat: 'website', subCat: 'utility',
        url: 'https://www.ilovepdf.com/',
        shortDesc: 'الأداة الشاملة للتعامل مع ملفات PDF: دمج، تقسيم، ضغط، وتحويل إلى Word.',
        fullDesc: 'iLovePDF هي أداة شاملة للتعامل مع ملفات PDF أونلاين. تدعم دمج الملفات، تقسيمها، ضغطها، وتحويلها إلى Word.',
        features: ['دمج عدة ملفات PDF في ملف واحد', 'تقسيم ملفات PDF الكبيرة', 'ضغط حجم الملفات بدون فقدان الجودة', 'تحويل بين PDF و Word و Excel', 'واجهة سهلة']
    },
    {
        id: 'iloveimg', name: 'iLoveIMG',
        mainCat: 'website', subCat: 'utility',
        url: 'https://www.iloveimg.com/',
        shortDesc: 'أدوات سريعة لتعديل الصور أونلاين: قص، تغيير الحجم، ضغط بدون فقدان الجودة.',
        fullDesc: 'iLoveIMG توفر مجموعة أدوات سريعة لتعديل الصور أونلاين. تشمل تغيير الحجم، القص، الضغط، وتحويل الصيغ.',
        features: ['ضغط الصور بدون فقدان الجودة', 'تغيير حجم الصور بسرعة', 'قص وتعديل الصور', 'تحويل بين صيغ الصور', 'إزالة خلفية الصور']
    },

    // --- Prompt Engineering ---
    {
        id: 'generateprompt', name: 'GeneratePromptAI',
        mainCat: 'website', subCat: 'prompt-eng',
        url: 'https://generateprompt.ai/',
        shortDesc: 'أداة لإنشاء وصياغة الأوامر (Prompts) لتحسين نتائج الذكاء الاصطناعي.',
        fullDesc: 'GeneratePromptAI تتيح لك بناء الأوامر بأسلوب احترافي، مما يضمن أفضل استجابة من نماذج الذكاء الاصطناعي.',
        features: ['هندسة أوامر احترافية', 'قوالب جاهزة', 'تحسين دقة النماذج']
    },

    // --- AI Content Detector ---
    {
        id: 'gptzero', name: 'GPTZero',
        mainCat: 'website', subCat: 'ai-detector',
        url: 'https://gptzero.me/',
        shortDesc: 'أداة ذكية لاكتشاف النصوص المكتوبة بواسطة الذكاء الاصطناعي.',
        fullDesc: 'GPTZero صُممت خصيصاً للمعلمين والمحترفين لاكتشاف وتحليل ما إذا كان النص قد كُتب بواسطة أدوات الذكاء الاصطناعي.',
        features: ['دقة في الكشف', 'تسليط الضوء على النصوص المشكوك فيها', 'مصمم للقطاع التعليمي']
    },
    {
        id: 'zerogpt', name: 'ZeroGPT',
        mainCat: 'website', subCat: 'ai-detector',
        url: 'https://www.zerogpt.com/',
        shortDesc: 'موقع موثوق لاكتشاف المحتوى المولد بالذكاء الاصطناعي بتحديد نسبة مئوية.',
        fullDesc: 'ZeroGPT يحلل النصوص بدقة عالية ويخبرك بنسبة الذكاء الاصطناعي في النص، مناسب للأساتذة والجامعيين.',
        features: ['تحليل فوري وسريع', 'دعم عدة لغات', 'يعطي نسبة مئوية دقيقة']
    },

    // --- Meeting (Websites) ---
    {
        id: 'google-meet', name: 'Google Meet',
        mainCat: 'website', subCat: 'meeting',
        url: 'https://meet.google.com/',
        shortDesc: 'منصة اجتماعات فيديو آمنة وسهلة الاستخدام من جوجل.',
        fullDesc: 'Google Meet خدمة اتصال مجانية توفر فيديو أمن واجتماعات سريعة عبر المتصفح.',
        features: ['لا يحتاج لتثبيت', 'تكامل من خدمات جوجل', 'مشاركة الشاشة بسهولة']
    },
    {
        id: 'freeconferencecall', name: 'FreeConferenceCall',
        mainCat: 'website', subCat: 'meeting',
        url: 'https://www.freeconferencecall.com/',
        shortDesc: 'أداة مجانية تتيح عقد مكالمات صوتية واجتماعات فيديو.',
        fullDesc: 'FreeConferenceCall تقدم اجتماعات مجانية بالكامل مع خيارات لمشاركة الشاشة والتسجيل لعدد كبير من المستخدمين.',
        features: ['مجاني بالكامل', 'تسجيل المكالمات', 'مشاركة الشاشة']
    },
    {
        id: 'zoom-web', name: 'Zoom',
        mainCat: 'website', subCat: 'meeting',
        url: 'https://zoom.us/',
        shortDesc: 'منصة رائدة تتيح الانضمام للاجتماعات وعقدها مباشرة عبر المتصفح.',
        fullDesc: 'Zoom من أشهر برامج عقد الاجتماعات، يمكنك الانضمام والمشاركة في الاجتماعات مباشرة من المتصفح دون الحاجة لتثبيت أي برامج إضافية.',
        features: ['اجتماعات عبر المتصفح', 'مشاركة الشاشة', 'جودة اتصال عالية']
    },

    // --- New General AI ---
    {
        id: 'glm', name: 'GLM',
        mainCat: 'website', subCat: 'ai-model',
        url: 'https://chat.z.ai/',
        shortDesc: 'نموذج ذكاء اصطناعي متقدم للمحادثات.',
        fullDesc: 'GLM أداة ذكاء اصطناعي للمساعدة في الكتابة والمهام التحليلية المتنوعة.',
        features: ['محادثات ذكية', 'تحليل وفهم قوي للنصوص', 'مفيد للبحث']
    },
    {
        id: 'copilot-img', name: 'Microsoft Copilot',
        mainCat: 'website', subCat: 'image-gen',
        url: 'https://copilot.microsoft.com/',
        shortDesc: 'توليد الصور بالذكاء الاصطناعي بواسطة مايكروسوفت بمحرك DALL-E.',
        fullDesc: 'Microsoft Copilot يتيح لك إنشاء صور إبداعية بسهولة من خلال وصف نصي احترافي وبدقة عالية.',
        features: ['جودة عالية للصور', 'دعم اللغة العربية', 'وصول مجاني وسهل']
    },

    // ===================== SOFTWARE =====================
    // --- Video Editing ---
    {
        id: 'clipchamp', name: 'Clipchamp',
        mainCat: 'software', subCat: 'video-editing',
        url: 'https://clipchamp.com/',
        shortDesc: 'محرر فيديو سهل الاستخدام من مايكروسوفت، يأتي مدمجاً في نظام ويندوز.',
        fullDesc: 'Clipchamp هو محرر فيديو مقدم من مايكروسوفت، متاح كتطبيق ويب ومنصة سطح مكتب. يوفر أدوات تحرير فيديو قوية، ميزات تحويل النص إلى كلام، ومكتبة وسائط ضخمة.',
        features: ['تحرير فيديو سهل وسريع', 'قوالب فيديو جاهزة', 'توليد تعليق صوتي بالذكاء الاصطناعي', 'مدمج في أجهزة ويندوز 11']
    },
    {
        id: 'capcut', name: 'CapCut',
        mainCat: 'software', subCat: 'video-editing',
        url: 'https://www.capcut.com/',
        shortDesc: 'برنامج تحرير فيديو قوي ومجاني يناسب صناع المحتوى والمنصات مثل TikTok.',
        fullDesc: 'CapCut هو برنامج مونتاج فيديو شامل يتوفر على جميع المنصات. يوفر انتقالات مبهرة وتأثيرات ذكية، مع فلاتر وملصقات مدمجة وتفريغ تلقائي للخلفية.',
        features: ['مونتاج فيديو احترافي مجاني', 'إزالة خلفية الفيديو بسهولة', 'مكتبة تأثيرات صوتية وحركية', 'مثالي لصناع المحتوى']
    },

    // --- Recording ---
    {
        id: 'obs-studio', name: 'OBS Studio',
        mainCat: 'software', subCat: 'recording',
        url: 'https://obsproject.com/',
        shortDesc: 'البرنامج الأول عالمياً (مفتوح المصدر) لتسجيل الشاشة والبث المباشر باحترافية.',
        fullDesc: 'OBS Studio هو البرنامج الأشهر والأقوى عالمياً لتسجيل الشاشة والبث المباشر. مفتوح المصدر ويوفر أدوات احترافية.',
        features: ['مفتوح المصدر بالكامل', 'تسجيل شاشة بجودة عالية', 'بث مباشر لـ YouTube و Facebook و Twitch', 'مشاهد متعددة وانتقالات سلسة', 'دعم الكاميرا والميكروفون']
    },
    {
        id: 'clevermaths', name: 'CleverMaths',
        mainCat: 'software', subCat: 'whiteboard',
        url: 'https://clevermaths.software.informer.com/',
        shortDesc: 'برنامج سبورة تفاعلية ممتاز لشرح الرياضيات بأدوات هندسية متطورة.',
        fullDesc: 'CleverMaths هو برنامج سبورة تفاعلية متخصص في الرياضيات والعلوم. يوفر أدوات هندسية متطورة لشرح المفاهيم الرياضية بطريقة مرئية وتفاعلية.',
        features: ['أدوات هندسية (مسطرة، منقلة، فرجار)', 'رسم الأشكال الهندسية بدقة', 'دعم الكتابة اليدوية', 'مثالي لشرح الرياضيات والفيزياء', 'واجهة بسيطة']
    },
    {
        id: 'openboard', name: 'OpenBoard',
        mainCat: 'software', subCat: 'whiteboard',
        url: 'https://openboard.ch/',
        shortDesc: 'سبورة بيضاء تفاعلية مفتوحة المصدر للمدارس والجامعات.',
        fullDesc: 'OpenBoard هو برنامج سبورة بيضاء تفاعلية مفتوح المصدر يُستخدم في المدارس والجامعات حول العالم.',
        features: ['مفتوح المصدر', 'سبورة بيضاء تفاعلية كاملة', 'دعم القلم الرقمي واللوح التفاعلي', 'أدوات رسم وكتابة متعددة', 'تصدير الدروس كملفات PDF أو صور']
    },

    // --- Meeting & Remote Control (Software) ---
    {
        id: 'zoom', name: 'Zoom',
        mainCat: 'software', subCat: 'meeting',
        url: 'https://zoom.us/',
        shortDesc: 'برنامج رائد للاجتماعات والمؤتمرات عبر الفيديو.',
        fullDesc: 'Zoom من أشهر برامج عقد الاجتماعات عبر الفيديو، ويتيح مشاركة الشاشة والمحادثات النصية.',
        features: ['اتصال فيديو عالي الجودة', 'مشاركة الشاشة', 'غرف جانبية']
    },
    {
        id: 'anydesk', name: 'AnyDesk',
        mainCat: 'software', subCat: 'remote-control',
        url: 'https://anydesk.com/',
        shortDesc: 'برنامج رائد للتحكم بأجهزة الكمبيوتر عن بعد بسهولة وسرعة.',
        fullDesc: 'AnyDesk للتحكم عن بعد في الحواسيب، يتيح لك الوصول إلى أي كمبيوتر من أي مكان في العالم بسرعة وأمان.',
        features: ['تحكم سريع عن بعد', 'حجم صغير وخفيف', 'آمن ومشفر']
    },

    // ===================== CHROME EXTENSIONS =====================
    {
        id: 'adguard', name: 'AdGuard',
        mainCat: 'extension', subCat: 'privacy',
        url: 'https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg',
        shortDesc: 'إضافة متصفح ممتازة لمنع الإعلانات المزعجة والنوافذ المنبثقة وتسريع التصفح.',
        fullDesc: 'AdGuard هي واحدة من أفضل إضافات حظر الإعلانات لمتصفح Chrome. تمنع الإعلانات المزعجة، النوافذ المنبثقة، وأدوات التتبع.',
        features: ['حظر جميع أنواع الإعلانات', 'منع النوافذ المنبثقة', 'حماية من التتبع والبرمجيات الخبيثة', 'تسريع تحميل صفحات الويب', 'سهلة التثبيت']
    },
    {
        id: 'rtl-toggle', name: 'RTL Toggle',
        mainCat: 'extension', subCat: 'utility-ext',
        url: 'https://chromewebstore.google.com/detail/rtl-toggle/diimdfmlegodnjbcgajllidffehegdbc',
        shortDesc: 'إضافة لتغيير اتجاه أي صفحة ويب (من اليمين لليسار RTL أو العكس) بضغطة زر.',
        fullDesc: 'RTL Toggle هي إضافة بسيطة وفعالة لمتصفح Chrome تتيح تغيير اتجاه أي صفحة ويب بضغطة زر واحدة. مفيدة جداً للمستخدمين العرب.',
        features: ['تبديل اتجاه الصفحة بضغطة واحدة', 'دعم RTL و LTR', 'مفيد للمحتوى العربي', 'خفيفة وسريعة', 'سهلة الاستخدام']
    },

    // --- Screen Capture ---
    {
        id: 'scrolling-screenshot', name: 'Scrolling screenshot tool & screen capture',
        mainCat: 'extension', subCat: 'screen-capture',
        url: 'https://chromewebstore.google.com/detail/scrolling-screenshot-tool/mfpiaehgjbbfednooihadalhehabhcjo',
        shortDesc: 'إضافة لتصوير الشاشة كصور كاملة (ملاحظة: مخصصة لالتقاط الصور فقط).',
        fullDesc: 'أداة Scrolling screenshot tool تتيح لك تصوير الشاشة بالكامل حتى مع التمرير. يرجى الملاحظة أن هذه الأداة مخصصة لالتقاط الصور فقط ولا تدعم الفيديو.',
        features: ['تصوير صفحات الويب كاملة مع التمرير', 'التقاط صور الشاشة بجودة عالية', 'ملاحظة: تدعم التقاط الصور فقط']
    },
    {
        id: 'awesome-screen-recorder', name: 'Awesome Screen Recorder & Screenshot',
        mainCat: 'extension', subCat: 'screen-capture',
        url: 'https://chromewebstore.google.com/detail/awesome-screen-recorder-s/nlipoenfbbikpbjkfpfillcgkoblgpmj',
        shortDesc: 'إضافة شاملة لتصوير الشاشة (ملاحظة: تدعم التقاط كل من الصور وتسجيل الفيديو).',
        fullDesc: 'Awesome Screen Recorder من أقوى الإضافات لتصوير الشاشة وتسجيل الفيديوهات مع إمكانية التعديل والمشاركة السهلة. تدعم الصور والفيديو معاً لتلبية كافة الاحتياجات.',
        features: ['تسجيل فيديو الشاشة باحترافية', 'التقاط صور الشاشة', 'ملاحظة: تدعم الفيديو والصور معاً', 'أدوات تعديل وشرح مدمجة']
    }
];

/* ============================================
   LABELS & CONFIG
   ============================================ */
const mainCatLabels = {
    website: 'مواقع إلكترونية',
    software: 'برامج حاسوب',
    extension: 'إضافات المتصفح'
};

const subCatLabels = {
    'ai-model': 'نماذج الذكاء الاصطناعي',
    'image-gen': 'توليد الصور',
    'video-gen': 'توليد الفيديو',
    'video-editing': 'تعديل ومونتاج الفيديو',
    'speech-to-text': 'تحويل الكلام إلى نص',
    'text-to-speech': 'تحويل النص إلى كلام',
    'audio': 'تحسين الصوت',
    'education': 'أدوات تعليمية',
    'utility': 'أدوات مساعدة',
    'recording': 'تسجيل وبث',
    'whiteboard': 'سبورة تفاعلية',
    'privacy': 'حماية وخصوصية',
    'utility-ext': 'أدوات عامة',
    'remote-control': 'التحكم عن بُعد',
    'meeting': 'الاجتماعات والمؤتمرات',
    'ai-detector': 'كشف محتوى الذكاء الاصطناعي',
    'prompt-eng': 'هندسة الأوامر',
    'screen-capture': 'تصوير الشاشة'
};

const subCatTagClass = {
    'ai-model': 'tag-ai',
    'image-gen': 'tag-image',
    'video-gen': 'tag-video',
    'video-editing': 'tag-video',
    'speech-to-text': 'tag-speech',
    'text-to-speech': 'tag-tts',
    'audio': 'tag-audio',
    'education': 'tag-education',
    'utility': 'tag-utility',
    'recording': 'tag-software',
    'whiteboard': 'tag-software',
    'privacy': 'tag-extension',
    'utility-ext': 'tag-extension',
    'remote-control': 'tag-software',
    'meeting': 'tag-utility',
    'ai-detector': 'tag-ai',
    'prompt-eng': 'tag-ai',
    'screen-capture': 'tag-extension'
};

const subCatsPerMain = {
    website: ['ai-model', 'image-gen', 'video-gen', 'video-editing', 'speech-to-text', 'text-to-speech', 'audio', 'education', 'meeting', 'ai-detector', 'prompt-eng', 'utility'],
    software: ['video-editing', 'recording', 'whiteboard', 'remote-control', 'meeting'],
    extension: ['privacy', 'utility-ext', 'screen-capture']
};

/* ============================================
   STATE
   ============================================ */
let activeMainCat = 'all';
let activeSubCat = 'all';

/* ============================================
   RENDER CARD
   ============================================ */
function createCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-main', tool.mainCat);
    card.setAttribute('data-sub', tool.subCat);
    card.setAttribute('data-id', tool.id);

    card.innerHTML = `
        <div class="card-header">
            <h3 class="tool-name">${tool.name}</h3>
            <span class="tool-tag ${subCatTagClass[tool.subCat] || ''}">${subCatLabels[tool.subCat] || ''}</span>
        </div>
        <p class="tool-desc">${tool.shortDesc}</p>
        <div class="card-actions">
            <button class="btn btn-details" onclick="openModal('${tool.id}')">التفاصيل</button>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn btn-visit">زيارة الموقع</a>
        </div>
    `;
    return card;
}

/* ============================================
   RENDER TOOLS
   ============================================ */
function renderTools() {
    const container = document.getElementById('tools-container');
    container.innerHTML = '';

    let filteredTools = toolsData;

    // Main category filter
    if (activeMainCat !== 'all') {
        filteredTools = toolsData.filter(t => t.mainCat === activeMainCat);
    }

    // Sub category filter
    if (activeSubCat !== 'all') {
        filteredTools = filteredTools.filter(t => t.subCat === activeSubCat);
    }

    // Group by main category then sub
    const grouped = {};
    filteredTools.forEach(t => {
        if (!grouped[t.mainCat]) grouped[t.mainCat] = {};
        if (!grouped[t.mainCat][t.subCat]) grouped[t.mainCat][t.subCat] = [];
        grouped[t.mainCat][t.subCat].push(t);
    });

    const mainOrder = ['website', 'software', 'extension'];

    mainOrder.forEach(mainCat => {
        if (!grouped[mainCat]) return;

        const section = document.createElement('section');
        section.className = 'tools-section';

        let totalInSection = 0;
        Object.values(grouped[mainCat]).forEach(arr => totalInSection += arr.length);

        section.innerHTML = `
            <div class="section-header">
                <h2>${mainCatLabels[mainCat]}</h2>
                <div class="section-line"></div>
                <span class="section-count">${totalInSection} أداة</span>
            </div>
        `;

        const subCats = subCatsPerMain[mainCat] || [];
        const relevantSubs = subCats.filter(sc => grouped[mainCat][sc]);

        // Show sub-section headers when multiple sub-categories are visible
        const showSubHeaders = relevantSubs.length > 1;

        relevantSubs.forEach(sc => {
            if (showSubHeaders) {
                const subHeader = document.createElement('div');
                subHeader.className = 'sub-section-header';
                subHeader.innerHTML = `<h3>${subCatLabels[sc]}</h3><div class="sub-section-line"></div>`;
                section.appendChild(subHeader);
            }

            const grid = document.createElement('div');
            grid.className = 'tools-grid';
            grouped[mainCat][sc].forEach(tool => grid.appendChild(createCard(tool)));
            section.appendChild(grid);
        });

        container.appendChild(section);
    });

    // Update stats
    document.getElementById('stat-total').textContent = toolsData.length;
    document.getElementById('stat-sections').textContent = Object.keys(subCatLabels).length;

    // Animate cards
    container.querySelectorAll('.tool-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.04}s`;
    });
}

/* ============================================
   SUB-FILTERS
   ============================================ */
function renderSubFilters() {
    const bar = document.getElementById('sub-filter-bar');

    if (activeMainCat === 'all') {
        bar.style.display = 'none';
        return;
    }

    const subs = subCatsPerMain[activeMainCat];
    if (!subs || subs.length <= 1) {
        bar.style.display = 'none';
        return;
    }

    bar.style.display = '';
    const inner = bar.querySelector('.sub-filter-inner');
    inner.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = `sub-btn ${activeSubCat === 'all' ? 'active' : ''}`;
    allBtn.textContent = 'الكل';
    allBtn.addEventListener('click', () => {
        activeSubCat = 'all';
        renderSubFilters();
        renderTools();
    });
    inner.appendChild(allBtn);

    subs.forEach(sc => {
        // Only show sub-filter if tools exist for it
        const hasTools = toolsData.some(t => t.mainCat === activeMainCat && t.subCat === sc);
        if (!hasTools) return;

        const btn = document.createElement('button');
        btn.className = `sub-btn ${activeSubCat === sc ? 'active' : ''}`;
        btn.textContent = subCatLabels[sc];
        btn.addEventListener('click', () => {
            activeSubCat = sc;
            renderSubFilters();
            renderTools();
        });
        inner.appendChild(btn);
    });
}

/* ============================================
   MAIN NAV
   ============================================ */
function initNav() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            activeMainCat = tab.getAttribute('data-main');
            activeSubCat = 'all';

            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            renderSubFilters();
            renderTools();
        });
    });
}

/* ============================================
   MODAL
   ============================================ */
function openModal(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) return;

    const overlay = document.getElementById('modal-overlay');

    document.getElementById('modal-title').textContent = tool.name;
    document.getElementById('modal-category').textContent =
        `${mainCatLabels[tool.mainCat]} — ${subCatLabels[tool.subCat]}`;
    document.getElementById('modal-desc').textContent = tool.fullDesc;
    document.getElementById('modal-link').href = tool.url;

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    tool.features.forEach(f => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="feature-dot"></span>${f}`;
        featuresList.appendChild(li);
    });

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    renderSubFilters();
    renderTools();

    document.getElementById('modal-overlay').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
});
