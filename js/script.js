// 物产档案数据：image 字段统一使用 images/ 本地路径，物产图片可按字段独立替换。
// 后期新增物产时，只需按此结构补充对象。
const products = [
  {
    id: "sea-cucumber",
    name: "大连海参",
    slug: "haishen",
    archiveCode: "H-01",
    alias: "辽参、刺参",
    category: "海味",
    origin: "大连长海、旅顺沿海",
    landscape: ["黄渤海域"],
    growth: ["冷水慢养"],
    feature: "冷水海域缓慢生长，肉质厚实，是辽南海味文化的重要标识。",
    environment: "黄海北部低温海域，礁石与海藻丰茂，海水交换充分。",
    form: "体呈圆筒状，背部肉刺明显，色泽多为深褐或黑褐。",
    value: "连接海洋牧场、饮食传统与滨海城市记忆，体现辽宁向海而生的地域性格。",
    symbol: "参",
    image: "images/海参 (2).jpg",
    color: "#2d6670",
    regionKey: "sea"
  },
  {
    id: "abalone",
    name: "大连鲍鱼",
    slug: "baoyu",
    archiveCode: "H-02",
    alias: "皱纹盘鲍",
    category: "海味",
    origin: "大连金州、长海沿海",
    landscape: ["黄渤海域"],
    growth: ["冷水慢养"],
    feature: "附着近岸岩礁生长，以细腻肉质记录北方海域的冷冽滋味。",
    environment: "水流通畅、盐度稳定的近岸岩礁带，褐藻资源丰富。",
    form: "贝壳低平呈耳状，壳面粗糙，软体肥厚有弹性。",
    value: "是大连海水增养殖产业的代表，也构成地方节庆与宴席中的经典风味。",
    symbol: "鲍",
    image: "images/大连鲍鱼.jpg",
    color: "#527a78",
    regionKey: "sea"
  },
  {
    id: "clam",
    name: "丹东黄蚬子",
    slug: "huangxianzi",
    archiveCode: "H-03",
    alias: "黄蚬、青柳蛤",
    category: "海味",
    origin: "丹东东港沿海",
    landscape: ["黄渤海域"],
    growth: ["江海交汇"],
    feature: "鸭绿江入海口的咸淡水交汇，孕育鲜甜饱满的滩涂滋味。",
    environment: "鸭绿江入海口潮间带，泥沙细软，淡水与海水周期性交汇。",
    form: "贝壳略呈三角形，外壳黄褐，斧足发达，肉质鲜嫩。",
    value: "体现边海城市丹东独特的河海生态，是当地市井饮食与季节记忆的一部分。",
    symbol: "蚬",
    image: "images/黄蚬子.jpg",
    color: "#9a7651",
    regionKey: "sea"
  },
  {
    id: "rice",
    name: "盘锦大米",
    slug: "dami",
    archiveCode: "P-01",
    alias: "盘锦蟹田米",
    category: "稻香",
    origin: "盘锦大洼、盘山",
    landscape: ["辽河湿地", "平原稻田"],
    growth: ["稻田共生"],
    feature: "辽河入海平原的盐碱土与充足光照，凝成清香软糯的一粒米。",
    environment: "辽河三角洲冲积平原，四季分明，水源充足，土壤富含有机质。",
    form: "米粒整齐饱满，色泽青白，蒸煮后油润有光泽。",
    value: "从盐碱地改良到现代农业品牌，见证盘锦湿地生产方式与城市身份的形成。",
    symbol: "稻",
    image: "images/大米.jpg",
    color: "#7e8f5c",
    regionKey: "wetland"
  },
  {
    id: "crab",
    name: "盘锦河蟹",
    slug: "hexie",
    archiveCode: "P-02",
    alias: "中华绒螯蟹",
    category: "河鲜",
    origin: "盘锦辽河口湿地",
    landscape: ["辽河湿地", "平原稻田"],
    growth: ["稻田共生", "江海交汇"],
    feature: "游走于稻田与河海之间，以生态共生写下湿地丰收的另一种注脚。",
    environment: "辽河水系与滨海湿地交叠区域，稻田沟渠提供丰富饵料与栖息空间。",
    form: "青壳白肚，金爪黄毛，蟹膏丰腴，肢体有力。",
    value: "推动稻蟹共生的生态农业模式，将湿地保护与地方生产经验紧密连接。",
    symbol: "蟹",
    image: "images/盘锦河蟹.jpg",
    color: "#985e46",
    regionKey: "wetland"
  },
  {
    id: "jade",
    name: "岫岩玉",
    slug: "xiuyanyu",
    archiveCode: "M-01",
    alias: "岫玉",
    category: "玉石",
    origin: "鞍山岫岩满族自治县",
    landscape: ["辽东山地", "矿脉地层"],
    growth: ["地层沉积"],
    feature: "亿万年地质作用凝结出的温润石色，被匠人转译为可触摸的山地记忆。",
    environment: "辽东古老变质岩系中的镁质碳酸盐岩层，经历长期地质作用形成。",
    form: "质地细腻温润，透明度不一，常见青绿、黄白与墨绿色。",
    value: "承载中国玉雕技艺与满族地区文化记忆，是辽宁重要的地质与工艺文化名片。",
    symbol: "玉",
    image: "images/岫岩玉.jpg",
    color: "#557a70",
    regionKey: "mineral"
  },
  {
    id: "ginseng",
    name: "桓仁山参",
    slug: "shanshen",
    archiveCode: "S-01",
    alias: "林下参、籽海",
    category: "山珍",
    origin: "本溪桓仁山地",
    landscape: ["辽东山地"],
    growth: ["林下生长"],
    feature: "在辽东林海的阴翳与腐殖土中，以漫长年份积蓄山野气息。",
    environment: "长白山余脉的针阔混交林下，气候湿润凉爽，土壤疏松肥沃。",
    form: "芦长体灵，须根细长，生长年限越久形态越显苍劲。",
    value: "延续辽东山区采参、护林与药食传统，体现人与森林长期协作的生存智慧。",
    symbol: "参",
    image: "images/桓仁山参.jpg",
    color: "#65734f",
    regionKey: "mountain"
  },
  {
    id: "strawberry",
    name: "丹东草莓",
    slug: "caomei",
    archiveCode: "P-03",
    alias: "东港草莓",
    category: "果香",
    origin: "丹东东港、凤城",
    landscape: ["辽东山地", "平原稻田"],
    growth: ["江海交汇"],
    feature: "北纬四十度的昼夜温差与湿润海风，汇成饱满浓郁的鲜果香气。",
    environment: "鸭绿江沿岸温带季风区，日照充足、昼夜温差明显，水汽丰沛。",
    form: "果实饱满匀称，色泽鲜红，果肉细软，香气浓郁。",
    value: "带动丹东设施农业、乡村采摘与城市品牌传播，成为冬春季节的鲜明地方味觉。",
    symbol: "莓",
    image: "images/丹东草莓.jpg",
    color: "#a65d52",
    regionKey: "mountain"
  },
  {
    id: "nanguo-pear",
    name: "鞍山南果梨",
    slug: "nanguoli",
    archiveCode: "P-04",
    alias: "南果梨、鞍果",
    category: "水果",
    origin: "鞍山及辽南丘陵地区",
    landscape: ["辽东山地"],
    growth: ["果园栽培", "山地孕育"],
    tags: ["果香", "果园栽培", "鞍山"],
    feature: "果香浓郁，具有辽宁地方水果代表性。",
    environment: "辽南丘陵光照充足、昼夜温差明显，坡地排水条件适宜梨树生长。",
    form: "果实近圆形，成熟后呈黄绿色并带红晕，果肉细腻、香气突出。",
    value: "承载辽宁地方水果记忆，体现辽南丘陵果树栽培传统与特色果业价值。",
    symbol: "梨",
    image: "images/鞍山南果梨.jpg",
    color: "#9a8d4f",
    regionKey: "mountain"
  },
  {
    id: "beizhen-grape",
    name: "北镇葡萄",
    slug: "putao",
    archiveCode: "P-05",
    alias: "北镇鲜食葡萄",
    category: "水果",
    origin: "锦州北镇",
    landscape: ["辽东山地"],
    growth: ["山地孕育", "果园栽培"],
    tags: ["果香", "山地孕育", "果园栽培", "锦州"],
    feature: "依托山地气候与果园栽培形成地方葡萄产业。",
    environment: "医巫闾山周边丘陵日照充足、通风良好，昼夜温差利于果实糖分积累。",
    form: "果穗紧实，果粒饱满，色泽因品种呈紫黑、红紫或青绿色。",
    value: "连接辽西山地生态、现代果园生产与采摘旅游，形成北镇鲜明的果业名片。",
    symbol: "萄",
    image: "images/北镇葡萄.jpg",
    color: "#75607c",
    regionKey: "mountain"
  },
  {
    id: "jellyfish",
    name: "营口海蜇",
    slug: "haizhe",
    archiveCode: "H-04",
    alias: "海蜇、白皮子",
    category: "海洋水产",
    origin: "营口近海海域",
    landscape: ["黄渤海域"],
    growth: ["海洋牧场"],
    tags: ["黄渤海域", "海味", "海洋牧场", "营口"],
    feature: "口感爽脆，是辽宁沿海地区常见海味物产。",
    environment: "辽东湾近海营养盐丰富，河海水体交换为海蜇生长提供适宜环境。",
    form: "伞体宽厚、半透明，经脱水加工后质地爽脆并带有海洋咸鲜。",
    value: "体现辽宁沿海水产资源、传统加工经验与地方凉拌海味饮食习惯。",
    symbol: "蜇",
    image: "images/营口海蜇.jpeg",
    color: "#668d91",
    regionKey: "sea"
  },
  {
    id: "jinzhou-apple",
    name: "锦州苹果",
    slug: "pingguo",
    archiveCode: "P-06",
    alias: "辽西苹果",
    category: "水果",
    origin: "锦州丘陵与平原果区",
    landscape: ["平原稻田"],
    growth: ["果园栽培"],
    tags: ["果香", "果园栽培", "锦州"],
    feature: "果形饱满，体现辽西地区果业特色。",
    environment: "辽西丘陵与平原交错，日照时间长、降水适中，秋季温差有利于着色。",
    form: "果实圆整饱满，果皮红润，果肉脆甜并具有清新香气。",
    value: "反映锦州规模化果园生产与辽西乡村产业特色，是当地秋季物产的重要组成。",
    symbol: "果",
    image: "images/锦州苹果.jpg",
    color: "#a45c4e",
    regionKey: "mountain"
  },
  {
    id: "fuxin-agate",
    name: "阜新玛瑙",
    slug: "manao",
    archiveCode: "M-02",
    alias: "阜新水草玛瑙",
    category: "矿石工艺物产",
    origin: "阜新地区",
    landscape: ["矿脉地层"],
    growth: ["地层沉积"],
    tags: ["矿脉地层", "工艺物产", "地层沉积", "阜新"],
    feature: "由地下矿物资源形成，经加工转化为工艺品。",
    environment: "火山岩孔洞与地下热液活动共同作用，二氧化硅长期沉积结晶形成玛瑙。",
    form: "质地坚硬细腻，纹带与色层丰富，部分原石呈现水草状天然图案。",
    value: "推动地下矿物资源向雕刻工艺、地方文创和城市文化品牌转化。",
    symbol: "瑙",
    image: "images/阜新玛瑙.jpg",
    color: "#8b654f",
    regionKey: "mineral"
  },
  {
    id: "tieling-hazelnut",
    name: "铁岭榛子",
    slug: "zhenzi",
    archiveCode: "S-02",
    alias: "平榛、东北榛子",
    category: "坚果山珍",
    origin: "铁岭山地及丘陵地区",
    landscape: ["辽东山地"],
    growth: ["山地孕育"],
    tags: ["辽东山地", "山珍", "山地孕育", "铁岭"],
    feature: "具有东北山地坚果特色，适合作为地方伴手礼。",
    environment: "辽宁北部丘陵林缘光照适中、土层深厚，为榛树生长和果实成熟提供条件。",
    form: "坚果近球形，外壳坚硬，果仁乳白饱满，具有浓郁坚果香气。",
    value: "连接山地林果资源、乡村种植与地方伴手礼产业，体现辽北物产特色。",
    symbol: "榛",
    image: "images/铁岭榛子.jpg",
    color: "#7a6b46",
    regionKey: "mountain"
  },
  {
    id: "liaoyang-grape",
    name: "辽阳山葡萄",
    slug: "shanputao",
    archiveCode: "P-07",
    alias: "野生山葡萄",
    category: "水果 / 酿造原料",
    origin: "辽阳山地丘陵地带",
    landscape: ["辽东山地"],
    growth: ["山地孕育", "果园栽培"],
    tags: ["果香", "山地孕育", "果园栽培", "辽阳"],
    feature: "具有山地果实特色，可延展到饮食与加工文化。",
    environment: "辽阳东部山地林缘湿润凉爽，坡地日照与温差帮助果实形成酸甜风味。",
    form: "果粒较小、颜色深紫，果皮色素丰富，酸度与香气适合加工酿造。",
    value: "从山地果实延伸到饮品与加工文化，呈现辽阳林果资源的多元利用方式。",
    symbol: "葡",
    image: "images/辽阳山葡萄.jpg",
    color: "#654f70",
    regionKey: "mountain"
  }
];

const growthChains = {
  rice: {
    region: "辽河湿地 / 盘锦",
    title: "稻香从湿地升起",
    intro: "河海退积形成的平原与充足水系，为一粒稻米建立了独特的生命坐标。",
    nodes: [
      ["湿地环境", "辽河与大辽河在此入海，冲积平原、芦苇荡与水网共同构成稻作的自然底盘。"],
      ["黑土地", "长期淤积形成富含有机质的土壤，盐碱地改良则拓展了水稻生长的边界。"],
      ["水稻种植", "育秧、插秧与水层管理顺应北方短生长期，稻蟹共生也进入田间系统。"],
      ["秋收", "昼夜温差帮助淀粉积累，秋季成熟后集中收割、脱粒与晾晒。"],
      ["加工", "稻谷经过烘干、去壳、碾米与分级，成为颗粒完整、色泽青白的成品米。"],
      ["餐桌消费", "蒸煮后的米饭清香油润，从家庭餐桌进入全国性的辽宁风味认知。"],
      ["地域价值", "盘锦大米连接湿地生态、盐碱地治理与现代农业，成为辽河平原的地域名片。"]
    ]
  },
  seaCucumber: {
    region: "黄渤海域 / 大连",
    title: "冷水养成一味海珍",
    intro: "辽东半岛漫长海岸线与北方冷水环境，让海参在缓慢生长中积蓄独特质地。",
    nodes: [
      ["海岸环境", "黄海北部水温较低，海流交换充分，礁石海底与藻场提供稳定栖息地。"],
      ["海洋牧场", "通过底播增殖与海域管理，将自然海区转化为兼顾生产和生态修复的牧场。"],
      ["养殖", "海参摄食海底有机碎屑，在低温海水中缓慢生长并经历夏眠周期。"],
      ["捕捞", "成熟海参多由潜水员采捕，捕捞季节与规格受到严格管理。"],
      ["加工", "鲜参经清洗、去内脏、煮制和盐渍或淡干处理，延长保存并形成不同口感。"],
      ["海味文化", "从滨海家庭食俗到宴席珍品，海参成为辽南人理解海洋的一种味觉语言。"],
      ["地域价值", "辽参连接海洋牧场技术、海岸生态与大连城市品牌，呈现向海发展的产业路径。"]
    ]
  },
  jade: {
    region: "矿脉地层 / 岫岩",
    title: "山石被时间点亮",
    intro: "在辽东古老岩层深处，矿物经历漫长变质作用，最终由手艺赋予文化形态。",
    nodes: [
      ["地层沉积", "远古海相沉积物构成镁质碳酸盐岩，为岫岩玉的形成提供物质基础。"],
      ["矿脉形成", "区域变质与热液交代持续作用，蛇纹石等矿物在岩层中聚集成矿。"],
      ["开采", "依据矿体走向进行勘探与开采，原石被编号、记录并运出山地。"],
      ["切割", "匠人观察颜色、裂隙和透明度，以切片判断材料最适合的造型方向。"],
      ["雕刻", "设计、粗坯、细雕和抛光层层推进，让自然纹理成为作品语言的一部分。"],
      ["工艺品", "玉料转化为摆件、器皿与饰品，进入日常生活、礼俗和公共艺术空间。"],
      ["地域价值", "岫岩玉将地质遗产、满族地域文化和国家级玉雕技艺连成一体。"]
    ]
  },
  crab: {
    region: "辽河湿地 / 盘锦",
    title: "一片稻田，两种丰收",
    intro: "河蟹进入稻田生态系统，在水稻生长与人工管护之间形成互利共生的生产关系。",
    nodes: [
      ["辽河湿地", "辽河口水网、滩涂与湿润气候共同构成河蟹生长和稻作生产的生态基础。"],
      ["稻田生态", "水稻田中的水体、沟渠与天然饵料，为河蟹提供活动和摄食空间。"],
      ["蟹苗投放", "选择适宜规格的蟹苗，在水温和秧苗状态稳定后科学投放。"],
      ["稻蟹共生", "河蟹清理杂草和部分害虫，活动也促进水体循环，稻田为其遮蔽降温。"],
      ["捕捞分拣", "秋季河蟹成熟后通过地笼捕捞，并依据规格、活力进行分拣。"],
      ["秋季餐桌", "河蟹与新米同期上市，成为盘锦秋季饮食中极具辨识度的组合。"],
      ["地域价值", "体现盘锦“稻蟹共生”的生态农业模式与地方饮食文化。"]
    ]
  },
  clam: {
    region: "鸭绿江口 / 丹东",
    title: "江海之间的一口鲜甜",
    intro: "鸭绿江淡水与黄海海水在滩涂相遇，为黄蚬子形成独特的生长场域。",
    nodes: [
      ["鸭绿江口", "江水携带泥沙与营养物质，在入海处铺展出广阔潮间带。"],
      ["江海交汇", "周期变化的盐度、水温与潮汐塑造咸淡水交汇生态。"],
      ["滩涂生长", "黄蚬子潜居细软泥沙，以水体中的浮游生物和有机物为食。"],
      ["捕捞采集", "渔民依据潮汐和生长季进入滩涂或近海区域采捕。"],
      ["清洗加工", "鲜活黄蚬子经过吐沙、清洗、分级后进入市场或冷链加工。"],
      ["地方海味", "水煮、烧烤等朴素做法保留鲜甜，成为丹东常见的街巷海味。"],
      ["地域价值", "体现丹东江海交汇环境与边境城市海味饮食特色。"]
    ]
  },
  strawberry: {
    region: "丘陵果园 / 丹东",
    title: "冬春果香的生长档案",
    intro: "湿润气候、昼夜温差与设施栽培共同塑造丹东草莓鲜明的香气和地方品牌。",
    nodes: [
      ["丘陵果园", "鸭绿江沿岸丘陵与平地相接，为设施农业提供良好土壤和水源。"],
      ["温润气候", "海洋水汽调节温度，充足日照与昼夜温差帮助风味物质积累。"],
      ["草莓育苗", "选择健壮种苗，经过育苗、定植和温湿度管理建立生长基础。"],
      ["开花结果", "授粉、水肥和棚温管理共同影响果实形态、糖度与香气。"],
      ["采摘分级", "成熟果实按色泽、大小和完整度人工采摘并快速分级。"],
      ["鲜果消费", "草莓通过冷链、采摘体验和节庆活动进入更广泛的消费场景。"],
      ["地域价值", "体现丹东水果产业与地方品牌传播价值。"]
    ]
  },
  ginseng: {
    region: "辽东山地 / 桓仁",
    title: "林下岁月积成山珍",
    intro: "山参在辽东林下缓慢生长，人工管护与自然节律共同保存珍贵的山地资源。",
    nodes: [
      ["辽东山地", "长白山余脉森林密布，山谷湿润，为山参提供稳定的大环境。"],
      ["林下环境", "林冠遮阴、腐殖土和适度坡向共同构成接近野生状态的生境。"],
      ["山参生长", "种子在林下自然萌发，根体经历多年缓慢伸展并积累形态特征。"],
      ["人工管护", "生产者巡护林地、防止破坏，并根据环境变化进行低干预管理。"],
      ["采挖整理", "达到年限后谨慎采挖，保留须根，并完成清理、分级和保存。"],
      ["药食应用", "山参进入滋补、药食和礼俗场景，形成东北地区独特的使用文化。"],
      ["地域价值", "体现辽东山地林下资源、滋补文化与地域生态价值。"]
    ]
  },
  nanguoPear: {
    region: "辽南丘陵 / 鞍山",
    title: "一颗梨保存地方秋香",
    intro: "辽南丘陵的光照、温差与果树栽培经验，让南果梨成为辽宁水果记忆的代表。",
    nodes: [
      ["辽南丘陵", "坡地排水良好、日照充足，山地与平原之间形成适宜果树生长的小气候。"],
      ["果树栽培", "整枝、修剪、水肥和病虫管理帮助梨树建立稳定结果能力。"],
      ["春季开花", "梨花在春季集中开放，授粉质量决定当年坐果情况。"],
      ["夏季生长", "果实在温暖季节逐渐膨大，并在昼夜温差中积累糖分和香气。"],
      ["秋季采摘", "成熟果实经过人工采摘、后熟与分级，呈现独特浓郁果香。"],
      ["鲜果销售", "南果梨通过本地市集、礼盒和冷链走向更广阔的消费区域。"],
      ["地域价值", "体现辽宁地方水果记忆与辽南果业特色。"]
    ]
  },
  jellyfish: {
    region: "黄渤海域 / 营口",
    title: "海水与盐共同完成的爽脆",
    intro: "海蜇从辽东湾近海被捕捞上岸，经传统脱水处理成为沿海餐桌的清爽海味。",
    nodes: [
      ["近海环境", "辽东湾沿岸河流入海，营养物质与海水交换形成适宜生境。"],
      ["海域生长", "海蜇随水流活动，以浮游生物为食，在适宜水温中逐渐发育。"],
      ["捕捞上岸", "渔民根据海况和生长季进行捕捞，鲜蜇被及时运回岸上。"],
      ["脱水加工", "通过盐矾处理等传统工序去除水分，使组织变得紧实耐存。"],
      ["凉拌食用", "加工后的海蜇经浸泡去盐、切丝调味，形成爽脆清鲜口感。"],
      ["海味餐桌", "凉拌海蜇常见于家庭餐桌和地方宴席，承载沿海饮食习惯。"],
      ["地域价值", "体现辽宁沿海水产资源与地方饮食习惯。"]
    ]
  },
  agate: {
    region: "矿脉地层 / 阜新",
    title: "地下纹理走向手工艺",
    intro: "矿物沉积形成的天然色带，经切割与雕琢转化为具有地方识别度的工艺物产。",
    nodes: [
      ["地下矿层", "阜新地区古老火山岩与矿层为玛瑙生成提供空间和物质条件。"],
      ["玛瑙形成", "富含二氧化硅的热液进入岩石孔洞，层层沉积并逐渐结晶。"],
      ["原石开采", "依据矿层勘探开采原石，保留其天然皮壳、色带与纹理信息。"],
      ["打磨切割", "观察内部结构后切片、定形和磨平，显露矿物的颜色与图案。"],
      ["图案雕琢", "匠人顺应天然纹带设计题材，以细雕和抛光强化视觉层次。"],
      ["工艺饰品", "玛瑙被制成摆件、印章、首饰与文创产品，进入日常审美。"],
      ["地域价值", "体现矿物资源向地方工艺品和文创产品的转化。"]
    ]
  }
};

