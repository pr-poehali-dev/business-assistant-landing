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
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Бизнес-Ассистент 24/7
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Ваш персональный помощник для автоматизации бизнес-процессов, аналитики и управления задачами. Работает круглосуточно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6 transition-transform hover:scale-105">
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 transition-transform hover:scale-105">
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/7b3d0ec5-98d0-4c51-a99d-434fef4a779f/files/593b3508-a0f4-4add-a3c2-667cfd7998b2.jpg"
                alt="Бизнес-Ассистент"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Умные решения для современного бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Zap",
                title: "Быстрая интеграция",
                description: "Подключение за 5 минут без программирования"
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Защита данных на уровне банковских систем"
              },
              {
                icon: "TrendingUp",
                title: "Аналитика",
                description: "Подробные отчёты и прогнозирование"
              },
              {
                icon: "HeadphonesIcon",
                title: "Поддержка 24/7",
                description: "Всегда на связи для решения любых вопросов"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-12 pb-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={feature.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Как это работает
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Три простых шага до автоматизации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Регистрация",
                description: "Создайте аккаунт за 30 секунд и получите доступ к панели управления"
              },
              {
                step: "02",
                title: "Настройка",
                description: "Подключите нужные инструменты и настройте бизнес-процессы"
              },
              {
                step: "03",
                title: "Результат",
                description: "Получайте аналитику и автоматизируйте рутинные задачи"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <span className="inline-block font-heading text-6xl font-bold text-primary/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Тарифы
            </h2>
            <p className="text-muted-foreground text-lg">
              Прозрачное ценообразование для вашего бизнеса
            </p>
          </div>

          <Card className="max-w-md mx-auto shadow-2xl border-2 border-primary/20 animate-scale-in">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Профессиональный
                </h3>
                <div className="mb-4">
                  <span className="font-heading text-6xl font-bold">₽4,990</span>
                  <span className="text-muted-foreground ml-2">/месяц</span>
                </div>
                <p className="text-muted-foreground">
                  Полный доступ ко всем функциям
                </p>
              </div>

              <div className="space-y-4 mb-8 text-left">
                {[
                  "Безлимитные запросы",
                  "Приоритетная поддержка",
                  "API доступ",
                  "Расширенная аналитика",
                  "Интеграция с CRM"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full text-lg py-6">
                Попробовать 14 дней бесплатно
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="animate-fade-in">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">
                Как быстро можно начать работу?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Регистрация занимает менее минуты, и вы сразу получаете доступ к полному функционалу на 14 дней бесплатно. Интеграция с вашими системами занимает 5-10 минут.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">
                Нужны ли технические знания?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Нет, наш сервис разработан с учётом простоты использования. Интуитивный интерфейс и готовые шаблоны позволяют настроить всё за несколько кликов без программирования.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">
                Безопасны ли мои данные?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Безусловно. Мы используем шифрование данных на уровне банков, регулярные резервные копии и соответствуем всем международным стандартам безопасности (ISO 27001, GDPR).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">
                Можно ли отменить подписку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Да, вы можете отменить подписку в любой момент без дополнительных комиссий. Доступ сохранится до конца оплаченного периода.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">
                Какая поддержка предоставляется?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Мы предоставляем круглосуточную поддержку через чат, email и телефон. Среднее время ответа — 15 минут. Также доступна база знаний и видео-уроки.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-foreground text-background px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">
                Бизнес-Ассистент 24/7
              </h3>
              <p className="text-background/70">
                Умный помощник для вашего бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition">Возможности</a></li>
                <li><a href="#" className="hover:text-background transition">Тарифы</a></li>
                <li><a href="#" className="hover:text-background transition">Интеграции</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition">О нас</a></li>
                <li><a href="#" className="hover:text-background transition">Блог</a></li>
                <li><a href="#" className="hover:text-background transition">Карьера</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition">Справка</a></li>
                <li><a href="#" className="hover:text-background transition">Контакты</a></li>
                <li><a href="#" className="hover:text-background transition">API</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 Бизнес-Ассистент 24/7. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
