# 💻 Gestão Salão de Beleza — Desktop

Aplicação **desktop multiplataforma** para gestão de salão de beleza, construída com **Electron + Next.js**.

O projeto utiliza:
- **Next.js** para a interface (renderer)
- **Electron** para empacotamento desktop
- **electron-builder** para geração do executável
- **Hot Reload real** no desenvolvimento

---

## 🧱 Arquitetura do Projeto

gestao-salao-de-beleza-desktop/
├── electron/ # Processo principal do Electron
│ ├── main.ts
│ └── preload.ts
│
├── renderer/ # Frontend Next.js (UI)
│ ├── app/
│ ├── public/
│ ├── next.config.js
│ └── package.json
│
├── dist/ # Builds gerados (executável)
├── package.json # Configuração do Electron
└── .electronmon.json # Configuração de hot reload do Electron


---

## 🚀 Tecnologias

- Electron 40+
- Next.js 16 (App Router)
- React
- Node.js
- electron-builder
- electronmon
- concurrently

---

## 🧪 Desenvolvimento (modo DEV)

### 1️⃣ Instalar dependências

Na raiz do projeto:

```bash
npm install
cd renderer
npm install
```

### 2️⃣ Rodar o projeto

```bash
npm run dev
npm run start
```