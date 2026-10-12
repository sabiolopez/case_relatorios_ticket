# Histórico de ajustes — consolidado até 7 de outubro de 2026

As decisões revistas em conjunto foram incorporadas aos guias 01, 03 e 05, versão 1.0. Este arquivo preserva a evolução; trechos antigos podem estar substituídos. Consultar os guias vigentes para novas telas.

# Histórico de ajustes — site

6 de outubro de 2026 · histórico até v0.7

As seções anteriores à v0.7 registram decisões históricas. A direção v0.7 foi aprovada e consolidada nos guias principais; ela substitui orientações antigas divergentes sobre escala, colunas, agrupamentos e navegação.

- Header informa a localização: fase / seção atual. Capas exibem somente a fase. Exemplo: Problema / Contexto e Discovery / Metodologia. Seções futuras devem corresponder ao conteúdo real; não criar Objetivo ou outras telas apenas para preencher a navegação.
- Remover a identidade Relatórios / Portal Ticket e a navegação concorrente entre fases do header.
- Remover linhas divisórias de header e footer. Footer contém apenas posição global e avanço/retorno, sem repetir a fase.
- Conteúdo em uma coluna por padrão. Reservar duas colunas para comparações ou evidências que realmente necessitem delas.
- Texto menor, pesos moderados, cinzas legíveis, mais respiro e menos elementos ornamentais. Referência de intenção: limpeza visual de interfaces Apple, preservando a identidade do case.
- Preservar navegação por teclado, leitura em telas pequenas, movimento reduzido e rastreabilidade factual.

Fontes de conteúdo preservadas: base §§ 2–5 e 8–10. Copy encurtada sem adicionar fatos.

Para consolidar após avaliação: atualizar 01-direcao-visual.md (orientação, tipografia e enquadramento), 03-fluxo-e-consistencia.md (header e checklist) e referências visuais quando necessário.

## Abertura — revisão conjunta

Adicionada antes de Problema em 6 de outubro de 2026, conforme nova orientação do autor:

- Título: Relatórios no Portal Ticket.
- Empresa: Ticket.
- Contexto: Portal B2B.
- Período: 2º e 3º trimestre de 2026 (informação fornecida pelo autor nesta revisão; substitui a indicação de período não informado no brief inicial).
- Apoio: Uma arquitetura comum para consultar e exportar informações (roteiro A01).

O recorte agora tem cinco telas, incluindo a abertura. Revisões seguintes serão feitas página por página.

## Abertura — v0.4

- Navegação global transferida do rodapé para o header, alinhada ao breadcrumb.
- Último item do breadcrumb em dourado; tom mais escuro para legibilidade. Acento também no período e no separador entre empresas.
- Título simplificado para Relatórios, com ponto dourado.
- Metadados agrupados sem cartões: Empresa — Ticket / Edenred; Produto — Portal Ticket; Contexto — Portal B2B.
- Edenred acrescentada conforme informação do autor nesta revisão.
- Período e apoio preservados.

## Abertura — v0.5

Metadados separados do título e subtítulo: bloco independente à direita em telas amplas, com distância horizontal generosa. Em telas menores, bloco abaixo com 60–72 px de separação. Período incorporado ao mesmo grupo de informações do projeto.

## Contexto — v0.6

Novo bloco entre abertura e Problema: capa + três páginas.

| Página | Mensagem | Fonte |
|---|---|---|
| Empresa e plataforma | Ticket / Edenred; Portal Ticket B2B; RH, Financeiro e Administrativo | https://www.ticket.com.br/quem-somos/ e base § 2 |
| Migração | Origem SMB; migração de médio, grande porte e top accounts do TEP para o novo portal | Base § 2 + informação do autor nesta revisão |
| Origem do projeto | Relatórios como capacidade necessária para ampliar a cobertura funcional | Base §§ 2–3, 11–13 |

Representação da migração é conceitual, sem porcentagens, datas ou progresso inferidos. Não afirma conclusão da migração. Nenhuma métrica ou resultado acrescentado. Tela anterior de contexto passa a se chamar Legado, na fase Problema. Recorte total: nove telas.

## Conteúdo — v0.7 aprovada

