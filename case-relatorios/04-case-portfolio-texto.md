# Case de portfólio — Módulo de relatórios do Portal Ticket

Documento textual para leitura e posterior composição de seções ou protótipo. Os nomes de componentes identificam a estrutura do conteúdo; não representam uma implementação.

## Referência editorial e fontes

A organização segue os dois cases de referência: abertura, contexto, desafio, solução, diretrizes, processo, evidências, resultados e aprendizados.

Fonte principal: apresentação atual em `site-relatorios/dist/index.html`, revisada integralmente. Fontes complementares: `00-base-de-conhecimento.txt`, `02-roteiro-do-autor.txt` e `03-revisao-narrativa.md`. A apresentação prevalece quando há divergências. Os documentos anteriores de estrutura e os guias foram consultados como contexto editorial.

A redação foi adaptada para leitura contínua. Títulos e agrupamentos são sínteses do conteúdo existente. Os aprendizados finais sintetizam achados documentados, sem acrescentar acontecimentos ou resultados. As observações editoriais ao final não integram o texto público do case.

---

## Section 1 — Hero

### Componente: identificação do projeto

**Eyebrow:** Projeto

**Heading / H1:** Redesenho da experiência de relatórios no Portal Ticket

**Subheading:** Da migração dos relatórios do legado a uma arquitetura comum de consulta, personalização e exportação de informações.

**Tags:** B2B · Gestão de benefícios · Migração de plataforma · Arquitetura de informação

---

## Section 2 — Contexto e ficha do projeto

### Componente: texto de contexto

**Parágrafo 1:** A Ticket Edenred precisava avançar na migração do TEP, seu portal legado, para o Portal Ticket. O novo portal atendia inicialmente clientes de pequeno porte e precisava incorporar funcionalidades utilizadas por empresas médias, grandes e Top Accounts. Relatórios era uma das frentes necessárias para viabilizar essa transição e o desligamento da arquitetura antiga.

**Parágrafo 2:** O projeto começou com a proposta de reproduzir os 18 relatórios existentes em três meses. Com a saída do designer previsto, pedi para assumir a frente de design. A iniciativa não pertencia a nenhuma squad e, naquele momento, a formação reunia apenas produto e design, sem equipe de engenharia. Em parceria com o GPM, investiguei a experiência existente e as necessidades dos clientes para estruturar a nova proposta.

### Componente: ficha do projeto

- **Empresa:** Ticket Edenred
- **Plataforma:** Portal Ticket
- **Segmento e mercado:** B2B · Gestão de benefícios
- **Usuários:** RH · Financeiro · Administrativo
- **Frente:** Migração do legado · Relatórios
- **Papel:** Designer responsável pela frente de design
- **Colaboração inicial:** GPM responsável por produto
- **Período informado na apresentação:** Q1 e Q2 de 2026

---

## Section 3 — O desafio

### Componente: introdução do desafio

**Eyebrow:** O desafio

**Heading / H2:** Migrar os relatórios sem reproduzir as limitações do legado

**Body:** O escopo inicial previa levar os 18 relatórios do TEP para o Portal Ticket como estavam. A investigação mostrou uma experiência fragmentada, com estruturas fixas, pouca personalização e forte dependência de exportação. Também revelou necessidades de grandes clientes atendidas manualmente por Operações, fora do portal.

### Componente: grupo de cards — problemas centrais

#### Card 1

**Heading / H3:** Relatórios fragmentados

**Body:** Cada relatório tinha sua própria tela, filtros e estrutura. Necessidades semelhantes apareciam em experiências diferentes, com inconsistências de organização e apresentação.

#### Card 2

**Heading / H3:** Pouca flexibilidade de consulta

**Body:** Tabelas fixas e filtros limitados restringiam os recortes disponíveis. A exportação em XLSX ou PDF era a principal saída, e alguns resultados dependiam de processamento assíncrono.

#### Card 3

**Heading / H3:** Necessidades fora do self-service

