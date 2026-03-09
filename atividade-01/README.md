Exercício 02:

A: O validador acusa 1 warning e 2 erros, pois falta a declaração do tipo de documento e a raiz do HTML.

B: O resultado diminui para 1 warning e 1 erro. O validador começa a entender que é um documento HTML, mas a estrutura ainda está incompleta e o conteúdo fora do lugar.

C: O resultado cai para apenas 1 erro. O erro restante acusa a falta do título do documento, que é obrigatório dentro do <head>.

D: Sem erros.

Documentação:

O validador da W3C não apontou erro porque o código não está incorreto. A estrutura básica <html>, <head> e <body> existe para o navegador, ela apenas foi construída automaticamente (implicitamente) pelas regras de estruturação flexível do HTML5, dispensando o desenvolvedor de digitá-las obrigatoriamente naquele contexto específico.

