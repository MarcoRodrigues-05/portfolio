# Portfólio — Marco Rodrigues

Apresentação profissional e vitrine dos projetos Jacaré Utilidades, NutriLife e UTrip.
Construído com React, TypeScript, TanStack Start e Tailwind CSS.

## Desenvolvimento

Use Node.js 22 (22.12 ou superior) e npm. A instalação global do Node não é alterada pelo projeto.

```sh
npm ci
npm run dev
```

O projeto utiliza `package-lock.json` para instalações reproduzíveis. Não misture arquivos de versões de outros gerenciadores.

## Verificações

```sh
npm run lint
npx tsc --noEmit
npm test
npm audit
npm run build
```

O override de minimatch fica restrito a @typescript-eslint/typescript-estree e utiliza a versão com correção de segurança. Reavalie esse override ao atualizar typescript-eslint.

## Publicar na Vercel

1. Envie este conteúdo para um repositório GitHub pessoal. Se estiver usando o repositório conectado ao Lovable, preserve o histórico existente e envie um commit normal.
2. Entre em https://vercel.com e escolha o plano Hobby para o portfólio pessoal.
3. Selecione Add New → Project e importe o repositório.
4. Confirme o framework TanStack Start e Node.js 22.x. Os comandos já estão em vercel.json: instalação `npm ci` e build `npm run build`.
5. Não configure `dist` como diretório de saída: este projeto usa renderização no servidor. O Nitro gera `.vercel/output` com as páginas, arquivos e função de servidor.
6. Não são necessárias variáveis de ambiente para o conteúdo atual.
7. Clique em Deploy. Use o domínio de produção terminado em .vercel.app no currículo. Em Settings → Domains, consulte o endereço atribuído.
8. Abra o link em uma janela anônima, teste `/` e `/projetos` diretamente e confira o site no celular. O recrutador deve conseguir entrar sem login.

Cada push para a branch de produção dispara uma nova publicação na Vercel. Esta configuração local não cria conta, repositório ou deployment automaticamente.

O plano Hobby é gratuito para uso pessoal não comercial e tem limites de utilização. Consulte https://vercel.com/docs/plans/hobby. O endereço sugerido depende de disponibilidade; um domínio próprio é opcional e tem custo de registro.

## Conteúdo

- `src/routes/index.tsx`: apresentação, experiência, formação e contato.
- `src/routes/projetos.tsx`: projetos publicados, descrições e links.
- `src/components/SiteNav.tsx` e `src/styles.css`: navegação e animação acessível da aba atual.
- `public/projects`: capas locais, sem dependência de imagens externas.

Os projetos são conteúdo do site e não dependem do navegador do visitante. Não há painel de administração, login ou banco de dados em uso. Nunca inclua credenciais em arquivos públicos ou em variáveis VITE_.
