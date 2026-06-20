import Icon from '@/components/ui/icon';

const TABLE_IMG = 'https://cdn.poehali.dev/projects/c3c3aa88-ed22-4382-b6fd-25d6ff0fb5fd/files/bb5f4e0f-e30a-4bd1-89a0-d88087d7a183.jpg';

const SALE_DATE = new Date('2025-03-14');
const WARRANTY_MONTHS = 60;

const warrantyEnd = new Date(SALE_DATE);
warrantyEnd.setMonth(warrantyEnd.getMonth() + WARRANTY_MONTHS);
const today = new Date('2026-06-21');
const daysLeft = Math.max(0, Math.ceil((warrantyEnd.getTime() - today.getTime()) / 86400000));
const totalDays = Math.ceil((warrantyEnd.getTime() - SALE_DATE.getTime()) / 86400000);
const progress = Math.round((daysLeft / totalDays) * 100);

const fmt = (d: Date) => d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });

const cloth = [
  { label: 'Производитель', value: 'Iwan Simonis' },
  { label: 'Модель', value: 'Simonis 860' },
  { label: 'Состав', value: '70% шерсть / 30% нейлон' },
  { label: 'Плотность', value: '395 г/м²' },
  { label: 'Цвет', value: 'Тёмно-зелёный' },
  { label: 'Скорость', value: 'Профессиональная' },
];

const slate = [
  { label: 'Материал', value: 'Итальянский сланец' },
  { label: 'Толщина', value: '45 мм' },
  { label: 'Количество секций', value: '3 плиты' },
  { label: 'Шлифовка', value: 'Прецизионная, ±0,1 мм' },
  { label: 'Поставщик', value: 'Carrara Slate' },
  { label: 'Вес комплекта', value: '480 кг' },
];

const finishes = [
  { name: 'Венге', hex: '#3b2417' },
  { name: 'Тёмный орех', hex: '#5a3825' },
  { name: 'Махагон', hex: '#6e2a1c' },
  { name: 'Чёрный рояль', hex: '#1a1614' },
  { name: 'Дуб коньяк', hex: '#7a5230' },
  { name: 'Золотой дуб', hex: '#a9743a' },
];

const products = [
  { name: 'Комплект киёв «Премиум»', price: '34 900 ₽', icon: 'Wand2' },
  { name: 'Шары Aramith Tournament', price: '28 500 ₽', icon: 'Circle' },
  { name: 'Светильник над столом', price: '19 800 ₽', icon: 'Lightbulb' },
  { name: 'Защитное покрывало', price: '6 400 ₽', icon: 'Shield' },
  { name: 'Подставка под кии', price: '12 300 ₽', icon: 'Grip' },
  { name: 'Набор по уходу за сукном', price: '4 900 ₽', icon: 'Sparkles' },
];