6 de outubro de 2026. O autor aprovou as decisões aplicadas e solicitou atualizar a documentação para orientar as próximas criações.

- Escala: títulos 30–42 px, descrições 18 px, corpo 16–17 px; descrições deixam de competir com títulos.
- Paleta: fundo #FAFAF8, grafite #2E302D, apoio #70736D, dourado de texto #89703B e acento #BDA46A.
- Composição: título/categoria à esquerda, conteúdo à direita como padrão; variantes conforme evidência e empilhamento em celular.
- Agrupamentos: fundos suaves #F0F0EB, bordas #DEDFD6, raios 16–20 px; conclusão de Discovery em grafite.
- Distâncias: colunas 48–100 px, descrição/bloco 32 px, padding 24–30 px, conclusão 24–28 px.
- Abertura: metadados em bloco separado; capas mantêm título grande e respiro.
- Navegação, família tipográfica e copy preservadas. Categorias visuais adicionadas às telas de conteúdo.
- Verificação: abertura e cinco páginas de conteúdo conferidas em desktop e celular de 390 px, sem overflow horizontal.

Consolidado em 01, 02, 03, 04, 05 e README. A especificação vigente está em 01-direcao-visual.md e a referência implementada está em ../site-relatorios/dist/style.css, bloco “Conteúdo v0.7”. As composições futuras com tabelas, gráficos e métricas ainda precisam de revisão própria.

## Consolidação após transferência do chat

6 de outubro de 2026. Confirmado que HTML, CSS e guias já estavam no projeto Apresentação de cases - Relatorios. O vínculo anterior do chat não criou uma implementação separada. Revisados os guias contra a narrativa v0.8 e registrado o projeto vigente no README. Preservados tokens, agrupamentos, escalas e navegação aprovados. Incorporadas referências ao roteiro adicional e à revisão narrativa; uso de IA exige o alcance documentado nessa fonte, sem retornar à lacuna anterior. Nenhuma alteração na copy das telas nesta consolidação.

## Navegação — v0.7 · 7 de outubro de 2026

Casinha persistente no início do breadcrumb, com link para #abertura e nome acessível “Início — capa do projeto”. Na capa aparece somente Home, indicado em dourado. Nas demais telas: Home / grupo / conteúdo, preservando os grupos existentes (Contexto, Problema, Discovery) e omitindo conteúdo nas capas de grupo. Sem criação de grupos ainda não presentes na narrativa.

## Capa — v0.8 · 7 de outubro de 2026

Copy definida pelo autor: Módulo de relatórios; Empresa — Ticket Edenred; Plataforma — Portal Ticket; Contexto — Gestão de benefícios · B2B; Período — Q1, Q2 2026. O período substitui a indicação anterior de Q2/Q3. Todos os labels em dourado e valores em quase preto, com mesmo tamanho, inclusive o período.

## Empresa e plataforma — v0.9 · 7 de outubro de 2026

Separação em duas colunas: empresa à esquerda, Portal Ticket à direita. Nome Ticket Advance conforme nova indicação do autor; contexto corporativo Edenred preservado. Modelo B2B2C fornecido pelo autor. Portal expresso por termos curtos de produto e perfis usuários, sem acrescentar personas ou funções não documentadas.

Captura enviada pelo autor incorporada sem edição em assets/portal-ticket.png, em moldura discreta de tela junto ao portal. Não representa captura validada de produção. Para próximas telas, priorizar imagens reais relacionadas ao argumento, uma evidência principal por tela e dimensões equilibradas, sem repetir a mesma imagem como decoração.

Notas de fonte removidas de todas as telas visíveis a pedido do autor. Rastreabilidade permanece neste documento e no roteiro.

## Empresa e plataforma — v0.10

Empresa e plataforma empilhadas na coluna esquerda; captura do portal isolada na coluna direita e centralizada verticalmente. Conteúdo preservado. Em telas pequenas, imagem sucede os dois blocos textuais.

Correção do autor: o nome da empresa é Ticket Edenred, substituindo Ticket Advance na página Empresa e plataforma.

## Empresa e plataforma — ajuste de proporções

