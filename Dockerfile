FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY my_portfolio /usr/share/nginx/html/project

EXPOSE 80

