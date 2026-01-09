import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Грудинка копчёная',
      category: 'Мясо',
      price: '890 ₽/кг',
      wood: 'Ольха',
      image: 'https://cdn.poehali.dev/projects/a0863b5f-ab08-4075-afa7-f1c63681b162/files/cdb39184-65b0-4455-b1c9-fd1fd2ff8351.jpg',
      description: 'Нежное мясо с золотистой корочкой'
    },
    {
      id: 2,
      name: 'Рыба горячего копчения',
      category: 'Рыба',
      price: '650 ₽/кг',
      wood: 'Яблоня',
      image: 'https://cdn.poehali.dev/projects/a0863b5f-ab08-4075-afa7-f1c63681b162/files/b7718931-1009-4fa6-81a7-4f2a5b160d02.jpg',
      description: 'Ароматная рыба с фруктовыми нотками'
    },
    {
      id: 3,
      name: 'Куриные крылья',
      category: 'Птица',
      price: '490 ₽/кг',
      wood: 'Бук',
      image: 'https://cdn.poehali.dev/projects/a0863b5f-ab08-4075-afa7-f1c63681b162/files/cdb39184-65b0-4455-b1c9-fd1fd2ff8351.jpg',
      description: 'Хрустящие крылышки с пряным ароматом'
    },
    {
      id: 4,
      name: 'Сыр копчёный',
      category: 'Сыр',
      price: '790 ₽/кг',
      wood: 'Вишня',
      image: 'https://cdn.poehali.dev/projects/a0863b5f-ab08-4075-afa7-f1c63681b162/files/b7718931-1009-4fa6-81a7-4f2a5b160d02.jpg',
      description: 'Сливочный вкус с дымным оттенком'
    }
  ];

  const woods = [
    {
      name: 'Ольха',
      flavor: 'Мягкий, классический дымный вкус',
      best: 'Мясо, рыба',
      icon: 'TreePine'
    },
    {
      name: 'Яблоня',
      flavor: 'Сладковатый, фруктовый аромат',
      best: 'Рыба, птица, овощи',
      icon: 'Apple'
    },
    {
      name: 'Бук',
      flavor: 'Насыщенный, терпкий вкус',
      best: 'Красное мясо, дичь',
      icon: 'Trees'
    },
    {
      name: 'Вишня',
      flavor: 'Деликатный, сладкий оттенок',
      best: 'Сыр, птица, свинина',
      icon: 'Cherry'
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Превосходное качество! Грудинка просто тает во рту, чувствуется натуральность.',
      date: '15 декабря 2025'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Заказываю уже третий раз. Рыба копчёная - просто шедевр! Доставка всегда вовремя.',
      date: '10 декабря 2025'
    },
    {
      name: 'Дмитрий Л.',
      rating: 5,
      text: 'Открыл для себя сыр копчёный - невероятное сочетание вкусов. Рекомендую!',
      date: '5 декабря 2025'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flame" size={28} className="text-secondary" />
              <span className="text-2xl font-bold text-primary">Коптильня 63</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-secondary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-foreground hover:text-secondary transition-colors"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('woods')}
                className="text-foreground hover:text-secondary transition-colors"
              >
                Породы дерева
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-foreground hover:text-secondary transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('delivery')}
                className="text-foreground hover:text-secondary transition-colors"
              >
                Доставка
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-secondary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Коптильня 63 — Настоящие копчёные деликатесы
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Традиционное копчение на натуральном дереве. Каждый продукт - произведение искусства
                с уникальным вкусом и ароматом.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('catalog')}
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white"
                >
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button
                  onClick={() => scrollToSection('woods')}
                  variant="outline"
                  size="lg"
                  className="border-2"
                >
                  О породах дерева
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Натуральные ингредиенты</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24ч</div>
                  <div className="text-sm text-muted-foreground">Доставка по городу</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">5★</div>
                  <div className="text-sm text-muted-foreground">Рейтинг качества</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/a0863b5f-ab08-4075-afa7-f1c63681b162/files/cdb39184-65b0-4455-b1c9-fd1fd2ff8351.jpg"
                alt="Копчёные продукты"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наш каталог</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент копчёных деликатесов. Каждый продукт готовится с использованием
              отборных пород дерева для идеального вкуса.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-secondary text-white">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="TreePine" size={16} className="text-secondary" />
                    <span className="text-sm text-muted-foreground">Дерево: {product.wood}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary">{product.price}</span>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                      <Icon name="Plus" size={16} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="woods" className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Породы дерева для копчения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждая порода дерева придаёт продуктам уникальный вкус и аромат. Мы используем только
              натуральную древесину высшего качества.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {woods.map((wood, index) => (
              <Card
                key={wood.name}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Icon name={wood.icon} size={32} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{wood.name}</h3>
                      <p className="text-muted-foreground mb-3">{wood.flavor}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Лучше всего для: {wood.best}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Секреты мастерства</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-secondary mt-1" />
                    <span>Только натуральная древесина без коры и химической обработки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-secondary mt-1" />
                    <span>Оптимальная влажность дерева 15-20% для равномерного дыма</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-secondary mt-1" />
                    <span>Температурный контроль на всех этапах копчения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-secondary mt-1" />
                    <span>Время выдержки от 4 до 12 часов в зависимости от продукта</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/a0863b5f-ab08-4075-afa7-f1c63681b162/files/5cc45835-519b-4145-9ebd-25ae2415696b.jpg"
                  alt="Древесина для копчения"
                  className="rounded-xl shadow-lg w-full object-cover h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Отзывы наших клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас покупатели</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Доставка</h2>
            <p className="text-lg text-muted-foreground">Быстро и надёжно доставим ваш заказ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                  <Icon name="Truck" size={40} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Курьером</h3>
                <p className="text-muted-foreground mb-2">Доставка по Москве в течение 24 часов</p>
                <p className="text-2xl font-bold text-secondary">350 ₽</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                  <Icon name="Package" size={40} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Пункты выдачи</h3>
                <p className="text-muted-foreground mb-2">СДЭК, Boxberry в вашем районе</p>
                <p className="text-2xl font-bold text-secondary">250 ₽</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                  <Icon name="Store" size={40} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Самовывоз</h3>
                <p className="text-muted-foreground mb-2">Забрать в нашем магазине</p>
                <p className="text-2xl font-bold text-secondary">Бесплатно</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="bg-card rounded-lg shadow">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} />
                    <span>Зоны доставки</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Мы доставляем по Москве в пределах МКАД. Доставка за МКАД +50 ₽ за каждый км.
                  Минимальный заказ для доставки - 1000 ₽.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={20} />
                    <span>Время доставки</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Доставка осуществляется ежедневно с 10:00 до 22:00. Вы можете выбрать удобный
                  временной интервал при оформлении заказа.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-2">
                    <Icon name="CreditCard" size={20} />
                    <span>Оплата</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Принимаем наличные и банковские карты курьеру. Также доступна оплата онлайн при
                  оформлении заказа на сайте.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда рады вашим вопросам</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-secondary" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <a href="tel:+74951234567" className="text-muted-foreground hover:text-secondary">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-secondary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a
                        href="mailto:info@koptilnya.ru"
                        className="text-muted-foreground hover:text-secondary"
                      >
                        info@koptilnya.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <p className="text-muted-foreground">Москва, ул. Копчёная, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={24} className="text-secondary" />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Ваше сообщение"
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Отправить сообщение
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" size={24} />
              <span className="text-xl font-bold">Коптильня 63</span>
            </div>
            <div className="text-center md:text-left">
              <p>© 2025 Коптильня 63. Все права защищены.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Send" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;