Coluna de texto ampliada e limite interno de 420 px removido. Vão horizontal reduzido a 64 px no desktop. Blocos textuais compactados, com modelo B2B2C e públicos na mesma linha quando houver espaço. Alinhamento vertical central entre texto e captura para aproximar suas alturas visuais.

## Migração — revisão de cenário · 7 de outubro de 2026

Tela organizada com cenário e descrição à esquerda; portais e escopo à direita. Título curto: Migração do legado. Novos fatos fornecidos pelo autor: urgência de desligamento da arquitetura do TEP; movimento das squads para migrar últimas funcionalidades; TEP atende médio, grande porte e top accounts, enquanto Portal Ticket atende Small naquele momento. Frentes: funcionalidades de operação, produtos legados e relatórios. Relatórios destacado como recorte deste case. Não afirmar desligamento concluído, prazo ou migração de clientes concluída.

Última informação do autor sobre Small substitui a copy anterior de pequenas e médias empresas na tela de migração. Arquitetura é motivo do movimento, não quarta frente; a enumeração final do autor define três frentes.

Migração: alinhamento pelo topo como padrão entre áreas; públicos em tags; frentes com bullets dentro do TEP; boxes de portal com altura igual. Regra incorporada ao guia visual.

Migração: removido “Público atendido naquele momento” a pedido do autor. Seta discreta entre TEP e Portal Ticket explicita a direção da migração; área restante do destino permanece vazia.

## Desafio recebido — 7 de outubro de 2026

Padrão de mensagem à esquerda e escopo à direita, alinhados pelo topo. Escopo inicial As-Is: reproduzir a experiência dos 18 relatórios no novo portal. Prazo inicial de 3 meses conforme correção do autor, substituindo 6 meses nesta tela. Ampliação posterior para 6 meses fica reservada à narrativa do novo projeto, sem antecipação aqui.

## Meu papel — revisão do autor

Projeto fora do escopo de qualquer squad; designer previsto saiu; autor pediu para assumir como designer responsável. Formação de trabalho: autor responsável por design e coordenador de projetos pela parte de produto. Essa informação substitui a referência anterior a GPM nesta tela. Composição segue entrada à esquerda e formação à direita, alinhadas pelo topo.

Meu papel: labels confirmados pelo autor — Sábio Lopes (Designer responsável) e GPM (Responsável pela parte de produto). GPM substitui Coordenador de projetos nesta tela.

Meu papel: autor confirma que naquele momento havia apenas produto e design, ainda sem equipe de engenharia. Informação acrescentada ao contexto à esquerda, sem implicar ausência de engenharia nas fases posteriores.

## Etapa 01 — Discovery

A capa após Meu papel passa de Problema para Discovery (01). Legado e investigação pertencem ao mesmo grupo. Removida a segunda capa repetida de Discovery. URL antiga #problema permanece compatível, abrindo a entrada de Discovery. Recorte atual: nove telas.

## Discovery — visão das etapas

Primeira página após a capa: Entendimento do problema; Análise de comportamento (dados de uso do TEP); Voz do cliente (gerentes de conta, Operações e análise de chamados); Análise de mercado (geral e segmento de benefícios). Etapas e fontes informadas pelo autor em 7 de outubro. Sequência numerada é representação do percurso relatado, não cronograma ou indicação de duração. Cada etapa mostra finalidade e fontes em termos curtos. Recorte atual: dez telas.

## Alternativa de layout — Etapas

Arquivo separado etapas-alternativa.html#etapas, sem substituir a tela original. Cabeçalho acima, sem descrição introdutória; quatro etapas horizontais ocupam a largura disponível; fontes em tags. Em telas menores, duas colunas ou uma. Alternativa em avaliação, não novo padrão aprovado.

## 01 · Entendimento do problema

Legado passa a integrar a etapa Entendimento do problema. Seis pontos e conclusão fornecidos pelo autor incorporados sem métricas adicionais. Capturas fornecidas: Unidades de entrega e Beneficiários, copiadas integralmente para assets; estado de produção não confirmado. Miniaturas com ampliação moderada por hover, foco ou clique, fechamento por botão/Escape. Os títulos dos detalhamentos seguintes devem repetir a nomenclatura da visão geral: 02 · Análise de comportamento; 03 · Voz do cliente; 04 · Análise de mercado. Não criar conteúdo para essas etapas sem fonte.