const atlasRegions = {
  dalian: {
    number: "A-01",
    city: "大连",
    en: "DALIAN COASTAL PRODUCTS",
    title: "大连海岸产区",
    zones: ["coast"],
    products: ["大连海参", "大连鲍鱼"],
    productIds: ["sea-cucumber", "abalone"],
    conditions: "黄海北部冷水海域、礁石海底与海洋牧场共同形成稳定生境。",
    value: "连接海岸生态、海洋生产与大连港城饮食文化。"
  },
  dandong: {
    number: "A-02",
    city: "丹东",
    en: "YALU ESTUARY & FRUIT BELT",
    title: "丹东江海果香产区",
    zones: ["coast", "orchard"],
    products: ["丹东黄蚬子", "丹东草莓"],
    productIds: ["clam", "strawberry"],
    conditions: "鸭绿江口江海交汇、湿润海风和丘陵果园共同塑造两类物产。",
    value: "呈现边境城市的河海生态、鲜果产业与地方饮食记忆。"
  },
  panjin: {
    number: "A-03",
    city: "盘锦",
    en: "LIAOHE WETLAND AGRICULTURE",
    title: "盘锦辽河湿地产区",
    zones: ["wetland"],
    products: ["盘锦大米", "盘锦河蟹"],
    productIds: ["rice", "crab"],
    conditions: "辽河入海平原、水网湿地与稻田生态交织，形成稻蟹共生环境。",
    value: "将湿地保护、生态农业与盘锦秋季饮食文化连接起来。"
  },
  benxi: {
    number: "A-04",
    city: "本溪",
    en: "EASTERN MOUNTAIN FOREST",
    title: "本溪辽东山林产区",
    zones: ["mountain"],
    products: ["桓仁山参"],
    productIds: ["ginseng"],
    conditions: "辽东山地针阔混交林、腐殖土与凉润气候支持林下山参缓慢生长。",
    value: "延续采参、护林与药食传统，体现山地生态资源价值。"
  },
  anshan: {
    number: "A-05",
    city: "鞍山 / 岫岩",
    en: "ANSHAN HILLS & XIUYAN STRATA",
    title: "鞍山 / 岫岩丘陵矿脉",
    zones: ["orchard", "mineral"],
    products: ["鞍山南果梨", "岫岩玉"],
    productIds: ["nanguo-pear", "jade"],
    conditions: "辽南丘陵果园与岫岩古老变质岩层在同一地域形成双重资源结构。",
    value: "连接地方水果记忆、地质遗产与岫岩玉雕工艺。"
  },
  yingkou: {
    number: "A-06",
    city: "营口",
    en: "LIAODONG BAY SEAFOOD",
    title: "营口近海水产区",
    zones: ["coast"],
    products: ["营口海蜇"],
    productIds: ["jellyfish"],
    conditions: "辽东湾近海营养盐、水体交换与传统盐矾加工共同塑造海蜇物产。",
    value: "保存辽宁沿海加工经验与清爽海味餐桌习惯。"
  },
  jinzhou: {
    number: "A-07",
    city: "锦州",
    en: "WESTERN LIAONING FRUIT BELT",
    title: "锦州辽西果业产区",
    zones: ["orchard"],
    products: ["北镇葡萄", "锦州苹果"],
    productIds: ["beizhen-grape", "jinzhou-apple"],
    conditions: "辽西丘陵和平原果区日照充足、昼夜温差明显，利于果实积糖着色。",
    value: "形成北镇葡萄与锦州苹果共同构成的辽西果业名片。"
  },
  fuxin: {
    number: "A-08",
    city: "阜新",
    en: "FUXIN MINERAL CRAFTS",
    title: "阜新矿石工艺产区",
    zones: ["mineral"],
    products: ["阜新玛瑙"],
    productIds: ["fuxin-agate"],
    conditions: "火山岩孔洞与地下热液长期作用，形成纹带丰富的玛瑙矿物。",
    value: "推动矿物资源向雕刻工艺、城市文化与文创产品转化。"
  },
  tieling: {
    number: "A-09",
    city: "铁岭",
    en: "NORTHERN HILLS & HAZEL GROVES",
    title: "铁岭辽北山珍产区",
    zones: ["mountain"],
    products: ["铁岭榛子"],
    productIds: ["tieling-hazelnut"],
    conditions: "辽北丘陵林缘、深厚土层和温带季风气候为榛树生长提供条件。",
    value: "连接林果资源、乡村种植与辽宁北部伴手礼文化。"
  }
};

