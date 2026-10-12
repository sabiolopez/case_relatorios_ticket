# Case de Relatórios do Portal Ticket

Versão 0.1 · 6 de outubro de 2026 · Estrutura editorial provisória

## Referências e escopo

Fonte factual: [base de conhecimento](00-base-de-conhecimento.txt), cópia integral de `Texto colado.txt` fornecida pelo autor, seções 1–31. As referências abaixo indicam essas seções, não evidências primárias já conferidas.

Direção de apresentação: guias locais `01-direcao-visual.md`, `02-conteudo.md`, `03-fluxo-e-consistencia.md` e `04-template-de-case.md`.

Este documento propõe ordem, copy e representação visual. Não é uma apresentação final. A quantidade de telas é provisória e depende do tempo disponível e das evidências reunidas. Nenhuma captura, depoimento ou gráfico foi criado nesta etapa.

## Mensagem central

Reorganizamos os relatórios do legado em domínios de informação, com um modelo comum de consulta, configuração e exportação no novo Portal Ticket.

## Brief inicial

- Contexto: migração progressiva do TEP para o Portal Ticket.
- Foco: arquitetura de informação e modelo de interação dos relatórios.
- Papel: condução da frente inicial de Product Design, com autonomia e articulação com áreas e squads.
- Público de trabalho: entrevista técnica de Product Design, conforme a base. Vaga e audiência específicas pendentes.
- Duração, período do projeto, composição da equipe e restrições técnicas: não informados.
- Resultado sustentado na base: reorganização estrutural da experiência e sinais qualitativos de validação.

## Estrutura proposta

As quatro fases seguem os guias existentes. A abertura apresenta o case. O fechamento pertence à fase Validação. Capas de fase são pausas tipográficas, sem listas ou explicações.

### Abertura

**A01 · Relatórios no Portal Ticket**

- Copy de apoio: `Uma arquitetura comum para consultar e exportar informações`.
- Composição: título com respiro. Uma captura real da solução pode acompanhar, se disponível.
- Fonte: §§ 10–13 e 21.
- Fala: situar produto e tema. Não antecipar resultados de negócio.

### Problema

**P00 · Problema**

Capa de fase. Apenas o nome da fase.

**P01 · Relatórios na migração do portal**

Copy:

- Migração progressiva do TEP
- Novo portal com origem em SMB
- Necessidades de clientes maiores

Visual: relação simples entre legado, capacidade de relatórios e novo portal. Representação editorial do contexto, sem percentuais ou progresso de migração.

Fonte: §§ 2–3. Fala: explicar que relatórios era uma das capacidades relevantes para ampliar a cobertura funcional.

**P02 · Minha atuação na frente de design**

Copy:

- Estruturação inicial do problema
- Arquitetura e desenho da experiência
- Pesquisa e articulação com áreas

Visual: tipografia e blocos de texto abertos, com espaço. Evitar organograma de equipe sem fonte.

Fonte: §§ 4, 26–27. Fala: você buscou a iniciativa e conduziu a frente inicial de design quando ainda não havia equipe estruturada dedicada. Explicitar colaboração, sem atribuir todo o projeto a você.

**P03 · Cada relatório tinha uma estrutura fixa**

Copy: `Páginas independentes, filtros específicos e tabelas previamente definidas`.

Visual: captura real do legado com até três anotações. Na ausência da captura, usar sequência conceitual identificada como síntese: acesso ao relatório, aplicação de filtros, tabela fixa, exportação.

Fonte: § 5. Fala: o usuário precisava escolher o relatório adequado antes de consultar as informações.

### Discovery

**D00 · Discovery**

Capa de fase.

**D01 · Como investigamos os relatórios**

Copy:

- Legado: relatórios, filtros e campos
- Uso: relevância das consultas
- Clientes: necessidades e expectativas

Visual: três linhas com a fonte e a pergunta investigada. Benchmark fica na fala como referência complementar.

Fonte: §§ 6 e 9. Pendência: esclarecer se as cinco entrevistas de discovery e os cinco testes de validação são o mesmo conjunto. Não totalizar dez participantes.

**D02 · Relatórios diferentes atendiam necessidades semelhantes**

Copy: `O inventário revelou possibilidades de agrupamento por domínio`.

Visual: trecho real do inventário, destacando relações entre relatórios. Se indisponível, mostrar agrupamento conceitual sem inventar nomes, quantidades ou correspondências individuais.

Fonte: §§ 8–10. Fala: explicar um exemplo documentado da semelhança. A base não fornece a matriz completa de agrupamento.

**D03 · A pergunta passou a ser sobre arquitetura**

Copy principal: `Como migrar a capacidade de relatórios sem reproduzir a fragmentação do legado?`

Visual: pergunta com amplo espaço. Rótulo discreto: `Reformulação do problema`.

Fonte: § 8. Fala: conectar a investigação à decisão de reorganização. Não atribuir esse framing a uma fala de cliente.

### Solução

**S00 · Solução**

Capa de fase.

**S01 · As consultas passaram a se organizar por domínio**

Copy de apoio: `Necessidades relacionadas compartilham uma estrutura de consulta`.

Visual: mapa dos domínios Pedidos / Documentos Fiscais, Beneficiários / Extrato, Cartões e Reversões. Informe de Rendimentos e outras necessidades podem aparecer em aprofundamento quando o escopo estiver confirmado. Identificar o mapa como recorte da arquitetura.

