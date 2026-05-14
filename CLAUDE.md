# Panquecaria Thiu Tonho — Cardápio Digital

## Projeto
Cardápio digital de uma panquecaria artesanal. Gerado originalmente pelo Bolt.new e exportado para desenvolvimento local.

## Stack
- React + TypeScript
- Vite
- Tailwind CSS
- Sem backend — site estático

## Estrutura de componentes
- `src/App.tsx` — componente raiz, monta a página
- `src/components/Hero.tsx` — seção principal / topo do site
- `src/components/MenuSection.tsx` — seção do cardápio
- `src/components/MenuCard.tsx` — card individual de cada item do cardápio
- `src/components/DeliveryBanner.tsx` — banner de entrega
- `src/components/Differentials.tsx` — seção de diferenciais
- `src/components/Reviews.tsx` — seção de avaliações
- `src/components/Footer.tsx` — rodapé
- `src/components/WhatsAppFloat.tsx` — botão flutuante do WhatsApp
- `src/components/Decorations.tsx` — elementos decorativos visuais
- `src/data/menu.ts` — dados do cardápio (produtos, preços, categorias)

## Dados de contato
- WhatsApp: (11) 94142-1423 → número formatado para link: 5511941421423
- Instagram: @panquecasdothiutonho

## Identidade visual
- Estilo artesanal, aconchegante, premium
- Paleta: vermelho tomate, vinho escuro, creme/bege, detalhes gastronômicos
- Manter consistência visual em qualquer novo componente

## Regras importantes
- Nunca alterar arquivos de configuração (vite.config.ts, tsconfig*, postcss.config.js, eslint.config.js, tailwind.config.js) salvo instrução explícita
- Novos componentes seguem o padrão TypeScript + Tailwind já existente
- Todos os botões de pedido devem abrir o WhatsApp com o número acima
- O site deve ser responsivo — testar mobile (Android e iPhone) em qualquer alteração visual

## Carrinho (a implementar)
- Componente novo: `src/components/Cart.tsx`
- Estado global simples com useState/useContext (sem Redux ou libs externas)
- Ao finalizar pedido, gerar mensagem WhatsApp no formato:
  "Olá, quero fazer este pedido:\n2x Frango 4 — R$ 50,00\nTotal: R$ 75,00"
- Estruturar de forma modular para futuras integrações (pagamento, entrega, painel admin)