const atlasZones = {
  all: {
    title: "辽宁全域物产网络",
    en: "LIAONING PRODUCT NETWORK",
    desc: "从海岸、湿地到山地与矿层，九个产区节点共同构成辽宁物产的地域关系。",
    products: "山海 · 湿地 · 山林 · 矿脉 · 果园"
  },
  coast: {
    title: "黄渤海域",
    en: "YELLOW SEA & BOHAI SEA",
    desc: "辽宁半岛伸入黄海与渤海，冷水海域和海岸资源孕育丰富的海洋物产。",
    products: "大连海参 · 大连鲍鱼 · 丹东黄蚬子 · 营口海蜇"
  },
  wetland: {
    title: "辽河湿地",
    en: "LIAOHE WETLAND",
    desc: "辽河三角洲湿地与平原稻田共同形成稻蟹共生的生产系统。",
    products: "盘锦大米 · 盘锦河蟹"
  },
  mountain: {
    title: "辽东山地",
    en: "EASTERN LIAONING MOUNTAINS",
    desc: "辽东山地的森林、林缘与凉润气候孕育山参和坚果山珍。",
    products: "桓仁山参 · 铁岭榛子"
  },
  mineral: {
    title: "矿脉地层",
    en: "MINERAL STRATA",
    desc: "辽宁多样的古老地层与矿物资源形成玉石、玛瑙等工艺物产。",
    products: "岫岩玉 · 阜新玛瑙"
  },
  orchard: {
    title: "果园丘陵",
    en: "ORCHARD HILLS",
    desc: "丘陵坡地、日照温差与温润气候共同形成辽宁地方果业风物。",
    products: "丹东草莓 · 鞍山南果梨 · 北镇葡萄 · 锦州苹果"
  }
};

const atlasCoordinates = {
  dalian: [56, 78], dandong: [80, 59], panjin: [49, 55],
  benxi: [73, 46], anshan: [62, 51], yingkou: [56, 64],
  jinzhou: [39, 47], fuxin: [43, 29], tieling: [70, 24]
};

const atlasRelationSets = {
  environment: [
    ["dalian", "yingkou", ["coast"]], ["yingkou", "dandong", ["coast"]],
    ["panjin", "yingkou", ["wetland"]], ["tieling", "benxi", ["mountain"]],
    ["benxi", "dandong", ["mountain"]], ["fuxin", "anshan", ["mineral"]],
    ["jinzhou", "anshan", ["orchard"]], ["anshan", "dandong", ["orchard"]]
  ],
  category: [
    ["dalian", "dandong", ["coast"]], ["dalian", "yingkou", ["coast"]],
    ["dandong", "jinzhou", ["orchard"]], ["jinzhou", "anshan", ["orchard"]],
    ["benxi", "tieling", ["mountain"]], ["fuxin", "anshan", ["mineral"]]
  ],
  growth: [
    ["panjin", "yingkou", ["wetland"]], ["yingkou", "dalian", ["coast"]],
    ["dalian", "dandong", ["coast"]], ["tieling", "benxi", ["mountain"]],
    ["benxi", "dandong", ["mountain", "orchard"]], ["jinzhou", "anshan", ["orchard"]],
    ["fuxin", "anshan", ["mineral"]]
  ]
};

