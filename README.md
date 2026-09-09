# Felipe dos Santos Indejejczak — Portfólio

Página-portfólio pessoal em React + Vite, com estética dark tech, amarelo elétrico, tipografia editorial e layout responsivo.

## O que foi incluído

- Hero com nome, foto profissional e chamada para contato.
- Seções de apresentação, experiência, ferramentas, formação e contato.
- Ícones e badges visuais para Python, Power BI, APIs, Excel/VBA, SQL e Node.js.
- Microinterações, efeitos de hover, animações de entrada e menu mobile.
- Foto extraída do currículo e usada no hero.
- Botões de WhatsApp e download do currículo via GitHub Release.

## Editar WhatsApp e currículo

Abra `client/src/pages/Home.tsx` e altere somente estas duas constantes no início do arquivo:

```ts
const WHATSAPP_URL = "https://wa.me/55SEUNUMERO?text=Sua%20mensagem";
const CURRICULO_URL = "https://github.com/SEU_USUARIO/SEU_REPOSITORIO/releases/latest/download/NOME-DO-PDF.pdf";
```

O projeto já está configurado com o WhatsApp do currículo (`55 43 99634-9824`). Para o download funcionar, publique o PDF em uma Release pública do seu repositório e use exatamente o nome do arquivo no link.

## Executar localmente

```bash
pnpm install
pnpm dev
```

A versão hospedada no preview do projeto utiliza o armazenamento de assets do Manus para a foto profissional. O código está em `client/src/` e o ponto de entrada principal é `client/src/pages/Home.tsx`.

## Informações de contato exibidas

- E-mail: felipe.Indejejczak@outlook.com
- Telefone: (43) 9 9634-9824
- Localização: Londrina, PR