**Body:** Grandes Contas e Top Accounts solicitavam relatórios com campos, recortes e formatos específicos. Operações extraía os dados, ajustava planilhas e enviava os arquivos manualmente.

---

## Section 4 — A solução

### Componente: apresentação da solução

**Eyebrow:** A solução

**Heading / H2:** Uma arquitetura comum para trabalhar com a informação

**Body — parágrafo 1:** Reorganizamos as necessidades em quatro grupos principais: Pedidos e Documentos Fiscais, Beneficiários, Cartões e Reversões. A proposta passou a compartilhar componentes e um modelo de interação entre os domínios, preservando seus dados, filtros e regras específicos.

**Body — parágrafo 2:** A experiência combina busca, filtros, totalizadores, configuração de colunas, detalhamento e exportação. A mudança foi de escolher entre relatórios fixos para consultar e organizar as informações dentro das possibilidades oferecidas pelo produto.

### Componente: síntese da mudança

**Label:** Mudança de abordagem

**Texto em destaque:** De “quais relatórios migrar” a “quais capacidades oferecer”.

---

## Section 5 — Diretrizes do projeto

### Componente: título do grupo

**Heading / H2:** Diretrizes do projeto

### Componente: grupo de quatro cards

#### Card 1

**Heading / H3:** Organização por domínio

**Body:** Reunir necessidades semelhantes em uma arquitetura unificada, com componentes compartilhados entre Pedidos, Beneficiários, Cartões e Reversões.

#### Card 2

**Heading / H3:** Flexibilidade para diferentes necessidades

**Body:** Permitir recortes de consulta com filtros principais e avançados, salvamento de filtros e seleção, ordenação e reordenação de colunas.

#### Card 3

**Heading / H3:** Exploração dentro do portal

**Body:** Oferecer totalizadores, status, resumos filtrados e acesso aos detalhes para apoiar a compreensão das informações durante a consulta.

#### Card 4

**Heading / H3:** Continuidade fora do portal

**Body:** Preservar a exportação de tabelas e detalhes para os fluxos que continuam em outras ferramentas, com formatos e padrões reutilizáveis conforme o contexto.

---

## Section 6 — Processo de design

### Componente: introdução do processo

**Heading / H2:** Processo de design

**Body:** Combinamos análise da experiência existente, dados de utilização, demandas dos clientes e referências de mercado para reformular o escopo. A proposta foi prototipada, discutida com as áreas envolvidas e validada com clientes antes da disponibilização progressiva.

### Componente: etapas resumidas — seis itens

#### Etapa 01

**Heading / H3:** Entendimento do legado e do uso

**Body:** Analisei os 18 relatórios, suas estruturas e limitações. Os dados de acesso, frequência, tempo de uso e recorrência ajudaram a identificar concentração de uso, sobreposição de necessidades e diferenças entre segmentos.

#### Etapa 02

**Heading / H3:** Necessidades atendidas fora do portal

**Body:** Com gerentes de negócio, Operações e chamados de suporte, investigamos demandas recorrentes. A análise de 43 arquivos personalizados, apoiada por LLM, ajudou a reconhecer grupos, filtros e campos relevantes.

#### Etapa 03

**Heading / H3:** Referências e definição da arquitetura

**Body:** Benchmark manual e pesquisa com LLMs complementaram os achados internos. As necessidades identificadas orientaram uma arquitetura por domínios, com filtros flexíveis, personalização, exploração e exportação.

#### Etapa 04

**Heading / H3:** Prototipação da experiência

**Body:** O trabalho passou por wireframes no Figma Design e protótipos com Figma Make e Google Antigravity. Bases de dados e interações próximas do uso real permitiram explorar a complexidade além de telas estáticas.

#### Etapa 05

**Heading / H3:** Alinhamento e validação

**Body:** A proposta foi alinhada com a tribo, engenharia, dados, direção e gestão. O teste de usabilidade envolveu cinco clientes: dois grandes, dois médios e um de pequeno porte.