const state = {
  filter: "all",
  saved: new Set(),
  currentProduct: null,
  atlasZone: "all",
  atlasMode: "environment",
  atlasLinesVisible: false,
  atlasCurrent: null
};

const productGrid = document.querySelector("#productGrid");
const emptyState = document.querySelector("#emptyState");
const filterText = document.querySelector("#filterText");
const archiveModal = document.querySelector("#archiveModal");
const posterModal = document.querySelector("#posterModal");
const savePosterButton = document.querySelector("#savePosterButton");
const toast = document.querySelector("#toast");

function renderProducts() {
  const filtered = state.filter === "all"
    ? products
    : products.filter((product) =>
        product.category === state.filter ||
        product.landscape.includes(state.filter) ||
        product.growth.includes(state.filter) ||
        (product.tags && product.tags.includes(state.filter))
      );

  productGrid.innerHTML = filtered.map((product, index) => `
    <article class="product-card" style="animation-delay:${index * 45}ms">
    <div class="card-visual ${product.image ? "has-image" : ""}" style="--card-color:${product.color}">
    ${
      product.image
        ? `<img class="card-img" src="${product.image}" alt="${product.name}">`
        : ""
    }
  
    <span class="visual-index product-code code-${product.archiveCode.charAt(0).toLowerCase()}">${product.archiveCode}</span>
  
    ${
      product.image
        ? ""
        : `
          <span class="visual-line"></span>
          <span class="visual-character">${product.symbol}</span>
        `
    }
  </div>

      <div class="card-tags">
        ${(product.tags || [product.category, ...product.landscape, ...product.growth])
          .slice(0, 4)
          .map((tag) => `<span>${tag}</span>`)
          .join("")}
      </div>
      <h3>${product.name}</h3>
      <p class="card-origin">核心产区 / ${product.origin}</p>
      <p class="card-feature">${product.feature}</p>
      <div class="card-actions">
        <button class="view-archive" type="button" data-view="${product.id}">查看档案 ↗</button>
        <button class="add-route ${state.saved.has(product.id) ? "saved" : ""}" type="button" data-save="${product.id}">
          ${state.saved.has(product.id) ? "已加入 ✓" : "加入路线 ＋"}
        </button>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;
  filterText.textContent = `正在阅览：${state.filter === "all" ? "全部档案" : state.filter} · ${filtered.length} 件`;
}

function setFilter(filter, button) {
  state.filter = filter;
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("active"));
  if (button) button.classList.add("active");
  if (filter === "all") {
    document.querySelector('[data-filter="all"]').classList.add("active");
  }
  renderProducts();
}

function openArchive(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  state.currentProduct = id;

  document.querySelector("#modalFileNo").textContent = `FILE ${String(products.indexOf(product) + 1).padStart(3, "0")}`;

  const modalVisual = document.querySelector("#modalVisual");
  const modalSymbol = document.querySelector("#modalSymbol");
  const modalImage = document.querySelector("#modalImage");
  const modalPlaceholder = document.querySelector("#modalPlaceholder");

  // 弹窗背景色
  modalVisual.style.background = product.color;

  // 如果这个物产有图片，就显示图片
  if (product.image) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalImage.style.display = "block";

    modalSymbol.style.display = "none";
    modalPlaceholder.style.display = "none";
  } else {
    // 如果没有图片，就继续显示原来的文字符号
    modalImage.style.display = "none";
    modalSymbol.style.display = "block";
    modalPlaceholder.style.display = "block";
    modalSymbol.textContent = product.symbol;
  }

  document.querySelector("#modalKicker").textContent = `${product.category}档案 / ${product.landscape[0]}`;
  document.querySelector("#modalTitle").textContent = product.name;
  document.querySelector("#modalFeature").textContent = product.feature;
  
  document.querySelector("#archiveList").innerHTML = [
    ["名称", product.name],
    ["别称", product.alias],
    ["所属类别", product.category],
    ["核心产区", product.origin],
    ["生长环境", product.environment],
    ["形态特征", product.form],
    ["地域价值", product.value]
  ].map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");

  updateModalButton();
  archiveModal.classList.add("open");
  archiveModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}


function closeArchive() {
  archiveModal.classList.remove("open");
  archiveModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openArchiveFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const productSlug = params.get("product");
  if (!productSlug) return;

  const product = products.find((item) => item.slug === productSlug);
  if (!product) return;

  const exploreSection = document.querySelector("#explore");
  if (exploreSection) {
    exploreSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  window.setTimeout(() => openArchive(product.id), 350);
}

function updateModalButton() {
  const button = document.querySelector("#modalAdd");
  const isSaved = state.saved.has(state.currentProduct);
  button.innerHTML = isSaved ? "已加入我的路线 <span>✓</span>" : "加入我的路线 <span>＋</span>";
  button.classList.toggle("saved", isSaved);
}

function toggleSaved(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;

  if (state.saved.has(id)) {
    state.saved.delete(id);
    showToast(`已从路线移除「${product.name}」`);
  } else {
    state.saved.add(id);
    showToast(`已将「${product.name}」加入路线`);
  }

  renderProducts();
  renderRoute();
  updateModalButton();
  refreshAtlasSavedState();
}

const routeThemes = {
  wetland: {
    ids: ["rice", "crab"],
    short: "湿地",
    singleName: "辽河湿地物产路线",
    description: "辽河湿地的稻蟹共生"
  },
  coast: {
    ids: ["sea-cucumber", "abalone", "clam", "jellyfish"],
    short: "海岸",
    singleName: "海岸海味打卡路线",
    description: "黄渤海岸的冷水海味"
  },
  mountain: {
    ids: ["ginseng", "tieling-hazelnut"],
    short: "山野",
    singleName: "辽东山野物产路线",
    description: "辽东山地的林下山珍"
  },
  fruit: {
    ids: ["strawberry", "nanguo-pear", "beizhen-grape", "jinzhou-apple", "liaoyang-grape"],
    short: "果香",
    singleName: "辽宁果香风物路线",
    description: "辽南与辽东果园的鲜甜风物"
  },
  mineral: {
    ids: ["jade", "fuxin-agate"],
    short: "矿脉",
    singleName: "矿脉工艺探索路线",
    description: "古老矿脉的玉石与工艺"
  }
};

const posterRegionLabels = {
  "sea-cucumber": "大连海岸",
  abalone: "大连海岸",
  clam: "鸭绿江口",
  rice: "辽河湿地",
  crab: "辽河湿地",
  jade: "岫岩玉脉",
  ginseng: "辽东山地",
  strawberry: "丹东果园",
  "nanguo-pear": "辽南丘陵",
  "beizhen-grape": "辽西山地果园",
  jellyfish: "营口近海",
  "jinzhou-apple": "辽西果园",
  "fuxin-agate": "阜新矿层",
  "tieling-hazelnut": "辽北山地",
  "liaoyang-grape": "辽阳山地"
};

function getProductRegionLabel(product) {
  return posterRegionLabels[product.id] || product.landscape[0] || product.origin;
}

function getRouteData(savedProducts) {
  if (!savedProducts.length) {
    return {
      name: "等待一条线索",
      description: "至少收藏一件物产，我们将从它的自然环境出发，为你书写一条辽宁物产认知路径。",
      posterCaption: "请先收藏物产，生成你的辽宁路线。",
      places: ["起点待定", "路径生成中"],
      themes: []
    };
  }

  const themes = Object.keys(routeThemes).filter((themeKey) =>
    savedProducts.some((product) => routeThemes[themeKey].ids.includes(product.id))
  );
  const hasTheme = (themeKey) => themes.includes(themeKey);
  let name;

  if (themes.length === 1) {
    name = routeThemes[themes[0]].singleName;
  } else if (themes.length >= 4) {
    name = "山海辽藏综合路线";
  } else if (hasTheme("wetland") && hasTheme("mountain")) {
    name = "湿地与山野物产路线";
  } else if (hasTheme("fruit") && hasTheme("mountain")) {
    name = "果香与山林风物路线";
  } else if (hasTheme("coast") && hasTheme("wetland")) {
    name = "海岸与湿地物产路线";
  } else if (hasTheme("coast") && hasTheme("fruit")) {
    name = "海风与果香打卡路线";
  } else if (hasTheme("mineral") && hasTheme("mountain")) {
    name = "矿脉与山野探索路线";
  } else {
    name = themes.slice(0, 2).map((themeKey) => routeThemes[themeKey].short).join("与") + "风物路线";
  }

  const places = [...new Set(savedProducts.map(getProductRegionLabel))];
  const routeScenes = themes.map((themeKey) => routeThemes[themeKey].description);
  const description = `从${routeScenes.join("，到")}，循着收藏物产的生长、生产与地域记忆，形成一条属于你的辽宁物产认知路径。`;
  const posterCaption = `沿${themes.map((themeKey) => routeThemes[themeKey].short).join("、")}线索，走过${places.slice(0, 3).join("、")}。`;

  return { name, description, posterCaption, places, themes };
}

function renderPoster(savedProducts, routeData) {
  const displayItems = savedProducts.slice(0, 4);
  const extraCount = Math.max(0, savedProducts.length - 4);
  const posterItems = document.querySelector("#posterItems");
  const posterExtraCount = document.querySelector("#posterExtraCount");
  const posterEmpty = document.querySelector("#posterEmpty");
  const posterRouteArea = document.querySelector("#posterRouteArea");

  posterItems.innerHTML = displayItems.map((product, index) => `
    <article class="poster-sticker poster-sticker-${index + 1}" style="--sticker-color:${product.color}">
      <div class="poster-sticker-visual ${product.image ? "has-poster-image" : ""}" data-symbol="${product.symbol}" data-code="${product.archiveCode}">
        ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ""}
        <span class="poster-product-symbol">${product.symbol}</span>
        <i class="poster-pin" aria-hidden="true"></i>
        <b>${product.archiveCode}</b>
      </div>
      <div class="poster-sticker-copy">
        <strong>${product.name}</strong>
        <small>${getProductRegionLabel(product)}</small>
      </div>
    </article>
  `).join("");

  posterEmpty.hidden = savedProducts.length !== 0;
  posterRouteArea.classList.toggle("has-route", savedProducts.length !== 0);
  [0, 1, 2, 3, 4].forEach((count) => posterRouteArea.classList.remove(`node-count-${count}`));
  posterRouteArea.classList.add(`node-count-${displayItems.length}`);
  posterExtraCount.hidden = extraCount === 0;
  posterExtraCount.textContent = extraCount > 0 ? `+${extraCount} 个物产已加入路线` : "";
  document.querySelector("#posterTitle").textContent = routeData.name;
  document.querySelector("#posterDescription").textContent = savedProducts.length
    ? routeData.posterCaption
    : "请先收藏物产，生成你的辽宁路线。";
}

function resolveLocalAssetUrl(url) {
  return new URL(url, window.location.href).href;
}

async function assetToDataUrl(url) {
  try {
    const response = await fetch(resolveLocalAssetUrl(url));
    if (!response.ok) return "";
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    return "";
  }
}

async function waitForPosterImages(posterEl) {
  const images = [...posterEl.querySelectorAll("img")];
  await Promise.all(images.map((image) => {
    if (image.complete) return Promise.resolve();
    return new Promise((resolve) => {
      image.onload = resolve;
      image.onerror = resolve;
    });
  }));
}

async function preparePosterAssetsForExport(posterEl) {
  const restoreTasks = [];
  const posterBackground = await assetToDataUrl("images/route-bg.jpg");

  if (posterBackground) {
    const previousBackground = posterEl.style.background;
    posterEl.style.background = `url("${posterBackground}") center / cover no-repeat, #164f6b`;
    restoreTasks.push(() => {
      posterEl.style.background = previousBackground;
    });
  }

  const images = [...posterEl.querySelectorAll(".poster-sticker-visual img")];
  await Promise.all(images.map(async (image) => {
    const originalSrc = image.getAttribute("src");
    const dataUrl = originalSrc ? await assetToDataUrl(originalSrc) : "";
    if (!dataUrl) {
      image.dataset.exportHidden = "true";
      restoreTasks.push(() => {
        delete image.dataset.exportHidden;
      });
      return;
    }
    image.src = dataUrl;
    restoreTasks.push(() => {
      image.src = originalSrc;
    });
  }));

  await waitForPosterImages(posterEl);
  return () => restoreTasks.reverse().forEach((restore) => restore());
}