Entendimento do problema: conclusão reduzida a uma frase única sob as miniaturas, com hierarquia própria. Achados separados por espaço e linhas finas. Texto da conclusão é síntese editorial do contraste fornecido pelo autor.

Entendimento do problema — correções do autor: XLSX + PDF; tabelas fixas sem personalização (substitui baixa manipulação); filtros limitados com poucas opções por relatório; inconsistência visual com estruturas e experiências diferentes (substitui informação distribuída nesta tela). Miniaturas reduzidas para distinguir melhor a ampliação.


## Etapa 02 · Análise de comportamento

Nome alinhado ao percurso do Discovery. Tela apresenta quatro sinais observados (acesso, frequência, tempo de uso e recorrência), concentração em documentos fiscais, detalhes de pedidos e beneficiários, uso real como critério de priorização e queda de utilização entre Grandes Contas e Top Accounts. A hipótese permanece aberta: baixo uso não comprova baixa necessidade; investigar caminhos alternativos. Sem percentuais ou gráficos quantitativos, pois não foram fornecidos valores. Composição clara com título acima, duas áreas alinhadas ao topo, separadores discretos e hipótese destacada por linha dourada. Aplicado às duas versões locais.


### Refinamento das descobertas da etapa 02

Direita reduzida a dois componentes: uso concentrado (Detalhes do pedido, Documentos fiscais, Beneficiários e Cartões) e uso por segmento. Hipótese de baixa necessidade agrupada dentro do recorte Grandes Contas/Top Accounts. Complemento sobreposto à área do componente por hover, foco ou clique; clique fixa/fecha e Escape fecha. Informação essencial permanece visível. Sem reversão.


### Síntese dos componentes de descoberta

Estado fechado contém somente categoria e título (mais controle de expansão). Primeiro bloco: “Concentração e sobreposição” / “Uso concentrado, relatórios semelhantes”. Conteúdo expandido distingue uso concentrado em poucos dos 18 relatórios e assuntos semelhantes com formatos diferentes, como oportunidade de reunir experiências — sem afirmar consolidação já validada. Tags e hipótese por segmento aparecem apenas na expansão.


### Objetivos da análise de comportamento

Bloco esquerdo substitui “Critério de priorização” por “Objetivos da análise”, sem divisor: identificar relatórios realmente utilizados, entender usuários por segmento e definir critérios de priorização da migração. Distingue o que foi observado do motivo da análise.


## Etapa 03 · Voz do cliente

Nova tela nas duas versões, após Análise de comportamento. Visão indireta obtida por gerentes de negócio, Operações, suporte e casos fora do portal; não apresentar como entrevistas diretas. Fontes à esquerda e quatro descobertas expansíveis à direita: comprovação/consulta, domínios recorrentes, lacunas de cartões e reversões, personalização manual em grandes contas. Insight: parte das necessidades já era atendida fora do produto, portanto migrar o legado não cobria tudo. Reversões pertencem a este achado de suporte, não às tags de uso concentrado da etapa 02.


### Limites dos painéis expansíveis

Validado risco de o último complemento ultrapassar a janela. Painel abre acima quando o conteúdo não cabe abaixo e existe mais espaço acima; altura limitada ao espaço visível com margem de 24 px e rolagem interna. Recalcula em resize/scroll, mantendo hover, foco, clique e Escape.


### Revisão da voz do cliente

Título “O que o cliente dizia sobre relatórios?”. Explicitar tempo reduzido e dificuldade de agendamento como motivo da abordagem indireta. Três fontes com ícones: gerentes de negócio, Operações e análise de chamados. Todos os insights ficam à direita; personalização destacada em dourado suave e contém o principal insight, sem duplicação à esquerda. Relatórios personalizados de grandes clientes não constavam no inventário do portal.


## Etapa 04 · Relatórios personalizados

Etapa imprevista incorporada após Voz do cliente. 43 arquivos, análise de padrões com apoio de LLM e ampliação do problema. Três descobertas expansíveis, orientação em details secundário solicitado por clique/teclado, selo AI aplicada visível. Percurso atualizado nas duas versões: Análise de mercado passa a etapa 05 (tela ainda pendente).


### Interação consistente e arquivos

