const toolsData = [
  {
    id: "chatgpt", name: "ChatGPT", icon: "💬",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "OpenAI 推出的旗舰对话AI，支持文本、图像、代码等多种任务",
    url: "https://chat.openai.com",
    detail: {
      intro: "ChatGPT 是 OpenAI 开发的先进人工智能对话系统，基于 GPT-4 系列模型。",
      features: ["支持文本对话、图像识别","可联网搜索","支持自定义GPTs","代码解释器"],
      pricing: "免费版可用GPT-3.5；Plus版$20/月",
      tags: ["对话","写作","编程","翻译"]
    }
  },
  {
    id: "claude", name: "Claude", icon: "🟣",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "Anthropic 推出的安全智能的AI助手，擅长长文本处理",
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
    id: "midjourney", name: "Midjourney", icon: "🎨",
    category: "image", categoryLabel: "AI绘图",
    desc: "顶级AI绘画工具，艺术风格出色",
    url: "https://www.midjourney.com",
    detail: {
      intro: "Midjourney 是最受欢迎的AI绘画工具之一，以其独特的艺术风格闻名。",
      features: ["艺术风格独特","支持多种风格","图生图和混合模式","社区活跃"],
      pricing: "基础版$10/月；标准版$30/月",
      tags: ["绘画","设计","艺术","创意"]
    }
  },
  {
    id: "suno", name: "Suno", icon: "🎵",
    category: "audio", categoryLabel: "AI音乐",
    desc: "AI音乐生成工具，输入歌词即可生成完整歌曲",
    url: "https://suno.com",
    detail: {
      intro: "Suno 是当前最热门的AI音乐生成工具，输入歌词即可生成带人声的完整歌曲。",
      features: ["生成完整歌曲","多种音乐风格","V4音质大幅提升","支持中文歌词"],
      pricing: "免费版每天50积分；Pro版$10/月",
      tags: ["音乐","创作","娱乐","音频"]
    }
  },
  {
    id: "cursor", name: "Cursor", icon: "💻",
    category: "coding", categoryLabel: "AI编程",
    desc: "AI驱动的代码编辑器，让编程效率翻倍",
    url: "https://www.cursor.com",
    detail: {
      intro: "Cursor 是基于 VS Code 的AI代码编辑器，内置强大的AI辅助编程功能。",
      features: ["兼容VS Code插件","支持多模型切换","理解整个代码库","智能补全"],
      pricing: "免费版每月2000次补全；Pro版$20/月",
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
    id: "perplexity", name: "Perplexity", icon: "🔍",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "AI搜索引擎，答案带引用来源",
    url: "https://www.perplexity.ai",
    detail: {
      intro: "Perplexity 是一款AI驱动搜索引擎，直接给出答案并附上信息来源。",
      features: ["答案附带引用来源","支持深度搜索","可切换多种模型","文件分析"],
      pricing: "免费版可用；Pro版$20/月",
      tags: ["搜索","调研","信息","引用"]
    }
  },
  {
    id: "gamma", name: "Gamma", icon: "📊",
    category: "productivity", categoryLabel: "AI办公",
    desc: "AI生成PPT/文档/网页，告别排版烦恼",
    url: "https://gamma.app",
    detail: {
      intro: "Gamma 是一款AI驱动的演示文稿工具，输入主题即可生成精美PPT。",
      features: ["一键生成精美PPT","支持文档和网页","丰富模板","团队协作"],
      pricing: "免费版有限额；Pro版$10/月",
      tags: ["PPT","演示","设计","效率"]
    }
  },
  {
    id: "doubao", name: "豆包", icon: "🫘",
    category: "conversation", categoryLabel: "对话大模型",
    desc: "字节跳动推出的AI对话助手，功能丰富",
    url: "https://www.doubao.com",
    detail: {
      intro: "豆包是字节跳动推出的AI对话助手，集成了文本对话、图像理解、语音交互等功能。",
      features: ["多模态理解","字节生态整合","丰富插件","完全免费"],
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
      intro: "Kimi 由月之暗面开发，以其超长文本处理能力著称。",
      features: ["超长文本处理","文件分析强大","联网搜索","免费"],
      pricing: "免费",
      tags: ["对话","长文本","国产","分析"]
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
      pricing: "免费版强大；Pro版$15/月",
      tags: ["编程","IDE","AI原生","效率"]
    }
  }
];

const categories = {};
toolsData.forEach(t => { if (!categories[t.category]) categories[t.category] = t.categoryLabel; });