function canvasToPngUrl(canvas) {
  try {
    return canvas.toDataURL("image/png");
  } catch (error) {
    throw new Error("浏览器阻止导出海报图片资源");
  }
}

async function capturePosterCanvas(posterEl) {
  return html2canvas(posterEl, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: null,
    imageTimeout: 0,
    logging: false
  });
}

function getSavedProducts() {
  return [...state.saved]
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function imageToDataUrl(url) {
  const fetchedDataUrl = await assetToDataUrl(url);
  if (fetchedDataUrl) return fetchedDataUrl;

  return await new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth || image.width;
        canvas.height = image.naturalHeight || image.height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } catch (error) {
        resolve("");
      }
    };
    image.onerror = () => resolve("");
    image.src = resolveLocalAssetUrl(url);
  });
}

async function createRoutePosterExport(savedProducts, routeData) {
  const displayItems = savedProducts.slice(0, 4);
  const extraCount = Math.max(0, savedProducts.length - 4);
  const stage = document.createElement("div");
  stage.className = "poster-export-stage";

  const posterBackground = await imageToDataUrl("images/route-bg.jpg");
  const exportItems = await Promise.all(displayItems.map(async (product, index) => ({
    product,
    index,
    imageData: product.image ? await imageToDataUrl(product.image) : ""
  })));

  stage.innerHTML = `
    <article class="poster-export-card" style="${posterBackground ? `--export-bg:url('${posterBackground}');` : ""}">
      <div class="poster-export-overlay" aria-hidden="true"></div>
      <header class="poster-export-header">
        <div class="poster-export-kicker"><span>ROUTE ARCHIVE</span><b>山海辽藏</b></div>
        <p>辽宁物产档案路线</p>
        <h2>辽宁物产打卡指南</h2>
        <small>循着山海线索，收藏属于你的辽宁风物路线</small>
        <div class="poster-export-route-title">
          <strong>${escapeHtml(routeData.name)}</strong>
          <span>${escapeHtml(routeData.posterCaption)}</span>
        </div>
      </header>

      <section class="poster-export-map">
        <svg class="poster-export-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M18 18 C44 4 55 34 79 28"></path>
          <path d="M78 30 C92 52 50 50 25 63"></path>
          <path d="M25 63 C42 91 64 73 82 84"></path>
        </svg>
        <div class="poster-export-stickers export-count-${displayItems.length}">
          ${exportItems.map(({ product, index, imageData }) => {
            const imageSrc = imageData || product.image || "";
            return `
            <article class="poster-export-sticker" style="--sticker-color:${product.color}">
              <div class="poster-export-image ${imageSrc ? "has-image" : ""}">
                ${imageSrc ? `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(product.name)}">` : ""}
                <span class="poster-export-symbol">${escapeHtml(product.symbol)}</span>
                <i class="poster-export-pin" aria-hidden="true"></i>
                <b>${escapeHtml(product.archiveCode)}</b>
              </div>
              <div class="poster-export-copy">
                <strong>${escapeHtml(product.name)}</strong>
                <span>${escapeHtml(getProductRegionLabel(product))}</span>
                <small>${escapeHtml(product.category)} · ${String(index + 1).padStart(2, "0")} CHECK-IN</small>
              </div>
            </article>
          `;
          }).join("")}
        </div>
        ${extraCount > 0 ? `<p class="poster-export-extra">+${extraCount} 个物产已加入路线</p>` : ""}
      </section>

      <footer class="poster-export-footer">
        <strong>山海辽藏</strong>
        <span>LIAONING PRODUCT ARCHIVE</span>
      </footer>
    </article>
  `;

  document.body.appendChild(stage);
  const exportPoster = stage.querySelector(".poster-export-card");
  await waitForPosterImages(exportPoster);
  return { stage, exportPoster };
}