#### Etapa 06

**Heading / H3:** Apoio à adoção e acompanhamento

**Body:** Estruturamos orientação para clientes e áreas internas, um canal de feedback e um piloto controlado. Para acompanhar a expansão, usei o assistente de AI do Datadog na criação de consultas e dashboards de comportamento e performance.

---

## Section 7 — Evidências e decisões do processo

Esta seção preserva o aprofundamento do conteúdo. Os componentes abaixo são textuais; não incluem produção ou inserção de imagens.

### Componente 7.1: análise de comportamento

**Eyebrow:** Discovery · Dados de utilização

**Heading / H3:** O uso se concentrava em poucas experiências

**Body:** Entre os 18 relatórios, acesso e engajamento se concentravam em poucos grupos: detalhes do pedido, documentos fiscais, beneficiários e cartões. Vários relatórios tratavam do mesmo assunto em formatos diferentes, sinalizando uma oportunidade de reuni-los.

**Body complementar:** A utilização caía acentuadamente entre Grandes Contas e Top Accounts. Esse recorte abriu uma pergunta: esses clientes precisavam menos dos relatórios ou resolviam suas necessidades por outros caminhos?

**Label da hipótese:** Baixo uso não significava necessariamente baixa necessidade.

### Componente 7.2: voz do cliente

**Eyebrow:** Discovery · Demandas dos clientes

**Heading / H3:** Parte importante da demanda era atendida por Operações

**Body:** Com pouco tempo e dificuldade para agendar entrevistas, buscamos fontes próximas das necessidades dos clientes: gerentes de negócio, Operações e chamados de suporte. Os relatórios eram utilizados principalmente em consultas pontuais e na geração de documentos de comprovação para Financeiro, auditorias, órgãos regulatórios, colaboradores e outras áreas internas.

**Body complementar:** Pedidos, documentos fiscais e beneficiários apareciam como necessidades recorrentes. Os chamados também revelaram demandas por acompanhamento de cartões e reversões não cobertas pela experiência existente. Grandes clientes recebiam arquivos personalizados, produzidos manualmente por Operações, que não apareciam no inventário do portal.

**Texto em destaque:** Os dados de uso do portal mostravam apenas parte da necessidade de relatórios.

### Componente 7.3: análise de relatórios personalizados

**Eyebrow:** Discovery · AI aplicada

**Heading / H3:** Quarenta e três arquivos ajudaram a revelar padrões

**Body:** Investigamos os arquivos produzidos por Operações para reconhecer grupos de relatórios, campos e colunas recorrentes, diferenças entre clientes e combinações frequentes de informações.

**Body complementar:** A LLM apoiou a normalização de nomenclaturas, o agrupamento por tema, a identificação de campos equivalentes e a comparação de estruturas e exceções. Os padrões serviram de insumo para decisões de produto e ajudaram a identificar quatro grupos principais: Pedidos e Documentos Fiscais, Beneficiários, Cartões e Reversões, com seus filtros e campos.

**Componente interno — detalhe metodológico:** A orientação utilizada na análise pedia a comparação dos arquivos, a normalização de campos equivalentes e a identificação de temas, recorrências, combinações frequentes e exceções relevantes.

### Componente 7.4: análise de mercado

**Eyebrow:** Discovery · Referências externas

**Heading / H3:** As referências reforçaram a direção encontrada internamente

**Body:** Combinamos benchmark manual e pesquisa com LLMs dentro e fora do segmento de benefícios. A análise considerou arquitetura de relatórios, componentes, interações, formas de consulta e exploração e campos recorrentes.

**Itens de conteúdo:**

- **Padrões familiares:** filtros, tabelas, ações e fluxos próximos de modelos conhecidos pelos usuários.
- **Autosserviço e personalização:** consulta e organização de informações com autonomia.
- **Exploração em profundidade:** acesso progressivo aos detalhes durante o uso.
- **Cobertura:** referências externas para comparar os campos e informações identificados internamente.

