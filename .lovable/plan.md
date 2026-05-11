
# Landing Page A9 Massey Ferguson — Campanha "Gol de Placa"

Single-page de alta conversão para o Saldão Agrishow, usando a identidade da campanha Gol de Placa (verde + amarelo do logo da campanha) combinada com o vermelho Massey Ferguson (#C71121) e preto/cinza (#606163) como cores institucionais.

## Direção visual

- **Tema**: dark hero estilo "estádio à noite" (igual ao banner enviado), seções claras intercaladas com seções em verde profundo da campanha.
- **Paleta** (tokens em `src/styles.css`, oklch):
  - `--mf-red`: #C71121 (CTAs, destaques, urgência)
  - `--campaign-green`: verde escuro do logo Gol de Placa (fundos heróicos)
  - `--campaign-gold`: dourado do logo (selos de oferta, badges %)
  - `--mf-gray`: #606163, preto e branco para base
- **Tipografia**: display condensada esportiva (Oswald / Anton) para títulos tipo "estádio"; Inter para corpo. Pesos pesados, uppercase nos hero/CTAs.
- **Motion**: framer-motion — fade/slide nos blocos, hover scale nos cards de máquina, pulse sutil no botão WhatsApp flutuante.
- **Logos**: somente os enviados (LOGO_GOL_DE_PLACA.png + massey-a9-preto/branco.png) — nada gerado por IA.
- **Imagens de fundo/seções**: geradas por IA no estilo do banner enviado (estádio iluminado, multidão verde-amarela, máquinas Massey vermelhas no gramado, bandeira do Brasil) usando `imagegen--generate_image` quality `standard`. Sem fotos stock.

## Estrutura (single page, route `/`)

1. **Header sticky** — logo Massey+A9 à esquerda, nav âncora (Oferta, Sobre, Máquinas, Unidades, Depoimentos), botão WhatsApp à direita.
2. **Hero "Estádio"** — fundo full-bleed gerado (estádio + máquinas Massey + bandeira BR), logo Gol de Placa grande, headline "Saldão Agrishow na A9 com Até 15% OFF e 15x SEM JUROS", subheadline, CTA vermelho + selo dourado "OFERTA EXCLUSIVA".
3. **Bloco Oferta Especial** — 3 cards (15% OFF / 15x sem juros / Entrega técnica) sobre faixa verde da campanha, ícones de troféu/bola, CTA WhatsApp.
4. **Sobre A9** — split: texto à esquerda ("Tradição e Inovação"), imagem gerada de máquina Massey à direita; abaixo, 3 colunas "Por que investir" (Portfólio, Precisão, Entrega Técnica).
5. **Tecnologia Massey Ferguson** — grid 4 cards (Tratores 8S/7700, Colheitadeiras, Plantadeiras Momentum, Pulverizadores 500R) com imagens geradas individuais e descrição.
6. **Unidades A9** — mapa estilizado / grid 8 cards (Avaré, Piedade, Bragança, Itapeva, Piracicaba, Itapetininga, Jaú, Holambra) com pin vermelho.
7. **Depoimentos** — 2 cards (Paulo Leme, Marcela Gama) com aspas grandes, em fundo escuro estilo estádio. CTA.
8. **Condições Saldão Gol de Placa** — faixa de impacto verde+dourado com 2 destaques (taxas reduzidas, 15% OFF imediato).
9. **CTA Final** — bloco hero secundário com headline "Potência, tecnologia e gente que entende do agro", 3 bullets, CTA grande.
10. **Footer** — logos, unidades, horário "Seg a Sáb", crédito "Powered by Omnia Inteligência Digital".
11. **Botão WhatsApp flutuante** — fixed bottom-right, pulse animation.

## Detalhes técnicos

- Stack: TanStack Start (existente). Toda a página em `src/routes/index.tsx` substituindo o placeholder, componentes em `src/components/landing/` (Header, Hero, OfferBlock, About, Machines, Units, Testimonials, Conditions, FinalCTA, Footer, WhatsAppFloat).
- Tokens novos no `src/styles.css` (oklch para mf-red, campaign-green, campaign-gold, mf-gray + gradientes e shadows da campanha).
- Fontes via Google Fonts (Oswald + Inter) no `head()` do `__root.tsx`.
- Assets enviados copiados para `src/assets/` (logo-gol-de-placa.png, massey-a9-preto.png, massey-a9-branco.png) e importados como ES6.
- Imagens geradas (estádio hero, 4 máquinas, ambientação about) salvas em `src/assets/` via `imagegen--generate_image` standard quality, JPG.
- CTAs todos como `<a href="https://wa.me/{NUMERO}?text={mensagem}" target="_blank">` com mensagem padrão: *"Olá! Tenho interesse na campanha Gol de Placa da A9 Massey Ferguson."*
- SEO: `head()` do index com title "A9 Massey Ferguson — Gol de Placa | Até 15% OFF e 15x sem juros", description, og:title/description/image (banner da campanha).
- Responsivo mobile-first; hero adapta para empilhado no mobile.
- Sem backend / sem Lovable Cloud — apenas frontend.

## Pendência antes de implementar

- **Número de WhatsApp** (com DDD) para preencher os links. Se não enviar, uso placeholder `5514999999999` e você troca depois.
