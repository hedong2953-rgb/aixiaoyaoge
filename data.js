// v1.1.0 - 1476 tools
var toolsData = [
  {
    id: "notionai",
    name: "Notion AI",
    icon: "📝",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "笔记+AI，智能写作和知识管理",
    url: "https://www.notion.so/product/ai",
    detail: {
      intro: "Notion AI 将AI能力融入到Notion这款全能笔记和项目管理工具中，帮助用户自动生成内容、总结笔记等。",
      features: ["AI自动写作和编辑","智能总结和翻译","与Notion知识库深度整合","支持多种文档模板"],
      tags: ["笔记","写作","知识管理","办公"]
    }
  },
  {
    id: "gamma",
    name: "Gamma",
    icon: "📊",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI生成PPT/文档/网页，告别排版烦恼",
    url: "https://gamma.app",
    detail: {
      intro: "Gamma 是一款AI驱动的演示文稿工具，输入主题即可在几秒内生成精美PPT或文档。",
      features: ["一键生成精美PPT","支持文档和网页格式","丰富的模板和主题","团队协作功能"],
      tags: ["PPT","演示","设计","效率"]
    }
  },
  {
    id: "coze",
    name: "Coze (扣子)",
    icon: "🧩",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "字节跳动推出的AI Bot搭建平台",
    url: "https://www.coze.com",
    detail: {
      intro: "Coze（扣子）是字节跳动推出的AI Bot开发平台，无需编程即可创建定制化的AI助手。",
      features: ["可视化Bot搭建","丰富的插件系统","知识库管理","支持发布到多平台"],
      tags: ["Bot","搭建","自动化","国产"]
    }
  },
  {
    id: "windclaw",
    name: "WindClaw",
    icon: "🦞",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "我的投资小龙虾，AI智能投资助手",
    url: "https://claw.wind.com.cn",
    detail: {
      intro: "WindClaw（我的投资小龙虾）是Wind旗下AI智能投资助手，需下载App使用。请前往手机应用市场搜索「WindClaw」或「我的投资小龙虾」下载安装。",
      features: ["AI投资分析","市场数据追踪","智能选股","风险管理","需下载App使用"],
      tags: ["投资","股票","AI分析","App"]
    }
  },
  {
    id: "wps-ai",
    name: "WPS AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "金山WPS内置AI，办公文档智能化",
    url: "https://ai.wps.cn",
    detail: {
      intro: "WPS AI是金山办公推出的AI助手，集成在WPS Office中，支持AI写作、PPT生成、表格处理等。",
      features: ["AI写作辅助","一键生成PPT","表格智能处理","PDF阅读总结"],
      tags: ["办公","文档","WPS","国产"]
    }
  },
  {
    id: "huawei-pangu",
    name: "华为盘古",
    icon: "🌌",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "华为盘古大模型，行业AI赋能",
    url: "https://www.huaweicloud.com/product/pangu.html",
    detail: {
      intro: "华为盘古大模型是华为云推出的AI大模型，覆盖办公、气象、医药等多个行业场景。",
      features: ["多行业覆盖","自然语言处理","图像识别","行业定制"],
      tags: ["办公","华为","大模型","云"]
    }
  },
  {
    id: "baidu-note",
    name: "百度如流AI",
    icon: "💼",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "百度智能办公平台，AI协作",
    url: "https://infoflow.baidu.com",
    detail: {
      intro: "百度如流是百度旗下的智能办公平台，集成了AI会议、文档协作、智能审批等功能。",
      features: ["AI会议记录","文档协作","智能审批","企业通讯"],
      tags: ["办公","协作","国产","百度"]
    }
  },
  {
    id: "feishu-ai",
    name: "飞书AI",
    icon: "📋",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "字节跳动智能办公平台AI功能",
    url: "https://www.feishu.cn",
    detail: {
      intro: "飞书是字节跳动旗下智能办公平台，AI功能集成在文档、会议、表格等各模块中。",
      features: ["AI文档写作","AI会议纪要","AI表格处理","智能日程管理"],
      tags: ["办公","协作","字节","AI"]
    }
  },
  {
    id: "baidu-docs",
    name: "百度网盘AI",
    icon: "☁️",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "百度网盘AI智能处理文件",
    url: "https://pan.baidu.com",
    detail: {
      intro: "百度网盘AI集成在百度网盘中，支持AI图片处理、文档总结、视频转写等功能。",
      features: ["AI图片处理","文档智能总结","视频转文字","智能搜索"],
      tags: ["办公","云盘","百度","AI"]
    }
  },
  {
    id: "chatdoc",
    name: "ChatDOC",
    icon: "📑",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI文档问答工具，上传文档直接提问",
    url: "https://chatdoc.com",
    detail: {
      intro: "ChatDOC 是一款AI文档分析工具，上传PDF/Word等文档即可与文档对话。",
      features: ["多格式文档上传","文档智能问答","引用定位原文","批量文档处理"],
      tags: ["办公","文档","问答","分析"]
    }
  },
  {
    id: "tencent-meeting",
    name: "腾讯会议AI",
    icon: "📹",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "腾讯会议AI功能，会议记录总结",
    url: "https://meeting.tencent.com",
    detail: {
      intro: "腾讯会议内置AI功能，支持会议录音转文字、智能会议纪要、AI总结等。",
      features: ["实时语音转文字","AI会议纪要","发言人识别","会议总结"],
      tags: ["办公","会议","腾讯","AI"]
    }
  },
  {
    id: "loop",
    name: "Microsoft Loop",
    icon: "🔄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "微软AI协作办公组件",
    url: "https://loop.microsoft.com",
    detail: {
      intro: "Microsoft Loop 是微软推出的AI协作办公工具，类似Notion但深度整合Microsoft 365。",
      features: ["AI辅助写作","组件化协作","跨应用同步","整合Microsoft 365"],
      tags: ["办公","微软","协作","AI"]
    }
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "OpenAI 推出的旗舰对话AI，支持文本、图像、代码等多种任务",
    url: "https://chat.openai.com",
    detail: {
      intro: "ChatGPT 是 OpenAI 开发的先进人工智能对话系统，基于 GPT-4 系列模型，能够进行自然流畅的对话。",
      features: ["支持文本对话、图像识别","可联网搜索","支持自定义GPTs","代码解释器"],
      tags: ["对话","写作","编程","翻译"]
    }
  },
  {
    id: "claude",
    name: "Claude",
    icon: "🟣",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "Anthropic 推出的安全智能AI助手，擅长长文本处理",
    url: "https://claude.ai",
    detail: {
      intro: "Claude 由 Anthropic 公司开发，以安全性和长文本处理能力著称。",
      features: ["超长上下文窗口","安全性设计领先","支持文件上传","编程推理能力强"],
      tags: ["对话","长文本","分析","安全"]
    }
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    icon: "🔵",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "国产顶级AI对话模型，编程和推理能力出色",
    url: "https://chat.deepseek.com",
    detail: {
      intro: "DeepSeek（深度求索）对话模型在编程和数学推理方面表现极为出色。",
      features: ["强大编程和推理能力","百万级上下文窗口","支持联网搜索","完全免费"],
      tags: ["对话","编程","推理","国产"]
    }
  },
  {
    id: "tongyi",
    name: "通义千问",
    icon: "🧠",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "阿里巴巴推出的综合AI助手，功能全面",
    url: "https://tongyi.aliyun.com",
    detail: {
      intro: "通义千问是阿里巴巴集团推出的AI大模型，集成了对话、文档处理、图像理解等多种能力。",
      features: ["多模态理解","阿里生态整合","支持文档、图片、语音","免费使用"],
      tags: ["对话","多模态","国产","办公"]
    }
  },
  {
    id: "doubao",
    name: "豆包",
    icon: "👧",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "字节跳动推出的AI对话助手，功能丰富",
    url: "https://www.doubao.com",
    detail: {
      intro: "豆包是字节跳动推出的AI对话助手，集成了文本对话、图像理解、语音交互等多种功能。",
      features: ["多模态理解","字节生态整合","丰富的插件功能","完全免费"],
      tags: ["对话","国产","多模态","免费"]
    }
  },
  {
    id: "kimi",
    name: "Kimi",
    icon: "🌙",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "月之暗面出品，长文本处理能力突出",
    url: "https://kimi.moonshot.cn",
    detail: {
      intro: "Kimi 由月之暗面开发，以其超长文本处理能力著称，特别适合分析长篇文档和论文。",
      features: ["超长文本处理","文件分析强大","联网搜索","免费"],
      tags: ["对话","长文本","国产","分析"]
    }
  },
  {
    id: "yiyan",
    name: "文心一言",
    icon: "🐻",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "百度推出的AI对话助手，搜索和知识问答见长",
    url: "https://yiyan.baidu.com",
    detail: {
      intro: "文心一言是百度基于文心大模型推出的AI对话产品，在知识问答和信息检索方面具有独特优势。",
      features: ["百度搜索生态整合","知识问答能力强","支持多种文档格式","插件系统丰富"],
      tags: ["对话","搜索","国产","知识"]
    }
  },
  {
    id: "perplexity",
    name: "Perplexity",
    icon: "🔍",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "AI搜索引擎，答案带引用来源",
    url: "https://www.perplexity.ai",
    detail: {
      intro: "Perplexity 是一款AI驱动搜索引擎，直接给出答案并附上信息来源。",
      features: ["答案附带引用来源","支持深度搜索","Pro版可切换多种模型","文件分析"],
      tags: ["搜索","调研","信息","引用"]
    }
  },
  {
    id: "grok",
    name: "Grok",
    icon: "🤖",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "xAI推出的AI助手，实时信息获取能力强",
    url: "https://grok.com",
    detail: {
      intro: "Grok 是 xAI（Elon Musk 创立）推出的AI对话助手，以实时信息获取和幽默风格著称。",
      features: ["实时访问X平台数据","幽默风趣的对话风格","强大的推理能力","图像生成功能"],
      tags: ["对话","实时","社交","推理"]
    }
  },
  {
    id: "baidu-erNIE",
    name: "文心一言",
    icon: "🐻",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "百度文心大模型AI对话",
    url: "https://yiyan.baidu.com",
    detail: {
      intro: "文心一言是百度基于文心大模型推出的AI对话产品，在知识问答和信息检索方面具有独特优势。",
      features: ["百度搜索生态整合","知识问答","文档处理","插件系统"],
      tags: ["对话","百度","国产","大模型"]
    }
  },
  {
    id: "iflytek-xinghuo",
    name: "讯飞星火",
    icon: "🔥",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "科大讯飞AI大模型，语音识别领先",
    url: "https://xinghuo.xfyun.cn",
    detail: {
      intro: "讯飞星火是科大讯飞推出的AI大模型，在语音识别和多模态交互方面具有领先优势。",
      features: ["语音识别领先","多模态交互","文档分析","API开放"],
      tags: ["对话","语音","科大讯飞","国产"]
    }
  },
  {
    id: "tencent-hunyuan",
    name: "腾讯混元",
    icon: "🌀",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "腾讯混元大模型，微信生态整合",
    url: "https://hunyuan.tencent.com",
    detail: {
      intro: "腾讯混元是腾讯推出的AI大模型，深度整合微信和QQ生态，支持多种场景应用。",
      features: ["微信生态整合","多模态理解","广告创意生成","社交场景优化"],
      tags: ["对话","腾讯","国产","社交"]
    }
  },
  {
    id: "baichuan",
    name: "百川智能",
    icon: "🌊",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "王小川创立的国产AI大模型",
    url: "https://baichuan-ai.com",
    detail: {
      intro: "百川智能由前搜狗CEO王小川创立，其AI大模型在医疗、法律等垂直领域有独特优势。",
      features: ["垂直领域优化","医疗法律专业","长文本处理","API开放"],
      tags: ["对话","百川","国产","垂直"]
    }
  },
  {
    id: "zeroone",
    name: "零一万物",
    icon: "🔢",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "李开复创立的AI大模型公司",
    url: "https://lingyiwanwu.com",
    detail: {
      intro: "零一万物由李开复博士创立，致力于打造世界级的AI大模型，在开放域对话方面表现优异。",
      features: ["开放域对话","多语言支持","长上下文","推理能力强"],
      tags: ["对话","零一","国产","大模型"]
    }
  },
  {
    id: "midjourney",
    name: "Midjourney",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "顶级AI绘画工具，艺术风格出色",
    url: "https://www.midjourney.com",
    detail: {
      intro: "Midjourney 是目前最受欢迎的AI绘画工具之一，以其独特的艺术风格闻名。",
      features: ["艺术风格独特","支持多种风格","图生图和混合模式","社区活跃"],
      tags: ["绘画","设计","艺术","创意"]
    }
  },
  {
    id: "stablediffusion",
    name: "Stable Diffusion",
    icon: "✨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "开源AI绘画模型，可本地部署自由发挥",
    url: "https://stability.ai",
    detail: {
      intro: "Stable Diffusion 是开源文本到图像生成模型，可在本地部署运行。",
      features: ["完全开源可本地部署","庞大的插件和模型生态","支持ControlNet","免费使用"],
      tags: ["绘画","开源","本地部署","免费"]
    }
  },
  {
    id: "dalle",
    name: "DALL·E 3",
    icon: "🖼️",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "OpenAI的图像生成模型，集成在ChatGPT中",
    url: "https://openai.com/dall-e-3",
    detail: {
      intro: "DALL·E 3 是 OpenAI 最新的图像生成模型，集成在 ChatGPT 中。",
      features: ["集成ChatGPT对话式生成","文字渲染能力强","图像质量高","支持图像编辑"],
      tags: ["绘画","生成","ChatGPT","创意"]
    }
  },
  {
    id: "ideogram",
    name: "Ideogram",
    icon: "🅸",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "文字渲染能力最强的AI绘画工具",
    url: "https://ideogram.ai",
    detail: {
      intro: "Ideogram 以出色的文字渲染能力著称，特别适合生成带文字的Logo、海报和设计图。",
      features: ["文字渲染业界最强","Logo和海报设计","多种风格可选","免费有额度"],
      tags: ["绘画","文字","设计","Logo"]
    }
  },
  {
    id: "krea",
    name: "Krea AI",
    icon: "✨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "实时AI绘画和设计增强工具",
    url: "https://krea.ai",
    detail: {
      intro: "Krea AI 提供实时AI绘画生成和图像增强功能，支持实时涂鸦生成、图像放大和增强。",
      features: ["实时AI绘画生成","图像增强和放大","AI设计工具","视频生成"],
      tags: ["绘画","实时","增强","设计"]
    }
  },
  {
    id: "civitai",
    name: "CivitAI",
    icon: "🏛️",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "Stable Diffusion模型社区，海量模型下载",
    url: "https://civitai.com",
    detail: {
      intro: "CivitAI 是全球最大的Stable Diffusion模型分享社区，包含数万个模型和LoRA。",
      features: ["海量SD模型和LoRA","模型在线预览","社区评分和评论","一键下载应用"],
      tags: ["模型","社区","SD","下载"]
    }
  },
  {
    id: "sdxl",
    name: "SDXL",
    icon: "🖌️",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "Stability AI最新SDXL模型",
    url: "https://stability.ai/sdxl",
    detail: {
      intro: "SDXL 是Stability AI推出的最新Stable Diffusion模型，在图像质量和提示词理解上有大幅提升。",
      features: ["超高图像质量","提示词理解出色","丰富的风格控制","开源免费"],
      tags: ["SDXL","模型","开源","高清"]
    }
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "Canva内置AI设计功能",
    url: "https://www.canva.com",
    detail: {
      intro: "Canva 在线设计平台内置了大量AI功能，包括AI生图、AI编辑、AI去背景等。",
      features: ["AI一键生成设计","AI图片编辑","AI去背景","海量模板"],
      tags: ["设计","编辑","模板","在线"]
    }
  },
  {
    id: "clipdrop",
    name: "ClipDrop",
    icon: "✂️",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI图片编辑工具集，去背景/修复等",
    url: "https://clipdrop.co",
    detail: {
      intro: "ClipDrop 是Stability AI推出的AI图片编辑工具集，提供去背景、图片修复、扩展等。",
      features: ["AI去背景","图片修复和扩展","文字生成图片","实时图片编辑"],
      tags: ["编辑","去背景","修复","AI"]
    }
  },
  {
    id: "sora",
    name: "Sora",
    icon: "🌅",
    category: "video",
    categoryLabel: "AI视频",
    desc: "OpenAI推出的革命性文生视频模型",
    url: "https://openai.com/sora",
    detail: {
      intro: "Sora 是 OpenAI 推出的文生视频模型，能够根据文本描述生成逼真且富有创意的视频内容。",
      features: ["高质量文生视频","逼真的物理世界模拟","长达60秒视频生成","丰富镜头语言"],
      tags: ["视频","生成","OpenAI","革命性"]
    }
  },
  {
    id: "runway",
    name: "Runway",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "专业级AI视频生成和编辑平台",
    url: "https://runwayml.com",
    detail: {
      intro: "Runway 是专业的AI视频生成和编辑平台，提供Gen-3 Alpha等先进的视频生成模型。",
      features: ["高质量文生视频","视频转视频风格迁移","绿幕去除","专业级AI视频编辑"],
      tags: ["视频","生成","编辑","专业"]
    }
  },
  {
    id: "kling",
    name: "可灵 (Kling)",
    icon: "🎥",
    category: "video",
    categoryLabel: "AI视频",
    desc: "快手的AI视频生成工具，效果惊艳",
    url: "https://klingai.com",
    detail: {
      intro: "可灵是快手推出的AI视频生成模型，以逼真的物理模拟和运动效果著称。",
      features: ["逼真的物理运动效果","支持文生视频和图生视频","国产免费有额度","视频质量领先"],
      tags: ["视频","国产","生成","物理模拟"]
    }
  },
  {
    id: "pika",
    name: "Pika",
    icon: "⚡",
    category: "video",
    categoryLabel: "AI视频",
    desc: "简单易用的AI视频生成工具",
    url: "https://pika.art",
    detail: {
      intro: "Pika 是一款用户友好的AI视频生成工具，以简单易用著称。",
      features: ["操作简单上手快","支持文生视频和图生视频","视频编辑和局部修改","社区展示作品"],
      tags: ["视频","易用","生成","编辑"]
    }
  },
  {
    id: "haiper",
    name: "Haiper",
    icon: "🌟",
    category: "video",
    categoryLabel: "AI视频",
    desc: "免费好用的AI视频生成工具",
    url: "https://haiper.ai",
    detail: {
      intro: "Haiper 是由字节跳动前员工创立的AI视频生成工具，免费额度多且效果不错。",
      features: ["文生视频","图生视频","视频修复和增强","免费额度充足"],
      tags: ["视频","生成","免费","编辑"]
    }
  },
  {
    id: "minimax-video",
    name: "MiniMax Video",
    icon: "🎞️",
    category: "video",
    categoryLabel: "AI视频",
    desc: "MiniMax AI视频生成，效果惊艳",
    url: "https://hailuoai.com/video",
    detail: {
      intro: "MiniMax（海螺AI）的视频生成功能，以清晰度和运动流畅度著称。",
      features: ["高清晰度视频生成","运动流畅自然","中文理解好","免费有额度"],
      tags: ["视频","生成","国产","流畅"]
    }
  },
  {
    id: "veed",
    name: "VEED.io",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "在线AI视频编辑平台",
    url: "https://www.veed.io",
    detail: {
      intro: "VEED.io 是在线AI视频编辑平台，支持自动字幕、AI视频翻译、绿幕去除等。",
      features: ["AI自动字幕","AI视频翻译","绿幕去除","在线编辑无需安装"],
      tags: ["视频","编辑","字幕","在线"]
    }
  },
  {
    id: "pixverse",
    name: "PixVerse",
    icon: "🌈",
    category: "video",
    categoryLabel: "AI视频",
    desc: "免费AI视频生成，画质出色",
    url: "https://pixverse.ai",
    detail: {
      intro: "PixVerse 是一款免费好用的AI视频生成工具，以画质和创意表现受到用户喜爱。",
      features: ["高质量视频生成","多种风格选择","免费额度充足","图生视频"],
      tags: ["视频","生成","免费","创意"]
    }
  },
  {
    id: "luma",
    name: "Luma Dream Machine",
    icon: "🌠",
    category: "video",
    categoryLabel: "AI视频",
    desc: "Luma AI视频生成，3D一致性出色",
    url: "https://lumalabs.ai/dream-machine",
    detail: {
      intro: "Luma Dream Machine 是Luma AI推出的视频生成模型，以3D一致性和物理准确度著称。",
      features: ["3D一致性出色","物理模拟准确","快速生成","高分辨率"],
      tags: ["视频","3D","生成","物理"]
    }
  },
  {
    id: "suno",
    name: "Suno",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐",
    desc: "AI音乐生成工具，输入歌词即可生成完整歌曲",
    url: "https://suno.com",
    detail: {
      intro: "Suno 是当前最热门的AI音乐生成工具，输入歌词即可生成带人声和伴奏的完整歌曲。",
      features: ["从歌词生成完整歌曲","支持多种音乐风格","V4音质大幅提升","支持中文歌词"],
      tags: ["音乐","创作","娱乐","音频"]
    }
  },
  {
    id: "udio",
    name: "Udio",
    icon: "🎶",
    category: "audio",
    categoryLabel: "AI音乐",
    desc: "AI音乐生成，音质细腻风格多样",
    url: "https://www.udio.com",
    detail: {
      intro: "Udio 是一款高品质AI音乐生成工具，以出色的音质和丰富的风格选项受到青睐。",
      features: ["音质细腻堪比真人","支持多种音乐风格","可自定义歌词和风格","支持歌曲续写"],
      tags: ["音乐","生成","音频","创作"]
    }
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    icon: "🗣️",
    category: "audio",
    categoryLabel: "AI音乐",
    desc: "最强AI语音克隆和合成",
    url: "https://elevenlabs.io",
    detail: {
      intro: "ElevenLabs 是当前最先进的AI语音合成工具，支持语音克隆、多语言朗读等。",
      features: ["语音克隆","情感语音合成","多语言支持","有声书制作"],
      tags: ["语音","克隆","合成","有声书"]
    }
  },
  {
    id: "riffusion",
    name: "Riffusion",
    icon: "🎸",
    category: "audio",
    categoryLabel: "AI音乐",
    desc: "AI音乐生成，专注于器乐和旋律",
    url: "https://www.riffusion.com",
    detail: {
      intro: "Riffusion 是一款专注于AI音乐和器乐生成的工具，擅长生成各种风格的背景音乐。",
      features: ["器乐和旋律生成","多种音乐风格","背景音乐制作","免费使用"],
      tags: ["音乐","器乐","旋律","背景音乐"]
    }
  },
  {
    id: "soundraw",
    name: "Soundraw",
    icon: "🎼",
    category: "audio",
    categoryLabel: "AI音乐",
    desc: "AI生成免版税背景音乐",
    url: "https://soundraw.io",
    detail: {
      intro: "Soundraw 是AI音乐生成平台，专注于生成免版税的背景音乐，适合视频创作者使用。",
      features: ["免版税音乐生成","可自定义音乐风格","无限创作和下载","适合视频配乐"],
      tags: ["音乐","背景音乐","免版税","创作"]
    }
  },
  {
    id: "boomy",
    name: "Boomy",
    icon: "🎛️",
    category: "audio",
    categoryLabel: "AI音乐",
    desc: "AI音乐创作，发布到流媒体",
    url: "https://boomy.com",
    detail: {
      intro: "Boomy 让任何人都能创建AI音乐，并可发布到Spotify、Apple Music等流媒体平台。",
      features: ["AI音乐快速创作","支持发布到流媒体","多种音乐风格","简单易用"],
      tags: ["音乐","创作","流媒体","发布"]
    }
  },
  {
    id: "f5-tts",
    name: "F5-TTS",
    icon: "🔊",
    category: "audio",
    categoryLabel: "AI音乐",
    desc: "开源语音合成，中文效果极佳",
    url: "https://github.com/SWivid/F5-TTS",
    detail: {
      intro: "F5-TTS 是开源的AI语音合成模型，中文语音合成效果在开源模型中表现突出。",
      features: ["高质量中文语音","语音克隆","开源免费","支持多种情感"],
      tags: ["语音","开源","TTS","中文"]
    }
  },
  {
    id: "cursor",
    name: "Cursor",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI驱动的代码编辑器，让编程效率翻倍",
    url: "https://www.cursor.com",
    detail: {
      intro: "Cursor 是基于 VS Code 的AI代码编辑器，内置强大的AI辅助编程功能。",
      features: ["兼容VS Code插件","支持多模型切换","代码库级上下文","智能补全"],
      tags: ["编程","编辑器","效率","开发"]
    }
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    icon: "🤖",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "GitHub推出的AI编程助手，深度集成IDE",
    url: "https://github.com/features/copilot",
    detail: {
      intro: "GitHub Copilot 是 GitHub 和 OpenAI 联合推出的AI编程助手。",
      features: ["实时代码补全","支持多种语言","交互式编程","深度整合GitHub"],
      tags: ["编程","补全","效率","开发"]
    }
  },
  {
    id: "windsurf",
    name: "Windsurf",
    icon: "🌊",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "新一代AI编程 IDE，智能流畅",
    url: "https://codeium.com/windsurf",
    detail: {
      intro: "Windsurf 是 Codeium 推出的AI原生IDE。",
      features: ["AI原生IDE体验","深度代码理解","多文件编辑","智能补全"],
      tags: ["编程","IDE","AI原生","效率"]
    }
  },
  {
    id: "claude-code",
    name: "Claude Code",
    icon: "🟣",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "Anthropic推出的AI编程工具",
    url: "https://claude.ai",
    detail: {
      intro: "Claude Code 是Anthropic基于Claude大模型推出的AI编程助手，代码理解和生成能力出色。",
      features: ["强大的代码理解","多文件编辑","代码审查和重构","终端集成"],
      tags: ["编程","Claude","代码","开发"]
    }
  },
  {
    id: "replit-ai",
    name: "Replit AI",
    icon: "🔄",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "在线IDE集成AI编程助手",
    url: "https://replit.com",
    detail: {
      intro: "Replit 是一款在线IDE，内置AI编程助手，无需本地配置即可开发应用。",
      features: ["在线IDE无需配置","AI代码补全","一键部署","团队协作"],
      tags: ["编程","IDE","在线","部署"]
    }
  },
  {
    id: "trae",
    name: "Trae AI",
    icon: "🔧",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "字节跳动AI编程IDE",
    url: "https://www.trae.ai",
    detail: {
      intro: "Trae 是字节跳动推出的AI原生IDE，集成AI编程助手，体验流畅。",
      features: ["AI代码补全","智能对话编程","内置调试工具","多语言支持"],
      tags: ["编程","IDE","字节","AI"]
    }
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    icon: "🐙",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "GitHub AI编程助手，业界标杆",
    url: "https://github.com/features/copilot",
    detail: {
      intro: "GitHub Copilot 是GitHub和OpenAI联合推出的AI编程助手，支持多种IDE和语言。",
      features: ["实时代码补全","多IDE支持","代码解释和重构","终端命令建议"],
      tags: ["编程","GitHub","补全","AI"]
    }
  },
  {
    id: "tabnine",
    name: "Tabnine",
    icon: "🔮",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI代码补全，注重隐私安全",
    url: "https://www.tabnine.com",
    detail: {
      intro: "Tabnine 是AI代码补全工具，注重隐私保护，支持本地模型运行。",
      features: ["本地AI模型运行","隐私保护优先","多语言支持","团队模型训练"],
      tags: ["编程","补全","隐私","AI"]
    }
  },
  {
    id: "codeium",
    name: "Codeium",
    icon: "💠",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "免费AI编程助手，功能强大",
    url: "https://codeium.com",
    detail: {
      intro: "Codeium 是免费AI编程助手，提供代码补全、搜索和对话功能，支持70+语言。",
      features: ["完全免费","70+语言支持","代码搜索和理解","IDE插件"],
      tags: ["编程","免费","补全","AI"]
    }
  },
  {
    id: "huggingface",
    name: "HuggingFace",
    icon: "🤗",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "最大的AI模型社区和开源平台",
    url: "https://huggingface.co",
    detail: {
      intro: "HuggingFace 是全球最大的AI模型托管和社区平台。",
      features: ["海量开源模型和数据集","在线模型试用","Spaces应用托管","活跃社区"],
      tags: ["社区","模型","开源","数据集"]
    }
  },
  {
    id: "github-ai",
    name: "GitHub AI",
    icon: "🐙",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "全球最大代码托管平台，AI开源项目云集",
    url: "https://github.com/explore",
    detail: {
      intro: "GitHub 是全球最大的代码托管平台，汇集了无数AI开源项目和前沿技术资源。",
      features: ["海量AI开源项目","Copilot编程助手","Actions自动化","活跃的开发者社区"],
      tags: ["代码","开源","社区","项目"]
    }
  },
  {
    id: "paperswithcode",
    name: "Papers With Code",
    icon: "📄",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI论文+代码，追踪前沿研究成果",
    url: "https://paperswithcode.com",
    detail: {
      intro: "Papers With Code 将AI学术论文与开源代码相结合，帮助研究人员追踪前沿成果和基准测试。",
      features: ["论文与代码关联","基准测试排行榜","研究趋势追踪","数据集索引"],
      tags: ["论文","研究","基准","学术"]
    }
  },
  {
    id: "learn-python",
    name: "Python学习",
    icon: "🐍",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI编程入门首选Python教程",
    url: "https://www.python.org",
    detail: {
      intro: "Python是AI和机器学习最主流的编程语言，以下教程助你快速入门。",
      features: ["廖雪峰Python教程：https://liaoxuefeng.com","莫烦Python：https://mofanpy.com","黑马程序员Python：https://www.itheima.com","吴恩达Python课程：https://www.deeplearning.ai","菜鸟教程：https://www.runoob.com/python"],
      tags: ["学习","Python","编程","入门"]
    }
  },
  {
    id: "learn-ml",
    name: "机器学习教程",
    icon: "🧠",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "机器学习系统学习资源合集",
    url: "https://www.deeplearning.ai",
    detail: {
      intro: "机器学习系统学习资源，从入门到进阶。",
      features: ["吴恩达机器学习课程：https://www.coursera.org/specializations/machine-learning-introduction","李沐动手学深度学习：https://d2l.ai","周志华《机器学习》：https://cs.nju.edu.cn/zhouzh","Kaggle机器学习：https://www.kaggle.com/learn","Scikit-learn官方教程：https://scikit-learn.org","Fast.ai深度学习：https://www.fast.ai"],
      tags: ["学习","机器学习","深度","教程"]
    }
  },
  {
    id: "prompt-engineering",
    name: "提示词工程",
    icon: "🎯",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "Prompt Engineering 学习指南",
    url: "https://www.promptingguide.ai",
    detail: {
      intro: "提示词工程（Prompt Engineering）是AI应用的关键技能。",
      features: ["Prompt Engineering Guide：https://www.promptingguide.ai","OpenAI提示词最佳实践：https://platform.openai.com/docs/guides/prompt-engineering","LangGPT结构化提示词：https://github.com/langgptai/LangGPT","Learn Prompting：https://learnprompting.com","Midjourney提示词库：https://prompthero.com"],
      tags: ["提示词","Prompt","学习","指南"]
    }
  },
  {
    id: "langchain",
    name: "LangChain教程",
    icon: "⛓️",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "LangChain框架学习，AI应用开发",
    url: "https://python.langchain.com",
    detail: {
      intro: "LangChain是构建LLM应用的主流框架，以下资源助你快速上手。",
      features: ["LangChain官方文档：https://python.langchain.com","LangChain中文网：https://www.langchain.com.cn","LangGraph工作流：https://langchain-ai.github.io/langgraph","LangSmith调试：https://smith.langchain.com","WiseAI LangChain教程：https://wiseai.com"],
      tags: ["LangChain","框架","开发","RAG"]
    }
  },
  {
    id: "llm-deploy",
    name: "模型部署教程",
    icon: "🚀",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "本地部署AI大模型工具合集",
    url: "https://ollama.ai",
    detail: {
      intro: "在本地部署和运行AI大模型的工具和教程。",
      features: ["Ollama：https://ollama.ai（本地一键运行大模型）","LM Studio：https://lmstudio.ai（图形化本地模型运行）","vLLM：https://vllm.ai（高性能模型推理）","Text Generation WebUI：https://github.com/oobabooga/text-generation-webui","llama.cpp：https://github.com/ggerganov/llama.cpp","Open WebUI：https://openwebui.com"],
      tags: ["部署","本地","开源","模型"]
    }
  },
  {
    id: "ai-tools-platform",
    name: "AI搭建平台",
    icon: "🔨",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "低代码/无代码AI应用搭建平台",
    url: "https://www.coze.com",
    detail: {
      intro: "无需编程即可搭建AI应用的平台工具。",
      features: ["Coze扣子：https://www.coze.com（字节AI Bot搭建平台）","Dify：https://dify.ai（开源LLM应用开发平台）","FastGPT：https://fastgpt.in（知识库问答系统）","百度千帆：https://cloud.baidu.com/product/wenxinworkshop","阿里百炼：https://bailian.aliyun.com","腾讯云AI：https://cloud.tencent.com/product/ai"],
      tags: ["搭建","低代码","平台","Bot"]
    }
  },
  {
    id: "ai-api",
    name: "AI API接口",
    icon: "🔌",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "主流AI模型API接口汇总",
    url: "https://platform.openai.com",
    detail: {
      intro: "各大AI平台的API接口文档和开发者资源。",
      features: ["OpenAI API：https://platform.openai.com","Claude API：https://docs.anthropic.com","Google Gemini API：https://ai.google.dev","DeepSeek API：https://platform.deepseek.com","通义千问API：https://help.aliyun.com/zh/model-studio","文心一言API：https://cloud.baidu.com/doc/WENXINWORKSHOP","讯飞星火API：https://www.xfyun.cn/doc/spark"],
      tags: ["API","开发","接口","模型"]
    }
  },
  {
    id: "sd-tutorial",
    name: "Stable Diffusion教程",
    icon: "🎨",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "Stable Diffusion从入门到精通",
    url: "https://stablediffusionweb.com",
    detail: {
      intro: "Stable Diffusion是目前最流行的开源AI绘画模型，以下教程助你掌握。",
      features: ["Stable Diffusion WebUI：https://github.com/AUTOMATIC1111/stable-diffusion-webui","ComfyUI教程：https://comfyanonymous.github.io/ComfyUI_examples","CivitAI模型社区：https://civitai.com","LoRA训练教程：https://replicate.com/blog/lora-training","ControlNet教程：https://github.com/lllyasviel/ControlNet"],
      tags: ["SD","Stable Diffusion","绘画","教程"]
    }
  },
  {
    id: "ai-news",
    name: "AI新闻资讯",
    icon: "📰",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI行业资讯和前沿动态",
    url: "https://www.theverge.com/ai-artificial-intelligence",
    detail: {
      intro: "AI行业前沿资讯和深度报道渠道。",
      features: ["机器之心：https://jiqizhixin.com","量子位：https://qbitai.com","36氪AI频道：https://36kr.com/info/ai","雷锋网AI：https://leiphone.com","The Verge AI：https://www.theverge.com/ai-artificial-intelligence","ArsTechnica AI：https://arstechnica.com/ai"],
      tags: ["资讯","新闻","行业","前沿"]
    }
  },
  {
    id: "learn-python",
    name: "Python学习",
    icon: "🐍",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI编程入门首选Python教程",
    url: "https://www.python.org",
    detail: {
      intro: "Python是AI和机器学习最主流的编程语言。",
      features: ["廖雪峰Python教程：https://liaoxuefeng.com","莫烦Python：https://mofanpy.com","吴恩达Python课程：https://www.deeplearning.ai","菜鸟教程：https://www.runoob.com/python"],
      tags: ["学习","Python","编程","入门"]
    }
  },
  {
    id: "learn-ml",
    name: "机器学习教程",
    icon: "🧠",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "机器学习系统学习资源合集",
    url: "https://www.deeplearning.ai",
    detail: {
      intro: "机器学习系统学习资源，从入门到进阶。",
      features: ["吴恩达机器学习：https://www.coursera.org/specializations/machine-learning-introduction","李沐动手学深度学习：https://d2l.ai","Kaggle机器学习：https://www.kaggle.com/learn","Fast.ai深度学习：https://www.fast.ai"],
      tags: ["学习","机器学习","深度","教程"]
    }
  },
  {
    id: "prompt-engineering",
    name: "提示词工程",
    icon: "🎯",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "Prompt Engineering学习指南",
    url: "https://www.promptingguide.ai",
    detail: {
      intro: "提示词工程（Prompt Engineering）是AI应用的关键技能。",
      features: ["Prompt Engineering Guide：https://www.promptingguide.ai","OpenAI提示词最佳实践：https://platform.openai.com/docs/guides/prompt-engineering","Learn Prompting：https://learnprompting.com"],
      tags: ["提示词","Prompt","学习","指南"]
    }
  },
  {
    id: "langchain",
    name: "LangChain教程",
    icon: "⛓️",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "LangChain框架学习，AI应用开发",
    url: "https://python.langchain.com",
    detail: {
      intro: "LangChain是构建LLM应用的主流框架。",
      features: ["LangChain官方文档：https://python.langchain.com","LangGraph工作流：https://langchain-ai.github.io/langgraph","LangSmith调试：https://smith.langchain.com"],
      tags: ["LangChain","框架","开发","RAG"]
    }
  },
  {
    id: "llm-deploy",
    name: "模型部署教程",
    icon: "🚀",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "本地部署AI大模型工具合集",
    url: "https://ollama.ai",
    detail: {
      intro: "在本地部署和运行AI大模型的工具和教程。",
      features: ["Ollama：https://ollama.ai","LM Studio：https://lmstudio.ai","vLLM：https://vllm.ai","llama.cpp：https://github.com/ggerganov/llama.cpp","Open WebUI：https://openwebui.com"],
      tags: ["部署","本地","开源","模型"]
    }
  },
  {
    id: "ai-tools-platform",
    name: "AI搭建平台",
    icon: "🔨",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "低代码AI应用搭建平台合集",
    url: "https://www.coze.com",
    detail: {
      intro: "无需编程即可搭建AI应用的平台工具。",
      features: ["Coze扣子：https://www.coze.com","Dify：https://dify.ai","FastGPT：https://fastgpt.in","百度千帆：https://cloud.baidu.com/product/wenxinworkshop","阿里百炼：https://bailian.aliyun.com"],
      tags: ["搭建","低代码","平台","Bot"]
    }
  },
  {
    id: "ai-api",
    name: "AI API接口",
    icon: "🔌",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "主流AI模型API接口汇总",
    url: "https://platform.openai.com",
    detail: {
      intro: "各大AI平台的API接口文档和开发者资源。",
      features: ["OpenAI API：https://platform.openai.com","Claude API：https://docs.anthropic.com","DeepSeek API：https://platform.deepseek.com","通义千问API：https://help.aliyun.com/zh/model-studio","讯飞星火API：https://www.xfyun.cn/doc/spark"],
      tags: ["API","开发","接口","模型"]
    }
  },
  {
    id: "sd-tutorial",
    name: "Stable Diffusion教程",
    icon: "🎨",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "Stable Diffusion从入门到精通",
    url: "https://stablediffusionweb.com",
    detail: {
      intro: "Stable Diffusion是开源AI绘画模型，以下教程助你掌握。",
      features: ["SD WebUI：https://github.com/AUTOMATIC1111/stable-diffusion-webui","ComfyUI教程：https://comfyanonymous.github.io/ComfyUI_examples","CivitAI模型社区：https://civitai.com","ControlNet教程：https://github.com/lllyasviel/ControlNet"],
      tags: ["SD","Stable Diffusion","绘画","教程"]
    }
  },
  {
    id: "ai-news",
    name: "AI新闻资讯",
    icon: "📰",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI行业资讯和前沿动态",
    url: "https://jiqizhixin.com",
    detail: {
      intro: "AI行业前沿资讯和深度报道渠道。",
      features: ["机器之心：https://jiqizhixin.com","量子位：https://qbitai.com","36氪AI频道：https://36kr.com/info/ai","雷锋网AI：https://leiphone.com"],
      tags: ["资讯","新闻","行业","前沿"]
    }
  },
  {
    id: "jasper",
    name: "Jasper AI",
    icon: "✍️",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI营销写作平台，企业级内容生成",
    url: "https://www.jasper.ai",
    detail: {
      intro: "Jasper 是企业级AI写作平台，专注于营销内容创作、品牌文案生成等场景。",
      features: ["AI营销文案生成","品牌语调统一","多平台内容分发","团队协作"],
      tags: ["写作","营销","企业","内容"]
    }
  },
  {
    id: "grammarly",
    name: "Grammarly",
    icon: "✏️",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI英文写作助手，语法检查和润色",
    url: "https://www.grammarly.com",
    detail: {
      intro: "Grammarly 是AI英文写作助手，提供语法检查、拼写纠正、语气优化等功能。",
      features: ["实时语法检查","AI写作润色","语气和风格调整","抄袭检测"],
      tags: ["写作","英文","语法","润色"]
    }
  },
  {
    id: "descript",
    name: "Descript",
    icon: "🎙️",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI音视频编辑，像编辑文档一样编辑视频",
    url: "https://www.descript.com",
    detail: {
      intro: "Descript 是一款AI音视频编辑工具，通过编辑文字来编辑视频，支持AI语音克隆。",
      features: ["文字编辑视频","AI语音克隆","自动字幕","屏幕录制"],
      tags: ["视频","编辑","语音","音视频"]
    }
  },
  {
    id: "otter",
    name: "Otter.ai",
    icon: "🦦",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI会议记录，实时转写和总结",
    url: "https://otter.ai",
    detail: {
      intro: "Otter.ai 是AI会议记录工具，实时语音转文字、自动生成会议纪要。",
      features: ["实时语音转文字","AI会议总结","发言人识别","整合Zoom/Teams"],
      tags: ["会议","转写","记录","办公"]
    }
  },
  {
    id: "synthesia",
    name: "Synthesia",
    icon: "👤",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI数字人视频生成，企业培训视频",
    url: "https://www.synthesia.io",
    detail: {
      intro: "Synthesia 是AI数字人视频生成平台，输入文字即可生成有AI主播讲解的视频。",
      features: ["AI数字人主播","140+语言","无需拍摄和演员","企业培训视频"],
      tags: ["视频","数字人","培训","营销"]
    }
  },
  {
    id: "mem",
    name: "Mem AI",
    icon: "🧠",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI笔记工具，自动组织和关联笔记",
    url: "https://mem.ai",
    detail: {
      intro: "Mem 是AI原生笔记工具，自动将笔记关联、分类，并智能推荐相关内容。",
      features: ["AI自动组织笔记","智能关联推荐","快速搜索","团队知识库"],
      tags: ["笔记","知识管理","AI","效率"]
    }
  },
  {
    id: "notion-tools",
    name: "Notion工具集",
    icon: "📋",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "Notion生态中的AI工具和模板",
    url: "https://www.notion.so/templates",
    detail: {
      intro: "Notion生态中有大量AI相关的模板和工具，提升工作和学习效率。",
      features: ["Notion AI：https://www.notion.so/product/ai","Notion模板市场：https://www.notion.so/templates","Notion中文社区：https://notionchina.cn","Notion API文档：https://developers.notion.com"],
      tags: ["Notion","模板","效率","工具"]
    }
  },
  {
    id: "gamma-more",
    name: "AI演示工具",
    icon: "📊",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI PPT和演示工具合集",
    url: "https://gamma.app",
    detail: {
      intro: "AI自动生成PPT和演示文稿的工具合集。",
      features: ["Gamma：https://gamma.app（AI生成PPT/文档/网页）","Beautiful.ai：https://www.beautiful.ai（AI设计PPT）","Tome：https://tome.app（AI叙事演示）","Pitch：https://pitch.com（AI协作演示）","SlidesAI：https://www.slidesai.io（Google Slides AI插件）"],
      tags: ["PPT","演示","设计","效率"]
    }
  },
  {
    id: "ai-chatbots",
    name: "AI聊天机器人",
    icon: "🤖",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI聊天机器人和客服工具合集",
    url: "https://www.coze.com",
    detail: {
      intro: "搭建AI聊天机器人和智能客服的平台工具合集。",
      features: ["Coze扣子：https://www.coze.com","Dify：https://dify.ai","Chatbase：https://www.chatbase.co","Voiceflow：https://www.voiceflow.com","Dialogflow：https://dialogflow.cloud.google.com","Botpress：https://botpress.com"],
      tags: ["聊天","机器人","客服","搭建"]
    }
  },
  {
    id: "ai-education",
    name: "AI教育工具",
    icon: "🎓",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI在教育和学习中的应用工具",
    url: "https://www.khanacademy.org/khan-labs",
    detail: {
      intro: "AI在教育领域中的应用工具，从AI辅导到自动批改。",
      features: ["Khanmigo：https://www.khanacademy.org/khan-labs（Khan Academy AI辅导）","Photomath：https://photomath.com（AI拍照解题）","Quizlet AI：https://quizlet.com（AI学习卡片）","Gauthmath：https://www.gauthmath.com（AI数学解题）","有道AI：https://ai.youdao.com（AI翻译和学习）","Duolingo AI：https://www.duolingo.com（AI语言学习）"],
      tags: ["教育","学习","辅导","工具"]
    }
  },
  {
    id: "ai-medical",
    name: "AI医疗健康",
    icon: "🏥",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI在医疗健康领域应用",
    url: "https://www.google.com/health-ai",
    detail: {
      intro: "AI在医疗健康领域的应用，从辅助诊断到健康管理。",
      features: ["Google Health AI：https://health.google","智云健康：https://www.zyhealth.com","腾讯觅影：https://maying.tencent.com","推想科技：https://www.infervision.com","鹰瞳科技：https://www.airdoc.com"],
      tags: ["医疗","健康","诊断","AI"]
    }
  },
  {
    id: "ai-translation",
    name: "AI翻译工具",
    icon: "🌍",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI翻译和语言工具合集",
    url: "https://translate.google.com",
    detail: {
      intro: "AI驱动的翻译和语言工具，打破语言障碍。",
      features: ["Google翻译：https://translate.google.com","DeepL：https://www.deepl.com（最准的AI翻译）","有道翻译：https://fanyi.youdao.com","百度翻译：https://fanyi.baidu.com","OpenAI翻译（ChatGPT）：https://chat.openai.com","沉浸式翻译：https://immersivetranslate.com（浏览器翻译插件）"],
      tags: ["翻译","语言","多语言","工具"]
    }
  },
  {
    id: "ai-voice",
    name: "AI语音工具",
    icon: "🎤",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI语音识别和合成工具合集",
    url: "https://www.iflytek.com",
    detail: {
      intro: "AI语音技术工具，包括语音识别、语音合成、语音克隆等。",
      features: ["讯飞听见：https://www.iflyrec.com（语音转文字）","ElevenLabs：https://elevenlabs.io（AI语音合成）","Whisper（OpenAI）：https://openai.com/research/whisper","Azure语音：https://azure.microsoft.com/zh-cn/services/cognitive-services/speech-services","剪映语音：https://jimeng.jianying.com"],
      tags: ["语音","识别","合成","TTS"]
    }
  },
  {
    id: "ai-design",
    name: "AI设计工具",
    icon: "🎭",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI辅助设计和创意工具合集",
    url: "https://www.figma.com",
    detail: {
      intro: "AI驱动的设计和创意工具，助你快速产出设计作品。",
      features: ["Figma AI：https://www.figma.com（AI设计工具）","Canva AI：https://www.canva.com（在线设计AI）","Magician（Figma插件）：https://magician.design","Uizard：https://uizard.io（AI生成UI设计）","Galileo AI：https://www.usegalileo.ai（AI设计生成）","Visily：https://www.visily.ai（AI原型设计）"],
      tags: ["设计","UI","创意","工具"]
    }
  },
  {
    id: "ai-search-engines",
    name: "AI搜索引擎",
    icon: "🔍",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI搜索引擎和知识发现工具",
    url: "https://www.perplexity.ai",
    detail: {
      intro: "新一代AI搜索引擎，直接给出答案而非链接列表。",
      features: ["Perplexity：https://www.perplexity.ai","You.com：https://you.com","天工AI搜索：https://www.tiangong.cn","360AI搜索：https://www.so.com","秘塔AI搜索：https://metaso.cn","Devv AI（编程搜索）：https://devv.ai"],
      tags: ["搜索","AI","信息","问答"]
    }
  },
  {
    id: "ai-website-money",
    name: "AI建站赚钱",
    icon: "💰",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "用AI搭建网站赚广告费的副业指南",
    url: "https://aiyoufeng.com",
    detail: {
      intro: "用AI搭建工具类网站，不卖产品也能靠广告赚钱。以下是与有风老师学习AI建站的全套资源。",
      features: ["有风AI建站教程：https://aiyoufeng.com","10Web AI建站：https://bit.ly/3sbe2pw（AI自动建站平台）","Hostinger主机：https://bit.ly/3BysRqP（高性价比建站主机）","Elementor页面构建器：https://bit.ly/49KRNsA（WordPress页面构建）","Shopify独立站：https://shopify.pxf.io（跨境电商独立站）","银河录像局ChatGPT代充：https://nf.video/C1dxn","有风知识星球：https://t.zsxq.com/16Q"],
      tags: ["建站","赚钱","副业","AI"]
    }
  },
  {
    id: "website-analysis",
    name: "网站分析工具",
    icon: "📈",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "网站流量分析和SEO工具合集",
    url: "https://analytics.google.com",
    detail: {
      intro: "做网站必备的流量分析和SEO优化工具，帮你获取更多流量和收入。",
      features: ["Google Analytics：https://analytics.google.com（网站流量分析）","Google Search Console：https://search.google.com/search-console（搜索表现分析）","Google Trends：https://trends.google.com（关键词趋势查询）","Google AdSense：https://adsense.google.com（广告变现）","Semrush：https://semrush.sjv.io（全能SEO和数据分析）","关键词规划师：https://business.google.com（Google关键词查询）"],
      tags: ["分析","SEO","流量","广告"]
    }
  },
  {
    id: "fiverr",
    name: "Fiverr",
    icon: "🤝",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI自由职业外包平台",
    url: "https://bit.ly/4c9cttG",
    detail: {
      intro: "Fiverr 是全球最大的自由职业平台，可以在上面找到AI设计、编程、写作等各种外包服务。",
      features: ["AI相关服务外包","自由职业接单","全球化的设计师和开发者","价格透明"],
      tags: ["外包","自由职业","服务","设计"]
    }
  },
  {
    id: "semrush",
    name: "Semrush",
    icon: "📊",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "全能网站数据分析和SEO工具",
    url: "https://semrush.sjv.io",
    detail: {
      intro: "Semrush 是领先的在线可见性管理平台，提供SEO、PPC、内容营销等全方位分析。",
      features: ["SEO关键词研究","竞争对手分析","网站流量估算","内容营销策略"],
      tags: ["SEO","分析","营销","数据"]
    }
  },
  {
    id: "hostinger",
    name: "Hostinger",
    icon: "🌐",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "高性价比建站虚拟主机",
    url: "https://bit.ly/3BysRqP",
    detail: {
      intro: "Hostinger 是经济实惠的共享主机服务商，适合搭建WordPress网站，有风老师推荐。",
      features: ["超高性价比","一键安装WordPress","免费SSL证书","30天退款保证"],
      tags: ["主机","建站","WordPress","服务器"]
    }
  },
  {
    id: "yinhaoyinju",
    name: "银河录像局",
    icon: "🎬",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "ChatGPT会员代充和账号平台",
    url: "https://nf.video/C1dxn",
    detail: {
      intro: "银河录像局提供ChatGPT Plus代充、账号购买服务，方便国内用户使用。",
      features: ["ChatGPT Plus代充","账号购买","Midjourney代充","多种AI平台账号"],
      tags: ["ChatGPT","代充","账号","会员"]
    }
  },
  {
    id: "wa-writer",
    name: "蛙蛙写作",
    icon: "🐸",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI小说和内容创作工具",
    url: "https://wawawriter.com",
    detail: {
      intro: "蛙蛙写作是一款AI小说创作工具，专为网文作者设计，支持AI续写、AI取名等。",
      features: ["AI小说续写","角色和世界观设定","AI取名和对话","网文格式适配"],
      tags: ["写作","小说","网文","创作"]
    }
  },
  {
    id: "metaso",
    name: "秘塔AI搜索",
    icon: "🔮",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "无广告直达结果的AI搜索引擎",
    url: "https://metaso.cn",
    detail: {
      intro: "秘塔AI搜索是国内领先的AI搜索引擎，无广告直达结果，支持深度搜索和学术搜索。",
      features: ["无广告直达结果","深度搜索模式","学术搜索","结构化答案"],
      tags: ["搜索","AI","国内","无广告"]
    }
  },
  {
    id: "liblibai",
    name: "LiblibAI哩布哩布",
    icon: "🖼️",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "国内领先的AI图像创作和模型社区",
    url: "https://www.liblibai.com",
    detail: {
      intro: "LiblibAI（哩布哩布AI）是国内领先的AI图像创作平台和模型分享社区。",
      features: ["SD模型在线运行","模型分享社区","在线AI生图","国产替代Civitai"],
      tags: ["绘画","模型","社区","国产"]
    }
  },
  {
    id: "seedance",
    name: "Seedance",
    icon: "🌱",
    category: "video",
    categoryLabel: "AI视频",
    desc: "专业AI视频创作平台",
    url: "https://seedance.com",
    detail: {
      intro: "Seedance 是专业AI视频创作平台，支持真人素材参考，效果惊艳。",
      features: ["真人素材参考","高质量视频生成","专业级效果","多种风格"],
      tags: ["视频","创作","AI","专业"]
    }
  },
  {
    id: "haishanp",
    name: "秒哒",
    icon: "⚡",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "无代码AI应用开发平台",
    url: "https://mio.tech",
    detail: {
      intro: "秒哒是无代码AI应用开发平台，一句话就能做应用，无需编程经验。",
      features: ["自然语言生成应用","无代码开发","一键部署","多平台支持"],
      tags: ["编程","无代码","开发","平台"]
    }
  },
  {
    id: "aippt",
    name: "AiPPT",
    icon: "📽️",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI快速生成高质量PPT",
    url: "https://www.aippt.cn",
    detail: {
      intro: "AiPPT是国内AI PPT生成工具，输入主题即可快速生成高质量的演示文稿。",
      features: ["一键生成PPT","海量模板","AI排版","多格式导出"],
      tags: ["PPT","办公","生成","国产"]
    }
  },
  {
    id: "duiyou-ai",
    name: "堆友AI",
    icon: "🎯",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "阿里旗下全能AI绘画和视频工具",
    url: "https://d.design",
    detail: {
      intro: "堆友AI是阿里旗下设计平台，提供AI绘画、AI视频、3D素材等一站式创作服务。",
      features: ["AI绘画生成","AI视频创作","3D素材库","设计资源"],
      tags: ["绘画","视频","设计","阿里"]
    }
  },
  {
    id: "meitu-design",
    name: "美图设计室",
    icon: "📷",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "美图旗下AI图像创作和设计平台",
    url: "https://www.designkit.cn",
    detail: {
      intro: "美图设计室是美图公司推出的AI图像创作和设计平台，提供AI生图、AI设计等功能。",
      features: ["AI生图","AI设计","AI去除水印","电商设计"],
      tags: ["设计","图片","美图","国产"]
    }
  },
  {
    id: "xingliu-ai",
    name: "星流AI",
    icon: "✨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "一站式AI设计与创作工具",
    url: "https://xingliu.ai",
    detail: {
      intro: "星流AI是一站式AI设计与创作工具，提供多种AI绘画模型和创作功能。",
      features: ["多模型支持","AI绘画","AI设计","风格多样"],
      tags: ["绘画","设计","创作","一站式"]
    }
  },
  {
    id: "huihua-ai",
    name: "绘蛙AI",
    icon: "🐸",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "AI电商营销工具，免费生成商品图",
    url: "https://ai-bot.cn/sites/9195.html",
    detail: {
      intro: "绘蛙AI专注电商营销场景，免费生成商品图、模特图等，适合电商卖家。",
      features: ["AI商品图生成","AI模特换装","电商场景图","免费有额度"],
      tags: ["电商","营销","商品图","AI"]
    }
  },
  {
    id: "xiaohuanxiong",
    name: "办公小浣熊",
    icon: "🦝",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI数据分析助手，数据处理神器",
    url: "https://www.xiaohuanxiong.com",
    detail: {
      intro: "办公小浣熊是AI数据分析助手，上传数据即可用自然语言进行分析和可视化。",
      features: ["AI数据分析","自然语言查询","可视化图表","Excel/Python数据处理"],
      tags: ["办公","数据","分析","AI"]
    }
  },
  {
    id: "tusiart",
    name: "吐司AI",
    icon: "🍞",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘画模型社区和在线生图平台",
    url: "https://tusiart.com",
    detail: {
      intro: "吐司AI是国内AI绘画模型社区和在线生图平台，支持在线运行SD模型。",
      features: ["在线SD模型运行","模型社区","AI生图","国产免费"],
      tags: ["绘画","模型","社区","在线"]
    }
  },
  {
    id: "zaodian",
    name: "造点AI",
    icon: "🔵",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "夸克团队AI图像与视频创作",
    url: "https://ai-bot.cn/sites/63437.html",
    detail: {
      intro: "造点AI是夸克团队推出的AI图像与视频创作平台。",
      features: ["AI图像创作","AI视频创作","夸克生态","免费使用"],
      tags: ["绘画","视频","夸克","阿里"]
    }
  },
  {
    id: "12sign",
    name: "响指HaiSnap",
    icon: "👆",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "通用AI Agent平台，工作学习皆可用",
    url: "https://aisnap.com",
    detail: {
      intro: "响指HaiSnap是面向工作与学习场景的通用AI Agent平台。",
      features: ["AI Agent","工作流自动化","多工具集成","学习辅助"],
      tags: ["Agent","自动化","办公","AI"]
    }
  },
  {
    id: "wanzhi",
    name: "万小智",
    icon: "🏗️",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "阿里云企业级AI建站平台",
    url: "https://ai-bot.cn/sites/77243.html",
    detail: {
      intro: "万小智是阿里云推出的企业级AI建站平台，AI自动生成网站。",
      features: ["AI自动建站","企业级功能","阿里云生态","模板丰富"],
      tags: ["建站","阿里云","企业","AI"]
    }
  },
  {
    id: "toduke-ai",
    name: "ToDesk AI",
    icon: "🖥️",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "桌面AI助手，支持远程控制",
    url: "https://ai-bot.cn/sites/77198.html",
    detail: {
      intro: "ToDesk AI 是桌面端AI智能助手，支持微信远程操控电脑。",
      features: ["AI桌面助手","远程控制","微信控制电脑","国产"],
      tags: ["桌面","远程","助手","AI"]
    }
  },
  {
    id: "more-resource",
    name: "更多资源",
    icon: "📌",
    category: "more",
    categoryLabel: "更多资源",
    desc: "更多AI相关资源和网站推荐",
    url: "#",
    detail: {
      intro: "更多AI资源持续收录中，欢迎推荐你发现的好工具。",
      features: ["持续更新中"],
      tags: ["资源","推荐","导航"]
    }
  },
  {
    id: "kapi-ppt",
    name: "咔片PPT",
    icon: "📽️",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI PPT制作工具，设计美化自动化",
    url: "https://ai-bot.cn/sites/kapi-ppt.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "bosi-aippt",
    name: "博思AIPPT",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "PPT效率神器，AI一键生成PPT",
    url: "https://ai-bot.cn/sites/bosi-aippt.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "wending-aippt",
    name: "文多多AiPPT",
    icon: "📋",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI一键生成PPT，支持配图和资料整合",
    url: "https://ai-bot.cn/sites/wending-aippt.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "islide-aippt",
    name: "iSlide AIPPT",
    icon: "📉",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI一键设计精美PPT",
    url: "https://ai-bot.cn/sites/islide-aippt.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "napkin",
    name: "Napkin AI",
    icon: "✍️",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "文本快速转演示图像的AI办公工具",
    url: "https://ai-bot.cn/sites/napkin.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "xunfei-zhiwen",
    name: "讯飞智文",
    icon: "📝",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "一键生成PPT和Word文档",
    url: "https://ai-bot.cn/sites/xunfei-zhiwen.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "kimi-ppt",
    name: "Kimi PPT助手",
    icon: "🤖",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "Kimi全新PPT助手，一键生成PPT",
    url: "https://ai-bot.cn/sites/kimi-ppt.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "microsoft-designer",
    name: "Microsoft Designer",
    icon: "🎨",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "微软在线设计海报和宣传图工具",
    url: "https://ai-bot.cn/sites/microsoft-designer.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "quark-ppt",
    name: "夸克PPT",
    icon: "🔍",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "夸克AI PPT生成工具",
    url: "https://ai-bot.cn/sites/quark-ppt.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "wanshi-xing",
    name: "万兴智演",
    icon: "🎬",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "万兴科技AI PPT和演示制作软件",
    url: "https://ai-bot.cn/sites/wanshi-xing.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "voxdeck",
    name: "VoxDeck",
    icon: "🔊",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "创新的AI演示文稿生成工具",
    url: "https://ai-bot.cn/sites/voxdeck.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "swishy",
    name: "Swishy",
    icon: "✨",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI动态设计与动画生成平台",
    url: "https://ai-bot.cn/sites/swishy.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "chartgen",
    name: "ChartGen",
    icon: "📈",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI图表生成工具",
    url: "https://ai-bot.cn/sites/chartgen.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "qwen-chat",
    name: "通义千问 Qwen",
    icon: "🌐",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "阿里通义Qwen对话AI",
    url: "https://ai-bot.cn/sites/qwen-chat.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "tencent-yuanbao",
    name: "腾讯元宝",
    icon: "💎",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "腾讯免费AI智能助手",
    url: "https://ai-bot.cn/sites/tencent-yuanbao.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "huwei-xiaoyi",
    name: "华为小艺",
    icon: "🌺",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "华为小艺AI助手网页版",
    url: "https://ai-bot.cn/sites/huwei-xiaoyi.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "tiangong-ai",
    name: "天工AI",
    icon: "⚡",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "昆仑万维AI智能助手",
    url: "https://ai-bot.cn/sites/tiangong-ai.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "poe",
    name: "Poe",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "Quora推出的AI问答机器人",
    url: "https://ai-bot.cn/sites/poe.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "ms-copilot",
    name: "Microsoft Copilot",
    icon: "🧠",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "微软AI智能助手",
    url: "https://ai-bot.cn/sites/ms-copilot.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "baixiaoying",
    name: "百小应",
    icon: "🔮",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "百川智能免费AI助手",
    url: "https://ai-bot.cn/sites/baixiaoying.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "shushan",
    name: "书生大模型",
    icon: "📚",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "上海AI实验室大模型对话",
    url: "https://ai-bot.cn/sites/shushan.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "longcat",
    name: "LongCat (美团)",
    icon: "🐱",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "美团自研大模型AI对话",
    url: "https://ai-bot.cn/sites/longcat.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "bailing",
    name: "百灵大模型",
    icon: "🦅",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "蚂蚁集团Ling大模型对话",
    url: "https://ai-bot.cn/sites/bailing.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "z-ai",
    name: "Z.ai (智谱)",
    icon: "🔵",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "智谱面向全球AI模型体验",
    url: "https://ai-bot.cn/sites/z-ai.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "wenbai",
    name: "问小白",
    icon: "❓",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "AI智能助手，支持DeepSeek满血版",
    url: "https://ai-bot.cn/sites/wenbai.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "gaoding-ai",
    name: "稿定AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "一站式AI设计工具集",
    url: "https://ai-bot.cn/sites/gaoding-ai.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "abesmart",
    name: "阿贝智能",
    icon: "📖",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "一站式AI绘本创作平台",
    url: "https://ai-bot.cn/sites/abesmart.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "miao-suan",
    name: "秒画 (商汤)",
    icon: "🎭",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "商汤科技免费AI作画",
    url: "https://ai-bot.cn/sites/miao-suan.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "whee",
    name: "WHEE (美图)",
    icon: "🌈",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "美图AI图片和绘画创作",
    url: "https://ai-bot.cn/sites/whee.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "wuli",
    name: "呜哩 (阿里)",
    icon: "🦊",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "阿里AIGC创意生产力平台",
    url: "https://ai-bot.cn/sites/wuli.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "insmind",
    name: "insMind",
    icon: "🖼️",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "稿定面向全球AI图片编辑",
    url: "https://ai-bot.cn/sites/insmind.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "runninghub",
    name: "RunningHub",
    icon: "🏃",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "云端ComfyUI图像视频创作",
    url: "https://ai-bot.cn/sites/runninghub.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "photoroom",
    name: "Photoroom",
    icon: "📷",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "在线AI图片编辑工具",
    url: "https://ai-bot.cn/sites/photoroom.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "ribbet",
    name: "Ribbet.ai",
    icon: "🖌️",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "免费多功能AI图片处理",
    url: "https://ai-bot.cn/sites/ribbet.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "wanxiang",
    name: "通义万相",
    icon: "✨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "阿里AI创意内容生成平台",
    url: "https://ai-bot.cn/sites/wanxiang.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "libtv",
    name: "LibTV",
    icon: "🎥",
    category: "video",
    categoryLabel: "AI视频",
    desc: "专业AI视频创作平台",
    url: "https://ai-bot.cn/sites/libtv.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "soundview",
    name: "SoundView (讯飞)",
    icon: "🔊",
    category: "video",
    categoryLabel: "AI视频",
    desc: "讯飞AI短视频智能创作",
    url: "https://ai-bot.cn/sites/soundview.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "chanjing",
    name: "蝉镜",
    icon: "🪞",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI数字人视频生成平台",
    url: "https://ai-bot.cn/sites/chanjing.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "youyan",
    name: "有言",
    icon: "🗣️",
    category: "video",
    categoryLabel: "AI视频",
    desc: "一站式AI视频和3D数字人",
    url: "https://ai-bot.cn/sites/youyan.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "bairimeng",
    name: "白日梦",
    icon: "💭",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI创作最长50分钟视频",
    url: "https://ai-bot.cn/sites/bairimeng.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "jimeng",
    name: "即梦AI",
    icon: "🌌",
    category: "video",
    categoryLabel: "AI视频",
    desc: "一站式AI视频图片数字人",
    url: "https://ai-bot.cn/sites/jimeng.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "pollo-ai",
    name: "Pollo AI",
    icon: "🐘",
    category: "video",
    categoryLabel: "AI视频",
    desc: "一站式AI图像视频创作",
    url: "https://ai-bot.cn/sites/pollo-ai.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "vidu",
    name: "Vidu",
    icon: "🎞️",
    category: "video",
    categoryLabel: "AI视频",
    desc: "生数科技AI视频生成大模型",
    url: "https://ai-bot.cn/sites/vidu.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "mofa-xingyun",
    name: "魔珐星云",
    icon: "🌠",
    category: "video",
    categoryLabel: "AI视频",
    desc: "具身智能3D数字人平台",
    url: "https://ai-bot.cn/sites/mofa-xingyun.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "joypix",
    name: "JoyPix",
    icon: "😊",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI数字人创作工具",
    url: "https://ai-bot.cn/sites/joypix.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "tencent-hunyuan-video",
    name: "腾讯混元AI视频",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "腾讯推出的AI视频生成",
    url: "https://ai-bot.cn/sites/tencent-hunyuan-video.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "topview",
    name: "Topview",
    icon: "📺",
    category: "video",
    categoryLabel: "AI视频",
    desc: "电商营销AI视频生成",
    url: "https://ai-bot.cn/sites/topview.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "moyin",
    name: "魔音工坊",
    icon: "🎧",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI配音工具，媲美真人声音",
    url: "https://ai-bot.cn/sites/moyin.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "xunfei-zhizuo",
    name: "讯飞智作",
    icon: "🎙️",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI文本配音和数字人视频",
    url: "https://ai-bot.cn/sites/xunfei-zhizuo.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "douge",
    name: "逗哥配音",
    icon: "🎤",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "一站式AI配音工具",
    url: "https://ai-bot.cn/sites/douge.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "langlang",
    name: "琅琅配音",
    icon: "🔊",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "智能文本转语音工具",
    url: "https://ai-bot.cn/sites/langlang.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "qianyin",
    name: "千音漫语",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI声音创作，支持声音克隆",
    url: "https://ai-bot.cn/sites/qianyin.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "minimax-audio",
    name: "MiniMax Audio",
    icon: "🔊",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "MiniMax AI语音合成工具",
    url: "https://ai-bot.cn/sites/minimax-audio.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    icon: "📓",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "谷歌AI笔记，生成播客对话",
    url: "https://ai-bot.cn/sites/notebooklm.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "haimian-music",
    name: "海绵音乐",
    icon: "🧽",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "字节跳动免费AI音乐创作",
    url: "https://ai-bot.cn/sites/haimian-music.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "reecho",
    name: "Reecho睿声",
    icon: "🎤",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "超拟真中英文AI语音克隆",
    url: "https://ai-bot.cn/sites/reecho.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "wangyi-tianyin",
    name: "网易天音",
    icon: "🎶",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "网易一站式AI音乐创作",
    url: "https://ai-bot.cn/sites/wangyi-tianyin.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "turboscribe",
    name: "TurboScribe",
    icon: "📝",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "专业AI音视频转文字",
    url: "https://ai-bot.cn/sites/turboscribe.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "mureka",
    name: "Mureka",
    icon: "🎼",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "昆仑万维AI商用音乐创作",
    url: "https://ai-bot.cn/sites/mureka.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "ma-shang-fei",
    name: "码上飞",
    icon: "🛫",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "一句话生成小程序/APP/网页",
    url: "https://ai-bot.cn/sites/ma-shang-fei.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "codex",
    name: "Codex (OpenAI)",
    icon: "🤖",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "OpenAI AI编程智能体",
    url: "https://ai-bot.cn/sites/codex.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "qoder",
    name: "Qoder",
    icon: "🏆",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "阿里巴巴AI编程工具",
    url: "https://ai-bot.cn/sites/qoder.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "opencode",
    name: "OpenCode",
    icon: "📂",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "开源AI编程，Claude Code平替",
    url: "https://ai-bot.cn/sites/opencode.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "youware",
    name: "YouWare",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "一站式AI编程社区与开发平台",
    url: "https://ai-bot.cn/sites/youware.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "zcode",
    name: "Zcode (智谱)",
    icon: "💡",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "智谱轻量级AI IDE编程",
    url: "https://ai-bot.cn/sites/zcode.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "codebuddy",
    name: "CodeBuddy IDE",
    icon: "🧑‍💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "腾讯全栈开发AI IDE",
    url: "https://ai-bot.cn/sites/codebuddy.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "catpaw",
    name: "CatPaw (美团)",
    icon: "🐾",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "美团AI IDE编程工具",
    url: "https://ai-bot.cn/sites/catpaw.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "monkeycode",
    name: "MonkeyCode",
    icon: "🐵",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "长亭科技AI编程助手",
    url: "https://ai-bot.cn/sites/monkeycode.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "firebase-studio",
    name: "Firebase Studio",
    icon: "🔥",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "谷歌一站式全栈AI编程",
    url: "https://ai-bot.cn/sites/firebase-studio.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "google-antigravity",
    name: "Google Antigravity",
    icon: "🚀",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "谷歌AI IDE编程智能体",
    url: "https://ai-bot.cn/sites/google-antigravity.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "replit-agent",
    name: "Replit Agent",
    icon: "🔄",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "Replit AI编程工具",
    url: "https://ai-bot.cn/sites/replit-agent.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "bi-ling-ai",
    name: "笔灵AI写作",
    icon: "✍️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "600+写作模板，一键生成论文/小说",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "frog-writing",
    name: "蛙蛙写作",
    icon: "🐸",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI小说和内容创作工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "xunfei-huiwen",
    name: "讯飞绘文",
    icon: "🖋️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI批量原创，多平台矩阵号管理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "gaoding-copy",
    name: "稿定AI文案",
    icon: "📝",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "小红书画公众号短视频文案生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "qinyan",
    name: "沁言学术",
    icon: "🎓",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI科研写作平台，文献管理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "paperpal",
    name: "Paperpal",
    icon: "📄",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "英文论文写作助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "bi-mu-yu",
    name: "笔目鱼",
    icon: "🐟",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "专业英文论文写作器",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "gaoyi-ai",
    name: "稿易AI论文",
    icon: "📑",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI论文写作，免费生成2000字大纲",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "qianbi-ai",
    name: "千笔AI论文",
    icon: "✏️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "论文无限改稿平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "66ai",
    name: "66AI论文",
    icon: "🔢",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "高质量低查重AI论文写作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "maomao-chong",
    name: "茅茅虫",
    icon: "🐛",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "一站式AI论文写作助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "01agent",
    name: "01Agent",
    icon: "🤖",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI图文创作，生成排版编辑发布",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "getdraft",
    name: "GetDraft",
    icon: "📝",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "得到AI多专家写作工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "guangsu",
    name: "光速写作",
    icon: "⚡",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作PPT生成，最长15000字",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "youmind",
    name: "YouMind",
    icon: "🧠",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI原生创作和信息整合工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "wan-neng-xiao-in",
    name: "万能小in",
    icon: "📚",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "3分钟4万字，快速生成毕业论文",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "mo-wen",
    name: "墨问",
    icon: "🖌️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "专为创作者设计的AI笔记工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "xinhua-miaobi",
    name: "新华妙笔",
    icon: "🏛️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "新华社AI公文写作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "danqing-miaobi",
    name: "丹青妙笔",
    icon: "🎨",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "体制内AI公文写作工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "feelfish",
    name: "FeelFish",
    icon: "🐠",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "小说创作者AI写作PC客户端",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "loomi",
    name: "Loomi",
    icon: "🌟",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "创作版Claude Code，AI原生写作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "readpo",
    name: "ReadPo",
    icon: "📖",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI读写助手，内容聚合快速阅读",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "xiaoyu-ai",
    name: "小鱼AI写作",
    icon: "🐟",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "一站式AI写作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "luobi-ai",
    name: "落笔AI写作",
    icon: "✒️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "小说网文创作AI写作工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "chuangfei",
    name: "创飞写作",
    icon: "✈️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作调度平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "chaoji-xiaoshuojia",
    name: "超级小说家",
    icon: "📕",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "网文作家和短剧编剧AI助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "cailiao-xing",
    name: "材料星AI",
    icon: "📋",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "秘书工作AI写作工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "xiao-huan-xiong",
    name: "办公小浣熊",
    icon: "🦝",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "文案生成和AI知识库创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "bi-ling-novel",
    name: "笔灵AI小说",
    icon: "📖",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI一键写全篇，爆文拆解",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "quark-ai",
    name: "夸克AI",
    icon: "🔬",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "集AI搜索网盘文档创作于一体",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "searchgpt",
    name: "SearchGPT",
    icon: "🔮",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "OpenAI最新AI搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "zhihu-zhida",
    name: "知乎直答",
    icon: "💡",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "知乎AI搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "nano-ai",
    name: "纳米AI (360)",
    icon: "🔬",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "360新一代超级AI搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "tiangong-search",
    name: "天工AI搜索",
    icon: "⚡",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "昆仑万维AI搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "devv",
    name: "Devv",
    icon: "💻",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "面向程序员的AI搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "felo",
    name: "Felo",
    icon: "🌐",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "免费AI智能搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "360-ai-search",
    name: "360AI搜索",
    icon: "🛡️",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "360新一代AI搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "xin-liu",
    name: "心流 (阿里)",
    icon: "💧",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "阿里AI搜索助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "baidu-ai-search",
    name: "百度AI探索版",
    icon: "🐻",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "百度深度AI搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "exa-ai",
    name: "Exa AI",
    icon: "🔗",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "专为AI模型设计的搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "phind",
    name: "Phind",
    icon: "🤔",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "专为开发者设计的AI搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "globe-explorer",
    name: "Globe Explorer",
    icon: "🌍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "结构化AI知识搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "glean",
    name: "Glean",
    icon: "🏢",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "专为职场人设计的AI搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "diandian",
    name: "点点 (小红书)",
    icon: "🔴",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "小红书AI搜索，主打生活场景",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "aminer",
    name: "AMiner",
    icon: "🎓",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "智谱AI大模型学术平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "bocha",
    name: "博查AI搜索",
    icon: "🔤",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "支持多模型的AI搜索引擎",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "wispapaer",
    name: "WisPaper",
    icon: "📄",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "复旦团队AI学术搜索工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "duiyou",
    name: "堆友AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "专为设计师打造的AI设计平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "xingliu",
    name: "星流AI",
    icon: "⭐",
    category: "design",
    categoryLabel: "AI设计",
    desc: "一站式AI设计与创作工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "gaoding-design",
    name: "稿定AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "一站式AI创作和设计平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "modao-ai",
    name: "墨刀AI",
    icon: "🔪",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI秒生原型稿",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "figma-ai",
    name: "Figma AI",
    icon: "🎭",
    category: "design",
    categoryLabel: "AI设计",
    desc: "Figma原生AI设计工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "135-ai",
    name: "135 AI排版",
    icon: "📰",
    category: "design",
    categoryLabel: "AI设计",
    desc: "公众号AI图文排版工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "holopix",
    name: "Holopix AI",
    icon: "🖼️",
    category: "design",
    categoryLabel: "AI设计",
    desc: "游戏动漫插画AI设计平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "seede-ai",
    name: "Seede AI",
    icon: "🌱",
    category: "design",
    categoryLabel: "AI设计",
    desc: "面向普通人的AI原生设计工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "wegic",
    name: "Wegic",
    icon: "🌐",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI网页设计和建站工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "pixso-ai",
    name: "Pixso AI",
    icon: "✏️",
    category: "design",
    categoryLabel: "AI设计",
    desc: "Pixso推出的AI设计工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "recraft",
    name: "Recraft AI",
    icon: "🖍️",
    category: "design",
    categoryLabel: "AI设计",
    desc: "免费AI画板，矢量艺术画图标",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "stitch",
    name: "Stitch (Google)",
    icon: "🧵",
    category: "design",
    categoryLabel: "AI设计",
    desc: "Google Labs AI原生设计",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "chuangketie",
    name: "创客贴AI",
    icon: "📌",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI辅助在线设计平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "pic-copilot",
    name: "Pic Copilot",
    icon: "👨‍✈️",
    category: "design",
    categoryLabel: "AI设计",
    desc: "阿里国际AI电商设计工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "quiverai",
    name: "QuiverAI",
    icon: "🌈",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI矢量图形生成工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "miora",
    name: "Miora (腾讯)",
    icon: "🎯",
    category: "design",
    categoryLabel: "AI设计",
    desc: "腾讯AI原生设计协作工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "ardot",
    name: "Ardot (腾讯)",
    icon: "🎲",
    category: "design",
    categoryLabel: "AI设计",
    desc: "腾讯AI智能设计工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "coze-agent",
    name: "扣子 (Coze)",
    icon: "🫧",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "免费全能的AI办公智能体平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "manus",
    name: "Manus",
    icon: "🖐️",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "首款自主通用AI Agent",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "openclaw-agent",
    name: "OpenClaw",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "开源免费的个人AI助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "haishnap",
    name: "响指HaiSnap",
    icon: "👆",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "通用的AI Agent智能体平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "ark-claw",
    name: "ArkClaw",
    icon: "🚀",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "火山引擎云端托管版OpenClaw",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "flowith",
    name: "Flowith",
    icon: "🌊",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "一站式GPT-5.5 Claude-4.7",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "ai-py",
    name: "爱派AiPy",
    icon: "💡",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "本地Manus，开源免费",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "atoms",
    name: "Atoms",
    icon: "⚛️",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "自动构建商业业务的AI团队",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "tabbit",
    name: "Tabbit",
    icon: "📑",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "美团AI原生浏览器",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "astronclaw",
    name: "AstronClaw",
    icon: "🌌",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "科大讯飞云端OpenClaw",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "qoder-work",
    name: "QoderWork",
    icon: "🏗️",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "阿里桌面端AI智能体",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "mavis",
    name: "Mavis",
    icon: "🐦",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "MiniMax多Agent协作模式",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "gen spark",
    name: "Genspark",
    icon: "💫",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "通用AI智能体工作空间",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "wukong",
    name: "悟空 (阿里)",
    icon: "🐵",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "企业级AI原生工作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "moxt",
    name: "Moxt",
    icon: "🔮",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI原生工作空间",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "todesk-ai",
    name: "ToDesk AI",
    icon: "🖥️",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "桌面端AI智能助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "happycapy",
    name: "happycapy",
    icon: "🦦",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "云端AI Agent计算机",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "workbuddy",
    name: "WorkBuddy",
    icon: "💼",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "腾讯云AI桌面智能体",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "auto-claw",
    name: "AutoClaw",
    icon: "⚡",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "智谱一键安装本地版OpenClaw",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "bloome",
    name: "Bloome",
    icon: "🌼",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "Agentic IM平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "dify",
    name: "Dify",
    icon: "🧩",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "开源生成式AI应用开发平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "coze-dev",
    name: "Coze (扣子)",
    icon: "🫧",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "海量AI智能体平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "ali-bailian",
    name: "阿里云百炼",
    icon: "☁️",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "一站式大模型开发与应用平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "bigmodel",
    name: "BigModel (智谱)",
    icon: "🧠",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "企业级大模型开放平台MaaS",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "google-ai-studio",
    name: "Google AI Studio",
    icon: "🔬",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "免费测试谷歌最新AI模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "fastgpt",
    name: "FastGPT",
    icon: "⚡",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "免费AI工作流搭建工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "n8n",
    name: "n8n",
    icon: "🔗",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "开源低代码AI工作流自动化",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "zion",
    name: "Zion",
    icon: "🏛️",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "全栈AI Agent无代码开发",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    icon: "🛣️",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "一个接口调用400+AI模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "siliconflow",
    name: "SiliconFlow",
    icon: "💎",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "生成式AI计算基础设施",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "fangzhou-agent",
    name: "方舟Agent Plan",
    icon: "🚢",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "火山引擎 Agent 套餐",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "xunfei-agent",
    name: "讯飞星辰MaaS",
    icon: "🌟",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI大模型体验调用部署精调",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "zenmux",
    name: "ZenMux",
    icon: "🛡️",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "带保险的企业级大模型聚合",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "trickle-ai",
    name: "Trickle AI",
    icon: "💧",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "一站式无代码AI开发平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "moma",
    name: "MoMA",
    icon: "🏛️",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "中国移动开放普惠大模型聚合",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "inscode",
    name: "快马InsCode",
    icon: "🐴",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "对话设计图生成工程项目代码",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "kaggle",
    name: "Kaggle",
    icon: "🏆",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "机器学习和数据科学社区",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "coursera",
    name: "Coursera",
    icon: "🎓",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "知名MOOC平台AI课程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "deeplearning-ai",
    name: "DeepLearning.AI",
    icon: "🧠",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "深度学习和AI学习平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "feizhi-ai",
    name: "飞桨AI Studio",
    icon: "🛶",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "百度AI学习与实训社区",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "fast-ai",
    name: "fast.ai",
    icon: "⚡",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "免费开源深度学习课程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "openai-academy",
    name: "OpenAI Academy",
    icon: "🤖",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "OpenAI免费AI学习平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "google-ai-learn",
    name: "Google AI",
    icon: "🔵",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "Google AI学习平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "showme-ai",
    name: "ShowMeAI",
    icon: "📚",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI知识社区和学习资料库",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "udacity-ai",
    name: "Udacity AI学院",
    icon: "🎯",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI从入门到高级",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "elements-of-ai",
    name: "Elements of AI",
    icon: "🧪",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "免费AI通识学习课程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "ms-ai-beginners",
    name: "生成式AI初学者",
    icon: "📘",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "微软免费生成式AI课程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "ms-ml-beginners",
    name: "ML for Beginners",
    icon: "📗",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "微软免费机器学习课程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "dongshou-dl",
    name: "动手学深度学习",
    icon: "👨‍💻",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "结合理论与实践的深度学习",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "ailearning-nav",
    name: "学吧导航",
    icon: "🧭",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "学习爱好者AI导航",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "ai-share",
    name: "AI分享圈",
    icon: "💡",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI免费资源分享",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "trancy",
    name: "Trancy",
    icon: "🌍",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI驱动的语言学习工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "ollama",
    name: "Ollama",
    icon: "🦙",
    category: "model",
    categoryLabel: "AI模型",
    desc: "本地运行Llama和大模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "llama3",
    name: "Llama 3",
    icon: "🦙",
    category: "model",
    categoryLabel: "AI模型",
    desc: "Meta最新开源大模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "gpt4o",
    name: "GPT-4o",
    icon: "🌟",
    category: "model",
    categoryLabel: "AI模型",
    desc: "OpenAI多模态最新大模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "gpt",
    name: "GPT-4",
    icon: "💡",
    category: "model",
    categoryLabel: "AI模型",
    desc: "OpenAI GPT-4模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "modelscope",
    name: "魔搭社区",
    icon: "🏔️",
    category: "model",
    categoryLabel: "AI模型",
    desc: "阿里达摩院AI模型社区",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "autogpt",
    name: "AutoGPT",
    icon: "🤖",
    category: "model",
    categoryLabel: "AI模型",
    desc: "GPT-4完全自主实验项目",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "cherry-studio",
    name: "Cherry Studio",
    icon: "🍒",
    category: "model",
    categoryLabel: "AI模型",
    desc: "开源全能AI客户端",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "chatbox",
    name: "Chatbox AI",
    icon: "💬",
    category: "model",
    categoryLabel: "AI模型",
    desc: "开源AI客户端助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "anythingllm",
    name: "AnythingLLM",
    icon: "📦",
    category: "model",
    categoryLabel: "AI模型",
    desc: "开源全栈AI客户端",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "jan",
    name: "Jan",
    icon: "❄️",
    category: "model",
    categoryLabel: "AI模型",
    desc: "本地运行大模型对话工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "gemma",
    name: "Gemma",
    icon: "💎",
    category: "model",
    categoryLabel: "AI模型",
    desc: "谷歌轻量级开放模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "tencent-hunyuan-model",
    name: "腾讯混元大模型",
    icon: "🌀",
    category: "model",
    categoryLabel: "AI模型",
    desc: "腾讯研发的大语言模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "wenxin-model",
    name: "文心大模型",
    icon: "🐻",
    category: "model",
    categoryLabel: "AI模型",
    desc: "百度产业级知识增强大模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "miracle-vision",
    name: "奇想智能 (美图)",
    icon: "🎨",
    category: "model",
    categoryLabel: "AI模型",
    desc: "美图AI视觉大模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "cohere",
    name: "Cohere",
    icon: "🔗",
    category: "model",
    categoryLabel: "AI模型",
    desc: "大语言模型API平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "bloom",
    name: "BLOOM",
    icon: "🌸",
    category: "model",
    categoryLabel: "AI模型",
    desc: "HuggingFace大语言模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "gradio",
    name: "Gradio",
    icon: "📊",
    category: "model",
    categoryLabel: "AI模型",
    desc: "开源ML模型UI界面库",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "gptzero",
    name: "GPTZero",
    icon: "🛡️",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "超百万人用的免费AI内容检测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "zhuque",
    name: "朱雀AI检测",
    icon: "🐦",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "腾讯推出AI内容检测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "originality",
    name: "Originality.AI",
    icon: "✅",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "原创度和AI内容检测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "copyleaks",
    name: "CopyLeaks",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI内容检测和分级",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "winston-ai",
    name: "Winston AI",
    icon: "💪",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI内容检测解决方案",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "proofig",
    name: "Proofig",
    icon: "🔬",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测科研图像造假",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "smodin",
    name: "Smodin",
    icon: "📝",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "多语种AI内容检测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "sapling-detect",
    name: "Sapling AI检测",
    icon: "🌿",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "免费在线AI内容检测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "writer-detect",
    name: "Writer AI检测",
    icon: "✍️",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "Writer AI内容检测工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "study-corgi",
    name: "StudyCorgi检测",
    icon: "📚",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "ChatGPT生成检测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "prompthero",
    name: "PromptHero",
    icon: "🦸",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词优化与搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "aiprm",
    name: "AIPRM",
    icon: "⚙️",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词库和管理工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "promptbase",
    name: "PromptBase",
    icon: "🏪",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI Prompt交易平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "promptperfect",
    name: "PromptPerfect",
    icon: "✨",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "专业AI提示词优化",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "clickprompt",
    name: "ClickPrompt",
    icon: "🖱️",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "在线AI提示词设计工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "ai-short",
    name: "AI Short",
    icon: "🔗",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词管理和共享",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "langgpt",
    name: "LangGPT",
    icon: "🔤",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词结构化方法",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "promptfolder",
    name: "PromptFolder",
    icon: "📁",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词生成管理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "google-prompt",
    name: "Google AI提示词库",
    icon: "🔵",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "谷歌官方AI提示词库",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "learning-prompt",
    name: "Learning Prompt",
    icon: "📖",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "免费AI提示词学习平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "awesome-prompts",
    name: "ChatGPT Prompts",
    icon: "⭐",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词收集整理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "cakegrowth",
    name: "CakeGrowth",
    icon: "🍰",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "AI应用联盟营销平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "linktree",
    name: "Linktree",
    icon: "🌳",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "多链接整合至单一页面",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "xiaobaotong",
    name: "小报童",
    icon: "📰",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "付费内容服务平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "zhishu-xingqiu",
    name: "知识星球",
    icon: "🌍",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "知识社群运营工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "xiao-e-tong",
    name: "小鹅通",
    icon: "🦢",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "私域运营SaaS平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "wechat-platform",
    name: "微信公众平台",
    icon: "💬",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "官方内容创作与服务平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "zhihu-platform",
    name: "知乎",
    icon: "🔍",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "内容创作变现平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "baijiahao",
    name: "百家号",
    icon: "📱",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "百度内容创作发布变现",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "toutiao",
    name: "头条号",
    icon: "🔥",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "抖音内容创作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "csdn",
    name: "CSDN",
    icon: "💻",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "开发者社区和技术写作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "dou-dou-ai",
    name: "逗逗AI",
    icon: "🎮",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "AI游戏陪玩，支持原神、黑神话、LOL",
    url: "https://ai-bot.cn",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "jiejie-ai",
    name: "阶跃AI",
    icon: "🪜",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "阶跃星辰多模态AI聊天机器人",
    url: "https://ai-bot.cn",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "shangliang",
    name: "商量SenseChat",
    icon: "💭",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "商汤科技免费AI聊天助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "me-bot",
    name: "Me.bot",
    icon: "🧑‍🤝‍🧑",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "心识宇宙个性化AI伴侣",
    url: "https://ai-bot.cn",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "saylo",
    name: "Saylo",
    icon: "🎭",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "AI故事角色扮演游戏应用",
    url: "https://ai-bot.cn",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "lorka-ai",
    name: "Lorka AI",
    icon: "🔀",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "多模型AI聚合对话平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "tusi-art",
    name: "吐司AI",
    icon: "🍞",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘画模型社区和在线生图平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "keling-ai",
    name: "可灵AI",
    icon: "🎬",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "快手AI图像和视频创作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "ai-gaitu",
    name: "AI改图神器",
    icon: "🖼️",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI在线图像编辑工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "mi-guo-ai",
    name: "米粿AI",
    icon: "🍡",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "渐进式分层绘画助手，主攻日系二次元",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "katu-ai",
    name: "咖图AI",
    icon: "☕",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI图像设计平台，NanoBanana Pro模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "shijue-gongchang",
    name: "视觉工厂",
    icon: "🏭",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI创作工具，AI生图和视频生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "miaohui-ai",
    name: "秒绘AI",
    icon: "⚡",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "一键生成爆款图文，免费发布小红书",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "miaohua-ai",
    name: "妙话AI",
    icon: "💬",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "专为内容创作者设计的创意图片生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "lumi-img",
    name: "炉米Lumi",
    icon: "🔥",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "字节跳动AIGC图像创作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "krea-ai",
    name: "Krea AI",
    icon: "✨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "实时AI图像视频生成和编辑平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "kira-img",
    name: "Kira",
    icon: "💫",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI图像生成与编辑工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "heygen",
    name: "HeyGen",
    icon: "👤",
    category: "video",
    categoryLabel: "AI视频",
    desc: "专业AI数字人视频创作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "rhtv",
    name: "RHTV",
    icon: "📺",
    category: "video",
    categoryLabel: "AI视频",
    desc: "RunningHub原生AI无限画布创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "tapnow",
    name: "TapNow",
    icon: "👆",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视觉内容创作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "higgsfield",
    name: "Higgsfield",
    icon: "⚛️",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频生成，支持专业运镜效果",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "flova",
    name: "Flova",
    icon: "🎥",
    category: "video",
    categoryLabel: "AI视频",
    desc: "全球首个一体化AI视频创作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "vibepaper",
    name: "VibePaper",
    icon: "📄",
    category: "video",
    categoryLabel: "AI视频",
    desc: "短剧制作AI协作工作台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "juhuo-ai",
    name: "剧火AI",
    icon: "🔥",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI短剧创作者一站式Agent",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "wuxiang",
    name: "雾象",
    icon: "🌫️",
    category: "video",
    categoryLabel: "AI视频",
    desc: "免费开源AI动画生成工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "yoroll",
    name: "Yoroll",
    icon: "🎮",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI原生互动视频游戏平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "zorq-ai",
    name: "Zorq AI",
    icon: "🌀",
    category: "video",
    categoryLabel: "AI视频",
    desc: "多模型聚合AI创意生成平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "pexo",
    name: "Pexo",
    icon: "🐾",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频创作Agent",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "aippt-plugin",
    name: "AiPPT插件",
    icon: "🔌",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AiPPT推出的AI PPT制作插件版",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "pi-ppt",
    name: "Pi智能PPT",
    icon: "📐",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "一键生成PPT，复制精美模板",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "gaoding-ppt",
    name: "稿定PPT",
    icon: "🎨",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "稿定PPT模板资源库",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "bige-ppt",
    name: "笔格AIPPT",
    icon: "🖊️",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "高效的AI PPT生成工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "biling-ppt",
    name: "笔灵AIPPT",
    icon: "✏️",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "一键生成PPT和千字演讲稿",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "baidu-wenku",
    name: "百度文库AI",
    icon: "📚",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "文心一言智能文档助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "picdoc",
    name: "PicDoc",
    icon: "📊",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI文本转图表工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "meitu-ppt",
    name: "美图AI PPT",
    icon: "🌸",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "美图秀秀免费AI生成PPT",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "feixiang-teacher",
    name: "飞象老师",
    icon: "🐘",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "猿辅导AI教学和备课工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "ergou-ppt",
    name: "二狗PPT",
    icon: "🐕",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "去AI味中式职场PPT生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "yidian-ppt",
    name: "一点PPT",
    icon: "🎯",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "一句话生成专业PPT",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "narraland",
    name: "NarraLand",
    icon: "📖",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI智能演示内容创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "keling-ppt",
    name: "课灵PPT",
    icon: "📝",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI免费生成PPT课件",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "qingyan-ppt",
    name: "清言PPT",
    icon: "💡",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "智谱清言联合AiPPT智能体",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "mindshow",
    name: "麦当秀MindShow",
    icon: "🎪",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI在线PPT生成工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "diagrimo",
    name: "Diagrimo",
    icon: "📉",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "Tenorshare AI图表生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "kilo-code",
    name: "Kilo Code",
    icon: "🔥",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "开源AI编程扩展插件",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "lovable",
    name: "Lovable",
    icon: "💖",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "全栈AI编程工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    icon: "⚡",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "StackBlitz全栈AI代码工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "infcode",
    name: "InfCode",
    icon: "∞",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "词元无限企业级AI编程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "codeflicker",
    name: "CodeFlicker",
    icon: "🎬",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "快手AI原生IDE编程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "clacky-ai",
    name: "Clacky AI",
    icon: "🐥",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "L3级Coding Studio",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "warp-code",
    name: "Warp Code",
    icon: "🚀",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "Warp推出的AI编程工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "augment-code",
    name: "Augment Code",
    icon: "📦",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "专为大型代码库设计的AI编程辅助",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "iflow-cli",
    name: "iFlow CLI",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "心流AI免费终端AI智能体",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "comm-suan-ai",
    name: "代码小浣熊",
    icon: "🦝",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "商汤科技免费AI编程助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "tongyi-lingma",
    name: "通义灵码",
    icon: "🔧",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "阿里免费AI编程工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "yinshu-ai",
    name: "音述AI",
    icon: "🎤",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "全球首个AI音乐社区",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "noiz-ai",
    name: "Noiz AI",
    icon: "🎙️",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI配音工具，文本转语音和声音克隆",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "tunee",
    name: "Tunee",
    icon: "🎹",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "首个对话式音乐创作AI智能体",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "xunfei-tingjian",
    name: "讯飞听见",
    icon: "👂",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "科大讯飞在线AI语音转文字",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "vemus",
    name: "Vemus未音",
    icon: "🎼",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "腾讯音乐一站式AI音乐创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "nafy-ai",
    name: "Nafy AI",
    icon: "🎶",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "在线AI音乐生成器",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "qianxi-litesight",
    name: "轻析LiteSight",
    icon: "🔍",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI视频内容提取自动转文字",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "tianpuyue",
    name: "天谱乐",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "唱鸭多模态音乐生成大模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "yinfeng",
    name: "音疯",
    icon: "🌪️",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "昆仑万维AI音乐创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "yinchao",
    name: "音潮",
    icon: "🌊",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "全栈自研AI音乐创作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "yinjian",
    name: "音剪",
    icon: "✂️",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "喜马拉雅一站式AI音频创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "yinmi",
    name: "音秘",
    icon: "🤫",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "百度AI播客创作工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "memoai",
    name: "MemoAI",
    icon: "📝",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "免费AI语音转文字工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "xunfei-yizhi",
    name: "讯飞译制",
    icon: "🌐",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "科大讯飞AI音视频本地化",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "ai-university",
    name: "AI大学堂",
    icon: "🏫",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "科大讯飞在线AI学习平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "duiyou-daxue",
    name: "堆友AI学习",
    icon: "📖",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "堆友AI设计知识学习",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "day-of-ai",
    name: "Day of AI",
    icon: "📅",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "MIT免费AI学习平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "lynole",
    name: "Lynote",
    icon: "📓",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "面向学生和研究者的AI学习助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "ml-mastery",
    name: "MachineLearningMastery",
    icon: "🏅",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "从基础到高级的免费ML教程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "neural-networks",
    name: "神经网络入门",
    icon: "🧠",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "Brilliant神经网络入门课程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "reading-coach",
    name: "Reading Coach",
    icon: "👓",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "微软免费AI阅读学习教练",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "tencent-kouding",
    name: "腾讯扣叮",
    icon: "🔔",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "腾讯青少年编程教育平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "ali-ai-roadmap",
    name: "阿里云AI学习",
    icon: "☁️",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "阿里云AI学习路线",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "txyl",
    name: "txyz",
    icon: "📕",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI文献阅读和学术研究辅助",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "xunfei-maas",
    name: "讯飞星辰MaaS",
    icon: "⭐",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI大模型体验调用部署精调",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "nano-banana",
    name: "Nano Banana",
    icon: "🍌",
    category: "model",
    categoryLabel: "AI模型",
    desc: "谷歌图像生成与编辑模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "seedance-model",
    name: "Seedance模型",
    icon: "🌱",
    category: "model",
    categoryLabel: "AI模型",
    desc: "字节跳动多模态AI视频生成模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "doubao-model",
    name: "豆包大模型",
    icon: "🧊",
    category: "model",
    categoryLabel: "AI模型",
    desc: "字节跳动AI大模型家族",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "wujie",
    name: "无阶未来",
    icon: "🔮",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI应用与弹性算网平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "agentgpt",
    name: "AgentGPT",
    icon: "🤖",
    category: "model",
    categoryLabel: "AI模型",
    desc: "在浏览器中部署自主AI",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "openbmb",
    name: "OpenBMB",
    icon: "📦",
    category: "model",
    categoryLabel: "AI模型",
    desc: "清华大规模预训练语言模型库",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "deepfloyd-if",
    name: "DeepFloyd IF",
    icon: "🎨",
    category: "model",
    categoryLabel: "AI模型",
    desc: "StabilityAI图片生成模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "xulie-houzi",
    name: "序列猴子",
    icon: "🐵",
    category: "model",
    categoryLabel: "AI模型",
    desc: "出门问问超大规模语言模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "wudao",
    name: "悟道",
    icon: "☯️",
    category: "model",
    categoryLabel: "AI模型",
    desc: "智源中国最大AI大模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "magic-arena",
    name: "MagicArena",
    icon: "⚔️",
    category: "model",
    categoryLabel: "AI模型",
    desc: "字节视觉生成模型对战平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "mmlu",
    name: "MMLU",
    icon: "🏛️",
    category: "model",
    categoryLabel: "AI模型",
    desc: "大规模多任务语言理解基准",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "open-llm-leader",
    name: "Open LLM Leaderboard",
    icon: "🏆",
    category: "model",
    categoryLabel: "AI模型",
    desc: "HuggingFace开源大模型排行",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "ceval",
    name: "C-Eval",
    icon: "✅",
    category: "model",
    categoryLabel: "AI模型",
    desc: "中文基础模型评估套件",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "flageval",
    name: "FlagEval",
    icon: "🚩",
    category: "model",
    categoryLabel: "AI模型",
    desc: "智源天秤大模型评测平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "superclue",
    name: "SuperCLUE",
    icon: "🔬",
    category: "model",
    categoryLabel: "AI模型",
    desc: "中文通用大模型评测基准",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "agi-eval",
    name: "AGI-Eval",
    icon: "🎯",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI大模型评测社区",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "opencompass",
    name: "OpenCompass",
    icon: "🧭",
    category: "model",
    categoryLabel: "AI模型",
    desc: "上海AI实验室大模型评测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "cmmlu",
    name: "CMMLU",
    icon: "📊",
    category: "model",
    categoryLabel: "AI模型",
    desc: "综合性大模型中文评估",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "mmbench",
    name: "MMBench",
    icon: "📋",
    category: "model",
    categoryLabel: "AI模型",
    desc: "多模态大模型能力评测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "helm",
    name: "HELM",
    icon: "🎓",
    category: "model",
    categoryLabel: "AI模型",
    desc: "斯坦福大模型评测体系",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "lm-arena",
    name: "LMArena",
    icon: "⛳",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型评估平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "llmeval3",
    name: "LLMEval3",
    icon: "🧾",
    category: "model",
    categoryLabel: "AI模型",
    desc: "复旦NLP大模型评测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "h2o-evalgpt",
    name: "H2O EvalGPT",
    icon: "💧",
    category: "model",
    categoryLabel: "AI模型",
    desc: "Elo评级大模型评估系统",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "pubmedqa",
    name: "PubMedQA",
    icon: "⚕️",
    category: "model",
    categoryLabel: "AI模型",
    desc: "生物医学研究问答数据集",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "anything-llm",
    name: "AnythingLLM",
    icon: "📦",
    category: "model",
    categoryLabel: "AI模型",
    desc: "开源全栈AI客户端",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "study-corgi-detect",
    name: "StudyCorgi检测",
    icon: "🔬",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "免费检测论文是否ChatGPT生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "aiseo-detect",
    name: "AISEO检测",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AISEO AI内容检测器",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "writecream-detect",
    name: "Writecream检测",
    icon: "✍️",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "Writecream AI内容检测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "tuanxiang",
    name: "团象",
    icon: "🐘",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI内容检测与优化平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "ruixin-lunwen",
    name: "睿信论文检测",
    icon: "📄",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "中科睿鉴学术诚信检测",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "wacuo-wang",
    name: "挖错网",
    icon: "⛏️",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI内容审核校对纠错平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "promptpilot",
    name: "PromptPilot",
    icon: "🧭",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "火山方舟AI提示词方案",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "mijian-prompts",
    name: "幂简提示词商城",
    icon: "🛒",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词交易与管理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "prompt-guide",
    name: "提示工程指南",
    icon: "📘",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "Prompt Engineering指南",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "sd-prompt-book",
    name: "SD Prompt Book",
    icon: "📕",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "OpenArt免费提示词指南",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "local-banana",
    name: "LocalBanana",
    icon: "🍌",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI图像Prompt收集结构化",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "ai-prompt-gen",
    name: "AI Prompt Generator",
    icon: "⚡",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词自动生成工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "generrated",
    name: "Generrated",
    icon: "🎯",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词参考平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "public-prompts",
    name: "PublicPrompts",
    icon: "📂",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词公共资源库",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "snack-prompt",
    name: "Snack Prompt",
    icon: "🍿",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "ChatGPT提示词资源",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "ai-prompt-genius",
    name: "AI Prompt Genius",
    icon: "🧠",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词库创建管理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "awesome-chatgpt",
    name: "Awesome ChatGPT Prompts",
    icon: "⭐",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "ChatGPT提示词收集整理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "ai-prompt-library",
    name: "AI Prompt Library",
    icon: "📚",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "免费AI提示词资源平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "bitly",
    name: "Bitly",
    icon: "🔗",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "URL短链接服务",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "partner-stack",
    name: "PartnerStack",
    icon: "🤝",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "合作伙伴生态系统平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "impact-com",
    name: "impact.com",
    icon: "📊",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "AI原生合作伙伴管理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "tiaotiao-hao",
    name: "头条号",
    icon: "📱",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "字节跳动内容创作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "xinbang",
    name: "新榜",
    icon: "📈",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "新媒体数据服务平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "juejin",
    name: "稀土掘金",
    icon: "⛏️",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "技术内容社区与开发者服务",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "redbook-platform",
    name: "小红书创作平台",
    icon: "📕",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "一站式创作者服务",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "lingya-club",
    name: "灵芽社区",
    icon: "🌱",
    category: "resource",
    categoryLabel: "资源与社区",
    desc: "腾讯AI多模态创作者社区",
    url: "https://ai-bot.cn",
    detail: {
      intro: "资源与社区工具",
      features: ["资源与社区工具"],
      tags: ["资源与社区"]
    }
  },
  {
    id: "qoder-work-agent",
    name: "QoderWork",
    icon: "🏗️",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "阿里Qoder桌面端AI智能体",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "mavis-agent",
    name: "Mavis Agent",
    icon: "🐦",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "MiniMax多Agent协作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "moxt-work",
    name: "Moxt",
    icon: "🔮",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI原生工作空间",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "loomy",
    name: "Loomy",
    icon: "💡",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "科大讯飞桌面级AI个人助理",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "qclaw",
    name: "QClaw",
    icon: "🐧",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "腾讯电脑管家基于OpenClaw的AI助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "aippy",
    name: "Aippy",
    icon: "🎮",
    category: "side-project",
    categoryLabel: "AI副业",
    desc: "游戏版TikTok AI社区",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI副业工具",
      features: ["AI副业工具"],
      tags: ["AI副业"]
    }
  },
  {
    id: "maxhermes",
    name: "MaxHermes",
    icon: "⚡",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "MiniMax全球首个云端沙箱",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "agentpolis",
    name: "AgentPolis",
    icon: "🏙️",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI Agent交易社交协作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "lovart",
    name: "Lovart",
    icon: "🎭",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "LiblibAI全球首个设计智能体",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "minimax-hub",
    name: "MiniMax Hub",
    icon: "🏠",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "MiniMax桌面端AI创意工作站",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "miao-da",
    name: "秒哒",
    icon: "💨",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "无代码AI应用开发平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "maishang-fei",
    name: "码上飞",
    icon: "✈️",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "一句话生成小程序/app/网页",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "miaowu-meoo",
    name: "秒悟Meoo",
    icon: "🌟",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "阿里首个对话式AI开发工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "lingguang",
    name: "灵光",
    icon: "💡",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "蚂蚁AI对话与应用生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "wan-xiao-zhi",
    name: "万小智",
    icon: "🏗️",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "阿里云企业级AI建站",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "maiya-ai",
    name: "麦芽AI",
    icon: "🌾",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "多范式兼容全流程AI开发",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "worldclaw",
    name: "WorldClaw",
    icon: "🌍",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "World Liberty AI模型聚合",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "tokendance",
    name: "TokenDance",
    icon: "💃",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "一站式大模型API调用平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "bocha-wanxiang",
    name: "博查万象",
    icon: "🔤",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "多模态混合搜索API平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "bai-ai",
    name: "B.AI",
    icon: "⚡",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "基于区块链大模型API聚合",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "base44",
    name: "BASE44",
    icon: "🔢",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "零代码AI应用开发平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "yingboyun",
    name: "英博云AI算力",
    icon: "🔥",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "英博数科GPU智算云平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "huizhi-token",
    name: "汇智Token工场",
    icon: "🏭",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "大模型API聚合与推理云",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "bo-er",
    name: "玻尔",
    icon: "⚛️",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "新一代科研知识库与AI学术搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "cuspai",
    name: "CuspAI",
    icon: "🔬",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "剑桥大学材料学专业AI搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "sheepgeo",
    name: "SheepGeo",
    icon: "🐑",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "国内首个AI GEO分析平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "bojian-patent",
    name: "博简智慧专利",
    icon: "📜",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI专利查新检索与撰写",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "lianqi-ai",
    name: "链企AI",
    icon: "🔗",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI商业搜索和标书写作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "wenwen-xiaoyuzhou",
    name: "问问小宇宙",
    icon: "🪐",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "小宇宙AI搜索产品",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "dexa-ai",
    name: "Dexa AI",
    icon: "🎙️",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI播客搜索工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "xanswer",
    name: "XAnswer",
    icon: "❌",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "支持生成思维导图的AI搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "alpha-sense",
    name: "AlphaSense",
    icon: "📊",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "金融专业人士AI搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "reportify",
    name: "Reportify",
    icon: "📈",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI投资研究问答搜索",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "deepseek-chat",
    name: "DeepSeek",
    icon: "🧊",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "幻方量化AI智能助手和开源大模型",
    url: "https://ai-bot.cn",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "minimax-chat",
    name: "MiniMax",
    icon: "🌀",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "MiniMax AI智能问答助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "onlook",
    name: "Onlook",
    icon: "👀",
    category: "design",
    categoryLabel: "AI设计",
    desc: "开源AI视觉编辑工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "ribbi",
    name: "Ribbi",
    icon: "🎀",
    category: "design",
    categoryLabel: "AI设计",
    desc: "自进化创意AI Agent",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "gem-design",
    name: "GemDesign",
    icon: "💎",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI原生高保真原型设计",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "mayou-chuangyi",
    name: "蚂上有创意",
    icon: "🐜",
    category: "design",
    categoryLabel: "AI设计",
    desc: "支付宝商家AI设计工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "ai-sheji",
    name: "爱设计",
    icon: "❤️",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI在线设计平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "pagepop",
    name: "PagePop",
    icon: "📄",
    category: "design",
    categoryLabel: "AI设计",
    desc: "一站式AI内容创作和设计",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "xiaomo-ying",
    name: "小墨鹰编辑器",
    icon: "🦅",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI公众号排版工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "meijian-ai",
    name: "美间AI",
    icon: "🌸",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI画布式创意设计平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "calicat",
    name: "Calicat",
    icon: "🐱",
    category: "design",
    categoryLabel: "AI设计",
    desc: "ProcessOn产设研协作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "writer-content-detector",
    name: "Writer检测器",
    icon: "✍️",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "Writer AI内容检测工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "proofig-detect",
    name: "Proofig",
    icon: "🔬",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测科研图像是否造假",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "ai-share-circle",
    name: "AI分享圈",
    icon: "💫",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI免费资源分享网站",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "ms-gen-ai",
    name: "生成式AI初学者",
    icon: "📘",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "微软免费生成式AI课程",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "duiyou-learn",
    name: "堆友AI学习",
    icon: "🎓",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "堆友AI设计知识学习",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "meome-ai",
    name: "MemoAI",
    icon: "🗒️",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "免费AI语音转文字",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "yinjian-ai",
    name: "音剪",
    icon: "✂️",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "喜马拉雅一站式AI音频创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "yinmi-baidu",
    name: "音秘",
    icon: "🔐",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "百度AI播客创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "yin-chao",
    name: "音潮",
    icon: "🌊",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "全栈自研AI音乐创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "yinfeng-kunlun",
    name: "音疯",
    icon: "🌪️",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "昆仑万维AI音乐创作",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "oii-oii",
    name: "OiiOii",
    icon: "👁️",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "全球首个专业动画创作Agent",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "genspark-agent",
    name: "Genspark",
    icon: "💫",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "一站式AI工作空间",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "wukong-agent",
    name: "悟空 (阿里)",
    icon: "🐵",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "阿里企业级AI原生工作平台",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "todesk-ai-agent",
    name: "ToDesk AI",
    icon: "🖥️",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "桌面端AI智能助手",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "huihua-ai-video",
    name: "绘蛙AI视频",
    icon: "🐸",
    category: "video",
    categoryLabel: "AI视频",
    desc: "绘蛙图生视频工具",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "duiyou-video",
    name: "堆友AI视频",
    icon: "🎥",
    category: "video",
    categoryLabel: "AI视频",
    desc: "堆友AI视频生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "tongyi-video",
    name: "通义万相AI视频",
    icon: "🌌",
    category: "video",
    categoryLabel: "AI视频",
    desc: "阿里AI视频生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "keling-video",
    name: "可灵AI视频",
    icon: "📺",
    category: "video",
    categoryLabel: "AI视频",
    desc: "快手AI视频生成",
    url: "https://ai-bot.cn",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "coze",
    name: "Coze",
    icon: "✍️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cnhttps://ai-bot.cn/sites/6791.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "绘蛙",
    name: "绘蛙",
    icon: "✍️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cnhttps://ai-bot.cn/sites/9195.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "即梦",
    name: "即梦",
    icon: "✍️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cnhttps://ai-bot.cn/sites/17772.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "trae",
    name: "TRAE",
    icon: "✍️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cnhttps://ai-bot.cn/sites/65814.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "liblibai",
    name: "LiblibAI",
    icon: "✍️",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cnhttps://ai-bot.cn/sites/66771.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "星-ai",
    name: "星��AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cnhttps://ai-bot.cn/sites/61482.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "维普科创助手",
    name: "维普科创助手",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/60799.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "量子探险",
    name: "量子探险",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/65468.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "社研通",
    name: "社研通",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/68892.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "rubriq",
    name: "Rubriq",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/65034.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "quillbot",
    name: "QuillBot",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/597.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "创一ai",
    name: "创一AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/16669.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "讯飞文书",
    name: "讯飞文书",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/67827.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "muset",
    name: "Muset",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/62139.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "华文笔杆",
    name: "华文笔杆",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/63152.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "千页小说ai",
    name: "千页小说AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/64875.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "秘塔写作猫",
    name: "秘塔写作猫",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/13.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "公文宝",
    name: "公文宝",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/62117.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "讯飞写作",
    name: "讯飞写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/15170.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "paperxie智能写作",
    name: "PaperXie智能写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/61164.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "flowus-ai",
    name: "FlowUs AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7313.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "rytr",
    name: "Rytr",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/46.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "迅捷ai写作",
    name: "迅捷AI写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/16451.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "橙篇",
    name: "橙篇",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/12962.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "深言达意",
    name: "深言达意",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/6044.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "彩云小梦",
    name: "彩云小梦",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/913.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "midreal",
    name: "MidReal",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/14278.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "墨狐ai",
    name: "墨狐AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/15321.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "掌桥科研ai论文",
    name: "掌桥科研AI论文",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/59730.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "灵犀速写",
    name: "灵犀速写",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/59700.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/31.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "jasper",
    name: "Jasper",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/14.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "库宝ai工作助手",
    name: "库宝AI工作助手",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/14618.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "文状元",
    name: "文状元",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/26114.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "晓语台",
    name: "晓语台",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/6316.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "writesonic",
    name: "Writesonic",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/32.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "deepl-write",
    name: "DeepL Write",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/608.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "jenni",
    name: "Jenni",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/2304.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "有道翻译-ai写作",
    name: "有道翻译·AI写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/23116.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "wordvice-ai",
    name: "Wordvice AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/23677.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "ai新媒体文章",
    name: "AI新媒体文章",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/14511.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "魔撰写作",
    name: "魔撰写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/2009.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "宙语cosmos",
    name: "宙语Cosmos",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/26065.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "灵构ai笔记",
    name: "灵构AI笔记",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/5572.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "有道写作",
    name: "有道写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/2097.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "写作蛙",
    name: "写作蛙",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/5001.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "文思助手",
    name: "文思助手",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/16171.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "writewise",
    name: "WriteWise",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/5577.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "百度作家平台",
    name: "百度作家平台",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/4430.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "爱创作",
    name: "爱创作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/2404.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "verse",
    name: "Verse",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/2940.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "moonbeam",
    name: "Moonbeam",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1325.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "cohesive",
    name: "Cohesive",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/2195.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "万彩ai",
    name: "万彩AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/2388.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "writingpal",
    name: "WritingPal",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/9744.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "magic-write",
    name: "Magic Write",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/59.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "novelai",
    name: "NovelAI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1062.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "奇妙文",
    name: "奇妙文",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1930.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "spell-tools",
    name: "Spell.tools",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/575.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "hyperwrite",
    name: "HyperWrite",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/577.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "typeface-ai",
    name: "Typeface AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/580.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "悉语",
    name: "悉语",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/39.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "文涌effidit",
    name: "文涌Effidit",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/37.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "火龙果写作",
    name: "火龙果写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/12.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "树熊写作",
    name: "树熊写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/24575.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "爱改写",
    name: "爱改写",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/592.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "heyfriday",
    name: "HeyFriday",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/711.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "易撰",
    name: "易撰",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/36.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "智搜",
    name: "智搜",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/35.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "创作王",
    name: "创作王",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1333.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "字符狂飙",
    name: "字符狂飙",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1459.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "xpaper-ai",
    name: "XPaper AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7424.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "悟智写作",
    name: "悟智写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7575.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "讯飞智检",
    name: "讯飞智检",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1515.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "contentbot",
    name: "ContentBot",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/782.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "5118-seo优化精灵",
    name: "5118 SEO优化精灵",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://www.5118.com/ai/articlegenius",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "bearly",
    name: "Bearly",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1061.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "快文copydone",
    name: "快文CopyDone",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1295.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "peppertype-ai",
    name: "Peppertype.ai",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/65.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "compose-ai",
    name: "Compose AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/973.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "texta",
    name: "Texta",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/258.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "sudowrite",
    name: "Sudowrite",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/961.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "closerscopy",
    name: "ClosersCopy",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/966.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "wps智能写作",
    name: "WPS智能写作",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/33.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "anyword",
    name: "Anyword",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/188.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "hypotenuse-ai",
    name: "Hypotenuse AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/589.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "smodin-ai-research-paper",
    name: "Smodin AI Research Paper",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7510.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "paragraphai",
    name: "ParagraphAI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1065.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "longshot",
    name: "LongShot",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/776.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "jounce",
    name: "Jounce",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/153.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "reword",
    name: "Reword",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/127.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "elephas",
    name: "Elephas",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1067.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "aiseo",
    name: "AISEO",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/409.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "paperbetter-ai",
    name: "PaperBetter AI",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7418.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "writer",
    name: "Writer",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/170.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "范文喵",
    name: "范文喵",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7364.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "小微智能论文",
    name: "小微智能论文",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7512.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "笔杆论文",
    name: "笔杆论文",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7371.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "ai论文君",
    name: "AI论文君",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/7507.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "surferseo",
    name: "SurferSEO",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/201.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "prowritingaid",
    name: "ProWritingAid",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/204.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "wordtune",
    name: "WordTune",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/203.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "yaara",
    name: "Yaara",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/198.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "copysmith",
    name: "Copysmith",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/66.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "frase",
    name: "Frase",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/200.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "neuraltext",
    name: "NeuralText",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/202.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "copymatic",
    name: "Copymatic",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/197.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "textcortex",
    name: "TextCortex",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/158.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "星火网文助手",
    name: "星火网文助手",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/10977.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "ink",
    name: "INK",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/205.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "content-at-scale",
    name: "Content at Scale",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/171.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "mark-copy",
    name: "Mark Copy",
    icon: "✍",
    category: "writing",
    categoryLabel: "AI写作",
    desc: "AI写作工具",
    url: "https://ai-bot.cn/sites/1265.html",
    detail: {
      intro: "AI写作工具",
      features: ["AI写作工具"],
      tags: ["AI写作"]
    }
  },
  {
    id: "堆友ai商品图",
    name: "堆友AI商品图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/61384.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "liblibai电商营销",
    name: "LiblibAI电商营销",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/68318.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "美图商拍",
    name: "美图商拍",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/33694.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "稿定ai商品图",
    name: "稿定AI商品图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/49519.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "光子ai",
    name: "光子AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/57727.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "蜂鸟ai",
    name: "蜂鸟AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/41196.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "photostudio-ai",
    name: "PhotoStudio AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/12165.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "蕉点ai",
    name: "蕉点AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/70979.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "潮际好麦",
    name: "潮际好麦",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/69883.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "千鹿ai",
    name: "千鹿AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/24841.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "妙思",
    name: "妙思",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/50029.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "美间ai商拍",
    name: "美间AI商拍",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/25529.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "cliclic-ai",
    name: "Cliclic AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/13023.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "创自由",
    name: "创自由",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/17398.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "pebblely",
    name: "Pebblely",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/175.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "mokker-ai",
    name: "Mokker AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/173.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "花生图像",
    name: "花生图像",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/11541.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "图生生",
    name: "图生生",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/26931.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "weshop唯象",
    name: "WeShop唯象",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/13722.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "羚珑",
    name: "羚珑",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2048.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "灵动ai",
    name: "灵动AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6749.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "绘蛙ai转3d",
    name: "绘蛙AI转3D",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/61408.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "tripo-ai",
    name: "Tripo AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/60471.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "腾讯混元3d",
    name: "腾讯混元3D",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/38482.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "neural4d",
    name: "Neural4D",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/70251.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "marble",
    name: "Marble",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/66545.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "fast3d",
    name: "Fast3D",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/57279.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "omma",
    name: "Omma",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/74348.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "造好物",
    name: "造好物",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/59706.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "hitems",
    name: "Hitems",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/38477.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "style3d",
    name: "Style3D",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/67092.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "luxreal",
    name: "LuxReal",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/69990.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "voxcraft",
    name: "VoxCraft",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/11164.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "meshy",
    name: "Meshy",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6080.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "绘蛙ai抠图",
    name: "绘蛙AI抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/61375.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "liblibai抠图",
    name: "LiblibAI抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/68297.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "美图抠图",
    name: "美图抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/1991.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "顽兔抠图",
    name: "顽兔抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/4483.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "鲜艺ai抠图",
    name: "鲜艺AI抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/18104.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "抠抠图",
    name: "抠抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/70008.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "pic-copilot-ai抠图",
    name: "Pic Copilot AI抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/32253.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "光子ai抠图",
    name: "光子AI抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/61292.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "pixian-ai",
    name: "Pixian.AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/7983.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "icons8-background-remover",
    name: "Icons8 Background Remover",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/88.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "bgsub",
    name: "BgSub",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/242.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "clipdrop-remove-background",
    name: "ClipDrop Remove Background",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/221.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "erase-bg",
    name: "Erase.bg",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/285.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "千图设计室ai助手",
    name: "千图设计室AI助手",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/9946.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "adobe-image-background-remover",
    name: "Adobe Image Background Remover",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/313.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "removal-ai",
    name: "Removal.AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/87.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "background-eraser",
    name: "Background Eraser",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/274.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "slazzer",
    name: "Slazzer",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/311.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "cutout-pro抠图",
    name: "Cutout.Pro抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/306.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "吐司ai抠图",
    name: "吐司AI抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/42689.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "bgremover",
    name: "BGremover",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/304.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "quicktools-background-remover",
    name: "Quicktools Background Remover",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/312.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "zyro-ai-background-remover",
    name: "Zyro AI Background Remover",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/302.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "photoscissors",
    name: "PhotoScissors",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/284.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "clippingmagic",
    name: "ClippingMagic",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/310.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "图可丽",
    name: "图可丽",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/1780.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "hotpot-ai-background-remover",
    name: "Hotpot AI Background Remover",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/303.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "stylized",
    name: "Stylized",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/174.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "booth-ai",
    name: "Booth.ai",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/178.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "堆友ai反应堆",
    name: "堆友AI反应堆",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/3382.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "liblibai-哩布哩布ai",
    name: "LiblibAI·哩布哩布AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6474.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "civitai",
    name: "Civitai",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6297.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "秒画",
    name: "秒画",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/4749.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "whee",
    name: "WHEE",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2976.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "奇域ai",
    name: "奇域AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/12769.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "触手ai绘画",
    name: "触手AI绘画",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/5198.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "造梦日记",
    name: "造梦日记",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2382.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "canva-ai图像生成",
    name: "Canva AI图像生成",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/58.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "超能画布",
    name: "超能画布",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/10982.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "bing-image-creator",
    name: "Bing Image Creator",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/912.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/726.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "简单ai",
    name: "简单AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/4009.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "摩笔马良",
    name: "摩笔马良",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/11123.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "exactly-ai",
    name: "Exactly.ai",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/12987.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "画宇宙",
    name: "画宇宙",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2505.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "6pen-art",
    name: "6pen Art",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2342.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "创客贴ai画匠",
    name: "创客贴AI画匠",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/1818.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "visual-electric",
    name: "Visual Electric",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6463.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "360智绘",
    name: "360智绘",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6840.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "网易ai创意工坊",
    name: "网易AI创意工坊",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/4212.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "imagine-with-meta",
    name: "Imagine with Meta",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6492.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "freepik-ai-image-generator",
    name: "Freepik AI Image Generator",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2762.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "stockimg-ai",
    name: "Stockimg AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/151.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "stable-doodle",
    name: "Stable Doodle",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/3529.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "175fun",
    name: "175FUN",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2676.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "堆友ai高清",
    name: "堆友AI高清",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/61388.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "绘蛙ai高清",
    name: "绘蛙AI高清",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/56509.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "美图无损放大",
    name: "美图无损放大",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/33867.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "liblibai高清放大",
    name: "LiblibAI高清放大",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/68439.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "upscayl",
    name: "Upscayl",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/1531.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "goprod",
    name: "GoProd",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2576.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "bigjpg",
    name: "BigJPG",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/210.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "mejorar-imagen",
    name: "Mejorar Imagen",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/14941.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "magnific-ai",
    name: "Magnific AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/7402.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "let-8217-s-enhance",
    name: "Let&#8217;s Enhance",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2333.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "icons8-smart-upscaler",
    name: "Icons8 Smart Upscaler",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/217.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "clipdrop-image-upscaler",
    name: "ClipDrop Image Upscaler",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/220.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "img-upscaler",
    name: "Img.Upscaler",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/219.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "fotor-ai-image-upscaler",
    name: "Fotor AI Image Upscaler",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/218.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "zyro-ai-image-upscaler",
    name: "Zyro AI Image Upscaler",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/216.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "media-io-ai-image-upscaler",
    name: "Media.io AI Image Upscaler",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/222.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "upscale-media",
    name: "Upscale.media",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/215.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "nero-image-upscaler",
    name: "Nero Image Upscaler",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/213.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "vanceai-image-resizer",
    name: "VanceAI Image Resizer",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/212.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "photoaid-image-upscaler",
    name: "PhotoAid Image Upscaler",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/211.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "upscalepics",
    name: "Upscalepics",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/223.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "image-enlarger",
    name: "Image Enlarger",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/275.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "pixelhunter",
    name: "Pixelhunter",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/214.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "堆友ai消除",
    name: "堆友AI消除",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/61396.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "绘蛙ai消除",
    name: "绘蛙AI消除",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/28404.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "美图ai消除",
    name: "美图AI消除",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/33683.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "liblibai去水印",
    name: "LiblibAI去水印",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/68305.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "稿定ai消除",
    name: "稿定AI消除",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/49506.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "hama",
    name: "Hama",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/268.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "iopaint",
    name: "IOPaint",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/9056.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "bg-eraser",
    name: "Bg Eraser",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/691.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "snapedit",
    name: "SnapEdit",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/688.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "cleanup-pictures",
    name: "Cleanup.pictures",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/687.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "cutout-pro-retouch",
    name: "Cutout.Pro Retouch",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/307.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "蜜蜂剪辑",
    name: "蜜蜂剪辑",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/21260.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "吐司ai消除",
    name: "吐司AI消除",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/43780.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "hitpaw-watermark-remover",
    name: "HitPaw Watermark Remover",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/21255.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "magic-eraser",
    name: "Magic Eraser",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/273.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "watermarkremover",
    name: "WatermarkRemover",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/1683.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "liblibai高清修复",
    name: "LibLibAI高清修复",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/68439.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "稿定ai变清晰",
    name: "稿定AI变清晰",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/49491.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "facet",
    name: "Facet",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/976.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "relight",
    name: "Relight",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/299.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "imgak",
    name: "imgAK",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/69515.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "美图云修",
    name: "美图云修",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/2042.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "remini",
    name: "Remini",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6590.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "jpghd",
    name: "jpgHD",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/1680.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "像素蛋糕pixcake",
    name: "像素蛋糕PixCake",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6075.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "咻图ai",
    name: "咻图AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/6575.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "airbrush",
    name: "AirBrush",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/69820.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "restorephotos-io",
    name: "restorePhotos.io",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/154.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "picma-studio",
    name: "PicMa Studio",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/17485.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "transpic",
    name: "transpic",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/4246.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "cutout-pro老照片上色",
    name: "Cutout.Pro老照片上色",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/308.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "palette",
    name: "Palette",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/104.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "playground-ai",
    name: "Playground AI",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/126.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "吐司ai高清",
    name: "吐司AI高清",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/42692.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "呜哩",
    name: "呜哩",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/70059.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "万相营造",
    name: "万相营造",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://ai-bot.cn/sites/29264.html",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "稿定ai抠图",
    name: "稿定AI抠图",
    icon: "🎨",
    category: "image",
    categoryLabel: "AI绘图",
    desc: "AI绘图工具",
    url: "https://www.gaoding.com/utms/dfdc2191877f434880bf01c62e86ea6c",
    detail: {
      intro: "AI绘图工具",
      features: ["AI绘图工具"],
      tags: ["AI绘图"]
    }
  },
  {
    id: "soundview",
    name: "SoundView",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/35756.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "万镜一刻",
    name: "万镜一刻",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/75094.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "tagomovie",
    name: "TagoMovie",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/75606.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "灵绘ai",
    name: "灵绘AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/75762.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "pixmax",
    name: "Pixmax",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/75615.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "brainrot-mov",
    name: "Brainrot.mov",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/76249.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "造次",
    name: "造次",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/66554.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "花生ai",
    name: "花生AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/67673.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "vibeknow",
    name: "VibeKnow",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/74718.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "museart-ai",
    name: "MuseArt AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/73537.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "anishort",
    name: "AniShort",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/73422.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "献丑ai",
    name: "献丑AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/70208.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "mochiani",
    name: "MochiAni",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/69647.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "adsturbo-ai",
    name: "AdsTurbo AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/72345.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "nextcut-ai",
    name: "NextCut AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/69946.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "云幕同声",
    name: "云幕同声",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/69629.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "萌动ai",
    name: "萌动AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/63694.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "komikoai",
    name: "KomikoAI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/68087.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "keevx",
    name: "Keevx",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/60378.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "即创",
    name: "即创",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/5560.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "智谱清影",
    name: "智谱清影",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/59040.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "内容特工队",
    name: "内容特工队",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/65041.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "磁力开创",
    name: "磁力开创",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/62311.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "a2e",
    name: "A2E",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/69913.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "hitpaw",
    name: "HitPaw",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/64276.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "kreadoai",
    name: "KreadoAI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12385.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "sekotalk",
    name: "SekoTalk",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/63158.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "通义灵眸",
    name: "通义灵眸",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/63255.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "巨日禄",
    name: "巨日禄",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16162.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "boba",
    name: "Boba",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/59515.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "dream-machine",
    name: "Dream Machine",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/13455.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "讯飞绘镜",
    name: "讯飞绘镜",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12254.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "hedra",
    name: "Hedra",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/13679.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "vozo",
    name: "Vozo",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/14640.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "viggle",
    name: "Viggle",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/11148.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "tavus",
    name: "Tavus",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16651.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "妙播",
    name: "妙播",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/50033.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "秒创",
    name: "秒创",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1880.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "skyreels",
    name: "SkyReels",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16753.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "moki",
    name: "MOKI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/13399.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "flow-studio",
    name: "Flow Studio",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/20030.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "vizard",
    name: "Vizard",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/15664.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "寻光",
    name: "寻光",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/14162.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "hotshot",
    name: "Hotshot",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16965.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "vivago-ai",
    name: "vivago.ai",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12586.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "humva",
    name: "Humva",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/18010.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "d-id",
    name: "D-ID",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/987.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "stable-video",
    name: "Stable Video",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/8662.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "onestory",
    name: "OneStory",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/15182.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "noisee-ai",
    name: "Noisee AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/13667.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "万兴播爆",
    name: "万兴播爆",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1237.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "vimi",
    name: "Vimi",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/14067.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "etna",
    name: "Etna",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/24359.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "艺映ai",
    name: "艺映AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/24161.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "lensgo",
    name: "LensGo",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/23891.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "必剪studio",
    name: "必剪Studio",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/11721.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "度加创作工具",
    name: "度加创作工具",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/2670.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "winkstudio",
    name: "WinkStudio",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/6718.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "vmagic",
    name: "VMagic",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/23943.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "讯飞虚拟人",
    name: "讯飞虚拟人",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/19680.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "飞影数字人",
    name: "飞影数字人",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/24851.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "video-studio",
    name: "Video Studio",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/22195.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "pixfun",
    name: "Pixfun",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16633.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "decohere",
    name: "Decohere",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12250.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "yoyo",
    name: "YoYo",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16242.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "opus-clip",
    name: "Opus Clip",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16730.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "filmora",
    name: "Filmora",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16735.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "曦灵数字人",
    name: "曦灵数字人",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/11975.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "开拍",
    name: "开拍",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/7280.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "duix",
    name: "Duix",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/13802.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "场辞",
    name: "场辞",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/14469.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "一起剪",
    name: "一起剪",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/16086.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "spikes-studio",
    name: "Spikes Studio",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/11245.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "google-vids",
    name: "Google Vids",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/10935.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "domoai",
    name: "DomoAI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/6983.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "gatekeep",
    name: "Gatekeep",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/10195.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "morph-studio",
    name: "Morph Studio",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/7225.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "showrunner",
    name: "Showrunner",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/13114.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "即构数智人",
    name: "即构数智人",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/13554.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "快剪辑",
    name: "快剪辑",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/3043.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "闪剪",
    name: "闪剪",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/10635.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "wonder-studio",
    name: "Wonder Studio",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1424.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "magicam",
    name: "Magicam",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/13049.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "ltx-studio",
    name: "LTX Studio",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/9071.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "clipfly",
    name: "Clipfly",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/9622.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "captions",
    name: "Captions",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/11382.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "capsule",
    name: "Capsule",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/4808.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "goenhance",
    name: "GoEnhance",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12248.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "invideo-ai",
    name: "InVideo AI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12249.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "unscreen",
    name: "Unscreen",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/40.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "ebsynth",
    name: "EbSynth",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1821.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "artflow",
    name: "Artflow",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/985.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "kaiber",
    name: "Kaiber",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1633.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "typeframes",
    name: "Typeframes",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/8530.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "dreamface",
    name: "DreamFace",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/361.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "mootion",
    name: "Mootion",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/8525.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "来画",
    name: "来画",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1497.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "奇妙元",
    name: "奇妙元",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1926.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "绘影字幕",
    name: "绘影字幕",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/2116.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "fliki",
    name: "Fliki",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/256.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "anylang-ai",
    name: "Anylang.ai",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/7162.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "deepbrain",
    name: "DeepBrain",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/774.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "lumen5",
    name: "Lumen5",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/786.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "rephrase-ai",
    name: "Rephrase.ai",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/142.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "万彩微影",
    name: "万彩微影",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/2599.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "录咖",
    name: "录咖",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/9394.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "怪兽ai数字人",
    name: "怪兽AI数字人",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/8805.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "团队快剪",
    name: "团队快剪",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12247.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "鬼手剪辑ghostcut",
    name: "鬼手剪辑GhostCut",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12245.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "模力视频",
    name: "模力视频",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/12246.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "gencraft",
    name: "Gencraft",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1500.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "synthesys",
    name: "Synthesys",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/399.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "veed-video-background-remover",
    name: "Veed Video Background Remover",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/236.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "hour-one",
    name: "Hour One",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/231.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "bgrem",
    name: "BgRem",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/239.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "colourlab-ai",
    name: "Colourlab.ai",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/166.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "cutout-pro",
    name: "Cutout.Pro",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/237.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "colossyan",
    name: "Colossyan",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/229.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "avclabs",
    name: "AVCLabs",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/238.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "elai-io",
    name: "Elai.io",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/226.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "pictory",
    name: "Pictory",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/225.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "steveai",
    name: "SteveAI",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/224.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "rask",
    name: "Rask",
    icon: "🎬",
    category: "video",
    categoryLabel: "AI视频",
    desc: "AI视频工具",
    url: "https://ai-bot.cn/sites/1243.html",
    detail: {
      intro: "AI视频工具",
      features: ["AI视频工具"],
      tags: ["AI视频"]
    }
  },
  {
    id: "百度文库ai助手",
    name: "百度文库AI助手",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/5037.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "napkin",
    name: "Napkin",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/16885.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "课灵-ppt",
    name: "课灵 PPT",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/69127.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "吾律ai律师",
    name: "吾律AI律师",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/62107.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "元典智库",
    name: "元典智库",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/13593.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "通义法睿",
    name: "通义法睿",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11436.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "法行宝",
    name: "法行宝",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11432.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "iterms",
    name: "iTerms",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/64973.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "metalaw",
    name: "MetaLaw",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/70602.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "chatlaw",
    name: "ChatLaw",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11444.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "得理法搜",
    name: "得理法搜",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11442.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "法智",
    name: "法智",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/17480.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "海瑞智法",
    name: "海瑞智法",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11443.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "合同嗖嗖",
    name: "合同嗖嗖",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11456.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "chatexcel",
    name: "ChatExcel",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/69072.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "数以轻舟agent",
    name: "数以轻舟Agent",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/77034.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "察言观数asktable",
    name: "察言观数AskTable",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/65832.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "tomoro",
    name: "Tomoro",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/63302.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "shortcut",
    name: "Shortcut",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/59541.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "爱图表",
    name: "爱图表",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/59717.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "chartinai",
    name: "ChartinAI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/70851.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "vika维格云",
    name: "vika维格云",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11865.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "百度gbi",
    name: "百度GBI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/16121.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "ajelix",
    name: "Ajelix",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/371.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "sheet",
    name: "Sheet+",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/373.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "轻云图",
    name: "轻云图",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/14533.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "北极九章",
    name: "北极九章",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/16152.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "formula-bot",
    name: "Formula bot",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/372.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "formx-ai",
    name: "FormX.ai",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/374.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "rows",
    name: "Rows",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1145.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "excelly-ai",
    name: "Excelly-AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1146.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "sheetgod",
    name: "SheetGod",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1148.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "excel-formularizer",
    name: "Excel Formularizer",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1149.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "小绿鲸",
    name: "小绿鲸",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/53977.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "lantay",
    name: "Lantay",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/75337.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "包阅ai",
    name: "包阅AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/13503.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "wisfile",
    name: "Wisfile",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/56588.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "omnibox小黑",
    name: "OmniBox小黑",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/64396.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "智写流程",
    name: "智写流程",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/59743.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "doc2x",
    name: "Doc2X",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/29778.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "acrobat-ai-assistant",
    name: "Acrobat AI Assistant",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/8594.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "腾讯文档智能助手",
    name: "腾讯文档智能助手",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/8079.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "cubox",
    name: "Cubox",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/8427.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "quivr",
    name: "Quivr",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/8353.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "coda",
    name: "Coda",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/2957.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "有道速读",
    name: "有道速读",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/7120.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "腾讯问卷",
    name: "腾讯问卷",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/8584.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "匡优ai",
    name: "匡优AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/19652.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "通义智文",
    name: "通义智文",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/5273.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "字语智能",
    name: "字语智能",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/2106.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "星火文档问答",
    name: "星火文档问答",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/5564.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "pmai",
    name: "PMAI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/6509.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "pdf-ai",
    name: "PDF.ai",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/6251.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "司马阅",
    name: "司马阅",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/3674.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "知我ai",
    name: "知我AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/6765.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "星火科研助手",
    name: "星火科研助手",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/6468.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "万知",
    name: "万知",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/9794.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "印象ai",
    name: "印象AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1734.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "craft-ai-assistant",
    name: "Craft AI Assistant",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/3488.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "treemind树图",
    name: "TreeMind树图",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1570.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "博思白板",
    name: "博思白板",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1534.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "畅图ai",
    name: "畅图AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/57154.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "可赞ai",
    name: "可赞AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/60383.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "processon",
    name: "ProcessOn",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/6235.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "自由画布",
    name: "自由画布",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/29570.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "亿图脑图",
    name: "亿图脑图",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/2621.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "妙办画板",
    name: "妙办画板",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/24687.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "mapify",
    name: "Mapify",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/13028.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "小画桌",
    name: "小画桌",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/6811.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "印象图记",
    name: "印象图记",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/2179.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "知犀ai",
    name: "知犀AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/6551.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "xmind-ai",
    name: "Xmind AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1869.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "gitmind思乎",
    name: "GitMind思乎",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1155.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "亿图图示ai",
    name: "亿图图示AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/23013.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "whimsical",
    name: "Whimsical",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/464.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "amymind",
    name: "AmyMind",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/952.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "taskade",
    name: "Taskade",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/709.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "miro-ai",
    name: "Miro AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1157.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "ayoa-ultimate",
    name: "Ayoa Ultimate",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1156.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "up简历",
    name: "UP简历",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/56807.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "超级简历",
    name: "超级简历",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/56512.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "求职方舟",
    name: "求职方舟",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/64294.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "面多多",
    name: "面多多",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/65119.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "牛面",
    name: "牛面",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/62342.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "面团ai",
    name: "面团AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/62337.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "xmatrix",
    name: "xMatrix",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/73202.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "智简简历",
    name: "智简简历",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/73092.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "笔面通",
    name: "笔面通",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/68863.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "ai面试帮",
    name: "AI面试帮",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/67371.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "理聘ai",
    name: "理聘AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/66201.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "51mee",
    name: "51mee",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/66166.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "lovtalent",
    name: "LovTalent",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/62789.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "telehireai面试",
    name: "TelehireAI面试",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/63291.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "dinq",
    name: "DINQ",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/58825.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "gank-interview",
    name: "Gank Interview",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/57153.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "职徒简历",
    name: "职徒简历",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1949.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "职得简历",
    name: "职得简历",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/26884.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "蓝字典ai求职",
    name: "蓝字典AI求职",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/26782.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "神笔简历",
    name: "神笔简历",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/26894.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "yoo简历",
    name: "YOO简历",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/15115.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "简单听记",
    name: "简单听记",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/28201.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "通义听悟",
    name: "通义听悟",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/2026.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "讯飞会议",
    name: "讯飞会议",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/722.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "飞书妙记",
    name: "飞书妙记",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/724.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "ai好记",
    name: "Ai好记",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/63427.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "腾讯会议ai小助手",
    name: "腾讯会议AI小助手",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/8649.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "zoom-workplace",
    name: "Zoom Workplace",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/10217.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "麦耳会记",
    name: "麦耳会记",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1185.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "fireflies-ai",
    name: "Fireflies.ai",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/718.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "noty-ai",
    name: "Noty.ai",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1147.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "airgram",
    name: "Airgram",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1807.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "飞书多维表格",
    name: "飞书多维表格",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/46015.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "ima-copilot",
    name: "ima.copilot",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/26420.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "tinywow",
    name: "TinyWow",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/605.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "ponder-ai",
    name: "Ponder AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/58413.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "我来wolai",
    name: "我来wolai",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/59463.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "typeless",
    name: "Typeless",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/69958.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "chattoc",
    name: "ChatTOC",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/71384.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "loom",
    name: "Loom",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/69878.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "kuse",
    name: "Kuse",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/60153.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "你好星识",
    name: "你好星识",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/59889.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "briefly",
    name: "Briefly",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/71074.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "easyclaw",
    name: "EasyClaw",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/71587.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "猫头鹰ai网页订阅",
    name: "猫头鹰AI网页订阅",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/68533.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "秒言ai语音输入法",
    name: "秒言AI语音输入法",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/68449.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "找我呀",
    name: "找我呀",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/63755.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "monica",
    name: "Monica",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1632.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "wps灵犀",
    name: "WPS灵犀",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/17620.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "glif",
    name: "Glif",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/13979.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "奇觅",
    name: "奇觅",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/13394.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "云一朵",
    name: "云一朵",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/3921.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "苏打办公",
    name: "苏打办公",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/23449.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "lightfield",
    name: "Lightfield",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/482.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "hoarder",
    name: "Hoarder",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/13103.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "通义晓蜜",
    name: "通义晓蜜",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/19653.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "奇妙问",
    name: "奇妙问",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11524.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "影刀ai-power",
    name: "影刀AI Power",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/11300.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "通答ai",
    name: "通答AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/13064.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "司马诸葛",
    name: "司马诸葛",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/14473.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "靠谱ai",
    name: "靠谱AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/13038.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "讯飞同传",
    name: "讯飞同传",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/72334.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "沉浸式翻译",
    name: "沉浸式翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/16725.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "deepl翻译",
    name: "DeepL翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1384.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "google翻译",
    name: "Google翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1381.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "堆友ai图片翻译",
    name: "堆友AI图片翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/61392.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "doclingo",
    name: "Doclingo",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/63262.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "belin-doc",
    name: "Belin Doc",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/59392.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "transor沉浸式翻译",
    name: "Transor沉浸式翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/64787.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "灵夕翻译",
    name: "灵夕翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/59348.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "会译",
    name: "会译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/25959.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "腾讯交互翻译",
    name: "腾讯交互翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/26673.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "deeptranslate",
    name: "DeepTranslate",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/20226.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "必应翻译",
    name: "必应翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1387.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "toby",
    name: "Toby",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/16079.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "百度翻译",
    name: "百度翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1363.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "阿里翻译",
    name: "阿里翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1851.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "搜狗翻译",
    name: "搜狗翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1369.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "腾讯翻译君",
    name: "腾讯翻译君",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1372.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "象寄翻译",
    name: "象寄翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/2921.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "网易见外",
    name: "网易见外",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/3044.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "讯飞智能翻译",
    name: "讯飞智能翻译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1389.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "彩云小译",
    name: "彩云小译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1378.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "百度ai同传助手",
    name: "百度AI同传助手",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1366.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "金山快译",
    name: "金山快译",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1854.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "飞书智能伙伴",
    name: "飞书智能伙伴",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/5947.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "钉钉斜杠",
    name: "钉钉斜杠“/”",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/1767.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "钉钉-个人版",
    name: "钉钉·个人版",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://ai-bot.cn/sites/4080.html",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "听脑ai",
    name: "听脑AI",
    icon: "📄",
    category: "productivity",
    categoryLabel: "AI办公",
    desc: "AI办公工具",
    url: "https://itingnao.com/home?source=3514&amp;unit=3516",
    detail: {
      intro: "AI办公工具",
      features: ["AI办公工具"],
      tags: ["AI办公"]
    }
  },
  {
    id: "堆友agent",
    name: "堆友Agent",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/77488.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "讯飞星辰agent",
    name: "讯飞星辰Agent",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/50068.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "扣子",
    name: "扣子",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/65797.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "悟空",
    name: "悟空",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/73661.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "loopit",
    name: "Loopit",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/75881.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "turix",
    name: "TuriX",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/75258.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "singclaw",
    name: "SingClaw",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/75154.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "accio-work",
    name: "Accio Work",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/74245.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "panofy",
    name: "Panofy",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/75096.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "nexu",
    name: "nexu",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/74636.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "724claw永动虾",
    name: "724Claw永动虾",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/74176.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "evomap",
    name: "EvoMap",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/72249.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "minimax-agent",
    name: "MiniMax Agent",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/72731.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "colaos",
    name: "ColaOS",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/74722.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "genflow",
    name: "GenFlow",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/66596.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "instreet",
    name: "InStreet",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/73166.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "小云雀",
    name: "小云雀",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/72152.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "dumate",
    name: "DuMate",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/74011.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "redclaw",
    name: "RedClaw",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/73722.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "winclaw",
    name: "WinClaw",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/73379.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "skillhub",
    name: "SkillHub",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/73259.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "切问学术",
    name: "切问学术",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/72406.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "leewow",
    name: "Leewow",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/71972.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "mixboard",
    name: "Mixboard",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/68239.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "memu-bot",
    name: "memU Bot",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/71465.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "元气ai-bot",
    name: "元气AI Bot",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/71314.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "workany",
    name: "WorkAny",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/70852.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "agnes-ai",
    name: "Agnes AI",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/59375.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "seele-ai",
    name: "Seele AI",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/59644.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "anygen",
    name: "AnyGen",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/69424.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "tbox",
    name: "Tbox",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/62355.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "稿定ai社区",
    name: "稿定AI社区",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/60312.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "椒图ai",
    name: "椒图AI",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/61891.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "遨虾",
    name: "遨虾",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/67279.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "亿话",
    name: "亿话",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/69201.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "tago",
    name: "Tago",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/67818.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "flowmuse-ai",
    name: "FlowMuse AI",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/67911.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "neodomain",
    name: "NeoDomain",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/67677.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "opera-neon",
    name: "Opera Neon",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/64120.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "seko",
    name: "Seko",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/58360.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "tabtab",
    name: "TabTab",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/60949.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "酷宣ai",
    name: "酷宣AI",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/60693.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "月亮树ai选品",
    name: "月亮树AI选品",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/64927.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "如此ai员工",
    name: "如此AI员工",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/60115.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "teamo",
    name: "Teamo",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/65208.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "scimaster",
    name: "SciMaster",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/58991.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "zeabur",
    name: "Zeabur",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/58176.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "myshell",
    name: "MyShell",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/58058.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "fingenius",
    name: "FinGenius",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/57411.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "混沌deep-innovation",
    name: "混沌Deep Innovation",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/62815.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "browseros",
    name: "BrowserOS",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/58161.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "crepal",
    name: "CrePal",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/57192.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "bloom",
    name: "Bloom",
    icon: "🤖",
    category: "agent",
    categoryLabel: "AI智能体",
    desc: "AI智能体工具",
    url: "https://ai-bot.cn/sites/60767.html",
    detail: {
      intro: "AI智能体工具",
      features: ["AI智能体工具"],
      tags: ["AI智能体"]
    }
  },
  {
    id: "千问",
    name: "千问",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1338.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/736.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "kimi智能助手",
    name: "Kimi智能助手",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/53747.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "z-ai",
    name: "Z.ai",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/62950.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "longcat",
    name: "LongCat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/61432.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "智谱清言",
    name: "智谱清言",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/2005.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "copilot",
    name: "Copilot",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/6019.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "character-ai",
    name: "Character.AI",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/137.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "meta-ai助手",
    name: "Meta AI助手",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/11358.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "bing新必应",
    name: "Bing新必应",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/457.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "koko-ai",
    name: "Koko AI",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/14989.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "通义星尘",
    name: "通义星尘",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/14310.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "cueme",
    name: "CueMe",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/20683.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "造梦次元",
    name: "造梦次元",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/17432.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "museland",
    name: "Museland",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/15123.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "百度ai助手",
    name: "百度AI助手",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/23550.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "小悟空",
    name: "小悟空",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/4841.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "紫东太初",
    name: "紫东太初",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/5509.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "小黄蕉",
    name: "小黄蕉",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/13251.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "冒泡鸭",
    name: "冒泡鸭",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/9412.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "cici",
    name: "Cici",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/14574.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "百川大模型",
    name: "百川大模型",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/4453.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "le-chat",
    name: "Le Chat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/8874.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "百度ai伙伴",
    name: "百度AI伙伴",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/2198.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "超级助理",
    name: "超级助理",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/6290.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "wanderboat",
    name: "Wanderboat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/14297.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "mchat",
    name: "MChat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/5533.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "luca面壁露卡",
    name: "Luca面壁露卡",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/4362.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "元象xchat",
    name: "元象XChat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/5678.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "chitchop",
    name: "ChitChop",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/6101.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "魔搭gpt-modelscopegpt",
    name: "魔搭GPT（ModelScopeGPT）",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/3403.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "forefront",
    name: "Forefront",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/2034.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "huggingchat",
    name: "HuggingChat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1978.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "tigerbot",
    name: "TigerBot",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/2771.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "stable-chat",
    name: "Stable Chat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/3973.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "colossalchat",
    name: "ColossalChat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1220.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "jasper-chat",
    name: "Jasper Chat",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/141.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "moss",
    name: "MOSS",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1858.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "youchat-ai",
    name: "YouChat AI",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/140.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "chatsonic",
    name: "ChatSonic",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/139.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "replika",
    name: "Replika",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/138.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "whispr",
    name: "Whispr",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/163.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "open-assistant",
    name: "Open Assistant",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1656.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "pi",
    name: "Pi",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/2122.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "inworld",
    name: "Inworld",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1710.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "360智脑",
    name: "360智脑",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1714.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "neeva",
    name: "Neeva",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1890.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "对话写作猫",
    name: "对话写作猫",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/1608.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "应事ai",
    name: "应事AI",
    icon: "💬",
    category: "conversation",
    categoryLabel: "对话大模型",
    desc: "对话大模型工具",
    url: "https://ai-bot.cn/sites/4655.html",
    detail: {
      intro: "对话大模型工具",
      features: ["对话大模型工具"],
      tags: ["对话大模型"]
    }
  },
  {
    id: "codex",
    name: "Codex",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/53.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "kiro",
    name: "Kiro",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/57086.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "zcode",
    name: "Zcode",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/69134.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "catpaw",
    name: "CatPaw",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/65836.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "codewhisperer",
    name: "CodeWhisperer",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/1616.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "zread",
    name: "Zread",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/57573.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "qodo",
    name: "Qodo",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/789.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "codegeex",
    name: "CodeGeeX",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/1131.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "amp",
    name: "Amp",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/2613.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "devchat",
    name: "DevChat",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/7582.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "joycode",
    name: "JoyCode",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/57642.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "文心快码",
    name: "文心快码",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/4099.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "iflycode",
    name: "iFlyCode",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/4055.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "twinny",
    name: "Twinny",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/22307.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "project-idx",
    name: "Project IDX",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/12491.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "华为云码道",
    name: "华为云码道",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/55229.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "sketch2code",
    name: "Sketch2Code",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/938.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "codefuse",
    name: "CodeFuse",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/5256.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "tabby",
    name: "Tabby",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/9382.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "c知道",
    name: "C知道",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/11812.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "驭码coderider",
    name: "驭码CodeRider",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/12890.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "duo-chat",
    name: "Duo Chat",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/11414.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "coderabbit",
    name: "CodeRabbit",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/12176.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "devin",
    name: "Devin",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/9533.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "plandex",
    name: "Plandex",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/10880.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "fitten-code",
    name: "Fitten Code",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/7587.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "blackbox-ai",
    name: "BLACKBOX AI",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/1908.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "solo",
    name: "Solo",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/6690.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "jetbrains-ai",
    name: "JetBrains AI",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/6557.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "askcodi",
    name: "AskCodi",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/980.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "v0-app",
    name: "v0.app",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/4794.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "boxy",
    name: "Boxy",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/2610.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "quest-ai",
    name: "Quest AI",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/3051.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "天工智码skycode",
    name: "天工智码Skycode",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/1801.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "jamgpt",
    name: "JamGPT",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/2192.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "aixcoder",
    name: "aiXcoder",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/1774.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "airops",
    name: "AirOps",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/772.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "imgcook",
    name: "Imgcook",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/2325.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "deco",
    name: "Deco",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/2051.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "ghostwriter",
    name: "Ghostwriter",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/853.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "codiga",
    name: "Codiga",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/791.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "locofy",
    name: "Locofy",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/933.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "fronty",
    name: "Fronty",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/928.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "marsx",
    name: "MarsX",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/161.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "debuild",
    name: "Debuild",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/1493.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "warp",
    name: "Warp",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/116.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "fig",
    name: "Fig",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/114.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "codesnippets",
    name: "CodeSnippets",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/113.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "hocoos",
    name: "Hocoos",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/2127.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "httpie-ai",
    name: "HTTPie AI",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/480.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "ai-code-reviewer",
    name: "AI Code Reviewer",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/479.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "visual-studio-intellicode",
    name: "Visual Studio IntelliCode",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/112.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "heycli",
    name: "HeyCLI",
    icon: "💻",
    category: "coding",
    categoryLabel: "AI编程",
    desc: "AI编程工具",
    url: "https://ai-bot.cn/sites/115.html",
    detail: {
      intro: "AI编程工具",
      features: ["AI编程工具"],
      tags: ["AI编程"]
    }
  },
  {
    id: "stitch",
    name: "Stitch",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/73947.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "miora",
    name: "Miora",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/74421.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "ardot",
    name: "Ardot",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/73831.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "魔力工作室",
    name: "魔力工作室",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/15196.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "uxbot",
    name: "UXbot",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/65752.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "燕雀光年",
    name: "燕雀光年",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/54629.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "标小智logo生成器",
    name: "标小智LOGO生成器",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1414.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "looka",
    name: "Looka",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/595.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "智绘设计",
    name: "智绘设计",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1954.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "mastergo-ai",
    name: "MasterGo AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/2733.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "figjam-ai",
    name: "FigJam AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/4487.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "鹿班",
    name: "鹿班",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1986.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "magic-design",
    name: "Magic Design",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1087.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "简单设计",
    name: "简单设计",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/17815.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "笔格设计",
    name: "笔格设计",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/14748.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "ai设计神",
    name: "AI设计神���",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/61515.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "logoai",
    name: "Logoai",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/27582.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "豆绘ai",
    name: "豆绘AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/24579.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "千图网",
    name: "千图网",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/29186.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "pictographic",
    name: "Pictographic",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/12673.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "fable-prism",
    name: "Fable Prism",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/10172.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "匠紫",
    name: "匠紫",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/16181.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "collov-ai",
    name: "Collov AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/9977.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "包图网ai素材库",
    name: "包图网AI素材库",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/14683.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "易可图",
    name: "易可图",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/25213.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "笔魂ai",
    name: "笔魂AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/33149.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "creatie",
    name: "Creatie",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/9772.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "kittl",
    name: "Kittl",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/7993.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "dzine",
    name: "Dzine",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/12132.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "ilus-ai",
    name: "Ilus AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/12026.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "酷家乐ai",
    name: "酷家乐AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/6309.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "framer-ai",
    name: "Framer AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/2891.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "logoliveryai",
    name: "LogoliveryAI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/3006.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "motiff-妙多",
    name: "Motiff 妙多",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/4004.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "pimento",
    name: "Pimento",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/6797.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "logo-diffusion",
    name: "Logo Diffusion",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/6622.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "realibox-ai",
    name: "Realibox AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/2780.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "vectorizer-ai",
    name: "Vectorizer.AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/3713.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "模袋云ai",
    name: "模袋云AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/3632.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "vizcom",
    name: "Vizcom",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/2235.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "dora-ai",
    name: "Dora AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/2462.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "designs-ai",
    name: "Designs.ai",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/228.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "galileo-ai",
    name: "Galileo AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/150.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "spline-ai",
    name: "Spline AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1202.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "千图设计室ai海报",
    name: "千图设计室AI海报",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/9943.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "illostrationai",
    name: "illostrationAI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/176.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "uizard",
    name: "Uizard",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/122.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "luma-ai",
    name: "Luma AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/923.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "图宇宙",
    name: "图宇宙",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/2515.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "阿里云智能logo设计",
    name: "阿里云智能logo设计",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1989.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "aidesign",
    name: "AIDesign",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1957.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "fabrie-ai",
    name: "Fabrie AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/3433.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "poly",
    name: "Poly",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/701.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "illustroke",
    name: "Illustroke",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/172.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "eva-design-system",
    name: "Eva Design System",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/168.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "color-wheel",
    name: "Color Wheel",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/165.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "huemint",
    name: "Huemint",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/164.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "colormagic",
    name: "ColorMagic",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/162.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "logomaster-ai",
    name: "Logomaster.ai",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/160.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "magician",
    name: "Magician",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/148.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "appicons-ai",
    name: "Appicons AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/108.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "iconifyai",
    name: "IconifyAI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/107.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "khroma",
    name: "Khroma",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/106.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "即时ai",
    name: "即时AI",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1059.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "alpaca",
    name: "Alpaca",
    icon: "🎨",
    category: "design",
    categoryLabel: "AI设计",
    desc: "AI设计工具",
    url: "https://ai-bot.cn/sites/1825.html",
    detail: {
      intro: "AI设计工具",
      features: ["AI设计工具"],
      tags: ["AI设计"]
    }
  },
  {
    id: "轻析-litesight",
    name: "轻析 LiteSight",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/74132.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "多维视界",
    name: "多维视界",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/69537.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "lyrics-into-song-ai",
    name: "Lyrics Into Song AI",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/22182.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "stable-audio",
    name: "Stable Audio",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/4667.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "texttospeech",
    name: "TextToSpeech",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/14849.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "ttsmaker",
    name: "TTSMaker",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/14885.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "lovo-ai",
    name: "LOVO AI",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/14893.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "uberduck",
    name: "Uberduck",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/1903.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "sonauto",
    name: "Sonauto",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/11193.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "天工skymusic",
    name: "天工SkyMusic",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/11251.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "大饼ai变声",
    name: "大饼AI变声",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/6112.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "supertone-shift",
    name: "Supertone Shift",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/11939.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "producer-ai",
    name: "Producer.ai",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/596.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "adobe-podcast",
    name: "Adobe Podcast",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/1677.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "网易云音乐-x-studio",
    name: "网易云音乐·X Studio",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/2906.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "刺鸟配音",
    name: "刺鸟配音",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/16136.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "wondercraft",
    name: "Wondercraft",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/12550.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "fryderyk",
    name: "Fryderyk",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/14961.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "voicenotes",
    name: "Voicenotes",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/12763.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "optimizerai",
    name: "OptimizerAI",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/11254.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "ace-studio",
    name: "ACE Studio",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/2642.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "蓝藻ai",
    name: "蓝藻AI",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/10145.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "deepgram",
    name: "Deepgram",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/9548.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "audiobox",
    name: "Audiobox",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/6630.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "resemble-ai",
    name: "RESEMBLE.AI",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/124.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "ibm-watson文字转语音",
    name: "IBM Watson文字转语音",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/121.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "fakeyou",
    name: "FakeYou",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/255.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "bgm猫",
    name: "BGM猫",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/1396.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "快转字幕",
    name: "快转字幕",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/6544.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "悦音配音",
    name: "悦音配音",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/2405.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "音虫",
    name: "音虫",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/10631.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "mubert",
    name: "Mubert",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/397.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "beatoven-ai",
    name: "beatoven.ai",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/2160.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "beatbot",
    name: "BeatBot",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/1965.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "audo-studio",
    name: "Audo Studio",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/119.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "naturalreader",
    name: "NaturalReader",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/254.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "assemblyai",
    name: "AssemblyAI",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/120.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "lalal-ai",
    name: "LALAL.AI",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/118.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "krisp",
    name: "Krisp",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/47.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "play-ht",
    name: "Play.ht",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/253.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "murf-ai",
    name: "Murf AI",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/251.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "lemonaid",
    name: "Lemonaid",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/82.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "typecast",
    name: "Typecast",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/250.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "veed-ai-voice-generator",
    name: "Veed AI Voice Generator",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/249.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "clipchamp-ai旁白生成器",
    name: "Clipchamp AI旁白生成器",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/247.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "metavoice",
    name: "MetaVoice",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/404.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "speechify",
    name: "Speechify",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/248.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "voicemaker",
    name: "Voicemaker",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/403.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "voice-ai",
    name: "Voice.ai",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/402.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "listnr",
    name: "Listnr",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/401.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "voicemod",
    name: "Voicemod",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/400.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "wellsaid",
    name: "WellSaid",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/398.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "notta",
    name: "Notta",
    icon: "🎵",
    category: "audio",
    categoryLabel: "AI音乐/音频",
    desc: "AI音乐/音频工具",
    url: "https://ai-bot.cn/sites/1301.html",
    detail: {
      intro: "AI音乐/音频工具",
      features: ["AI音乐/音频工具"],
      tags: ["AI音乐/音频"]
    }
  },
  {
    id: "心流",
    name: "心流",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/14200.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "纳米ai",
    name: "纳米AI",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/62941.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "iask-ai",
    name: "iAsk AI",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/11849.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "consensus",
    name: "Consensus",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/11848.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "komo-search",
    name: "Komo Search",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/11850.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "searcholic",
    name: "Searcholic",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/11853.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "andi",
    name: "Andi",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/11847.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "songtell",
    name: "Songtell",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/11854.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "thinkany",
    name: "ThinkAny",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/11855.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "miku",
    name: "Miku",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/11851.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "qdrant",
    name: "Qdrant",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/16377.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "adot",
    name: "Adot",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/14712.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "开搜ai",
    name: "开搜AI",
    icon: "🔍",
    category: "search",
    categoryLabel: "AI搜索",
    desc: "AI搜索工具",
    url: "https://ai-bot.cn/sites/12880.html",
    detail: {
      intro: "AI搜索工具",
      features: ["AI搜索工具"],
      tags: ["AI搜索"]
    }
  },
  {
    id: "bigmodel",
    name: "BigModel",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/15446.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "方舟-agent-plan",
    name: "方舟 Agent Plan",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/77337.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "whacka",
    name: "Whacka",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/74753.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "gapp-so",
    name: "gapp.so",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/75111.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "数眼智能ai",
    name: "数眼智能AI",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/71707.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "sophnet",
    name: "SophNet",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/68197.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "晨涧云",
    name: "晨涧云",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/68111.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "llama-factory-online",
    name: "LLaMA-Factory Online",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/67872.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "大模型实验室",
    name: "大模型实验室",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/67775.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "apimart",
    name: "APIMart",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/67128.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "dmxapi",
    name: "DMXAPI",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/65534.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "小马算力",
    name: "小马算力",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/64827.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "refly",
    name: "Refly",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/58318.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "搭叩",
    name: "搭叩",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/64715.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "creao",
    name: "CREAO",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/62299.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "wordware",
    name: "Wordware",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/15416.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "ppio派欧云",
    name: "PPIO派欧云",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/52953.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "蚂蚁百宝箱tbox",
    name: "蚂蚁百宝箱Tbox",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/16414.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "wavespeedai",
    name: "WaveSpeedAI",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/60829.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "模力方舟",
    name: "模力方舟",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/48043.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "longcat开放平台",
    name: "LongCat开放平台",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/62159.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "x-all-in-one",
    name: "X-All in one",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/61576.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "无问芯穹",
    name: "无问芯穹",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/34774.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "胜算云",
    name: "胜算云",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/60619.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "智谱清流",
    name: "智谱清流",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/29524.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "文心智能体平台",
    name: "文心智能体平台",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/11229.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "skyagents",
    name: "SkyAgents",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/24351.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "言犀智能体平台",
    name: "言犀智能体平台",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/14871.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "魔乐社区",
    name: "魔乐社区",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/36421.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "betteryeah-ai",
    name: "BetterYeah AI",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/11786.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "飞桨paddlepaddle",
    name: "飞桨PaddlePaddle",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/63.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "昇思mindspore",
    name: "昇思MindSpore",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/2022.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "天壤小白",
    name: "天壤小白",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/8536.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "pytorch",
    name: "PyTorch",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/61.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "gumloop",
    name: "Gumloop",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/21961.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/48.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "apache-mxnet",
    name: "Apache MXNet",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/62.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/60.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "mlx",
    name: "MLX",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/6853.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "label-studio",
    name: "Label Studio",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/3969.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "chunkr",
    name: "Chunkr",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/16684.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "vercel-ai-sdk",
    name: "Vercel AI SDK",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/3013.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "keras",
    name: "Keras",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/451.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "caffe",
    name: "Caffe",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/64.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "numpy",
    name: "NumPy",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/780.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "dl4j",
    name: "DL4J",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/1268.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "jax",
    name: "JAX",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/1276.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "nltk",
    name: "NLTK",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/1273.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "langchain",
    name: "LangChain",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/1430.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "lightning-ai",
    name: "Lightning AI",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/1848.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "leap",
    name: "Leap",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/2625.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "chatdev",
    name: "ChatDev",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/5581.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "anakin-ai",
    name: "Anakin.ai",
    icon: "⚙",
    category: "platform",
    categoryLabel: "AI开发",
    desc: "AI开发工具",
    url: "https://ai-bot.cn/sites/8970.html",
    detail: {
      intro: "AI开发工具",
      features: ["AI开发工具"],
      tags: ["AI开发"]
    }
  },
  {
    id: "generative-ai-for-beginners",
    name: "Generative AI for Beginners",
    icon: "📚",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI学习工具",
    url: "https://ai-bot.cn/sites/6039.html",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "阿里云ai学习路线",
    name: "阿里云AI学习路线",
    icon: "📚",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI学习工具",
    url: "https://ai-bot.cn/sites/1057.html",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "showmeai知识社区",
    name: "ShowMeAI知识社区",
    icon: "📚",
    category: "learning",
    categoryLabel: "AI学习",
    desc: "AI学习工具",
    url: "https://ai-bot.cn/sites/1444.html",
    detail: {
      intro: "AI学习工具",
      features: ["AI学习工具"],
      tags: ["AI学习"]
    }
  },
  {
    id: "llama",
    name: "LLaMA",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/54.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "miraclevision奇想智能",
    name: "MiracleVision奇想智能",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/6279.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "阿里巴巴m6",
    name: "阿里巴巴M6",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/1079.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "lamini",
    name: "Lamini",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/2038.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "stablelm",
    name: "StableLM",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/1861.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "gen-2",
    name: "Gen-2",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/1076.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "deepspeed",
    name: "DeepSpeed",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/1520.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "palm-2",
    name: "PaLM 2",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/1077.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "segment-anything-sam",
    name: "Segment Anything（SAM）",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/1351.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "imagen",
    name: "Imagen",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/55.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "stablevicuna",
    name: "StableVicuna",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/2113.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "watsonx-ai",
    name: "Watsonx.ai",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/2240.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "lobe",
    name: "Lobe",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/439.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "scale-ai",
    name: "Scale AI",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/525.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "replicate",
    name: "Replicate",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/155.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "evidently-ai",
    name: "Evidently AI",
    icon: "🧠",
    category: "model",
    categoryLabel: "AI模型",
    desc: "AI模型工具",
    url: "https://ai-bot.cn/sites/778.html",
    detail: {
      intro: "AI模型工具",
      features: ["AI模型工具"],
      tags: ["AI模型"]
    }
  },
  {
    id: "studycorgi-chatgpt-detector",
    name: "StudyCorgi ChatGPT Detector",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/411.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "aiseo-ai-content-detector",
    name: "AISEO AI Content Detector",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/408.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "writecream-ai-content-detector",
    name: "Writecream AI Content Detector",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/407.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "smodin-ai-content-detector",
    name: "Smodin AI Content Detector",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/406.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "sapling-ai-content-detector",
    name: "Sapling AI Content Detector",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/396.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "ai-content-detector",
    name: "AI Content Detector",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/393.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "speedai",
    name: "SpeedAI",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/70682.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "稿易降ai率",
    name: "稿易降AI率",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/67455.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "66降ai率",
    name: "66降AI率",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/67595.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "笔灵降ai率",
    name: "笔灵降AI率",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/67481.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "aibiye降ai率",
    name: "Aibiye降AI率",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/67571.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "千笔降ai率",
    name: "千笔降AI率",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/67460.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "茅茅虫降ai率",
    name: "茅茅虫降AI率",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/67598.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "paperfake降重降ai率",
    name: "PaperFake降重降AI率",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/68164.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "言笔降ai率",
    name: "言笔降AI率",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/68088.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "学术猹",
    name: "学术猹",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/67447.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "xyz-science",
    name: "XYZ SCIENCE",
    icon: "🔍",
    category: "detect",
    categoryLabel: "AI检测",
    desc: "AI检测工具",
    url: "https://ai-bot.cn/sites/73605.html",
    detail: {
      intro: "AI检测工具",
      features: ["AI检测工具"],
      tags: ["AI检测"]
    }
  },
  {
    id: "幂简ai提示词商城",
    name: "幂简AI提示词商城",
    icon: "📝",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词工具",
    url: "https://ai-bot.cn/sites/68309.html",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {
    id: "stable-diffusion-prompt-book",
    name: "Stable Diffusion Prompt Book",
    icon: "📝",
    category: "prompt",
    categoryLabel: "AI提示词",
    desc: "AI提示词工具",
    url: "https://ai-bot.cn/sites/767.html",
    detail: {
      intro: "AI提示词工具",
      features: ["AI提示词工具"],
      tags: ["AI提示词"]
    }
  },
  {id: 1477, name: 'SpotScribe', icon: '🎙️', category: 'audio', categoryLabel: 'AI音频', desc: '长音频转文字工具，播客内容一键转录为可搜索的文本资产', url: 'https://spotscribe.com'},
  {id: 1478, name: 'GNOMI', icon: '💬', category: 'conversation', categoryLabel: 'AI聊天', desc: '全球动态实时情报语音助手，围绕新闻、市场动态和实时数据的AI解读', url: 'https://gnomi.ai'},
  {id: 1479, name: 'Explorium', icon: '🛠️', category: 'platform', categoryLabel: 'AI开发', desc: 'AI驱动商业数据底座，面向GTM团队的B2B数据整合和分析平台', url: 'https://explorium.ai'},
  {id: 1480, name: 'PitchMeAI', icon: '🤖', category: 'agent', categoryLabel: 'AI智能体', desc: 'AI求职助理，自动匹配岗位定制简历，批量投递申请', url: 'https://pitchme.ai'},
  {id: 1481, name: 'LogoFast', icon: '🎨', category: 'design', categoryLabel: 'AI设计', desc: 'AI驱动Logo制作工具，3秒出稿，无需设计经验即可创建专业Logo', url: 'https://logofast.com'},
  {id: 1482, name: 'Visionati', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '多模型视觉理解工作台，整合OpenAI/Claude/Gemini等模型的图像识别能力', url: 'https://visionati.com'},
  {id: 1483, name: 'DreamVid', icon: '🎬', category: 'video', categoryLabel: 'AI视频', desc: '照片转视频AI工具，静态照片加入动作和电影感效果', url: 'https://dreamvid.ai'},
  {id: 1484, name: 'Arting', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '免费一站式AI创意平台，集合文生图、图生图、文生视频等多种功能', url: 'https://arting.ai'},
  {id: 1485, name: 'FlyPix AI', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '地理空间AI平台，卫星和无人机影像的目标检测和变化监测', url: 'https://flypix.ai'},
  {id: 1486, name: 'Picit', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '新加坡开发免费AI图片编辑工具，支持去水印、抠图、图片增强', url: 'https://picit.ai'},
  {id: 1487, name: 'CoffeeTrans', icon: '🎙️', category: 'audio', categoryLabel: 'AI音频', desc: 'AI视频翻译和字幕生成工具，支持MP4/MP3上传自动生成字幕', url: 'https://coffeetrans.com'},
  {id: 1488, name: '科研绘图', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '医学科研论文配图工具，10万+矢量图标，支持拖拽式科学绘图', url: 'https://medpeer.cn'},
  {id: 1489, name: 'VDraw', icon: '🎨', category: 'design', categoryLabel: 'AI设计', desc: '一站式AI视觉创作平台，集成AI绘画、去水印、图片编辑等功能', url: 'https://vdraw.com'},
  {id: 1490, name: 'BigMotion', icon: '🎬', category: 'video', categoryLabel: 'AI视频', desc: 'AI短视频自动化生产平台，支持无露脸短视频和广告素材生成', url: 'https://bigmotion.ai'},
  {id: 1491, name: 'Genovideo', icon: '🎬', category: 'video', categoryLabel: 'AI视频', desc: '全自动AI视频生成工具，输入文案即可生成短视频', url: 'https://genovideo.ai'},
  {id: 1492, name: 'InVideo', icon: '🎬', category: 'video', categoryLabel: 'AI视频', desc: 'AI在线视频创作平台，零基础也能制作专业视频', url: 'https://invideo.io'},
  {id: 1493, name: 'Happy Horse', icon: '🎬', category: 'video', categoryLabel: 'AI视频', desc: 'AI短视频生成与编辑平台（快乐小马），支持有趣短片创作', url: 'https://happyhorse.ai'},
  {id: 1494, name: 'AI游戏创作平台SOON', icon: '🛠️', category: 'platform', categoryLabel: 'AI开发', desc: 'AI游戏全流程开发平台，自动生成角色动画、特效、场景', url: 'https://soon.game'},
  {id: 1495, name: 'InclusivitEasy', icon: '✍️', category: 'writing', categoryLabel: 'AI写作', desc: '包容性写作检查工具，检测文本中的偏见和排斥性措辞', url: 'https://inclusiviteasy.com'},
  {id: 1496, name: 'PPT AI', icon: '📊', category: 'productivity', categoryLabel: 'AI办公', desc: '智能PPT制作工具，输入主题一键生成精美演示文稿', url: 'https://pptai.com'},
  {id: 1497, name: 'Keepace AI', icon: '🤖', category: 'agent', categoryLabel: 'AI智能体', desc: 'Keep推出的AI运动健康大模型，AI私教训练指导', url: 'https://keepace.com'},
  {id: 1498, name: 'ContentDetector.AI', icon: '🔍', category: 'detect', categoryLabel: 'AI检测', desc: 'AI文本检测工具，判断英文内容由AI生成的概率百分比', url: 'https://contentdetector.ai'},
  {id: 1499, name: 'MyDetector AI', icon: '🔍', category: 'detect', categoryLabel: 'AI检测', desc: 'AI文本检测工具，检测ChatGPT/GPT-4/Claude等模型生成内容', url: 'https://mydetector.ai'},
  {id: 1500, name: 'UnlimitedBG', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '无限免费AI抠图工具，支持断网使用，无按张收费限制', url: 'https://unlimitedbg.com'},
  {id: 1501, name: 'VideoSDK', icon: '🎙️', category: 'audio', categoryLabel: 'AI音频', desc: '实时音视频AI SDK，支持AI语音合成和实时转写', url: 'https://videosdk.live'},
  {id: 1502, name: 'AI-Redact', icon: '🤖', category: 'agent', categoryLabel: 'AI智能体', desc: 'AI文档处理工具，自动识别PDF中的敏感信息并脱敏', url: 'https://ai-redact.com'},
  {id: 1503, name: 'RealorAI', icon: '🔍', category: 'detect', categoryLabel: 'AI检测', desc: '真假图片识别工具，通过训练判断图片是否为AI生成', url: 'https://realorai.com'},
  {id: 1504, name: 'Dog Breed AI', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: 'AI狗品种识别工具，上传照片识别犬种', url: 'https://dogbreedai.com'},
  {id: 1505, name: '元极AI', icon: '🎬', category: 'video', categoryLabel: 'AI视频', desc: '商业视觉内容AI创作平台，AI导演一键成片', url: 'https://yuanji.studio'},
  {id: 1506, name: '明犀AI', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: 'AI图像增强工具，图片无损放大和超清修复', url: 'https://suppixel.com'},
  {id: 1507, name: 'Exemplary AI', icon: '🎙️', category: 'audio', categoryLabel: 'AI音频', desc: '音频内容再利用工具，单个音频转化为博客文章、社交媒体帖', url: 'https://exemplary.ai'},
  {id: 1508, name: 'FPT.AI', icon: '💬', category: 'conversation', categoryLabel: 'AI聊天', desc: '企业级AI智能体/客服平台，支持语音交互和文档识别', url: 'https://fpt.ai'},
  {id: 1509, name: 'Numa', icon: '💬', category: 'conversation', categoryLabel: 'AI聊天', desc: '汽车经销商AI沟通平台，自动处理电话预约和维修沟通', url: 'https://numa.com'},
  {id: 1510, name: 'Claap', icon: '📊', category: 'productivity', categoryLabel: 'AI办公', desc: 'AI会议助手，自动录制、转写、总结会议并生成跟进事项', url: 'https://claap.com'},
  {id: 1511, name: 'FaceAge AI', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: 'AI人脸年龄检测工具，上传照片分析视觉年龄', url: 'https://faceage.ai'},
  {id: 1512, name: 'Car Part Identifier', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '汽车零部件识别工具，拍照识别零件名称和用途', url: 'https://carpartidentifier.com'},
  {id: 1513, name: 'FaceShapeDetector', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: 'AI脸型识别工具，上传照片分析脸型并推荐发型', url: 'https://faceshapedetector.com'},
  {id: 1514, name: 'hCaptcha', icon: '🛠️', category: 'platform', categoryLabel: 'AI开发', desc: '隐私优先的人机验证解决方案，替代传统验证码', url: 'https://hcaptcha.com'},
  {id: 1515, name: 'Colorize', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: 'AI老照片修复上色工具，让老旧照片焕发新生', url: 'https://colorize.com'},
  {id: 1516, name: 'TinyEraser', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '免费AI抠图工具，一键去除背景并替换，支持批量处理', url: 'https://tinyeraser.com'},
  {id: 1517, name: 'AIEASE', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '免费在线AI照片编辑器，集成数十种图片处理工具', url: 'https://aiease.ai'},
  {id: 1518, name: 'Filtrix', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: 'AI图像风格化和电商可视化工具，支持批量艺术滤镜处理', url: 'https://filtrix.com'},
  {id: 1519, name: '摄图AI', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '摄图网旗下AI创作平台，AI绘画和智能修图一站式', url: 'https://699pic.com'},
  {id: 1520, name: 'idgram', icon: '🎨', category: 'design', categoryLabel: 'AI设计', desc: '品牌视觉识别系统设计工具，从Logo到品牌规则一站式交付', url: 'https://idgram.com'},
  {id: 1521, name: 'Imagga', icon: '🚀', category: 'image', categoryLabel: 'AI绘图', desc: '图像与视频识别API平台，支持自动打标和内容审核', url: 'https://imagga.com'},
  {id: 1522, name: 'Safe Space AI', icon: '🔍', category: 'detect', categoryLabel: 'AI检测', desc: 'AI安全监控系统，检测婴幼儿和老人异常行为并报警', url: 'https://safespace.ai'},
  {id: 1523, name: 'Ecorithms', icon: '🔍', category: 'detect', categoryLabel: 'AI检测', desc: 'AI废弃物审计和合规监测平台，自动检测污染源', url: 'https://ecorithms.com'},
  {id: 1524, name: 'Apex Vision AI', icon: '📚', category: 'learning', categoryLabel: 'AI教程', desc: 'AI学习平台，支持拍题解答、论文辅助和课程学习', url: 'https://apexvision.ai'},
  {id: 1525, name: 'Greyparrot', icon: '🤖', category: 'agent', categoryLabel: 'AI智能体', desc: 'AI垃圾分类回收监测系统，摄像头识别材质和品牌信息', url: 'https://greyparrot.ai'},
  {id: 1526, name: 'OopsBusted', icon: '🤖', category: 'agent', categoryLabel: 'AI智能体', desc: 'AI约会背景查询工具，通过照片搜索社交平台信息', url: 'https://oopsbusted.com'},
];
