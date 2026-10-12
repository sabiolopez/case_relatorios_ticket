# Direção visual

Versão 1.0 · 7 de outubro de 2026 · padrão consolidado após revisão conjunta

## Princípio

A identidade do portfólio usa fundo claro, grafite, cinzas e dourado contido. A apresentação da Ticket é referência de hierarquia, escala, espaçamento e agrupamento do conteúdo. Não transportar sua paleta vermelha ou identidade de marca para o sistema do portfólio.

A aprovação visual se refere ao tratamento visual e à composição. Não implica troca da família tipográfica nem alteração da copy ou dos fatos do case.

## Aplicação neste projeto

A direção v1.0 consolida os ajustes aprovados no projeto Apresentação de cases - Relatorios. A narrativa local evoluiu para v0.8 sem alterar esses princípios. “Desafio recebido” e “Meu papel” reutilizam categoria/título à esquerda e descrição/bloco/fechamento à direita. A tela de legado conserva a sequência agrupada e agora apresenta os 18 relatórios conforme o roteiro adicional do autor.

Versão visual e versão narrativa são independentes: preservar o look and feel aprovado ao atualizar fatos e sequência. Os exemplos de composição abaixo registram a aprovação visual; os textos atuais são os do HTML e do roteiro vigente.

## Tipos de tela

### Abertura do projeto

Título grande e descrição separada abaixo. Metadados em um bloco independente à direita, com fundo suave, borda fina e distância ampla da mensagem principal. Empresa, plataforma, contexto e período têm rótulos dourados e valores em grafite, com a mesma escala inclusive no período. Em telas menores, o bloco fica abaixo.

### Capa de etapa

Nome da fase, ponto dourado e número discreto opcional. Título de 64–112 px, amplo respiro, sem parágrafo ou lista. A capa marca uma pausa na narrativa.

### Tela de conteúdo

Composição padrão validada: categoria e título à esquerda; descrição, evidência ou conjuntos de informação à direita. Usar proporções conforme a função do conteúdo; não fixar a coluna de texto em uma largura estreita. Para texto com captura, iniciar com proporções 1 / 1,15 e vão de 64 px. O título tem presença, mas a descrição permanece em escala de corpo. Não preencher espaço livre com informação adicional.

Escolher a composição conforme a função: evidência ampla, comparação, indicadores ou tabela podem usar mais largura. O padrão de duas colunas não exige que todas as telas sejam iguais. Em celular, empilhar título e conteúdo em ordem de leitura.

## Escala e cores implementadas

Referência vigente: `../site-relatorios/dist/style.css`, bloco “Conteúdo v0.7”. Valores em CSS pixels, sem exigir tela de tamanho fixo.

| Papel | Valor ou faixa |
|---|---|
| Fundo | #FAFAF8 |
| Texto principal | #2E302D |
| Texto secundário | #70736D |
| Dourado de texto / categoria | #89703B |
| Acento dourado | #BDA46A |
| Fundo de agrupamento | #F0F0EB |
| Borda discreta | #DEDFD6 |
| Fundo de destino / destaque suave | #EEEADF, borda #DCD2BC |
| Título de conteúdo | 30–42 px, peso 650, entrelinha 1,17 |
| Descrição principal | 18 px, entrelinha 1,6; 17 px em celular |
| Corpo em blocos | 16–17 px, entrelinha 1,5–1,6 |
| Subtítulo de bloco | 21–27 px, peso 600 |
| Categoria | 11–12 px, dourado, caixa alta e espaçamento entre letras |
| Fontes e rastreabilidade | No roteiro e documentação; não exibir notas de fonte automaticamente nas telas |
| Conclusão destacada | 19 px, texto claro sobre grafite; 18 px em celular |

Manter a família sans-serif atual. Título e descrição precisam ter escalas e contraste claramente distintos. Não usar o dourado como cor dominante nem como indicação de sucesso ou status sem significado explícito.

## Espaçamento e agrupamento

- Margens laterais responsivas: 24–80 px.
- Categoria → título: 22 px; 14 px em celular.
- Colunas: 48–100 px; 40 px em larguras intermediárias.
- Descrição → próximo conjunto: 32 px; 24 px em celular.
- Conteúdo interno de blocos: 24–30 px.
- Itens de uma lista agrupada: 14–16 px entre blocos.
- Conclusão após evidência: 24–28 px.
- Fontes e notas de produção ficam fora da interface de apresentação.
- Raios de agrupamentos: 16–20 px, borda de 1 px, sem sombra decorativa.

Aproximar informações do mesmo conjunto; separar conjuntos diferentes. Fundos suaves e bordas têm função de agrupamento. Não envolver todo parágrafo em cartão por automatismo.

## Composições já validadas

- Empresa e plataforma: empresa e plataforma empilhadas na coluna esquerda; captura real em moldura discreta na direita, alinhada ao topo da área textual. Descrição curta e termos de produto/públicos; blocos textuais com altura visual próxima à imagem.
- Migração: descrição + dois blocos de origem/destino conectados por seta e rótulo. A representação é conceitual, sem progresso inventado.
- Origem do projeto: descrição + objetivo agrupado + fechamento com linha dourada lateral.
- Legado: contexto + sequência numerada em bloco suave.
- Discovery: três fontes agrupadas + conclusão em fundo grafite e categoria dourada.

