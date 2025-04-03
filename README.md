# Confer - Busca de Usuários do GitHub

Este é um projeto em **Next.js** que permite buscar informações de um usuário do **GitHub** e exibir seus dados. Se um usuário for encontrado, as informações são exibidas na tela. Caso contrário, uma mensagem de erro é mostrada. Além disso, há um botão dinâmico que alterna entre a lupa para busca e uma lixeira para limpar os dados renderizados.

## Tecnologias Utilizadas

- **Next.js**
- **TypeScript**
- **React Hooks**
- **Tailwind CSS**
- **Lucide React** (para ícones)

## Funcionalidades

- Busca de usuários do GitHub pelo nome.
- Exibição de informações como nome, avatar e biografia.
- Feedback de carregamento durante a busca.
- Tratamento de erro para usuários inexistentes.
- Botão dinâmico que troca entre **buscar** e **limpar**.

## Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** para visualizar a aplicação.

## Estrutura do Projeto

```
/
├── service/
│   ├── data.ts  # Função para buscar usuário do GitHub
│
├── app/
│   ├── page.tsx  # Página principal
│   ├── user/
│   │   ├── page.tsx  # Componente para exibir os dados do usuário
│   ├── error/
│   │   ├── page.tsx  # Componente de erro
│
├── components/
│   ├── Confer.tsx  # Componente principal da busca
│
└── README.md
```

## Melhorias Futuras

- Implementar um histórico de buscas.
- Adicionar dark mode.
- Melhorar a responsividade para dispositivos menores.

---

Desenvolvido por **@LucasSSLV** 🚀
# SearchGitHub