Fonte: § 10. Fala: apresentar o critério de agrupamento. Não afirmar que esses quatro domínios representam todo o escopo.

**S02 · Um modelo comum de interação**

Copy visual: `Busca e filtros`, `Visualização configurável`, `Detalhamento`, `Exportação`.

Visual: sequência de quatro etapas ou captura anotada. Os rótulos são partes do modelo, não navegação da apresentação.

Fonte: §§ 11–13. Fala: os dados e regras variam por domínio. A configuração continua limitada às possibilidades do produto.

**S03 · Pedidos reúne consultas e documentos fiscais**

Copy:

- Busca e filtros de pedidos
- Detalhes e documentos fiscais
- Exportação e downloads

Visual: captura real de Pedidos, com recortes legíveis. Se houver detalhes demais, dividir esta tela em duas.

Fonte: § 15. Pendência: confirmar o estado de entrega dos recursos mostrados. Não exibir protótipo como produto em produção.

**S04 · A visualização ganhou flexibilidade**

Copy: `O usuário ajusta as informações exibidas dentro das opções do produto`.

Visual: comparação entre tabela fixa do legado e configuração da nova proposta, com recortes equivalentes. Só mostrar ações efetivamente documentadas. Não presumir reordenação, drag-and-drop ou salvamento de colunas.

Fonte: §§ 5, 11–12. Fala: relacionar a configuração à redução da necessidade de páginas para variações semelhantes, como decisão arquitetural.

**S05 · Os domínios compartilham a estrutura de interação**

Copy: `Dados e filtros específicos. Uma lógica consistente de consulta`.

Visual: dois recortes reais, de Pedidos e Beneficiários, destacando a estrutura compartilhada. Mostrar somente o que as capturas sustentarem.

Fonte: §§ 13–16. Fala: a arquitetura permite evolução por filtros, campos e detalhes. Não afirmar economia mensurada de desenvolvimento.

### Validação

**V00 · Validação**

Capa de fase.

**V01 · Validação durante a disponibilização progressiva**

Copy: `A experiência foi validada com clientes enquanto a disponibilização avançava`.

Visual: duas linhas explicativas, uma para validação e outra para disponibilização. Não representar cada onda como um teste, nem inferir causalidade entre as duas atividades.

Fonte: §§ 17–18. Fala: explicar o que se buscava compreender. Omitir 100, 200 e 300 até revisar os registros. Contagem de cinco testes depende de esclarecer sua relação com discovery.

**V02 · Os registros indicaram compreensão da experiência**

Copy:

- Percepção de simplicidade
- Ajuste da visualização durante os testes
- Sem bloqueios críticos de navegação identificados

Visual: observações qualitativas com origem. Usar citações somente se houver transcrição real. Não usar percentuais, notas, ícones de sucesso ou linguagem de comprovação ampla.

Fonte: § 19. Legenda necessária: `Sinais qualitativos da validação`. Fala: esses registros não demonstram adoção ou desempenho de toda a base.

**V03 · A validação revelou lacunas específicas**

Copy:

- Departamento em Beneficiários
- PDF em determinados downloads
- Exportação em lote em alguns detalhes

Visual: lista editorial. Vincular a recortes reais quando disponíveis.

Fonte: §§ 16 e 20. Fala: a pesquisa orientou evolução. Não afirmar implementação das melhorias sem confirmação.

**V04 · Uma arquitetura comum para os relatórios**

Copy comparativa:

| Legado | Nova arquitetura |
|---|---|
| Páginas independentes | Organização por domínios |
| Tabelas fixas | Visualização configurável |
| Variações em relatórios separados | Evolução dentro do domínio |

Visual: comparação aberta, com hierarquia tipográfica e alinhamento. Sem números de eficiência.

Fonte: §§ 14 e 21–23. Fala: encerrar com o resultado estrutural e a contribuição para a cobertura funcional do novo portal. Crescimento de adoção e redução de suporte continuam sem mensuração documentada.

## Aprofundamento opcional

Adicionar somente quando houver material e necessidade de discussão:

- Utilização do TEP: gráfico após conferir valores, período, fonte e unidade.
- Inventário: agrupamentos reais e critérios de decisão.
- Pesquisa: roteiro, perfis, tarefas e registros disponíveis.
- Restrições e alternativas: somente as decisões efetivamente documentadas.
- Relação com self-service: capacidade oferecida e impactos ainda não medidos.

Growth e AI não ganham telas próprias nesta estrutura inicial. A base permite discutir Growth como lente complementar e AI como possibilidade futura, mas não sustenta resultados nesses temas.

## Pendências para evoluir

1. Confirmar público e duração para ajustar o número de telas.
2. Reunir capturas do legado, da solução e do inventário.
3. Esclarecer pesquisa, cronologia e estado de entrega das funcionalidades.
4. Confirmar equipe, colaboração, restrições e trade-offs reais.
5. Revisar métricas e ondas antes de qualquer representação quantitativa.

## Critério de corte

Preservar contexto, contribuição, problema do legado, insight de agrupamento, modelo de interação, exemplo concreto, validação e resultado estrutural. Unir ou remover telas repetitivas conforme o tempo. Nenhuma ressalva indispensável deve desaparecer para encurtar a apresentação.
