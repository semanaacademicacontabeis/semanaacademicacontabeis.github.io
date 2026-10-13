# Semana Acadêmica de Ciências Contábeis 2026 — Jekyll

Site responsivo da Semana Acadêmica de Ciências Contábeis 2026 da UDESC, preparado para publicação no GitHub Pages.

## Desenvolvimento local no Windows

Nesta máquina, o ambiente foi configurado com Ruby 3.3, Bundler e as gems do GitHub Pages.

Para iniciar com um clique, execute:

```bat
serve.bat
```

Ou use o terminal:

```bash
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Abra `http://localhost:4000/semana-academia-contabeis/`.

Se o terminal já estava aberto durante a instalação do Ruby, feche-o e abra novamente para atualizar o `PATH`.

## Conteúdo ainda pendente

Antes da publicação oficial, confirme local das atividades, horários de 21 a 23 de outubro, inscrições, comissão organizadora, regras de certificação, contato da organização e logística da visita ao TCE/SC.

## Publicação

O workflow em `.github/workflows/pages.yml` publica automaticamente no GitHub Pages quando há push para `main`.

Site publicado: <https://theospalmer.github.io/semana-academia-contabeis/>

