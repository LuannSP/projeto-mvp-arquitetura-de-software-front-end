# PÁGINA QuickContact

Este projeto modesto é parte do MVP **Arquitetura de Software**.

O objetivo do projeto é ser o COMPONENTE A do projeto de  **Arquitetura de Software** da PUC-RJ.

O COMPONENTE A é um front-end destinado a ser uma página web para lidar com contatos.

## Como executar 

Para iniciar, basta realizar um clone ou download do repositório e abrir o arquivo `index.html`.

---
## Executando via Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução.

Vá até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute o seguinte comando para construir a imagem Docker **(certifique-se de ter permissões adequadas)**:

```
docker build -t quickcontact-front-end .
```

Uma vez que a imagem esteja criada, para iniciar o container, execute o seguinte comando **(certifique-se de ter permissões adequadas)**:

```
docker run -d -p 8080:80 quickcontact-front-end
```

Após o container estar em execução, você pode acessar o Front-End abrindo [http://localhost:5000/#/](http://localhost:5000/#/) no navegador.

### Mais informações sobre Docker

Para mais detalhes e comandos adicionais, consulte a [documentação oficial do Docker](https://docs.docker.com/engine/reference/run/).
