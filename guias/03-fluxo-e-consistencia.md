# Fluxo de produção e consistência

## Produção de um case

1. **Brief:** definir público, duração, mensagem, papel e restrições.
2. **Inventário:** reunir evidências, registrar fontes e lacunas.
3. **Roteiro:** distribuir argumentos pelas fases reais do trabalho.
4. **Storyboard:** uma linha por tela, com mensagem, evidência e composição.
5. **Conteúdo:** escrever títulos, apoio e notas; revisar atribuições e resultados.
6. **Estudo visual:** aplicar a direção aceita em algumas telas representativas.
7. **Revisão:** conferir densidade, respiro, legibilidade e orientação.
8. **Implementação:** construir usando tokens e componentes compartilhados.
9. **Ensaio:** apresentar no tempo previsto, inclusive saltos para perguntas.
10. **Entrega:** registrar versão, limitações e pendências.

O site está implementado e a direção visual v1.0 foi aprovada. Novas telas devem seguir os guias e os estilos compartilhados existentes. Não tratar imagens geradas como prova de funcionamento de navegação ou motion.

## Sistema compartilhado vigente

Manter uma fonte única para tokens de tipografia, cor, espaçamento e movimento. Todas as telas consomem esses valores; não repetir medidas e estilos arbitrários em cada página.

Biblioteca mínima: estrutura da apresentação, breadcrumb e controles globais no topo, título de capa, título de conteúdo, texto de apoio, quadro de evidência, legenda, anotação, tabela e bloco de métrica. As composições usam esses componentes; não recriam sua aparência.

Separar dados do case de composição e estilo. Conteúdo pode variar sem alterar a identidade.

## Quando surge uma necessidade nova

1. Procurar um componente ou composição existente.
2. Reutilizar se atender à necessidade.
3. Criar uma variante documentada se o papel continuar o mesmo.
4. Criar um componente compartilhado se existir um papel realmente novo.
5. Registrar finalidade, limites, estados e exemplo de uso.
6. Conferir o impacto em capas, conteúdo com imagem, tabelas e resultados.
7. Atualizar documentação e versão do sistema.

Não copiar um componente para ajustar apenas uma tela. Evitar exceções locais que depois divergem. Exceções necessárias devem ter justificativa explícita e passar pela revisão visual.

## Estados e interação

Definir estados ativo, foco, hover, desabilitado e carregamento quando aplicáveis. Controles precisam funcionar por teclado. Atalhos não podem interceptar a digitação nos campos do futuro editor.

Preservar o comportamento implementado: controles e setas avançam/voltam telas; casinha retorna à capa e breadcrumb informa grupo/seção. Não introduzir abas ou controles locais sem reabrir a decisão de design.

## Revisão antes de apresentar

- [ ] Cada tela tem uma mensagem principal identificável.
- [ ] Capas usam tipografia; telas de conteúdo priorizam evidência.
- [ ] Não há segunda navegação dentro do conteúdo.
- [ ] Breadcrumb e posição global estão corretos no topo.
- [ ] Nada fica cortado ou sobreposto; celular e zoom permitem rolagem vertical natural, sem rolagem horizontal.
- [ ] Texto e detalhes importantes da evidência são legíveis no compartilhamento.
- [ ] Fontes, pesos, cores, espaçamentos e controles seguem o sistema.
- [ ] Não há cartões, bordas ou adornos sem função clara.
- [ ] Métricas e afirmações têm base; exemplos fictícios estão identificados.
- [ ] Sua contribuição está diferenciada do trabalho coletivo.
- [ ] Imagens carregam e o avanço funciona por teclado.
- [ ] Motion mantém a leitura e respeita movimento reduzido.
- [ ] O ensaio cabe no tempo, com margem para perguntas.

Os itens de interação e motion são verificados somente quando houver implementação.

## Registro de mudanças

Para cada evolução, registrar data, versão, motivo, tokens/componentes afetados e telas revisadas. Mudanças globais devem ser verificadas em um conjunto representativo de composições. Corrigir a fonte compartilhada quando houver divergência.

## Prompt reutilizável para estudos de imagem

“Crie uma imagem de uma tela 16:9 para este case. Siga os guias de direção visual e conteúdo. Use identidade editorial sans-serif, marfim, quase preto e acento ocre discreto. Preserve breadcrumb e controles globais no topo da implementação atual. Não inclua abas nem navegação local. Para capa, use apenas o nome da fase com tipografia grande e respiro. Para conteúdo, use categoria dourada, título de 30–42 px e apoio de 16–18 px; organize título à esquerda e conteúdo à direita quando adequado, com agrupamentos funcionais e fundos suaves. Não invente resultados. Conteúdo: [título, evidência, apoio]. Tipo: [capa/conteúdo]. Fase e posição: [valores].”

Geração de imagens pode variar fontes e medidas. Usar os estudos para escolher composição; a consistência exata depende do sistema implementado.

## Revisão visual v1.0 para novas telas

- [ ] Título claramente maior e mais destacado que a descrição.
- [ ] Texto principal em grafite, apoio em cinza, categorias e acentos em dourado.
- [ ] Elementos do mesmo conjunto próximos; conjuntos separados por 24–32 px ou mais conforme a composição.
- [ ] Blocos suaves e bordas usados somente quando organizam informação.
- [ ] Composição escolhida pela função do conteúdo; não repetir duas colunas se a evidência precisa de toda a largura.
- [ ] Conferência visual em desktop e celular, incluindo quebras de título e ausência de overflow horizontal.
- [ ] Copy e fontes preservadas durante alterações de estilo.

Ao criar, reutilizar primeiro o bloco “Conteúdo v0.7” de `site-relatorios/dist/style.css`. Novas variantes devem ser compartilhadas e documentadas, sem empilhar ajustes arbitrários para uma única tela.

## Conferência de proporção e reaproveitamento

- [ ] Coluna de texto aproveitada sem limites internos que causem quebras excessivas.
- [ ] Vão entre texto e imagem separa as áreas sem deixar um corredor vazio.
- [ ] Altura e peso visual dos dois lados equilibrados; imagem sem corte ou distorção.
- [ ] Empresa, plataforma ou outros assuntos distintos têm agrupamentos e espaçamento claros.
- [ ] Metadados separados do título e subtítulo; labels dourados e valores em grafite.
- [ ] Termos curtos usados para atributos e públicos, sem perder relações essenciais.
- [ ] Home visível inclusive na capa; clique retorna ao início; breadcrumb acompanha o grupo e a seção.
- [ ] Fontes registradas no roteiro, sem notas de produção repetidas na interface.

Antes de cada nova página, escolher uma composição existente pela função (capa, texto com evidência, comparação, sequência). Ajustar a variante compartilhada quando houver um aprendizado reutilizável. Conferir uma página representativa dessa variante antes de aplicar às demais. Não reformular páginas de outra função apenas para padronizar a aparência.

Ao receber aprovação, incorporar as regras nos guias vigentes e registrar a evolução no histórico. Não manter instruções contraditórias entre o guia e o histórico. Mudança documental não exige alteração automática das telas já aprovadas.
