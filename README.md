# Central de Monitoramento de Missões Espaciais

---

## Integrantes

| Nome | RM |
|--------|--------|
| Arthur Marangoni Furlan | 564665 |
| Gustavo Sartori S. Grigoletto | 565726 |
| Vinicius Macedo Carvalho | 563791 |

---

## Descrição do Projeto

Este projeto foi desenvolvido para a disciplina de **Cross-Platform Application Development** utilizando **React Native com Expo**.

A aplicação simula uma Central de Monitoramento de Missões Espaciais, permitindo acompanhar informações importantes de uma missão, como sensores, energia, comunicação e estabilidade orbital.

O sistema também conta com alertas automáticos para situações críticas, formulários para atualização dos dados e armazenamento local das informações da missão.

---

## Funcionalidades

- Dashboard com indicadores da missão espacial
- Monitoramento de sensores
- Controle de energia da nave
- Monitoramento da comunicação
- Controle da estabilidade orbital
- Alertas automáticos para parâmetros críticos
- Formulário para atualização dos dados da missão
- Navegação entre telas utilizando Expo Router
- Persistência local de dados com AsyncStorage
- Gerenciamento de estado global com Context API
- Interface temática inspirada em centros de controle espacial

---

## Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- JavaScript
- Context API
- AsyncStorage

---

## Estrutura do Projeto

```text
src
├── app
│   ├── _layout.js
│   ├── index.js
│   ├── dashboard.js
│   ├── alertas.js
│   ├── formulario.js
│   └── configuracoes.js
│
├── components
│   ├── SensorCard.js
│   └── AlertCard.js
│
└── context
    └── MissionContext.js
```

## Objetivo

Desenvolver uma aplicação mobile cross-platform capaz de simular uma central de monitoramento espacial, aplicando conceitos de navegação, gerenciamento de estado, persistência de dados e desenvolvimento de interfaces modernas utilizando React Native e Expo.

---


## Requisitos Atendidos

- Dashboard com dados de sensores, energia, comunicação e estabilidade orbital
- Alertas automáticos para níveis críticos
- Formulários com validação de dados
- Navegação entre telas utilizando Expo Router
- Persistência local utilizando AsyncStorage
- Gerenciamento de estado global com Context API
- Interface visual temática inspirada em missões espaciais
