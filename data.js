const toolsData = [
  // ===== AI办公 =====
  {
    id: "notionai", name: "Notion AI", icon: "📝",
    category: "productivity", categoryLabel: "AI办公",
    desc: "笔记+AI，智能写作和知识管理",
    url: "https://www.notion.so/product/ai",
    detail: {
      intro: "Notion AI 将AI能力融入到Notion这款全能笔记和项目管理工具中，帮助用户自动生成内容、总结笔记等。",
      features: ["AI自动写作和编辑","智能总结和翻译","与Notion知识库深度整合","支持多种文档模板"],
      pricing: "Notion免费；AI附加功能$10/月",
      tags: ["笔记","写作","知识管理","办公"]
    }
  },
  {
    id: "gamma", name: "Gamma", icon: "📊",
    category: "productivity", categoryLabel: "AI办公",
    desc: "AI生成PPT/文档/网页，告别排版烦恼",
    url: "https://gamma.app",
    detail: {
      intro: "Gamma 是一款AI驱动的演示文稿工具，输入主题即可在几秒内生成精美PPT或文档。",
      features: ["一键生成精美PPT","支持文档和网页格式","丰富的模板和主题","团队协作功能"],
      pricing: "免费版有限额；Pro版$10/月",
      tags: ["PPT","演示","设计","效率"]
    }
  },
  {
    id: "coze", name: "Coze (扣子)", icon: "🧩",
    category: "productivity", categoryLabel: "AI办公",
    desc: "字节跳动推出的AI Bot搭建平台",
    url: "https://www.coze.com",
    detail: {
      intro: "Coze（扣子）是字节跳动推出的AI Bot开发平台，无需编程即可创建定制化的AI助手。",
      features: ["可视化Bot搭建","丰富的插件系统","知识库管理","支持发布到多平台"],
      pricing: "免费",
      tags: ["Bot","搭建","自动化","国产"]
    }
  },
  {
    id: "windclaw", name: "WindClaw", icon: "🦞",
    category: "productivity", categoryLabel: "AI办公",
    desc: "我的投资小龙虾，AI智能投资助手",
    url: "https://claw.wind.com.cn",
    detail: {
      intro: "WindClaw（我的投资小龙虾）是Wind旗下AI智能投资助手，需下载App使用。请前往手机应用市场搜索「WindClaw」或「我的投资小龙虾」下载安装。",
      features: ["AI投资分析","市场数据追踪","智能选股","风险管理","需下载App使用"],
      pricing: "免费下载",
      tags: ["投资","股票","AI分析","App"]
    }
  },
    {
    id: "wps-ai", name: "WPS AI", icon: "📄",
    category: "productivity", categoryLabel: "AI办公",
    desc: "金山WPS内置AI，办公文档智能化",
    url: "https://ai.wps.cn",
    detail: {
      intro: "WPS AI是金山办公推出的AI助手，集成在WPS Office中，支持AI写作、PPT生成、表格处理等。",
      features: ["AI写作辅助","一键生成PPT","表格智能处理","PDF阅读总结"],
      pricing: "免费有额度；会员使用更多",
      tags: ["办公","文档","WPS","国产"]
    }
  },
  {
    id: "huawei-pangu", name: "华为盘古", icon: "🌌",
    category: "productivity", categoryLabel: "AI办公",
    desc: "华为盘古大模型，行业AI赋能",
    url: "https://www.huaweicloud.com/product/pangu.html",
    detail: {
      intro: "华为盘古大模型是华为云推出的AI大模型，覆盖办公、气象、医药等多个行业场景。",
      features: ["多行业覆盖","自然语言处理","图像识别","行业定制"],
      pricing: "企业级定价",
      tags: ["办公","华为","大模型","云"]
    }
  },
  {
    id: "baidu-note", name: "百度如流AI", icon: "💼",
    category: "productivity", categoryLabel: "AI办公",
    desc: "百度智能办公平台，AI协作",
    url: "https://infoflow.baidu.com",
    detail: {
      intro: "百度如流是百度旗下的智能办公平台，集成了AI会议、文档协作、智能审批等功能。",
      features: ["AI会议记录","文档协作","智能审批","企业通讯"],
      pricing: "免费/付费",
      tags: ["办公","协作","国产","百度"]
    }
  },
  {
    id: "jinshan-note", name: "金山文档AI", icon: "📝",
    category: "productivity", categoryLabel: "AI办公",
    desc: "在线文档AI助手，协作办公",
    url: "https://www.kdocs.cn",
    detail: {
      intro: "金山文档AI是在线文档处理工具的AI增强版，支持多人协作和AI辅助写作。",
      features: ["AI写作","多人协作","云存储","跨平台"],
      pricing: "免费/付费",
      tags: ["办公","文档","协作","国产"]
    }
  }
// ===== 对话大模型 =====
  {
    id: "chatgpt", name: "ChatGPT", icon: "💬",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "OpenAI 推出的旗舰对话AI，支持文本、图像、代码等多种任务",
    url: "https://chat.openai.com",
    detail: {
      intro: "ChatGPT 是 OpenAI 开发的先进人工智能对话系统，基于 GPT-4 系列模型，能够进行自然流畅的对话。",
      features: ["支持文本对话、图像识别","可联网搜索","支持自定义GPTs","代码解释器"],
      pricing: "免费版可用GPT-3.5；Plus版$20/月",
      tags: ["对话","写作","编程","翻译"]
    }
  },
  {
    id: "claude", name: "Claude", icon: "🟣",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "Anthropic 推出的安全智能AI助手，擅长长文本处理",
    url: "https://claude.ai",
    detail: {
      intro: "Claude 由 Anthropic 公司开发，以安全性和长文本处理能力著称。",
      features: ["超长上下文窗口","安全性设计领先","支持文件上传","编程推理能力强"],
      pricing: "免费版可用；Pro版$20/月",
      tags: ["对话","长文本","分析","安全"]
    }
  },
  {
    id: "deepseek", name: "DeepSeek", icon: "🔵",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "国产顶级AI对话模型，编程和推理能力出色",
    url: "https://chat.deepseek.com",
    detail: {
      intro: "DeepSeek（深度求索）对话模型在编程和数学推理方面表现极为出色。",
      features: ["强大编程和推理能力","百万级上下文窗口","支持联网搜索","完全免费"],
      pricing: "完全免费",
      tags: ["对话","编程","推理","国产"]
    }
  },
  {
    id: "tongyi", name: "通义千问", icon: "🧠",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "阿里巴巴推出的综合AI助手，功能全面",
    url: "https://tongyi.aliyun.com",
    detail: {
      intro: "通义千问是阿里巴巴集团推出的AI大模型，集成了对话、文档处理、图像理解等多种能力。",
      features: ["多模态理解","阿里生态整合","支持文档、图片、语音","免费使用"],
      pricing: "免费",
      tags: ["对话","多模态","国产","办公"]
    }
  },
  {
    id: "doubao", name: "豆包", icon: "🫘",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "字节跳动推出的AI对话助手，功能丰富",
    url: "https://www.doubao.com",
    detail: {
      intro: "豆包是字节跳动推出的AI对话助手，集成了文本对话、图像理解、语音交互等多种功能。",
      features: ["多模态理解","字节生态整合","丰富的插件功能","完全免费"],
      pricing: "免费",
      tags: ["对话","国产","多模态","免费"]
    }
  },
  {
    id: "kimi", name: "Kimi", icon: "🌙",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "月之暗面出品，长文本处理能力突出",
    url: "https://kimi.moonshot.cn",
    detail: {
      intro: "Kimi 由月之暗面开发，以其超长文本处理能力著称，特别适合分析长篇文档和论文。",
      features: ["超长文本处理","文件分析强大","联网搜索","免费"],
      pricing: "免费",
      tags: ["对话","长文本","国产","分析"]
    }
  },
  {
    id: "yiyan", name: "文心一言", icon: "🐻",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "百度推出的AI对话助手，搜索和知识问答见长",
    url: "https://yiyan.baidu.com",
    detail: {
      intro: "文心一言是百度基于文心大模型推出的AI对话产品，在知识问答和信息检索方面具有独特优势。",
      features: ["百度搜索生态整合","知识问答能力强","支持多种文档格式","插件系统丰富"],
      pricing: "免费",
      tags: ["对话","搜索","国产","知识"]
    }
  },
  {
    id: "perplexity", name: "Perplexity", icon: "🔍",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "AI搜索引擎，答案带引用来源",
    url: "https://www.perplexity.ai",
    detail: {
      intro: "Perplexity 是一款AI驱动搜索引擎，直接给出答案并附上信息来源。",
      features: ["答案附带引用来源","支持深度搜索","Pro版可切换多种模型","文件分析"],
      pricing: "免费版可用；Pro版$20/月",
      tags: ["搜索","调研","信息","引用"]
    }
  },
  {
    id: "grok", name: "Grok", icon: "🤖",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "xAI推出的AI助手，实时信息获取能力强",
    url: "https://grok.com",
    detail: {
      intro: "Grok 是 xAI（Elon Musk 创立）推出的AI对话助手，以实时信息获取和幽默风格著称。",
      features: ["实时访问X平台数据","幽默风趣的对话风格","强大的推理能力","图像生成功能"],
      pricing: "X Premium会员可用",
      tags: ["对话","实时","社交","推理"]
    }
  },
    {
    id: "baidu-erNIE", name: "文心一言", icon: "🐻",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "百度文心大模型AI对话",
    url: "https://yiyan.baidu.com",
    detail: {
      intro: "文心一言是百度基于文心大模型推出的AI对话产品，在知识问答和信息检索方面具有独特优势。",
      features: ["百度搜索生态整合","知识问答","文档处理","插件系统"],
      pricing: "免费",
      tags: ["对话","百度","国产","大模型"]
    }
  },
  {
    id: "iflytek-xinghuo", name: "讯飞星火", icon: "🔥",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "科大讯飞AI大模型，语音识别领先",
    url: "https://xinghuo.xfyun.cn",
    detail: {
      intro: "讯飞星火是科大讯飞推出的AI大模型，在语音识别和多模态交互方面具有领先优势。",
      features: ["语音识别领先","多模态交互","文档分析","API开放"],
      pricing: "免费",
      tags: ["对话","语音","科大讯飞","国产"]
    }
  },
  {
    id: "tencent-hunyuan", name: "腾讯混元", icon: "🌀",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "腾讯混元大模型，微信生态整合",
    url: "https://hunyuan.tencent.com",
    detail: {
      intro: "腾讯混元是腾讯推出的AI大模型，深度整合微信和QQ生态，支持多种场景应用。",
      features: ["微信生态整合","多模态理解","广告创意生成","社交场景优化"],
      pricing: "免费",
      tags: ["对话","腾讯","国产","社交"]
    }
  },
  {
    id: "baichuan", name: "百川智能", icon: "🌊",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "王小川创立的国产AI大模型",
    url: "https://baichuan-ai.com",
    detail: {
      intro: "百川智能由前搜狗CEO王小川创立，其AI大模型在医疗、法律等垂直领域有独特优势。",
      features: ["垂直领域优化","医疗法律专业","长文本处理","API开放"],
      pricing: "免费/付费",
      tags: ["对话","百川","国产","垂直"]
    }
  },
  {
    id: "zeroone", name: "零一万物", icon: "🔢",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "李开复创立的AI大模型公司",
    url: "https://lingyiwanwu.com",
    detail: {
      intro: "零一万物由李开复博士创立，致力于打造世界级的AI大模型，在开放域对话方面表现优异。",
      features: ["开放域对话","多语言支持","长上下文","推理能力强"],
      pricing: "免费",
      tags: ["对话","零一","国产","大模型"]
    }
  }
// ===== AI绘图 =====
  {
    id: "midjourney", name: "Midjourney", icon: "🎨",
    category: "image", categoryLabel: "AI绘图",
    desc: "顶级AI绘画工具，艺术风格出色",
    url: "https://www.midjourney.com",
    detail: {
      intro: "Midjourney 是目前最受欢迎的AI绘画工具之一，以其独特的艺术风格闻名。",
      features: ["艺术风格独特","支持多种风格","图生图和混合模式","社区活跃"],
      pricing: "基础版$10/月；标准版$30/月",
      tags: ["绘画","设计","艺术","创意"]
    }
  },
  {
    id: "stablediffusion", name: "Stable Diffusion", icon: "✨",
    category: "image", categoryLabel: "AI绘图",
    desc: "开源AI绘画模型，可本地部署自由发挥",
    url: "https://stability.ai",
    detail: {
      intro: "Stable Diffusion 是开源文本到图像生成模型，可在本地部署运行。",
      features: ["完全开源可本地部署","庞大的插件和模型生态","支持ControlNet","免费使用"],
      pricing: "开源免费",
      tags: ["绘画","开源","本地部署","免费"]
    }
  },
  {
    id: "dalle", name: "DALL·E 3", icon: "🖼️",
    category: "image", categoryLabel: "AI绘图",
    desc: "OpenAI的图像生成模型，集成在ChatGPT中",
    url: "https://openai.com/dall-e-3",
    detail: {
      intro: "DALL·E 3 是 OpenAI 最新的图像生成模型，集成在 ChatGPT 中。",
      features: ["集成ChatGPT对话式生成","文字渲染能力强","图像质量高","支持图像编辑"],
      pricing: "ChatGPT Plus会员可用",
      tags: ["绘画","生成","ChatGPT","创意"]
    }
  },
  // ===== AI视频 =====
  {
    id: "sora", name: "Sora", icon: "🌅",
    category: "video", categoryLabel: "AI视频",
    desc: "OpenAI推出的革命性文生视频模型",
    url: "https://openai.com/sora",
    detail: {
      intro: "Sora 是 OpenAI 推出的文生视频模型，能够根据文本描述生成逼真且富有创意的视频内容。",
      features: ["高质量文生视频","逼真的物理世界模拟","长达60秒视频生成","丰富镜头语言"],
      pricing: "ChatGPT Plus/Pro会员可用",
      tags: ["视频","生成","OpenAI","革命性"]
    }
  },
  {
    id: "runway", name: "Runway", icon: "🎬",
    category: "video", categoryLabel: "AI视频",
    desc: "专业级AI视频生成和编辑平台",
    url: "https://runwayml.com",
    detail: {
      intro: "Runway 是专业的AI视频生成和编辑平台，提供Gen-3 Alpha等先进的视频生成模型。",
      features: ["高质量文生视频","视频转视频风格迁移","绿幕去除","专业级AI视频编辑"],
      pricing: "免费版有额度；Pro版$15/月",
      tags: ["视频","生成","编辑","专业"]
    }
  },
  {
    id: "kling", name: "可灵 (Kling)", icon: "🎥",
    category: "video", categoryLabel: "AI视频",
    desc: "快手的AI视频生成工具，效果惊艳",
    url: "https://klingai.com",
    detail: {
      intro: "可灵是快手推出的AI视频生成模型，以逼真的物理模拟和运动效果著称。",
      features: ["逼真的物理运动效果","支持文生视频和图生视频","国产免费有额度","视频质量领先"],
      pricing: "免费有额度；付费版更多功能",
      tags: ["视频","国产","生成","物理模拟"]
    }
  },
  {
    id: "pika", name: "Pika", icon: "⚡",
    category: "video", categoryLabel: "AI视频",
    desc: "简单易用的AI视频生成工具",
    url: "https://pika.art",
    detail: {
      intro: "Pika 是一款用户友好的AI视频生成工具，以简单易用著称。",
      features: ["操作简单上手快","支持文生视频和图生视频","视频编辑和局部修改","社区展示作品"],
      pricing: "免费版有额度；Pro版$10/月",
      tags: ["视频","易用","生成","编辑"]
    }
  },
  // ===== AI音乐/音频 =====
  {
    id: "suno", name: "Suno", icon: "🎵",
    category: "audio", categoryLabel: "AI音乐",
    desc: "AI音乐生成工具，输入歌词即可生成完整歌曲",
    url: "https://suno.com",
    detail: {
      intro: "Suno 是当前最热门的AI音乐生成工具，输入歌词即可生成带人声和伴奏的完整歌曲。",
      features: ["从歌词生成完整歌曲","支持多种音乐风格","V4音质大幅提升","支持中文歌词"],
      pricing: "免费版每天50积分；Pro版$10/月",
      tags: ["音乐","创作","娱乐","音频"]
    }
  },
  {
    id: "udio", name: "Udio", icon: "🎶",
    category: "audio", categoryLabel: "AI音乐",
    desc: "AI音乐生成，音质细腻风格多样",
    url: "https://www.udio.com",
    detail: {
      intro: "Udio 是一款高品质AI音乐生成工具，以出色的音质和丰富的风格选项受到青睐。",
      features: ["音质细腻堪比真人","支持多种音乐风格","可自定义歌词和风格","支持歌曲续写"],
      pricing: "免费版每月有额度；付费版$10/月",
      tags: ["音乐","生成","音频","创作"]
    }
  },
  // ===== AI编程 =====
  {
    id: "cursor", name: "Cursor", icon: "💻",
    category: "coding", categoryLabel: "AI编程",
    desc: "AI驱动的代码编辑器，让编程效率翻倍",
    url: "https://www.cursor.com",
    detail: {
      intro: "Cursor 是基于 VS Code 的AI代码编辑器，内置强大的AI辅助编程功能。",
      features: ["兼容VS Code插件","支持多模型切换","代码库级上下文","智能补全"],
      pricing: "免费版2000次补全/月；Pro版$20/月",
      tags: ["编程","编辑器","效率","开发"]
    }
  },
  {
    id: "copilot", name: "GitHub Copilot", icon: "🤖",
    category: "coding", categoryLabel: "AI编程",
    desc: "GitHub推出的AI编程助手，深度集成IDE",
    url: "https://github.com/features/copilot",
    detail: {
      intro: "GitHub Copilot 是 GitHub 和 OpenAI 联合推出的AI编程助手。",
      features: ["实时代码补全","支持多种语言","交互式编程","深度整合GitHub"],
      pricing: "免费版2000次/月；Pro版$10/月",
      tags: ["编程","补全","效率","开发"]
    }
  },
  {
    id: "windsurf", name: "Windsurf", icon: "🌊",
    category: "coding", categoryLabel: "AI编程",
    desc: "新一代AI编程 IDE，智能流畅",
    url: "https://codeium.com/windsurf",
    detail: {
      intro: "Windsurf 是 Codeium 推出的AI原生IDE。",
      features: ["AI原生IDE体验","深度代码理解","多文件编辑","智能补全"],
      pricing: "免费版功能强大；Pro版$15/月",
      tags: ["编程","IDE","AI原生","效率"]
    }
  },
  // ===== 资源与社区 =====
  {
    id: "huggingface", name: "HuggingFace", icon: "🤗",
    category: "resource", categoryLabel: "资源与社区",
    desc: "最大的AI模型社区和开源平台",
    url: "https://huggingface.co",
    detail: {
      intro: "HuggingFace 是全球最大的AI模型托管和社区平台。",
      features: ["海量开源模型和数据集","在线模型试用","Spaces应用托管","活跃社区"],
      pricing: "免费",
      tags: ["社区","模型","开源","数据集"]
    }
  },
  {
    id: "github-ai", name: "GitHub AI", icon: "🐙",
    category: "resource", categoryLabel: "资源与社区",
    desc: "全球最大代码托管平台，AI开源项目云集",
    url: "https://github.com/explore",
    detail: {
      intro: "GitHub 是全球最大的代码托管平台，汇集了无数AI开源项目和前沿技术资源。",
      features: ["海量AI开源项目","Copilot编程助手","Actions自动化","活跃的开发者社区"],
      pricing: "免费",
      tags: ["代码","开源","社区","项目"]
    }
  },
  {
    id: "paperswithcode", name: "Papers With Code", icon: "📄",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI论文+代码，追踪前沿研究成果",
    url: "https://paperswithcode.com",
    detail: {
      intro: "Papers With Code 将AI学术论文与开源代码相结合，帮助研究人员追踪前沿成果和基准测试。",
      features: ["论文与代码关联","基准测试排行榜","研究趋势追踪","数据集索引"],
      pricing: "免费",
      tags: ["论文","研究","基准","学术"]
    }
  },
  // ===== 更多资源 =====
  {
    id: "more-resource", name: "更多资源", icon: "📌",
    category: "more", categoryLabel: "更多资源",
    desc: "更多AI相关资源和网站推荐",
    url: "#",
    detail: {
      intro: "更多AI资源持续收录中，欢迎推荐你发现的好工具。",
      features: ["持续更新中"],
      pricing: "",
      tags: ["资源","推荐","导航"]
    }
  }
];

const categories = {};
toolsData.forEach(t => { if (!categories[t.category]) categories[t.category] = t.categoryLabel; });
