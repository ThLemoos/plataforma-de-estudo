// ===================== DADOS =====================

const PROVA_DATE = new Date('2026-08-16');
const INICIO_DATE = new Date('2026-06-01');

const materias_info = [
    { id: 'mat', nome: 'Matemática', questoes: 12, cor: '#3b82f6' },
    { id: 'port', nome: 'Português', questoes: 18, cor: '#8b5cf6' },
    { id: 'fis', nome: 'Física', questoes: 6, cor: '#ef4444' },
    { id: 'qui', nome: 'Química', questoes: 6, cor: '#f59e0b' },
    { id: 'bio', nome: 'Biologia', questoes: 6, cor: '#10b981' },
    { id: 'hist', nome: 'História', questoes: 6, cor: '#f97316' },
    { id: 'geo', nome: 'Geografia', questoes: 6, cor: '#06b6d4' },
    { id: 'filo', nome: 'Fil./Socio.', questoes: 8, cor: '#a78bfa' },
    { id: 'info', nome: 'Informática', questoes: 4, cor: '#6b7280' },
];

const cronograma = {
    junho: [
        {
            id: 'j1', titulo: 'Semana 1 — 1 a 7 de junho', sub: 'Matemática + Português + História (base)', badge: 'alta', icon: '🧱',
            dica: 'Esta semana você quebra o gelo. Não tente decorar tudo — entenda os conceitos. A primeira redação é para diagnóstico, não perfeição.',
            dias: [
                { id: 'j1d1', data: 'Seg 2/6', topico: 'Matemática: porcentagem e variação percentual', detalhe: 'Variação percentual, aumento e desconto sucessivos, aplicações do dia a dia. Resolver 20 questões.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j1d2', data: 'Seg 2/6', topico: 'Português: interpretação de texto', detalhe: 'Ideia central, inferência, vocabulário contextual. Ler 2 textos completos + questões.', tempo: '18h–20h', mat: 'port' },
                { id: 'j1d3', data: 'Ter 3/6', topico: 'Matemática: razão, proporção e regra de três', detalhe: 'Regra de três simples e composta, grandezas direta e inversamente proporcionais.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j1d4', data: 'Ter 3/6', topico: 'História: República Velha (1889–1930)', detalhe: 'Proclamação, política do café com leite, coronelismo, tenentismo, Revolução de 1930.', tempo: '18h–20h', mat: 'hist' },
                { id: 'j1d5', data: 'Qua 4/6', topico: 'Matemática: juros simples e compostos', detalhe: 'M=C(1+it) e M=C(1+i)^n, capitalização, problemas de financiamento.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j1d6', data: 'Qua 4/6', topico: 'Português: gramática — concordância verbal', detalhe: 'Regras principais, casos especiais (quem, que, se). 20 exercícios.', tempo: '18h–20h', mat: 'port' },
                { id: 'j1d7', data: 'Qui 5/6', topico: 'Matemática: funções do 1º grau', detalhe: 'Gráficos, raiz da função, crescimento e decrescimento, aplicações.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j1d8', data: 'Qui 5/6', topico: 'História: Era Vargas e Estado Novo', detalhe: '1930–1945: trabalhismo, industrialização, CLT, Constituição 1937.', tempo: '18h–20h', mat: 'hist' },
                { id: 'j1d9', data: 'Sex 6/6', topico: 'Matemática: função do 2º grau', detalhe: 'Parábola, vértice, discriminante (Δ), raízes, máximo e mínimo.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j1d10', data: 'Sex 6/6', topico: 'Português: concordância nominal e crase', detalhe: 'Regras de concordância nominal. Crase: obrigatória, proibida, facultativa.', tempo: '18h–20h', mat: 'port' },
                { id: 'j1d11', data: 'Sáb 7/6', topico: 'Redação 1 + simulado de questões', detalhe: 'Tema: segurança pública e violência urbana. Depois: 20 questões variadas cronometradas.', tempo: '08h–12h', mat: 'port' },
            ]
        },
        {
            id: 'j2', titulo: 'Semana 2 — 8 a 14 de junho', sub: 'Álgebra + Gramática + Ditadura Militar', badge: 'alta', icon: '📐',
            dica: 'Humanas começa a ganhar forma. Use mapas mentais para conectar eventos históricos — não estude datas isoladas, estude causas e consequências.',
            dias: [
                { id: 'j2d1', data: 'Seg 8/6', topico: 'Matemática: progressões (PA e PG)', detalhe: 'Termo geral, soma dos termos, interpolação, PG infinita.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j2d2', data: 'Seg 8/6', topico: 'Português: regência verbal e nominal', detalhe: 'Verbos que exigem preposição (assistir, chegar, gostar). Regência nominal.', tempo: '18h–20h', mat: 'port' },
                { id: 'j2d3', data: 'Ter 9/6', topico: 'Matemática: geometria plana — triângulos', detalhe: 'Teorema de Tales, semelhança, Pitágoras, área = b·h/2.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j2d4', data: 'Ter 9/6', topico: 'História: Ditadura Militar (1964–1985)', detalhe: 'AI-5, anos de chumbo, abertura gradual, Diretas Já, Constituição 1988.', tempo: '18h–20h', mat: 'hist' },
                { id: 'j2d5', data: 'Qua 10/6', topico: 'Matemática: geometria plana — círculo e polígonos', detalhe: 'Área e perímetro de quadriláteros, área e comprimento do círculo.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j2d6', data: 'Qua 10/6', topico: 'Português: sintaxe — sujeito, predicado, objetos', detalhe: 'Tipos de sujeito, predicado verbal/nominal, objeto direto e indireto.', tempo: '18h–20h', mat: 'port' },
                { id: 'j2d7', data: 'Qui 11/6', topico: 'Matemática: trigonometria no triângulo retângulo', detalhe: 'Seno, cosseno, tangente; relações trigonométricas; aplicações.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j2d8', data: 'Qui 11/6', topico: 'História: 1ª e 2ª Guerra Mundial', detalhe: 'Causas, desenvolvimento, consequências. Nazismo, fascismo, Holocausto.', tempo: '18h–20h', mat: 'hist' },
                { id: 'j2d9', data: 'Sex 12/6', topico: 'Matemática: geometria analítica — ponto e reta', detalhe: 'Distância entre pontos, equação da reta, coeficiente angular.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'j2d10', data: 'Sex 12/6', topico: 'Português: orações coordenadas e subordinadas', detalhe: 'Tipos e valores dos conectivos: causa, consequência, concessão, condição.', tempo: '18h–20h', mat: 'port' },
                { id: 'j2d11', data: 'Sáb 13/6', topico: 'Redação 2 + simulado de português', detalhe: 'Tema: papel da polícia em uma democracia. Simulado: 18 questões de português.', tempo: '08h–12h', mat: 'port' },
            ]
        },
        {
            id: 'j3', titulo: 'Semana 3 — 15 a 21 de junho', sub: 'Física + Literatura + Geografia', badge: 'med', icon: '⚛️',
            dica: 'Primeira semana de Física — a Vunesp cobra aplicação, não teoria pura. Foque nas fórmulas principais e pratique com questões de contexto real.',
            dias: [
                { id: 'j3d1', data: 'Seg 15/6', topico: 'Física: cinemática (MU e MUV)', detalhe: 'Velocidade média, aceleração, equações de Torricelli, queda livre.', tempo: '14h30–16h30', mat: 'fis' },
                { id: 'j3d2', data: 'Seg 15/6', topico: 'Português: figuras de linguagem', detalhe: 'Metáfora, metonímia, ironia, hipérbole, antítese, eufemismo.', tempo: '18h–20h', mat: 'port' },
                { id: 'j3d3', data: 'Ter 16/6', topico: 'Física: leis de Newton e forças', detalhe: '1ª, 2ª e 3ª lei, força resultante, atrito estático e cinético, plano inclinado.', tempo: '14h30–16h30', mat: 'fis' },
                { id: 'j3d4', data: 'Ter 16/6', topico: 'Geografia: geopolítica e globalização', detalhe: 'Blocos econômicos (Mercosul, UE), divisão Norte-Sul, países emergentes.', tempo: '18h–20h', mat: 'geo' },
                { id: 'j3d5', data: 'Qua 17/6', topico: 'Física: energia, trabalho e potência', detalhe: 'Trabalho = F·d·cosθ, energia cinética/potencial, conservação, potência.', tempo: '14h30–16h30', mat: 'fis' },
                { id: 'j3d6', data: 'Qua 17/6', topico: 'Literatura: Modernismo brasileiro', detalhe: 'Semana de Arte Moderna, 1ª e 2ª fase: Drummond, Guimarães Rosa, Clarice.', tempo: '18h–20h', mat: 'port' },
                { id: 'j3d7', data: 'Qui 18/6', topico: 'Física: termologia', detalhe: 'Escalas termométricas, dilatação, calor sensível e latente, trocas de calor.', tempo: '14h30–16h30', mat: 'fis' },
                { id: 'j3d8', data: 'Qui 18/6', topico: 'Geografia: biomas e meio ambiente brasileiros', detalhe: 'Amazônia, Cerrado, Mata Atlântica. Desmatamento, políticas ambientais.', tempo: '18h–20h', mat: 'geo' },
                { id: 'j3d9', data: 'Sex 19/6', topico: 'Física: eletricidade e óptica básica', detalhe: 'Circuitos série e paralelo, lei de Ohm. Reflexão, refração, espelhos.', tempo: '14h30–16h30', mat: 'fis' },
                { id: 'j3d10', data: 'Sex 19/6', topico: 'Literatura: Romantismo, Realismo e Naturalismo', detalhe: 'Machado de Assis, Aluísio Azevedo, José de Alencar — características e obras.', tempo: '18h–20h', mat: 'port' },
                { id: 'j3d11', data: 'Sáb 20/6', topico: 'Redação 3 + simulado de exatas', detalhe: 'Tema: desigualdade social e criminalidade. Simulado: 6 questões de física.', tempo: '08h–12h', mat: 'fis' },
            ]
        },
        {
            id: 'j4', titulo: 'Semana 4 — 22 a 28 de junho', sub: 'Química + Gramática avançada + Filosofia', badge: 'med', icon: '🧪',
            dica: 'Fim do primeiro mês. Você já terá visto toda a base de Exatas, História completa, Geografia e Português. A fundação está construída.',
            dias: [
                { id: 'j4d1', data: 'Seg 22/6', topico: 'Química: tabela periódica e ligações químicas', detalhe: 'Grupos, períodos, metais, ligação iônica, covalente, polaridade.', tempo: '14h30–16h30', mat: 'qui' },
                { id: 'j4d2', data: 'Seg 22/6', topico: 'Português: ortografia e acentuação', detalhe: 'Novo acordo (2009): regras de acentuação, hífen, casos especiais.', tempo: '18h–20h', mat: 'port' },
                { id: 'j4d3', data: 'Ter 23/6', topico: 'Química: ácidos, bases, sais e óxidos', detalhe: 'Classificação, pH, reações de neutralização, indicadores ácido-base.', tempo: '14h30–16h30', mat: 'qui' },
                { id: 'j4d4', data: 'Ter 23/6', topico: 'Filosofia: pensadores clássicos', detalhe: 'Sócrates, Platão, Aristóteles — principais conceitos e contribuições.', tempo: '18h–20h', mat: 'filo' },
                { id: 'j4d5', data: 'Qua 24/6', topico: 'Química: reações e balanceamento', detalhe: 'Tipos de reação (síntese, análise, deslocamento, dupla-troca). Balanceamento.', tempo: '14h30–16h30', mat: 'qui' },
                { id: 'j4d6', data: 'Qua 24/6', topico: 'Filosofia: Iluminismo e filosofia política', detalhe: 'Locke, Rousseau, Montesquieu. Separação dos poderes, contrato social.', tempo: '18h–20h', mat: 'filo' },
                { id: 'j4d7', data: 'Qui 25/6', topico: 'Química: soluções e química orgânica', detalhe: 'Concentração, diluição. Funções orgânicas e nomenclatura básica.', tempo: '14h30–16h30', mat: 'qui' },
                { id: 'j4d8', data: 'Qui 25/6', topico: 'Sociologia: estrutura social e cidadania', detalhe: 'Estrutura social, cidadania, direitos humanos, violência urbana.', tempo: '18h–20h', mat: 'filo' },
                { id: 'j4d9', data: 'Sex 26/6', topico: 'Biologia: citologia e metabolismo celular', detalhe: 'Estrutura da célula, organelas, fotossíntese e respiração celular.', tempo: '14h30–16h30', mat: 'bio' },
                { id: 'j4d10', data: 'Sex 26/6', topico: 'Português: pontuação e coesão textual', detalhe: 'Uso da vírgula, conectivos, pronomes anafóricos, progressão temática.', tempo: '18h–20h', mat: 'port' },
                { id: 'j4d11', data: 'Sáb 27/6', topico: 'Redação 4 + simulado geral de junho', detalhe: 'Tema: tecnologia e segurança pública. Simulado: 20 questões de todo o conteúdo.', tempo: '08h–13h', mat: 'port' },
            ]
        },
    ],
    julho: [
        {
            id: 't1', titulo: 'Semana 5 — 29/06 a 5 de julho', sub: 'Biologia + revisão de Exatas + Geografia clima', badge: 'med', icon: '🔬',
            dica: 'Julho é o mês do aprofundamento. Você já conhece tudo — agora é fixar, praticar e identificar o que ainda está fraco.',
            dias: [
                { id: 't1d1', data: 'Seg 29/6', topico: 'Biologia: genética mendeliana', detalhe: 'Leis de Mendel, heredograma, dominância e recessividade, grupos sanguíneos.', tempo: '14h30–16h30', mat: 'bio' },
                { id: 't1d2', data: 'Seg 29/6', topico: 'Revisão: porcentagem, juros e funções', detalhe: 'Resolver 30 questões dos tópicos matemáticos com maior erro.', tempo: '18h–20h', mat: 'mat' },
                { id: 't1d3', data: 'Ter 30/6', topico: 'Biologia: ecologia', detalhe: 'Cadeias alimentares, ciclos biogeoquímicos, biomas, impacto ambiental.', tempo: '14h30–16h30', mat: 'bio' },
                { id: 't1d4', data: 'Ter 30/6', topico: 'Geografia: urbanização e questão hídrica', detalhe: 'Êxodo rural, metrópoles, crise da água, saneamento básico.', tempo: '18h–20h', mat: 'geo' },
                { id: 't1d5', data: 'Qua 1/7', topico: 'Biologia: fisiologia humana', detalhe: 'Sistemas digestório, respiratório, circulatório, nervoso e imunológico.', tempo: '14h30–16h30', mat: 'bio' },
                { id: 't1d6', data: 'Qua 1/7', topico: 'Sociologia: violência, Estado e segurança pública', detalhe: 'Segurança como política pública, encarceramento, direitos humanos.', tempo: '18h–20h', mat: 'filo' },
                { id: 't1d7', data: 'Qui 2/7', topico: 'Revisão de Física: fórmulas e questões', detalhe: 'Percorrer todas as fórmulas. Resolver 15 questões de física estilo Vunesp.', tempo: '14h30–16h30', mat: 'fis' },
                { id: 't1d8', data: 'Qui 2/7', topico: 'Revisão de Português: concordância e regência', detalhe: 'Revisão focada nos pontos mais errados. 25 questões de gramática.', tempo: '18h–20h', mat: 'port' },
                { id: 't1d9', data: 'Sex 3/7', topico: 'Revisão de Química: questões Vunesp', detalhe: '15 questões de química com contexto cotidiano.', tempo: '14h30–16h30', mat: 'qui' },
                { id: 't1d10', data: 'Sex 3/7', topico: 'Revisão de Humanas: linha do tempo', detalhe: 'Criar linha do tempo visual de 1889 a 1988. Conectar causas e consequências.', tempo: '18h–20h', mat: 'hist' },
                { id: 't1d11', data: 'Sáb 4/7', topico: 'Redação 5 + simulado temático', detalhe: 'Tema: saúde mental e violência. Simulado: 12 questões de mat + 18 de port.', tempo: '08h–13h', mat: 'port' },
            ]
        },
        {
            id: 't2', titulo: 'Semana 6 — 6 a 12 de julho', sub: 'Revisão de Humanas + aprofundamento', badge: 'med', icon: '🌍',
            dica: 'Esta semana você fecha os últimos conteúdos novos. A partir daqui é tudo revisão e prática de questões.',
            dias: [
                { id: 't2d1', data: 'Seg 6/7', topico: 'Revisão aprofundada de História', detalhe: 'Linha do tempo completa. Guerra Fria, descolonização, fim da URSS.', tempo: '14h30–16h30', mat: 'hist' },
                { id: 't2d2', data: 'Seg 6/7', topico: 'Português: interpretação — treino intensivo', detalhe: 'Resolver 4 textos completos com todas as questões. Cronometrado.', tempo: '18h–20h', mat: 'port' },
                { id: 't2d3', data: 'Ter 7/7', topico: 'Revisão de Geografia: geopolítica atual', detalhe: 'Conflitos atuais, blocos econômicos, questão climática e COP.', tempo: '14h30–16h30', mat: 'geo' },
                { id: 't2d4', data: 'Ter 7/7', topico: 'Matemática: geometria espacial', detalhe: 'Prismas, cilindros, cones e esferas: volume e área total.', tempo: '18h–20h', mat: 'mat' },
                { id: 't2d5', data: 'Qua 8/7', topico: 'Revisão de Filosofia e Sociologia', detalhe: 'Ética, política, estrutura social — com questões de prova.', tempo: '14h30–16h30', mat: 'filo' },
                { id: 't2d6', data: 'Qua 8/7', topico: 'Matemática: combinatória e probabilidade', detalhe: 'Princípio multiplicativo, permutação, combinação, P(A).', tempo: '18h–20h', mat: 'mat' },
                { id: 't2d7', data: 'Qui 9/7', topico: 'Informática e Administração Pública', detalhe: 'Windows, Office, internet, segurança digital. LIMPE e atos administrativos.', tempo: '14h30–16h30', mat: 'info' },
                { id: 't2d8', data: 'Qui 9/7', topico: 'Inglês/Espanhol: interpretação de texto', detalhe: 'Foco em vocabulário contextual, falsos cognatos e tempos verbais.', tempo: '18h–20h', mat: 'port' },
                { id: 't2d9', data: 'Sex 10/7', topico: 'Matemática: estatística básica', detalhe: 'Média, mediana, moda, amplitude. Leitura de tabelas e gráficos.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 't2d10', data: 'Sex 10/7', topico: 'Revisão geral — resumo de todas as matérias', detalhe: 'Ler os resumos feitos. 1 página por matéria. Montar cartão de fórmulas.', tempo: '18h–20h', mat: 'mat' },
                { id: 't2d11', data: 'Sáb 11/7', topico: 'Redação 6 + simulado completo (40 questões)', detalhe: 'Tema: drogas e políticas de segurança. Metade da prova real, cronometrado.', tempo: '08h–14h', mat: 'port' },
            ]
        },
        {
            id: 't3', titulo: 'Semana 7 — 13 a 19 de julho', sub: 'Simulados intensivos + revisão geral', badge: 'rev', icon: '📊',
            dica: 'Primeiro simulado completo com todas as matérias. Anote o aproveitamento por matéria. Os pontos mais fracos recebem atenção extra na semana seguinte.',
            dias: [
                { id: 't3d1', data: 'Seg 13/7', topico: 'Revisão: Matemática completa', detalhe: 'Percorrer todos os tópicos com resumo rápido + 15 questões variadas.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 't3d2', data: 'Seg 13/7', topico: 'Revisão: Português completo', detalhe: 'Gramática, interpretação e literatura. 15 questões cronometradas.', tempo: '18h–20h', mat: 'port' },
                { id: 't3d3', data: 'Ter 14/7', topico: 'Revisão: Física e Química', detalhe: 'Fórmulas principais. 10 questões de física + 10 de química.', tempo: '14h30–16h30', mat: 'fis' },
                { id: 't3d4', data: 'Ter 14/7', topico: 'Revisão: Biologia completa', detalhe: 'Citologia, genética, ecologia, fisiologia. Questões de prova.', tempo: '18h–20h', mat: 'bio' },
                { id: 't3d5', data: 'Qua 15/7', topico: 'Revisão: Humanas completa', detalhe: 'História, geography, filosofia e sociologia. Resumo de 1 página cada.', tempo: '14h30–16h30', mat: 'hist' },
                { id: 't3d6', data: 'Qua 15/7', topico: 'Questões de provas anteriores — Vunesp', detalhe: 'Resolver questões de provas anteriores de concursos PM ou Vunesp similares.', tempo: '18h–20h', mat: 'mat' },
                { id: 't3d7', data: 'Qui 16/7', topico: 'Pontos críticos identificados', detalhe: 'Dedique o período ao tema com pior aproveitamento até agora.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 't3d8', data: 'Qui 16/7', topico: 'Segundo ponto crítico', detalhe: 'Mesmo processo: rever conceitos, refazer questões erradas.', tempo: '18h–20h', mat: 'mat' },
                { id: 't3d9', data: 'Sex 17/7', topico: 'Terceiro ponto crítico + revisão leve', detalhe: 'Fechar os pontos fracos. Revisão geral leve da semana.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 't3d10', data: 'Sex 17/7', topico: 'Preparação para simulado completo', detalhe: 'Rever cartão de fórmulas e resumos. Descanso relativo.', tempo: '18h–20h', mat: 'mat' },
                { id: 't3d11', data: 'Sáb 18/7', topico: 'Redação 7 + SIMULADO COMPLETO (80 questões)', detalhe: 'Tema: direitos humanos e ação policial. Simulado: 80 questões em 5h.', tempo: '08h–15h', mat: 'port' },
            ]
        },
        {
            id: 't4', titulo: 'Semana 8 — 20 a 26 de julho', sub: 'Correção dos pontos fracos do simulado', badge: 'rev', icon: '🎯',
            dica: 'Esta é a semana mais importante do processo. Atacar as fraquezas agora, com 3 semanas de antecedência, é o que separa quem passa de quem fica perto.',
            dias: [
                { id: 't4d1', data: 'Seg 20/7', topico: 'Ponto fraco 1 do simulado', detalhe: 'Matéria com pior aproveitamento: rever conceitos + refazer questões erradas.', tempo: '14h30–17h', mat: 'mat' },
                { id: 't4d2', data: 'Seg 20/7', topico: 'Ponto fraco 2 do simulado', detalhe: 'Segunda matéria mais fraca: mesma abordagem.', tempo: '18h–20h', mat: 'mat' },
                { id: 't4d3', data: 'Ter 21/7', topico: 'Ponto fraco 3 + novas questões', detalhe: 'Terceiro ponto fraco + questões novas das 3 matérias mais fracas.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 't4d4', data: 'Ter 21/7', topico: 'Português: revisão de interpretação de texto', detalhe: 'Foco na técnica de leitura. Ler o texto inteiro antes de responder.', tempo: '18h–20h', mat: 'port' },
                { id: 't4d5', data: 'Qua 22/7', topico: 'Matemática: questões de alta dificuldade', detalhe: 'Questões de geometria espacial, combinatória e probabilidade.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 't4d6', data: 'Qua 22/7', topico: 'História e Geografia: questões estilo Vunesp', detalhe: 'Resolver 20 questões de humanas de provas anteriores da banca.', tempo: '18h–20h', mat: 'hist' },
                { id: 't4d7', data: 'Qui 23/7', topico: 'Simulado temático: pontos fracos', detalhe: '30 questões focadas nas matérias com menor aproveitamento.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 't4d8', data: 'Qui 23/7', topico: 'Análise do simulado temático', detalhe: 'Correção detalhada. Anotar erros no caderno. Rever fórmulas.', tempo: '18h–20h', mat: 'mat' },
                { id: 't4d9', data: 'Sex 24/7', topico: 'Revisão geral de julho', detalhe: 'Percorrer resumos de julho inteiro. Identificar o que ainda está fraco.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 't4d10', data: 'Sex 24/7', topico: 'Leitura de atualidades + temas de redação', detalhe: 'Ler notícias relevantes. Anotar dados e referências para redação.', tempo: '18h–20h', mat: 'hist' },
                { id: 't4d11', data: 'Sáb 25/7', topico: 'Redação 8 (simulado de prova) + revisão mensal', detalhe: 'Tema surpresa. Condições de prova real. Revisão geral do mês.', tempo: '08h–13h', mat: 'port' },
            ]
        },
    ],
    agosto: [
        {
            id: 'a1', titulo: 'Semana 9 — 27/07 a 2 de agosto', sub: 'Reta final — manutenção e simulados', badge: 'rev', icon: '🔥',
            dica: 'Ritmo mais leve, mas sem parar. O objetivo agora é manter o que você já sabe, não aprender coisas novas. Durma bem — sono é parte do estudo.',
            dias: [
                { id: 'a1d1', data: 'Seg 27/7', topico: 'Revisão leve: Matemática', detalhe: 'Só cartão de fórmulas. 15 questões cronometradas.', tempo: '14h30–16h', mat: 'mat' },
                { id: 'a1d2', data: 'Seg 27/7', topico: 'Revisão leve: Português', detalhe: 'Gramática e interpretação. 15 questões estilo prova.', tempo: '18h–20h', mat: 'port' },
                { id: 'a1d3', data: 'Ter 28/7', topico: 'Revisão leve: Humanas', detalhe: 'Linha do tempo de história + geopolítica. 15 questões.', tempo: '14h30–16h', mat: 'hist' },
                { id: 'a1d4', data: 'Ter 28/7', topico: 'Revisão leve: Ciências', detalhe: 'Fórmulas de física, química e biologia. 15 questões variadas.', tempo: '18h–20h', mat: 'fis' },
                { id: 'a1d5', data: 'Qua 29/7', topico: 'Simulado completo 2 (80 questões)', detalhe: 'Segunda prova completa. Comparar com o simulado da semana 7.', tempo: '14h30–19h30', mat: 'mat' },
                { id: 'a1d6', data: 'Qui 30/7', topico: 'Análise do simulado 2', detalhe: 'Correção detalhada. Comparar evolução com simulado 1.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'a1d7', data: 'Qui 30/7', topico: 'Revisão dos erros do simulado 2', detalhe: 'Retomar os tópicos mais errados.', tempo: '18h–20h', mat: 'mat' },
                { id: 'a1d8', data: 'Sex 31/7', topico: 'Questões de provas anteriores', detalhe: 'Resolver mais 20 questões. Manter o ritmo.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'a1d9', data: 'Sex 31/7', topico: 'Revisão de Humanas — foco nos erros', detalhe: 'Retomar os pontos históricos ou geográficos ainda confusos.', tempo: '18h–20h', mat: 'hist' },
                { id: 'a1d10', data: 'Sáb 1/8', topico: 'Redação 9 + análise do simulado 2', detalhe: 'Tema: meio ambiente e segurança pública. Análise do simulado.', tempo: '08h–13h', mat: 'port' },
            ]
        },
        {
            id: 'a2', titulo: 'Semana 10 — 3 a 9 de agosto', sub: 'Revisão final + força mental', badge: 'rev', icon: '💎',
            dica: 'Você já fez o trabalho. Agora é colher. Confie na sua preparação.',
            dias: [
                { id: 'a2d1', data: 'Seg 3/8', topico: 'Revisão geral — resumos de todas as matérias', detalhe: 'Ler os resumos feitos durante o plano. Nada de conteúdo novo.', tempo: '14h30–17h', mat: 'mat' },
                { id: 'a2d2', data: 'Ter 4/8', topico: 'Questões de provas anteriores', detalhe: '20 questões variadas. Manter o ritmo sem sobrecarregar.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'a2d3', data: 'Ter 4/8', topico: 'Revisão de fórmulas e regras rápidas', detalhe: 'Cartão final de fórmulas de matemática e física. Regras de gramática.', tempo: '18h–20h', mat: 'mat' },
                { id: 'a2d4', data: 'Qua 5/8', topico: 'Simulado final (80 questões)', detalhe: 'Último simulado completo. Condições reais de prova.', tempo: '14h30–19h30', mat: 'mat' },
                { id: 'a2d5', data: 'Qui 6/8', topico: 'Análise do simulado final', detalhe: 'Revisar só o que errou. Anotar pontos críticos para os últimos dias.', tempo: '14h30–16h30', mat: 'mat' },
                { id: 'a2d6', data: 'Sex 7/8', topico: 'Revisão leve dos pontos críticos', detalhe: 'Só o que está no caderno de erros. Nada de conteúdo novo.', tempo: '14h30–16h', mat: 'mat' },
                { id: 'a2d7', data: 'Sáb 8/8', topico: 'Redação 10 (última prática) + revisão de estrutura', detalhe: 'Tema surpresa. Última redação antes da prova. Após: revisar estrutura.', tempo: '08h–11h', mat: 'port' },
                { id: 'a2d8', data: 'Dom 9/8', topico: 'Descanso total', detalhe: 'Passeio, lazer, família. Seu cérebro precisa consolidar tudo.', tempo: 'dia livre', mat: 'mat' },
            ]
        },
        {
            id: 'a3', titulo: 'Semana da prova — 10 a 16 de agosto', sub: 'Descanso estratégico e preparação logística', badge: 'prova', icon: '🏆',
            dica: 'Na semana da prova, descanso É estudo. Seu cérebro consolida tudo que aprendeu enquanto você dorme. NÃO estude na véspera.',
            dias: [
                { id: 'a3d1', data: 'Seg 10/8', topico: 'Revisão levíssima — só leitura de resumos', detalhe: '1 hora máximo. Ler resumos de história e português. Nada de exercícios.', tempo: '30–60min', mat: 'hist' },
                { id: 'a3d2', data: 'Ter 11/8', topico: 'Cartão de fórmulas matemáticas e físicas', detalhe: 'Reler o cartão de fórmulas. 30 minutos. Depois descanse.', tempo: '30min', mat: 'mat' },
                { id: 'a3d3', data: 'Qua 12/8', topico: 'Descanso total', detalhe: 'Zero estudo. Caminhe, ouça música, durma cedo.', tempo: 'descanso', mat: 'mat' },
                { id: 'a3d4', data: 'Qui 13/8', topico: 'Releitura de resumo de gramática', detalhe: 'Concordância, regência, crase. 30 minutos. Só releitura.', tempo: '30min', mat: 'port' },
                { id: 'a3d5', data: 'Sex 14/8', topico: 'Preparação logística', detalhe: 'Separar documentos, caneta, identidade, comprovante. Verificar local de prova e horário.', tempo: 'logística', mat: 'mat' },
                { id: 'a3d6', data: 'Sáb 15/8', topico: 'Véspera da prova — DESCANSO TOTAL', detalhe: 'Zero estudo. Refeição leve. Dormir cedo (22h). Acordar descansado.', tempo: 'descanso', mat: 'mat' },
                { id: 'a3d7', data: 'Dom 16/8', topico: '🏆 DIA DA PROVA', detalhe: 'Acordar com antecedência. Café da manhã reforçado. Chegar 40 minutos antes. Você está preparado!', tempo: 'PROVA', mat: 'mat' },
            ]
        },
    ]
};

const redacoes = [
    { id: 'red1', data: 'Sáb 07/06', tema: 'Segurança pública e violência urbana', foco: 'Foco em estrutura e organização. Primeiro diagnóstico — não busque perfeição.' },
    { id: 'red2', data: 'Sáb 13/06', tema: 'Papel da polícia em uma sociedade democrática', foco: 'Foco em desenvolver a tese com clareza e conectar os parágrafos.' },
    { id: 'red3', data: 'Sáb 20/06', tema: 'Desigualdade social e criminalidade', foco: 'Usar dados e referências históricas para enriquecer os argumentos.' },
    { id: 'red4', data: 'Sáb 27/06', tema: 'Tecnologia e segurança pública', foco: 'Proposta de intervenção concreta e bem estruturada na conclusão.' },
    { id: 'red5', data: 'Sáb 04/07', tema: 'Saúde mental e violência', foco: 'Revisão de coesão: conectivos, pronomes de retomada, paragrafação.' },
    { id: 'red6', data: 'Sáb 11/07', tema: 'Drogas e políticas de segurança', foco: 'Variar os argumentos sem repetir ideias entre os parágrafos.' },
    { id: 'red7', data: 'Sáb 18/07', tema: 'Direitos humanos e ação policial', foco: 'Tom equilibrado — defender segurança sem desrespeitar direitos fundamentais.' },
    { id: 'red8', data: 'Sáb 25/07', tema: 'Simulado de prova (tema surpresa)', foco: 'Condições de prova real: sem rascunho excessivo, letra legível, 30 linhas.' },
    { id: 'red9', data: 'Sáb 01/08', tema: 'Meio ambiente e segurança pública', foco: 'Revisão final de estrutura e repertório. Últimas correções.' },
    { id: 'red10', data: 'Sáb 08/08', tema: 'Tema surpresa — último simulado', foco: 'Última prática. Releia e corrija antes de "entregar". Simule a prova.' },
];

const taf_plano = [
    {
        id: 'taf1', titulo: 'Semanas 1–2 (1–14/06)', sub: 'Base — avaliação inicial', badge: 'med', icon: '🌱',
        dica: 'Comece devagar para criar o hábito. O mais importante agora é consistência, não intensidade.',
        dias: [
            { id: 'taf1d1', data: '3x/semana', topico: 'Corrida contínua 20–25 min em ritmo leve', detalhe: 'Não se preocupe com velocidade. Foco em completar sem parar.', tempo: 'Seg / Qua / Sex' },
            { id: 'taf1d2', data: '3x/semana', topico: 'Abdominal: 3 séries até a falha', detalhe: 'Descanso de 60 seg entre séries. Aumente gradualmente.', tempo: 'Junto com corrida' },
            { id: 'taf1d3', data: '3x/semana', topico: 'Barra: negativas (descida controlada) 4x6', detalhe: 'Se já consegue barra completa: 4x4 completas + negativas.', tempo: 'Junto com corrida' },
        ]
    },
    {
        id: 'taf2', titulo: 'Semanas 3–4 (15–28/06)', sub: 'Construção — aumento de volume', badge: 'med', icon: '📈',
        dica: 'Introduzir treino intervalado para melhorar o Cooper.',
        dias: [
            { id: 'taf2d1', data: '3x/semana', topico: 'Corrida intervalada: 5x(3min forte + 1min leve)', detalhe: 'Aquecimento 5min + 5 tiros + desaquecimento 5min.', tempo: 'Seg / Qua / Sex' },
            { id: 'taf2d2', data: '3x/semana', topico: 'Abdominal: 4x30', detalhe: 'Descanso de 45 seg. Adicionar variações: remada, oblíquo.', tempo: 'Junto com corrida' },
            { id: 'taf2d3', data: '3x/semana', topico: 'Barra: 4x4 completas + negativas', detalhe: 'Foco na contração no topo. Descer em 3 segundos.', tempo: 'Junto com corrida' },
        ]
    },
    {
        id: 'taf3', titulo: 'Semanas 5–8 (29/06–26/07)', sub: 'Desenvolvimento — Cooper específico', badge: 'alta', icon: '🔥',
        dica: 'Simular o teste de Cooper 1x por semana. Anotar distância alcançada e comparar.',
        dias: [
            { id: 'taf3d1', data: '1x/semana', topico: 'Simular teste de Cooper (12 min)', detalhe: 'Correr o máximo possível em 12 minutos. Medir distância.', tempo: 'Sábado' },
            { id: 'taf3d2', data: '2x/semana', topico: 'Corrida intervalada + arrancadas 50m', detalhe: '6 tiros de 50m com saída parada. Foco em velocidade máxima.', tempo: 'Ter / Qui' },
            { id: 'taf3d3', data: '3x/semana', topico: 'Abdominal 4x40 + Barra 5x5', detalhe: 'Progressão gradual. Não force se sentir dor.', tempo: 'Com treinos' },
        ]
    },
    {
        id: 'taf4', titulo: 'Semanas 9–11 (27/07–15/08)', sub: 'Manutenção e descanso estratégico', badge: 'rev', icon: '🏁',
        dica: 'Reduzir volume, manter frequência. Não treine pesado na semana da prova escrita.',
        dias: [
            { id: 'taf4d1', data: '2x/semana', topico: 'Corrida leve 20 min + Cooper 1x', detalhe: 'Manter condicionamento sem sobrecarregar.', tempo: 'Seg / Qui' },
            { id: 'taf4d2', data: '2x/semana', topico: 'Abdominal e barra — séries menores', detalhe: '3x30 abdominal, 3x4 barra. Foco em qualidade.', tempo: 'Com corrida' },
            { id: 'taf4d3', data: 'Semana 11', topico: 'Apenas caminhadas e alongamento', detalhe: 'Não treinar pesado na semana da prova escrita (10–16/08).', tempo: 'Leve' },
        ]
    },
];

// ===================== ESTADO =====================
let estado = JSON.parse(localStorage.getItem('pmsp_2026') || '{}');
function salvar() { localStorage.setItem('pmsp_2026', JSON.stringify(estado)); }

function toggleDia(id) {
    estado[id] = !estado[id];
    salvar();
    const row = document.getElementById('row-' + id);
    if (row) {
        row.classList.toggle('done', estado[id]);
        const icon = row.querySelector('.dia-check-icon');
        if (icon) icon.style.display = estado[id] ? 'block' : 'none';
    }
    atualizarStats();
}

// ===================== RENDER =====================
function badgeClass(b) {
    return b === 'alta' ? 'badge-alta' : b === 'med' ? 'badge-med' : b === 'rev' || b === 'prova' ? 'badge-ok' : 'badge-info';
}
function badgeTxt(b) {
    return b === 'alta' ? 'alta prior.' : b === 'med' ? 'média prior.' : b === 'rev' ? 'revisão' : b === 'prova' ? '🏆 PROVA' : 'info';
}

function renderBlocos(dados, containerId) {
    const cont = document.getElementById(containerId);
    if (!cont) return;
    cont.innerHTML = dados.map(bloco => {
        const diasHtml = bloco.dias.map(d => {
            const done = estado[d.id] || false;
            return `<div class="dia-row ${done ? 'done' : ''}" id="row-${d.id}" onclick="toggleDia('${d.id}')">
        <div class="dia-check"><span class="dia-check-icon" style="display:${done ? 'block' : 'none'}">✓</span></div>
        <div class="dia-data">${d.data}</div>
        <div class="dia-content">
          <div class="dia-topico">${d.topico}</div>
          <div class="dia-detalhe">${d.detalhe}</div>
          <div class="dia-tempo">⏱ ${d.tempo}</div>
        </div>
      </div>`;
        }).join('');
        const total = bloco.dias.length;
        const feitos = bloco.dias.filter(d => estado[d.id]).length;
        const pct = total ? Math.round((feitos / total) * 100) : 0;
        return `<div class="semana">
      <div class="semana-prog"><div class="semana-prog-fill" id="spf-${bloco.id}" style="width:${pct}%"></div></div>
      <div class="semana-head" onclick="toggleSemana('${bloco.id}')">
        <div class="semana-left">
          <div class="semana-icon" style="background:rgba(255,255,255,0.05);font-size:18px">${bloco.icon}</div>
          <div>
            <div class="semana-titulo">${bloco.titulo}</div>
            <div class="semana-sub">${bloco.sub}</div>
          </div>
        </div>
        <div class="semana-right">
          <span style="font-family:var(--mono);font-size:11px;color:var(--muted)">${feitos}/${total}</span>
          <span class="badge ${badgeClass(bloco.badge)}">${badgeTxt(bloco.badge)}</span>
          <span class="chevron" id="chev-${bloco.id}">▼</span>
        </div>
      </div>
      <div class="semana-body" id="body-${bloco.id}">
        ${diasHtml}
        <div class="dica"><div class="dica-titulo">💡 Dica</div><p>${bloco.dica}</p></div>
      </div>
    </div>`;
    }).join('');
}

function renderMateria(topicos, containerId) {
    const cont = document.getElementById(containerId);
    if (!cont) return;
    cont.innerHTML = topicos.map(t => {
        const diasHtml = t.dias.map(d => {
            const done = estado[d.id] || false;
            return `<div class="dia-row ${done ? 'done' : ''}" id="row-${d.id}" onclick="toggleDia('${d.id}')">
        <div class="dia-check"><span class="dia-check-icon" style="display:${done ? 'block' : 'none'}">✓</span></div>
        <div class="dia-data">${d.data}</div>
        <div class="dia-content">
          <div class="dia-topico">${d.topico}</div>
          <div class="dia-detalhe">${d.detalhe}</div>
        </div>
      </div>`;
        }).join('');
        return `<div class="semana">
      <div class="semana-head" onclick="toggleSemana('mt-${t.id}')">
        <div class="semana-left">
          <div class="semana-icon" style="background:rgba(255,255,255,.05)">${t.icon}</div>
          <div><div class="semana-titulo">${t.titulo}</div><div class="semana-sub">${t.sub}</div></div>
        </div>
        <div class="semana-right">
          <span class="badge ${badgeClass(t.badge)}">${badgeTxt(t.badge)}</span>
          <span class="chevron" id="chev-mt-${t.id}">▼</span>
        </div>
      </div>
      <div class="semana-body" id="body-mt-${t.id}">${diasHtml}</div>
    </div>`;
    }).join('');
}

const topicos_mat = [
    {
        id: 'm1', titulo: 'Aritmética e porcentagem', sub: 'Semana 1 — base fundamental', badge: 'alta', icon: '%',
        dias: [
            { id: 'tm1', data: 'Tópico 1', topico: 'Porcentagem e variação percentual', detalhe: 'Aumento/desconto sucessivos, variação relativa, aplicações' },
            { id: 'tm2', data: 'Tópico 2', topico: 'Razão, proporção e regra de três', detalhe: 'Regra de três simples e composta, grandezas direta/inversamente proporcionais' },
            { id: 'tm3', data: 'Tópico 3', topico: 'Juros simples e compostos', detalhe: 'M=C(1+it) e M=C(1+i)^n, capitalização, financiamentos' },
            { id: 'tm4', data: 'Tópico 4', topico: 'MMC, MDC e divisibilidade', detalhe: 'Critérios de divisibilidade, decomposição em fatores primos' },
        ]
    },
    {
        id: 'm2', titulo: 'Álgebra e funções', sub: 'Semana 2 — tópicos mais cobrados', badge: 'alta', icon: 'ƒ',
        dias: [
            { id: 'tm5', data: 'Tópico 5', topico: 'Função do 1º grau', detalhe: 'Gráfico, zero da função, crescimento/decrescimento, aplicações' },
            { id: 'tm6', data: 'Tópico 6', topico: 'Função do 2º grau', detalhe: 'Parábola, vértice, discriminante, máximo/mínimo' },
            { id: 'tm7', data: 'Tópico 7', topico: 'Progressões — PA e PG', detalhe: 'Termo geral, soma dos termos, interpolação, PG infinita' },
            { id: 'tm8', data: 'Tópico 8', topico: 'Logaritmos e exponencial', detalhe: 'Propriedades dos expoentes, definição de log, equações' },
        ]
    },
    {
        id: 'm3', titulo: 'Geometria e trigonometria', sub: 'Semanas 2–3', badge: 'alta', icon: '△',
        dias: [
            { id: 'tm9', data: 'Tópico 9', topico: 'Geometria plana — triângulos e quadriláteros', detalhe: 'Áreas, Pitágoras, semelhança, Tales' },
            { id: 'tm10', data: 'Tópico 10', topico: 'Círculo e trigonometria', detalhe: 'Área, comprimento, seno/cosseno/tangente' },
            { id: 'tm11', data: 'Tópico 11', topico: 'Geometria espacial', detalhe: 'Prisma, cilindro, cone, esfera: volumes e áreas' },
            { id: 'tm12', data: 'Tópico 12', topico: 'Geometria analítica', detalhe: 'Distância entre pontos, equação da reta, coeficiente angular' },
        ]
    },
    {
        id: 'm4', titulo: 'Probabilidade e estatística', sub: 'Semana 4', badge: 'med', icon: '🎲',
        dias: [
            { id: 'tm13', data: 'Tópico 13', topico: 'Análise combinatória', detalhe: 'Princípio multiplicativo, permutação, combinação' },
            { id: 'tm14', data: 'Tópico 14', topico: 'Probabilidade', detalhe: 'P(A) = favoráveis/total, eventos, probabilidade condicional' },
            { id: 'tm15', data: 'Tópico 15', topico: 'Estatística básica', detalhe: 'Média, mediana, moda, amplitude, leitura de gráficos' },
        ]
    },
];

const topicos_port = [
    {
        id: 'p1', titulo: 'Interpretação e produção textual', sub: 'Alta prioridade — maior peso na prova', badge: 'alta', icon: '📄',
        dias: [
            { id: 'tp1', data: 'Tópico 1', topico: 'Compreensão e interpretação textual', detalhe: 'Ideia central, tese do autor, inferência, vocabulário contextual' },
            { id: 'tp2', data: 'Tópico 2', topico: 'Tipos e gêneros textuais', detalhe: 'Narração, descrição, dissertação. Crônica, artigo de opinião, editorial' },
            { id: 'tp3', data: 'Tópico 3', topico: 'Coesão e coerência textual', detalhe: 'Conectivos, pronomes anafóricos, progressão temática' },
            { id: 'tp4', data: 'Tópico 4', topico: 'Figuras de linguagem', detalhe: 'Metáfora, metonímia, hipérbole, ironia, antítese, paradoxo' },
        ]
    },
    {
        id: 'p2', titulo: 'Gramática', sub: 'Regras essenciais para a prova', badge: 'alta', icon: '📐',
        dias: [
            { id: 'tp5', data: 'Tópico 5', topico: 'Concordância verbal', detalhe: 'Sujeito composto, coletivo, oracional, casos especiais' },
            { id: 'tp6', data: 'Tópico 6', topico: 'Concordância nominal', detalhe: 'Adjetivo predicativo, pospostos, casos especiais' },
            { id: 'tp7', data: 'Tópico 7', topico: 'Regência verbal e nominal', detalhe: 'Verbos que exigem preposição, regência nominal' },
            { id: 'tp8', data: 'Tópico 8', topico: 'Crase', detalhe: 'Obrigatória, proibida, facultativa — todos os casos' },
            { id: 'tp9', data: 'Tópico 9', topico: 'Pontuação e ortografia', detalhe: 'Vírgula, ponto e vírgula. Novo acordo ortográfico (2009)' },
            { id: 'tp10', data: 'Tópico 10', topico: 'Sintaxe: sujeito, predicado, objetos e orações', detalhe: 'Tipos de sujeito, predicado, objeto direto/indireto, orações subordinadas' },
        ]
    },
    {
        id: 'p3', titulo: 'Literatura brasileira', sub: 'Cobrada por meio de textos', badge: 'med', icon: '📚',
        dias: [
            { id: 'tp11', data: 'Tópico 11', topico: 'Modernismo (1ª e 2ª fase)', detalhe: 'Semana de Arte Moderna, Drummond, Guimarães Rosa, Clarice' },
            { id: 'tp12', data: 'Tópico 12', topico: 'Romantismo, Realismo e Naturalismo', detalhe: 'Machado de Assis, Aluísio Azevedo, José de Alencar' },
        ]
    },
];

const topicos_exatas = [
    {
        id: 'e1', titulo: 'Física', sub: '6 questões — foco em cinemática e dinâmica', badge: 'med', icon: '⚡',
        dias: [
            { id: 'te1', data: 'Tópico 1', topico: 'Cinemática: MU e MUV', detalhe: 'Velocidade, aceleração, Torricelli, queda livre, gráficos' },
            { id: 'te2', data: 'Tópico 2', topico: 'Leis de Newton e forças', detalhe: '1ª, 2ª, 3ª lei. Atrito, plano inclinado, força resultante' },
            { id: 'te3', data: 'Tópico 3', topico: 'Energia, trabalho e potência', detalhe: 'Trabalho = F·d·cosθ, energia cinética/potencial, conservação' },
            { id: 'te4', data: 'Tópico 4', topico: 'Termologia', detalhe: 'Escalas, dilatação, calor sensível e latente, trocas de calor' },
            { id: 'te5', data: 'Tópico 5', topico: 'Eletricidade e óptica', detalhe: 'Lei de Ohm, circuitos série/paralelo. Reflexão, refração' },
        ]
    },
    {
        id: 'e2', titulo: 'Química', sub: '6 questões — foco em aplicação cotidiana', badge: 'med', icon: '🧪',
        dias: [
            { id: 'te6', data: 'Tópico 6', topico: 'Tabela periódica e ligações químicas', detalhe: 'Grupos, períodos, ligação iônica, covalente, polaridade' },
            { id: 'te7', data: 'Tópico 7', topico: 'Ácidos, bases, sais e óxidos', detalhe: 'Classificação, pH, reações de neutralização' },
            { id: 'te8', data: 'Tópico 8', topico: 'Reações químicas e balanceamento', detalhe: 'Tipos de reação, balanceamento por inspeção' },
            { id: 'te9', data: 'Tópico 9', topico: 'Soluções e química orgânica', detalhe: 'Concentração, diluição. Funções orgânicas e nomenclatura' },
        ]
    },
    {
        id: 'e3', titulo: 'Biologia', sub: '6 questões — foco em ecologia e genética', badge: 'med', icon: '🔬',
        dias: [
            { id: 'te10', data: 'Tópico 10', topico: 'Citologia e metabolismo celular', detalhe: 'Estrutura da célula, organelas, fotossíntese, respiração' },
            { id: 'te11', data: 'Tópico 11', topico: 'Genética mendeliana', detalhe: 'Leis de Mendel, heredograma, grupos sanguíneos' },
            { id: 'te12', data: 'Tópico 12', topico: 'Ecologia', detalhe: 'Cadeias alimentares, biomas, impacto ambiental' },
            { id: 'te13', data: 'Tópico 13', topico: 'Fisiologia humana', detalhe: 'Sistemas digestório, circulatório, respiratório, nervoso' },
        ]
    },
];

const topicos_humanas = [
    {
        id: 'h1', titulo: 'História do Brasil', sub: '6 questões — FOCO ESPECIAL', badge: 'alta', icon: '🇧🇷',
        dias: [
            { id: 'th1', data: 'Tópico 1', topico: 'República Velha (1889–1930)', detalhe: 'Proclamação, café com leite, coronelismo, tenentismo, Revolução 1930' },
            { id: 'th2', data: 'Tópico 2', topico: 'Era Vargas e Estado Novo', detalhe: '1930–1945: trabalhismo, industrialização, CLT, ditadura' },
            { id: 'th3', data: 'Tópico 3', topico: 'Ditadura Militar (1964–1985)', detalhe: 'AI-5, anos de chumbo, abertura, Diretas Já, Constituição 1988' },
            { id: 'th4', data: 'Tópico 4', topico: '1ª e 2ª Guerra Mundial + Guerra Fria', detalhe: 'Causas, desenvolvimento, consequências. Bipolaridade, fim da URSS' },
        ]
    },
    {
        id: 'h2', titulo: 'Geografia', sub: '6 questões — FOCO ESPECIAL', badge: 'alta', icon: '🌍',
        dias: [
            { id: 'th5', data: 'Tópico 5', topico: 'Geopolítica e globalização', detalhe: 'Blocos econômicos, divisão Norte-Sul, conflitos atuais' },
            { id: 'th6', data: 'Tópico 6', topico: 'Brasil: clima, vegetação e meio ambiente', detalhe: 'Biomas, questão hídrica, desmatamento, políticas ambientais' },
            { id: 'th7', data: 'Tópico 7', topico: 'Urbanização e questões sociais', detalhe: 'Êxodo rural, metrópoles, desigualdade regional' },
        ]
    },
    {
        id: 'h3', titulo: 'Filosofia e Sociologia', sub: '8 questões — FOCO ESPECIAL', badge: 'alta', icon: '💭',
        dias: [
            { id: 'th8', data: 'Tópico 8', topico: 'Filosofia: pensadores clássicos', detalhe: 'Sócrates, Platão, Aristóteles — principais conceitos' },
            { id: 'th9', data: 'Tópico 9', topico: 'Filosofia política e Iluminismo', detalhe: 'Locke, Rousseau, Montesquieu. Separação dos poderes, contrato social' },
            { id: 'th10', data: 'Tópico 10', topico: 'Sociologia: estrutura social e cidadania', detalhe: 'Estrutura social, direitos humanos, políticas sociais' },
            { id: 'th11', data: 'Tópico 11', topico: 'Sociologia: violência e segurança pública', detalhe: 'Violência urbana, encarceramento, segurança como política pública' },
        ]
    },
];

// ===================== STATS =====================
function todosDias() {
    const all = [];
    [cronograma.junho, cronograma.julho, cronograma.agosto].forEach(mes => mes.forEach(s => s.dias.forEach(d => all.push(d))));
    return all;
}

function atualizarStats() {
    const all = todosDias();
    const total = all.length;
    const feitos = all.filter(d => estado[d.id]).length;
    const pct = total ? Math.round((feitos / total) * 100) : 0;

    document.getElementById('pct-sidebar').textContent = pct + '%';
    document.getElementById('prog-sidebar').style.width = pct + '%';
    document.getElementById('s-total').textContent = feitos;
    document.getElementById('s-pct').textContent = pct + '%';

    // redacoes
    const redFeitas = redacoes.filter(r => estado[r.id]).length;
    document.getElementById('s-redacoes').textContent = redFeitas;

    // badges nav
    ['junho', 'julho', 'agosto'].forEach(mes => {
        const dias = cronograma[mes].flatMap(s => s.dias);
        const f = dias.filter(d => estado[d.id]).length;
        const p = dias.length ? Math.round((f / dias.length) * 100) : 0;
        const el = document.getElementById('nb-' + mes);
        if (el) el.textContent = p + '%';
    });

    // progresso por matéria
    atualizarMateriasProgress();

    // countdown
    atualizarCountdown();

    // semana progress bars
    [cronograma.junho, cronograma.julho, cronograma.agosto, taf_plano].flat().forEach(bloco => {
        const bar = document.getElementById('spf-' + bloco.id);
        if (bar) {
            const total = bloco.dias.length;
            const f = bloco.dias.filter(d => estado[d.id]).length;
            bar.style.width = total ? Math.round((f / total) * 100) + '%' : '0%';
        }
    });
}

function atualizarMateriasProgress() {
    const cont = document.getElementById('materias-prog');
    if (!cont) return;
    const all = todosDias();
    const por = {};
    materias_info.forEach(m => { por[m.id] = { total: 0, feitos: 0 }; });
    all.forEach(d => {
        if (d.mat && por[d.mat]) {
            por[d.mat].total++;
            if (estado[d.id]) por[d.mat].feitos++;
        }
    });
    cont.innerHTML = materias_info.map(m => {
        const t = por[m.id].total || 0;
        const f = por[m.id].feitos || 0;
        const p = t ? Math.round((f / t) * 100) : 0;
        return `<div class="materia-card">
      <div class="materia-header">
        <div class="materia-nome">${m.nome}</div>
        <div class="materia-pct" style="color:${m.cor}">${p}%</div>
      </div>
      <div class="materia-track"><div class="materia-fill" style="width:${p}%;background:${m.cor}"></div></div>
      <div class="materia-info">${f}/${t} sessões · ${m.questoes} questões na prova</div>
    </div>`;
    }).join('');

    // distribuição de questões
    const dist = document.getElementById('dist-questoes');
    if (dist) {
        dist.innerHTML = materias_info.map(m => {
            const pct = Math.round((m.questoes / 80) * 100);
            return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <div style="font-size:12px;color:var(--muted);min-width:90px">${m.nome}</div>
        <div style="flex:1;height:4px;background:var(--bg3);border-radius:4px;overflow:hidden">
          <div style="height:100%;border-radius:4px;background:${m.cor};width:${pct * 3}%"></div>
        </div>
        <div style="font-family:var(--mono);font-size:11px;color:${m.cor};min-width:28px;text-align:right">${m.questoes}q</div>
      </div>`;
        }).join('');
    }
}

function atualizarCountdown() {
    const hoje = new Date();
    const diff = Math.ceil((PROVA_DATE - hoje) / (1000 * 60 * 60 * 24));
    document.getElementById('cd-days').textContent = diff > 0 ? diff : '0';
    if (document.getElementById('dias-restantes'))
        document.getElementById('dias-restantes').textContent = diff > 0 ? `${diff} dias para a prova` : 'Boa prova!';

    const total = (PROVA_DATE - INICIO_DATE) / (1000 * 60 * 60 * 24);
    const decorrido = (hoje - INICIO_DATE) / (1000 * 60 * 60 * 24);
    const pct = Math.min(100, Math.max(0, Math.round((decorrido / total) * 100)));
    document.getElementById('cd-fill').style.width = pct + '%';
}

// ===================== REDACOES =====================
function renderRedacoes() {
    const cont = document.getElementById('redacoes-grid');
    if (!cont) return;
    cont.innerHTML = redacoes.map(r => {
        const done = estado[r.id] || false;
        return `<div class="red-card ${done ? 'done' : ''}" onclick="toggleDia('${r.id}');this.classList.toggle('done',estado['${r.id}']);document.querySelector('.red-card-status[data-id=${r.id}]').innerHTML=estado['${r.id}']?'✓ Escrita':'○ Pendente';atualizarStats();" id="redcard-${r.id}">
      <div class="red-card-date">${r.data}</div>
      <div class="red-card-tema">${r.tema}</div>
      <div class="red-card-foco">${r.foco}</div>
      <div class="red-card-status" data-id="${r.id}">${done ? '✓ Escrita' : '○ Pendente'}</div>
    </div>`;
    }).join('');
}

// ===================== NAVEGAÇÃO =====================
function toggleSemana(id) {
    const body = document.getElementById('body-' + id);
    const chev = document.getElementById('chev-' + id);
    if (!body) return;
    const open = body.classList.toggle('open');
    if (chev) chev.classList.toggle('open', open);
}

function showPanel(id) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const panel = document.getElementById('panel-' + id);
    if (panel) panel.classList.add('active');
    const navItem = document.querySelector(`[data-panel="${id}"]`);
    if (navItem) navItem.classList.add('active');
    window.scrollTo(0, 0);
    // fechar sidebar em mobile
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}

// ===================== INIT =====================
function init() {
    renderBlocos(cronograma.junho, 'content-junho');
    renderBlocos(cronograma.julho, 'content-julho');
    renderBlocos(cronograma.agosto, 'content-agosto');
    renderMateria(topicos_mat, 'content-matematica');
    renderMateria(topicos_port, 'content-portugues');
    renderMateria(topicos_exatas, 'content-exatas');
    renderMateria(topicos_humanas, 'content-humanas');
    renderBlocos(taf_plano, 'content-taf');
    renderRedacoes();
    atualizarStats();

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => showPanel(item.dataset.panel));
    });

    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
        document.getElementById('overlay').classList.toggle('open');
    });
    document.getElementById('overlay').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('overlay').classList.remove('open');
    });
}

document.addEventListener('DOMContentLoaded', init);