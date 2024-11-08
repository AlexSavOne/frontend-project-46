# Проект: Вычислитель отличий

**Вычислитель отличий** — консольная утилита для нахождения различий между двумя структурами данных. Она предоставляет отчеты в нескольких форматах и направлена на развитие навыков функционального программирования, тестирования и работы с деревовидными структурами данных.

## Возможности

- Поддержка различных форматов данных: `yaml`, `json`
- Генерация отчетов в форматах:
  - **plain text** — выводит разницу в виде плоского текста
  - **stylish** — форматированный вывод
  - **json** — структурированный вывод в формате JSON

## Цели и задачи

Работа над проектом развивает навыки в ключевых областях:
- Проектирование архитектуры приложений и модульность кода
- Работа с древовидными структурами данных и рекурсивные алгоритмы
- Обработка параметров командной строки с использованием `commander.js`
- Автоматизированное тестирование с помощью `Jest`

## Минимальные требования

- **Node.js** версии 12 и выше

## Технологии

- **JavaScript** — основной язык разработки
- **Node.js** — платформа для выполнения JavaScript на сервере
- **Commander.js** — библиотека для создания командной строки
- **ESLint** — линтер для улучшения качества кода
- **Jest** — фреймворк для тестирования
- **Git** — система контроля версий для управления проектом
- **Make** — утилита для автоматизации сборки и запуска проекта

## Инструкции по установке

1. Склонируйте репозиторий:
   ```bash
   git clone git@github.com:AlexSavOne/frontend-project-46.git
   cd frontend-project-46
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```

## Демонстрация работы

Примеры запуска с успешным завершением:

**Запуск gendiff:**
[![asciicast](https://asciinema.org/a/07gxd3T7ITHFJMmRqgCCBcw50.svg)](https://asciinema.org/a/07gxd3T7ITHFJMmRqgCCBcw50)
**Запуск тестов:**
[![asciicast](https://asciinema.org/a/TZLS5UTZUnPcpeBlQxWeekhm6.svg)](https://asciinema.org/a/TZLS5UTZUnPcpeBlQxWeekhm6)

## Статус проекта

[![Actions Status](https://github.com/AlexSavOne/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AlexSavOne/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/125f37e469d85032346c/maintainability)](https://codeclimate.com/github/AlexSavOne/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/125f37e469d85032346c/test_coverage)](https://codeclimate.com/github/AlexSavOne/frontend-project-46/test_coverage)