### Componente 7.5: matriz de decisões

**Eyebrow:** Design · Escopo e requisitos

**Heading / H3:** As necessidades orientaram capacidades da solução

| Necessidade identificada | Decisão de design | Requisitos definidos |
|---|---|---|
| Fragmentação e inconsistência | Arquitetura unificada | Pedidos, Beneficiários, Cartões e Reversões; componentes compartilhados |
| Diferentes recortes de consulta | Filtros flexíveis | Filtros principais e avançados; salvar e restaurar |
| Exportar para compreender | Exploração no portal | Totalizadores, status e resumo filtrado |
| Perfis e níveis de análise distintos | Personalização e detalhamento | Ordenar, selecionar e reordenar colunas; acesso ao detalhe |
| Fluxos continuam fora do portal | Exportação e reutilização | XLS e PDF; tabela e detalhe; padrões reutilizáveis |

### Componente 7.6: comparação textual — antes e proposta

**Heading / H3:** Uma estrutura compartilhada em lugar de relatórios isolados

| Experiência do legado | Nova proposta |
|---|---|
| Escolha de um relatório específico | Entrada por domínio de informação |
| Filtros limitados por relatório | Filtros principais e avançados |
| Tabelas fixas | Configuração das informações exibidas |
| Exportação como principal saída | Consulta, resumo e detalhamento no portal, com exportação |
| Variações em páginas independentes | Componentes e padrões de interação compartilhados |

### Componente 7.7: prototipação

**Eyebrow:** Design · AI aplicada

**Heading / H3:** Protótipos para explorar dados e interações

**Body:** Os wireframes e drafts foram desenvolvidos no Figma Design. Com Figma Make e Google Antigravity, criamos protótipos com bases de dados e interações próximas do uso real para explorar a complexidade dos relatórios.

**Identificação dos materiais existentes:** Wireframe da consulta de pedidos e documentos fiscais; wireframe com detalhamento lateral; interface final da consulta; interface final com detalhamento lateral.

### Componente 7.8: alinhamento e validação

**Heading / H3:** Uma experiência compartilhada exigia alinhamentos entre áreas

**Body:** A proposta cruzava dados e interações de diferentes squads. O alinhamento com a tribo considerou esses contextos; com engenharia e dados, tratou da viabilidade técnica; com direção e gestão, da direção da solução. O teste de usabilidade reuniu cinco clientes de portes diferentes.

**Subheading:** A validação também apontou necessidades de evolução

**Body complementar — fonte complementar:** Os registros da base de conhecimento descrevem percepção de simplicidade e dinamismo, possibilidade de ajustar a visualização e ausência de bloqueios críticos de navegação nos testes. Também registram lacunas: informações e filtro de departamento em Beneficiários, PDF em determinados downloads e exportação em lote em algumas visualizações de detalhes.

**Nota de interpretação:** Esses registros são sinais qualitativos da validação; não medem satisfação ou adoção da base inteira e não confirmam a entrega posterior das melhorias.

### Componente 7.9: direção aprovada e desenvolvimento

**Heading / H3:** A nova arquitetura foi aprovada e o prazo foi ampliado

**Body:** A direção reconheceu o valor da nova arquitetura para a experiência e para a migração. Os objetivos eram oferecer uma experiência melhor que a do legado, reduzir o risco de churn durante a transição e evitar o retorno à plataforma antiga.

**Body complementar:** Sem recursos internos disponíveis, a Stefanini foi contratada para desenvolver a entrega. O prazo para completar o projeto passou dos três meses previstos inicialmente para seis meses.

### Componente 7.10: apoio à adoção

**Heading / H3:** Orientação para quem migrava e para quem já utilizava o portal

**Body:** Em parceria com o GPM, estruturamos uma estratégia para apoiar os dois públicos na mudança de experiência.

**Itens de conteúdo:**

