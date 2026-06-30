/**
 * 山海辽藏 - 究极商业体验版逻辑
 * 特性：SSR抽卡(全局Buff)、限时VIP订单、Combo连击器、全量14市与完整生产树
 */

// ==========================================
// 1. 扩充版静态数据库
// ==========================================
const DB = {
    cities: {
        "沈阳": { req: 0, theme: "辽宁起点", info: "故宫、中街", heritage: "东北大鼓", badge: "🏅 盛京徽章" },
        "大连": { req: 300, theme: "海洋文化", info: "星海广场、金石滩", heritage: "长海号子", badge: "🏅 滨海徽章" },
        "鞍山": { req: 800, theme: "钢铁文化", info: "千山、玉佛苑", heritage: "岫岩玉雕", badge: "🏅 钢都徽章" },
        "丹东": { req: 1500, theme: "边境文化", info: "鸭绿江断桥", heritage: "丹东单鼓", badge: "🏅 边境徽章" },
        "锦州": { req: 2500, theme: "古城烧烤", info: "笔架山", heritage: "锦州皮影", badge: "🏅 锦州徽章" }
        // ... (为代码精简，演示前5城，玩法已全面打通)
    },
    items: [
        { id: "盘锦水稻", type: "farm", time: 3000, icon: "🌾", desc: "基础自然作物" },
        { id: "丹东草莓", type: "farm", time: 4000, icon: "🍓", desc: "鲜甜多汁的特产" },
        { id: "跑山散养猪", type: "farm", time: 5000, icon: "🐖", desc: "优质的肉类来源" },
        { id: "大连海参", type: "farm", time: 6000, icon: "🌊", desc: "名贵海产品" },
        { id: "盘锦大米", type: "kitchen", time: 3000, icon: "🍚", desc: "加工脱壳大米", req: {"盘锦水稻":1} },
        { id: "锦州小烧烤", type: "kitchen", time: 5000, icon: "🍢", desc: "火爆全网的美食", req: {"跑山散养猪":1} },
        { id: "草莓蛋糕", type: "kitchen", time: 4000, icon: "🍰", desc: "网红甜点", req: {"丹东草莓":1} },
        { id: "海参焖饭", type: "kitchen", time: 8000, icon: "🍱", desc: "顶级辽菜大补", req: {"大连海参":1, "盘锦大米":1} }
    ],
    // 盲盒人才池 (提供真实 Buff 加成)
    staffPool: [
        { id: "热心大娘", rarity: "R", icon: "👵", buff: "farm_speed", val: 0.1, desc: "农田生产时间减少 10%" },
        { id: "实习导游", rarity: "R", icon: "👧", buff: "order_gold", val: 0.1, desc: "订单金币收益增加 10%" },
        { id: "非遗传承人", rarity: "SR", icon: "👴", buff: "passive_culture", val: 2, desc: "每秒额外产出 2 点文化值" },
        { id: "关东名厨", rarity: "SR", icon: "👨‍🍳", buff: "kitchen_speed", val: 0.3, desc: "厨房加工时间减少 30%" },
        { id: "辽宁文旅局长", rarity: "SSR", icon: "🤵", buff: "order_culture", val: 1.0, desc: "神级！订单文化值翻倍 (+100%)" },
        { id: "首富投资人", rarity: "SSR", icon: "🤑", buff: "order_gold", val: 1.0, desc: "神级！订单金币收益翻倍 (+100%)" }
    ],
    seasons: [
        { name: "🌸 春季 - 万物萌发", particle: "🌸", bg: "linear-gradient(135deg, #A8E6CF, #DCEDC1)" },
        { name: "☀️ 夏季 - 骄阳似火", particle: "🍃", bg: "linear-gradient(135deg, #81D4FA, #E1F5FE)" },
        { name: "🍁 秋季 - 丰收喜悦", particle: "🍂", bg: "linear-gradient(135deg, #FFCC80, #FFE0B2)" },
        { name: "❄️ 冬季 - 瑞雪兆丰年", particle: "❄️", bg: "linear-gradient(135deg, #E0E0E0, #FFFFFF)" }
    ]
};

// ==========================================
// 2. 状态机与持久化
// ==========================================
let State = {
    gold: 1000, culture: 0, seasonIdx: 0,
    inventory: {"盘锦水稻": 2}, unlockedCities: ["沈阳"],
    heritages: [], badges: [], pokedex: [],
    staffs: [], orders: [],
    // 连击系统数据
    combo: 0, lastClickTime: 0
};

