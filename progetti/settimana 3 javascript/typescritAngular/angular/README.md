# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


note : 
installazione angular : 
per gestire piu progetti angular con versioni diversi e meglio 
non installare globalmente angular ma solo nella cartella del progetto 
per installare angular nella cartella e non globalmente prendi il comando della docs :
1) npm install -g @angular/cli e rimuvi il -g quindi il risultato sara : npm install @angular/cli
adesso per eseguire angular abbiamo 2 modi :
1) entra nel file package.json e aggiungi :
 "scripts": {
    "generate": "ng new angular"
  },
successivamente per andarlo ad eseguire usa il comandi : npm run generate ;
2) npx ng new angular : questo comando indica node execute , quindi funzionzionera sempre 

3) abilita gli script per angular con il comando : Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser