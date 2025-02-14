# NewsApp

**NewsApp** – це застосунок для перегляду новин, розроблений з використанням сучасних веб-технологій. Додаток дозволяє користувачам обирати категорії новин, переглядати статті, а також зберігати вибрані статті для подальшого доступу.

---

## Основні можливості

- **Вибір категорій новин**: Користувач може обрати категорію (наприклад, "бізнес", "спорт", "технології") та переглядати відповідні статті.
- **Перегляд статей**: Статті представлені з заголовком, описом, контентом та зображенням (якщо доступно).
- **Збереження статей**: Можливість зберігати статті у файловій системі пристрою (за допомогою Capacitor).
- **Адаптивний дизайн**: Зручний інтерфейс, який однаково добре працює на веб-платформі та мобільних пристроях.

---

## Використані технології

- **React**: Основний фреймворк для створення користувацького інтерфейсу.
- **Vite**: Інструмент для швидкої розробки та збірки проекту.
- **Capacitor**: Дозволяє використовувати нативні функції пристроїв (наприклад, файлову систему).
- **Material-UI**: Бібліотека компонентів для створення сучасного дизайну інтерфейсу.
- **Axios**: Для роботи з HTTP-запитами до API новин.
- **Prettier**: Забезпечує єдиний стиль форматування коду.

---

## Інструкція з встановлення та запуску

### 1. Встановлення

1. Склонуйте репозиторій:
   git clone https://github.com/<username>/news-app.git
   cd news-app
Встановіть залежності:

npm install
2. Запуск у режимі розробки
   Щоб запустити додаток локально:


npm run dev
Перейдіть до браузера та відкрийте http://localhost:5173.

3. Збірка проекту
   Щоб зібрати додаток для продакшн:


npm run build
Зібраний проект буде у папці dist.

4. Робота з мобільною платформою (Android)
   Додайте платформу Android:


npx cap add android
Скопіюйте веб-ресурси до Android:


npx cap copy
Відкрийте проект в Android Studio:


npx cap open android
Запустіть додаток на пристрої або емуляторі.

Демо
Скріншоти або відео демонстрації роботи додатку можна додати тут.

Структура проекту
Опис основних папок і файлів:

src/pages: Основні сторінки додатку:
HomePage.tsx – головна сторінка з категоріями.
NewsList.tsx – список новин.
ArticlePage.tsx – деталі статті.
src/api: Містить функції для роботи з API новин.
src/main.tsx: Точка входу додатку, де підключається маршрутизація.