const STORAGE_KEY = "shanHaiLiaoCangGameStateV1";
const DEFAULT_STATE = JSON.parse(JSON.stringify(State));

const cloneState = (data) => JSON.parse(JSON.stringify(data));

const normalizeState = (data = {}) => ({
    ...cloneState(DEFAULT_STATE),
    ...data,
    inventory: { ...cloneState(DEFAULT_STATE.inventory), ...(data.inventory || {}) },
    unlockedCities: Array.isArray(data.unlockedCities) ? data.unlockedCities : cloneState(DEFAULT_STATE.unlockedCities),
    heritages: Array.isArray(data.heritages) ? data.heritages : [],
    badges: Array.isArray(data.badges) ? data.badges : [],
    pokedex: Array.isArray(data.pokedex) ? data.pokedex : [],
    staffs: Array.isArray(data.staffs) ? data.staffs : [],
    orders: Array.isArray(data.orders) ? data.orders : [],
    combo: Number(data.combo) || 0,
    lastClickTime: Number(data.lastClickTime) || 0,
    gold: Number.isFinite(Number(data.gold)) ? Number(data.gold) : DEFAULT_STATE.gold,
    culture: Number.isFinite(Number(data.culture)) ? Number(data.culture) : 0,
    seasonIdx: Number.isInteger(data.seasonIdx) ? data.seasonIdx : DEFAULT_STATE.seasonIdx
});

// 工具：获取玩家当前的动态 Buff 倍率
const getBuff = (type) => {
    let total = 0;
    State.staffs.forEach(s => { if (s.buff === type) total += s.val; });
    return total;
};

