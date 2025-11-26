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
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden px-4 py-24 md:py-40">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Работает 24/7</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Icon name="TrendingUp" size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Поддержка бизнеса</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Icon name="Zap" size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Мгновенная оплата</span>
                </div>
              </div>
              
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-[1.1]">
                Бизнес-Ассистент 24/7 для автоматизации задач
              </h1>
              <p className="text-xl md:text-2xl text-[#6A6A6A] max-w-xl leading-relaxed">
                Цифровая услуга, которая помогает предпринимателям экономить время и увеличивать прибыль
              </p>
              <div className="pt-4">
                <Button size="lg" className="text-xl px-12 py-8 rounded-[20px] font-semibold transition-all hover:scale-105 hover:shadow-2xl">
                  Оформить доступ — 490 ₽
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/7b3d0ec5-98d0-4c51-a99d-434fef4a779f/files/4c119b47-1bdc-471c-88a4-e66e6d699a24.jpg"
                alt="AI Ассистент"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Что входит в сервис
            </h2>
            <p className="text-[#6A6A6A] text-xl max-w-2xl mx-auto">
              Всё необходимое для эффективного управления бизнесом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "MessageSquare",
                title: "Персональные сценарии ответов",
                description: "Готовые шаблоны для общения с клиентами"
              },
              {
                icon: "ShoppingCart",
                title: "Помощь в продажах",
                description: "Создание контента и автоматизация воронки продаж"
              },
              {
                icon: "Settings",
                title: "Автоматизация процессов",
                description: "Избавьтесь от рутинных операций"
              },
              {
                icon: "Clock",
                title: "Работает без выходных",
                description: "Ассистент доступен 24/7 в любое время"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 animate-fade-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-16 pb-12 px-8">
                  <div className="mx-auto w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8">
                    <Icon name={feature.icon} className="text-primary" size={40} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#6A6A6A] text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Как это работает
            </h2>
            <p className="text-[#6A6A6A] text-xl max-w-2xl mx-auto">
              Три простых шага до автоматизации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                step: "1",
                title: "Вы оформляете доступ",
                description: "Быстрая регистрация и мгновенная активация аккаунта за 490 ₽"
              },
              {
                step: "2",
                title: "Подключаете ассистента",
                description: "Настраиваете под свои задачи без технических знаний"
              },
              {
                step: "3",
                title: "Получаете помощь 24/7",
                description: "Ассистент работает круглосуточно и экономит ваше время"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-8">
                  <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary text-white font-heading text-5xl font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-3xl font-bold mb-5">
                  {step.title}
                </h3>
                <p className="text-[#6A6A6A] text-xl leading-relaxed">
                  {step.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Тариф
            </h2>
            <p className="text-[#6A6A6A] text-xl">
              Простое и честное ценообразование
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-2xl border-0 animate-scale-in overflow-hidden">
            <div className="bg-gradient-to-br from-primary to-primary/80 p-8 text-white text-center">
              <h3 className="font-heading text-3xl font-bold mb-2">
                Бизнес-Ассистент 24/7
              </h3>
              <div className="flex items-baseline justify-center gap-2 mt-6">
                <span className="font-heading text-7xl font-bold">490 ₽</span>
                <span className="text-2xl opacity-90">/месяц</span>
              </div>
            </div>
            
            <CardContent className="p-12">
              <div className="space-y-5 mb-10">
                {[
                  "Персональные сценарии для клиентов",
                  "Помощь в продажах и контенте",
                  "Автоматизация бизнес-процессов",
                  "Круглосуточная работа без выходных",
                  "Техподдержка и обновления",
                  "Готовые шаблоны и инструкции"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon name="Check" className="text-primary" size={18} />
                    </div>
                    <span className="text-foreground text-lg leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full text-xl py-8 rounded-[18px] font-bold transition-all hover:scale-105 hover:shadow-2xl">
                Оплатить
              </Button>
              
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-[#6A6A6A]">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Lock" size={16} className="text-primary" />
                  <span>Защита данных</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Частые вопросы
            </h2>
            <p className="text-[#6A6A6A] text-xl">
              Ответы на популярные вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="animate-fade-in space-y-4">
            <AccordionItem value="item-1" className="border-0 bg-card rounded-[18px] px-8 shadow-lg">
              <AccordionTrigger className="text-xl font-heading hover:no-underline py-8">
                Как быстро можно начать работу с ассистентом?
              </AccordionTrigger>
              <AccordionContent className="text-[#6A6A6A] text-lg leading-relaxed pb-8">
                Сразу после оплаты! Регистрация занимает 30 секунд, и вы моментально получаете полный доступ к ассистенту. Настройка под ваши задачи займёт не более 5 минут.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-0 bg-card rounded-[18px] px-8 shadow-lg">
              <AccordionTrigger className="text-xl font-heading hover:no-underline py-8">
                Что именно делает бизнес-ассистент?
              </AccordionTrigger>
              <AccordionContent className="text-[#6A6A6A] text-lg leading-relaxed pb-8">
                Ассистент помогает автоматизировать рутинные задачи: отвечает клиентам, создаёт контент для продаж, помогает с бизнес-процессами. Работает круглосуточно без выходных и отпусков.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-0 bg-card rounded-[18px] px-8 shadow-lg">
              <AccordionTrigger className="text-xl font-heading hover:no-underline py-8">
                Нужны ли технические знания для работы?
              </AccordionTrigger>
              <AccordionContent className="text-[#6A6A6A] text-lg leading-relaxed pb-8">
                Нет! Интерфейс максимально простой и понятный. Все настройки делаются в несколько кликов. Даже если вы никогда не работали с подобными системами — разберётесь за 5 минут.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-0 bg-card rounded-[18px] px-8 shadow-lg">
              <AccordionTrigger className="text-xl font-heading hover:no-underline py-8">
                Можно ли отменить подписку?
              </AccordionTrigger>
              <AccordionContent className="text-[#6A6A6A] text-lg leading-relaxed pb-8">
                Да, конечно. Подписку можно отменить в любой момент в личном кабинете. Никаких штрафов или скрытых комиссий. Доступ будет работать до конца оплаченного периода.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-0 bg-card rounded-[18px] px-8 shadow-lg">
              <AccordionTrigger className="text-xl font-heading hover:no-underline py-8">
                Безопасно ли передавать данные о бизнесе?
              </AccordionTrigger>
              <AccordionContent className="text-[#6A6A6A] text-lg leading-relaxed pb-8">
                Абсолютно безопасно. Мы используем шифрование на уровне банков, все данные хранятся на защищённых серверах. Соответствуем международным стандартам безопасности.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-0 bg-card rounded-[18px] px-8 shadow-lg">
              <AccordionTrigger className="text-xl font-heading hover:no-underline py-8">
                Какие способы оплаты доступны?
              </AccordionTrigger>
              <AccordionContent className="text-[#6A6A6A] text-lg leading-relaxed pb-8">
                Принимаем банковские карты (Visa, Mastercard, МИР), электронные кошельки и банковские переводы. Оплата обрабатывается мгновенно, доступ открывается автоматически.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border-0 bg-card rounded-[18px] px-8 shadow-lg">
              <AccordionTrigger className="text-xl font-heading hover:no-underline py-8">
                Есть ли техподдержка?
              </AccordionTrigger>
              <AccordionContent className="text-[#6A6A6A] text-lg leading-relaxed pb-8">
                Да! Наша поддержка работает 24/7 и всегда готова помочь. Ответим на вопросы в течение 15 минут через чат, email или телефон. Также есть подробная база знаний и видео-инструкции.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-[#1E1E1E] text-white px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-heading text-3xl font-bold mb-4">
                Бизнес-Ассистент 24/7
              </h3>
              <p className="text-white/70 text-lg mb-6 max-w-md">
                Умный цифровой помощник для автоматизации бизнеса и увеличения прибыли
              </p>
              <div className="flex items-center gap-3 text-white/70">
                <Icon name="Mail" size={20} />
                <a href="mailto:support@bizassist.ru" className="hover:text-white transition">
                  support@bizassist.ru
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Информация</h4>
              <ul className="space-y-3 text-white/70 text-lg">
                <li><a href="#" className="hover:text-white transition">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition">Публичная оферта</a></li>
                <li><a href="#" className="hover:text-white transition">Условия использования</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-lg">
            <p>&copy; 2024 Бизнес-Ассистент 24/7. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
