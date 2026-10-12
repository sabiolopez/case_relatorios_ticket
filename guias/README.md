# Guias de apresentação de cases

Versão 1.0 · 7 de outubro de 2026

Direção aceita: apresentação leve, editorial e consistente com o portfólio de Sabio Lopez. Capas de etapas usam tipografia grande e espaço vazio. Telas de conteúdo usam títulos menores e priorizam evidências. A apresentação acompanha a fala.

## Como usar

1. Leia [a direção visual](01-direcao-visual.md).
2. Estruture o case com [o guia de conteúdo](02-conteudo.md).
3. Siga [o fluxo de produção e evolução](03-fluxo-e-consistencia.md).
4. Preencha [o roteiro reutilizável](04-template-de-case.md).
5. Aplique [o guideline de fidelidade e copy](05-fidelidade-e-copy.md).
6. Revise antes de apresentar com os critérios do fluxo.

## Projeto vigente e ordem de consulta

Este pacote pertence ao projeto **Apresentação de cases - Relatorios**. O chat foi transferido para esta pasta em 6 de outubro de 2026. Os ajustes visuais v0.7 já estavam aplicados aqui; não existe uma segunda implementação a importar da pasta “Case portfolio sabiolopez.com”.

- Implementação vigente: `../site-relatorios/dist/`.
- Look and feel vigente: v1.0, especificado em `01-direcao-visual.md` e aplicado no CSS compartilhado.
- Narrativa vigente: v0.8, dez telas; consultar `../case-relatorios/02-roteiro-do-autor.txt` e `../case-relatorios/03-revisao-narrativa.md` junto à base original.
- Informações novas do autor complementam a base e substituem lacunas anteriores quando explicitamente documentadas. Não restaurar a copy v0.7 ao reutilizar seu visual.
- Novas criações devem usar os arquivos deste projeto. A pasta anterior e seus PNGs não são a fonte de implementação.

## Case de Relatórios

A [estrutura inicial do case](../case-relatorios/01-estrutura-inicial.md) aplica estes guias à [base de conhecimento](../case-relatorios/00-base-de-conhecimento.txt). A ordem e a quantidade de telas são provisórias. O guideline de fidelidade e copy complementa as regras existentes, sem mudar as decisões visuais já estabelecidas.

As imagens em `referencias-visuais` são estudos de look and feel. A capa e a tela de conteúdo registram estudos anteriores; a implementação atual e o guia visual v1.0 orientam as novas criações. Interfaces e observações nelas são ilustrativas, não resultados de pesquisa do autor.

## Decisões estabelecidas

- Direção visual v1.0 consolidada: escala clara entre título e descrição, grafite/cinza/dourado, espaçamentos por conjunto e agrupamentos com fundos suaves.
- Composição por função: texto com imagem usa colunas equilibradas; assuntos relacionados podem ser empilhados à esquerda, com imagem à direita. Aproveitar a largura do texto e evitar vãos excessivos; empilhar em celular.
- Capa do projeto com metadados separados à direita; capas de etapa com título grande e respiro.
- Navegação no topo: casinha Home / grupo / seção e controles globais. Sem navegação local.
- Conteúdo excedente pode ser dividido; celular e zoom permitem rolagem vertical, sem cortes ou rolagem horizontal.
- Site já implementado. Reutilizar os estilos compartilhados de `../site-relatorios/dist/style.css`.
- A aprovação visual não autoriza alteração de fatos, métricas, depoimentos ou copy.

## Referências vigentes e histórico

A especificação atual é [01-direcao-visual.md](01-direcao-visual.md), consolidada a partir das revisões conjuntas até 7 de outubro de 2026. [06-ajustes-em-avaliacao.md](06-ajustes-em-avaliacao.md) conserva o histórico; decisões antigas divergentes foram substituídas pela v1.0.

Os estudos em `referencias-visuais` são referências anteriores de intenção, não especificação vigente. Consultar os tokens e as composições implementadas para novas telas.

## O que ainda precisa de validação

Novas composições com capturas, gráficos, tabelas e métricas, legibilidade em compartilhamento de tela e novos efeitos de movimento. A v0.7 foi conferida em desktop e celular de 390 px, sem rolagem horizontal nas páginas de conteúdo e na abertura. Isso não substitui a revisão de cada nova tela.

## Referências de padrões

- [Microsoft: apresentação acessível](https://support.microsoft.com/en-us/accessibility/powerpoint/make-your-powerpoint-presentations-accessible-to-people-with-disabilities): legibilidade, contraste e espaço em branco.
- [reveal.js: tamanho de apresentação](https://revealjs.com/presentation-size/): enquadramento proporcional do palco.
- [reveal.js: visão geral](https://revealjs.com/overview/): acesso não linear durante perguntas.

Os limites editoriais e as medidas deste pacote são propostas específicas para este projeto, não padrões universais extraídos dessas fontes.

## Aprendizados consolidados em 7 de outubro

Os ajustes de capa, navegação, metadados, copy e proporção entre texto e imagem passam a ser padrão reutilizável. Consultar o guia visual v1.0 antes de criar novas páginas. O arquivo 06 conserva o histórico, sem prevalecer sobre os guias atuais. Fontes permanecem documentadas e não aparecem automaticamente nas telas.
