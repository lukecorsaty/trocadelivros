# Troca de Livros — Desafio 1

Aplicativo de página única, com dados mockados, para encontrar livros usados e propor trocas. O projeto parte do código e da organização do KiOferta fornecido como modelo, adaptados ao tema **Troca de livros**.

**Pergunta que o app responde:** Onde encontro o livro que preciso, em bom estado e com uma troca que vale a pena?

## Integrantes

- Corsaty Souza
- [Nome do(a) integrante 2 — preencher]
- [Nome do(a) integrante 3 — preencher]

## Rodar localmente

Requer Node.js LTS instalado.

```bash
npm install
npm run dev
```

O Vite informa no terminal o endereço local para abrir no navegador. Para gerar a versão estática de produção:

```bash
npm run build
```

## Observações acadêmicas

Os dados de livros, publicadores e usuários de demonstração ficam em `src/js/dadosMockados/`. O formulário de publicação é apenas uma simulação: ele valida os campos e informa o resultado, mas não adiciona livros à lista nem salva o que foi digitado.

**Atenção ao critério do desafio:** o enunciado original pedia incluir a publicação no array com `push`. Nesta versão, esse comportamento foi removido para manter a publicação como simulação; confirmem com a professora se essa simplificação é aceita.

A aplicação não tem backend, banco de dados ou autenticação real. O relatório fica em `docs/relatorio-desafio1.pdf`. Campos dos demais integrantes, divisão real de tarefas, números de commits e dificuldades reais devem ser preenchidos pelo grupo antes da entrega.