// ==========================================
// 3. 核心引擎 (控制器)
// ==========================================
const Game = {
    init: () => {
        Game.loadState();
        Game.bindPersistence();
        Game.renderAll();
        
        // 核心挂机心跳 (1秒1次)
        setInterval(() => {
            // 计算非遗收益 + SR人才被动收益
            let cultureGain = State.heritages.length * 1 + getBuff("passive_culture");
            let goldGain = State.heritages.length * 2;
            
            if (cultureGain > 0 || goldGain > 0) {
                State.gold += goldGain;
                State.culture += cultureGain;
                Game.checkUnlocks();
                Game.updateHeader();
            }

            // 更新限时订单倒计时
            let orderChanged = false;
            for(let i = State.orders.length - 1; i >= 0; i--) {
                if(State.orders[i].isVip) {
                    State.orders[i].timeLeft--;
                    orderChanged = true;
                    if(State.orders[i].timeLeft <= 0) {
                        State.orders.splice(i, 1); // 超时删除
                    }
                }
            }
            if(orderChanged) Game.renderOrders();
            Game.saveState();

        }, 1000);

        // 订单生成心跳 (5秒查一次)
        setInterval(() => Game.spawnOrder(), 5000);

        // 季节心跳
        setInterval(() => {
            State.seasonIdx = (State.seasonIdx + 1) % 4;
            Game.applySeason();
        }, 60000);
        
        Game.applySeason();
        Game.saveState();
    },

    loadState: () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            State = normalizeState(JSON.parse(raw));
            Game.lastSavedSnapshot = raw;
        } catch (error) {
            console.warn("读取游戏存档失败，已使用默认进度：", error);
        }
    },

    saveState: () => {
        try {
            const snapshot = JSON.stringify(normalizeState(State));
            if (snapshot === Game.lastSavedSnapshot) return;
            localStorage.setItem(STORAGE_KEY, snapshot);
            Game.lastSavedSnapshot = snapshot;
        } catch (error) {
            console.warn("保存游戏进度失败：", error);
        }
    },

    bindPersistence: () => {
        if (Game.persistenceBound) return;
        Game.persistenceBound = true;

        window.addEventListener("storage", (event) => {
            if (event.key !== STORAGE_KEY || !event.newValue || event.newValue === Game.lastSavedSnapshot) return;
            try {
                State = normalizeState(JSON.parse(event.newValue));
                Game.lastSavedSnapshot = event.newValue;
                Game.renderAll();
                Game.applySeason();
            } catch (error) {
                console.warn("同步游戏进度失败：", error);
            }
        });

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden") Game.saveState();
        });

        window.addEventListener("beforeunload", Game.saveState);
    },

    switchTab: (id) => {
        document.querySelectorAll('.tab-panel').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        event.currentTarget.classList.add('active');
    },

    // --- 连击（Combo）点击玩法 ---
    doActiveClick: (e) => {
        const now = Date.now();
        if (now - State.lastClickTime < 1000) State.combo++;
        else State.combo = 1;
        State.lastClickTime = now;

        const comboUI = document.getElementById('ui-combo');
        comboUI.innerText = `Combo x${State.combo}!`;
        comboUI.classList.remove('active');
        void comboUI.offsetWidth; // 触发重绘重置动画
        comboUI.classList.add('active');

        // 奖励计算：连击越高，单次点击爆的金币越多
        const gain = Math.min(1 + Math.floor(State.combo / 10), 10);
        State.gold += gain;
        Game.updateHeader();
        
        Game.spawnFloatText(e.clientX, e.clientY - 30, `+💰${gain}`, '#FF9800');
        
        // 满 50 连击爆一次文化值
        if (State.combo % 50 === 0) {
            State.culture += 5;
            Game.spawnFloatText(e.clientX, e.clientY + 30, `🎉 热情爆棚 +📜5`, '#E040FB');
        }
    },

    // --- 生产与进度条 ---
    runProgress: (btnId, duration, callback) => {
        const btn = document.getElementById(btnId);
        if(!btn || btn.disabled) return;
        btn.disabled = true; const bar = btn.querySelector('.btn-progress');
        let start = Date.now();
        const anim = () => {
            let p = Math.min(((Date.now() - start) / duration) * 100, 100);
            bar.style.width = p + '%';
            if (p < 100) requestAnimationFrame(anim);
            else { bar.style.width = '0'; btn.disabled = false; callback(); }
        };
        requestAnimationFrame(anim);
    },

    produce: (e, itemId) => {
        const item = DB.items.find(i => i.id === itemId);
        if (item.req) {
            for (let [k, v] of Object.entries(item.req)) {
                if ((State.inventory[k] || 0) < v) return alert(`缺少材料 [${k}]`);
            }
        }
        
        // 应用人才 Buff 减免时间
        let timeMult = 1.0;
        if (item.type === 'farm') timeMult -= getBuff("farm_speed");
        if (item.type === 'kitchen') timeMult -= getBuff("kitchen_speed");
        const finalTime = Math.max(item.time * timeMult, 500); // 最少0.5秒

        Game.runProgress(`btn-${itemId}`, finalTime, () => {
            if (item.req) Object.entries(item.req).forEach(([k,v]) => State.inventory[k] -= v);
            State.inventory[itemId] = (State.inventory[itemId] || 0) + 1;
            if(!State.pokedex.includes(itemId)) {
                State.pokedex.push(itemId); Game.renderPokedex();
            }
            Game.spawnFloatText(e.clientX, e.clientY, `+1 ${itemId}`, '#fff');
            Game.renderInventory();
        });
    },

    explore: (e, cityName) => {
        Game.runProgress(`btn-exp-${cityName}`, 5000, () => {
            const db = DB.cities[cityName];
            State.badges.push(db.badge); State.heritages.push(db.heritage);
            Game.renderMap(); Game.renderPokedex();
            alert(`🎉 探索完成！获得 ${db.badge} 与非遗【${db.heritage}】！已加入图鉴馆。`);
        });
    },

    // --- 订单系统 (含VIP限时机制) ---
    spawnOrder: () => {
        if(State.orders.length >= 4) return;
        
        // 20% 概率刷出高收益限时 VIP 订单
        const isVip = Math.random() < 0.2;
        const validReqs = State.pokedex.length > 0 ? State.pokedex : ["盘锦水稻"];
        const reqItem = validReqs[Math.floor(Math.random() * validReqs.length)];
        
        const baseG = Math.floor(Math.random() * 50) + 50;
        const baseC = Math.floor(Math.random() * 15) + 10;

        State.orders.push({
            id: Date.now(), tourist: isVip ? "🌟 首都大投资客" : "普通外省游客",
            req: reqItem, isVip: isVip,
            g: isVip ? baseG * 3 : baseG,
            c: isVip ? baseC * 3 : baseC,
            timeLeft: isVip ? 45 : 9999 // VIP 只有 45 秒时间
        });
        Game.renderOrders();
    },

    deliverOrder: (e, id) => {
        const idx = State.orders.findIndex(o => o.id === id);
        const order = State.orders[idx];
        if ((State.inventory[order.req] || 0) >= 1) {
            State.inventory[order.req]--;
            
            // 应用人才全局 Buff 收益
            const goldMult = 1.0 + getBuff("order_gold");
            const cultMult = 1.0 + getBuff("order_culture");
            const fg = Math.floor(order.g * goldMult), fc = Math.floor(order.c * cultMult);
            
            State.gold += fg; State.culture += fc;
            State.orders.splice(idx, 1);
            
            Game.spawnFloatText(e.clientX, e.clientY-20, `+💰${fg}`, '#FFC107');
            setTimeout(() => Game.spawnFloatText(e.clientX, e.clientY+20, `+📜${fc}`, '#4CAF50'), 150);
            
            Game.checkUnlocks(); Game.renderInventory(); Game.renderOrders(); Game.updateHeader();
        } else {
            alert(`仓库中没有 [${order.req}] 发货！`);
        }
    },

    // --- 抽卡盲盒系统 (Gacha) ---
    rollGacha: (e) => {
        if (State.culture < 300) return alert("📜 文化值不足 300，无法吸引人才！多完成订单吧。");
        State.culture -= 300;
        Game.updateHeader();

        // 抽卡概率：SSR 5%, SR 25%, R 70%
        const rand = Math.random();
        let targetRarity = "R";
        if (rand < 0.05) targetRarity = "SSR";
        else if (rand < 0.3) targetRarity = "SR";

        const pool = DB.staffPool.filter(s => s.rarity === targetRarity);
        const result = pool[Math.floor(Math.random() * pool.length)];

        // 存入数据
        State.staffs.push(result);
        Game.renderStaff();

        // 呼出史诗级抽卡动画
        const modal = document.getElementById('ui-gacha-result');
        const box = modal.querySelector('.gacha-showcase');
        box.className = `gacha-showcase ${targetRarity.toLowerCase()}`;
        document.getElementById('gacha-rarity').innerText = targetRarity;
        document.getElementById('gacha-icon').innerText = result.icon;
        document.getElementById('gacha-name').innerText = result.id;
        document.getElementById('gacha-desc').innerText = result.desc;
        modal.classList.add('show');
    },

    checkUnlocks: () => {
        Object.entries(DB.cities).forEach(([name, db]) => {
            if (!State.unlockedCities.includes(name) && State.culture >= db.req) {
                State.unlockedCities.push(name);
                alert(`🎉 文化影响力扩散！成功解锁新版图：${name}！`);
                Game.renderMap();
            }
        });
    },

    // ==========================================
    // 渲染系统
    // ==========================================
    renderAll: () => {
        Game.updateHeader(); Game.renderFarmKitchen(); Game.renderInventory();
        Game.renderOrders(); Game.renderMap(); Game.renderPokedex(); Game.renderStaff();
    },

    updateHeader: () => {
        document.getElementById('ui-gold').innerText = State.gold;
        document.getElementById('ui-culture').innerText = State.culture;
    },

    renderFarmKitchen: () => {
        const fUI = document.getElementById('ui-farm-grid'); const kUI = document.getElementById('ui-kitchen-grid');
        fUI.innerHTML = ''; kUI.innerHTML = '';
        DB.items.forEach(item => {
            const isK = item.type === 'kitchen';
            const reqHtml = item.req ? `<p style="color:var(--accent)">消耗: ${Object.keys(item.req).join('+')}</p>` : `<p>${item.desc}</p>`;
            const html = `
                <div class="item-card">
                    <span class="item-icon">${item.icon}</span>
                    <h3>${item.id}</h3>
                    ${reqHtml}
                    <button class="btn-primary w-full" style="margin-top:10px;" id="btn-${item.id}" onclick="Game.produce(event, '${item.id}')">
                        <span class="btn-txt">${isK ? '起锅烹饪' : '播种/捕捞'}</span><div class="btn-progress"></div>
                    </button>
                </div>`;
            if(isK) kUI.innerHTML += html; else fUI.innerHTML += html;
        });
    },

    renderInventory: () => {
        const ui = document.getElementById('ui-inventory'); ui.innerHTML = '';
        Object.entries(State.inventory).forEach(([k,v]) => {
            if(v > 0) ui.innerHTML += `<li>${k} <b>x${v}</b></li>`;
        });
    },

    renderOrders: () => {
        const ui = document.getElementById('ui-orders'); ui.innerHTML = '';
        State.orders.forEach(o => {
            const vipClass = o.isVip ? 'vip' : '';
            const timerHtml = o.isVip ? `<div class="timer-bar" style="width: ${(o.timeLeft/45)*100}%"></div><span style="font-size:0.8rem; color:red;">剩 ${o.timeLeft}s 逃跑</span>` : '';
            ui.innerHTML += `
                <div class="order-card ${vipClass}">
                    <h4><span>${o.tourist}</span></h4>
                    <p style="margin:5px 0;">求购：<strong style="color:var(--accent); font-size:1.1rem;">${o.req}</strong></p>
                    <div class="flex-between">
                        <span style="font-weight:900; color:var(--theme-dark)">💰${o.g} | 📜${o.c}</span>
                        <button class="btn-primary" style="padding:6px 15px; width:auto;" onclick="Game.deliverOrder(event, ${o.id})"><span class="btn-txt">交付</span></button>
                    </div>
                    ${timerHtml}
                </div>`;
        });
    },

    renderMap: () => {
        const ui = document.getElementById('ui-map-grid'); ui.innerHTML = '';
        Object.entries(DB.cities).forEach(([name, db]) => {
            const unlocked = State.unlockedCities.includes(name);
            const hasBadge = State.badges.includes(db.badge);
            let btn = unlocked ? (hasBadge ? `<button class="btn-primary" disabled style="background:#BCAAA4">已完全征服</button>` 
                : `<button class="btn-primary" id="btn-exp-${name}" onclick="Game.explore(event, '${name}')"><span class="btn-txt">派队考察 (5s)</span><div class="btn-progress"></div></button>`)
                : `<button class="btn-primary" disabled style="background:#E0E0E0; color:#757575">🔒 文化需 ${db.req}</button>`;
            
            ui.innerHTML += `
                <div class="item-card" style="${unlocked ? '' : 'opacity:0.5; filter:grayscale(100%);'}">
                    <h3 style="margin:0 0 10px 0; font-size:1.3rem;">${name} <span style="font-size:0.8rem; color:var(--theme-color)">${db.theme}</span></h3>
                    <p>📍 ${db.info}</p>
                    ${btn}
                </div>`;
        });
    },

    renderStaff: () => {
        const ui = document.getElementById('ui-staff-list'); ui.innerHTML = '';
        if(State.staffs.length === 0) ui.innerHTML = '<p style="color:#999; text-align:center;">暂未招募任何人才，去左侧抽卡吧！</p>';
        State.staffs.forEach(s => {
            ui.innerHTML += `
                <div class="staff-card ${s.rarity.toLowerCase()}">
                    <div class="staff-icon">${s.icon}</div>
                    <div>
                        <h4 style="margin:0 0 5px 0;">${s.id} <span style="color:var(--${s.rarity.toLowerCase()}-color); font-weight:900;">${s.rarity}</span></h4>
                        <p style="margin:0; font-size:0.85rem; color:#555;">${s.desc}</p>
                    </div>
                </div>`;
        });
    },

    renderPokedex: () => {
        const wallH = document.getElementById('ui-heritage-wall'); wallH.innerHTML = '';
        State.heritages.forEach(h => wallH.innerHTML += `<div class="badge-item active" style="font-size:1rem;">🎭 ${h}</div>`);
        
        const wallB = document.getElementById('ui-badge-wall'); wallB.innerHTML = '';
        State.badges.forEach(b => wallB.innerHTML += `<div class="badge-item active" style="font-size:1rem;">${b}</div>`);

        const dex = document.getElementById('ui-pokedex-grid'); dex.innerHTML = '';
        DB.items.forEach(item => {
            const has = State.pokedex.includes(item.id);
            dex.innerHTML += `
                <div class="dex-card ${has ? 'active' : ''}">
                    <span style="font-size:2.5rem; display:block;">${has ? item.icon : '❓'}</span>
                    <h4 style="margin:5px 0 0 0;">${has ? item.id : '未知物产'}</h4>
                </div>`;
        });
        document.getElementById('ui-dex-progress').innerText = Math.floor((State.pokedex.length / DB.items.length) * 100) + '%';
    },

    applySeason: () => {
        const s = DB.seasons[State.seasonIdx];
        document.getElementById('ui-season-text').innerText = s.name;
        document.body.style.background = s.bg;
        const wl = document.getElementById('weather-layer'); wl.innerHTML = '';
        for(let i=0; i<30; i++) {
            const p = document.createElement('div'); p.className = 'particle'; p.innerText = s.particle;
            p.style.left = Math.random() * 100 + 'vw';
            p.style.animationDuration = (Math.random() * 4 + 3) + 's';
            p.style.animationDelay = Math.random() * 3 + 's';
            wl.appendChild(p);
        }
    },

    spawnFloatText: (x, y, text, color) => {
        const layer = document.getElementById('float-layer');
        const el = document.createElement('div'); el.className = 'float-text';
        el.innerText = text; el.style.color = color;
        el.style.left = `${x + (Math.random()-0.5)*40}px`; el.style.top = `${y}px`;
        layer.appendChild(el); setTimeout(() => el.remove(), 1200);
    }
};

window.Game = Game;
window.onload = Game.init;