43 arquivos com ícone de planilha. Saída do mouse fecha o painel mesmo após clique com mouse; foco de teclado preserva acesso até saída de foco ou Escape. Expansões secundárias e posição da rolagem são reiniciadas ao fechar. Retirado movimento vertical do painel para não alterar a área de hover.


### Resultado da análise de personalizados

Substituído “Ampliação do problema” por “Padrões reconhecidos” / “Quatro grupos, seus filtros e campos”. Resultado orienta a solução: Reversões, Cartões, Pedidos de documentos fiscais (um único grupo) e Beneficiários, com filtros e campos necessários por grupo.


## Etapa 05 · Análise de mercado

Tela “Validando a arquitetura de relatórios” com selo AI aplicada. Distingue benchmark manual e pesquisa em profundidade com LLMs. Recortes visíveis em tags; achados em quatro painéis com ícones: padrões familiares, autosserviço/personalização, exploração progressiva, cobertura/validação. Evidência externa reforça padrões internos; sem acrescentar marcas, métricas ou referências não fornecidas.


## Percurso do Design

Após capa 02 · Design, visão das quatro etapas: 01 Definição de escopo e requisitos; 02 Prototipação; 03 Validação; 04 Fluxo de handoff. Mesma composição de percurso do Discovery (horizontal na alternativa, vertical na original). Sem detalhar atividades ainda não fornecidas.


## Design · Etapa 01 · Escopo e requisitos

Matriz de cinco decisões conecta necessidades do discovery a arquitetura, filtragem, exploração, personalização/drill-down e exportação/reutilização. Tabela semântica com decisão em escala maior e requisitos em tags; em celular vira sequência de grupos mantendo rótulos. Componentes compartilhados agrupados na arquitetura. Exportação XLS/PDF conforme conteúdo fornecido nesta etapa. Fechamento sintetiza a mudança de relatórios a capacidades.


## Design · Etapa 02 · Prototipação

Carrossel manual: wireframe principal, wireframe com drawer, interface final principal. Três imagens fornecidas; interface final com drawer ainda pendente. Ferramentas informadas pelo autor: Figma Design, Figma Make e Google Antigravity. Selo AI aplicada, imagens sem cortes/distorção, controles próprios e setas do teclado restritas ao carrossel quando em foco.


Quarta imagem recebida: interface final com drawer. Carrossel completo em quatro estados: wireframe tela/drawer e interface final tela/drawer.


### Composição da prototipação

Título Design da Solução. Duas áreas alinhadas ao topo: ferramentas e contexto do processo à esquerda, carrossel à direita. Figma Make e Google Antigravity com bases de dados para simular experiência de relatório real; complexidade exigia testar além de telas estáticas. Evolução permanece nas legendas das imagens, sem dominar o título.


### Galeria ilustrativa de prototipação

Dois blocos: Wireframes e drafts (Figma Design); Design e protótipo com AI (Figma Make e Google Antigravity). Motivação e uso de bases de dados em um parágrafo. Sem legendas de finalização nas imagens; galeria com cantos suaves e sombra contida. Troca automática a cada 5 segundos com fade, pausa por hover/foco e controle explícito. Movimento reduzido inicia sem autoplay.


## Design · Etapa 03 · Alinhamento e validação

Fluxo de quatro passos: alinhamento com tribo/contextos das squads, alinhamento técnico com engenharia e dados, teste de usabilidade com cinco clientes (dois grandes, dois médios, um small), validação com direção e gestão. Atualizado nome no percurso. Não acrescentar resultados ou conclusões de testes ainda não fornecidos.


## Definições diretivas após validação

Proposta de nova arquitetura aprovada pelo valor agregado e apoio à migração, buscando reduzir riscos de churn e retorno ao legado; são objetivos, não resultados comprovados. Ausência de recurso interno levou à contratação da Stefanini para desenvolvimento. Prazo redefinido de três para até seis meses. Tela de fechamento da validação, sem renumerar o handoff (etapa 04).


## Estratégia de engajamento e aderência