Estas composições são exemplos de uso, não novas exigências de conteúdo. Adaptar às evidências reais das próximas telas.

## Navegação estabelecida

Preservar Home / grupo / seção e controles globais na mesma linha do topo. A casinha está presente em todas as telas e leva à capa do projeto. Na abertura, mostrar somente a casinha; em capas de grupo, Home / grupo; em conteúdo, Home / grupo / seção. Último item em dourado, com foco e hover legíveis. Não reintroduzir footer, abas, menus laterais ou navegação local ao criar conteúdo.

## Evidências e enquadramento

Capturas sem distorção ou corte acidental; recortes intencionais com contexto suficiente. Comparações usam escala equivalente quando possível. Reservar a maior área necessária à evidência e manter detalhes relevantes legíveis.

No modo apresentação e na janela alvo, procurar acomodar conteúdo sem cortes; dividir excesso em telas seguintes. Em dispositivos pequenos e zoom de acessibilidade, permitir rolagem vertical natural. Nunca esconder overflow, impedir zoom ou reduzir automaticamente textos para forçar encaixe. Evitar rolagem horizontal.

## Movimento

Preservar a transição existente e suporte a movimento reduzido. Novos efeitos ainda precisam de validação; não acrescentar avanço automático ou revelações que dificultem leitura.

## Padrão de composição com imagem

Aplicar a lógica aprovada de Empresa e plataforma às telas com função semelhante, sem forçar todas as páginas ao mesmo layout.

1. Separar mensagem e evidência em áreas próprias. Não inserir metadados no meio do título/subtítulo.
2. Distribuir a largura antes de reduzir fontes: texto deve usar sua coluna, sem limites internos estreitos que produzam quebras desnecessárias.
3. Iniciar com vão de 64 px no desktop (40 px em largura intermediária), ajustando pela composição. Espaço vazio deve separar conjuntos, sem criar um corredor entre texto e imagem.
4. Aproximar a altura visual do conjunto textual à da imagem. Alinhar as áreas pelo topo; compactar agrupamentos e eliminar repetição, sem omitir informação indispensável.
5. Para dois assuntos introdutórios, empilhar na mesma coluna com cerca de 34 px entre blocos; títulos de 32–36 px e apoio de 17–18 px. São pontos de partida, não obrigação de encaixe.
6. Metadados e públicos usam termos curtos e rótulos claros. Texto descritivo mantém frases curtas quando necessárias ao sentido.
7. Captura do produto deve ser real e relacionada ao argumento. Moldura de tela é uma variante opcional de apresentação, discreta e sem competir com a imagem; análises de detalhes preferem captura frontal ou recorte legível.
8. Em telas menores, empilhar texto e imagem; permitir rolagem vertical e preservar a ordem de leitura.

Não ampliar imagens só para preencher espaço. Não reduzir todo o texto para acomodar um bloco alto. Rever largura, espaçamento, síntese e divisão de telas nessa ordem. Verificar o resultado real na janela de apresentação.

## Uso de dourado e documentação

Dourado em categorias, labels de metadados, último item do breadcrumb e ponto final de títulos quando fizer sentido. Valores e informações permanecem em grafite; apoio em cinza. Não colorir um campo inteiro apenas por ser período.

Notas de fontes e disclaimers de produção não integram o rodapé das telas. Preservar fontes, estado das capturas e pendências no roteiro. Uma ressalva indispensável para interpretar evidência ou resultado continua visível, com copy útil ao público.

As revisões registradas em 06-ajustes-em-avaliacao.md até o ajuste de proporções de Empresa e plataforma estão consolidadas nesta versão. O histórico não deve restaurar regras substituídas.

## Alinhamento e listas — refinamento aprovado

Áreas lado a lado devem alinhar pelo topo, inclusive quando suas alturas diferem. Buscar equilíbrio de altura por largura, síntese e espaçamento, sem deslocar o início da leitura para o centro. Boxes paralelos podem ter altura igual; conteúdo interno começa no topo. Itens enumerados visualmente usam bullets quando não há ordem. Públicos e categorias curtas podem usar tags discretas. Na migração, as frentes pertencem ao box de origem (TEP), com Relatórios destacado como foco do case.

## Capas escuras e transição

Abertura e capas de grupo usam negativo do sistema: grafite #242622, título branco suave #F7F7F4, apoio #B6B9B0, dourado de leitura #CFB67B. Metadados usam superfície #30332D. Navegação acompanha as cores, preservando posição e comportamento. Páginas internas permanecem claras. Troca de fundo e entrada por opacidade/deslocamento vertical de 6 px em 280 ms; movimento reduzido desativa os efeitos. A próxima capa marca a passagem de etapa, sem tela adicional de encerramento.


## Sinalização de AI

Etapas com uso de inteligência artificial exibem selo persistente “AI aplicada” ao lado da categoria da etapa: ícone de brilho discreto, fundo lavanda #EEE8F8, texto #69558C e borda #D8CFEE. Usar apenas quando houver uso real de AI descrito no conteúdo. Dourado continua destinado aos destaques do case. Orientações de LLM permanecem em expansão secundária por clique ou teclado, sem abertura automática por hover.
