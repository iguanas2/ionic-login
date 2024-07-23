# Telas do Projeto
## Login
![Login](imagens/Login.jpg)
## Cadastro
![Cadastro](imagens/Cadastro.jpg)
# Projeto de Login em IONIC (área dev)
Esse é meu projeto em ionic e nesse README estarei colocando oque aprendi e oque poderei usar no futuro.
## Criando uma página
```console
ionic g page pages/(nome da página)
```
## CSS global
Utilizando o global.scss é possível fazer uma mudança estética em qualquer parte do código
## Chamando páginas em outras páginas
É possível chamar uma página dentro da outra, alterando o código em (página1).module.ts adicionando o módulo da (página2) e chamando a <(página2)-page> dentro do código HTML da (página1)
## Criando componentes para reutilização
```console
ionic g component components/(nome do componente)
```
após a criação do componente, você pode chamar o código que foi colocado no componente direto no arquivo HTML
**Por exemplo:**
```html
<ion-card>
  <ion-card-header>
    <ion-card-title>Login legal! 🙂</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <ion-item>
      <ion-input aria-label="Email" type= "email" value="seu@email.aqui"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input aria-label="Password" type= "password" value="********"></ion-input>
       </ion-item>
    <ion-button fill="clear" size="full">Esqueci a senha</ion-button>
    <ion-button size="full">Login</ion-button>
    <ion-button size="full" color="tertiary">Cadastro</ion-button>
  </ion-card-content>
</ion-card>
```
Se colocar esse código de login em um componente chamado cartao-login, é possível fazer a reutilização do código dessa forma:
```html
<app-cartao-login></app-cartao-login>
```
**PS:** ao utilizar componentes, também precisa exportar os códigos das CSS;
Se ocorrer algum problema na hora de utilizar componentes, verifique se o componente foi exportado no arquivo de módulo da sua página.

É possível chamar uma página dentro da outra, alterando o código em (página1).module.ts adicionando o módulo da (página2) e chamando a <(página2)-page> dentro do código HTML da (página1)