Após definições diretivas: estratégia com GPM para apoiar usuários vindos do legado e já presentes no portal. Manuais internos (Operações, CX, Vendas), FAQ acessado pela página de relatórios (vídeo e perguntas/respostas), formulário dedicado a contato e feedback. Autor criou e publicou FAQ pelo Figma Make com AI, sem recurso de engenharia. Captura fornecida e link https://field-buffet-22800179.figma.site/; não acrescentar URL do formulário, que não foi fornecida.


### Engajamento: síntese do layout

Ações compactas à esquerda; captura, identificação curta e link à direita. Autoria e independência de engenharia ficam em “Como foi produzido”, expansão por clique.


## Rollout · Etapa 01 · Plano

Ondas informadas pelo autor: 1, 10, 100, 500 e estágio atual ~1 mil clientes. Próximas ondas 5/10/20/40/60 mil. Pilotos com Produto, GM e Operações (sigla GM preservada conforme tabela fornecida); validação controlada com acompanhamento individual; escala com chamados, indicadores e pedidos de retorno ao portal anterior. Estágio atual destacado; próximas ondas não representadas como concluídas.


## Rollout — instrumentação e AI
- Etapa 02: lacuna de instrumentação identificada na escala de 100 clientes; produção ocupava o backlog.
- Fluxo visual em três blocos: lacuna → eventos nativos do Datadog com assistente de AI → dois dashboards.
- Conteúdo principal sempre visível; contexto, dimensões e limites nos componentes expansíveis compartilhados.
- Destaque lavanda para a alternativa com AI; não apresentar a solução como substituta da instrumentação definitiva.
- Dashboards: comportamento e uso; performance e erros. Visibilidade recuperada para acompanhar as ondas seguintes.


### Revisão da instrumentação — narrativa e evidência
- Duas colunas, topo alinhado: lacuna e alternativa com emojis à esquerda; painel de dashboards à direita.
- Captura fornecida com rolagem própria e abas Comportamento / Performance; segunda captura ainda pendente, sem duplicar a primeira.
- Contexto e limites em disclosure; lavanda apenas na alternativa com AI.

- Instrumentação: copy reduzida; lacuna em box outline equivalente ao da alternativa; tags lavanda em formato pill. Removidos fechamento e disclosure de contexto desta página.


## Rollout · acompanhamento real de 22/09

Fonte: atualização real fornecida pelo autor no chat. Ano não informado. Substituído “Hoje: ~1 mil” pelo recorte 22/09: piloto 303; ondas 1–3 de 1.000, 15.000 e 25.000; onda 4 prevista de 37.434. Não equiparar essa numeração às etapas históricas 1/10/100/500 sem confirmação.

Nova tela após Instrumentação: Resultados parciais. 41.303 habilitados, 52,46% da base de 78.737; habilitação não comprova uso. Taxas de sucesso: 100,00%, 99,91%, 99,20%. Continuidade condicionada à estabilidade do ajuste de CPF. Detalhes expansíveis: erros por data e ajustes de índices pelo time de TI; feedback isolado de 1 estrela com investigação prevista. Não atribuir estabilidade ao design nem concluir satisfação, adoção ou causa de encontrabilidade. CSAT sem avaliações; detalhes de TPD e homologação omitidos da apresentação.

Atualizadas as duas versões HTML e a navegação #resultados-parciais. Dashboards com scroll preservados.


## Rollout — sequência simplificada
- 25 páginas. Piloto controlado (1 → 100 → 303), acompanhamento direto de Operações, GNs e Produto.
- Instrumentação: necessidade de dados na expansão após o piloto; alternativa com AI do Datadog.
- Expansão por ondas: 1.000 → 15.000 → 25.000 habilitados; próxima onda 37.434.
- Resultados: 41.303 habilitados, 52,46% de 78.737, 37.434 restantes, barra de progresso.
- Retirados da apresentação os detalhes de CPF, estabilidade, erros por data e feedback isolado. Métricas representam habilitação, não adoção.

- Piloto controlado: selo AI aplicada e bloco sobre MVP da apresentação dos resultados, criado com AI e compartilhado com stakeholders e outras áreas. Link provisório desabilitado e identificado até o autor fornecer o endereço real.

- Piloto controlado em duas colunas alinhadas pelo topo: percurso e equipes à esquerda; apresentação com AI à direita. Em telas estreitas, empilhamento.
