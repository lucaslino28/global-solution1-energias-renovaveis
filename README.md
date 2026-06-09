# Space Energy Monitor

Projeto desenvolvido para a Global Solution 2026.1 da disciplina Soluções em Energias Renováveis e Sustentáveis.

## Professor

André Tritiack de Farias

## Integrantes do Grupo

Nome: Bruno Riquelme Coutinho Pereira - RM: 569619

Nome: Eduardo Bigoli Portela - RM: 569897

Nome: Lucas Lino Marques da Silva - RM: 572863

## Tema

Sistema inteligente de monitoramento energético para uma missão espacial experimental sustentável.

## Objetivo

O objetivo do projeto é simular o monitoramento de sistemas energéticos de uma missão espacial experimental, analisando dados operacionais relacionados à geração de energia solar, consumo dos módulos, carga da bateria, temperatura, comunicação e status dos sistemas.

A solução utiliza dados simulados para gerar alertas automáticos e decisões básicas diante de situações críticas, contribuindo para a segurança, eficiência energética e sustentabilidade da missão.

## Descrição da Solução

O Space Energy Monitor é um dashboard web que simula uma missão espacial alimentada principalmente por energia solar, com apoio de baterias para armazenamento energético.

O sistema monitora módulos operacionais da missão, interpreta os dados gerados e classifica a situação da operação em diferentes modos, como operação normal, atenção, economia ou emergência.

Além disso, a solução apresenta alertas inteligentes, decisões automáticas e um índice de sustentabilidade calculado com base na geração solar, consumo total, bateria e quantidade de módulos em operação normal.

## Funcionalidades

- Simulação de dados operacionais da missão.
- Monitoramento da geração de energia solar.
- Monitoramento do consumo total dos módulos.
- Monitoramento da carga da bateria.
- Monitoramento de temperatura, energia, comunicação e status dos módulos.
- Classificação automática dos módulos em Normal, Atenção ou Crítico.
- Indicação visual por cores para cada status.
- Geração automática de alertas inteligentes.
- Sugestão de decisões automáticas diante de situações críticas.
- Cálculo do Índice de Sustentabilidade da Missão.
- Botão para simular novas leituras operacionais.
- Interface em formato de dashboard responsivo.

## Módulos Monitorados

O sistema simula o monitoramento dos seguintes módulos:

- Painéis Solares;
- Baterias;
- Comunicação;
- Controle Térmico;
- Suporte à Vida.

## Regras de Status dos Módulos

Cada módulo é classificado de acordo com temperatura, energia disponível e comunicação.

- Normal: quando os indicadores estão dentro dos parâmetros adequados.
- Atenção: quando há algum indicador próximo de uma condição crítica.
- Crítico: quando há temperatura elevada, baixa energia ou comunicação instável.

## Regras de Alertas

O sistema gera alertas automaticamente em situações como:

- Geração solar abaixo do consumo total;
- Bateria em nível crítico;
- Temperatura crítica em algum módulo;
- Baixa disponibilidade de energia;
- Comunicação instável.

## Decisões Automáticas

Com base nos alertas identificados, o sistema sugere decisões como:

- Ativar modo economia de energia;
- Priorizar energia para suporte à vida, comunicação e controle térmico;
- Redirecionar energia solar para recarga das baterias;
- Acionar resfriamento emergencial;
- Tentar reconexão automática com a base terrestre;
- Reduzir consumo operacional de módulos em risco.

## Índice de Sustentabilidade

O Índice de Sustentabilidade da Missão é calculado considerando:

- Geração solar em relação ao consumo total;
- Nível de bateria;
- Quantidade de módulos em status Normal.

A classificação pode ser:

- Operação sustentável: índice igual ou superior a 80%;
- Operação moderada: índice entre 50% e 79%;
- Operação crítica: índice abaixo de 50%.

## Tecnologias Utilizadas

- HTML5;
- CSS3;
- JavaScript.

## Estrutura do Projeto

space-energy-monitor/
├── index.html
├── style.css
├── script.js
├── README.md
└── entrega.txt

## Como Executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto.
3. Execute o arquivo index.html em um navegador.
4. Clique no botão Simular nova leitura para gerar novos dados da missão.

Também é possível executar utilizando a extensão Live Server no Visual Studio Code.

## Observação

Este projeto utiliza dados simulados com finalidade acadêmica. A proposta é demonstrar como conceitos de energia, potência, energias renováveis, sustentabilidade e tomada de decisão podem ser aplicados em uma solução computacional voltada ao contexto de uma missão espacial experimental.