- **Onboarding interno:** manuais para Operações, CX e Vendas.
- **Orientação no produto:** FAQ com vídeo e perguntas frequentes, acessado pela página de relatórios.
- **Escuta contínua:** canal de contato e feedback dedicado ao módulo.

**Detalhe de produção — fonte complementar:** Sem recursos para desenvolver a página de orientação, ela foi criada e publicada com Figma Make.

### Componente 7.11: piloto e acompanhamento

**Eyebrow:** Rollout · Piloto controlado

**Heading / H3:** Acompanhamento próximo antes de ampliar a base

**Body:** O piloto começou com um cliente, avançou para 100 e chegou a 303 clientes, com acompanhamento direto de Operações, gerentes de negócio e Produto. Um MVP de apresentação, criado com apoio de AI, compartilhou os resultados do piloto com stakeholders e outras áreas.

### Componente 7.12: instrumentação

**Eyebrow:** Rollout · AI aplicada

**Heading / H3:** Recuperar visibilidade para acompanhar a expansão

**Body:** Após o piloto, ampliar a base exigia dados de uso, mas a instrumentação não havia sido prevista. Usei o assistente de AI do Datadog para explorar os dados disponíveis, criar consultas e montar dois dashboards.

**Itens de conteúdo:**

- **Comportamento e uso:** acompanhamento de adoção, acessos, interações por rota e engajamento.
- **Performance e erros:** acompanhamento de carregamento, erros e desempenho das APIs.

---

## Section 8 — Resultados parciais

### Componente: introdução dos resultados

**Eyebrow:** Rollout · Posição em 22/09

**Heading / H2:** Mais da metade da base habilitada

**Body:** Após o piloto com 303 clientes, a disponibilização avançou em ondas de 1.000, 15.000 e 25.000 clientes. Na posição apresentada em 22/09, o módulo estava habilitado para 41.303 clientes, equivalentes a 52,46% da base de 78.737 clientes.

### Componente: grupo de três indicadores

#### Indicador 1

**Valor:** 41.303

**Label:** Clientes habilitados

**Descrição:** Clientes com acesso liberado ao módulo na posição de 22/09.

#### Indicador 2

**Valor:** 52,46%

**Label:** Da base total

**Descrição:** Participação dos clientes habilitados em uma base de 78.737 clientes.

#### Indicador 3

**Valor:** 37.434

**Label:** Clientes restantes

**Descrição:** Parcela da base ainda prevista para a próxima onda de disponibilização.

### Componente: resultado estrutural

**Heading / H3:** Uma nova lógica para organizar e evoluir relatórios

**Body:** O projeto substituiu a proposta de replicar páginas independentes por uma arquitetura de domínios com um modelo comum de consulta, configuração, detalhamento e exportação. Essa estrutura amplia as possibilidades de resolver necessidades no Portal Ticket e contribui para a cobertura funcional necessária à migração.

### Componente: contexto de leitura dos indicadores

**Body:** Os números representam habilitação de acesso na data informada. Não demonstram uso efetivo, conclusão da migração, redução de chamados ou impacto em retenção. A redução do risco de churn era um objetivo da transição, não um resultado medido apresentado neste case.

---

## Section 9 — O que esse projeto me ensinou

### Componente: título da seção

**Heading / H2:** O que esse projeto me ensinou

### Componente: grupo de três aprendizados

#### Aprendizado 1

**Heading / H3:** O uso do portal mostra apenas parte da necessidade

**Body:** A baixa utilização entre grandes clientes ganhou outro significado quando investigamos os relatórios produzidos por Operações. Cruzar comportamento e demandas fora do produto foi essencial para compreender o problema.

#### Aprendizado 2

**Heading / H3:** Migrar também exige rever a arquitetura

**Body:** Reproduzir os relatórios existentes manteria limitações que já não atendiam parte dos clientes. Organizar necessidades por domínio permitiu construir uma estrutura comum, com flexibilidade para diferentes recortes de informação.

#### Aprendizado 3

