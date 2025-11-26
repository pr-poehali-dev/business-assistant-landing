import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 py-32 md:py-48">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-10 animate-fade-in">
              <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
                <div className="w-2 h-2 bg-gold rounded-full animate-glow"></div>
                <span className="text-gold text-sm font-semibold tracking-wider uppercase">Premium Digital Assistant</span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-8xl font-bold text-foreground leading-[1.05]">
                Бизнес-Ассистент{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold glow-text">
                  24/7
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 max-w-xl leading-relaxed">
                Премиальная цифровая услуга для автоматизации бизнеса. Работает круглосуточно, экономит время, увеличивает прибыль
              </p>
              
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="text-xl px-14 py-9 rounded-[20px] font-bold bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold transition-all hover:scale-105 glow-gold text-black"
                >
                  Получить доступ — 490 ₽
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 to-gold/30 rounded-full blur-[80px] animate-glow"></div>
              <img
                src="https://cdn.poehali.dev/projects/7b3d0ec5-98d0-4c51-a99d-434fef4a779f/files/f08c7f0b-d57f-4e33-a8d2-d83c0d9b656f.jpg"
                alt="AI Ассистент 3D"
                className="relative w-full rounded-[30px] animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-32 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8">
              Преимущества
            </h2>
            <p className="text-foreground/60 text-2xl max-w-2xl mx-auto">
              Всё необходимое для премиального управления бизнесом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Sparkles",
                title: "Персональные сценарии",
                description: "Умные шаблоны ответов для каждого клиента"
              },
              {
                icon: "TrendingUp",
                title: "Рост продаж",
                description: "Автоматизация воронки и создание контента"
              },
              {
                icon: "Settings2",
                title: "Умная автоматизация",
                description: "Избавление от рутинных операций"
              },
              {
                icon: "Zap",
                title: "24/7 доступность",
                description: "Работает без выходных и праздников"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="glass-card glass-card-hover text-center border-0 animate-fade-in rounded-[20px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-16 pb-12 px-8">
                  <div className="mx-auto w-24 h-24 glass-card rounded-[24px] flex items-center justify-center mb-10 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-[24px]"></div>
                    <Icon name={feature.icon} className="text-gold relative z-10" size={44} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-5 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-32 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8">
              Как это работает
            </h2>
            <p className="text-foreground/60 text-2xl">
              Три простых шага до автоматизации
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-[15%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  step: "1",
                  icon: "CreditCard",
                  title: "Оформляете доступ",
                  description: "Мгновенная активация после оплаты. Простая регистрация за 30 секунд"
                },
                {
                  step: "2",
                  icon: "Settings",
                  title: "Настраиваете ассистента",
                  description: "Интуитивная настройка под ваши задачи без технических знаний"
                },
                {
                  step: "3",
                  icon: "Rocket",
                  title: "Получаете результат",
                  description: "Ассистент работает 24/7 и автоматизирует ваш бизнес"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="relative text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-10 relative z-10">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full glass-card relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Icon name={step.icon} className="text-gold relative z-10" size={56} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center font-heading text-2xl font-bold glow-gold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-3xl font-bold mb-6 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-xl leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8">
              Премиальный тариф
            </h2>
            <p className="text-foreground/60 text-2xl">
              Честное ценообразование без скрытых платежей
            </p>
          </div>

          <Card className="glass-card border-0 animate-scale-in overflow-hidden rounded-[24px] shadow-2xl">
            <div className="relative p-14 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gold/10 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="font-heading text-4xl font-bold mb-4 text-foreground">
                  Бизнес-Ассистент 24/7
                </h3>
                <p className="text-gold text-lg mb-8 font-medium">PREMIUM EDITION</p>
                
                <div className="flex items-baseline justify-center gap-3">
                  <span className="font-heading text-8xl font-bold text-gold glow-text">490 ₽</span>
                  <span className="text-3xl text-foreground/60">/месяц</span>
                </div>
              </div>
            </div>
            
            <CardContent className="p-14">
              <div className="space-y-6 mb-12">
                {[
                  "Персональные AI-сценарии для клиентов",
                  "Автоматизация продаж и маркетинга",
                  "Умные бизнес-процессы",
                  "Круглосуточная работа без выходных",
                  "Приоритетная техподдержка 24/7",
                  "Готовые премиум-шаблоны",
                  "Регулярные обновления и улучшения"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full glass-card flex items-center justify-center mt-1 group-hover:bg-gold/20 transition-colors">
                      <Icon name="Check" className="text-gold" size={18} strokeWidth={3} />
                    </div>
                    <span className="text-foreground/90 text-xl leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full text-2xl py-10 rounded-[20px] font-bold bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold transition-all hover:scale-105 glow-gold text-black"
              >
                Оплатить сейчас
              </Button>
              
              <div className="flex items-center justify-center gap-10 mt-10 text-sm text-foreground/50">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={20} className="text-gold" />
                  <span>Защищённая оплата</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Lock" size={20} className="text-gold" />
                  <span>Шифрование данных</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8">
              Частые вопросы
            </h2>
            <p className="text-foreground/60 text-2xl">
              Ответы на популярные вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="animate-fade-in space-y-6">
            {[
              {
                q: "Как быстро можно начать работу?",
                a: "Сразу после оплаты! Регистрация занимает 30 секунд, и вы моментально получаете полный доступ к ассистенту. Настройка под ваши задачи займёт не более 5 минут."
              },
              {
                q: "Что именно делает бизнес-ассистент?",
                a: "Ассистент помогает автоматизировать рутинные задачи: отвечает клиентам, создаёт контент для продаж, помогает с бизнес-процессами. Работает круглосуточно без выходных и отпусков."
              },
              {
                q: "Нужны ли технические знания?",
                a: "Нет! Интерфейс максимально простой и понятный. Все настройки делаются в несколько кликов. Даже если вы никогда не работали с подобными системами — разберётесь за 5 минут."
              },
              {
                q: "Можно ли отменить подписку?",
                a: "Да, конечно. Подписку можно отменить в любой момент в личном кабинете. Никаких штрафов или скрытых комиссий. Доступ будет работать до конца оплаченного периода."
              },
              {
                q: "Безопасно ли передавать данные?",
                a: "Абсолютно безопасно. Мы используем шифрование на уровне банков, все данные хранятся на защищённых серверах. Соответствуем международным стандартам безопасности."
              }
            ].map((item, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`} 
                className="glass-card border-0 rounded-[20px] px-10 group hover:border-gold/30"
              >
                <AccordionTrigger className="text-2xl font-heading hover:no-underline py-10 text-foreground group-hover:text-gold transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-xl leading-relaxed pb-10">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="relative px-4 py-20 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <h3 className="font-heading text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">
                Бизнес-Ассистент 24/7
              </h3>
              <p className="text-foreground/60 text-xl mb-8 max-w-md leading-relaxed">
                Премиальный цифровой помощник для автоматизации бизнеса нового поколения
              </p>
              <div className="flex items-center gap-4 text-foreground/70">
                <Icon name="Mail" size={24} className="text-gold" />
                <a href="mailto:support@bizassist.ru" className="text-xl hover:text-gold transition">
                  support@bizassist.ru
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xl mb-6 text-foreground">Документы</h4>
              <ul className="space-y-4 text-foreground/60 text-lg">
                <li><a href="#" className="hover:text-gold transition">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-gold transition">Публичная оферта</a></li>
                <li><a href="#" className="hover:text-gold transition">Условия использования</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xl mb-6 text-foreground">Соцсети</h4>
              <div className="flex gap-5">
                {['Send', 'MessageCircle', 'Youtube'].map((icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-14 h-14 rounded-full glass-card hover:bg-gold/20 flex items-center justify-center transition group"
                  >
                    <Icon name={icon} size={24} className="text-gold" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 text-center text-foreground/40 text-lg">
            <p>&copy; 2024 Бизнес-Ассистент 24/7. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
