<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <fieldset> 
        <legend><h1> Registrazione utente </h1></legend> 
        <form action="" method="POST" >
            <label for="idnome"> Nome </label>
            <input id="idnome" type="text" name="nome" placeholder="inserisci nome" required> <br>

            <label for="idcognome"> Cognome </label>
            <input id="idcognome" type="text" name="cognome" placeholder="inserisci cognome" required> <br>

            <label for="idemail"> Email </label>
            <input id="idemail" type="email" name="email" placeholder="inserisci email" required> <br>

            <label for="idpassword"> Password </label>
            <input id="idpassword" type="password" name="password" placeholder="inserisci password" required> <br>

            <label for="idsesso"> Sesso </label> <br>
            <input type="radio" id="iduomo" name="sesso" value="M">
            <label for="iduomo">Uomo</label>
            <input type="radio" id="iddonna" name="sesso" value="F">
            <label for="iddonna">Donna</label><br>

            <label for="idcodiceFiscale"> Codice Fiscale </label>
            <input id="idcodiceFiscale" type="text" name="codiceFiscale" placeholder="inserisci codice fiscale" maxlength="13" required> <br>

            <label for="iddataDiNascita"> data di nascita </label>
            <input id="iddataDiNascita" type="date" name="dataDiNascita" min="2000-01-01" max="2023-02-27" required> <br>

            <button type="reset"> Reset  </button>
            <button type="Submit"> Manda  </button>

        </form>
    </fieldset>
</body>

</html>

<!-- su una paina php quando mandiamo un form viene geneato un oggetto di tipo $_Request che continene tutti i dati della richiesta  -->

<?php if(!empty($_REQUEST)) : ?>

<p>
    <?=  $_REQUEST['nome']?>   <br>
    <?=  $_REQUEST['cognome']?>  <br>
    <?=  $_REQUEST['email']?> <br>
    <?=  $_REQUEST['password']?> <br>
    <?=  $_REQUEST['sesso']?> <br>
    <?=  $_REQUEST['codiceFiscale']?> <br>
    <?=  $_REQUEST['dataDiNascita']?> <br>
</p>

<?php ;endif ?>