async function saveRoutePoster() {
  const savedProducts = getSavedProducts();

  if (!savedProducts.length) {
    showToast("请先收藏物产，生成你的辽宁路线");
    return;
  }

  if (typeof html2canvas === "undefined") {
    showToast("海报保存组件加载中，请稍后再试");
    return;
  }

  const originalText = savePosterButton.textContent;
  savePosterButton.disabled = true;
  savePosterButton.textContent = "正在生成...";

  let exportStage = null;

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const routeData = getRouteData(savedProducts);
    const exportResult = await createRoutePosterExport(savedProducts, routeData);
    exportStage = exportResult.stage;
    const exportPoster = exportResult.exportPoster;
    let canvas;
    let pngUrl;
    try {
      canvas = await capturePosterCanvas(exportPoster);
      pngUrl = canvasToPngUrl(canvas);
    } catch (error) {
      console.warn("图片版海报导出失败，正在使用信息完整模式重试：", error);
      exportPoster.classList.add("is-lite");
      canvas = await capturePosterCanvas(exportPoster);
      pngUrl = canvasToPngUrl(canvas);
    }

    const now = new Date();
    const dateStamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const link = document.createElement("a");
    link.download = `山海辽藏-辽宁物产路线-${dateStamp}.png`;
    link.href = pngUrl;
    link.click();
    showToast("路线海报已保存");
  } catch (error) {
    console.error("保存路线海报失败：", error);
    showToast(error.message || "保存失败，请稍后再试");
  } finally {
    if (exportStage) exportStage.remove();
    savePosterButton.disabled = false;
    savePosterButton.textContent = originalText;
  }
}

function renderRoute() {
  // Set 保留加入顺序，确保海报优先展示用户最先收藏的四件物产。
  const savedProducts = getSavedProducts();
  const routeData = getRouteData(savedProducts);
  const list = document.querySelector("#collectionList");

  document.querySelector("#navCount").textContent = savedProducts.length;
  document.querySelector("#collectionCount").textContent = savedProducts.length;
  document.querySelector("#routeName").textContent = routeData.name;
  document.querySelector("#routeDescription").textContent = routeData.description;

  if (!savedProducts.length) {
    list.innerHTML = `
      <div class="collection-empty">
        <span>＋</span>
        <p>尚未收藏物产<br><small>前往档案卡片，加入你的路线</small></p>
      </div>`;
  } else {
    list.innerHTML = savedProducts.map((product, index) => `
      <div class="collection-item" style="--item-color:${product.color}">
        <span class="collection-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="collection-symbol">
          ${product.image ? `<img src="${product.image}" alt="">` : product.symbol}
          <i aria-hidden="true"></i>
        </span>
        <div class="collection-copy"><strong>${product.name}</strong><small>${getProductRegionLabel(product)} · ${product.category}</small></div>
        <button class="remove-item" type="button" data-remove="${product.id}" aria-label="移除${product.name}">×</button>
      </div>
    `).join("");
  }

  document.querySelector("#routePlaces").innerHTML = routeData.places
    .map((place, index) => `${index ? "<b>→</b>" : ""}<span><i></i>${place}</span>`)
    .join("");
  renderPoster(savedProducts, routeData);
}

