// v1.0.3
var toolsData = [
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
    id: "feishu-ai", name: "飞书AI", icon: "📋",
    category: "productivity", categoryLabel: "AI办公",
    desc: "字节跳动智能办公平台AI功能",
    url: "https://www.feishu.cn",
    detail: {
      intro: "飞书是字节跳动旗下智能办公平台，AI功能集成在文档、会议、表格等各模块中。",
      features: ["AI文档写作","AI会议纪要","AI表格处理","智能日程管理"],
      pricing: "免费/付费",
      tags: ["办公","协作","字节","AI"]
    }
  },
  {
    id: "baidu-docs", name: "百度网盘AI", icon: "☁️",
    category: "productivity", categoryLabel: "AI办公",
    desc: "百度网盘AI智能处理文件",
    url: "https://pan.baidu.com",
    detail: {
      intro: "百度网盘AI集成在百度网盘中，支持AI图片处理、文档总结、视频转写等功能。",
      features: ["AI图片处理","文档智能总结","视频转文字","智能搜索"],
      pricing: "免费/会员",
      tags: ["办公","云盘","百度","AI"]
    }
  },
  {
    id: "chatdoc", name: "ChatDOC", icon: "📑",
    category: "productivity", categoryLabel: "AI办公",
    desc: "AI文档问答工具，上传文档直接提问",
    url: "https://chatdoc.com",
    detail: {
      intro: "ChatDOC 是一款AI文档分析工具，上传PDF/Word等文档即可与文档对话。",
      features: ["多格式文档上传","文档智能问答","引用定位原文","批量文档处理"],
      pricing: "免费版有限额；Pro版$10/月",
      tags: ["办公","文档","问答","分析"]
    }
  },
  {
    id: "tencent-meeting", name: "腾讯会议AI", icon: "📹",
    category: "productivity", categoryLabel: "AI办公",
    desc: "腾讯会议AI功能，会议记录总结",
    url: "https://meeting.tencent.com",
    detail: {
      intro: "腾讯会议内置AI功能，支持会议录音转文字、智能会议纪要、AI总结等。",
      features: ["实时语音转文字","AI会议纪要","发言人识别","会议总结"],
      pricing: "免费/付费",
      tags: ["办公","会议","腾讯","AI"]
    }
  },
  {
    id: "loop", name: "Microsoft Loop", icon: "🔄",
    category: "productivity", categoryLabel: "AI办公",
    desc: "微软AI协作办公组件",
    url: "https://loop.microsoft.com",
    detail: {
      intro: "Microsoft Loop 是微软推出的AI协作办公工具，类似Notion但深度整合Microsoft 365。",
      features: ["AI辅助写作","组件化协作","跨应用同步","整合Microsoft 365"],
      pricing: "免费/Microsoft 365订阅",
      tags: ["办公","微软","协作","AI"]
    }
  },
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
    id: "doubao", name: "豆包", icon: "👧",
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
  },
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
  {
    id: "ideogram", name: "Ideogram", icon: "🅸",
    category: "image", categoryLabel: "AI绘图",
    desc: "文字渲染能力最强的AI绘画工具",
    url: "https://ideogram.ai",
    detail: {
      intro: "Ideogram 以出色的文字渲染能力著称，特别适合生成带文字的Logo、海报和设计图。",
      features: ["文字渲染业界最强","Logo和海报设计","多种风格可选","免费有额度"],
      pricing: "免费版有限额；付费版$20/月",
      tags: ["绘画","文字","设计","Logo"]
    }
  },
  {
    id: "krea", name: "Krea AI", icon: "✨",
    category: "image", categoryLabel: "AI绘图",
    desc: "实时AI绘画和设计增强工具",
    url: "https://krea.ai",
    detail: {
      intro: "Krea AI 提供实时AI绘画生成和图像增强功能，支持实时涂鸦生成、图像放大和增强。",
      features: ["实时AI绘画生成","图像增强和放大","AI设计工具","视频生成"],
      pricing: "免费版有限额；Pro版$25/月",
      tags: ["绘画","实时","增强","设计"]
    }
  },
  {
    id: "civitai", name: "CivitAI", icon: "🏛️",
    category: "image", categoryLabel: "AI绘图",
    desc: "Stable Diffusion模型社区，海量模型下载",
    url: "https://civitai.com",
    detail: {
      intro: "CivitAI 是全球最大的Stable Diffusion模型分享社区，包含数万个模型和LoRA。",
      features: ["海量SD模型和LoRA","模型在线预览","社区评分和评论","一键下载应用"],
      pricing: "免费",
      tags: ["模型","社区","SD","下载"]
    }
  },
  {
    id: "sdxl", name: "SDXL", icon: "🖌️",
    category: "image", categoryLabel: "AI绘图",
    desc: "Stability AI最新SDXL模型",
    url: "https://stability.ai/sdxl",
    detail: {
      intro: "SDXL 是Stability AI推出的最新Stable Diffusion模型，在图像质量和提示词理解上有大幅提升。",
      features: ["超高图像质量","提示词理解出色","丰富的风格控制","开源免费"],
      pricing: "开源免费",
      tags: ["SDXL","模型","开源","高清"]
    }
  },
  {
    id: "canva-ai", name: "Canva AI", icon: "🎨",
    category: "image", categoryLabel: "AI绘图",
    desc: "Canva内置AI设计功能",
    url: "https://www.canva.com",
    detail: {
      intro: "Canva 在线设计平台内置了大量AI功能，包括AI生图、AI编辑、AI去背景等。",
      features: ["AI一键生成设计","AI图片编辑","AI去背景","海量模板"],
      pricing: "免费/付费",
      tags: ["设计","编辑","模板","在线"]
    }
  },
  {
    id: "clipdrop", name: "ClipDrop", icon: "✂️",
    category: "image", categoryLabel: "AI绘图",
    desc: "AI图片编辑工具集，去背景/修复等",
    url: "https://clipdrop.co",
    detail: {
      intro: "ClipDrop 是Stability AI推出的AI图片编辑工具集，提供去背景、图片修复、扩展等。",
      features: ["AI去背景","图片修复和扩展","文字生成图片","实时图片编辑"],
      pricing: "免费版有限额；Pro版$9/月",
      tags: ["编辑","去背景","修复","AI"]
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
  {
    id: "haiper", name: "Haiper", icon: "🌟",
    category: "video", categoryLabel: "AI视频",
    desc: "免费好用的AI视频生成工具",
    url: "https://haiper.ai",
    detail: {
      intro: "Haiper 是由字节跳动前员工创立的AI视频生成工具，免费额度多且效果不错。",
      features: ["文生视频","图生视频","视频修复和增强","免费额度充足"],
      pricing: "免费/付费",
      tags: ["视频","生成","免费","编辑"]
    }
  },
  {
    id: "minimax-video", name: "MiniMax Video", icon: "🎞️",
    category: "video", categoryLabel: "AI视频",
    desc: "MiniMax AI视频生成，效果惊艳",
    url: "https://hailuoai.com/video",
    detail: {
      intro: "MiniMax（海螺AI）的视频生成功能，以清晰度和运动流畅度著称。",
      features: ["高清晰度视频生成","运动流畅自然","中文理解好","免费有额度"],
      pricing: "免费有额度",
      tags: ["视频","生成","国产","流畅"]
    }
  },
  {
    id: "veed", name: "VEED.io", icon: "🎬",
    category: "video", categoryLabel: "AI视频",
    desc: "在线AI视频编辑平台",
    url: "https://www.veed.io",
    detail: {
      intro: "VEED.io 是在线AI视频编辑平台，支持自动字幕、AI视频翻译、绿幕去除等。",
      features: ["AI自动字幕","AI视频翻译","绿幕去除","在线编辑无需安装"],
      pricing: "免费版有额度；Pro版$12/月",
      tags: ["视频","编辑","字幕","在线"]
    }
  },
  {
    id: "pixverse", name: "PixVerse", icon: "🌈",
    category: "video", categoryLabel: "AI视频",
    desc: "免费AI视频生成，画质出色",
    url: "https://pixverse.ai",
    detail: {
      intro: "PixVerse 是一款免费好用的AI视频生成工具，以画质和创意表现受到用户喜爱。",
      features: ["高质量视频生成","多种风格选择","免费额度充足","图生视频"],
      pricing: "免费/付费",
      tags: ["视频","生成","免费","创意"]
    }
  },
  {
    id: "luma", name: "Luma Dream Machine", icon: "🌠",
    category: "video", categoryLabel: "AI视频",
    desc: "Luma AI视频生成，3D一致性出色",
    url: "https://lumalabs.ai/dream-machine",
    detail: {
      intro: "Luma Dream Machine 是Luma AI推出的视频生成模型，以3D一致性和物理准确度著称。",
      features: ["3D一致性出色","物理模拟准确","快速生成","高分辨率"],
      pricing: "免费版有额度；付费版$30/月",
      tags: ["视频","3D","生成","物理"]
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
  {
    id: "elevenlabs", name: "ElevenLabs", icon: "🗣️",
    category: "audio", categoryLabel: "AI音乐",
    desc: "最强AI语音克隆和合成",
    url: "https://elevenlabs.io",
    detail: {
      intro: "ElevenLabs 是当前最先进的AI语音合成工具，支持语音克隆、多语言朗读等。",
      features: ["语音克隆","情感语音合成","多语言支持","有声书制作"],
      pricing: "免费版有限额；付费版$5/月",
      tags: ["语音","克隆","合成","有声书"]
    }
  },
  {
    id: "riffusion", name: "Riffusion", icon: "🎸",
    category: "audio", categoryLabel: "AI音乐",
    desc: "AI音乐生成，专注于器乐和旋律",
    url: "https://www.riffusion.com",
    detail: {
      intro: "Riffusion 是一款专注于AI音乐和器乐生成的工具，擅长生成各种风格的背景音乐。",
      features: ["器乐和旋律生成","多种音乐风格","背景音乐制作","免费使用"],
      pricing: "免费",
      tags: ["音乐","器乐","旋律","背景音乐"]
    }
  },
  {
    id: "soundraw", name: "Soundraw", icon: "🎼",
    category: "audio", categoryLabel: "AI音乐",
    desc: "AI生成免版税背景音乐",
    url: "https://soundraw.io",
    detail: {
      intro: "Soundraw 是AI音乐生成平台，专注于生成免版税的背景音乐，适合视频创作者使用。",
      features: ["免版税音乐生成","可自定义音乐风格","无限创作和下载","适合视频配乐"],
      pricing: "免费版有限额；创作者版$17/月",
      tags: ["音乐","背景音乐","免版税","创作"]
    }
  },
  {
    id: "boomy", name: "Boomy", icon: "🎛️",
    category: "audio", categoryLabel: "AI音乐",
    desc: "AI音乐创作，发布到流媒体",
    url: "https://boomy.com",
    detail: {
      intro: "Boomy 让任何人都能创建AI音乐，并可发布到Spotify、Apple Music等流媒体平台。",
      features: ["AI音乐快速创作","支持发布到流媒体","多种音乐风格","简单易用"],
      pricing: "免费/付费",
      tags: ["音乐","创作","流媒体","发布"]
    }
  },
  {
    id: "f5-tts", name: "F5-TTS", icon: "🔊",
    category: "audio", categoryLabel: "AI音乐",
    desc: "开源语音合成，中文效果极佳",
    url: "https://github.com/SWivid/F5-TTS",
    detail: {
      intro: "F5-TTS 是开源的AI语音合成模型，中文语音合成效果在开源模型中表现突出。",
      features: ["高质量中文语音","语音克隆","开源免费","支持多种情感"],
      pricing: "开源免费",
      tags: ["语音","开源","TTS","中文"]
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
  {
    id: "claude-code", name: "Claude Code", icon: "🟣",
    category: "coding", categoryLabel: "AI编程",
    desc: "Anthropic推出的AI编程工具",
    url: "https://claude.ai",
    detail: {
      intro: "Claude Code 是Anthropic基于Claude大模型推出的AI编程助手，代码理解和生成能力出色。",
      features: ["强大的代码理解","多文件编辑","代码审查和重构","终端集成"],
      pricing: "免费版可用；Pro版$20/月",
      tags: ["编程","Claude","代码","开发"]
    }
  },
  {
    id: "replit-ai", name: "Replit AI", icon: "🔄",
    category: "coding", categoryLabel: "AI编程",
    desc: "在线IDE集成AI编程助手",
    url: "https://replit.com",
    detail: {
      intro: "Replit 是一款在线IDE，内置AI编程助手，无需本地配置即可开发应用。",
      features: ["在线IDE无需配置","AI代码补全","一键部署","团队协作"],
      pricing: "免费版有限额；Pro版$20/月",
      tags: ["编程","IDE","在线","部署"]
    }
  },
  {
    id: "trae", name: "Trae AI", icon: "🔧",
    category: "coding", categoryLabel: "AI编程",
    desc: "字节跳动AI编程IDE",
    url: "https://www.trae.ai",
    detail: {
      intro: "Trae 是字节跳动推出的AI原生IDE，集成AI编程助手，体验流畅。",
      features: ["AI代码补全","智能对话编程","内置调试工具","多语言支持"],
      pricing: "免费",
      tags: ["编程","IDE","字节","AI"]
    }
  },
  {
    id: "github-copilot", name: "GitHub Copilot", icon: "🐙",
    category: "coding", categoryLabel: "AI编程",
    desc: "GitHub AI编程助手，业界标杆",
    url: "https://github.com/features/copilot",
    detail: {
      intro: "GitHub Copilot 是GitHub和OpenAI联合推出的AI编程助手，支持多种IDE和语言。",
      features: ["实时代码补全","多IDE支持","代码解释和重构","终端命令建议"],
      pricing: "免费2000次/月；Pro$10/月",
      tags: ["编程","GitHub","补全","AI"]
    }
  },
  {
    id: "tabnine", name: "Tabnine", icon: "🔮",
    category: "coding", categoryLabel: "AI编程",
    desc: "AI代码补全，注重隐私安全",
    url: "https://www.tabnine.com",
    detail: {
      intro: "Tabnine 是AI代码补全工具，注重隐私保护，支持本地模型运行。",
      features: ["本地AI模型运行","隐私保护优先","多语言支持","团队模型训练"],
      pricing: "免费版基础功能；Pro版$12/月",
      tags: ["编程","补全","隐私","AI"]
    }
  },
  {
    id: "codeium", name: "Codeium", icon: "💠",
    category: "coding", categoryLabel: "AI编程",
    desc: "免费AI编程助手，功能强大",
    url: "https://codeium.com",
    detail: {
      intro: "Codeium 是免费AI编程助手，提供代码补全、搜索和对话功能，支持70+语言。",
      features: ["完全免费","70+语言支持","代码搜索和理解","IDE插件"],
      pricing: "免费/Teams版$15/月",
      tags: ["编程","免费","补全","AI"]
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
    {
    id: "learn-python", name: "Python学习", icon: "🐍",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI编程入门首选Python教程",
    url: "https://www.python.org",
    detail: {
      intro: "Python是AI和机器学习最主流的编程语言，以下教程助你快速入门。",
      features: [
        "廖雪峰Python教程：https://liaoxuefeng.com",
        "莫烦Python：https://mofanpy.com",
        "黑马程序员Python：https://www.itheima.com",
        "吴恩达Python课程：https://www.deeplearning.ai",
        "菜鸟教程：https://www.runoob.com/python"
      ],
      pricing: "免费",
      tags: ["学习","Python","编程","入门"]
    }
  },
  {
    id: "learn-ml", name: "机器学习教程", icon: "🧠",
    category: "resource", categoryLabel: "资源与社区",
    desc: "机器学习系统学习资源合集",
    url: "https://www.deeplearning.ai",
    detail: {
      intro: "机器学习系统学习资源，从入门到进阶。",
      features: [
        "吴恩达机器学习课程：https://www.coursera.org/specializations/machine-learning-introduction",
        "李沐动手学深度学习：https://d2l.ai",
        "周志华《机器学习》：https://cs.nju.edu.cn/zhouzh",
        "Kaggle机器学习：https://www.kaggle.com/learn",
        "Scikit-learn官方教程：https://scikit-learn.org",
        "Fast.ai深度学习：https://www.fast.ai"
      ],
      pricing: "免费/部分付费",
      tags: ["学习","机器学习","深度","教程"]
    }
  },
  {
    id: "prompt-engineering", name: "提示词工程", icon: "🎯",
    category: "resource", categoryLabel: "资源与社区",
    desc: "Prompt Engineering 学习指南",
    url: "https://www.promptingguide.ai",
    detail: {
      intro: "提示词工程（Prompt Engineering）是AI应用的关键技能。",
      features: [
        "Prompt Engineering Guide：https://www.promptingguide.ai",
        "OpenAI提示词最佳实践：https://platform.openai.com/docs/guides/prompt-engineering",
        "LangGPT结构化提示词：https://github.com/langgptai/LangGPT",
        "Learn Prompting：https://learnprompting.com",
        "Midjourney提示词库：https://prompthero.com"
      ],
      pricing: "免费",
      tags: ["提示词","Prompt","学习","指南"]
    }
  },
  {
    id: "langchain", name: "LangChain教程", icon: "⛓️",
    category: "resource", categoryLabel: "资源与社区",
    desc: "LangChain框架学习，AI应用开发",
    url: "https://python.langchain.com",
    detail: {
      intro: "LangChain是构建LLM应用的主流框架，以下资源助你快速上手。",
      features: [
        "LangChain官方文档：https://python.langchain.com",
        "LangChain中文网：https://www.langchain.com.cn",
        "LangGraph工作流：https://langchain-ai.github.io/langgraph",
        "LangSmith调试：https://smith.langchain.com",
        "WiseAI LangChain教程：https://wiseai.com"
      ],
      pricing: "免费/开源",
      tags: ["LangChain","框架","开发","RAG"]
    }
  },
  {
    id: "llm-deploy", name: "模型部署教程", icon: "🚀",
    category: "resource", categoryLabel: "资源与社区",
    desc: "本地部署AI大模型工具合集",
    url: "https://ollama.ai",
    detail: {
      intro: "在本地部署和运行AI大模型的工具和教程。",
      features: [
        "Ollama：https://ollama.ai（本地一键运行大模型）",
        "LM Studio：https://lmstudio.ai（图形化本地模型运行）",
        "vLLM：https://vllm.ai（高性能模型推理）",
        "Text Generation WebUI：https://github.com/oobabooga/text-generation-webui",
        "llama.cpp：https://github.com/ggerganov/llama.cpp",
        "Open WebUI：https://openwebui.com"
      ],
      pricing: "免费/开源",
      tags: ["部署","本地","开源","模型"]
    }
  },
  {
    id: "ai-tools-platform", name: "AI搭建平台", icon: "🔨",
    category: "resource", categoryLabel: "资源与社区",
    desc: "低代码/无代码AI应用搭建平台",
    url: "https://www.coze.com",
    detail: {
      intro: "无需编程即可搭建AI应用的平台工具。",
      features: [
        "Coze扣子：https://www.coze.com（字节AI Bot搭建平台）",
        "Dify：https://dify.ai（开源LLM应用开发平台）",
        "FastGPT：https://fastgpt.in（知识库问答系统）",
        "百度千帆：https://cloud.baidu.com/product/wenxinworkshop",
        "阿里百炼：https://bailian.aliyun.com",
        "腾讯云AI：https://cloud.tencent.com/product/ai"
      ],
      pricing: "免费/付费",
      tags: ["搭建","低代码","平台","Bot"]
    }
  },
  {
    id: "ai-api", name: "AI API接口", icon: "🔌",
    category: "resource", categoryLabel: "资源与社区",
    desc: "主流AI模型API接口汇总",
    url: "https://platform.openai.com",
    detail: {
      intro: "各大AI平台的API接口文档和开发者资源。",
      features: [
        "OpenAI API：https://platform.openai.com",
        "Claude API：https://docs.anthropic.com",
        "Google Gemini API：https://ai.google.dev",
        "DeepSeek API：https://platform.deepseek.com",
        "通义千问API：https://help.aliyun.com/zh/model-studio",
        "文心一言API：https://cloud.baidu.com/doc/WENXINWORKSHOP",
        "讯飞星火API：https://www.xfyun.cn/doc/spark"
      ],
      pricing: "按量付费",
      tags: ["API","开发","接口","模型"]
    }
  },
  {
    id: "sd-tutorial", name: "Stable Diffusion教程", icon: "🎨",
    category: "resource", categoryLabel: "资源与社区",
    desc: "Stable Diffusion从入门到精通",
    url: "https://stablediffusionweb.com",
    detail: {
      intro: "Stable Diffusion是目前最流行的开源AI绘画模型，以下教程助你掌握。",
      features: [
        "Stable Diffusion WebUI：https://github.com/AUTOMATIC1111/stable-diffusion-webui",
        "ComfyUI教程：https://comfyanonymous.github.io/ComfyUI_examples",
        "CivitAI模型社区：https://civitai.com",
        "LoRA训练教程：https://replicate.com/blog/lora-training",
        "ControlNet教程：https://github.com/lllyasviel/ControlNet"
      ],
      pricing: "免费/开源",
      tags: ["SD","Stable Diffusion","绘画","教程"]
    }
  },
  {
    id: "ai-news", name: "AI新闻资讯", icon: "📰",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI行业资讯和前沿动态",
    url: "https://www.theverge.com/ai-artificial-intelligence",
    detail: {
      intro: "AI行业前沿资讯和深度报道渠道。",
      features: [
        "机器之心：https://jiqizhixin.com",
        "量子位：https://qbitai.com",
        "36氪AI频道：https://36kr.com/info/ai",
        "雷锋网AI：https://leiphone.com",
        "The Verge AI：https://www.theverge.com/ai-artificial-intelligence",
        "ArsTechnica AI：https://arstechnica.com/ai"
      ],
      pricing: "免费",
      tags: ["资讯","新闻","行业","前沿"]
    }
  },
  // ===== 更多资源 =====
  {
    id: "learn-python", name: "Python学习", icon: "🐍",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI编程入门首选Python教程",
    url: "https://www.python.org",
    detail: {
      intro: "Python是AI和机器学习最主流的编程语言。",
      features: [
        "廖雪峰Python教程：https://liaoxuefeng.com",
        "莫烦Python：https://mofanpy.com",
        "吴恩达Python课程：https://www.deeplearning.ai",
        "菜鸟教程：https://www.runoob.com/python"
      ],
      pricing: "免费",
      tags: ["学习","Python","编程","入门"]
    }
  },
  {
    id: "learn-ml", name: "机器学习教程", icon: "🧠",
    category: "resource", categoryLabel: "资源与社区",
    desc: "机器学习系统学习资源合集",
    url: "https://www.deeplearning.ai",
    detail: {
      intro: "机器学习系统学习资源，从入门到进阶。",
      features: [
        "吴恩达机器学习：https://www.coursera.org/specializations/machine-learning-introduction",
        "李沐动手学深度学习：https://d2l.ai",
        "Kaggle机器学习：https://www.kaggle.com/learn",
        "Fast.ai深度学习：https://www.fast.ai"
      ],
      pricing: "免费/部分付费",
      tags: ["学习","机器学习","深度","教程"]
    }
  },
  {
    id: "prompt-engineering", name: "提示词工程", icon: "🎯",
    category: "resource", categoryLabel: "资源与社区",
    desc: "Prompt Engineering学习指南",
    url: "https://www.promptingguide.ai",
    detail: {
      intro: "提示词工程（Prompt Engineering）是AI应用的关键技能。",
      features: [
        "Prompt Engineering Guide：https://www.promptingguide.ai",
        "OpenAI提示词最佳实践：https://platform.openai.com/docs/guides/prompt-engineering",
        "Learn Prompting：https://learnprompting.com"
      ],
      pricing: "免费",
      tags: ["提示词","Prompt","学习","指南"]
    }
  },
  {
    id: "langchain", name: "LangChain教程", icon: "⛓️",
    category: "resource", categoryLabel: "资源与社区",
    desc: "LangChain框架学习，AI应用开发",
    url: "https://python.langchain.com",
    detail: {
      intro: "LangChain是构建LLM应用的主流框架。",
      features: [
        "LangChain官方文档：https://python.langchain.com",
        "LangGraph工作流：https://langchain-ai.github.io/langgraph",
        "LangSmith调试：https://smith.langchain.com"
      ],
      pricing: "免费/开源",
      tags: ["LangChain","框架","开发","RAG"]
    }
  },
  {
    id: "llm-deploy", name: "模型部署教程", icon: "🚀",
    category: "resource", categoryLabel: "资源与社区",
    desc: "本地部署AI大模型工具合集",
    url: "https://ollama.ai",
    detail: {
      intro: "在本地部署和运行AI大模型的工具和教程。",
      features: [
        "Ollama：https://ollama.ai",
        "LM Studio：https://lmstudio.ai",
        "vLLM：https://vllm.ai",
        "llama.cpp：https://github.com/ggerganov/llama.cpp",
        "Open WebUI：https://openwebui.com"
      ],
      pricing: "免费/开源",
      tags: ["部署","本地","开源","模型"]
    }
  },
  {
    id: "ai-tools-platform", name: "AI搭建平台", icon: "🔨",
    category: "resource", categoryLabel: "资源与社区",
    desc: "低代码AI应用搭建平台合集",
    url: "https://www.coze.com",
    detail: {
      intro: "无需编程即可搭建AI应用的平台工具。",
      features: [
        "Coze扣子：https://www.coze.com",
        "Dify：https://dify.ai",
        "FastGPT：https://fastgpt.in",
        "百度千帆：https://cloud.baidu.com/product/wenxinworkshop",
        "阿里百炼：https://bailian.aliyun.com"
      ],
      pricing: "免费/付费",
      tags: ["搭建","低代码","平台","Bot"]
    }
  },
  {
    id: "ai-api", name: "AI API接口", icon: "🔌",
    category: "resource", categoryLabel: "资源与社区",
    desc: "主流AI模型API接口汇总",
    url: "https://platform.openai.com",
    detail: {
      intro: "各大AI平台的API接口文档和开发者资源。",
      features: [
        "OpenAI API：https://platform.openai.com",
        "Claude API：https://docs.anthropic.com",
        "DeepSeek API：https://platform.deepseek.com",
        "通义千问API：https://help.aliyun.com/zh/model-studio",
        "讯飞星火API：https://www.xfyun.cn/doc/spark"
      ],
      pricing: "按量付费",
      tags: ["API","开发","接口","模型"]
    }
  },
  {
    id: "sd-tutorial", name: "Stable Diffusion教程", icon: "🎨",
    category: "resource", categoryLabel: "资源与社区",
    desc: "Stable Diffusion从入门到精通",
    url: "https://stablediffusionweb.com",
    detail: {
      intro: "Stable Diffusion是开源AI绘画模型，以下教程助你掌握。",
      features: [
        "SD WebUI：https://github.com/AUTOMATIC1111/stable-diffusion-webui",
        "ComfyUI教程：https://comfyanonymous.github.io/ComfyUI_examples",
        "CivitAI模型社区：https://civitai.com",
        "ControlNet教程：https://github.com/lllyasviel/ControlNet"
      ],
      pricing: "免费/开源",
      tags: ["SD","Stable Diffusion","绘画","教程"]
    }
  },
  {
    id: "ai-news", name: "AI新闻资讯", icon: "📰",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI行业资讯和前沿动态",
    url: "https://jiqizhixin.com",
    detail: {
      intro: "AI行业前沿资讯和深度报道渠道。",
      features: [
        "机器之心：https://jiqizhixin.com",
        "量子位：https://qbitai.com",
        "36氪AI频道：https://36kr.com/info/ai",
        "雷锋网AI：https://leiphone.com"
      ],
      pricing: "免费",
      tags: ["资讯","新闻","行业","前沿"]
    }
  },
  {
    id: "jasper", name: "Jasper AI", icon: "✍️",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI营销写作平台，企业级内容生成",
    url: "https://www.jasper.ai",
    detail: {
      intro: "Jasper 是企业级AI写作平台，专注于营销内容创作、品牌文案生成等场景。",
      features: ["AI营销文案生成","品牌语调统一","多平台内容分发","团队协作"],
      pricing: "免费试用；Creator版$39/月",
      tags: ["写作","营销","企业","内容"]
    }
  },
  {
    id: "grammarly", name: "Grammarly", icon: "✏️",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI英文写作助手，语法检查和润色",
    url: "https://www.grammarly.com",
    detail: {
      intro: "Grammarly 是AI英文写作助手，提供语法检查、拼写纠正、语气优化等功能。",
      features: ["实时语法检查","AI写作润色","语气和风格调整","抄袭检测"],
      pricing: "免费版基础功能；Premium$12/月",
      tags: ["写作","英文","语法","润色"]
    }
  },
  {
    id: "descript", name: "Descript", icon: "🎙️",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI音视频编辑，像编辑文档一样编辑视频",
    url: "https://www.descript.com",
    detail: {
      intro: "Descript 是一款AI音视频编辑工具，通过编辑文字来编辑视频，支持AI语音克隆。",
      features: ["文字编辑视频","AI语音克隆","自动字幕","屏幕录制"],
      pricing: "免费版有限额；Pro版$24/月",
      tags: ["视频","编辑","语音","音视频"]
    }
  },
  {
    id: "otter", name: "Otter.ai", icon: "🦦",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI会议记录，实时转写和总结",
    url: "https://otter.ai",
    detail: {
      intro: "Otter.ai 是AI会议记录工具，实时语音转文字、自动生成会议纪要。",
      features: ["实时语音转文字","AI会议总结","发言人识别","整合Zoom/Teams"],
      pricing: "免费版每月300分钟；Pro版$17/月",
      tags: ["会议","转写","记录","办公"]
    }
  },
  {
    id: "synthesia", name: "Synthesia", icon: "👤",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI数字人视频生成，企业培训视频",
    url: "https://www.synthesia.io",
    detail: {
      intro: "Synthesia 是AI数字人视频生成平台，输入文字即可生成有AI主播讲解的视频。",
      features: ["AI数字人主播","140+语言","无需拍摄和演员","企业培训视频"],
      pricing: "免费试用；Creator版$29/月",
      tags: ["视频","数字人","培训","营销"]
    }
  },
  {
    id: "mem", name: "Mem AI", icon: "🧠",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI笔记工具，自动组织和关联笔记",
    url: "https://mem.ai",
    detail: {
      intro: "Mem 是AI原生笔记工具，自动将笔记关联、分类，并智能推荐相关内容。",
      features: ["AI自动组织笔记","智能关联推荐","快速搜索","团队知识库"],
      pricing: "免费版基础功能；Pro版$10/月",
      tags: ["笔记","知识管理","AI","效率"]
    }
  },
  {
    id: "notion-tools", name: "Notion工具集", icon: "📋",
    category: "resource", categoryLabel: "资源与社区",
    desc: "Notion生态中的AI工具和模板",
    url: "https://www.notion.so/templates",
    detail: {
      intro: "Notion生态中有大量AI相关的模板和工具，提升工作和学习效率。",
      features: [
        "Notion AI：https://www.notion.so/product/ai",
        "Notion模板市场：https://www.notion.so/templates",
        "Notion中文社区：https://notionchina.cn",
        "Notion API文档：https://developers.notion.com"
      ],
      pricing: "免费/付费",
      tags: ["Notion","模板","效率","工具"]
    }
  },
  {
    id: "gamma-more", name: "AI演示工具", icon: "📊",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI PPT和演示工具合集",
    url: "https://gamma.app",
    detail: {
      intro: "AI自动生成PPT和演示文稿的工具合集。",
      features: [
        "Gamma：https://gamma.app（AI生成PPT/文档/网页）",
        "Beautiful.ai：https://www.beautiful.ai（AI设计PPT）",
        "Tome：https://tome.app（AI叙事演示）",
        "Pitch：https://pitch.com（AI协作演示）",
        "SlidesAI：https://www.slidesai.io（Google Slides AI插件）"
      ],
      pricing: "免费/付费",
      tags: ["PPT","演示","设计","效率"]
    }
  },
  {
    id: "ai-chatbots", name: "AI聊天机器人", icon: "🤖",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI聊天机器人和客服工具合集",
    url: "https://www.coze.com",
    detail: {
      intro: "搭建AI聊天机器人和智能客服的平台工具合集。",
      features: [
        "Coze扣子：https://www.coze.com",
        "Dify：https://dify.ai",
        "Chatbase：https://www.chatbase.co",
        "Voiceflow：https://www.voiceflow.com",
        "Dialogflow：https://dialogflow.cloud.google.com",
        "Botpress：https://botpress.com"
      ],
      pricing: "免费/付费",
      tags: ["聊天","机器人","客服","搭建"]
    }
  },
  {
    id: "ai-education", name: "AI教育工具", icon: "🎓",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI在教育和学习中的应用工具",
    url: "https://www.khanacademy.org/khan-labs",
    detail: {
      intro: "AI在教育领域中的应用工具，从AI辅导到自动批改。",
      features: [
        "Khanmigo：https://www.khanacademy.org/khan-labs（Khan Academy AI辅导）",
        "Photomath：https://photomath.com（AI拍照解题）",
        "Quizlet AI：https://quizlet.com（AI学习卡片）",
        "Gauthmath：https://www.gauthmath.com（AI数学解题）",
        "有道AI：https://ai.youdao.com（AI翻译和学习）",
        "Duolingo AI：https://www.duolingo.com（AI语言学习）"
      ],
      pricing: "免费/付费",
      tags: ["教育","学习","辅导","工具"]
    }
  },
  {
    id: "ai-medical", name: "AI医疗健康", icon: "🏥",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI在医疗健康领域应用",
    url: "https://www.google.com/health-ai",
    detail: {
      intro: "AI在医疗健康领域的应用，从辅助诊断到健康管理。",
      features: [
        "Google Health AI：https://health.google",
        "智云健康：https://www.zyhealth.com",
        "腾讯觅影：https://maying.tencent.com",
        "推想科技：https://www.infervision.com",
        "鹰瞳科技：https://www.airdoc.com"
      ],
      pricing: "企业级",
      tags: ["医疗","健康","诊断","AI"]
    }
  },
  {
    id: "ai-translation", name: "AI翻译工具", icon: "🌍",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI翻译和语言工具合集",
    url: "https://translate.google.com",
    detail: {
      intro: "AI驱动的翻译和语言工具，打破语言障碍。",
      features: [
        "Google翻译：https://translate.google.com",
        "DeepL：https://www.deepl.com（最准的AI翻译）",
        "有道翻译：https://fanyi.youdao.com",
        "百度翻译：https://fanyi.baidu.com",
        "OpenAI翻译（ChatGPT）：https://chat.openai.com",
        "沉浸式翻译：https://immersivetranslate.com（浏览器翻译插件）"
      ],
      pricing: "免费/付费",
      tags: ["翻译","语言","多语言","工具"]
    }
  },
  {
    id: "ai-voice", name: "AI语音工具", icon: "🎤",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI语音识别和合成工具合集",
    url: "https://www.iflytek.com",
    detail: {
      intro: "AI语音技术工具，包括语音识别、语音合成、语音克隆等。",
      features: [
        "讯飞听见：https://www.iflyrec.com（语音转文字）",
        "ElevenLabs：https://elevenlabs.io（AI语音合成）",
        "Whisper（OpenAI）：https://openai.com/research/whisper",
        "Azure语音：https://azure.microsoft.com/zh-cn/services/cognitive-services/speech-services",
        "剪映语音：https://jimeng.jianying.com"
      ],
      pricing: "免费/付费",
      tags: ["语音","识别","合成","TTS"]
    }
  },
  {
    id: "ai-design", name: "AI设计工具", icon: "🎭",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI辅助设计和创意工具合集",
    url: "https://www.figma.com",
    detail: {
      intro: "AI驱动的设计和创意工具，助你快速产出设计作品。",
      features: [
        "Figma AI：https://www.figma.com（AI设计工具）",
        "Canva AI：https://www.canva.com（在线设计AI）",
        "Magician（Figma插件）：https://magician.design",
        "Uizard：https://uizard.io（AI生成UI设计）",
        "Galileo AI：https://www.usegalileo.ai（AI设计生成）",
        "Visily：https://www.visily.ai（AI原型设计）"
      ],
      pricing: "免费/付费",
      tags: ["设计","UI","创意","工具"]
    }
  },
  {
    id: "ai-search-engines", name: "AI搜索引擎", icon: "🔍",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI搜索引擎和知识发现工具",
    url: "https://www.perplexity.ai",
    detail: {
      intro: "新一代AI搜索引擎，直接给出答案而非链接列表。",
      features: [
        "Perplexity：https://www.perplexity.ai",
        "You.com：https://you.com",
        "天工AI搜索：https://www.tiangong.cn",
        "360AI搜索：https://www.so.com",
        "秘塔AI搜索：https://metaso.cn",
        "Devv AI（编程搜索）：https://devv.ai"
      ],
      pricing: "免费/付费",
      tags: ["搜索","AI","信息","问答"]
    }
  },
  {
    id: "ai-website-money", name: "AI建站赚钱", icon: "💰",
    category: "resource", categoryLabel: "资源与社区",
    desc: "用AI搭建网站赚广告费的副业指南",
    url: "https://aiyoufeng.com",
    detail: {
      intro: "用AI搭建工具类网站，不卖产品也能靠广告赚钱。以下是与有风老师学习AI建站的全套资源。",
      features: [
        "有风AI建站教程：https://aiyoufeng.com",
        "10Web AI建站：https://bit.ly/3sbe2pw（AI自动建站平台）",
        "Hostinger主机：https://bit.ly/3BysRqP（高性价比建站主机）",
        "Elementor页面构建器：https://bit.ly/49KRNsA（WordPress页面构建）",
        "Shopify独立站：https://shopify.pxf.io（跨境电商独立站）",
        "银河录像局ChatGPT代充：https://nf.video/C1dxn",
        "有风知识星球：https://t.zsxq.com/16Q"
      ],
      pricing: "免费教程/付费工具",
      tags: ["建站","赚钱","副业","AI"]
    }
  },
  {
    id: "website-analysis", name: "网站分析工具", icon: "📈",
    category: "resource", categoryLabel: "资源与社区",
    desc: "网站流量分析和SEO工具合集",
    url: "https://analytics.google.com",
    detail: {
      intro: "做网站必备的流量分析和SEO优化工具，帮你获取更多流量和收入。",
      features: [
        "Google Analytics：https://analytics.google.com（网站流量分析）",
        "Google Search Console：https://search.google.com/search-console（搜索表现分析）",
        "Google Trends：https://trends.google.com（关键词趋势查询）",
        "Google AdSense：https://adsense.google.com（广告变现）",
        "Semrush：https://semrush.sjv.io（全能SEO和数据分析）",
        "关键词规划师：https://business.google.com（Google关键词查询）"
      ],
      pricing: "免费/付费",
      tags: ["分析","SEO","流量","广告"]
    }
  },
  {
    id: "fiverr", name: "Fiverr", icon: "🤝",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI自由职业外包平台",
    url: "https://bit.ly/4c9cttG",
    detail: {
      intro: "Fiverr 是全球最大的自由职业平台，可以在上面找到AI设计、编程、写作等各种外包服务。",
      features: ["AI相关服务外包","自由职业接单","全球化的设计师和开发者","价格透明"],
      pricing: "按项目定价",
      tags: ["外包","自由职业","服务","设计"]
    }
  },
  {
    id: "semrush", name: "Semrush", icon: "📊",
    category: "resource", categoryLabel: "资源与社区",
    desc: "全能网站数据分析和SEO工具",
    url: "https://semrush.sjv.io",
    detail: {
      intro: "Semrush 是领先的在线可见性管理平台，提供SEO、PPC、内容营销等全方位分析。",
      features: ["SEO关键词研究","竞争对手分析","网站流量估算","内容营销策略"],
      pricing: "免费版有限额；Pro版$120/月",
      tags: ["SEO","分析","营销","数据"]
    }
  },
  {
    id: "hostinger", name: "Hostinger", icon: "🌐",
    category: "resource", categoryLabel: "资源与社区",
    desc: "高性价比建站虚拟主机",
    url: "https://bit.ly/3BysRqP",
    detail: {
      intro: "Hostinger 是经济实惠的共享主机服务商，适合搭建WordPress网站，有风老师推荐。",
      features: ["超高性价比","一键安装WordPress","免费SSL证书","30天退款保证"],
      pricing: "约$2-3/月起",
      tags: ["主机","建站","WordPress","服务器"]
    }
  },
  {
    id: "yinhaoyinju", name: "银河录像局", icon: "🎬",
    category: "resource", categoryLabel: "资源与社区",
    desc: "ChatGPT会员代充和账号平台",
    url: "https://nf.video/C1dxn",
    detail: {
      intro: "银河录像局提供ChatGPT Plus代充、账号购买服务，方便国内用户使用。",
      features: ["ChatGPT Plus代充","账号购买","Midjourney代充","多种AI平台账号"],
      pricing: "按服务定价",
      tags: ["ChatGPT","代充","账号","会员"]
    }
  },
  {
    id: "wa-writer", name: "蛙蛙写作", icon: "🐸",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI小说和内容创作工具",
    url: "https://wawawriter.com",
    detail: {
      intro: "蛙蛙写作是一款AI小说创作工具，专为网文作者设计，支持AI续写、AI取名等。",
      features: ["AI小说续写","角色和世界观设定","AI取名和对话","网文格式适配"],
      pricing: "免费/付费",
      tags: ["写作","小说","网文","创作"]
    }
  },
  {
    id: "metaso", name: "秘塔AI搜索", icon: "🔮",
    category: "resource", categoryLabel: "资源与社区",
    desc: "无广告直达结果的AI搜索引擎",
    url: "https://metaso.cn",
    detail: {
      intro: "秘塔AI搜索是国内领先的AI搜索引擎，无广告直达结果，支持深度搜索和学术搜索。",
      features: ["无广告直达结果","深度搜索模式","学术搜索","结构化答案"],
      pricing: "免费",
      tags: ["搜索","AI","国内","无广告"]
    }
  },
  {
    id: "liblibai", name: "LiblibAI哩布哩布", icon: "🖼️",
    category: "image", categoryLabel: "AI绘图",
    desc: "国内领先的AI图像创作和模型社区",
    url: "https://www.liblibai.com",
    detail: {
      intro: "LiblibAI（哩布哩布AI）是国内领先的AI图像创作平台和模型分享社区。",
      features: ["SD模型在线运行","模型分享社区","在线AI生图","国产替代Civitai"],
      pricing: "免费有额度/付费",
      tags: ["绘画","模型","社区","国产"]
    }
  },
  {
    id: "seedance", name: "Seedance", icon: "🌱",
    category: "video", categoryLabel: "AI视频",
    desc: "专业AI视频创作平台",
    url: "https://seedance.com",
    detail: {
      intro: "Seedance 是专业AI视频创作平台，支持真人素材参考，效果惊艳。",
      features: ["真人素材参考","高质量视频生成","专业级效果","多种风格"],
      pricing: "免费有额度/付费",
      tags: ["视频","创作","AI","专业"]
    }
  },
  {
    id: "haishanp", name: "秒哒", icon: "⚡",
    category: "coding", categoryLabel: "AI编程",
    desc: "无代码AI应用开发平台",
    url: "https://mio.tech",
    detail: {
      intro: "秒哒是无代码AI应用开发平台，一句话就能做应用，无需编程经验。",
      features: ["自然语言生成应用","无代码开发","一键部署","多平台支持"],
      pricing: "免费/付费",
      tags: ["编程","无代码","开发","平台"]
    }
  },
  {
    id: "aippt", name: "AiPPT", icon: "📽️",
    category: "productivity", categoryLabel: "AI办公",
    desc: "AI快速生成高质量PPT",
    url: "https://www.aippt.cn",
    detail: {
      intro: "AiPPT是国内AI PPT生成工具，输入主题即可快速生成高质量的演示文稿。",
      features: ["一键生成PPT","海量模板","AI排版","多格式导出"],
      pricing: "免费有额度/付费",
      tags: ["PPT","办公","生成","国产"]
    }
  },
  {
    id: "duiyou-ai", name: "堆友AI", icon: "🎯",
    category: "image", categoryLabel: "AI绘图",
    desc: "阿里旗下全能AI绘画和视频工具",
    url: "https://d.design",
    detail: {
      intro: "堆友AI是阿里旗下设计平台，提供AI绘画、AI视频、3D素材等一站式创作服务。",
      features: ["AI绘画生成","AI视频创作","3D素材库","设计资源"],
      pricing: "免费/付费",
      tags: ["绘画","视频","设计","阿里"]
    }
  },
  {
    id: "meitu-design", name: "美图设计室", icon: "📷",
    category: "image", categoryLabel: "AI绘图",
    desc: "美图旗下AI图像创作和设计平台",
    url: "https://www.designkit.cn",
    detail: {
      intro: "美图设计室是美图公司推出的AI图像创作和设计平台，提供AI生图、AI设计等功能。",
      features: ["AI生图","AI设计","AI去除水印","电商设计"],
      pricing: "免费/付费",
      tags: ["设计","图片","美图","国产"]
    }
  },
  {
    id: "xingliu-ai", name: "星流AI", icon: "✨",
    category: "image", categoryLabel: "AI绘图",
    desc: "一站式AI设计与创作工具",
    url: "https://xingliu.ai",
    detail: {
      intro: "星流AI是一站式AI设计与创作工具，提供多种AI绘画模型和创作功能。",
      features: ["多模型支持","AI绘画","AI设计","风格多样"],
      pricing: "免费有额度/付费",
      tags: ["绘画","设计","创作","一站式"]
    }
  },
  {
    id: "huihua-ai", name: "绘蛙AI", icon: "🐸",
    category: "resource", categoryLabel: "资源与社区",
    desc: "AI电商营销工具，免费生成商品图",
    url: "https://ai-bot.cn/sites/9195.html",
    detail: {
      intro: "绘蛙AI专注电商营销场景，免费生成商品图、模特图等，适合电商卖家。",
      features: ["AI商品图生成","AI模特换装","电商场景图","免费有额度"],
      pricing: "免费/付费",
      tags: ["电商","营销","商品图","AI"]
    }
  },
  {
    id: "xiaohuanxiong", name: "办公小浣熊", icon: "🦝",
    category: "productivity", categoryLabel: "AI办公",
    desc: "AI数据分析助手，数据处理神器",
    url: "https://www.xiaohuanxiong.com",
    detail: {
      intro: "办公小浣熊是AI数据分析助手，上传数据即可用自然语言进行分析和可视化。",
      features: ["AI数据分析","自然语言查询","可视化图表","Excel/Python数据处理"],
      pricing: "免费有额度/付费",
      tags: ["办公","数据","分析","AI"]
    }
  },
  {
    id: "tusiart", name: "吐司AI", icon: "🍞",
    category: "image", categoryLabel: "AI绘图",
    desc: "AI绘画模型社区和在线生图平台",
    url: "https://tusiart.com",
    detail: {
      intro: "吐司AI是国内AI绘画模型社区和在线生图平台，支持在线运行SD模型。",
      features: ["在线SD模型运行","模型社区","AI生图","国产免费"],
      pricing: "免费/付费",
      tags: ["绘画","模型","社区","在线"]
    }
  },
  {
    id: "zaodian", name: "造点AI", icon: "🔵",
    category: "resource", categoryLabel: "资源与社区",
    desc: "夸克团队AI图像与视频创作",
    url: "https://ai-bot.cn/sites/63437.html",
    detail: {
      intro: "造点AI是夸克团队推出的AI图像与视频创作平台。",
      features: ["AI图像创作","AI视频创作","夸克生态","免费使用"],
      pricing: "免费",
      tags: ["绘画","视频","夸克","阿里"]
    }
  },
  {
    id: "12sign", name: "响指HaiSnap", icon: "👆",
    category: "resource", categoryLabel: "资源与社区",
    desc: "通用AI Agent平台，工作学习皆可用",
    url: "https://aisnap.com",
    detail: {
      intro: "响指HaiSnap是面向工作与学习场景的通用AI Agent平台。",
      features: ["AI Agent","工作流自动化","多工具集成","学习辅助"],
      pricing: "免费/付费",
      tags: ["Agent","自动化","办公","AI"]
    }
  },
  {
    id: "wanzhi", name: "万小智", icon: "🏗️",
    category: "resource", categoryLabel: "资源与社区",
    desc: "阿里云企业级AI建站平台",
    url: "https://ai-bot.cn/sites/77243.html",
    detail: {
      intro: "万小智是阿里云推出的企业级AI建站平台，AI自动生成网站。",
      features: ["AI自动建站","企业级功能","阿里云生态","模板丰富"],
      pricing: "免费/付费",
      tags: ["建站","阿里云","企业","AI"]
    }
  },
  {
    id: "toduke-ai", name: "ToDesk AI", icon: "🖥️",
    category: "resource", categoryLabel: "资源与社区",
    desc: "桌面AI助手，支持远程控制",
    url: "https://ai-bot.cn/sites/77198.html",
    detail: {
      intro: "ToDesk AI 是桌面端AI智能助手，支持微信远程操控电脑。",
      features: ["AI桌面助手","远程控制","微信控制电脑","国产"],
      pricing: "免费/付费",
      tags: ["桌面","远程","助手","AI"]
    }
  },
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

// ===== 每日AI资讯 =====
const aiNews = [
  {
    date: "2026-05-17",
    title: "OpenAI 发布 GPT-4o 重大更新，多模态能力全面提升",
    summary: "OpenAI 推出 GPT-4o 模型重大更新，在音频、视觉和文本理解方面均有显著提升，支持更自然的实时对话。",
    tag: "🔥 热点",
    tagClass: "hot",
    source: "OpenAI",
    url: "https://openai.com"
  },
  {
    date: "2026-05-17",
    title: "Claude 3.5 Sonnet 更新，编程能力超越 GPT-4o",
    summary: "Anthropic 发布 Claude 3.5 Sonnet 更新版本，在编程和代码生成方面的表现超越 GPT-4o，成为新的编程辅助标杆。",
    tag: "🆕 更新",
    tagClass: "new",
    source: "Anthropic",
    url: "https://anthropic.com"
  },
  {
    date: "2026-05-17",
    title: "豆包大模型升级，新增视频理解功能",
    summary: "字节跳动旗下豆包大模型完成升级，新增视频理解能力，可对视频内容进行分析、总结和问答。",
    tag: "🏢 厂商",
    tagClass: "company",
    source: "字节跳动",
    url: "https://www.doubao.com"
  },
  {
    date: "2026-05-17",
    title: "Midjourney V7 即将发布，将支持实时协作编辑",
    summary: "Midjourney 官方透露 V7 版本将带来实时协作编辑功能，多个用户可同时编辑和调整同一图像。",
    tag: "🔧 工具",
    tagClass: "tool",
    source: "Midjourney",
    url: "https://www.midjourney.com"
  },
  {
    date: "2026-05-17",
    title: "Google Gemini 深度整合到 Android 系统",
    summary: "Google 宣布 Gemini AI 将深度整合到 Android 系统中，取代 Google Assistant，支持更智能的系统级交互。",
    tag: "🔥 热点",
    tagClass: "hot",
    source: "Google",
    url: "https://gemini.google.com"
  }
];



const categories = {};
toolsData.forEach(t => { if (!categories[t.category]) categories[t.category] = t.categoryLabel; });
