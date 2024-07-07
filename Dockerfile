# Use uma imagem base do nginx
FROM nginx:alpine

# Copie todos os arquivos do diretório atual para o diretório padrão do nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80 para acessar a aplicação web
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