function renderTimeline(key) {
  const chain = growthChains[key];
  document.querySelector("#chainRegion").textContent = chain.region;
  document.querySelector("#chainTitle").textContent = chain.title;
  document.querySelector("#chainIntro").textContent = chain.intro;

  const timeline = document.querySelector("#timeline");
  timeline.innerHTML = chain.nodes.map(([title, description], index) => `
    <article class="timeline-node" tabindex="0">
      <span class="timeline-dot"></span>
      <span class="timeline-index">STEP ${String(index + 1).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join("");

  observeTimelineNodes();
}

function getSavedAtlasRegions() {
  return [...new Set([...state.saved]
    .map((productId) => Object.keys(atlasRegions).find((regionKey) => atlasRegions[regionKey].productIds.includes(productId)))
    .filter(Boolean))];
}

function getAtlasRelations() {
  if (state.atlasMode === "route") {
    const savedRegions = getSavedAtlasRegions();
    return savedRegions.slice(0, -1).map((regionKey, index) => {
      const nextKey = savedRegions[index + 1];
      return [regionKey, nextKey, [...new Set([...atlasRegions[regionKey].zones, ...atlasRegions[nextKey].zones])]];
    });
  }

  return atlasRelationSets[state.atlasMode] || [];
}

function buildAtlasRelationPath(fromKey, toKey, index) {
  const [x1, y1] = atlasCoordinates[fromKey];
  const [x2, y2] = atlasCoordinates[toKey];
  const curveX = (x1 + x2) / 2 + (index % 2 ? 3.5 : -3.5);
  const curveY = (y1 + y2) / 2 - 4;
  return `M ${x1} ${y1} Q ${curveX} ${curveY} ${x2} ${y2}`;
}

function renderAtlasRelations(previewRegion = null) {
  const relationGroup = document.querySelector("#mapRelations");
  const lineToggle = document.querySelector("#atlasLineToggle");
  const modeLabels = {
    environment: "自然环境关系",
    category: "物产类别关系",
    growth: "自然环境 → 物产 → 地域文化",
    route: "我的收藏路线"
  };
  const zoneTitle = atlasZones[state.atlasZone].title;
  let relations = getAtlasRelations();

  if (state.atlasZone !== "all") {
    relations = relations.filter(([, , zones]) => zones.includes(state.atlasZone));
  }

  const shouldDraw = state.atlasLinesVisible || Boolean(previewRegion);
  relationGroup.innerHTML = shouldDraw ? relations.map(([fromKey, toKey], index) => {
    const isRelated = !previewRegion || fromKey === previewRegion || toKey === previewRegion;
    return `<path class="map-relation-line ${previewRegion && isRelated ? "hovered" : ""} ${previewRegion && !isRelated ? "dimmed" : ""}" data-from="${fromKey}" data-to="${toKey}" d="${buildAtlasRelationPath(fromKey, toKey, index)}"></path>`;
  }).join("") : "";

  lineToggle.classList.toggle("active", state.atlasLinesVisible);
  lineToggle.setAttribute("aria-pressed", String(state.atlasLinesVisible));
  lineToggle.innerHTML = `<span></span>${state.atlasLinesVisible ? "隐藏关系线" : "查看关系线"}`;

  let status = `${zoneTitle} · ${modeLabels[state.atlasMode]}`;
  if (!state.atlasLinesVisible) status += "待开启";
  if (state.atlasMode === "route" && !relations.length) status = "收藏路线 · 尚未形成跨城市连接";
  document.querySelector("#atlasRelationStatus").textContent = status;
}

function applyAtlasNodeState() {
  const savedRegions = getSavedAtlasRegions();
  document.querySelectorAll(".map-node").forEach((node) => {
    const region = atlasRegions[node.dataset.region];
    const matchesZone = state.atlasZone === "all" || region.zones.includes(state.atlasZone);
    const matchesRoute = state.atlasMode !== "route" || savedRegions.includes(node.dataset.region);
    node.classList.toggle("muted", !matchesZone || !matchesRoute);
    node.classList.toggle("saved", savedRegions.includes(node.dataset.region));
  });

  document.querySelectorAll("[data-zone-shape]").forEach((shape) => {
    shape.classList.toggle("active", state.atlasZone !== "all" && shape.dataset.zoneShape === state.atlasZone);
  });
}

function selectAtlasZone(zoneKey) {
  if (!atlasZones[zoneKey]) return;
  state.atlasZone = zoneKey;
  if (zoneKey !== "all") state.atlasLinesVisible = true;

  document.querySelectorAll("[data-atlas-zone]").forEach((button) => {
    const isActive = button.dataset.atlasZone === zoneKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  const zone = atlasZones[zoneKey];
  document.querySelector("#atlasZoneEn").textContent = zone.en;
  document.querySelector("#atlasZoneTitle").textContent = zone.title;
  document.querySelector("#atlasZoneDesc").textContent = zone.desc;
  document.querySelector("#atlasZoneProducts").textContent = zone.products;
  applyAtlasNodeState();
  renderAtlasRelations();
}

function setAtlasMode(mode) {
  if (!["environment", "category", "growth", "route"].includes(mode)) return;
  state.atlasMode = mode;
  state.atlasLinesVisible = true;
  document.querySelector(".atlas-explorer").dataset.mode = mode;
  document.querySelectorAll("[data-atlas-mode]").forEach((button) => {
    const isActive = button.dataset.atlasMode === mode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  applyAtlasNodeState();
  renderAtlasRelations();
}

function updateAtlasActionButton() {
  const button = document.querySelector("#atlasAddRoute");
  const region = atlasRegions[state.atlasCurrent];
  if (!button || !region) return;
  const productId = region.productIds[0];
  const product = products.find((item) => item.id === productId);
  const isSaved = state.saved.has(productId);
  button.dataset.product = productId;
  button.innerHTML = isSaved ? `已加入${product.name} <span>✓</span>` : `加入${product.name} <span>＋</span>`;
  button.classList.toggle("saved", isSaved);
}

function updateAtlas(regionKey, openPanel = true) {
  const region = atlasRegions[regionKey];
  if (!region) return;
  state.atlasCurrent = regionKey;

  document.querySelectorAll(".map-node").forEach((node) => {
    const isActive = node.dataset.region === regionKey;
    node.classList.toggle("active", isActive);
    node.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelector("#atlasNumber").textContent = region.number;
  document.querySelector("#atlasEn").textContent = region.en;
  document.querySelector("#atlasTitle").textContent = region.title;
  document.querySelector("#atlasZoneValue").textContent = region.zones.map((zone) => atlasZones[zone].title).join(" / ");
  document.querySelector("#atlasConditions").textContent = region.conditions;
  document.querySelector("#atlasValue").textContent = region.value;
  document.querySelector("#atlasProducts").innerHTML = region.products
    .map((name, index) => `<div class="atlas-product">${name}<span>${String(index + 1).padStart(2, "0")}</span></div>`)
    .join("");
  document.querySelector("#atlasViewProduct").dataset.product = region.productIds[0];
  updateAtlasActionButton();

  if (openPanel) {
    const panel = document.querySelector("#atlasDetailPanel");
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
  }
}

function closeAtlasPanel() {
  const panel = document.querySelector("#atlasDetailPanel");
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  state.atlasCurrent = null;
  document.querySelectorAll(".map-node").forEach((node) => node.classList.remove("active"));
}

function refreshAtlasSavedState() {
  document.querySelector("#atlasSavedCount").textContent = state.saved.size;
  applyAtlasNodeState();
  updateAtlasActionButton();
  if (state.atlasMode === "route") renderAtlasRelations();
}

function initAtlas() {
  document.querySelector(".atlas-explorer").dataset.mode = state.atlasMode;
  document.querySelectorAll("[data-atlas-mode]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.atlasMode === state.atlasMode));
  });
  document.querySelectorAll(".map-node").forEach((node) => node.setAttribute("aria-pressed", "false"));
  selectAtlasZone("all");
  refreshAtlasSavedState();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function observeTimelineNodes() {
  const nodes = document.querySelectorAll(".timeline-node");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.25 });
  nodes.forEach((node) => observer.observe(node));
}

function initRevealAnimation() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

productGrid.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const saveButton = event.target.closest("[data-save]");
  if (viewButton) openArchive(viewButton.dataset.view);
  if (saveButton) toggleSaved(saveButton.dataset.save);
});

document.querySelector(".clue-panel").addEventListener("click", (event) => {
  const chip = event.target.closest(".filter-chip");
  if (chip) setFilter(chip.dataset.filter, chip);
});

document.querySelector("#clearFilter").addEventListener("click", () => setFilter("all"));

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeArchive);
});

document.querySelector("#modalAdd").addEventListener("click", () => {
  if (state.currentProduct) toggleSaved(state.currentProduct);
});

document.querySelector(".chain-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest(".chain-tab");
  if (!tab) return;
  document.querySelectorAll(".chain-tab").forEach((item) => item.classList.remove("active"));
  tab.classList.add("active");
  renderTimeline(tab.dataset.chain);
});

document.querySelector(".atlas-zone-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-atlas-zone]");
  if (button) selectAtlasZone(button.dataset.atlasZone);
});

document.querySelector(".atlas-mode-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-atlas-mode]");
  if (button) setAtlasMode(button.dataset.atlasMode);
});

document.querySelector("#atlasLineToggle").addEventListener("click", () => {
  state.atlasLinesVisible = !state.atlasLinesVisible;
  renderAtlasRelations();
});

const atlasMapStage = document.querySelector(".atlas-map-stage");
atlasMapStage.addEventListener("click", (event) => {
  const node = event.target.closest(".map-node");
  if (node) updateAtlas(node.dataset.region, true);
});

atlasMapStage.addEventListener("mouseover", (event) => {
  const node = event.target.closest(".map-node");
  if (!node || node.contains(event.relatedTarget)) return;
  node.classList.add("hovered");
  renderAtlasRelations(node.dataset.region);
});

atlasMapStage.addEventListener("mouseout", (event) => {
  const node = event.target.closest(".map-node");
  if (!node || node.contains(event.relatedTarget)) return;
  node.classList.remove("hovered");
  renderAtlasRelations();
});

atlasMapStage.addEventListener("focusin", (event) => {
  const node = event.target.closest(".map-node");
  if (node) renderAtlasRelations(node.dataset.region);
});

atlasMapStage.addEventListener("focusout", (event) => {
  if (event.target.closest(".map-node")) renderAtlasRelations();
});

document.querySelector("#atlasPanelClose").addEventListener("click", closeAtlasPanel);
document.querySelector("#atlasViewProduct").addEventListener("click", (event) => {
  if (event.currentTarget.dataset.product) openArchive(event.currentTarget.dataset.product);
});
document.querySelector("#atlasAddRoute").addEventListener("click", (event) => {
  if (event.currentTarget.dataset.product) toggleSaved(event.currentTarget.dataset.product);
});

document.querySelector("#collectionList").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) toggleSaved(removeButton.dataset.remove);
});

document.querySelector("#posterButton").addEventListener("click", () => {
  posterModal.classList.add("open");
  posterModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
});

savePosterButton.addEventListener("click", saveRoutePoster);

document.querySelectorAll("[data-close-poster]").forEach((element) => {
  element.addEventListener("click", () => {
    posterModal.classList.remove("open");
    posterModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeArchive();
    closeAtlasPanel();
    posterModal.classList.remove("open");
    posterModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const gameFullscreenLink = document.querySelector("#gameFullscreenLink");

function saveEmbeddedGameState() {
  const gameFrame = document.querySelector("#gameFrame");
  try {
    const frameGame = gameFrame && gameFrame.contentWindow && gameFrame.contentWindow.Game;
    if (frameGame && typeof frameGame.saveState === "function") frameGame.saveState();
  } catch (error) {
    // 如果浏览器限制 iframe 访问，则依赖游戏自身的 localStorage 自动保存。
  }
}

if (gameFullscreenLink) {
  gameFullscreenLink.addEventListener("click", saveEmbeddedGameState);
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
siteNav.addEventListener("click", (event) => {
  const activeLink = event.target.closest('a[href^="#"]:not(.nav-orbit-button)');
  if (activeLink) {
    siteNav.querySelectorAll("a").forEach((link) => link.classList.remove("active"));
    activeLink.classList.add("active");
  }
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("scroll", () => {
  document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

renderProducts();
renderRoute();
renderTimeline("rice");
initAtlas();
initRevealAnimation();
openArchiveFromUrl();