**Heading / H3:** Ampliar a base exige orientação e visibilidade

**Body:** A expansão trouxe necessidades de apoio à adoção e acompanhamento de uso. Manuais, FAQ e um canal de feedback apoiaram a mudança, enquanto os dashboards recuperaram visibilidade diante da lacuna de instrumentação.

---

## Notas editoriais — fora do conteúdo público

### Precedência e limites das fontes

- A apresentação atual substitui o prazo inicial de seis meses citado no roteiro: o prazo inicial era de três meses e foi ampliado para seis após a aprovação da nova direção.
- Para o piloto, prevalece a sequência de 1, 100 e 303 clientes. As sequências anteriores e aproximadas não foram incorporadas.
- Para resultados, prevalece a posição de 22/09: 41.303 habilitados, 52,46% de 78.737 clientes e 37.434 restantes. Não foram incorporados os números anteriores de 6.500 clientes e 13 solicitações de retorno.
- O período Q1 e Q2 de 2026 é o metadado da abertura. O acompanhamento de rollout está datado de 22/09 na apresentação. Ambos foram preservados com sua identificação; a relação entre o período da atuação e o acompanhamento posterior precisa ser esclarecida antes da publicação.
- Não foi acrescentado um cargo ou senioridade que não aparece na apresentação deste projeto.
- A análise inicial de necessidades utilizou fontes intermediárias próximas dos clientes. Os cinco participantes são apresentados como teste de usabilidade; não foram somados a outro grupo de cinco entrevistas da base anterior.
- Os sinais e lacunas qualitativos da validação vêm da base complementar, não do texto da apresentação final. Permanecem identificados para revisão de sua pertinência e atualidade.
- O roteiro menciona um fluxo incremental de refinamento, validação e handoff. A apresentação apenas lista o handoff entre as etapas e não detalha sua execução. Não foram incorporadas cadências de duas semanas nem a sequência antiga de backlog como fatos finais.
- “Detalhe em modal” aparece na matriz da apresentação, enquanto os materiais visuais identificam um drawer. O texto usa “detalhamento” ou “detalhamento lateral”, sem resolver por inferência a divergência de nomenclatura.
- A matriz da apresentação utiliza XLS; a descrição do legado utiliza XLSX e PDF. As denominações foram mantidas em seus respectivos contextos, sem generalizar formatos para todos os domínios.
- O uso de AI foi descrito no processo de trabalho; não foi atribuído ao produto um recurso de AI para os usuários.
- Os volumes anuais de uso do TEP, ainda marcados para revisão na base, não foram incorporados.
- O material não comprova desligamento do legado, redução de custos, redução de chamados, aumento de retenção ou uso efetivo por todos os clientes habilitados.

### Mapa de rastreabilidade

| Seção do documento | Fonte principal na apresentação | Complemento |
|---|---|---|
| 1. Hero | Abertura; escopo | Síntese editorial |
| 2. Contexto e ficha | Plataforma; migração; origem; papel; abertura | — |
| 3. Desafio | Legado; voz do cliente; origem | — |
| 4. Solução | Escopo; personalizados; protótipo | Base §§ 10–14 |
| 5. Diretrizes | Escopo; mercado | Síntese editorial das decisões |
| 6. Processo | Etapas; investigação; voz do cliente; personalizados; mercado; protótipo; validação; engajamento; instrumentação | Agrupamento editorial em seis etapas |
| 7. Evidências | Todas as telas de discovery, design e piloto; instrumentação | Base §§ 19–20 para sinais e lacunas; roteiro para produção do FAQ |
| 8. Resultados | Plano de rollout; resultados parciais | Base §§ 21–23 para resultado estrutural |
| 9. Aprendizados | Investigação; voz do cliente; escopo; engajamento; instrumentação | Síntese dos achados documentados |

A navegação de outros projetos e o rodapé dos cases de referência não foram preenchidos: pertencem ao site, não ao conteúdo deste projeto.