function Spec({ title, icon, rows }: { title: string; icon: string; rows: { label: string; value: string }[] }) {
  return (
    <div className="border border-gold/30 bg-white/60 p-8 print-break">
      <div className="flex items-center gap-3 mb-6">
        <Icon name={icon} size={22} className="text-gold-dark" />
        <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
      </div>
      <dl className="space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="flex justify-between items-baseline border-b border-gold/15 pb-2">
            <dt className="text-sm text-foreground/55 tracking-wide">{r.label}</dt>
            <dd className="text-sm font-medium text-ink text-right">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background paper-texture text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-14">

        <header className="text-center animate-fade-up" style={{ animationDelay: '0ms' }}>
          <p className="text-xs tracking-[0.4em] uppercase text-gold-dark mb-4">Бильярдная мануфактура</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gold-gradient animate-shimmer leading-tight">
            Фабрика Старт
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-16 gold-line" />
            <span className="font-display italic text-xl text-ink">Сертификат качества</span>
            <span className="h-px w-16 gold-line" />
          </div>
        </header>

        <section className="mt-14 grid md:grid-cols-2 gap-10 items-center animate-fade-up" style={{ animationDelay: '120ms' }}>
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/40" />
            <img src={TABLE_IMG} alt="Бильярдный стол" className="relative w-full object-cover aspect-[4/3] shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 bg-ink text-background px-5 py-3 shadow-xl no-print">
              <p className="text-[10px] tracking-widest uppercase text-gold-light">Проверка пройдена</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-semibold text-ink">Магнат Люкс 12ft</h2>
            <p className="text-foreground/60 mt-2 mb-8 font-display italic text-lg">Профессиональная серия · Русская пирамида</p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Icon name="Hash" size={20} className="text-gold-dark mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/45">Серийный номер</p>
                  <p className="text-lg font-medium text-ink">ST-2025-008417</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Calendar" size={20} className="text-gold-dark mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/45">Дата продажи</p>
                  <p className="text-lg font-medium text-ink">{fmt(SALE_DATE)}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="ShieldCheck" size={20} className="text-gold-dark mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/45">Гарантийный срок</p>
                  <p className="text-lg font-medium text-ink">5 лет · до {fmt(warrantyEnd)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-ink text-background p-10 print-break animate-fade-up" style={{ animationDelay: '240ms' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-light mb-2">Гарантия активна</p>
              <p className="font-display text-6xl font-bold text-gold-gradient animate-shimmer">{daysLeft.toLocaleString('ru-RU')}</p>
              <p className="text-background/60 mt-1">дней до окончания гарантии</p>
            </div>
            <div className="flex-1 max-w-md w-full">
              <div className="flex justify-between text-xs text-background/50 mb-2">
                <span>{fmt(SALE_DATE)}</span>
                <span>{fmt(warrantyEnd)}</span>
              </div>
              <div className="h-2 bg-background/15 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-right text-xs text-gold-light mt-2">{progress}% срока осталось</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '360ms' }}>
          <Spec title="Параметры сукна" icon="Layers" rows={cloth} />
          <Spec title="Параметры плит" icon="Box" rows={slate} />
        </section>

        <section className="mt-12 border border-gold/30 bg-white/60 p-8 print-break animate-fade-up" style={{ animationDelay: '420ms' }}>
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Palette" size={22} className="text-gold-dark" />
            <h3 className="font-display text-2xl font-semibold text-ink">Варианты выкраски и отделки</h3>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
            {finishes.map((f) => (
              <div key={f.name} className="text-center">
                <div className="aspect-square w-full mx-auto border border-gold/30 shadow-inner" style={{ backgroundColor: f.hex }} />
                <p className="text-xs mt-2 text-foreground/70">{f.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 print-break animate-fade-up" style={{ animationDelay: '480ms' }}>
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-dark mb-2">Рекомендуем</p>
            <h3 className="font-display text-3xl font-semibold text-ink">Дополнительные товары</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <div key={p.name} className="group border border-gold/30 bg-white/60 p-6 flex items-center gap-4 transition-all hover:border-gold hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center bg-ink/5 border border-gold/20 shrink-0">
                  <Icon name={p.icon} size={22} className="text-gold-dark" />
                </div>
                <div>
                  <p className="font-medium text-ink leading-tight">{p.name}</p>
                  <p className="text-gold-dark font-semibold mt-1">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 pt-10 border-t border-gold/30 text-center animate-fade-up" style={{ animationDelay: '540ms' }}>
          <h4 className="font-display text-2xl font-semibold text-gold-gradient">Фабрика Старт</h4>
          <p className="text-foreground/60 mt-3 text-sm">Производство бильярдных столов премиум-класса с 1998 года</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-5 text-sm text-foreground/70">
            <span className="flex items-center gap-2"><Icon name="Phone" size={16} className="text-gold-dark" /> 8 800 555-35-35</span>
            <span className="flex items-center gap-2"><Icon name="Mail" size={16} className="text-gold-dark" /> info@fabrika-start.ru</span>
            <span className="flex items-center gap-2"><Icon name="MapPin" size={16} className="text-gold-dark" /> Москва, ул. Бильярдная, 1</span>
          </div>
        </footer>

        <div className="mt-12 text-center no-print">
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-ink text-background px-8 py-4 hover:bg-gold-dark transition-colors tracking-widest uppercase text-sm">
            <Icon name="Printer" size={18} /> Распечатать сертификат
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
